export type BillingMode = "one-time" | "monthly";

export type PricingTier = {
    name: string;
    featured: boolean;
    oneTime: {
        price: string;
        save: string | null;
        tagline: string;
        features: readonly string[];
        delivery: string;
    };
    monthly: {
        price: string;
        save: string | null;
        tagline: string;
        features: readonly string[];
        delivery: string;
    };
};

export type ServiceLineItem = {
    name: string;
    price: string;
    billing: BillingMode;
};

export type ServiceCategory = {
    title: string;
    description: string;
    price: string;
    items: readonly ServiceLineItem[];
};

export type ResolvedPackage = {
    name: string;
    featured: boolean;
    price: string;
    priceSuffix?: string;
    save: string | null;
    tagline: string;
    features: readonly string[];
    delivery: string;
    billingMode: BillingMode;
};

export function resolvePackage(tier: PricingTier, mode: BillingMode): ResolvedPackage {
    const plan = mode === "monthly" ? tier.monthly : tier.oneTime;
    return {
        name: tier.name,
        featured: tier.featured,
        price: plan.price,
        priceSuffix: mode === "monthly" ? "/mo" : undefined,
        save: plan.save,
        tagline: plan.tagline,
        features: plan.features,
        delivery: plan.delivery,
        billingMode: mode,
    };
}

export function filterServiceCategories(
    categories: readonly ServiceCategory[],
    mode: BillingMode
): ServiceCategory[] {
    return categories
        .map((category) => ({
            ...category,
            items: category.items.filter((item) => item.billing === mode),
        }))
        .filter((category) => category.items.length > 0);
}

export function formatPackagePrice(pkg: ResolvedPackage): string {
    if (pkg.price === "Custom") return "Custom";
    return `${pkg.price}${pkg.priceSuffix ?? ""}`;
}

export const BILLING_MODE_LABELS: Record<BillingMode, { label: string; short: string; description: string }> = {
    "one-time": {
        label: "One-time",
        short: "Project",
        description: "Fixed-scope builds and launches",
    },
    monthly: {
        label: "Monthly",
        short: "Retainer",
        description: "Ongoing care, ops, and iteration",
    },
};
