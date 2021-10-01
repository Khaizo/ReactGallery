import React, { useEffect, useState } from 'react';
import ApiService from '../../services/api.config';
import { useCart } from '../../hooks/useCart';

const Actions = ({product}) => {

    const [color, setColor] = useState('0');
    const [storage, setStorage] = useState('0')
    const [options, setOptions] = useState({
        id : product.id,
        colorCode : color,
        storageCode : storage
    });

    const { addProduct } = useCart();
    const [axios] = useState(ApiService);

    if (product.id !== options.id) setOptions({...options, id : product.id})

    // Save when button Add to Cart is clicked. Send datas to the API
    const saveCartDb = async () => {
            axios.customRequest({
                method : "POST",
                url : `https://front-test-api.herokuapp.com/api/cart`,
                data : options,
            }).then((result) => {
                if (result.data.count === 1)
                    addProduct(product);
            }).catch((error) => {
                console.log(error)
            })
        };

        // Setup options for API Query
        useEffect(() => {
            setOptions(options => ({
                ...options,
                colorCode: color,
                storageCode : storage
            }))
        }, [color, storage])

    return (
        <div className="card card-body">
            <h4 className="mb-1">Actions</h4>
            <hr className="my-4"/>
            <div className="text-center">

            {(product.colors && product.internalMemory) && (
              <label>
                   Choose your color :
                  <select value={options.colors} onChange={(selected) => setColor(selected.target.value)} defaultValue={product.colors[0]}>
                  {product.colors.map((color, indx) =>
                    <option key={indx} value={indx}>{color}</option>
                    )};
                  </select>
                 </label>)}
                 <hr className="my-4"/>
            {(product.colors && product.internalMemory) && (
              <label>
                   Choose your Internal Storage :
                  <select value={options.colors} onChange={(selected) => setStorage(selected.target.value)} defaultValue={product.colors[0]}>
                  {product.internalMemory.map((color, indx) =>
                    <option key={indx} value={indx}>{color}</option>
                    )};
                  </select>
                 </label>)}
            </div>
            <hr className="my-4"/>

            <button type="button" className="btn btn-primary" onClick={() => {saveCartDb()}}>Add to Cart</button>
        </div>
     );
}

export default Actions;
