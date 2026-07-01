import React, { useState } from 'react';
import { mockUser, mockProducts, Product } from '../../data/mockData';
import ProductCard from '../../components/ProductCard';
import { Plus, Edit2, Trash2 } from 'lucide-react';
import toast from 'react-hot-toast';
import MockModal from '../../components/MockModal';
import './MyPets.css';

const MyPets = () => {
  const [pets] = useState(mockUser.pets);
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isEditOpen, setIsEditOpen] = useState(false);
  
  // Simple recommendation engine logic based on pet profile
  const getRecommendations = (petType: string, breed: string, age: number): Product[] => {
    let recommendations = mockProducts.filter(p => p.category === petType);
    
    // Sort by relevance (mock logic: prioritize matching suitableFor tags)
    // E.g. Labrador -> Large Breeds
    const isLarge = breed.toLowerCase().includes('labrador');
    const ageTag = age < 1 ? 'Puppies' : age > 7 ? 'Senior Dogs' : 'Adult Dogs';

    recommendations.sort((a, b) => {
      let scoreA = 0;
      let scoreB = 0;
      if (a.suitableFor.includes(ageTag)) scoreA++;
      if (isLarge && a.suitableFor.includes('Large Breeds')) scoreA++;
      
      if (b.suitableFor.includes(ageTag)) scoreB++;
      if (isLarge && b.suitableFor.includes('Large Breeds')) scoreB++;
      
      return scoreB - scoreA;
    });

    return recommendations.slice(0, 4);
  };

  return (
    <div className="my-pets-page">
      <div className="page-header">
        <h2>My Pets Profile</h2>
        <button className="btn btn-primary btn-sm" onClick={() => setIsAddOpen(true)}><Plus size={16} /> Add New Pet</button>
      </div>
      
      <p className="page-desc">Manage your pet profiles to receive personalized product recommendations tailored specifically to their breed, age, and size.</p>

      {pets.length === 0 ? (
        <div className="empty-pets">
          <p>You haven't added any pets yet.</p>
        </div>
      ) : (
        <div className="pets-list">
          {pets.map(pet => (
            <div key={pet.id} className="pet-profile-section">
              <div className="pet-card">
                <img src={pet.image} alt={pet.name} className="pet-image" />
                <div className="pet-info">
                  <div className="pet-header">
                    <h3>{pet.name}</h3>
                    <div className="pet-actions">
                      <button className="btn-icon" onClick={() => setIsEditOpen(true)}><Edit2 size={16} /></button>
                      <button className="btn-icon text-danger" onClick={() => toast.success(`${pet.name} removed from profile`)}><Trash2 size={16} /></button>
                    </div>
                  </div>
                  <div className="pet-details">
                    <span className="detail-badge">{pet.type}</span>
                    <span className="detail-badge">{pet.breed}</span>
                    <span className="detail-badge">{pet.age} Years Old</span>
                    <span className="detail-badge">{pet.weight} kg</span>
                  </div>
                </div>
              </div>
              
              <div className="pet-recommendations">
                <h4>Recommended for {pet.name}</h4>
                <div className="product-grid mini-grid">
                  {getRecommendations(pet.type, pet.breed, pet.age).map(product => (
                    <ProductCard key={product.id} product={product} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <MockModal isOpen={isAddOpen} onClose={() => setIsAddOpen(false)} title="Add New Pet">
        <p>This is a mock modal for adding a pet.</p>
        <p>You can capture pet type, breed, age, and weight here.</p>
      </MockModal>
      
      <MockModal isOpen={isEditOpen} onClose={() => setIsEditOpen(false)} title="Edit Pet Profile">
        <p>This is a mock modal for editing an existing pet.</p>
      </MockModal>
    </div>
  );
};

export default MyPets;
