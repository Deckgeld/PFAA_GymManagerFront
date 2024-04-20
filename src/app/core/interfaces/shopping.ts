export interface Shopping {
    id: number;
    createdOn: string;
    product: string;
    typeProduct: string
    user: string;
    member: string;
}

export interface ShoppingEdit {
    product: string;
    typeProduct: string;
    user: string;
    member: string;
}
