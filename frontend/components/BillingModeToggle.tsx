"use client";

import type { BillingMode } from "@/lib/pricing";
import { BILLING_MODE_LABELS } from "@/lib/pricing";

type BillingModeToggleProps = {
    mode: BillingMode;
    onChange: (mode: BillingMode) => void;
    className?: string;
};

export default function BillingModeToggle({ mode, onChange, className = "" }: BillingModeToggleProps) {
    return (
        <div className={`pricing-billing-toggle ${className}`} role="tablist" aria-label="Pricing billing mode">
            {(["one-time", "monthly"] as const).map((option) => {
                const isActive = mode === option;
                const meta = BILLING_MODE_LABELS[option];

                return (
                    <button
                        key={option}
                        type="button"
                        role="tab"
                        aria-selected={isActive}
                        onClick={() => onChange(option)}
                        className={`pricing-billing-toggle__option ${isActive ? "is-active" : ""}`}
                    >
                        <span className="pricing-billing-toggle__label">{meta.label}</span>
                        <span className="pricing-billing-toggle__hint">{meta.description}</span>
                    </button>
                );
            })}
        </div>
    );
}
