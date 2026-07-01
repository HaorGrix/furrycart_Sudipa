import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockProducts } from '../data/mockData';
import ProductCard from '../components/ProductCard';
import { ShoppingCart, Heart, Star, Package, RefreshCw, CheckCircle2, GitCompare } from 'lucide-react';
import { useAppContext } from '../context/AppContext';
import toast from 'react-hot-toast';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = mockProducts.find(p => p.id === id);
  const [quantity, setQuantity] = useState(1);
  const [isSubscribed, setIsSubscribed] = useState(false);
  
  const { addToCart, wishlist, toggleWishlist, compareList, toggleCompare } = useAppContext();
  const isWishlisted = product ? wishlist.includes(product.id) : false;
  const isCompared = product ? compareList.includes(product.id) : false;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product, quantity, isSubscribed);
      toast.success(`${quantity}x ${product.name} added to cart`);
    }
  };

  const handleToggleWishlist = () => {
    if (product) {
      toggleWishlist(product.id);
      if (!isWishlisted) {
        toast.success(`${product.name} added to wishlist`);
      } else {
        toast('Removed from wishlist', { icon: 'ℹ️' });
      }
    }
  };

  const handleToggleCompare = () => {
    if (product) {
      toggleCompare(product.id);
      if (!isCompared) {
        toast.success(`${product.name} added to compare`);
      } else {
        toast('Removed from compare', { icon: 'ℹ️' });
      }
    }
  };

  if (!product) {
    return (
      <div className="container" style={{ padding: '100px 20px', textAlign: 'center' }}>
        <h2>Product not found</h2>
        <Link to="/" className="btn btn-primary" style={{ marginTop: '20px' }}>Return to Home</Link>
      </div>
    );
  }

  const relatedProducts = mockProducts
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  return (
    <div className="product-detail-page">
      <div className="container">
        {/* Breadcrumb */}
        <div className="breadcrumb">
          <Link to="/">Home</Link> &gt; <Link to={`/category/${product.category}`}>{product.category}</Link> &gt; <span>{product.name}</span>
        </div>

        <div className="product-detail-main">
          {/* Image Gallery */}
          <div className="product-gallery">
            <img src={product.image} alt={product.name} className="main-image" />
            <div className="thumbnail-list">
              <img src={product.image} alt="Thumbnail 1" className="thumbnail active" />
              <img src={product.image} alt="Thumbnail 2" className="thumbnail" />
              <img src={product.image} alt="Thumbnail 3" className="thumbnail" />
            </div>
          </div>

          {/* Product Info */}
          <div className="product-info-panel">
            <span className="product-brand">{product.brand}</span>
            <h1 className="product-title">{product.name}</h1>
            
            <div className="product-rating-row">
              <div className="rating">
                <Star size={18} fill="var(--primary-color)" color="var(--primary-color)" />
                <span>{product.rating}</span>
                <span className="reviews">({product.reviews} reviews)</span>
              </div>
              <span className="stock-status">
                <CheckCircle2 size={16} color="var(--success-color)" /> In Stock ({product.stock})
              </span>
            </div>

            <div className="product-price-large">
              ${product.price.toFixed(2)}
            </div>

            <p className="product-description">{product.description}</p>

            {/* Pet Compatibility */}
            <div className="compatibility-box">
              <h3>Suitable for:</h3>
              <div className="tags">
                {product.suitableFor.map(tag => (
                  <span key={tag} className="tag">{tag}</span>
                ))}
              </div>
            </div>

            {/* Purchase Options */}
            <div className="purchase-options">
              {product.subscriptionEligible && (
                <div className="subscription-box">
                  <label className="radio-label">
                    <input 
                      type="radio" 
                      name="purchaseType" 
                      checked={!isSubscribed} 
                      onChange={() => setIsSubscribed(false)} 
                    />
                    <span>One-time purchase: ${product.price.toFixed(2)}</span>
                  </label>
                  <label className="radio-label">
                    <input 
                      type="radio" 
                      name="purchaseType" 
                      checked={isSubscribed} 
                      onChange={() => setIsSubscribed(true)} 
                    />
                    <span>
                      <strong>Subscribe & Save 15%:</strong> ${(product.price * 0.85).toFixed(2)}
                      <span className="delivery-freq">Deliver every 30 days</span>
                    </span>
                  </label>
                </div>
              )}

              <div className="action-row">
                <div className="quantity-selector">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
                  <span>{quantity}</span>
                  <button onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
                
                <button className="btn btn-primary add-to-cart-large" onClick={handleAddToCart}>
                  <ShoppingCart size={20} /> Add to Cart
                </button>
                
                <button className={`btn btn-outline wishlist-large ${isWishlisted ? 'active' : ''}`} onClick={handleToggleWishlist} title="Wishlist">
                  <Heart size={20} fill={isWishlisted ? 'var(--primary-color)' : 'none'} color={isWishlisted ? 'var(--primary-color)' : 'currentColor'} />
                </button>

                <button className={`btn btn-outline wishlist-large ${isCompared ? 'active' : ''}`} onClick={handleToggleCompare} title="Compare">
                  <GitCompare size={20} color={isCompared ? 'var(--primary-color)' : 'currentColor'} />
                </button>
              </div>
            </div>

            {/* Features */}
            <div className="product-features">
              <div className="feature">
                <Package size={24} color="var(--primary-color)" />
                <div>
                  <h4>Free Shipping</h4>
                  <p>On orders over $49</p>
                </div>
              </div>
              <div className="feature">
                <RefreshCw size={24} color="var(--primary-color)" />
                <div>
                  <h4>Easy Returns</h4>
                  <p>30-day money back</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="related-products section">
            <h2 className="section-title">Customers Also Bought</h2>
            <div className="product-grid">
              {relatedProducts.map(rp => (
                <ProductCard key={rp.id} product={rp} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;
