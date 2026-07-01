import React, { useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { mockProducts } from '../data/mockData';
import ProductCard from '../components/ProductCard';
import { Filter } from 'lucide-react';
import './Category.css';

const Category = () => {
  const { type } = useParams<{ type: string }>();
  const [showFilters, setShowFilters] = useState(false);
  
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('popular');

  // Get base products for this category
  const baseProducts = useMemo(() => mockProducts.filter(p => !type || p.category.toLowerCase() === type.toLowerCase()), [type]);
  
  // Extract unique brands for the sidebar
  const availableBrands = useMemo(() => {
    const brands = new Set(baseProducts.map(p => p.brand));
    return Array.from(brands).sort();
  }, [baseProducts]);

  const handleBrandChange = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const filteredProducts = useMemo(() => {
    let result = [...baseProducts];
    
    // Apply Brand Filter
    if (selectedBrands.length > 0) {
      result = result.filter(p => selectedBrands.includes(p.brand));
    }
    
    // Apply Price Filter
    if (priceRange === 'under20') {
      result = result.filter(p => p.price < 20);
    } else if (priceRange === '20to50') {
      result = result.filter(p => p.price >= 20 && p.price <= 50);
    } else if (priceRange === 'over50') {
      result = result.filter(p => p.price > 50);
    }
    
    // Apply Sorting
    switch (sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
        result.sort((a, b) => b.id.localeCompare(a.id));
        break;
      default:
        // 'popular' or default, just keep original order or mock something
        break;
    }
    
    return result;
  }, [baseProducts, selectedBrands, priceRange, sortBy]);

  return (
    <div className="container category-page section">
      <div className="category-header">
        <h1>{type || 'All'} Supplies</h1>
        <p>Find the best products for your {type ? type.toLowerCase() : 'pets'}.</p>
      </div>

      <div className="category-layout">
        {/* Filters Sidebar */}
        <aside className={`category-filters ${showFilters ? 'show' : ''}`}>
          <div className="filter-group">
            <h3>Brand</h3>
            {availableBrands.map(brand => (
              <label key={brand} className="filter-checkbox">
                <input 
                  type="checkbox" 
                  checked={selectedBrands.includes(brand)}
                  onChange={() => handleBrandChange(brand)}
                /> {brand}
              </label>
            ))}
          </div>
          
          <div className="filter-group">
            <h3>Price</h3>
            <label className="filter-radio">
              <input type="radio" name="price" checked={priceRange === 'all'} onChange={() => setPriceRange('all')} /> All Prices
            </label>
            <label className="filter-radio">
              <input type="radio" name="price" checked={priceRange === 'under20'} onChange={() => setPriceRange('under20')} /> Under $20
            </label>
            <label className="filter-radio">
              <input type="radio" name="price" checked={priceRange === '20to50'} onChange={() => setPriceRange('20to50')} /> $20 - $50
            </label>
            <label className="filter-radio">
              <input type="radio" name="price" checked={priceRange === 'over50'} onChange={() => setPriceRange('over50')} /> Over $50
            </label>
          </div>
        </aside>

        {/* Product List */}
        <div className="category-main">
          <div className="category-controls">
            <button 
              className="btn btn-outline filter-toggle" 
              onClick={() => setShowFilters(!showFilters)}
            >
              <Filter size={18} /> Filters
            </button>
            <div className="sort-control">
              <label>Sort by:</label>
              <select className="input-field" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                <option value="popular">Popular</option>
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Best Rated</option>
              </select>
            </div>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="product-grid">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className="no-results">
              <h3>No products found matching your filters.</h3>
              <p>Try adjusting your criteria or check back soon!</p>
              <button className="btn btn-primary" onClick={() => { setSelectedBrands([]); setPriceRange('all'); }} style={{ marginTop: '1rem' }}>
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Category;
