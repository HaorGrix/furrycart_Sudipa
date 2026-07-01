import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Star } from 'lucide-react';
import { Product } from '../data/mockData';
import { useAppContext } from '../context/AppContext';
import toast from 'react-hot-toast';
import './ProductCard.css';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, wishlist, toggleWishlist } = useAppContext();
  const isWishlisted = wishlist.includes(product.id);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product, 1, false);
    toast.success(`${product.name} added to cart`);
  };

  const handleToggleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    toggleWishlist(product.id);
    if (!isWishlisted) {
      toast.success(`${product.name} added to wishlist`);
    } else {
      toast('Removed from wishlist', { icon: 'ℹ️' });
    }
  };
  return (
    <div className="card product-card">
      <div className="product-image-container">
        <Link to={`/product/${product.id}`}>
          <img src={product.image} alt={product.name} className="product-image" />
        </Link>
        <button className={`wishlist-btn ${isWishlisted ? 'active' : ''}`} onClick={handleToggleWishlist}>
          <Heart size={20} fill={isWishlisted ? 'var(--primary-color)' : 'none'} color={isWishlisted ? 'var(--primary-color)' : 'currentColor'} />
        </button>
        {product.isBestSeller && <span className="badge best-seller">Best Seller</span>}
        {product.price > 30 && <span className="badge fast-delivery" style={{ top: product.isBestSeller ? '35px' : '10px', backgroundColor: '#0284c7', color: 'white' }}>🚀 Fast Delivery</span>}
      </div>
      
      <div className="product-info">
        <span className="product-brand">{product.brand}</span>
        <Link to={`/product/${product.id}`} className="product-name">
          {product.name}
        </Link>
        
        <div className="product-rating">
          <Star size={16} fill="var(--primary-color)" color="var(--primary-color)" />
          <span>{product.rating}</span>
          <span className="review-count">({product.reviews})</span>
        </div>
        
        <div className="product-price-row">
          <div>
            {product.isDeal && product.discountPct ? (
              <>
                <span className="product-price" style={{ color: 'var(--error-color)' }}>
                  ${(product.price * (1 - product.discountPct / 100)).toFixed(2)}
                </span>
                <span className="original-price" style={{ textDecoration: 'line-through', fontSize: '0.85rem', color: 'var(--text-light)', marginLeft: '8px' }}>
                  ${product.price.toFixed(2)}
                </span>
              </>
            ) : (
              <span className="product-price">${product.price.toFixed(2)}</span>
            )}
          </div>
          <button className="btn btn-primary add-to-cart-btn" onClick={handleAddToCart}>
            <ShoppingCart size={18} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
