import React from 'react';

// Description information
const Description = ({product}) => {

    return (
        <div className="card card-body">
            <h4 className="mb-1">Description</h4>
                <p className=" mb-0 txt-right">Brand : {product.brand}</p>
                <p className=" mb-0 txt-right">Model : {product.model}</p>
                <p className=" mb-0 txt-right">Price : {product.price}</p>
                <p className=" mb-0 txt-right">Battery : {product.battery}</p>
                <p className=" mb-0 txt-right">CPU : {product.cpu}</p>
                <p className=" mb-0 txt-right">Colors : {product.colors}</p>
                <p className=" mb-0 txt-right">RAM : {product.ram}</p>
                <p className=" mb-0 txt-right">Os : {product.os}</p>
                <p className=" mb-0 txt-right">Display Resolution : {product.displayResolution}</p>
                <p className=" mb-0 txt-right">Dimentions : {product.dimentions}</p>
                <p className=" mb-0 txt-right">Primary Camera : {product.primaryCamera}</p>
                <p className=" mb-0 txt-right">Secondary Camera : {product.secondaryCamra}</p>
                <p className=" mb-0 txt-right">Weight : {product.weight}</p>
        </div>
     );
}

export default Description;
