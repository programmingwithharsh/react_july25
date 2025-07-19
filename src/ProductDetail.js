import { useParams } from "react-router-dom";

function ProductDetail() {
    let { id } = useParams();

    return <>
        <h1>Product Detail Component, id is {id}</h1></>
}

export default ProductDetail;