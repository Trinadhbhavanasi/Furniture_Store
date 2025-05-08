import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Products.css';
import { useCart } from '../context/CartContext';

function Products() {
  const { category } = useParams();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const { addToCart } = useCart();

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProduct(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const formatPrice = (price) =>
    new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR' }).format(price);

  const products = [
    { id: 1, name: 'Modern 3-Seater Sofa', category: 'Sofas', price: 35000, image: '/images/products/sofa1.jpg', description: 'Comfortable and stylish 3-seater for modern living rooms.' },
    { id: 2, name: 'Elegant Leather Sofa', category: 'Sofas', price: 30000, image: '/images/products/sofa2.jpg', description: 'Premium leather upholstery with firm cushions.' },
    { id: 3, name: 'Fabric Sectional Sofa', category: 'Sofas', price: 25000, image: '/images/products/sofa3.jpg', description: 'L-shaped sofa with washable fabric covers.' },
    { id: 4, name: 'Luxury Recliner Sofa', category: 'Sofas', price: 40000, image: '/images/products/sofa4.jpg', description: 'Recliner with cup holders and extra comfort.' },
    { id: 5, name: 'Compact Studio Sofa', category: 'Sofas', price: 30000, image: '/images/products/sofa5.png', description: 'Ideal for studio apartments and small spaces.' },
    { id: 6, name: 'Minimalist Grey Sofa', category: 'Sofas', price: 35000, image: '/images/products/sofa6.png', description: 'Neutral grey tone to fit any interior.' },
    { id: 7, name: 'Stylish Mandir A', category: 'Mandir', price: 12500, image: '/images/products/mandir1.png', description: 'Traditional wooden mandir with lights.' },
    { id: 8, name: 'Stylish Mandir B', category: 'Mandir', price: 12500, image: '/images/products/mandir2.png', description: 'Wall-mounted modern design.' },
    { id: 9, name: 'Stylish Mandir C', category: 'Mandir', price: 12500, image: '/images/products/mandir3.png', description: 'Intricate carving with storage drawers.' },
    { id: 10, name: 'Stylish Mandir D', category: 'Mandir', price: 12500, image: '/images/products/mandir4.png', description: 'Compact temple with golden trims.' },
    { id: 11, name: 'Stylish Mandir E', category: 'Mandir', price: 12500, image: '/images/products/mandir5.png', description: 'Dark wood with LED light panels.' },
    { id: 12, name: 'Stylish Mandir F', category: 'Mandir', price: 12500, image: '/images/products/mandir6.png', description: 'Elegant look with storage shelves.' },
    { id: 13, name: 'Royal Blue Curtains', category: 'Curtains', price: 1800, image: '/images/products/curtain1.jpg', description: 'Blackout curtains with rich blue fabric.' },
    { id: 14, name: 'Silk Beige Curtains', category: 'Curtains', price: 2000, image: '/images/products/curtain2.jpg', description: 'Silky and elegant for living rooms.' },
    { id: 15, name: 'Grey Sheer Curtains', category: 'Curtains', price: 1600, image: '/images/products/curtain3.jpg', description: 'Light filtering sheer curtains.' },
    { id: 16, name: 'Patterned Blackout Curtains', category: 'Curtains', price: 1200, image: '/images/products/curtain4.jpg', description: 'Block sunlight with a bold pattern.' },
    { id: 17, name: 'Printed Floral Curtains', category: 'Curtains', price: 2200, image: '/images/products/curtain5.jpg', description: 'Bring nature inside with floral design.' },
    { id: 18, name: 'Luxury Velvet Curtains', category: 'Curtains', price: 2500, image: '/images/products/curtain6.jpg', description: 'Soft velvet for premium ambiance.' },
    { id: 19, name: 'Classic Wood Table', category: 'Center Tables', price: 7500, image: '/images/products/center1.png', description: 'Simple wooden design with polish finish.' },
    { id: 20, name: 'Round Glass Table', category: 'Center Tables', price: 8500, image: '/images/products/center2.png', description: 'Tempered glass with steel frame.' },
    { id: 21, name: 'Marble Center Table', category: 'Center Tables', price: 9500, image: '/images/products/center3.png', description: 'Elegant marble top with drawers.' },
    { id: 22, name: 'Rustic Table', category: 'Center Tables', price: 8500, image: '/images/products/center4.png', description: 'Distressed finish for rustic decor.' },
    { id: 23, name: 'Storage Center Table', category: 'Center Tables', price: 10500, image: '/images/products/center5.png', description: 'Lift top table with storage inside.' },
    { id: 24, name: 'Designer Coffee Table', category: 'Center Tables', price: 8500, image: '/images/products/center6.png', description: 'Designer piece with magazine rack.' },
    { id: 25, name: 'Blue Velvet Chair', category: 'Sofa Chairs', price: 9999, image: '/images/products/sofachair1.jpg', description: 'Rich velvet with cushioned arms.' },
    { id: 26, name: 'Accent Armchair', category: 'Sofa Chairs', price: 6999, image: '/images/products/sofachair2.jpg', description: 'Stylish reading chair with prints.' },
    { id: 27, name: 'Classic Lounge Chair', category: 'Sofa Chairs', price: 11999, image: '/images/products/sofachair3.jpg', description: 'Modern and comfy for long sitting.' },
    { id: 28, name: 'Reclining Armchair', category: 'Sofa Chairs', price: 8999, image: '/images/products/sofachair4.jpg', description: 'Semi-recliner for relaxing.' },
    { id: 29, name: 'Minimalist Club Chair', category: 'Sofa Chairs', price: 12999, image: '/images/products/sofachair5.jpg', description: 'Sleek black design, low back.' },
    { id: 30, name: 'Comfy Bean Chair', category: 'Sofa Chairs', price: 14999, image: '/images/products/sofachair6.jpg', description: 'Soft plush bean bag chair.' },
    { id: 31, name: 'Wall Mount TV Unit', category: 'TV Units', price: 14999, image: '/images/products/tv1.png', description: 'Wall-mounted unit with storage.' },
    { id: 32, name: 'Compact TV Console', category: 'TV Units', price: 14999, image: '/images/products/tv2.png', description: 'Compact and sleek for bedrooms.' },
    { id: 33, name: 'Storage TV Cabinet', category: 'TV Units', price: 14999, image: '/images/products/tv3.png', description: 'TV stand with drawers and shelves.' },
    { id: 34, name: 'Wooden Entertainment Unit', category: 'TV Units', price: 14999, image: '/images/products/tv4.png', description: 'Complete unit with decor racks.' },
    { id: 35, name: 'Floating TV Shelf', category: 'TV Units', price: 14999, image: '/images/products/tv5.png', description: 'Minimal wall-mounted shelf for TV.' },
    { id: 36, name: 'Modern Glossy TV Unit', category: 'TV Units', price: 14999, image: '/images/products/tv6.png', description: 'Glossy white finish with lights.' },
  ];

  const filteredProducts = category
    ? products.filter((product) => product.category.toLowerCase().replace(/ /g, '-') === category)
    : products;

  return (
    <div className="products-page">
      <h2>{category ? `Collection: ${category.replace(/-/g, ' ')}` : 'Our Complete Collection'}</h2>
      <div className="products-grid">
        {filteredProducts.map((item) => (
          <div className="product-card" key={item.id}>
            <img
              src={item.image}
              alt={item.name}
              onError={(e) => (e.target.src = '/images/products/default.png')}
            />
            <h3>{item.name}</h3>
            <p>{item.category}</p>
            <p className="price">{formatPrice(item.price)}</p>
            <button className="view-button" onClick={() => setSelectedProduct(item)} aria-label={`View details of ${item.name}`}>
              View Details
            </button>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <div className="modal-overlay" onClick={() => setSelectedProduct(null)}>
          <div className="modal-box" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
            <img
              src={selectedProduct.image}
              alt={selectedProduct.name}
              onError={(e) => (e.target.src = '/images/products/default.png')}
            />
            <h3>{selectedProduct.name}</h3>
            <p>{selectedProduct.description}</p>
            <p className="price">{formatPrice(selectedProduct.price)}</p>

            <button
              className="view-button"
              onClick={() => {
                addToCart(selectedProduct);
                setSelectedProduct(null);
              }}
              aria-label={`Add ${selectedProduct.name} to cart`}
            >
              Add to Cart
            </button>

            <button
              onClick={() => setSelectedProduct(null)}
              className="close-button"
              aria-label="Close modal"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Products;
