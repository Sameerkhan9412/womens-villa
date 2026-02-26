export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  originalPrice?: number;
  category: string;
  subcategory?: string;
  description: string;
  details: string[];
  sizes: string[];
  colors: string[];
  images: string[];
  badge?: string;
  rating: number;
  reviews: number;
  inStock: boolean;
  featured: boolean;
  trending: boolean;
  new: boolean;
}

export interface Collection {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  productCount: number;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  text: string;
  rating: number;
  avatar: string;
}

export const collections: Collection[] = [
  {
    id: "1",
    name: "Ready-Made Suits",
    slug: "ready-made",
    description: "Curated elegance, ready to wear",
    image:
      "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=800&q=80",
    productCount: 48,
  },
  {
    id: "2",
    name: "Unstitched Suits",
    slug: "unstitched",
    description: "Design your own masterpiece",
    image:
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
    productCount: 36,
  },
  {
    id: "3",
    name: "Indo-Western",
    slug: "indo-western",
    description: "Where tradition meets modernity",
    image:
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80",
    productCount: 24,
  },
  {
    id: "4",
    name: "Festive Collection",
    slug: "festive",
    description: "Celebrate in style",
    image:
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=800&q=80",
    productCount: 52,
  },
];

export const products: Product[] = [
  {
    id: "1",
    name: "Rosewood Embroidered Anarkali",
    slug: "rosewood-embroidered-anarkali",
    price: 4999,
    originalPrice: 7499,
    category: "ready-made",
    subcategory: "Anarkali",
    description:
      "A stunning rosewood anarkali suit featuring intricate thread embroidery and delicate sequin work. The flowing silhouette and premium georgette fabric make it perfect for festive gatherings and special occasions.",
    details: [
      "Premium Georgette fabric",
      "Thread & sequin embroidery",
      "Comes with matching dupatta",
      "Semi-stitched, customizable fit",
      "Dry clean only",
    ],
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Rosewood", "Dusty Pink", "Maroon"],
    images: [
      "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d44?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&q=80",
    ],
    badge: "Bestseller",
    rating: 4.8,
    reviews: 124,
    inStock: true,
    featured: true,
    trending: true,
    new: false,
  },
  {
    id: "2",
    name: "Pearl Silk Palazzo Set",
    slug: "pearl-silk-palazzo-set",
    price: 6499,
    originalPrice: 8999,
    category: "ready-made",
    subcategory: "Palazzo Set",
    description:
      "Luxurious silk palazzo set in a serene pearl white shade. Features gold zari detailing and elegant mirror work that catches light beautifully.",
    details: [
      "Pure Silk fabric",
      "Gold zari border",
      "Mirror work detailing",
      "Palazzo pants included",
      "Comes with dupatta",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Pearl White", "Ivory", "Champagne"],
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1595777457583-95e4f5446a6b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?auto=format&fit=crop&w=800&q=80",
    ],
    badge: "New",
    rating: 4.9,
    reviews: 89,
    inStock: true,
    featured: true,
    trending: false,
    new: true,
  },
  {
    id: "3",
    name: "Heritage Embroidered Fabric",
    slug: "heritage-embroidered-fabric",
    price: 3299,
    originalPrice: 4999,
    category: "unstitched",
    description:
      "Exquisite unstitched fabric featuring traditional Lucknowi chikankari embroidery. Crafted on premium cotton lawn for ultimate comfort and grace.",
    details: [
      "Cotton Lawn fabric",
      "Authentic chikankari work",
      "3-piece unstitched set",
      "Includes embroidered panel",
      "Machine washable",
    ],
    sizes: ["Free Size"],
    colors: ["White", "Pastel Blue", "Mint Green"],
    images: [
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=800&q=80",
    ],
    rating: 4.7,
    reviews: 203,
    inStock: true,
    featured: true,
    trending: true,
    new: false,
  },
  {
    id: "4",
    name: "Royal Chiffon Unstitched Set",
    slug: "royal-chiffon-unstitched-set",
    price: 2999,
    category: "unstitched",
    description:
      "Dreamy chiffon unstitched set in a regal shade. Features delicate thread embroidery borders and comes with a matching embroidered chiffon dupatta.",
    details: [
      "Pure Chiffon fabric",
      "Thread embroidery borders",
      "3-piece set with dupatta",
      "Elegant design",
      "Dry clean recommended",
    ],
    sizes: ["Free Size"],
    colors: ["Dusty Rose", "Sage Green", "Powder Blue"],
    images: [
      "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d44?auto=format&fit=crop&w=800&q=80",
    ],
    badge: "Trending",
    rating: 4.6,
    reviews: 156,
    inStock: true,
    featured: false,
    trending: true,
    new: true,
  },
  {
    id: "5",
    name: "Celestial Cape Fusion Dress",
    slug: "celestial-cape-fusion-dress",
    price: 7999,
    originalPrice: 11999,
    category: "indo-western",
    description:
      "A show-stopping Indo-Western cape dress that combines traditional embroidery with a contemporary silhouette. The dramatic cape adds an ethereal quality.",
    details: [
      "Georgette & Net combination",
      "Heavy embellishment",
      "Attached cape design",
      "Side zip closure",
      "Dry clean only",
    ],
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Midnight Blue", "Wine", "Emerald"],
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e4f5446a6b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?auto=format&fit=crop&w=800&q=80",
    ],
    badge: "Exclusive",
    rating: 4.9,
    reviews: 67,
    inStock: true,
    featured: true,
    trending: true,
    new: true,
  },
  {
    id: "6",
    name: "Bloom Crop Top & Skirt Set",
    slug: "bloom-crop-top-skirt-set",
    price: 5499,
    originalPrice: 6999,
    category: "indo-western",
    description:
      "A charming crop top and flared skirt set adorned with floral digital prints. The contemporary cut paired with traditional patterns creates an unforgettable look.",
    details: [
      "Satin Silk fabric",
      "Digital floral print",
      "Crop top with back tie",
      "Flared midi skirt",
      "Dry clean only",
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: ["Blush Pink", "Sky Blue", "Lavender"],
    images: [
      "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=800&q=80",
    ],
    rating: 4.5,
    reviews: 92,
    inStock: true,
    featured: false,
    trending: true,
    new: false,
  },
  {
    id: "7",
    name: "Grand Festive Lehenga Set",
    slug: "grand-festive-lehenga-set",
    price: 12999,
    originalPrice: 18999,
    category: "festive",
    description:
      "A breathtaking lehenga set designed for grand celebrations. Rich velvet blouse paired with a heavily embroidered net lehenga and dual-tone dupatta.",
    details: [
      "Velvet blouse + Net lehenga",
      "Heavy embroidery & sequins",
      "Can-can lining included",
      "Dual-tone dupatta",
      "Dry clean only",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Royal Red", "Burgundy", "Deep Green"],
    images: [
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1595777457583-95e4f5446a6b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&q=80",
    ],
    badge: "Premium",
    rating: 5.0,
    reviews: 45,
    inStock: true,
    featured: true,
    trending: true,
    new: true,
  },
  {
    id: "8",
    name: "Diwali Radiance Kurta Set",
    slug: "diwali-radiance-kurta-set",
    price: 4999,
    category: "festive",
    description:
      "Light up your Diwali celebrations with this radiant kurta set. Golden thread work on a rich fabric creates a luminous effect perfect for the festival of lights.",
    details: [
      "Art Silk fabric",
      "Golden thread work",
      "Slim-fit kurta style",
      "Matching pants & dupatta",
      "Gentle wash",
    ],
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Gold", "Rust Orange", "Deep Teal"],
    images: [
      "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d44?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=800&q=80",
    ],
    rating: 4.7,
    reviews: 178,
    inStock: true,
    featured: false,
    trending: false,
    new: true,
  },
  {
    id: "9",
    name: "Ethereal Georgette Sharara",
    slug: "ethereal-georgette-sharara",
    price: 5999,
    originalPrice: 7999,
    category: "ready-made",
    subcategory: "Sharara",
    description:
      "Float through any occasion in this ethereal georgette sharara set. The flowing sharara pants and delicately embroidered kurta create a dreamy silhouette.",
    details: [
      "Premium Georgette",
      "Delicate embroidery",
      "Sharara pants",
      "Organza dupatta",
      "Dry clean only",
    ],
    sizes: ["S", "M", "L", "XL"],
    colors: ["Powder Pink", "Lilac", "Sage"],
    images: [
      "https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1596783074918-c84cb06531ca?auto=format&fit=crop&w=800&q=80",
    ],
    rating: 4.8,
    reviews: 134,
    inStock: true,
    featured: true,
    trending: false,
    new: false,
  },
  {
    id: "10",
    name: "Banarasi Opulence Unstitched",
    slug: "banarasi-opulence-unstitched",
    price: 8499,
    originalPrice: 12999,
    category: "unstitched",
    description:
      "Timeless Banarasi craftsmanship in a luxurious unstitched set. The rich zari weave and traditional motifs are a tribute to India's finest textile heritage.",
    details: [
      "Pure Banarasi Silk",
      "Handwoven zari work",
      "Traditional motifs",
      "3-piece unstitched",
      "Heirloom quality",
    ],
    sizes: ["Free Size"],
    colors: ["Royal Purple", "Crimson", "Forest Green"],
    images: [
      "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d44?auto=format&fit=crop&w=800&q=80",
    ],
    badge: "Handcrafted",
    rating: 4.9,
    reviews: 76,
    inStock: true,
    featured: true,
    trending: true,
    new: false,
  },
  {
    id: "11",
    name: "Modern Fusion Jacket Dress",
    slug: "modern-fusion-jacket-dress",
    price: 9999,
    originalPrice: 13999,
    category: "indo-western",
    description:
      "A contemporary jacket-style dress combining Western structure with Eastern embellishments. The perfect statement piece for cocktail parties and receptions.",
    details: [
      "Crepe & Net combination",
      "3D embellishment",
      "Structured jacket style",
      "Inner sheath dress",
      "Dry clean only",
    ],
    sizes: ["XS", "S", "M", "L"],
    colors: ["Charcoal", "Navy", "Deep Mauve"],
    images: [
      "https://images.unsplash.com/photo-1595777457583-95e4f5446a6b?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1609505848912-b7c3b8b4beda?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=800&q=80",
    ],
    badge: "Limited Edition",
    rating: 4.8,
    reviews: 38,
    inStock: true,
    featured: false,
    trending: true,
    new: true,
  },
  {
    id: "12",
    name: "Bridal Dream Saree Set",
    slug: "bridal-dream-saree-set",
    price: 15999,
    originalPrice: 22999,
    category: "festive",
    description:
      "An enchanting saree set designed for the modern bride. Heavy work embroidery with crystal embellishments creates an unforgettable bridal look.",
    details: [
      "Organza Silk",
      "Crystal & pearl embellishment",
      "Designer blouse piece",
      "Fall & pico attached",
      "Professional dry clean",
    ],
    sizes: ["Free Size"],
    colors: ["Bridal Red", "Pastel Pink", "Ivory Gold"],
    images: [
      "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=800&q=80",
    ],
    badge: "Bridal",
    rating: 5.0,
    reviews: 29,
    inStock: true,
    featured: true,
    trending: false,
    new: true,
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Priya Sharma",
    location: "New Delhi",
    text: "Women's Villa is my go-to store for every occasion. The quality of fabrics and the attention to detail in every piece is simply unmatched. I always feel special wearing their outfits!",
    rating: 5,
    avatar: "PS",
  },
  {
    id: "2",
    name: "Ananya Gupta",
    location: "Mumbai",
    text: "I ordered the Banarasi unstitched set and it was even more beautiful in person. The zari work is exquisite. Received so many compliments at my sister's wedding!",
    rating: 5,
    avatar: "AG",
  },
  {
    id: "3",
    name: "Meera Patel",
    location: "Jaipur",
    text: "The Indo-Western collection is absolutely stunning. The fusion jacket dress I bought was a showstopper at the cocktail party. Premium quality and unique designs!",
    rating: 5,
    avatar: "MP",
  },
  {
    id: "4",
    name: "Riya Khanna",
    location: "Chandigarh",
    text: "Fast delivery, gorgeous packaging, and the suit exceeded my expectations. Women's Villa truly understands what modern women want. Will definitely be ordering again!",
    rating: 5,
    avatar: "RK",
  },
];

export const instagramImages = [
  "https://images.unsplash.com/photo-1583391733956-6c78276477e2?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1610030469983-98e550d6193c?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1614252235316-8c857d38b5f4?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1585487000160-6ebcfceb0d44?auto=format&fit=crop&w=400&q=80",
];

export const categories = [
  { value: "all", label: "All Collections" },
  { value: "ready-made", label: "Ready-Made Suits" },
  { value: "unstitched", label: "Unstitched Suits" },
  { value: "indo-western", label: "Indo-Western" },
  { value: "festive", label: "Festive Collection" },
];

export const priceRanges = [
  { value: "all", label: "All Prices" },
  { value: "0-3000", label: "Under ₹3,000" },
  { value: "3000-6000", label: "₹3,000 - ₹6,000" },
  { value: "6000-10000", label: "₹6,000 - ₹10,000" },
  { value: "10000-99999", label: "Above ₹10,000" },
];

export const sortOptions = [
  { value: "featured", label: "Featured" },
  { value: "newest", label: "Newest" },
  { value: "price-low", label: "Price: Low to High" },
  { value: "price-high", label: "Price: High to Low" },
  { value: "rating", label: "Highest Rated" },
];

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price);
}

export function getProduct(id: string): Product | undefined {
  return products.find((p) => p.id === id);
}

export function getRelatedProducts(
  productId: string,
  category: string
): Product[] {
  return products
    .filter((p) => p.id !== productId && p.category === category)
    .slice(0, 4);
}