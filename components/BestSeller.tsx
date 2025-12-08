
"use client";

// import { useState } from "react";
// import { ChevronLeft, ChevronRight, Eye, Truck } from "lucide-react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Pagination } from "swiper/modules";
// import type { Swiper as SwiperType } from "swiper";
// import Image from "next/image";

// import "swiper/css";
// import "swiper/css/navigation";
// import "swiper/css/pagination";

// const products = [
//   {
//     id: 1,
//     name: "ASUS E410KA",
//     originalPrice: 18000,
//     price: 18000,
//     discount: 28,
//     image: "/laptop/asus.avif"
//   },
//   {
//     id: 2,
//     name: "DELL Inspiron 3521",
//     originalPrice: 13500,
//     price: 10000,
//     discount: 61,
//     image: "/laptop/dellinspiron.avif"
//   },
//   {
//     id: 3,
//     name: "HP 2000-2106TU",
//     originalPrice: 13000,
//     price: 10000,
//     discount: 20,
//     image: "/laptop/hp-200.avif"
//   },
//   {
//     id: 4,
//     name: "HP 430 G2",
//     originalPrice: 17000,
//     price: 13000,
//     discount: 60,
//     image: "/laptop/hp-420.avif"
//   },
//   {
//     id: 5,
//     name: "HP Pavilion M4-1003TX",
//     originalPrice: 14000,
//     price: 10000,
//     discount: 44,
//     image: "/laptop/hp-pavillon.avif"
//   },
//   {
//     id: 6,
//     name: "ASUS E410KA",
//     originalPrice: 18000,
//     price: 18000,
//     discount: 28,
//     image: "/laptop/asus.avif"
//   },
// ];

// export default function BestSeller() {
//   const [swiperInstance, setSwiperInstance] = useState<SwiperType | null>(null);
//   const [isBeginning, setIsBeginning] = useState(true);
//   const [isEnd, setIsEnd] = useState(false);

//   return (
//     <div className="w-full bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <div className="flex items-center justify-between mb-6">
//           <h2 className="text-xl sm:text-3xl font-bold text-gray-900">Best Seller</h2>
//           <button className="text-xs lg:text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1">
//             See All
//             <ChevronRight className="w-4 h-4" />
//           </button>
//         </div>

//         <div className="relative">
//           {!isBeginning && (
//             <button
//               onClick={() => swiperInstance?.slidePrev()}
//               className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-20 bg-white rounded-full p-3 shadow-xl hover:bg-gray-50 transition-colors"
//             >
//               <ChevronLeft className="w-4 h-4 lg:w-6 lg:h-6" />
//             </button>
//           )}

//           <Swiper
//             modules={[Navigation, Pagination]}
//             spaceBetween={16}
//             slidesPerView={2}
//             onSwiper={setSwiperInstance}
//             onSlideChange={(swiper) => {
//               setIsBeginning(swiper.isBeginning);
//               setIsEnd(swiper.isEnd);
//             }}
//             breakpoints={{
//               640: {
//                 slidesPerView: 2,
//               },
//               768: {
//                 slidesPerView: 3,
//               },
//               1024: {
//                 slidesPerView: 4,
//               },
//             }}
//           >
//             {products.map((product) => (
//               <SwiperSlide key={product.id}>
//                 <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group">
//                   <div className="relative aspect-square bg-gray-100 overflow-hidden">
//                 {product.discount && (
//         // CORRECTED: Absolute position with w-full, using internal padding (p-3)
//         // to keep badges within bounds and spaced from the edge.
//         <div className="absolute w-full top-0 left-0 z-10 p-2 sm:p-3 flex items-center justify-between">
          
//           {/* Discount Badge (Left Side) */}
//           <div className="bg-blue-600 text-white text-[10px] lg:text-sm lg:font-bold px-1.5 py-0.5 lg:px-3 lg:py-1 rounded-full shadow-md">
//             -{product.discount}%
//           </div>
          
//           {/* Free Delivery Badge (Right Side) */}
//           {/* Note: Added 'bg-white shadow-md' for better visibility against the image */}
//           <div className="bg-white text-blue-600 rounded-full p-1 flex items-center gap-0.5 lg:p-1.5 shadow-md">
//             <Truck className="w-4 h-4 lg:w-4 lg:h-4" /> 
//             <span className="text-blue-500 font-semibold text-[10px] lg:text-sm">Free Delivery</span>
//           </div>
//         </div>
//       )}
                 

//                     <Image
//                       src={product.image}
//                       width={400}
//                       height={400}
//                       alt={product.name}
//                       className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                     />
//                   </div>

//                   <div className="p-2.5 lg:p-4">
//                     <h3 className="text-sm lg:text-lg font-medium text-gray-900 mb-1 lg:mb-2 line-clamp-2 xl:min-h-[2rem]">
//                       {product.name}
//                     </h3>

//                     <div className="mb-2 lg:mb-3">
//                       <div className="flex items-center gap-2">
//                       {product.originalPrice && (
//                         <div className="text-xs lg:text-sm text-gray-500 line-through lg:mb-0">
//                           ₹{product.originalPrice.toLocaleString()}
//                         </div>
//                       )}
         
//                         <div className="text-sm sm:text-lg lg:text-xl font-bold text-blue-600">
//                         ₹{product.price.toLocaleString()}
//                       </div>
                                   
//                     </div>
//                     </div>

//                     <button className="w-full bg-blue-600 hover:bg-blue-700 rounded-sm text-white font-semibold py-2.5 text-xs sm:text-sm lg:rounded-lg flex items-center justify-center gap-2 transition-colors">
//                       <Eye className="w-4 h-4" />
//                       View Product
//                     </button>
//                   </div>
//                 </div>
//               </SwiperSlide>
//             ))}
//           </Swiper>

//           {!isEnd && (
//             <button
//               onClick={() => swiperInstance?.slideNext()}
//               className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-20 bg-white rounded-full p-3 shadow-xl hover:bg-gray-50 transition-colors"
//             >
//               <ChevronRight className="w-4 h-4 lg:w-6 lg:h-6" />
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }

// 'use client'

// import React, { useState, useEffect } from 'react';
// import { ChevronRight, Eye, Truck, Star, TrendingUp, Users, Shield, Zap } from 'lucide-react';

// const BestSellerHeroSection = () => {
//   const [timeLeft, setTimeLeft] = useState({
//     hours: 23,
//     minutes: 45,
//     seconds: 30
//   });

//   // Countdown timer
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setTimeLeft(prev => {
//         if (prev.seconds > 0) {
//           return { ...prev, seconds: prev.seconds - 1 };
//         } else if (prev.minutes > 0) {
//           return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
//         } else if (prev.hours > 0) {
//           return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
//         }
//         return prev;
//       });
//     }, 1000);

//     return () => clearInterval(timer);
//   }, []);

//   const products = [
//     {
//       id: 1,
//       name: 'Dell Latitude 5420',
//       specs: 'Intel i7 | 16GB RAM | 512GB SSD',
//       originalPrice: 45000,
//       price: 28000,
//       discount: 38,
//       image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600',
//       rating: 4.8,
//       sold: 234,
//       badge: 'HOT DEAL'
//     },
//     {
//       id: 2,
//       name: 'HP EliteBook 840',
//       specs: 'Intel i5 | 8GB RAM | 256GB SSD',
//       originalPrice: 35000,
//       price: 22000,
//       discount: 37,
//       image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600',
//       rating: 4.7,
//       sold: 189,
//       badge: 'BEST SELLER'
//     },
//     {
//       id: 3,
//       name: 'Lenovo ThinkPad T480',
//       specs: 'Intel i5 | 8GB RAM | 256GB SSD',
//       originalPrice: 32000,
//       price: 20000,
//       discount: 38,
//       image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600',
//       rating: 4.9,
//       sold: 312,
//       badge: 'TRENDING'
//     }
//   ];

//   const stats = [
//     { icon: Users, value: '10,000+', label: 'Happy Customers' },
//     { icon: Shield, value: '6 Month', label: 'Warranty' },
//     { icon: TrendingUp, value: '50-70%', label: 'Savings' }
//   ];

//   return (
//     <div className="w-full bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 py-8 md:py-12 lg:py-16">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
//           {/* Left Side - Content */}
//           <div className="text-white space-y-6 lg:space-y-8">
//             {/* Badge */}
//             <div className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg animate-pulse">
//               <Zap className="w-4 h-4" />
//               Limited Time Offer
//             </div>

//             {/* Main Heading */}
//             <div>
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
//                 Best Sellers
//                 <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">
//                   This Week
//                 </span>
//               </h1>
//               <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
//                 Don't miss out on our most popular refurbished laptops. 
//                 <span className="block mt-2 text-cyan-400 font-semibold">
//                   Premium quality at unbeatable prices!
//                 </span>
//               </p>
//             </div>

//             {/* Psychological Triggers */}
//             <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/10 rounded-2xl p-6 space-y-4">
//               <div className="flex items-start gap-3">
//                 <div className="bg-green-500 rounded-full p-1 mt-1">
//                   <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                   </svg>
//                 </div>
//                 <div>
//                   <p className="font-semibold text-lg">10,000+ Satisfied Customers</p>
//                   <p className="text-sm text-slate-400">Join thousands who trust us for quality refurbished laptops</p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-3">
//                 <div className="bg-green-500 rounded-full p-1 mt-1">
//                   <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                   </svg>
//                 </div>
//                 <div>
//                   <p className="font-semibold text-lg">6 Months Warranty Included</p>
//                   <p className="text-sm text-slate-400">Buy with confidence - full warranty protection</p>
//                 </div>
//               </div>

//               <div className="flex items-start gap-3">
//                 <div className="bg-green-500 rounded-full p-1 mt-1">
//                   <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
//                     <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
//                   </svg>
//                 </div>
//                 <div>
//                   <p className="font-semibold text-lg">Save 50-70% vs New</p>
//                   <p className="text-sm text-slate-400">Premium laptops at fraction of retail price</p>
//                 </div>
//               </div>
//             </div>

//             {/* Countdown Timer */}
//             <div className="bg-gradient-to-r from-red-500/20 to-orange-500/20 backdrop-blur-sm border border-red-500/30 rounded-2xl p-6">
//               <p className="text-sm text-red-300 font-semibold mb-3 flex items-center gap-2">
//                 <Zap className="w-4 h-4" />
//                 Flash Sale Ends In:
//               </p>
//               <div className="flex gap-3 justify-center lg:justify-start">
//                 <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 min-w-[70px] text-center">
//                   <div className="text-3xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</div>
//                   <div className="text-xs text-slate-400 mt-1">Hours</div>
//                 </div>
//                 <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 min-w-[70px] text-center">
//                   <div className="text-3xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</div>
//                   <div className="text-xs text-slate-400 mt-1">Minutes</div>
//                 </div>
//                 <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 min-w-[70px] text-center">
//                   <div className="text-3xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</div>
//                   <div className="text-xs text-slate-400 mt-1">Seconds</div>
//                 </div>
//               </div>
//             </div>

//             {/* Stats */}
//             <div className="grid grid-cols-3 gap-4">
//               {stats.map((stat, index) => (
//                 <div key={index} className="text-center">
//                   <stat.icon className="w-8 h-8 mx-auto mb-2 text-cyan-400" />
//                   <div className="text-2xl font-bold">{stat.value}</div>
//                   <div className="text-xs text-slate-400">{stat.label}</div>
//                 </div>
//               ))}
//             </div>

//             {/* CTA Button */}
//             <div className="flex flex-col sm:flex-row gap-4">
//               <button className="bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white font-bold py-4 px-8 rounded-full shadow-2xl hover:shadow-cyan-500/50 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 text-lg">
//                 Shop Now
//                 <ChevronRight className="w-5 h-5" />
//               </button>
//               <button className="bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/20 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 flex items-center justify-center gap-2">
//                 View All Deals
//               </button>
//             </div>
//           </div>

//           {/* Right Side - Product Cards */}
//           <div className="grid grid-cols-1 gap-4 lg:gap-5">
//             {products.map((product, index) => (
//               <div
//                 key={product.id}
//                 className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 group"
//                 style={{
//                   animation: `slideIn 0.5s ease-out ${index * 0.1}s both`
//                 }}
//               >
//                 <div className="grid grid-cols-5 gap-3 p-3 md:p-4">
//                   {/* Product Image */}
//                   <div className="col-span-2 relative">
//                     <div className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
//                       {/* Badge */}
//                       <div className="absolute top-2 left-2 z-10 bg-gradient-to-r from-red-600 to-orange-600 text-white text-xs font-bold px-2 py-1 rounded-lg shadow-lg">
//                         {product.badge}
//                       </div>
                      
//                       {/* Discount Badge */}
//                       <div className="absolute top-2 right-2 z-10 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full shadow-lg">
//                         -{product.discount}%
//                       </div>

//                       <img
//                         src={product.image}
//                         alt={product.name}
//                         className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
//                       />
//                     </div>
//                   </div>

//                   {/* Product Details */}
//                   <div className="col-span-3 flex flex-col justify-between">
//                     <div>
//                       <h3 className="text-sm md:text-base lg:text-lg font-bold text-gray-900 mb-1 line-clamp-1">
//                         {product.name}
//                       </h3>
//                       <p className="text-xs md:text-sm text-gray-600 mb-2 line-clamp-1">
//                         {product.specs}
//                       </p>

//                       {/* Rating & Sold */}
//                       <div className="flex items-center gap-3 mb-2">
//                         <div className="flex items-center gap-1">
//                           <Star className="w-3 h-3 md:w-4 md:h-4 fill-yellow-400 text-yellow-400" />
//                           <span className="text-xs md:text-sm font-semibold text-gray-900">{product.rating}</span>
//                         </div>
//                         <div className="text-xs text-gray-500">
//                           {product.sold} sold
//                         </div>
//                       </div>

//                       {/* Price */}
//                       <div className="mb-2">
//                         <div className="flex items-center gap-2">
//                           <span className="text-xs md:text-sm text-gray-500 line-through">
//                             ₹{product.originalPrice.toLocaleString('en-IN')}
//                           </span>
//                           <span className="text-lg md:text-xl lg:text-2xl font-bold text-blue-600">
//                             ₹{product.price.toLocaleString('en-IN')}
//                           </span>
//                         </div>
//                       </div>

//                       {/* Free Delivery */}
//                       <div className="flex items-center gap-1 text-green-600 text-xs">
//                         <Truck className="w-3 h-3" />
//                         <span className="font-semibold">Free Delivery</span>
//                       </div>
//                     </div>

//                     {/* View Button */}
//                     <button className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 md:py-2.5 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 text-xs md:text-sm shadow-md hover:shadow-lg">
//                       <Eye className="w-3 h-3 md:w-4 md:h-4" />
//                       View Details
//                     </button>
//                   </div>
//                 </div>

//                 {/* Progress Bar - Stock Indicator */}
//                 <div className="px-3 md:px-4 pb-3 md:pb-4">
//                   <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
//                     <div 
//                       className="bg-gradient-to-r from-orange-500 to-red-500 h-full rounded-full"
//                       style={{ width: '68%' }}
//                     ></div>
//                   </div>
//                   <div className="flex justify-between text-xs text-gray-600 mt-1">
//                     <span>68% Claimed</span>
//                     <span className="text-red-600 font-semibold">Only few left!</span>
//                   </div>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes slideIn {
//           from {
//             opacity: 0;
//             transform: translateX(30px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default BestSellerHeroSection;


// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight, Eye, Truck } from 'lucide-react';

// const BestSellerHeroSection = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [itemsPerView, setItemsPerView] = useState(3);

//   const products = [
//     {
//       id: 1,
//       name: 'Dell Latitude Laptop 5420',
//       specs: 'Intel i7-11th Gen | 14" HD Touchscreen | Win 11 Pro',
//       condition: 'Refurbished',
//       stock: 277,
//       image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600',
//       originalPrice: 120799,
//       price: 31949,
//       discount: 74,
//       badge: 'BLACK FRIDAY'
//     },
//     {
//       id: 2,
//       name: 'Dell Vostro SFF Desktop Computer PC',
//       specs: 'Intel i3-7th Gen | Win 11 Pro',
//       condition: 'Refurbished',
//       stock: 227,
//       image: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=600',
//       originalPrice: 35000,
//       price: 10749,
//       discount: 69,
//       badge: 'BLACK FRIDAY'
//     },
//     {
//       id: 3,
//       name: 'Dell Latitude Laptop 5490',
//       specs: 'Intel i7-8th Gen | 14" HD | Win 11 Pro',
//       condition: 'Refurbished',
//       stock: 113,
//       image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600',
//       originalPrice: 75000,
//       price: 22449,
//       discount: 70,
//       badge: 'BLACK FRIDAY'
//     },
//     {
//       id: 4,
//       name: 'HP EliteBook 840 G5',
//       specs: 'Intel i5-8th Gen | 14" FHD | Win 11 Pro',
//       condition: 'Refurbished',
//       stock: 156,
//       image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600',
//       originalPrice: 95000,
//       price: 28999,
//       discount: 69,
//       badge: 'BLACK FRIDAY'
//     }
//   ];

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 768) {
//         setItemsPerView(1);
//       } else if (window.innerWidth < 1024) {
//         setItemsPerView(2);
//       } else {
//         setItemsPerView(3);
//       }
//     };

//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const maxIndex = Math.max(0, products.length - itemsPerView);

//   const handlePrevious = () => {
//     setCurrentIndex((prev) => Math.max(0, prev - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
//   };

//   const canGoPrevious = currentIndex > 0;
//   const canGoNext = currentIndex < maxIndex;

//   return (
//     <div className="w-full bg-black py-8 md:py-12 lg:py-16">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
//           {/* Left Side - Text Content */}
//           <div className="lg:col-span-3 space-y-4">
//             <div>
//               <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
//                 New Drops. Don't Miss Them!
//               </h2>
//               <p className="text-xl md:text-2xl text-emerald-400 font-semibold">
//                 Grab Yours Now!
//               </p>
//             </div>

//             <div className="space-y-3">
//               <button className="flex items-center gap-2 text-white text-base md:text-lg hover:text-emerald-400 transition-colors">
//                 <span className="w-2 h-2 bg-white rounded-full"></span>
//                 Best Sellers
//               </button>
//               <button className="flex items-center gap-2 text-gray-400 text-base md:text-lg hover:text-emerald-400 transition-colors">
//                 <span className="w-2 h-2 bg-transparent border border-gray-400 rounded-full"></span>
//                 New Arrivals
//               </button>
//             </div>
//           </div>

//           {/* Right Side - Product Slider */}
//           <div className="lg:col-span-9 relative">
//             {/* Previous Button */}
//             {canGoPrevious && (
//               <button
//                 onClick={handlePrevious}
//                 className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10 bg-white hover:bg-emerald-400 rounded-full p-2.5 md:p-3 shadow-2xl transition-all duration-300 group"
//                 aria-label="Previous products"
//               >
//                 <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-gray-800 group-hover:text-white" />
//               </button>
//             )}

//             {/* Products Container */}
//             <div className="overflow-hidden">
//               <div
//                 className="flex gap-4 transition-transform duration-500 ease-in-out"
//                 style={{
//                   transform: `translateX(-${currentIndex * (100 / itemsPerView + 4 / itemsPerView)}%)`
//                 }}
//               >
//                 {products.map((product) => (
//                   <div
//                     key={product.id}
//                     className="flex-shrink-0"
//                     style={{ width: `calc(${100 / itemsPerView}% - ${(4 * (itemsPerView - 1)) / itemsPerView}px)` }}
//                   >
//                     <div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300 border border-gray-700 hover:border-emerald-500/50 group">
//                       {/* Image Container */}
//                       <div className="relative bg-gradient-to-br from-gray-700 via-gray-600 to-gray-700 p-6 md:p-8">
//                         {/* Badge */}
//                         <div className="absolute top-4 left-4 z-10">
//                           <div className="bg-red-600 text-white px-3 py-1.5 rounded-lg font-bold text-xs md:text-sm shadow-lg transform -rotate-3">
//                             {product.badge}
//                           </div>
//                         </div>

//                         {/* Discount Badge */}
//                         <div className="absolute top-4 right-4 z-10 bg-cyan-500 text-white px-2 py-1 rounded-lg font-bold text-xs md:text-sm text-center shadow-lg">
//                           {product.discount}% Off
//                         </div>

//                         {/* Hanging Lamps */}
//                         <div className="absolute top-0 left-1/4 w-0.5 h-12 bg-gradient-to-b from-yellow-600 to-transparent"></div>
//                         <div className="absolute top-0 right-1/4 w-0.5 h-12 bg-gradient-to-b from-yellow-600 to-transparent"></div>

//                         {/* Product Image */}
//                         <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm">
//                           <img
//                             src={product.image}
//                             alt={product.name}
//                             className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500"
//                             loading="lazy"
//                           />
//                         </div>
//                       </div>

//                       {/* Product Details */}
//                       <div className="p-4 md:p-5 bg-white">
//                         {/* Stock Status */}
//                         <div className="flex items-center gap-2 mb-3">
//                           <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
//                           <span className="text-emerald-600 text-xs md:text-sm font-medium">
//                             In stock ({product.stock} units)
//                           </span>
//                         </div>

//                         {/* Product Name */}
//                         <h3 className="text-gray-900 font-semibold text-sm md:text-base mb-2 line-clamp-1">
//                           {product.name}
//                         </h3>

//                         {/* Specs */}
//                         <p className="text-gray-600 text-xs md:text-sm mb-2 line-clamp-2">
//                           {product.specs}
//                         </p>

//                         {/* Condition */}
//                         <div className="mb-3">
//                           <span className="text-gray-500 text-xs">| {product.condition}</span>
//                         </div>

//                         {/* Price Section */}
//                         <div className="flex items-center gap-2 mb-3">
//                           <span className="text-gray-900 font-bold text-lg md:text-xl">
//                             ₹{product.price.toLocaleString('en-IN')}
//                           </span>
//                           <span className="text-gray-500 line-through text-xs md:text-sm">
//                             ₹{product.originalPrice.toLocaleString('en-IN')}
//                           </span>
//                         </div>

//                         {/* View Product Button */}
//                         <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 md:py-3 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg text-sm md:text-base">
//                           <Eye className="w-4 h-4 md:w-5 md:h-5" />
//                           View Product
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Next Button */}
//             {canGoNext && (
//               <button
//                 onClick={handleNext}
//                 className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-10 bg-white hover:bg-emerald-400 rounded-full p-2.5 md:p-3 shadow-2xl transition-all duration-300 group"
//                 aria-label="Next products"
//               >
//                 <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-gray-800 group-hover:text-white" />
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BestSellerHeroSection;


    // import React, { useState, useEffect } from 'react';
    // import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';

    // const BestSellerHeroSection = () => {
    // const [currentIndex, setCurrentIndex] = useState(0);
    // const [itemsPerView, setItemsPerView] = useState(3);
    // const [activeTab, setActiveTab] = useState('bestsellers');

    // const bestSellers = [
    //     {
    //     id: 1,
    //     name: 'Dell Latitude 5420',
    //     specs: 'Intel i7-11th Gen | 14" HD Touchscreen',
    //     condition: 'Refurbished',
    //     stock: 277,
    //     image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600',
    //     originalPrice: 120799,
    //     price: 31949,
    //     discount: 74
    //     },
    //     {
    //     id: 2,
    //     name: 'Dell Vostro SFF Desktop',
    //     specs: 'Intel i3-7th Gen | Win 11 Pro',
    //     condition: 'Refurbished',
    //     stock: 227,
    //     image: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=600',
    //     originalPrice: 35000,
    //     price: 10749,
    //     discount: 69
    //     },
    //     {
    //     id: 3,
    //     name: 'Dell Latitude 5490',
    //     specs: 'Intel i7-8th Gen | 14" HD',
    //     condition: 'Refurbished',
    //     stock: 113,
    //     image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600',
    //     originalPrice: 75000,
    //     price: 22449,
    //     discount: 70
    //     },
    //     {
    //     id: 4,
    //     name: 'HP EliteBook 840',
    //     specs: 'Intel i5-8th Gen | 14" FHD',
    //     condition: 'Refurbished',
    //     stock: 156,
    //     image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600',
    //     originalPrice: 95000,
    //     price: 28999,
    //     discount: 69
    //     },
    //     {
    //     id: 5,
    //     name: 'Lenovo ThinkPad T480',
    //     specs: 'Intel i5-8th Gen | 14" FHD',
    //     condition: 'Refurbished',
    //     stock: 198,
    //     image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600',
    //     originalPrice: 88000,
    //     price: 26599,
    //     discount: 70
    //     }
    // ];

    // const newArrivals = [
    //     {
    //     id: 6,
    //     name: 'MacBook Air M1',
    //     specs: 'Apple M1 Chip | 8GB RAM | 256GB SSD',
    //     condition: 'Refurbished',
    //     stock: 45,
    //     image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600',
    //     originalPrice: 92900,
    //     price: 65000,
    //     discount: 30
    //     },
    //     {
    //     id: 7,
    //     name: 'Dell XPS 13 9310',
    //     specs: 'Intel i7-11th Gen | 16GB RAM',
    //     condition: 'Refurbished',
    //     stock: 32,
    //     image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600',
    //     originalPrice: 125000,
    //     price: 85000,
    //     discount: 32
    //     },
    //     {
    //     id: 8,
    //     name: 'HP Pavilion Gaming',
    //     specs: 'Ryzen 5 | GTX 1650 | 8GB RAM',
    //     condition: 'Refurbished',
    //     stock: 67,
    //     image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600',
    //     originalPrice: 68000,
    //     price: 45000,
    //     discount: 34
    //     },
    //     {
    //     id: 9,
    //     name: 'ASUS VivoBook 15',
    //     specs: 'Intel i5-10th Gen | 8GB RAM',
    //     condition: 'Refurbished',
    //     stock: 89,
    //     image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600',
    //     originalPrice: 52000,
    //     price: 35000,
    //     discount: 33
    //     }
    // ];

    // const products = activeTab === 'bestsellers' ? bestSellers : newArrivals;

    // useEffect(() => {
    //     setCurrentIndex(0);
    // }, [activeTab]);

    // useEffect(() => {
    //     const handleResize = () => {
    //     if (window.innerWidth < 768) {
    //         setItemsPerView(1);
    //     } else if (window.innerWidth < 1024) {
    //         setItemsPerView(2);
    //     } else {
    //         setItemsPerView(3);
    //     }
    //     };

    //     handleResize();
    //     window.addEventListener('resize', handleResize);
    //     return () => window.removeEventListener('resize', handleResize);
    // }, []);

    // const maxIndex = Math.max(0, products.length - itemsPerView);

    // const handlePrevious = () => {
    //     setCurrentIndex((prev) => Math.max(0, prev - 1));
    // };

    // const handleNext = () => {
    //     setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
    // };

    // const canGoPrevious = currentIndex > 0;
    // const canGoNext = currentIndex < maxIndex;

    // return (
    //     <div className="w-full bg-black py-8 md:py-12 lg:py-16">
    //     <div className="max-w-auto mx-auto px-4">
    //         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
    //         {/* Left Side - Text Content */}
    //         <div className="lg:col-span-3 space-y-4">
    //             <div>
    //             <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
    //                 New Drops. Don't Miss Them!
    //             </h2>
    //             <p className="text-xl md:text-2xl text-emerald-400 font-semibold">
    //                 Grab Yours Now!
    //             </p>
    //             </div>

    //             <div className="space-y-3">
    //             <button
    //                 onClick={() => setActiveTab('bestsellers')}
    //                 className={`flex items-center gap-2 text-base md:text-lg transition-colors ${
    //                 activeTab === 'bestsellers' ? 'text-white' : 'text-gray-400 hover:text-emerald-400'
    //                 }`}
    //             >
    //                 <span className={`w-2 h-2 rounded-full ${
    //                 activeTab === 'bestsellers' ? 'bg-white' : 'bg-transparent border border-gray-400'
    //                 }`}></span>
    //                 Best Sellers
    //             </button>
    //             <button
    //                 onClick={() => setActiveTab('newarrivals')}
    //                 className={`flex items-center gap-2 text-base md:text-lg transition-colors ${
    //                 activeTab === 'newarrivals' ? 'text-white' : 'text-gray-400 hover:text-emerald-400'
    //                 }`}
    //             >
    //                 <span className={`w-2 h-2 rounded-full ${
    //                 activeTab === 'newarrivals' ? 'bg-white' : 'bg-transparent border border-gray-400'
    //                 }`}></span>
    //                 New Arrivals
    //             </button>
    //             </div>
    //         </div>

    //         {/* Right Side - Product Slider */}
    //         <div className="lg:col-span-9 relative">
    //             {/* Previous Button */}
    //             {canGoPrevious && (
    //             <button
    //                 onClick={handlePrevious}
    //                 className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-5 z-20 bg-white hover:bg-emerald-400 rounded-full p-2 md:p-3 shadow-2xl transition-all duration-300 group"
    //                 aria-label="Previous products"
    //             >
    //                 <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-gray-800 group-hover:text-white" />
    //             </button>
    //             )}

    //             {/* Products Container */}
    //             <div className="overflow-hidden px-1">
    //             <div
    //                 className="flex transition-transform duration-500 ease-in-out"
    //                 style={{
    //                 transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`,
    //                 gap: '1rem'
    //                 }}
    //             >
    //                 {products.map((product) => (
    //                 <div
    //                     key={product.id}
    //                     className="flex-shrink-0 px-2"
    //                     style={{ width: `${100 / itemsPerView}%` }}
    //                 >
    //                     <div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300 border border-gray-700 hover:border-emerald-500/50 group">
    //                     {/* Image Container */}
    //                     <div className="relative bg-gradient-to-br from-gray-700 via-gray-600 to-gray-700 p-4 md:p-6">
    //                         {/* Badge */}
    //                         <div className="absolute top-3 left-3 z-10">
    //                         <div className="bg-red-600 text-white px-2 md:px-3 py-1 rounded-lg font-bold text-xs shadow-lg transform -rotate-3">
    //                             BLACK FRIDAY
    //                         </div>
    //                         </div>

    //                         {/* Discount Badge */}
    //                         <div className="absolute top-3 right-3 z-10 bg-cyan-500 text-white px-2 py-1 rounded-lg font-bold text-xs text-center shadow-lg">
    //                         {product.discount}% Off
    //                         </div>

    //                         {/* Hanging Lamps */}
    //                         <div className="absolute top-0 left-1/4 w-0.5 h-8 bg-gradient-to-b from-yellow-600 to-transparent"></div>
    //                         <div className="absolute top-0 right-1/4 w-0.5 h-8 bg-gradient-to-b from-yellow-600 to-transparent"></div>

    //                         {/* Product Image */}
    //                         <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm">
    //                         <img
    //                             src={product.image}
    //                             alt={product.name}
    //                             className="w-full h-full object-contain p-2 md:p-4 group-hover:scale-105 transition-transform duration-500"
    //                             loading="lazy"
    //                         />
    //                         </div>
    //                     </div>

    //                     {/* Product Details */}
    //                     <div className="p-3 md:p-4 bg-white">
    //                         {/* Stock Status */}
    //                         <div className="flex items-center gap-2 mb-2">
    //                         <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
    //                         <span className="text-emerald-600 text-xs font-medium">
    //                             In stock ({product.stock} units)
    //                         </span>
    //                         </div>

    //                         {/* Product Name */}
    //                         <h3 className="text-gray-900 font-semibold text-sm md:text-base mb-1 line-clamp-1">
    //                         {product.name}
    //                         </h3>

    //                         {/* Specs */}
    //                         <p className="text-gray-600 text-xs mb-2 line-clamp-1">
    //                         {product.specs}
    //                         </p>

    //                         {/* Condition */}
    //                         <div className="mb-2">
    //                         <span className="text-gray-500 text-xs">| {product.condition}</span>
    //                         </div>

    //                         {/* Price Section */}
    //                         <div className="flex items-center gap-2 mb-3">
    //                         <span className="text-gray-900 font-bold text-base md:text-lg">
    //                             ₹{product.price.toLocaleString('en-IN')}
    //                         </span>
    //                         <span className="text-gray-500 line-through text-xs">
    //                             ₹{product.originalPrice.toLocaleString('en-IN')}
    //                         </span>
    //                         </div>

    //                         {/* View Product Button */}
    //                         <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg text-xs md:text-sm">
    //                         <Eye className="w-3 h-3 md:w-4 md:h-4" />
    //                         View Product
    //                         </button>
    //                     </div>
    //                     </div>
    //                 </div>
    //                 ))}
    //             </div>
    //             </div>

    //             {/* Next Button */}
    //             {canGoNext && (
    //             <button
    //                 onClick={handleNext}
    //                 className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-5 z-20 bg-white hover:bg-emerald-400 rounded-full p-2 md:p-3 shadow-2xl transition-all duration-300 group"
    //                 aria-label="Next products"
    //             >
    //                 <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-gray-800 group-hover:text-white" />
    //             </button>
    //             )}
    //         </div>
    //         </div>
    //     </div>
    //     </div>
    // );
    // };

    // export default BestSellerHeroSection;

//     import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';

// const BestSellerHeroSection = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [itemsPerView, setItemsPerView] = useState(3);
//   const [activeTab, setActiveTab] = useState('bestsellers');

//   const bestSellers = [
//     {
//       id: 1,
//       name: 'Dell Latitude 5420',
//       specs: 'Intel i7-11th Gen | 14" HD Touchscreen',
//       condition: 'Refurbished',
//       stock: 277,
//       image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600',
//       originalPrice: 120799,
//       price: 31949,
//       discount: 74
//     },
//     {
//       id: 2,
//       name: 'Dell Vostro SFF Desktop',
//       specs: 'Intel i3-7th Gen | Win 11 Pro',
//       condition: 'Refurbished',
//       stock: 227,
//       image: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=600',
//       originalPrice: 35000,
//       price: 10749,
//       discount: 69
//     },
//     {
//       id: 3,
//       name: 'Dell Latitude 5490',
//       specs: 'Intel i7-8th Gen | 14" HD',
//       condition: 'Refurbished',
//       stock: 113,
//       image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600',
//       originalPrice: 75000,
//       price: 22449,
//       discount: 70
//     },
//     {
//       id: 4,
//       name: 'HP EliteBook 840',
//       specs: 'Intel i5-8th Gen | 14" FHD',
//       condition: 'Refurbished',
//       stock: 156,
//       image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600',
//       originalPrice: 95000,
//       price: 28999,
//       discount: 69
//     },
//     {
//       id: 5,
//       name: 'Lenovo ThinkPad T480',
//       specs: 'Intel i5-8th Gen | 14" FHD',
//       condition: 'Refurbished',
//       stock: 198,
//       image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600',
//       originalPrice: 88000,
//       price: 26599,
//       discount: 70
//     }
//   ];

//   const newArrivals = [
//     {
//       id: 6,
//       name: 'MacBook Air M1',
//       specs: 'Apple M1 Chip | 8GB RAM | 256GB SSD',
//       condition: 'Refurbished',
//       stock: 45,
//       image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600',
//       originalPrice: 92900,
//       price: 65000,
//       discount: 30
//     },
//     {
//       id: 7,
//       name: 'Dell XPS 13 9310',
//       specs: 'Intel i7-11th Gen | 16GB RAM',
//       condition: 'Refurbished',
//       stock: 32,
//       image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600',
//       originalPrice: 125000,
//       price: 85000,
//       discount: 32
//     },
//     {
//       id: 8,
//       name: 'HP Pavilion Gaming',
//       specs: 'Ryzen 5 | GTX 1650 | 8GB RAM',
//       condition: 'Refurbished',
//       stock: 67,
//       image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600',
//       originalPrice: 68000,
//       price: 45000,
//       discount: 34
//     },
//     {
//       id: 9,
//       name: 'ASUS VivoBook 15',
//       specs: 'Intel i5-10th Gen | 8GB RAM',
//       condition: 'Refurbished',
//       stock: 89,
//       image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600',
//       originalPrice: 52000,
//       price: 35000,
//       discount: 33
//     }
//   ];

//   const products = activeTab === 'bestsellers' ? bestSellers : newArrivals;

//   useEffect(() => {
//     setCurrentIndex(0);
//   }, [activeTab]);

//   useEffect(() => {
//     const handleResize = () => {
//       if (window.innerWidth < 768) {
//         setItemsPerView(1);
//       } else if (window.innerWidth < 1024) {
//         setItemsPerView(2);
//       } else {
//         setItemsPerView(3);
//       }
//     };

//     handleResize();
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, []);

//   const maxIndex = Math.max(0, products.length - itemsPerView);

//   const handlePrevious = () => {
//     setCurrentIndex((prev) => Math.max(0, prev - 1));
//   };

//   const handleNext = () => {
//     setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
//   };

//   const canGoPrevious = currentIndex > 0;
//   const canGoNext = currentIndex < maxIndex;

//   return (
//     <div className="w-full bg-black py-8 md:py-12 lg:py-16">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
//           {/* Left Side - Text Content */}
//           <div className="lg:col-span-3 space-y-4">
//             <div>
//               <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
//                 New Drops. Don't Miss Them!
//               </h2>
//               <p className="text-xl md:text-2xl text-emerald-400 font-semibold">
//                 Grab Yours Now!
//               </p>
//             </div>

//             <div className="space-y-3">
//               <button
//                 onClick={() => setActiveTab('bestsellers')}
//                 className={`flex items-center gap-2 text-base md:text-lg transition-colors ${
//                   activeTab === 'bestsellers' ? 'text-white' : 'text-gray-400 hover:text-emerald-400'
//                 }`}
//               >
//                 <span className={`w-2 h-2 rounded-full ${
//                   activeTab === 'bestsellers' ? 'bg-white' : 'bg-transparent border border-gray-400'
//                 }`}></span>
//                 Best Sellers
//               </button>
//               <button
//                 onClick={() => setActiveTab('newarrivals')}
//                 className={`flex items-center gap-2 text-base md:text-lg transition-colors ${
//                   activeTab === 'newarrivals' ? 'text-white' : 'text-gray-400 hover:text-emerald-400'
//                 }`}
//               >
//                 <span className={`w-2 h-2 rounded-full ${
//                   activeTab === 'newarrivals' ? 'bg-white' : 'bg-transparent border border-gray-400'
//                 }`}></span>
//                 New Arrivals
//               </button>
//             </div>
//           </div>

//           {/* Right Side - Product Slider */}
//           <div className="lg:col-span-9 relative">
//             {/* Previous Button */}
//             {canGoPrevious && (
//               <button
//                 onClick={handlePrevious}
//                 className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-3 md:-translate-x-5 z-20 bg-white hover:bg-emerald-400 rounded-full p-2 md:p-3 shadow-2xl transition-all duration-300 group"
//                 aria-label="Previous products"
//               >
//                 <ChevronLeft className="w-4 h-4 md:w-6 md:h-6 text-gray-800 group-hover:text-white" />
//               </button>
//             )}

//             {/* Products Container */}
//             <div className="overflow-hidden relative">
//           <div
//   className="flex gap-4 transition-transform duration-500 ease-in-out"
//   style={{
//     transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)`
//   }}
// >

//                 {products.map((product) => (
//                   <div
//                     key={product.id}
//                     className="flex-shrink-0"
// style={{ width: `${100 / itemsPerView}%` }}
//                   >
//                     <div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl overflow-hidden shadow-2xl hover:shadow-emerald-500/20 transition-all duration-300 border border-gray-700 hover:border-emerald-500/50 group">
//                       {/* Image Container */}
//                       <div className="relative bg-gradient-to-br from-gray-700 via-gray-600 to-gray-700 p-4 md:p-6">
//                         {/* Badge */}
//                         <div className="absolute top-3 left-3 z-10">
//                           <div className="bg-red-600 text-white px-2 md:px-3 py-1 rounded-lg font-bold text-xs shadow-lg transform -rotate-3">
//                             BLACK FRIDAY
//                           </div>
//                         </div>

//                         {/* Discount Badge */}
//                         <div className="absolute top-3 right-3 z-10 bg-cyan-500 text-white px-2 py-1 rounded-lg font-bold text-xs text-center shadow-lg">
//                           {product.discount}% Off
//                         </div>

//                         {/* Hanging Lamps */}
//                         <div className="absolute top-0 left-1/4 w-0.5 h-8 bg-gradient-to-b from-yellow-600 to-transparent"></div>
//                         <div className="absolute top-0 right-1/4 w-0.5 h-8 bg-gradient-to-b from-yellow-600 to-transparent"></div>

//                         {/* Product Image */}
//                         <div className="relative aspect-[4/3] rounded-xl overflow-hidden bg-white/5 backdrop-blur-sm">
//                           <img
//                             src={product.image}
//                             alt={product.name}
//                             className="w-full h-full object-contain p-2 md:p-4 group-hover:scale-105 transition-transform duration-500"
//                             loading="lazy"
//                           />
//                         </div>
//                       </div>

//                       {/* Product Details */}
//                       <div className="p-3 md:p-4 bg-white">
//                         {/* Stock Status */}
//                         <div className="flex items-center gap-2 mb-2">
//                           <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse"></div>
//                           <span className="text-emerald-600 text-xs font-medium">
//                             In stock ({product.stock} units)
//                           </span>
//                         </div>

//                         {/* Product Name */}
//                         <h3 className="text-gray-900 font-semibold text-sm md:text-base mb-1 line-clamp-1">
//                           {product.name}
//                         </h3>

//                         {/* Specs */}
//                         <p className="text-gray-600 text-xs mb-2 line-clamp-1">
//                           {product.specs}
//                         </p>

//                         {/* Condition */}
//                         <div className="mb-2">
//                           <span className="text-gray-500 text-xs">| {product.condition}</span>
//                         </div>

//                         {/* Price Section */}
//                         <div className="flex items-center gap-2 mb-3">
//                           <span className="text-gray-900 font-bold text-base md:text-lg">
//                             ₹{product.price.toLocaleString('en-IN')}
//                           </span>
//                           <span className="text-gray-500 line-through text-xs">
//                             ₹{product.originalPrice.toLocaleString('en-IN')}
//                           </span>
//                         </div>

//                         {/* View Product Button */}
//                         <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-md hover:shadow-lg text-xs md:text-sm">
//                           <Eye className="w-3 h-3 md:w-4 md:h-4" />
//                           View Product
//                         </button>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Next Button */}
//             {canGoNext && (
//               <button
//                 onClick={handleNext}
//                 className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-3 md:translate-x-5 z-20 bg-white hover:bg-emerald-400 rounded-full p-2 md:p-3 shadow-2xl transition-all duration-300 group"
//                 aria-label="Next products"
//               >
//                 <ChevronRight className="w-4 h-4 md:w-6 md:h-6 text-gray-800 group-hover:text-white" />
//               </button>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BestSellerHeroSection;



// "use client";

// import  { useState, useRef } from 'react';
// import { ChevronLeft, ChevronRight, Eye } from 'lucide-react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation } from 'swiper/modules';
// // import { useRef } from "react";
// import 'swiper/css';
// import 'swiper/css/navigation';



// const BestSellerHeroSection = () => {
//   const [activeTab, setActiveTab] = useState('bestsellers');
//   const swiperRef = useRef(null);
// const [atStart, setAtStart] = useState(true);
// const [atEnd, setAtEnd] = useState(false);


//   const bestSellers = [
//     {
//       id: 1,
//       name: 'Dell Latitude 5420',
//       specs: 'Intel i7-11th Gen | 14" HD Touchscreen',
//       condition: 'Refurbished',
//       stock: 277,
//       image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600',
//       originalPrice: 120799,
//       price: 31949,
//       discount: 74
//     },
//     {
//       id: 2,
//       name: 'Dell Vostro SFF Desktop',
//       specs: 'Intel i3-7th Gen | Win 11 Pro',
//       condition: 'Refurbished',
//       stock: 227,
//       image: 'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=600',
//       originalPrice: 35000,
//       price: 10749,
//       discount: 69
//     },
//     {
//       id: 3,
//       name: 'Dell Latitude 5490',
//       specs: 'Intel i7-8th Gen | 14" HD',
//       condition: 'Refurbished',
//       stock: 113,
//       image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600',
//       originalPrice: 75000,
//       price: 22449,
//       discount: 70
//     },
//     {
//       id: 4,
//       name: 'HP EliteBook 840',
//       specs: 'Intel i5-8th Gen | 14" FHD',
//       condition: 'Refurbished',
//       stock: 156,
//       image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600',
//       originalPrice: 95000,
//       price: 28999,
//       discount: 69
//     },
//     {
//       id: 5,
//       name: 'Lenovo ThinkPad T480',
//       specs: 'Intel i5-8th Gen | 14" FHD',
//       condition: 'Refurbished',
//       stock: 198,
//       image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=600',
//       originalPrice: 88000,
//       price: 26599,
//       discount: 70
//     }
//   ];

//   const newArrivals = [
//     {
//       id: 6,
//       name: 'MacBook Air M1',
//       specs: 'Apple M1 Chip | 8GB RAM | 256GB SSD',
//       condition: 'Refurbished',
//       stock: 45,
//       image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600',
//       originalPrice: 92900,
//       price: 65000,
//       discount: 30
//     },
//     {
//       id: 7,
//       name: 'Dell XPS 13 9310',
//       specs: 'Intel i7-11th Gen | 16GB RAM',
//       condition: 'Refurbished',
//       stock: 32,
//       image: 'https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600',
//       originalPrice: 125000,
//       price: 85000,
//       discount: 32
//     },
//     {
//       id: 8,
//       name: 'HP Pavilion Gaming',
//       specs: 'Ryzen 5 | GTX 1650 | 8GB RAM',
//       condition: 'Refurbished',
//       stock: 67,
//       image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600',
//       originalPrice: 68000,
//       price: 45000,
//       discount: 34
//     }
//   ];

//   const products = activeTab === 'bestsellers' ? bestSellers : newArrivals;

//   return (
//     <div className="w-full bg-black py-16">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

//           {/* LEFT */}
//           <div className="lg:col-span-3 space-y-6">
//             <h2 className="text-4xl font-bold text-white">
//               New Drops. <br /> Don&apos;t Miss Them!
//             </h2>
//             <p className="text-emerald-400 text-xl font-semibold">
//               Grab Yours Now!
//             </p>

//             <div className="space-y-3">
//               <button
//                 onClick={() => setActiveTab('bestsellers')}
//                 className={`block text-lg ${activeTab === 'bestsellers' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
//               >
//                 ● Best Sellers
//               </button>
//               <button
//                 onClick={() => setActiveTab('newarrivals')}
//                 className={`block text-lg ${activeTab === 'newarrivals' ? 'text-white' : 'text-gray-400 hover:text-white'}`}
//               >
//                 ● New Arrivals
//               </button>
//             </div>
//           </div>

//           {/* RIGHT */}
//           <div className="lg:col-span-9 relative">

//             {/* Navigation Buttons */}
//             {/* <button className="custom-prev absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg">
// <AnimatePresence mode="wait">
//   {!atStart && (
//     <motion.button
//       initial={false}
//       animate={{ opacity: 1 }}
//       exit={{ opacity: 0 }}
//       className="custom-prev absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg"
//     >
//       <ChevronLeft className="w-6 h-6 text-black" />
//     </motion.button>
//   )}
// </AnimatePresence>

//             </button>

//             <button className="custom-next absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg">
// <AnimatePresence>
//   {!atEnd && (
//     <motion.button
//       initial={{ opacity: 0, scale: 0.8 }}
//       animate={{ opacity: 1, scale: 1 }}
//       exit={{ opacity: 0, scale: 0.8 }}
//       transition={{ duration: 0.2 }}
//       className="custom-next absolute -right-6 top-1/2 -translate-y-1/2 z-10  p-3 rounded-full shadow-lg"
//     >
//       <ChevronRight className="w-6 h-6 text-black" />
//     </motion.button>
//   )}
// </AnimatePresence>
//             </button> */}
// {!atStart && (
//   <button
//     className="custom-prev absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg"
//   >
//     <ChevronLeft className="w-6 h-6 text-black" />
//   </button>
// )}

// {!atEnd && (
//   <button
//     className="custom-next absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg"
//   >
//     <ChevronRight className="w-6 h-6 text-black" />
//   </button>
// )}

//             {/* Swiper */}
//           <Swiper
//   modules={[Navigation]}
//   spaceBetween={16}
//   onSwiper={(swiper) => (swiperRef.current = swiper)}
//   onSlideChange={(swiper) => {
//     setAtStart(swiper.isBeginning);
//     setAtEnd(swiper.isEnd);
//   }}
//   navigation={{
//     nextEl: '.custom-next',
//     prevEl: '.custom-prev',
//   }}
//   breakpoints={{
//     0: { slidesPerView: 1 },
//     768: { slidesPerView: 2 },
//     1024: { slidesPerView: 3 },
//   }}
// >

//               {products.map((product) => (
//                 <SwiperSlide key={product.id}>
//                   <div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-700">

//                     {/* IMAGE */}
//                     <div className="relative p-6 bg-gray-700">
//                       <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded">
//                         BLACK FRIDAY
//                       </span>

//                       <span className="absolute top-3 right-3 bg-cyan-500 text-white text-xs font-bold px-2 py-1 rounded">
//                         {product.discount}% Off
//                       </span>

//                       <div className="aspect-[4/3] bg-white rounded-xl p-4">
//                         <img
//                           src={product.image}
//                           alt={product.name}
//                           className="w-full h-full object-contain"
//                         />
//                       </div>
//                     </div>

//                     {/* CONTENT */}
//                     <div className="bg-white p-4 rounded-b-2xl">
//                       <p className="text-emerald-600 text-xs mb-1">
//                         ● In stock ({product.stock} units)
//                       </p>

//                       <h3 className="font-semibold text-sm text-gray-900">
//                         {product.name}
//                       </h3>

//                       <p className="text-gray-500 text-xs mb-2">
//                         {product.specs}
//                       </p>

//                       <div className="flex items-center gap-2 mb-3">
//                         <span className="font-bold text-lg text-gray-900">
//                           ₹{product.price.toLocaleString('en-IN')}
//                         </span>
//                         <span className="text-xs line-through text-gray-400">
//                           ₹{product.originalPrice.toLocaleString('en-IN')}
//                         </span>
//                       </div>

//                       <button className="w-full bg-blue-600 text-white py-2 rounded-lg flex items-center justify-center gap-2 text-sm font-medium">
//                         <Eye className="w-4 h-4" />
//                         View Product
//                       </button>
//                     </div>
//                   </div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>

//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BestSellerHeroSection;



// "use client";

// import { useState, useRef } from "react";
// import Image from "next/image";
// import { ChevronLeft, ChevronRight, Eye } from "lucide-react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";

// const BestSellerHeroSection = () => {
//   const [activeTab, setActiveTab] = useState("bestsellers");
//   const swiperRef = useRef<any>(null);
//   const [atStart, setAtStart] = useState(true);
//   const [atEnd, setAtEnd] = useState(false);

//   const bestSellers = [
//     {
//       id: 1,
//       name: "Dell Latitude 5420",
//       specs: 'Intel i7-11th Gen | 14" HD Touchscreen',
//       condition: "Refurbished",
//       stock: 277,
//     image: "/laptop/asus.avif",
//       originalPrice: 120799,
//       price: 31949,
//       discount: 74,
//     },
//     {
//       id: 2,
//       name: "Dell Vostro SFF Desktop",
//       specs: "Intel i3-7th Gen | Win 11 Pro",
//       condition: "Refurbished",
//       stock: 227,
//     image: "/laptop/dellinspiron.avif",
//           originalPrice: 35000,
//       price: 10749,
//       discount: 69,
//     },
//     {
//       id: 3,
//       name: "Dell Latitude 5490",
//       specs: 'Intel i7-8th Gen | 14" HD',
//       condition: "Refurbished",
//       stock: 113,
//      image: "/laptop/hp-200.avif",
//       originalPrice: 75000,
//       price: 22449,
//       discount: 70,
//     },
//     {
//       id: 4,
//       name: "HP EliteBook 840",
//       specs: 'Intel i5-8th Gen | 14" FHD',
//       condition: "Refurbished",
//       stock: 156,
//       image: "/laptop/hp-420.avif",
//       originalPrice: 95000,
//       price: 28999,
//       discount: 69,
//     },
//     {
//       id: 5,
//       name: "Lenovo ThinkPad T480",
//       specs: 'Intel i5-8th Gen | 14" FHD',
//       condition: "Refurbished",
//       stock: 198,
//      image: "/laptop/hp-pavillon.avif",
//       originalPrice: 88000,
//       price: 26599,
//       discount: 70,
//     },
//   ];

//   const newArrivals = [
//     {
//       id: 6,
//       name: "MacBook Air M1",
//       specs: "Apple M1 Chip | 8GB RAM | 256GB SSD",
//       condition: "Refurbished",
//       stock: 45,
//       image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600",
//       originalPrice: 92900,
//       price: 65000,
//       discount: 30,
//     },
//     {
//       id: 7,
//       name: "Dell XPS 13 9310",
//       specs: "Intel i7-11th Gen | 16GB RAM",
//       condition: "Refurbished",
//       stock: 32,
//       image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600",
//       originalPrice: 125000,
//       price: 85000,
//       discount: 32,
//     },
//     {
//       id: 8,
//       name: "HP Pavilion Gaming",
//       specs: "Ryzen 5 | GTX 1650 | 8GB RAM",
//       condition: "Refurbished",
//       stock: 67,
//       image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600",
//       originalPrice: 68000,
//       price: 45000,
//       discount: 34,
//     },
//   ];

//   const products = activeTab === "bestsellers" ? bestSellers : newArrivals;

//   return (
//     <div className="w-full bg-black py-16">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
//           {/* LEFT */}
//           <div className="lg:col-span-3 space-y-6">
//             <h2 className="text-4xl font-bold text-white">
//               New Drops. <br /> {"Don't Miss Them!"}
//             </h2>
//             <p className="text-emerald-400 text-xl font-semibold">Grab Yours Now!</p>

//             <div className="space-y-3">
//               <button
//                 onClick={() => setActiveTab("bestsellers")}
//                 className={`block text-lg ${
//                   activeTab === "bestsellers"
//                     ? "text-white"
//                     : "text-gray-400 hover:text-white"
//                 }`}
//               >
//                 ● Best Sellers
//               </button>

//               <button
//                 onClick={() => setActiveTab("newarrivals")}
//                 className={`block text-lg ${
//                   activeTab === "newarrivals"
//                     ? "text-white"
//                     : "text-gray-400 hover:text-white"
//                 }`}
//               >
//                 ● New Arrivals
//               </button>
//             </div>
//           </div>

//           {/* RIGHT */}
//           <div className="lg:col-span-9 relative">
//             {!atStart && (
//               <button className="custom-prev absolute -left-6 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg">
//                 <ChevronLeft className="w-6 h-6 text-black" />
//               </button>
//             )}

//             {!atEnd && (
//               <button className="custom-next absolute -right-6 top-1/2 -translate-y-1/2 z-10 bg-white p-3 rounded-full shadow-lg">
//                 <ChevronRight className="w-6 h-6 text-black" />
//               </button>
//             )}

//             <Swiper
//               modules={[Navigation]}
//               spaceBetween={16}
//               onSwiper={(swiper) => (swiperRef.current = swiper)}
//               onSlideChange={(swiper) => {
//                 setAtStart(swiper.isBeginning);
//                 setAtEnd(swiper.isEnd);
//               }}
//               navigation={{
//                 nextEl: ".custom-next",
//                 prevEl: ".custom-prev",
//               }}
//               breakpoints={{
//                 0: { slidesPerView: 1 },
//                 768: { slidesPerView: 2 },
//                 1024: { slidesPerView: 3 },
//               }}
//             >
//               {products.map((product) => (
//                 <SwiperSlide key={product.id}>
//                   <div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-700">
//                     {/* IMAGE */}
//                     <div className="relative  bg-gray-700">
//                       <span className="absolute top-3 left-3 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded">
//                         BLACK FRIDAY
//                       </span>

//                       <span className="absolute top-3 right-3 bg-cyan-500 text-white text-xs font-bold px-2 py-1 rounded">
//                         {product.discount}% Off
//                       </span>

//                       <div className="aspect-[4/3] bg-gray-300  relative overflow-hidden">
//                         <Image
//                           src={product.image}
//                           alt={product.name}
//                           fill
//                           sizes="(max-width: 768px) 100vw, 33vw"
//                           className="object-contain"
//                         />
//                       </div>
//                     </div>

//                     {/* CONTENT */}
//                     <div className="bg-white p-4 rounded-b-2xl">
//                       <p className="text-emerald-600 text-xs mb-1">
//                         ● In stock ({product.stock} units)
//                       </p>

//                       <h3 className="font-semibold text-sm text-gray-900">
//                         {product.name}
//                       </h3>

//                       <p className="text-gray-500 text-xs mb-2">{product.specs}</p>

//                       <div className="flex items-center gap-2 mb-3">
//                         <span className="font-bold text-lg text-gray-900">
//                           ₹{product.price.toLocaleString("en-IN")}
//                         </span>
//                         <span className="text-xs line-through text-gray-400">
//                           ₹{product.originalPrice.toLocaleString("en-IN")}
//                         </span>
//                       </div>

//                       <button className="w-full bg-blue-600 text-white py-2 rounded-lg flex items-center justify-center gap-2 text-sm font-medium">
//                         <Eye className="w-4 h-4" />
//                         View Product
//                       </button>
//                     </div>
//                   </div>
//                 </SwiperSlide>
//               ))}
//             </Swiper>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default BestSellerHeroSection;



"use client";

import { useState, useRef, MouseEvent } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight, Eye, Truck } from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react"; // Import SwiperCore for ref type
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import type SwiperCore from "swiper";

// Define TypeScript interfaces for product objects
interface Product {
  id: number;
  name: string;
  specs: string;
  condition: string;
  stock: number;
  image: string;
  originalPrice: number;
  price: number;
  discount: number;
}

const BestSellerHeroSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<"bestsellers" | "newarrivals">(
    "bestsellers"
  );
  // Use SwiperCore type for better type safety on the ref
  const swiperRef = useRef<SwiperCore | null>(null);
  const [atStart, setAtStart] = useState<boolean>(true);
  const [atEnd, setAtEnd] = useState<boolean>(false);

  const bestSellers: Product[] = [
    {
      id: 1,
      name: "Dell Latitude 5420",
      specs: 'Intel i7-11th Gen | 14" HD Touchscreen',
      condition: "Refurbished",
      stock: 277,
      image: "/laptop/asus.avif",
      originalPrice: 120799,
      price: 31949,
      discount: 74,
    },
    {
      id: 2,
      name: "Dell Vostro SFF Desktop",
      specs: "Intel i3-7th Gen | Win 11 Pro",
      condition: "Refurbished",
      stock: 227,
      image: "/laptop/dellinspiron.avif",
      originalPrice: 35000,
      price: 10749,
      discount: 69,
    },
    {
      id: 3,
      name: "Dell Latitude 5490",
      specs: 'Intel i7-8th Gen | 14" HD',
      condition: "Refurbished",
      stock: 113,
      image: "/laptop/hp-200.avif",
      originalPrice: 75000,
      price: 22449,
      discount: 70,
    },
    {
      id: 4,
      name: "HP EliteBook 840",
      specs: 'Intel i5-8th Gen | 14" FHD',
      condition: "Refurbished",
      stock: 156,
      image: "/laptop/hp-420.avif",
      originalPrice: 95000,
      price: 28999,
      discount: 69,
    },
    {
      id: 5,
      name: "Lenovo ThinkPad T480",
      specs: 'Intel i5-8th Gen | 14" FHD',
      condition: "Refurbished",
      stock: 198,
      image: "/laptop/hp-pavillon.avif",
      originalPrice: 88000,
      price: 26599,
      discount: 70,
    },
  ];

  const newArrivals: Product[] = [
    {
      id: 6,
      name: "MacBook Air M1",
      specs: "Apple M1 Chip | 8GB RAM | 256GB SSD",
      condition: "Refurbished",
      stock: 45,
      image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=600",
      originalPrice: 92900,
      price: 65000,
      discount: 30,
    },
    {
      id: 7,
      name: "Dell XPS 13 9310",
      specs: "Intel i7-11th Gen | 16GB RAM",
      condition: "Refurbished",
      stock: 32,
      image: "https://images.unsplash.com/photo-1593642632823-8f785ba67e45?w=600",
      originalPrice: 125000,
      price: 85000,
      discount: 32,
    },
    {
      id: 8,
      name: "HP Pavilion Gaming",
      specs: "Ryzen 5 | GTX 1650 | 8GB RAM",
      condition: "Refurbished",
      stock: 67,
      image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=600",
      originalPrice: 68000,
      price: 45000,
      discount: 34,
    },
  ];

  const products: Product[] =
    activeTab === "bestsellers" ? bestSellers : newArrivals;

  const handlePrev = (e: MouseEvent) => {
    e.preventDefault();
    swiperRef.current?.slidePrev();
  };

  const handleNext = (e: MouseEvent) => {
    e.preventDefault();
    swiperRef.current?.slideNext();
  };

  return (
    <div className="w-full bg-black py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* LEFT: Text and Tab Navigation */}
          <div className="lg:col-span-3 space-y-6">
            <h2 className="text-4xl font-bold text-white">
              New Drops. <br /> {"Don't Miss Them!"}
            </h2>
            <p className="text-emerald-400 text-xl font-semibold">
              Grab Yours Now!
            </p>

            <div className="space-y-3">
              <button
                onClick={() => setActiveTab("bestsellers")}
                className={`block text-lg transition-colors duration-200 ${
                  activeTab === "bestsellers"
                    ? "text-white font-bold"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                ● Best Sellers
              </button>

              <button
                onClick={() => setActiveTab("newarrivals")}
                className={`block text-lg transition-colors duration-200 ${
                  activeTab === "newarrivals"
                    ? "text-white font-bold"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                ● New Arrivals
              </button>
            </div>
          </div>

          {/* RIGHT: Swiper Carousel */}
          <div className="lg:col-span-9 relative">
            {/* Custom Navigation Buttons (FIXED Z-INDEX AND ONCLICK) */}
            {!atStart && (
              <button
                onClick={handlePrev}
                className="absolute cursor-pointer -left-2 sm:-left-6 top-1/2 -translate-y-1/2 z-30 bg-white/85 p-2 sm:p-3 rounded-full shadow-lg hover:shadow-xl transition-all"
                aria-label="Previous slide"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
              </button>
            )}

            {!atEnd && (
              <button
                onClick={handleNext}
                className="absolute cursor-pointer -right-2 sm:-right-6 top-1/2 -translate-y-1/2 z-30 bg-white/85 p-2 sm:p-3 rounded-full shadow-lg hover:shadow-xl transition-all"
                aria-label="Next slide"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-black" />
              </button>
            )}

            <Swiper
              modules={[Navigation]}
              spaceBetween={16}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
                // Set initial state based on current Swiper instance
                setAtStart(swiper.isBeginning);
                setAtEnd(swiper.isEnd);
              }}
              onSlideChange={(swiper) => {
                setAtStart(swiper.isBeginning);
                setAtEnd(swiper.isEnd);
              }}
              // Removed default navigation module usage since we are using custom buttons
              // navigation={{ nextEl: ".custom-next", prevEl: ".custom-prev" }}
              breakpoints={{
                0: { slidesPerView: 1, spaceBetween: 12 }, // Adjusted for mobile visibility
                768: { slidesPerView: 2, spaceBetween: 16 },
                1024: { slidesPerView: 3, spaceBetween: 16 },
              }}
            >
              {products.map((product) => (
                <SwiperSlide key={product.id}>
                  <div className="bg-gradient-to-b from-gray-900 to-gray-800 rounded-2xl overflow-hidden border border-gray-700 h-full flex flex-col">
                    {/* IMAGE Container (FIXED ASPECT RATIO & Z-INDEX) */}
                    <div className="relative bg-gray-700">
                      {/* Tags (FIXED Z-INDEX) */}
                      <div className="absolute top-3 left-3 bg-white/75  text-xs font-bold px-3 py-1 rounded-full z-20">
                   <div className="flex items-center gap-1">

                      <Truck  className="w-4 h-4 lg:w-4 text-blue-500 lg:h-4" /> 
                      <span className="text-blue-500 font-semibold text-[10px] lg:text-sm">Free Delivery</span>
                   </div>
                      </div>
 {/* <div className="bg-white text-blue-600 rounded-full p-1 flex items-center gap-0.5 lg:p-1.5 shadow-md">
            <Truck className="w-4 h-4 lg:w-4 lg:h-4" /> 
            <span className="text-blue-500 font-semibold text-[10px] lg:text-sm">Free Delivery</span>
          </div> */}
                      <span className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded-full z-20">
                        {product.discount}% Off
                      </span>

                      {/* Image container with fixed height and object-cover */}
                      <div className="relative w-full h-56 overflow-hidden">
                        <Image
                          src={product.image}
                          alt={product.name}
                          fill
                          sizes="(max-width: 768px) 100vw, 33vw"
                          className="object-cover transition-transform duration-300 hover:scale-105" // Change to object-cover
                        />
                      </div>
                    </div>

                    {/* CONTENT */}
                    <div className="bg-white p-4 rounded-b-2xl flex flex-col flex-grow">
                      <p className="text-emerald-600 text-xs mb-1">
                        ● In stock ({product.stock} units)
                      </p>

                      <h3 className="font-semibold text-sm text-gray-900">
                        {product.name}
                      </h3>

                      <p className="text-gray-500 text-xs mb-2">
                        {product.specs}
                      </p>

                      <div className="flex items-center gap-2 mb-3 mt-auto">
                        <span className="font-bold text-lg text-gray-900">
                          ₹{product.price.toLocaleString("en-IN")}
                        </span>
                        <span className="text-xs line-through text-gray-400">
                          ₹{product.originalPrice.toLocaleString("en-IN")}
                        </span>
                      </div>

                      <button className="w-full bg-blue-600 text-white py-2 rounded-lg flex items-center justify-center gap-2 text-sm font-medium hover:bg-blue-700 transition-colors">
                        <Eye className="w-4 h-4" />
                        View Product
                      </button>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSellerHeroSection;