import React, { useEffect, useState } from 'react';

import { Grid } from '@material-ui/core';
import ProductComponent from '../components/ProductComponent';
import { getProducts } from '../services/products.service';

const HomePage: React.FC = () => {
    const [productsList, setProductList] = useState<Products.Product[]>([]);

    const getProductList = async () => {
        const products = await getProducts();

        setProductList(products);
    }

    const RenderProduct = (product: Products.Product) => {
        return (
            <Grid item md={3}>
                <ProductComponent 
                id={product.id}
                title={product.title}
                price={product.price}
                description={product.description}
                category={product.category}
                image={product.image}
                />
            </Grid>
            );
    }

    useEffect(() => {
        getProductList();
    }, []);


 

  return (
    <Grid container spacing={4} justify="space-around">
        {productsList.map(product => RenderProduct(product))}
    </Grid>
  );
}

export default HomePage;
