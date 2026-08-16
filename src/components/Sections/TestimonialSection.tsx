// "use client";

// import type React from "react";

// import { useState, useEffect, useRef, useCallback } from "react";
// import { Card, CardContent } from "@/components/ui/card";
// import { Badge } from "@/components/ui/badge";
// import { Button } from "@/components/ui/button";
// import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
// import Image from "next/image";

// const testimonials = [
//   {
//     id: 1,
//     name: "Sarah Johnson",
//     role: "Fashion Blogger",
//     avatar: "https://picsum.photos/seed/user1/80/80",
//     rating: 5,
//     content:
//       "NexCart has completely transformed my shopping experience. The quality of products is exceptional, and the customer service is outstanding. I've been a loyal customer for over 2 years now!",
//     verified: true,
//   },
//   {
//     id: 2,
//     name: "Michael Chen",
//     role: "Tech Enthusiast",
//     avatar: "https://picsum.photos/seed/user2/80/80",
//     rating: 5,
//     content:
//       "As someone who's very particular about electronics, I'm impressed by NexCart's product selection and authenticity. Fast shipping and great prices make it my go-to store.",
//     verified: true,
//   },
//   {
//     id: 3,
//     name: "Emily Rodriguez",
//     role: "Small Business Owner",
//     avatar: "https://picsum.photos/seed/user3/80/80",
//     rating: 5,
//     content:
//       "The variety and quality of products available on NexCart is amazing. I've furnished my entire office through their platform. Highly recommend to anyone looking for reliable shopping.",
//     verified: true,
//   },
//   {
//     id: 4,
//     name: "James Patel",
//     role: "Freelance Designer",
//     avatar: "https://picsum.photos/seed/user4/80/80",
//     rating: 5,
//     content:
//       "NexCart's user-friendly platform and carefully vetted products make shopping a breeze. Their support team is always ready to help, making every purchase a pleasure!",
//     verified: true,
//   },
//   {
//     id: 5,
//     name: "Lisa Thompson",
//     role: "Marketing Manager",
//     avatar: "https://picsum.photos/seed/user5/80/80",
//     rating: 5,
//     content:
//       "I love the curated selection at NexCart. The products are high-quality, and the attention to detail aligns perfectly with my expectations. Highly recommend!",
//     verified: true,
//   },
// ];

// export function TestimonialsSection() {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [slidesToShow, setSlidesToShow] = useState(4);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);
//   const [isTransitioning, setIsTransitioning] = useState(false);
//   const sliderRef = useRef<HTMLDivElement>(null);
//   const touchStartX = useRef(0);
//   const touchEndX = useRef(0);
//   const autoPlayRef = useRef<NodeJS.Timeout | null>(null);

//   // Create infinite loop by duplicating testimonials
//   const extendedTestimonials = [
//     ...testimonials.slice(-slidesToShow), // Add last items at the beginning
//     ...testimonials,
//     ...testimonials.slice(0, slidesToShow), // Add first items at the end
//   ];

//   // Responsive slides calculation
//   useEffect(() => {
//     const updateSlidesToShow = () => {
//       const width = window.innerWidth;
//       if (width >= 1024) {
//         setSlidesToShow(4); // Large screens
//       } else if (width >= 768) {
//         setSlidesToShow(3); // Medium screens
//       } else if (width >= 640) {
//         setSlidesToShow(2); // Small-medium screens
//       } else {
//         setSlidesToShow(1); // Small screens
//       }
//     };

//     updateSlidesToShow();
//     window.addEventListener("resize", updateSlidesToShow);
//     return () => window.removeEventListener("resize", updateSlidesToShow);
//   }, []);

//   // Reset current index when slidesToShow changes
//   useEffect(() => {
//     setCurrentIndex(slidesToShow);
//   }, [slidesToShow]);

//   const nextSlide = useCallback(() => {
//     if (isTransitioning) return;
//     setIsTransitioning(true);
//     setCurrentIndex((prev) => prev + 1);
//   }, [isTransitioning]);

//   const prevSlide = useCallback(() => {
//     if (isTransitioning) return;
//     setIsTransitioning(true);
//     setCurrentIndex((prev) => prev - 1);
//   }, [isTransitioning]);

//   // Handle infinite loop transitions
//   useEffect(() => {
//     if (!isTransitioning) return;

//     const timer = setTimeout(() => {
//       setIsTransitioning(false);

//       // Reset position for infinite loop
//       if (currentIndex >= testimonials.length + slidesToShow) {
//         setCurrentIndex(slidesToShow);
//       } else if (currentIndex <= 0) {
//         setCurrentIndex(testimonials.length);
//       }
//     }, 500); // Match transition duration

//     return () => clearTimeout(timer);
//   }, [currentIndex, isTransitioning, slidesToShow]);

//   // Auto-play functionality
//   useEffect(() => {
//     if (!isAutoPlaying) return;

//     autoPlayRef.current = setInterval(() => {
//       nextSlide();
//     }, 3000);

//     return () => {
//       if (autoPlayRef.current) {
//         clearInterval(autoPlayRef.current);
//       }
//     };
//   }, [isAutoPlaying, nextSlide]);

//   // const toggleAutoPlay = () => {
//   //   setIsAutoPlaying(!isAutoPlaying)
//   // }

//   const goToSlide = (index: number) => {
//     if (isTransitioning) return;
//     setIsAutoPlaying(false);
//     setIsTransitioning(true);
//     setCurrentIndex(index + slidesToShow);
//   };

//   // Touch handlers for mobile swipe
//   const handleTouchStart = (e: React.TouchEvent) => {
//     touchStartX.current = e.touches[0].clientX;
//   };

//   const handleTouchMove = (e: React.TouchEvent) => {
//     touchEndX.current = e.touches[0].clientX;
//   };

//   const handleTouchEnd = () => {
//     if (!touchStartX.current || !touchEndX.current) return;

//     const distance = touchStartX.current - touchEndX.current;
//     const isLeftSwipe = distance > 50;
//     const isRightSwipe = distance < -50;

//     if (isLeftSwipe) {
//       nextSlide();
//     } else if (isRightSwipe) {
//       prevSlide();
//     }
//   };

//   // Pause auto-play on hover
//   const handleMouseEnter = () => {
//     if (autoPlayRef.current) {
//       clearInterval(autoPlayRef.current);
//     }
//   };

//   const handleMouseLeave = () => {
//     if (isAutoPlaying) {
//       autoPlayRef.current = setInterval(() => {
//         nextSlide();
//       }, 3000);
//     }
//   };

//   const slideWidth = 100 / slidesToShow;
//   const actualIndex =
//     (((currentIndex - slidesToShow) % testimonials.length) +
//       testimonials.length) %
//     testimonials.length;

//   return (
//     <section className="py-6 bg-muted/30">
//       <div className="container mx-auto px-4">
//         {/* Section Header */}
//         <div className="text-center mb-8 animate-in slide-in-from-bottom-10 duration-1000">
//           <Badge
//             variant="outline"
//             className="mb-4 text-primary border-primary/20"
//           >
//             Testimonials
//           </Badge>
//           <h2 className="text-3xl md:text-4xl font-bold mb-4">
//             What Our Customers Say
//           </h2>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             Don&apos;t just take our word for it. Here&apos;s what our satisfied
//             customers have to say about their experience
//           </p>
//         </div>

//         {/* Testimonials Slider */}
//         <div
//           className="relative"
//           onMouseEnter={handleMouseEnter}
//           onMouseLeave={handleMouseLeave}
//         >
//           {/* Slider Container */}
//           <div
//             ref={sliderRef}
//             className="overflow-hidden rounded-xl"
//             onTouchStart={handleTouchStart}
//             onTouchMove={handleTouchMove}
//             onTouchEnd={handleTouchEnd}
//           >
//             <div
//               className={`flex ${isTransitioning ? "transition-transform duration-500 ease-in-out" : ""}`}
//               style={{
//                 transform: `translateX(-${currentIndex * slideWidth}%)`,
//               }}
//             >
//               {extendedTestimonials.map((testimonial, index) => (
//                 <div
//                   key={`${testimonial.id}-${index}`}
//                   className="flex-shrink-0 px-3"
//                   style={{ width: `${slideWidth}%` }}
//                 >
//                   <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 h-full p-0 dark:border-gray-400">
//                     <CardContent className="p-6 h-full flex flex-col">
//                       {/* Quote Icon */}
//                       <div className="mb-4">
//                         <Quote className="h-8 w-8 text-primary/20 group-hover:text-primary/40 transition-colors duration-300" />
//                       </div>

//                       {/* Rating */}
//                       <div className="flex items-center space-x-1 mb-4">
//                         {[...Array(testimonial.rating)].map((_, i) => (
//                           <Star
//                             key={i}
//                             className="w-4 h-4 fill-yellow-400 text-yellow-400"
//                           />
//                         ))}
//                       </div>

//                       {/* Content */}
//                       <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
//                         &ldquo;{testimonial.content}&ldquo;
//                       </p>

//                       {/* Author */}
//                       <div className="flex items-center space-x-4 mt-auto">
//                         <Image
//                           src={testimonial.avatar || "/placeholder.svg"}
//                           alt={testimonial.name}
//                           width={48}
//                           height={48}
//                           className="rounded-full"
//                         />
//                         <div>
//                           <div className="flex items-center space-x-2">
//                             <h4 className="font-semibold">
//                               {testimonial.name}
//                             </h4>
//                             {testimonial.verified && (
//                               <Badge variant="secondary" className="text-xs">
//                                 Verified
//                               </Badge>
//                             )}
//                           </div>
//                           <p className="text-sm text-muted-foreground">
//                             {testimonial.role}
//                           </p>
//                         </div>
//                       </div>
//                     </CardContent>
//                   </Card>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Navigation Arrows */}
//           <Button
//             variant="outline"
//             size="icon"
//             className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm hover:bg-background shadow-lg"
//             onClick={prevSlide}
//           >
//             <ChevronLeft className="h-4 w-4" />
//           </Button>

//           <Button
//             variant="outline"
//             size="icon"
//             className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-background/80 backdrop-blur-sm hover:bg-background shadow-lg"
//             onClick={nextSlide}
//           >
//             <ChevronRight className="h-4 w-4" />
//           </Button>
//         </div>

//         {/* Pagination Dots */}
//         <div className="flex justify-center space-x-2 mt-8">
//           {testimonials.map((_, index) => (
//             <button
//               key={index}
//               onClick={() => goToSlide(index)}
//               className={`w-2 h-2 rounded-full transition-all duration-300 ${
//                 index === actualIndex
//                   ? "bg-primary scale-125 w-8"
//                   : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
//               }`}
//             />
//           ))}
//         </div>

//         {/* Social Proof */}
//         <div className="text-center mt-4 animate-in slide-in-from-bottom-10 duration-1000 delay-1000">
//           <p className="text-muted-foreground mb-2">
//             Join thousands of satisfied customers
//           </p>
//           <div className="flex items-center justify-center space-x-1">
//             {[...Array(5)].map((_, i) => (
//               <Star
//                 key={i}
//                 className="w-5 h-5 fill-yellow-400 text-yellow-400"
//               />
//             ))}
//             <span className="ml-2 font-semibold">
//               4.9/5 from 10,000+ reviews
//             </span>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import type { Swiper as SwiperType } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

import { AuroraText } from "@/components/magicui/aurora-text";
import { ShinyButton } from "@/components/magicui/shiny-button";
import { AvatarCircles } from "@/components/magicui/avatar-circles";

const testimonials = [
  {
    id: 1,
    name: "Angel Whites",
    role: "Marketing Manager",
    company: "TechCorp Inc.",
    image:
      "https://img.freepik.com/premium-photo/official-girl-iamges-hd-wallpaper-free-download-girl-model-with-pant-shairt-product-view-ad_88650-3235.jpg",
    rating: 5,
    text: "This platform has completely transformed how we approach our marketing campaigns. The results have been outstanding and the support teams is incredibly responsive.",
    bgColor: "from-blue-50 to-cyan-50",
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Product Designer",
    company: "Design Studio",
    image:
      "https://img.freepik.com/premium-photo/professional-male-entrepreneur-hd-8k-wallpaper-stock-photographic-image_1033957-28697.jpg",
    rating: 5,
    text: "The user experience is phenomenal. Every feature is thoughtfully designed and the interface is incredibly intuitive. Highly recommend to any creative professional.",
    bgColor: "from-purple-50 to-pink-50",
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "CEO",
    company: "StartupXYZ",
    image:
      "https://img.freepik.com/premium-photo/official-girl-iamges-hd-wallpaper-free-download-girl-model-with-pant-shairt-product-view-ad_88650-3233.jpg",
    rating: 5,
    text: "As a startup founder, I need tools that scale with my business. This solution has been perfect - powerful, flexible, and cost-effective.",
    bgColor: "from-green-50 to-emerald-50",
  },
  {
    id: 4,
    name: "David Rodriguez",
    role: "Software Engineer",
    company: "DevTech Solutions",
    image:
      "https://img.freepik.com/premium-photo/professional-male-entrepreneur-hd-8k-wallpaper-stock-photographic-image_1033957-28697.jpg",
    rating: 5,
    text: "The technical implementation is flawless. Great API documentation, excellent performance, and the development experience is top-notch.",
    bgColor: "from-orange-50 to-yellow-50",
  },
  {
    id: 5,
    name: "Emily Watson",
    role: "Operations Director",
    company: "Global Enterprises",
    image:
      "https://img.freepik.com/premium-photo/official-girl-iamges-hd-wallpaper-free-download-girl-model-with-pant-shairt-product-view-ad_88650-3234.jpg",
    rating: 5,
    text: "We've seen a 40% increase in efficiency since implementing this solution. The automation features have saved us countless hours every week.",
    bgColor: "from-indigo-50 to-blue-50",
  },
  {
    id: 6,
    name: "James Thompson",
    role: "Creative Director",
    company: "Brand Agency",
    image:
      "https://img.freepik.com/premium-photo/portrait-smart-handsome-business-man_1004054-30862.jpg?w=360",
    rating: 5,
    text: "The creative possibilities are endless. This tool has become an essential part of our workflow and has elevated the quality of our deliverables.",
    bgColor: "from-rose-50 to-pink-50",
  },
];

const avatars = [
  {
    imageUrl:
      "https://img.freepik.com/premium-photo/portrait-smart-handsome-business-man_1004054-30862.jpg?w=360",
    profileUrl: "https://github.com/dillionverma",
  },
  {
    imageUrl:
      "https://img.freepik.com/premium-photo/official-girl-iamges-hd-wallpaper-free-download-girl-model-with-pant-shairt-product-view-ad_88650-3234.jpg",
    profileUrl: "https://github.com/tomonarifeehan",
  },
  {
    imageUrl:
      "https://img.freepik.com/premium-photo/professional-male-entrepreneur-hd-8k-wallpaper-stock-photographic-image_1033957-28697.jpg",
    profileUrl: "https://github.com/BankkRoll",
  },
  {
    imageUrl:
      "https://img.freepik.com/premium-photo/official-girl-iamges-hd-wallpaper-free-download-girl-model-with-pant-shairt-product-view-ad_88650-3235.jpg",
    profileUrl: "https://github.com/safethecode",
  },
  {
    imageUrl:
      "https://img.freepik.com/free-photo/dreamy-european-lady-with-wavy-hairstyle-posing-white-wall-indoor-photo-joyful-girl-black-blouse_197531-11755.jpg?semt=ais_hybrid&w=740&q=80",
    profileUrl: "https://github.com/sanjay-mali",
  },
  {
    imageUrl:
      "https://img.freepik.com/premium-photo/profile-attractive-lady-toothy-smiling-arms-crossed_274222-27447.jpg?semt=ais_hybrid&w=740&q=80",
    profileUrl: "https://github.com/itsarghyadas",
  },
];

export function TestimonialSection() {
  const swiperRef = useRef<SwiperType>(null);

  return (
    <section className="py-20 px-4 bg-secondary relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-cyan-400/20 to-blue-400/20 rounded-full blur-xl"></div>

      <div className="container mx-auto max-w-[90rem] relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <ShinyButton className="relative inline-block px-6 py-3 rounded-full text-lg font-bold mb-6 bg-badge text-rose-800 overflow-hidden">
            ✨ Testimonials
          </ShinyButton>

          <h2 className="text-4xl lg:text-5xl font-bold text-forground mb-6">
            What Our{" "}
            <AuroraText className="text-blue-600 italic">Amazing</AuroraText>
            <br />
            Customers Say About Us
          </h2>
          <p className=" text-muted-foreground max-w-3xl mx-auto">
            Don&rsquo;t just take our word for it. Here&rsquo;s what real
            customers have to say about their experiences with our platform
          </p>

          {/* new */}
          <div className="flex items-center justify-center gap-4">
            {/* Overlapping Profile Photos */}
            <div className="flex -space-x-3">
              <AvatarCircles numPeople={99} avatarUrls={avatars} />
            </div>

            {/* Rating and Reviews */}
            <div className="flex items-center gap-3">
              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(4)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
                <Star className="w-5 h-5 text-gray-400" />
              </div>

              {/* Rating Text */}
              <span className="text-muted-foreground">
                4.5/5 (100+ Reviews)
              </span>
            </div>
          </div>
          {/* new */}
        </motion.div>

        <div className="relative">
          {/* Custom Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 -left-6 z-10">
            <Button
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border-2 border-rose-200 hover:bg-rose-50 hover:border-rose-300 shadow-lg transition-all duration-300"
              onClick={() => swiperRef.current?.slidePrev()}
            >
              <ChevronLeft className="w-5 h-5 text-rose-600" />
            </Button>
          </div>

          <div className="absolute top-1/2 -translate-y-1/2 -right-6 z-10">
            <Button
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full bg-white/90 backdrop-blur-sm border-2 border-rose-200 hover:bg-rose-50 hover:border-rose-300 shadow-lg transition-all duration-300"
              onClick={() => swiperRef.current?.slideNext()}
            >
              <ChevronRight className="w-5 h-5 text-rose-600" />
            </Button>
          </div>

          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            loop={true}
            spaceBetween={30}
            slidesPerView={1}
            centeredSlides={true}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
              bulletClass: "custom-bullet",
              bulletActiveClass: "custom-bullet-active",
            }}
            effect="coverflow"
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2,
              slideShadows: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1.2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 1.5,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 2.2,
                spaceBetween: 40,
              },
              1280: {
                slidesPerView: 2.5,
                spaceBetween: 50,
              },
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="testimonials-swiper !pb-16"
          >
            {testimonials.map((testimonial, index) => (
              <SwiperSlide key={testimonial.id}>
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="h-full"
                >
                  <Card
                    className={`h-full bg-gradient-to-br ${testimonial.bgColor} dark:from-gray-900 dark:to-black border-0 shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 group`}
                  >
                    <CardContent className="relative p-8 h-full flex flex-col">
                      {/* Quote Icon */}
                      <div className="mb-6">
                        <div className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Quote className="w-6 h-6 text-rose-600" />
                        </div>
                      </div>

                      {/* Testimonial Text */}
                      <blockquote className="text-muted-forground text-lg leading-relaxed mb-8 flex-grow italic">
                        &rdquo;{testimonial.text}&rdquo;
                      </blockquote>

                      {/* Rating */}
                      <div className="flex gap-1 mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                            viewport={{ once: true }}
                          >
                            <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                          </motion.div>
                        ))}
                      </div>

                      {/* Author Info */}
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            width={60}
                            height={60}
                            className="rounded-full object-cover border-3 border-white shadow-lg group-hover:scale-110 transition-transform duration-300"
                          />
                          <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
                        </div>
                        <div>
                          <h4 className="font-bold text-forground text-lg">
                            {testimonial.name}
                          </h4>
                          <p className="text-muted-forground text-sm">
                            {testimonial.role}
                          </p>
                          <p className="text-blue-700 text-sm font-medium">
                            {testimonial.company}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Statistics */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { number: "10K+", label: "Happy Customers" },
            { number: "98%", label: "Satisfaction Rate" },
            { number: "50+", label: "Countries Served" },
            { number: "24/7", label: "Support Available" },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              viewport={{ once: true }}
              className="rounded-lg shadow-lg p-6 border border-border  hover:bg-white/10 transition-all duration-300"
            >
              <div className="text-4xl font-bold text-blue-700 mb-2">
                {stat.number}
              </div>
              <div className="text-forground font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div> */}
      </div>

      <style jsx global>{`
        .testimonials-swiper .swiper-pagination {
          bottom: 0 !important;
        }

        .testimonials-swiper .custom-bullet {
          width: 12px !important;
          height: 12px !important;
          margin: 0 6px !important;
          background: rgb(96 165 250) !important;
          opacity: 0.5 !important;
          transition: all 0.3s ease !important;
          border-radius: 50% !important;
        }

        .testimonials-swiper .custom-bullet-active {
          background: rgb(37 99 235) !important;
          opacity: 1 !important;
          transform: scale(1.25) !important;
        }

        .testimonials-swiper .swiper-slide {
          height: auto !important;
        }

        .testimonials-swiper .swiper-slide-active {
          z-index: 2;
        }

        .testimonials-swiper .swiper-slide-next,
        .testimonials-swiper .swiper-slide-prev {
          z-index: 1;
        }
      `}</style>
    </section>
  );
}
