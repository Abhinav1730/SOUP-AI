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

export function useUserCountry(): GeoState {
    const [countryCode, setCountryCode] = useState<string | null>(cachedCountryCode);
    const [isLoading, setIsLoading] = useState(cachedCountryCode === null);

    useEffect(() => {
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
