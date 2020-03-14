import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, navigate } from '@reach/router'


const Detail = ({id, deleteHandler,setSubmitState,submitState}) => {

    const [detail, setDetail] = useState({
        title: "",
        price: "",
        description: ""
    })

    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
        .then(res => {
            // detail.push(res.data.product)
            setDetail(res.data.product)
        });
    }, [])

    const updateHandler = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/products/edit/${id}`, detail)
            .then(res => {
                setSubmitState(!submitState)
                navigate("/")
            })
            .catch(err=> console.log("Error: ", err))
    }

    const editHandler = (e) => {
        setDetail({
            ...detail,
            [e.target.name] : e.target.value
        })
    }

    return(
        <div>
        <form onSubmit={updateHandler}>
            <table className="table table-striped">
                <thead>
                    <tr>
                    <th></th>
                    <td>Product Information</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <th scope="row">Title:</th>
                    <td><input text="text" name="title" value={detail.title || ''} onChange={editHandler}/></td>
                    </tr>
                    <tr>
                    <th scope="row">Price:</th>
                    <td><input text="text" name="price" value={detail.price || ''} onChange={editHandler}/></td>
                    </tr>
                    <tr>
                    <th scope="row">Description:</th>
                    <td><input text="text" name="description" value={detail.description || ''} onChange={editHandler}/></td>
                    </tr>
                </tbody>
            </table>
            <input type="submit" />
        </form>
        <div className="m-3 d-flex justify-content-center">
            <button className="mt-3 m-3" onClick={()=>deleteHandler(detail._id)} type="submit"><Link to="/">Delete</Link></button>
            <button className="mt-3 m-3" type="submit"><Link to="/">Go Back</Link></button>
        </div>
        </div>
    )
}
export default Detail