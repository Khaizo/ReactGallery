import React from 'react';
import { Link } from 'react-router-dom';

import { formatNumber } from '../../helpers/utils';

const ProductItem = ({product}) => {

    return (
        <div className="card card-body">
            <img style={{display: "block", margin: "0 auto 10px", maxHeight: "200px"}} className="img-fluid"
            src={product.imgUrl} alt=""/>
            <p>{product.model}</p>
            <p>{product.brand}</p>
            <h3 className="text-left">{formatNumber(product.price)}</h3>
            <div className="text-right">
                <Link className="btn btn-dark btn-sm mr-2" to={`/products/${product.id}`} >Details</Link>
            </div>
        </div>
     );
}

export default ProductItem;
