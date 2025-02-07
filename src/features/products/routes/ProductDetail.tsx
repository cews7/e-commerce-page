import { useParams } from 'react-router-dom'
import { ProductImageCarousel } from '../components/ProductImageCarousel'
import { ProductInfoCard } from '../components/ProductInfoCard'
import { ProductQuantityButton } from '../components/ProductQuantityButton'
import { ProductPurchaseButton } from '../components/ProductPurchaseButton'

export const ProductDetail = () => {
  const { id } = useParams()
    
  return (
    <div>
      {isNaN(Number(id)) ? (
        <div>Invalid product ID</div>
      ) : (
        <div>
          <ProductImageCarousel />
          <ProductInfoCard />
          <ProductQuantityButton />
          <ProductPurchaseButton />
        </div>
      )}
    </div>
  )
}