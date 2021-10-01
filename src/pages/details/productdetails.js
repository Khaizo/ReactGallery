import React, { useEffect, useState } from 'react';
import ApiService from '../../services/api.config';

import Layout from '../../components/Layout';

import { useParams, useLocation } from 'react-router-dom';
import Description from './description';
import Actions from './actions';

const ProductDetails = () => {

    const [axios] = useState(ApiService);
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

    const { id } = useParams();
    const [product, setProduct] = useState({});
    const  location = useLocation();

    // Set product details + Loading
    useEffect(() => {

        setHasError(false);

        const getProductDetails = async () => {
            axios.customRequest({
                method : "GET",
                url : `https://front-test-api.herokuapp.com/api/product/${id}`,
                data : "",
            }).then((result) => {
                setProduct(result.data);
                setIsLoading(false);
            }).catch(() => {
                setHasError(true)
                setIsLoading(false);
            })
        };
        try {
            getProductDetails();
        } catch (error) {
            setHasError(true);
        }
      }, [axios, id, location, setProduct]);

      // Component
      return (
            <Layout title="Store" description="This is the Store page" >
            <div>
            {hasError && <div className="text-center mt-5">
                        <h1>{product.model}</h1>
                        <p>Something went wrong. Please try again later</p>
                    </div>}
            {isLoading &&
            (
                <div className="text-center mt-5">
                <h1>{product.model}</h1>
                <p>Is Loading...</p>
            </div>
            )}
            {((hasError === false && isLoading === false) &&
                <div>
                    <div className="text-center mt-5">
                        <h1>{product.model}</h1>
                        <p>We currently have displayed our {product.brand} {product.model}</p>
                    </div>
                    <div className="row no-gutters justify-content-center">
                        <div className="col-sm-5 p-3">
                            <div className="card card-body">
                                <img
                                    alt={product.model}
                                    style={{margin: "0 auto"}}
                                    src={product.imgUrl} className="img-fluid d-block"/>
                            </div>
                        </div>
                        <div className="col-sm-7 p-3">
                            <Description product={product}/>
                            <Actions product={product}/>
                        </div>
                    </div>
                </div>
            )}
            </div>
            </Layout>
     );
}

export default ProductDetails;
