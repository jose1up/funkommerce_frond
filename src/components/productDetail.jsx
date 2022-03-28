import { useParams } from "react-router"
import { useDispatch, useSelector, useStore } from 'react-redux'
import { useEffect } from "react"
import { Link } from "react-router-dom"
import { getfunkoById } from "../redux/action"

export default function ProductDetail() {
    const { id } = useParams()
    const dispatch = useDispatch()
    var funkoDetail = useSelector(state => state.funko)
    useEffect(() => {
        dispatch(getfunkoById(id))
    }, [dispatch])
    return (
        <div>
            <figure>
                <img src={funkoDetail.image} alt="funko"></img>
                <h2>Name :{funkoDetail.title}</h2>
                <p>Brand : {funkoDetail.BrandId}</p>
                <p>Licence : {funkoDetail.licenceId}</p>
                {/* <p>Category: {funkoDetail.Category.name}</p> */}
                <p>price : {funkoDetail.price}</p>
                <p>Stock : {funkoDetail.stock}</p>
            </figure>
        </div>
    )
}