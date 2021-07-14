import React, { useEffect, useState } from 'react';

import { Grid } from '@material-ui/core';
import ProductComponent from '../components/ProductComponent';
import { getProducts } from '../services/products.service';


type Props = {
    addToCart: (product:Products.Product) => void
}

const HomePage: React.FC<Props> = (props: Props) => {
    const [productsList, setProductList] = useState<Products.Product[]>([]);

    const getProductList = async () => {
        const products = await getProducts();

        setProductList(products);
    }

    const RenderProduct = (product: Products.Product) => {
        return (
            <Grid key={product.id} item md={3}>
                <ProductComponent 
                id={product.id}
                title={product.title}
                price={product.price}
                description={product.description}
                category={product.category}
                image={product.image}
                addToCart={props.addToCart}
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
