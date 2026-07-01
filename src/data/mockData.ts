export interface Product {
  id: string;
  name: string;
  category: 'Dogs' | 'Cats' | 'Birds' | 'Fish' | 'Small Pets';
  type: 'Food' | 'Toys' | 'Grooming' | 'Beds' | 'Treats' | 'Accessories';
  price: number;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  stock: number;
  suitableFor: string[];
  subscriptionEligible: boolean;
  brand: string;
  isBestSeller: boolean;
  isVetRecommended: boolean;
  isDeal?: boolean;
  discountPct?: number;
}

export const mockProducts: Product[] = [
  {
    id: 'p1',
    name: 'Premium Grain-Free Kibble',
    category: 'Dogs',
    type: 'Food',
    price: 45.99,
    rating: 4.8,
    reviews: 128,
    image: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&q=80&w=600',
    description: 'High-quality grain-free kibble for adult dogs, rich in protein and essential vitamins.',
    stock: 50,
    suitableFor: ['Adult Dogs', 'Medium Breeds', 'Large Breeds'],
    subscriptionEligible: true,
    brand: 'Pawsome',
    isBestSeller: true,
    isVetRecommended: true,
    isDeal: true,
    discountPct: 10,
  },
  {
    id: 'p2',
    name: 'Interactive Feather Wand',
    category: 'Cats',
    type: 'Toys',
    price: 12.50,
    rating: 4.5,
    reviews: 84,
    image: 'https://images.unsplash.com/photo-1545249390-6bdfa286032f?auto=format&fit=crop&q=80&w=600',
    description: 'Keep your cat entertained for hours with this interactive feather wand toy.',
    stock: 120,
    suitableFor: ['All Cats', 'Kittens'],
    subscriptionEligible: false,
    brand: 'FelineFun',
    isBestSeller: true,
    isVetRecommended: false,
  },
  {
    id: 'p3',
    name: 'Orthopedic Dog Bed',
    category: 'Dogs',
    type: 'Beds',
    price: 89.99,
    rating: 4.9,
    reviews: 215,
    image: 'https://images.unsplash.com/photo-1615671752391-7fb1849a60e2?auto=format&fit=crop&q=80&w=600',
    description: 'Memory foam orthopedic bed designed to relieve joint pain in senior dogs.',
    stock: 30,
    suitableFor: ['Senior Dogs', 'Large Breeds'],
    subscriptionEligible: false,
    brand: 'ComfortPet',
    isBestSeller: true,
    isVetRecommended: true,
  },
  {
    id: 'p4',
    name: 'Gourmet Cat Treats - Salmon Flavor',
    category: 'Cats',
    type: 'Treats',
    price: 8.99,
    rating: 4.7,
    reviews: 342,
    image: 'https://images.unsplash.com/photo-1623366302587-bca9fc12d5ee?auto=format&fit=crop&q=80&w=600',
    description: 'Delicious salmon-flavored treats made with real fish.',
    stock: 200,
    suitableFor: ['Adult Cats'],
    subscriptionEligible: true,
    brand: 'PurrfectBites',
    isBestSeller: false,
    isVetRecommended: false,
    isDeal: true,
    discountPct: 15,
  },
  {
    id: 'p5',
    name: 'Aquarium Filter Pro',
    category: 'Fish',
    type: 'Accessories',
    price: 34.99,
    rating: 4.6,
    reviews: 56,
    image: 'https://images.unsplash.com/photo-1522069169874-c58ec4b76be5?auto=format&fit=crop&q=80&w=600',
    description: 'High-efficiency multi-stage filter for freshwater and saltwater aquariums.',
    stock: 15,
    suitableFor: ['All Fish'],
    subscriptionEligible: true,
    brand: 'AquaClear',
    isBestSeller: false,
    isVetRecommended: true,
  },
  {
    id: 'p6',
    name: 'Natural Wood Bird Toy',
    category: 'Birds',
    type: 'Toys',
    price: 15.99,
    rating: 4.4,
    reviews: 42,
    image: 'https://images.unsplash.com/photo-1552728089-57169ab0065c?auto=format&fit=crop&q=80&w=600',
    description: 'Safe, natural wood chewing toy to keep your bird\'s beak healthy.',
    stock: 80,
    suitableFor: ['Parrots', 'Cockatiels'],
    subscriptionEligible: false,
    brand: 'FeatherCare',
    isBestSeller: false,
    isVetRecommended: false,
  },
  {
    id: 'p7',
    name: 'Puppy Training Pads (100 pack)',
    category: 'Dogs',
    type: 'Accessories',
    price: 24.99,
    rating: 4.8,
    reviews: 512,
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80&w=600',
    description: 'Super absorbent training pads with leak-proof edges.',
    stock: 150,
    suitableFor: ['Puppies', 'Small Breeds'],
    subscriptionEligible: true,
    brand: 'TrainRight',
    isBestSeller: true,
    isVetRecommended: true,
  },
  {
    id: 'p8',
    name: 'Hamster Exercise Wheel',
    category: 'Small Pets',
    type: 'Toys',
    price: 18.50,
    rating: 4.3,
    reviews: 76,
    image: 'https://images.unsplash.com/photo-1425082661705-1834bfd0999c?auto=format&fit=crop&q=80&w=600',
    description: 'Silent spinner exercise wheel for hamsters and gerbils.',
    stock: 45,
    suitableFor: ['Hamsters', 'Gerbils'],
    subscriptionEligible: false,
    brand: 'SmallPaws',
    isBestSeller: false,
    isVetRecommended: false,
    isDeal: true,
    discountPct: 20
  }
];

export interface PetProfile {
  id: string;
  name: string;
  type: string;
  breed: string;
  age: number;
  weight: number;
  image?: string;
}

export const mockUser = {
  name: 'Jane Doe',
  email: 'jane.doe@example.com',
  pets: [
    {
      id: 'pet1',
      name: 'Bella',
      type: 'Dogs',
      breed: 'Labrador',
      age: 3,
      weight: 25,
      image: 'https://images.unsplash.com/photo-1579213838826-7f41fa8626f1?auto=format&fit=crop&q=80&w=200'
    }
  ] as PetProfile[]
};

export interface UserReview {
  id: string;
  userName: string;
  rating: number;
  text: string;
  petType: string;
  avatar: string;
}

export const mockReviews: UserReview[] = [
  {
    id: 'r1',
    userName: 'Sarah M.',
    rating: 5,
    text: 'FurryCart is a lifesaver! The subscription box keeps my puppy happy and healthy without any effort on my end.',
    petType: 'Dog parent',
    avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120'
  },
  {
    id: 'r2',
    userName: 'David K.',
    rating: 4,
    text: 'Excellent service and premium food quality. My senior cat absolutely loves the salmon treats, and the delivery is always on time.',
    petType: 'Cat parent',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120'
  },
  {
    id: 'r3',
    userName: 'Elena R.',
    rating: 5,
    text: 'Highly recommend the My Pets profile feature. The personalized food recommendations are perfect for my picky guinea pig!',
    petType: 'Guinea Pig parent',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120'
  }
];
