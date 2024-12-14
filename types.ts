export interface IProduct {
    name: string;
    price: string;
    description: string;
    tokopediaLink: string;
    shopeeLink: string;
}

export interface IReview {
    id: number;
    author: string;
    description: string;
    stars: number;
    image: string;
}