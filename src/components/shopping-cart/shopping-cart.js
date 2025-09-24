"use client";
import React, { useState, useEffect } from 'react';
import { X, ShoppingCart, Plus, Minus, CreditCard } from 'lucide-react';

const ShoppingModal = ({ 
  isOpen, 
  onClose, 
  selectedProduct, 
  cartItems, 
  onAddToCart, 
  onCheckoutComplete 
}) => {
  const [currentView, setCurrentView] = useState('product'); // 'product', 'cart', 'checkout'
  const [quantity, setQuantity] = useState(1);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    name: '',
    email: ''
  });

  // Sample product data (in real app, this would come from your backend)
  const productDetails = selectedProduct || {
    id: 1,
    name: "Traditional Saudi Craft",
    price: 150,
    currency: "SAR",
    image: "/images/sample-product.jpg",
    description: "Authentic handcrafted item from Saudi historical lands",
    inStock: true
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const handleAddToCart = () => {
    onAddToCart({
      ...productDetails,
      quantity: quantity
    });
    setCurrentView('cart');
  };

  const handlePayment = async (e) => {
    e.preventDefault();
    setIsProcessing(true);

    // Mock payment processing (integrate with Stripe, PayPal, etc.)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Mock successful payment
      onCheckoutComplete({
        success: true,
        transactionId: 'txn_' + Date.now(),
        amount: calculateTotal(),
        items: cartItems
      });
    } catch (error) {
      console.error('Payment failed:', error);
      onCheckoutComplete({
        success: false,
        error: error.message
      });
    } finally {
      setIsProcessing(false);
    }
  };

  const renderProductView = () => (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/2">
          <img 
            src={productDetails.image} 
            alt={productDetails.name}
            className="w-full h-64 object-cover rounded-lg bg-gray-200"
            onError={(e) => {
              e.target.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%23374151'%3EProduct Image%3C/text%3E%3C/svg%3E";
            }}
          />
        </div>
        <div className="md:w-1/2 space-y-4">
          <h2 className="text-2xl font-bold text-gray-900">{productDetails.name}</h2>
          <p className="text-3xl font-bold text-green-600">
            {productDetails.price} {productDetails.currency}
          </p>
          <p className="text-gray-600">{productDetails.description}</p>
          
          <div className="flex items-center space-x-4">
            <span className="text-sm font-medium text-gray-700">Quantity:</span>
            <div className="flex items-center border rounded-lg">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="p-2 hover:bg-gray-100"
              >
                <Minus className="w-4 h-4" />
              </button>
              <span className="px-4 py-2 border-x">{quantity}</span>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="p-2 hover:bg-gray-100"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>
          </div>

          <button
            onClick={handleAddToCart}
            disabled={!productDetails.inStock}
            className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
          >
            <ShoppingCart className="w-5 h-5" />
            <span>{productDetails.inStock ? 'Add to Cart' : 'Out of Stock'}</span>
          </button>
        </div>
      </div>
    </div>
  );

  const renderCartView = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Shopping Cart</h2>
      
      {cartItems.length === 0 ? (
        <div className="text-center py-8">
          <ShoppingCart className="w-16 h-16 mx-auto text-gray-400 mb-4" />
          <p className="text-gray-500">Your cart is empty</p>
        </div>
      ) : (
        <>
          <div className="space-y-4">
            {cartItems.map((item, index) => (
              <div key={index} className="flex items-center justify-between border-b pb-4">
                <div className="flex items-center space-x-4">
                  <img 
                    src={item.image} 
                    alt={item.name}
                    className="w-16 h-16 object-cover rounded bg-gray-200"
                  />
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
                  </div>
                </div>
                <p className="font-bold">{item.price * item.quantity} {item.currency}</p>
              </div>
            ))}
          </div>
          
          <div className="border-t pt-4">
            <div className="flex justify-between text-xl font-bold">
              <span>Total:</span>
              <span>{calculateTotal()} SAR</span>
            </div>
          </div>

          <button
            onClick={() => setCurrentView('checkout')}
            className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 flex items-center justify-center space-x-2"
          >
            <CreditCard className="w-5 h-5" />
            <span>Proceed to Checkout</span>
          </button>
        </>
      )}
    </div>
  );

  const renderCheckoutView = () => (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-900">Checkout</h2>
      
      <form onSubmit={handlePayment} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              required
              value={paymentData.name}
              onChange={(e) => setPaymentData({...paymentData, name: e.target.value})}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your full name"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              required
              value={paymentData.email}
              onChange={(e) => setPaymentData({...paymentData, email: e.target.value})}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Card Number
          </label>
          <input
            type="text"
            required
            value={paymentData.cardNumber}
            onChange={(e) => setPaymentData({...paymentData, cardNumber: e.target.value})}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="1234 5678 9012 3456"
            maxLength="19"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Expiry Date
            </label>
            <input
              type="text"
              required
              value={paymentData.expiryDate}
              onChange={(e) => setPaymentData({...paymentData, expiryDate: e.target.value})}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="MM/YY"
              maxLength="5"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              CVV
            </label>
            <input
              type="text"
              required
              value={paymentData.cvv}
              onChange={(e) => setPaymentData({...paymentData, cvv: e.target.value})}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="123"
              maxLength="4"
            />
          </div>
        </div>

        <div className="border-t pt-4">
          <div className="flex justify-between text-xl font-bold mb-4">
            <span>Total:</span>
            <span>{calculateTotal()} SAR</span>
          </div>
        </div>

        <button
          type="submit"
          disabled={isProcessing}
          className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
        >
          {isProcessing ? (
            <>
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              <span>Processing...</span>
            </>
          ) : (
            <>
              <CreditCard className="w-5 h-5" />
              <span>Complete Payment</span>
            </>
          )}
        </button>
      </form>
    </div>
  );

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-2xl max-w-4xl max-h-[90vh] w-full mx-4 overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b">
          <div className="flex space-x-4">
            <button
              onClick={() => setCurrentView('product')}
              className={`px-4 py-2 rounded-lg ${currentView === 'product' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              Product
            </button>
            <button
              onClick={() => setCurrentView('cart')}
              className={`px-4 py-2 rounded-lg ${currentView === 'cart' ? 'bg-blue-100 text-blue-700' : 'text-gray-600 hover:bg-gray-100'}`}
            >
              Cart ({cartItems.length})
            </button>
          </div>
          
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-120px)]">
          {currentView === 'product' && renderProductView()}
          {currentView === 'cart' && renderCartView()}
          {currentView === 'checkout' && renderCheckoutView()}
        </div>
      </div>
    </div>
  );
};

export default ShoppingModal;