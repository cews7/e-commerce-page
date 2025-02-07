import { useParams } from 'react-router-dom'

export const ProductDetail = () => {
  const { id } = useParams()
  
  return (
    <div>
      {isNaN(Number(id)) ? (
        <div>Invalid product ID</div>
      ) : (
        <div>Product {id} details</div>
      )}
    </div>
  )
}