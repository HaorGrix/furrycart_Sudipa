import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { mockProducts, mockReviews } from '../data/mockData';
import ProductCard from '../components/ProductCard';
import { ChevronLeft, ChevronRight, Star, Quote, Award, Sparkles, ShoppingBag, Download, ArrowRight, ShieldCheck, HeartHandshake, Dog, Cat, Bird, Fish, Rabbit } from 'lucide-react';
import './Home.css';

const Home = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const bestSellers = mockProducts.filter(p => p.isBestSeller).slice(0, 4);
  const vetRecommended = mockProducts.filter(p => p.isVetRecommended).slice(0, 4);
  const generalSale = mockProducts.filter(p => p.isDeal).slice(0, 4);

  // Carousel Slides
  const carouselSlides = [
    {
      id: 1,
      title: "Everything Your Pet Needs",
      subtitle: "Speak human, treat like royalty. Premium quality food, toys & accessories.",
      image: "/hero_dogs_min_1782939663224.png",
      cta: "Shop Dog Supplies",
      link: "/category/Dogs",
      colorClass: "primary-hero",
      badge: "🐶 FurryCart Favorites"
    },
    {
      id: 2,
      title: "Monthly Subscription Box",
      subtitle: "Never run out of pet essentials! Save 15% on every delivery. Tailored boxes directly to your door.",
      image: "/hero_cats_min_1782939671910.png",
      cta: "Subscribe Now",
      link: "/category/Cats",
      colorClass: "sec-hero",
      badge: "🔄 Subscribe & Save"
    },
    {
      id: 3,
      title: "Active Flash Sale: 20% Off!",
      subtitle: "Save big on hamster wheels, aquarium filters, and pet treats. Limited time deals!",
      image: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?auto=format&fit=crop&w=1920&q=80",
      cta: "Grab the Deals",
      link: "/category/Small Pets",
      colorClass: "deal-hero",
      badge: "🔥 Hot Promo Sale"
    },
    {
      id: 4,
      title: "Trending Partner Brands",
      subtitle: "ComfortPet memory foam, Pawsome premium kibble, and AquaClear filters in stock.",
      image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=1920&q=80",
      cta: "Shop Trending Brands",
      link: "/category/Dogs",
      colorClass: "brand-hero",
      badge: "✨ Premium Quality"
    }
  ];

  // Auto-play carousel
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % carouselSlides.length);
    }, 6000);
    return () => clearInterval(slideInterval);
  }, [carouselSlides.length]);

  const handlePrevSlide = () => {
    setActiveSlide(prev => (prev - 1 + carouselSlides.length) % carouselSlides.length);
  };

  const handleNextSlide = () => {
    setActiveSlide(prev => (prev + 1) % carouselSlides.length);
  };

  // Unique list of brands
  const trendingBrands = ["Pawsome", "FelineFun", "ComfortPet", "PurrfectBites", "AquaClear", "SmallPaws"];

  return (
    <div className="home-page">
      <div className="container" style={{ marginTop: '20px' }}>
        <div className="hero-carousel-container" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
          <div className="carousel-track" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
            {carouselSlides.map((slide) => (
              <div 
                key={slide.id} 
                className="carousel-slide"
                style={{ backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0) 100%), url(${slide.image})` }}
              >
                <div className="container slide-content">
                  <span className="slide-badge">{slide.badge}</span>
                  <h1>{slide.title}</h1>
                  <p>{slide.subtitle}</p>
                  {/* Fixed Small Contact Info at Corner */}
                  <div className="hero-contact-stamp">
                    <span>📞 +1-800-PET-LOVE</span>
                    <span>✉️ support@furrycart.com</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel controls */}
          <button className="carousel-control prev" onClick={handlePrevSlide}>
            <ChevronLeft size={24} />
          </button>
          <button className="carousel-control next" onClick={handleNextSlide}>
            <ChevronRight size={24} />
          </button>

          {/* Carousel indicators */}
          <div className="carousel-indicators">
            {carouselSlides.map((_, index) => (
              <button 
                key={index} 
                className={`indicator ${index === activeSlide ? 'active' : ''}`}
                onClick={() => setActiveSlide(index)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Grid: Shop By Pet */}
      <section className="container section">
        <div className="section-header-row">
          <div>
            <span className="subtitle-badge">🐾 Friendly Partners</span>
            <h2 className="section-title-left">Shop By Pet</h2>
          </div>
        </div>
        <div className="pet-category-grid">
          {[
            { pet: 'Dogs', icon: <Dog size={40} />, desc: 'Foods & Toys' },
            { pet: 'Cats', icon: <Cat size={40} />, desc: 'Litter & Scratcher' },
            { pet: 'Birds', icon: <Bird size={40} />, desc: 'Seeds & Perches' },
            { pet: 'Fish', icon: <Fish size={40} />, desc: 'Filters & Flakes' },
            { pet: 'Small Pets', icon: <Rabbit size={40} />, desc: 'Wheels & Bedding' }
          ].map(item => (
            <Link to={`/category/${item.pet}`} key={item.pet} className="pet-card">
              <div className="pet-icon">{item.icon}</div>
              <h3>{item.pet}</h3>
              <p>{item.desc}</p>
              <span className="pet-card-link">Explore <ArrowRight size={14} /></span>
            </Link>
          ))}
        </div>
      </section>

      {/* Today's Deals / General Sale */}
      <section className="container section">
        <div className="section-header-row">
          <div>
            <span className="subtitle-badge discount">🔥 Today's Special Deals</span>
            <h2 className="section-title-left">General Sale & Promo Discounts</h2>
          </div>
          <Link to="/category/Dogs" className="btn-text-link">View All Sale <ArrowRight size={16} /></Link>
        </div>
        <div className="product-grid">
          {generalSale.map(product => (
            <div key={product.id} className="deal-wrapper-card">
              <span className="deal-tag">{product.discountPct}% OFF</span>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>

      {/* Shop By Brand */}
      <section className="brand-section">
        <div className="container">
          <div className="brand-header">
            <span className="subtitle-badge">✨ Official Store Partner Brands</span>
            <h2>Shop By Brand</h2>
          </div>
          <div className="brand-logo-grid">
            {trendingBrands.map(brand => (
              <Link to={`/category/Dogs`} key={brand} className="brand-logo-card">
                <span className="brand-icon-logo">🐾</span>
                <span className="brand-name">{brand}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="container section">
        <div className="section-header-row">
          <div>
            <span className="subtitle-badge">🏆 Customers choice</span>
            <h2 className="section-title-left">Best Sellers</h2>
          </div>
          <Link to="/category/Cats" className="btn-text-link">Shop Best Sellers <ArrowRight size={16} /></Link>
        </div>
        <div className="product-grid">
          {bestSellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Vet Recommended */}
      <section className="container section vet-rec-section">
        <div className="section-header-row">
          <div>
            <span className="subtitle-badge vet"><Award size={14} /> Veterinarian Approved</span>
            <h2 className="section-title-left">Vet Recommended Products</h2>
          </div>
        </div>
        <div className="product-grid">
          {vetRecommended.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* User Reviews Showcase */}
      <section className="reviews-section">
        <div className="container">
          <div className="reviews-header">
            <span className="subtitle-badge"><HeartHandshake size={14} /> Reviews and Testimonials</span>
            <h2>Loved By Pets and Parents</h2>
          </div>
          <div className="reviews-grid">
            {mockReviews.map((review) => (
              <div key={review.id} className="review-card card">
                <Quote className="quote-icon" size={32} />
                <div className="star-rating">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={16} fill="var(--primary-color)" color="var(--primary-color)" />
                  ))}
                  {review.rating < 5 && <Star size={16} color="var(--border-color)" />}
                </div>
                <p className="review-text">"{review.text}"</p>
                <div className="reviewer-info">
                  <img src={review.avatar} alt={review.userName} className="reviewer-avatar" />
                  <div>
                    <h4>{review.userName}</h4>
                    <span>{review.petType}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mobile Download Banner */}
      <section className="app-download-banner">
        <div className="container app-banner-content">
          <div className="app-banner-text">
            <h2>Download FurryCart Mobile App</h2>
            <p>Order food, track shipping, and manage your subscription easily from your phone. Get 10% off your first app purchase!</p>
            <div className="app-download-buttons">
              <a href="https://play.google.com" target="_blank" rel="noreferrer" className="btn btn-secondary app-btn">
                <Download size={18} /> Play Store
              </a>
              <a href="https://apple.com" target="_blank" rel="noreferrer" className="btn btn-outline app-btn" style={{ color: 'white', borderColor: 'white' }}>
                 App Store
              </a>
            </div>
          </div>
          <div className="app-banner-icon-side">
            <div className="app-mockup">
              <span className="mockup-logo">🐾 FurryCart</span>
              <div className="mockup-indicator"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
