// Interface named Seller
export interface Seller {
    id: number;
    name: string;
    rating: number;
    bio?: string;
    readonly establishedYear?: number;
    readonly isActive?: boolean;
}