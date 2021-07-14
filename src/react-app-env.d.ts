/// <reference types="react-scripts" />

declare namespace Products {
    export interface Product {
        id: number;
        title: string;
        price: number;
        description: string;
        category: string;
        image: string;
    }

}