// import { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import Image from "next/image";
// import Link from "next/link";

// const heroSlides = [
//   {
//     id: 1,
//     title: "STARLINK UPCOMING",
//     subtitle: "Order From Our Website or Physical Store",
//     description: "TAKING PRE-ORDER",
//     image: "https://i.imgur.com/H2A438s.jpeg",
//     cta: "Pre-Order Now",
//     badge: "New Launch",
//     link: "/products/0ab0c15e-e59e-4fb1-8ae2-125dc9632a0c",
//   },
//   {
//     id: 2,
//     title: "PREMIUM COLLECTION",
//     subtitle: "Discover Our Latest Tech Products",
//     description: "EXCLUSIVE DEALS",
//     image: "https://i.imgur.com/Mjm37Wk.jpeg",
//     cta: "Shop Now",
//     badge: "Limited Time",
//     link: "/products/52e87388-f119-4efd-a98f-d3be39bd6cbc",
//   },
//   {
//     id: 3,
//     title: "SMART DEVICES",
//     subtitle: "Transform Your Digital Lifestyle",
//     description: "INNOVATION AWAITS",
//     image:
//       "https://images.vexels.com/content/194698/preview/shop-online-slider-template-4f2c60.png",
//     cta: "Explore",
//     badge: "Best Seller",
//     link: "/products",
//   },
// ];

// export function HeroSection() {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
//     }, 5000);

//     return () => clearInterval(interval);
//   }, []);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide(
//       (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
//     );
//   };

//   const goToSlide = (index: number) => {
//     setCurrentSlide(index);
//   };

//   return (
//     <section className="bg-gradient-to-br from-background to-muted/30 py-4 sm:py-4 lg:py-6">
//       <div className="container mx-auto px-4">
//         <div className="flex flex-col lg:flex-row gap-4 sm:gap-6">
//           {/* Main Hero Carousel - 70% */}
//           <div className="lg:w-7/10 w-full h-[300px] sm:h-[60vh] md:h-[70vh] lg:h-[460px]">
//             <Card className="relative h-full overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 border-0 p-0">
//               <CardContent className="p-0 h-full">
//                 {/* Carousel Container */}
//                 <div className="relative w-full h-full">
//                   <AnimatePresence mode="wait">
//                     <motion.div
//                       key={currentSlide}
//                       initial={{ opacity: 0, x: 300 }}
//                       animate={{ opacity: 1, x: 0 }}
//                       exit={{ opacity: 0, x: -300 }}
//                       transition={{ duration: 0.5, ease: "easeInOut" }}
//                       className="absolute inset-0"
//                     >
//                       {/* Background Image */}
//                       <Link href={heroSlides[currentSlide].link}>
//                         <div className="absolute inset-0">
//                           <Image
//                             src={
//                               heroSlides[currentSlide].image ||
//                               "/placeholder.svg"
//                             }
//                             alt={heroSlides[currentSlide].title}
//                             fill
//                             className="object-fill object-center"
//                             priority
//                           />
//                         </div>
//                       </Link>
//                     </motion.div>
//                   </AnimatePresence>

//                   {/* Navigation Arrows */}
//                   <Button
//                     variant="ghost"
//                     size="icon"
//                     className="absolute left-2 sm:left-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 text-white border-white/20"
//                     onClick={prevSlide}
//                   >
//                     <ChevronLeft className="h-4 sm:h-5 w-4 sm:w-5" />
//                   </Button>
//                   <Button
//                     variant="ghost"
//                     size="icon"
//                     className="absolute right-2 sm:right-4 top-1/2 transform -translate-y-1/2 z-20 bg-white/10 hover:bg-white/20 text-white border-white/20"
//                     onClick={nextSlide}
//                   >
//                     <ChevronRight className="h-4 sm:h-5 w-4 sm:w-5" />
//                   </Button>

//                   {/* Carousel Dots */}
//                   <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
//                     {heroSlides.map((_, index) => (
//                       <button
//                         key={index}
//                         onClick={() => goToSlide(index)}
//                         className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                           index === currentSlide
//                             ? "bg-gradient-to-r from-primary to-accent scale-125 w-4 sm:w-6"
//                             : "bg-white/40 hover:bg-white/60"
//                         }`}
//                       />
//                     ))}
//                   </div>
//                 </div>
//               </CardContent>
//             </Card>
//           </div>

//           {/* Sidebar Sections - 30% */}
//           <div className="lg:w-3/10 w-full flex flex-col gap-4 sm:gap-6 lg:h-[460px] lg:min-h-[300px]">
//             {/* Career Section */}
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 0.8 }}
//               className="flex-1 min-h-0"
//             >
//               <div className="flex items-center justify-between mb-4 rounded-2xl">
//                 <Link href="/products/22b1b30c-2ab5-4894-b5fd-02754ac4b27c">
//                   <Image
//                     src="https://i.imgur.com/A8mLhHj.png"
//                     alt="image"
//                     height={218}
//                     width={444}
//                     className="rounded-2xl"
//                   />
//                 </Link>
//               </div>
//             </motion.div>

//             {/* Stats Section */}
//             <motion.div
//               initial={{ opacity: 0, x: 50 }}
//               animate={{ opacity: 1, x: 0 }}
//               transition={{ delay: 1.0 }}
//               className="flex-1 min-h-0"
//             >
//               <Card className="bg-gradient-to-br from-primary/10 to-accent/10 border-primary/20 h-full">
//                 <CardContent className="p-4 sm:p-6 flex flex-col justify-between h-full">
//                   <div className="grid grid-cols-2 gap-3 sm:gap-4 text-center">
//                     <div>
//                       <div className="text-xl sm:text-2xl font-bold text-primary">
//                         10K+
//                       </div>
//                       <div className="text-xs text-muted-foreground">
//                         Happy Customers
//                       </div>
//                     </div>
//                     <div>
//                       <div className="text-xl sm:text-2xl font-bold text-primary">
//                         5K+
//                       </div>
//                       <div className="text-xs text-muted-foreground">
//                         Products
//                       </div>
//                     </div>
//                     <div>
//                       <div className="text-xl sm:text-2xl font-bold text-accent">
//                         99%
//                       </div>
//                       <div className="text-xs text-muted-foreground">
//                         Satisfaction
//                       </div>
//                     </div>
//                     <div>
//                       <div className="text-xl sm:text-2xl font-bold text-accent">
//                         24/7
//                       </div>
//                       <div className="text-xs text-muted-foreground">
//                         Support
//                       </div>
//                     </div>
//                   </div>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

// import { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronRight,
  Smartphone,
  Laptop,
  Headphones,
  Gift,
  Video,
  Tablet,
  Package,
  Users,
  Watch,
  Camera,
  Tv,
  Shirt,
  Book,
  Gamepad2,
  LayoutGrid,
  ChevronLeft,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import type { Swiper as SwiperInstance } from "swiper";
import Image from "next/image";
import airpodImg from "@/assets/airpod.png";
import iphoneImg from "@/assets/iphone.png";
import macbookImg from "@/assets/macbook.png";
import { ICategory } from "@/types";
import { useGetAllCategoriesQuery } from "@/redux/api/category/categoryApi";
import { useState } from "react";
import Link from "next/link";
// import { RainbowButton } from "@/components/magicui/rainbow-button";

// Define color palette
const colors = [
  "bg-pink-100 text-pink-600",
  "bg-blue-100 text-blue-600",
  "bg-green-100 text-green-600",
  "bg-yellow-100 text-yellow-600",
  "bg-purple-100 text-purple-600",
  "bg-orange-100 text-orange-600",
  "bg-red-100 text-red-600",
  "bg-teal-100 text-teal-600",
  "bg-orange-100 text-orange-600",
  "bg-teal-100 text-teal-600",
];

const categoryIconMap: Record<string, React.ElementType> = {
  Headphone: Headphones,
  TV: Tv,
  Cameras: Camera,
  Mobile: Smartphone,
  "Action Camera": Video,
  "Gaming Console": Gamepad2,
  Accessories: Package,
  Watch: Watch,
  Books: Book,
  Laptop: Laptop,
  Fashion: Shirt,
  Tablet: Tablet,
};

const heroSlides = [
  {
    id: 1,
    title: "Latest iPhone 15 Pro",
    subtitle: "Experience the future",
    description:
      "Get the newest iPhone with advanced features and stunning design",
    image: iphoneImg,
    price: "$999",
    originalPrice: "$1199",
  },
  {
    id: 2,
    title: "MacBook Air M3",
    subtitle: "Power meets portability",
    description:
      "Ultra-thin, ultra-fast, and ultra-capable laptop for professionals",
    image: macbookImg,
    price: "$1299",
    originalPrice: "$1499",
  },
  {
    id: 3,
    title: "AirPods Pro 2",
    subtitle: "Immersive audio experience",
    description: "Active noise cancellation and spatial audio technology",
    image: airpodImg,
    price: "$249",
    originalPrice: "$299",
  },
];

export default function HeroSection() {
  const [activeCategory, setActiveCategory] = useState<number | null>(null);
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null);
  const { data, isLoading, isError } = useGetAllCategoriesQuery();
  const categories: ICategory[] = data?.data ?? [];

  if (isLoading) {
    return (
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="lg:col-span-1"
      >
        <Card className="p-4 h-[670px] flex flex-col">
          <Button className="font-semibold text-white text-lg flex-shrink-0 gap-3 bg-rose-700 hover:shadow-sm">
            <LayoutGrid className="w-5 h-5" />
            All Categories
          </Button>
          <div className="flex-1 overflow-hidden">
            <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-800 pr-2">
              <div className="space-y-2">
                {Array.from({ length: 8 }).map((_, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 rounded-lg animate-pulse bg-gray-200 dark:bg-gray-700"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 rounded-full bg-gray-300 dark:bg-gray-600" />
                      <div className="h-4 w-10 bg-gray-300 dark:bg-gray-600 rounded" />
                    </div>
                    <div className="w-4 h-4 bg-gray-300 dark:bg-gray-600 rounded" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </motion.div>
    );
  }

  if (isError) {
    return (
      <section className="py-16 text-center text-red-500">
        Failed to load categories
      </section>
    );
  }

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Categories Sidebar */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-1"
        >
          <Card className="p-4 h-[670px] flex flex-col">
            <Button className="font-semibold text-white text-lg flex-shrink-0 gap-3 bg-rose-700 hover:shadow-sm">
              <LayoutGrid className="w-5 h-5" />
              All Categories
            </Button>
            <div className="flex-1 overflow-hidden">
              <div className="h-full overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100 dark:scrollbar-thumb-gray-600 dark:scrollbar-track-gray-800 pr-2">
                <div className="space-y-2">
                  {categories.map((category, index) => {
                    const Icon = categoryIconMap[category.name] || Package;

                    return (
                      <Link
                        href={`/categories/${category.slug}~${category.id}`}
                        key={category.id}
                        className="block"
                      >
                        <motion.div
                          initial={{ x: -50, opacity: 0 }}
                          animate={{ x: 0, opacity: 1 }}
                          transition={{ delay: index * 0.05 }}
                          whileHover={{ scale: 1.02, x: 5 }}
                          className={`flex items-center justify-between p-1 rounded-lg cursor-pointer transition-all duration-200 ${
                            activeCategory === index
                              ? "bg-primary text-primary-foreground shadow-md dark:text-white dark:bg-muted"
                              : "hover:bg-muted hover:shadow-sm"
                          }`}
                          onClick={() => setActiveCategory(index)}
                        >
                          <div className="flex items-center space-x-3">
                            <motion.div
                              whileHover={{ rotate: 5, scale: 1.1 }}
                              transition={{ duration: 0.2 }}
                            >
                              <div
                                className={`mb-1 flex items-center justify-center w-10 h-10 rounded-full ${
                                  colors[index % colors.length]
                                }`}
                              >
                                <Icon className="w-6 h-6" />
                              </div>
                            </motion.div>

                            <span className="font-medium text-md">
                              {category.name}
                            </span>
                          </div>

                          <motion.div
                            whileHover={{ x: 3 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronRight className="h-4 w-4" />
                          </motion.div>
                        </motion.div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Scroll indicator */}
            <div className="flex-shrink-0 mt-2 text-center">
              <motion.div
                animate={{ y: [0, 5, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="text-xs text-muted-foreground"
              >
                Scroll for more
              </motion.div>
            </div>
          </Card>
        </motion.div>

        {/* Hero Carousel */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="lg:col-span-3"
        >
          <div className="relative h-[450px] rounded-xl overflow-hidden">
            {/* Previous Slide Button */}
            <button
              type="button"
              onClick={() => swiper?.slidePrev()}
              aria-label="Previous slide"
              className="
    absolute left-4 top-1/2 -translate-y-1/2 z-20
    flex h-11 w-11 items-center justify-center
    rounded-full
    border border-white/30
    bg-black/20
    text-white
    shadow-lg
    backdrop-blur-md
    transition-all duration-300
    hover:bg-white
    hover:text-gray-900
    hover:scale-110
    active:scale-95
    focus:outline-none
    focus:ring-2
    focus:ring-white/70
  "
            >
              <ChevronLeft className="h-6 w-6" strokeWidth={2.5} />
            </button>

            {/* Next Slide Button */}
            <button
              type="button"
              onClick={() => swiper?.slideNext()}
              aria-label="Next slide"
              className="
    absolute right-4 top-1/2 -translate-y-1/2 z-20
    flex h-11 w-11 items-center justify-center
    rounded-full
    border border-white/30
    bg-black/20
    text-white
    shadow-lg
    backdrop-blur-md
    transition-all duration-300
    hover:bg-white
    hover:text-gray-900
    hover:scale-110
    active:scale-95
    focus:outline-none
    focus:ring-2
    focus:ring-white/70
  "
            >
              <ChevronRight className="h-6 w-6" strokeWidth={2.5} />
            </button>
            {/* <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000 }}
              loop
              className="h-full"
            > */}
            <Swiper
              modules={[Pagination, Autoplay]}
              onSwiper={setSwiper}
              pagination={{ clickable: true }}
              autoplay={{ delay: 5000 }}
              loop
              className="h-full"
            >
              {heroSlides.map((slide, index) => (
                <SwiperSlide key={slide.id}>
                  <div className="relative h-full bg-gradient-to-r from-blue-800 to-rose-500 text-white">
                    <div className="absolute inset-0 bg-black/20" />
                    <div className="relative z-10 h-full flex items-center">
                      <div className="container mx-auto px-14">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                          <motion.div
                            initial={{ y: 50, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 + index * 0.1 }}
                            className="space-y-4"
                          >
                            <span className="text-sm font-medium animate-pulse bg-white/20 px-4 py-2 rounded-full">
                              {slide.subtitle}
                            </span>
                            <h1 className="text-4xl md:text-5xl pt-4 font-bold leading-tight">
                              {slide.title}
                            </h1>
                            <p className="text-lg text-white/90">
                              {slide.description}
                            </p>
                            <div className="flex items-center space-x-4">
                              <span className="text-3xl font-bold">
                                {slide.price}
                              </span>
                              <span className="text-lg text-white/70 line-through">
                                {slide.originalPrice}
                              </span>
                            </div>
                            <div className="flex space-x-4 pt-4">
                              <Button
                                size="lg"
                                className="bg-rose-700 text-white hover:bg-rose-600"
                              >
                                Shop Now
                              </Button>
                              {/* <RainbowButton variant="outline">
                                Get Unlimited Access
                              </RainbowButton> */}

                              <Button
                                size="lg"
                                variant="outline"
                                className="border-white text-white hover:bg-white hover:text-black bg-transparent"
                              >
                                Learn More
                              </Button>
                            </div>
                          </motion.div>
                          <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.5 + index * 0.1 }}
                            className="hidden md:block"
                          >
                            <Image
                              width={600}
                              height={400}
                              src={slide.image || "/placeholder.svg"}
                              alt={slide.title}
                              className="w-full h-auto max-w-md mx-auto"
                            />
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Special Offers */}
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Fast Delivery Card */}
            <Card className=" p-4 rounded-lg shadow-lg text-center ">
              <div className="space-y-1">
                <div className="relative flex items-center justify-center animate-pulse mx-auto mb-2 p-3 bg-rose-100 rounded-full w-16 h-16  transition-all duration-300 hover:rotate-6">
                  <div className="absolute flex items-center justify-center w-10 h-10 rounded-full bg-rose-300">
                    <Gift className="w-6 h-6 text-rose-600" />
                  </div>
                </div>
                <h4 className="text-lg font-semibold">Special Offers!</h4>
                <p className="text-sm mb-3">
                  Limited time only! Get 20% off + free shipping on your first
                  order.
                </p>
                <Button
                  variant="secondary"
                  size="sm"
                  className="bg-rose-600 text-white hover:bg-rose-600"
                >
                  Claim Now
                </Button>
              </div>
            </Card>

            {/* Exclusive Membership Card */}
            <Card className=" p-4 rounded-lg shadow-lg text-center">
              <div className="space-y-2">
                <div className="relative flex items-center justify-center animate-pulse mx-auto mb-2 p-3 bg-rose-100 rounded-full w-16 h-16  transition-all duration-300 hover:rotate-6">
                  <div className="absolute flex items-center justify-center w-10 h-10 rounded-full bg-rose-300">
                    <Users className="w-6 h-6 text-rose-600" />
                  </div>
                </div>

                <h4 className="text-xl font-bold"> Exclusive Member Perks</h4>
                <p className="text-sm">
                  Join our loyalty program and get early access to deals and new
                  arrivals.
                </p>
                <Button
                  variant="secondary"
                  size="sm"
                  className="bg-rose-600 text-white hover:bg-rose-500"
                >
                  Join Now
                </Button>
              </div>
            </Card>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
