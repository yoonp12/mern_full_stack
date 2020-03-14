import React, { useEffect, useState } from 'react'
import { Link, Router } from '@reach/router'
import axios from 'axios'


const ProductList = ({productList, setSubmitState, submitState, deleteHandler}) => {
    console.log("LIST INSIDE PROD LIST: ", productList)
    return(
            <table className="table table-striped mt-5">
                <thead>
                    <tr>
                        <th scope="row">Product Name:</th>
                        <td>Action:</td>
                    </tr>
                </thead>
                <tbody>
                    {productList.map((product, idx) => 
                    <tr key={idx}>
                        <td scope="row" className="p-4"><Link to={`/products/${product._id}`}>{product.title}</Link></td>
                        <td><button className="ml-4" onClick={()=>deleteHandler(product._id)}>Delete</button></td>
                    </tr>
                    )}
                </tbody>
            </table>
    )
}

export default ProductList