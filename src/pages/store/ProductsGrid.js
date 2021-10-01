import React, { useEffect, useState } from 'react';

import ProductItem from './ProductItem';
import styles from './ProductsGrid.module.scss';
import { useProducts } from '../../hooks/useProducts';

const ProductsGrid = () => {

    const { products } = useProducts();
    const [searched, setSearched] = useState("");
    const [filteredResults, setFilteredResults] = useState([]);

    // useEffect called whenever the user use the searchbar
    // No refresh while updating data
    useEffect(() => {
        const searchProduct = () => {
            if (searched.trim() !== '') {
                const model = products.filter((item) => {
                    return item.model.toLowerCase().includes(searched.trim().toLowerCase())
                })
                const brand = products.filter((item) => {
                    return item.brand.toLowerCase().includes(searched.trim().toLowerCase())
                })
                const filteredData = Array.from(new Set(model.concat(brand)))
                setFilteredResults(filteredData)
            }
            else {
                setFilteredResults(products)
            }
        }
        searchProduct()
    }, [products, searched])

    return (
        <div className={styles.p__container}>
            <div className="row">
                <div className="col-sm-8">
                    <div className="py-3">
                        You currently have {searched.length >= 1 ? filteredResults.length : products.length } products displayed
                    </div>
                </div>
                <div className="col-sm-4">
                    <div className="form-group">
                        <input  onChange={(input) => setSearched(input.target.value)} type="text" name="searched" placeholder="Search product" className="form-control" id=""/>
                    </div>
                </div>
            </div>
            <div className={styles.p__grid}>

            {searched.length >= 1 ? (
                    filteredResults.map((product) => {
                        return (
                            <ProductItem key={product.id} product={product}/>
                        )
                    })
                ) :
                    (products.map(product => (
                        <ProductItem key={product.id} product={product}/>
                    )))
                }

            </div>
            <div className={styles.p__footer}>

            </div>
        </div>
     );
}

export default ProductsGrid;
