import React from 'react';
import Layout from '../../components/Layout';

import { useProducts } from '../../hooks/useProducts';
import ProductsGrid from './ProductsGrid';

// HomePage / Store Component
const Store = () => {

    const { products } = useProducts();

    return (
        <Layout title="Store" description="This is the Store page" >
            <div >
                <div className="text-center mt-5">
                    <h1>Welcome to our Store</h1>
                    <p>We currently have {products.length} products in our database</p>
                </div>
                <ProductsGrid/>
            </div>
        </Layout>
     );
}

export default Store;
