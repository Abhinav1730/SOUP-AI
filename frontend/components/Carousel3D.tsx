"use client";

import { useCallback, useEffect, useRef, useState, type ReactNode, type TouchEvent } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const DEFAULT_ROTATE_MS = 0.85;
const SWIPE_THRESHOLD = 48;

const DEFAULT_RADIUS = { sm: 210, md: 270, lg: 340 };

function useCarouselRadius(breakpoints = DEFAULT_RADIUS) {
    const [radius, setRadius] = useState(breakpoints.lg);

    useEffect(() => {
        const update = () => {
            if (window.innerWidth < 640) setRadius(breakpoints.sm);
            else if (window.innerWidth < 1024) setRadius(breakpoints.md);
            else setRadius(breakpoints.lg);
        };

        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, [breakpoints.lg, breakpoints.md, breakpoints.sm]);

    return radius;
}

export type Carousel3DProps<T> = {
    items: readonly T[];
    holdMs: number;
    rotateMs?: number;
    sceneClassName?: string;
    radiusBreakpoints?: { sm: number; md: number; lg: number };
    getKey: (item: T) => string;
    getLabel: (item: T) => string;
    renderCard: (item: T, index: number, isActive: boolean) => ReactNode;
};

export default function Carousel3D<T>({
    items,
    holdMs,
    rotateMs = DEFAULT_ROTATE_MS,
    sceneClassName = "",
    radiusBreakpoints = DEFAULT_RADIUS,
    getKey,
    getLabel,
    renderCard,
}: Carousel3DProps<T>) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const prefersReducedMotion = useReducedMotion();
    const radius = useCarouselRadius(radiusBreakpoints);
    const touchStart = useRef<{ x: number; y: number } | null>(null);
    const resumeTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

    const count = items.length;
    const angleStep = 360 / count;
    const stepDuration = holdMs + (prefersReducedMotion ? 350 : rotateMs * 1000);

    const goTo = useCallback(
        (index: number) => {
            if (count === 0) return;
            setActiveIndex(((index % count) + count) % count);
        },
        [count]
    );

    const goNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);
    const goPrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);

    const pauseTemporarily = useCallback(() => {
        setIsPaused(true);
        if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
        resumeTimeout.current = setTimeout(() => setIsPaused(false), 2500);
    }, []);

    useEffect(() => {
        if (isPaused || count === 0) return;

        const intervalId = window.setInterval(() => {
            setActiveIndex((current) => (current + 1) % count);
        }, stepDuration);

        return () => window.clearInterval(intervalId);
    }, [count, isPaused, stepDuration]);

    useEffect(
        () => () => {
            if (resumeTimeout.current) clearTimeout(resumeTimeout.current);
        },
        []
    );

    const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
        const touch = event.touches[0];
        touchStart.current = { x: touch.clientX, y: touch.clientY };
        setIsPaused(true);
    };

    const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
        const start = touchStart.current;
        touchStart.current = null;

        if (!start) {
            pauseTemporarily();
            return;
        }

        const touch = event.changedTouches[0];
        const deltaX = touch.clientX - start.x;
        const deltaY = touch.clientY - start.y;

        if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > SWIPE_THRESHOLD) {
            if (deltaX < 0) goNext();
            else goPrev();
        }

        pauseTemporarily();
    };

    if (count === 0) return null;

    const ring = (
        <motion.div
            className="services-carousel-ring"
            style={{ transformStyle: "preserve-3d" }}
            animate={{ rotateY: -activeIndex * angleStep }}
            transition={{
                duration: prefersReducedMotion ? 0.2 : rotateMs,
                ease: [0.32, 0.72, 0, 1],
            }}
        >
            {items.map((item, i) => (
                <div
                    key={getKey(item)}
                    className="services-carousel-slot"
                                style={{
                                    transform: `translate(-50%, -50%) rotateY(${i * angleStep}deg) translateZ(${radius}px)`,
                                }}
                >
                    {renderCard(item, i, i === activeIndex)}
                </div>
            ))}
        </motion.div>
    );

    return (
        <div className="carousel-3d-root">
            <div className="carousel-3d-stage">
                <div className="carousel-3d-controls">
                    <button
                        type="button"
                        onClick={() => {
                            goPrev();
                            pauseTemporarily();
                        }}
                        className="carousel-3d-nav"
                        aria-label="Previous slide"
                    >
                        <ChevronLeft size={18} />
                    </button>
                    <button
                        type="button"
                        onClick={() => {
                            goNext();
                            pauseTemporarily();
                        }}
                        className="carousel-3d-nav"
                        aria-label="Next slide"
                    >
                        <ChevronRight size={18} />
                    </button>
                </div>

                <div
                    className={`services-carousel-scene ${sceneClassName}`}
                    onMouseEnter={() => setIsPaused(true)}
                    onMouseLeave={() => setIsPaused(false)}
                    onTouchStart={handleTouchStart}
                    onTouchEnd={handleTouchEnd}
                >
                    {prefersReducedMotion ? (
                        <div className="flex justify-center px-2 sm:px-4 min-h-[240px] items-center">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeIndex}
                                    initial={{ opacity: 0, y: 14 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -14 }}
                                    transition={{ duration: 0.35 }}
                                >
                                    {renderCard(items[activeIndex], activeIndex, true)}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    ) : (
                        ring
                    )}

                    <div
                        className="pointer-events-none absolute inset-x-0 bottom-0 h-20 sm:h-24 bg-gradient-to-t from-bg-primary via-bg-primary/60 to-transparent"
                        aria-hidden
                    />
                </div>
            </div>

            <div className="flex items-center justify-center gap-2 mt-6 sm:mt-8 px-2">
                {items.map((item, i) => (
                    <button
                        key={getKey(item)}
                        type="button"
                        onClick={() => {
                            goTo(i);
                            pauseTemporarily();
                        }}
                        aria-label={`Show ${getLabel(item)}`}
                        aria-current={i === activeIndex ? "true" : undefined}
                        className={`h-2 rounded-full transition-all ${
                            i === activeIndex ? "w-6 bg-accent" : "w-2 bg-white/20 hover:bg-white/35"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
}
