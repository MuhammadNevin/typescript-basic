// enum
export enum CustomerType {
    REGULAR = "REGULAR",
    SILVER = "SILVER",
    GOLD = "GOLD",
    PLATINUM = "PLATINUM",
}

export type Customer = {
    id: number;
    name: string;
    type: CustomerType;
}