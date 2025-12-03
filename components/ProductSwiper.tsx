
// "use client";

// import React, { useState } from "react";
// import { ChevronLeft, ChevronRight, ShoppingCart, Heart, Eye, Star } from "lucide-react";

// const products = [
//   {
//     id: 1,
//     name: "Wireless Noise-Canceling Headphones",
//     price: 299.99,
//     originalPrice: 399.99,
//     rating: 4.8,
//     reviews: 2847,
//     image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80",
//     badge: "Best Seller",
//     inStock: true
//   },
//   {
//     id: 2,
//     name: "4K Ultra HD Smart TV 55-inch",
//     price: 599.99,
//     originalPrice: 799.99,
//     rating: 4.6,
//     reviews: 1523,
//     image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=800&q=80",
//     badge: "Sale",
//     inStock: true
//   },
//   {
//     id: 3,
//     name: "Gaming Laptop RTX 4070",
//     price: 1899.99,
//     originalPrice: null,
//     rating: 4.9,
//     reviews: 892,
//     image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&q=80",
//     badge: "New",
//     inStock: true
//   },
//   {
//     id: 4,
//     name: "Mechanical RGB Gaming Keyboard",
//     price: 149.99,
//     originalPrice: 199.99,
//     rating: 4.7,
//     reviews: 3241,
//     image: "https://images.unsplash.com/photo-1595225476474-87563907a212?w=800&q=80",
//     badge: null,
//     inStock: true
//   },
//   {
//     id: 5,
//     name: "Wireless Mouse Pro",
//     price: 79.99,
//     originalPrice: null,
//     rating: 4.5,
//     reviews: 1876,
//     image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=800&q=80",
//     badge: null,
//     inStock: false
//   },
//   {
//     id: 6,
//     name: "USB-C Docking Station",
//     price: 189.99,
//     originalPrice: 249.99,
//     rating: 4.4,
//     reviews: 627,
//     image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=800&q=80",
//     badge: "Sale",
//     inStock: true
//   }
// ];

// export default function ProductSlider() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [hoveredProduct, setHoveredProduct] = useState(null);
//   const itemsPerView = 3;

//   const next = () => {
//     setCurrentIndex((prev) => 
//       prev + itemsPerView >= products.length ? 0 : prev + 1
//     );
//   };

//   const prev = () => {
//     setCurrentIndex((prev) => 
//       prev === 0 ? Math.max(0, products.length - itemsPerView) : prev - 1
//     );
//   };

//   const visibleProducts = products.slice(currentIndex, currentIndex + itemsPerView);

//   return (
//     <div className="w-full min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 py-16 px-4">
//       <div className="max-w-7xl mx-auto">
//         <div className="mb-12 text-center">
//           <h1 className="text-5xl font-bold text-slate-900 mb-3">Featured Electronics</h1>
//           <p className="text-slate-600 text-lg">Premium tech at unbeatable prices</p>
//         </div>

//         <div className="relative">
//           <button
//             onClick={prev}
//             className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 bg-white shadow-xl rounded-full p-3 hover:bg-slate-50 transition-all hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
//             disabled={currentIndex === 0}
//           >
//             <ChevronLeft className="w-6 h-6 text-slate-700" />
//           </button>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {visibleProducts.map((product) => (
//               <div
//                 key={product.id}
//                 className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
//                 onMouseEnter={() => setHoveredProduct(product.id)}
//                 onMouseLeave={() => setHoveredProduct(null)}
//               >
//                 {product.badge && (
//                   <div className={`absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-xs font-bold ${
//                     product.badge === "Sale" ? "bg-red-500 text-white" :
//                     product.badge === "New" ? "bg-blue-500 text-white" :
//                     "bg-amber-500 text-white"
//                   }`}>
//                     {product.badge}
//                   </div>
//                 )}

//                 <div className="absolute top-4 right-4 z-10 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
//                   <button className="bg-white rounded-full p-2 shadow-md hover:bg-red-50 hover:scale-110 transition-all">
//                     <Heart className="w-5 h-5 text-slate-700" />
//                   </button>
//                   <button className="bg-white rounded-full p-2 shadow-md hover:bg-blue-50 hover:scale-110 transition-all">
//                     <Eye className="w-5 h-5 text-slate-700" />
//                   </button>
//                 </div>

//                 <div className="relative h-72 overflow-hidden bg-slate-50">
//                   <img
//                     src={product.image}
//                     alt={product.name}
//                     className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                   />
//                   {!product.inStock && (
//                     <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
//                       <span className="text-white font-bold text-xl">Out of Stock</span>
//                     </div>
//                   )}
//                 </div>

//                 <div className="p-6">
//                   <div className="flex items-center gap-2 mb-2">
//                     <div className="flex items-center gap-1">
//                       <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
//                       <span className="text-sm font-semibold text-slate-700">{product.rating}</span>
//                     </div>
//                     <span className="text-sm text-slate-500">({product.reviews})</span>
//                   </div>

//                   <h3 className="text-lg font-bold text-slate-900 mb-3 line-clamp-2 min-h-[3.5rem]">
//                     {product.name}
//                   </h3>

//                   <div className="flex items-center gap-2 mb-4">
//                     <span className="text-2xl font-bold text-slate-900">
//                       ${product.price}
//                     </span>
//                     {product.originalPrice && (
//                       <span className="text-sm text-slate-500 line-through">
//                         ${product.originalPrice}
//                       </span>
//                     )}
//                     {product.originalPrice && (
//                       <span className="text-sm font-semibold text-red-500">
//                         {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
//                       </span>
//                     )}
//                   </div>

//                   <button
//                     disabled={!product.inStock}
//                     className={`w-full py-3 px-6 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all ${
//                       product.inStock
//                         ? "bg-slate-900 text-white hover:bg-slate-800 hover:scale-105"
//                         : "bg-slate-200 text-slate-500 cursor-not-allowed"
//                     }`}
//                   >
//                     <ShoppingCart className="w-5 h-5" />
//                     {product.inStock ? "Add to Cart" : "Out of Stock"}
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <button
//             onClick={next}
//             className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 bg-white shadow-xl rounded-full p-3 hover:bg-slate-50 transition-all hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
//             disabled={currentIndex + itemsPerView >= products.length}
//           >
//             <ChevronRight className="w-6 h-6 text-slate-700" />
//           </button>
//         </div>

//         <div className="flex justify-center gap-2 mt-12">
//           {Array.from({ length: Math.ceil(products.length / itemsPerView) }).map((_, idx) => (
//             <button
//               key={idx}
//               onClick={() => setCurrentIndex(idx * itemsPerView)}
//               className={`h-2 rounded-full transition-all ${
//                 Math.floor(currentIndex / itemsPerView) === idx
//                   ? "w-8 bg-slate-900"
//                   : "w-2 bg-slate-300 hover:bg-slate-400"
//               }`}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }


"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, ShoppingCart } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Cooler Master Elite 681 ARGB ATX Mid Tower Case",
    originalPrice: 7799,
    price: 5599,
    discount: 28,
    image: "https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=400&q=80"
  },
  {
    id: 2,
    name: "Asus Dual RTX 3050 OC Edition 6GB Gaming Graphics",
    originalPrice: 42999,
    price: 16610,
    discount: 61,
    image: "https://images.unsplash.com/photo-1591488320449-011701bb6704?w=400&q=80"
  },
  {
    id: 3,
    name: "Corsair Vengeance 16GB 5200MHz CL40 DDR5 RAM",
    originalPrice: 20000,
    price: 15996,
    discount: 20,
    image: "https://images.unsplash.com/photo-1541029071515-84cc54f84dc5?w=400&q=80"
  },
  {
    id: 4,
    name: "MSI MAG 274QRFW 27 Inch Gaming Monitor",
    originalPrice: 50000,
    price: 19930,
    discount: 60,
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&q=80"
  },
  {
    id: 5,
    name: "Cooler Master MasterLiquid 360 Core II ARGB CPU Liquid",
    originalPrice: 14999,
    price: 8390,
    discount: 44,
    image: "https://images.unsplash.com/photo-1625948515291-69613efd103f?w=400&q=80"
  },
  {
    id: 6,
    name: "Razer Kraken V4 X RGB Gaming Headset",
    originalPrice: 16999,
    price: 7680,
    discount: 54,
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80"
  }
];

export default function ProductSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(4);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth < 640) setItemsPerView(1);
      else if (window.innerWidth < 768) setItemsPerView(2);
      else if (window.innerWidth < 1024) setItemsPerView(3);
      else setItemsPerView(4);
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const canGoPrev = currentIndex > 0;
  const canGoNext = currentIndex < products.length - itemsPerView;

  const next = () => {
    if (canGoNext) setCurrentIndex(prev => prev + 1);
  };

  const prev = () => {
    if (canGoPrev) setCurrentIndex(prev => prev - 1);
  };

  const visibleProducts = products.slice(currentIndex, currentIndex + itemsPerView);

  return (
    <div className="w-full bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
            Trending Now
          </h2>
          <button className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1">
            See All
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
        <div
          className="relative"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <AnimatePresence>
            {isHovered && canGoPrev && (
              <motion.button
                initial={{ opacity: 0, x: 10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                transition={{ duration: 0.2 }}
                onClick={prev}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-white rounded-full p-3 shadow-xl hover:bg-gray-50 transition-colors"
              >
                <ChevronLeft className="w-6 h-6 text-gray-800" />
              </motion.button>
            )}
          </AnimatePresence>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {visibleProducts.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group"
              >
                <div className="relative aspect-square bg-gray-100 overflow-hidden">
                  {product.discount && (
                    <div className="absolute top-3 left-3 z-10 bg-blue-600 text-white text-sm font-bold px-3 py-1 rounded-full">
                      -{product.discount}%
                    </div>
                  )}
                  <Image
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
            
                </div>

                <div className="p-4">
                  <h3 className="text-sm font-medium text-gray-900 mb-3 line-clamp-2 min-h-[2.5rem]">
                    {product.name}
                  </h3>

                  <div className="mb-3">
                    {product.originalPrice && (
                      <div className="text-sm text-gray-500 line-through mb-1">
                        ₹{product.originalPrice.toLocaleString()}
                      </div>
                    )}
                    <div className="text-xl font-bold text-blue-600">
                      ₹{product.price.toLocaleString()}
                    </div>
                  </div>

                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2.5 rounded-lg flex items-center justify-center gap-2 transition-colors">
                    <ShoppingCart className="w-4 h-4" />
                    ADD TO CART
                  </button>
                </div>
              </motion.div>
            ))}
          </div>

          <AnimatePresence>
            {isHovered && canGoNext && (
              <motion.button
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -10 }}
                transition={{ duration: 0.2 }}
                onClick={next}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-white rounded-full p-3 shadow-xl hover:bg-gray-50 transition-colors"
              >
                <ChevronRight className="w-6 h-6 text-gray-800" />
              </motion.button>
            )}
          </AnimatePresence>
        </div>

        {/* {products.length > itemsPerView && (
          <div className="flex justify-center gap-2 mt-8">
            {Array.from({ 
              length: Math.ceil(products.length - itemsPerView + 1) 
            }).map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-2 rounded-full transition-all ${
                  currentIndex === idx
                    ? "w-8 bg-red-600"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </div>
        )} */}
      </div>
    </div>
  );
}