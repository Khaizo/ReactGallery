import React, { createContext, useEffect, useState } from 'react';

import ApiService from '../services/api.config';

export const ProductsContext = createContext()

// Setup Context for api call and products in the state.
const ProductsContextProvider = ({children}) => {

    const [axios] = useState(ApiService);

    const [products, setProducts] = useState([]);

    // Load datas from API
    useEffect(() => {
        axios.customRequest({
            method : "GET",
            url : "https://front-test-api.herokuapp.com/api/product",
            data : "",
        }).then((result) => {
            setProducts(result.data);
        })
    }, [axios])

    return (
        <ProductsContext.Provider value={{products}} >
            { children }
        </ProductsContext.Provider>
     );
}

export default ProductsContextProvider;
