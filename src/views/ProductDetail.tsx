import React, { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import NoResultComponent from '../components/NoResultComponent';

import ProductDetailComponent from "../components/ProductDetailComponent";
import { getProductById } from '../services/products.service';


const ProductDetail: React.FC = () => {
  const { id: productId } = useParams<{id: string}>();

  const [productDetail, setProductDetail] = useState<Products.Product >();

  const getProductList = async () => {
      const product = await getProductById(parseFloat(productId));

      setProductDetail((product as Products.Product));
  }

  useEffect(() => {
      getProductList();
  }, []);


  return productDetail ? 
          <ProductDetailComponent
          id={productDetail.id}
          title={productDetail.title}
          price={productDetail.price}
          description={productDetail.description}
          category={productDetail.category}
          image={productDetail.image}
          /> : <NoResultComponent/>;
}

export default ProductDetail;
