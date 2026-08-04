"use client";

import { useEffect, useState } from "react";

type GeoState = {
    countryCode: string | null;
    isIndia: boolean;
    isLoading: boolean;
};

let cachedCountryCode: string | null = null;
let fetchPromise: Promise<string> | null = null;

async function fetchCountryCode(): Promise<string> {
    if (cachedCountryCode) return cachedCountryCode;

    if (!fetchPromise) {
        fetchPromise = fetch("https://ipapi.co/json/")
            .then((res) => res.json())
            .then((data) => data.country_code ?? "US")
            .catch(() => "US")
            .then((code) => {
                cachedCountryCode = code;
                return code;
            });
    }

    return fetchPromise;
}

function getCountryOverride(): string | null {
    if (typeof window === "undefined") return null;
    const override = new URLSearchParams(window.location.search).get("country");
    return override ? override.toUpperCase() : null;
}

export function useUserCountry(): GeoState {
    const override = getCountryOverride();
    const [countryCode, setCountryCode] = useState<string | null>(
        override ?? cachedCountryCode
    );
    const [isLoading, setIsLoading] = useState(
        override ? false : cachedCountryCode === null
    );

    useEffect(() => {
        const paramOverride = getCountryOverride();
        if (paramOverride) {
            setCountryCode(paramOverride);
            setIsLoading(false);
            return;
        }

        if (cachedCountryCode) return;

        let active = true;
        fetchCountryCode().then((code) => {
            if (active) {
                setCountryCode(code);
                setIsLoading(false);
            }
        });

        return () => {
            active = false;
        };
    }, []);

    return {
        countryCode,
        isIndia: countryCode === "IN",
        isLoading,
    };
}
