export default function DynamicProductDetails({params}:{
    params:{productId:string};
}) {
    return (
        <>
            Details about product {params.productId}
        </>
    )
}