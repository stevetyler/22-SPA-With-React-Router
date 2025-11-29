import { useParams } from "react-router-dom";

function ProductDetailPage() {
    const params = useParams();
    const productId = params.productId;
    
    return <>
        <h1>Product Detail Page</h1>
        <p> Details about product {productId} will go here.</p>
    </>
}
export default ProductDetailPage;