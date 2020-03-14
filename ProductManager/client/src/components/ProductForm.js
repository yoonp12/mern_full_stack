import React, { useState } from 'react'
import axios from 'axios'
import { set } from 'mongoose'
import ProductList from './ProductList'


const ProductForm = ({changeHandler, product, setProduct, setProductList, productList, submitState,setSubmitState}) => {

    const onSubmitHandler = (e) => {
        e.preventDefault()
        axios.post('http://localhost:8000/api/products/new', product) 
            .then(res=> {
                setSubmitState(!submitState)
                setProduct(res)
                // productList.push(product)
                // setProductList(productList)
            })
            .catch(err=> console.log("Error: ", err))
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Product Title: </label>
                <input type="text" name="title"  onChange={changeHandler}/>
            </p>
            <p>
                <label>Price: </label>
                <input type="text" name="price" onChange={changeHandler} />
            </p>
            <p>
                <label>Description: </label>
                <input type="text" name="description"  onChange={changeHandler}/>
            </p>
            <input type="submit" />
        </form>
    )
}

export default ProductForm