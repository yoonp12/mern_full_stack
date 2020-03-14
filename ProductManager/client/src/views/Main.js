import React, { useEffect, useState } from 'react'
import ProductForm from '../components/ProductForm'
import ProductList from '../components/ProductList'
import Detail from './Detail'
import { Router } from '@reach/router'
import axios from 'axios'

const Main = (props) => {
    const [productList, setProductList] = useState([])
    const [submitState, setSubmitState] = useState(false)

    const [product, setProduct] = useState({
        title: "",
        price: "",
        description: ""
    })

    const changeHandler = (e) => {
        setProduct({
            ...product,
            [e.target.name] : e.target.value
        })
    }

    const deleteHandler = (id) => {
        console.log("delete")
        axios.delete(`http://localhost:8000/api/products/delete/${id}`) 
            .then(res=> {
                setSubmitState(!submitState)
            })
            .catch(err=> console.log("Error: ", err))
    }

    useEffect(() => {
        console.log("GRABBING ALL PRODS")
        axios.get('http://localhost:8000/api/products')
            .then(res => {
                setProductList(res.data.products)
            });
    }, [submitState])
    
    return(
        <div>
            <ProductForm product={product} setProductList={setProductList} changeHandler={changeHandler} setProduct={setProduct} productList={productList} submitState={submitState} setSubmitState={setSubmitState} />
            <Router>
                <ProductList path="/" deleteHandler={deleteHandler} productList={productList} submitState={submitState} setSubmitState={setSubmitState} setProductList={setProductList} />
                <Detail path="products/:id" submitState={submitState} setSubmitState={setSubmitState} deleteHandler={deleteHandler} setProduct={setProduct} changeHandler={changeHandler} product={product}/>
            </Router>
        </div>
    )
}

export default Main