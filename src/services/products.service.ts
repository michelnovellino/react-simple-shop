import http from './base.service';

const resource = 'products'

export async function getProducts(): Promise<Products.Product[]>{
    try {
        const { data } = await http.get(resource);

        return data;
    } catch (error) {
        return [];
    }
}

export async function getProductById(id: number): Promise<Products.Product | {}>{
    try {
        const { data } = await http.get(`${resource}/${id}`);

        return data;
    } catch (error) {
        return {};
    }
}