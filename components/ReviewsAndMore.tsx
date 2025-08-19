'use client';

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import type { Variants, Transition } from 'framer-motion';
import { useRouter } from "next/navigation";

// Colors configuration
const colors = {
  bg: {
    primary: "from-gray-900 via-blue-900 to-purple-900",
    card: {
      main: "bg-white/5"
    }
  },
  text: {
    primary: "text-white",
    secondary: "text-gray-300",
    muted: "text-gray-400",
    gradient: {
      videoEditor: "from-pink-500 via-purple-500 to-cyan-500"
    }
  },
  border: {
    primary: "border-white/10"
  },
  hover: {
    card: {
      translate: "hover:-translate-y-2",
      border: "hover:border-cyan-400/50"
    }
  }
};

// Animation variants
const floatVariants: Variants = {
  animate: {
    y: [-20, 20, -20],
    rotate: [0, 5, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const pulseVariants: Variants = {
  animate: {
    opacity: [0.4, 1, 0.4],
    scale: [0.8, 1.2, 0.8],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

const spinTransition: Transition = {
  duration: 20,
  repeat: Infinity,
  ease: "linear"
};

const cardVariants: Variants = {
  hidden: { y: 30, opacity: 0, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const modalVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  },
  exit: {
    opacity: 0,
    scale: 0.8,
    transition: {
      duration: 0.2,
      ease: "easeIn"
    }
  }
};

interface ModalImage {
  src: string;
  alt: string;
  type: 'graphic' | 'photo';
  index: number;
}

export default function ReviewsAndMore() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeTab, setActiveTab] = useState("reviews");
  const [modalImage, setModalImage] = useState<ModalImage | null>(null);
  const router = useRouter();

  const tabGradients = {
    reviews: "from-pink-500 to-violet-500",
    graphics: "from-blue-500 to-cyan-500",
    photos: "from-emerald-500 to-teal-500"
  };

  const reviews = [
    {
      title: "Reels and Tales",
      content: "Your way of adding clips one after another says a proper story and rhythm...you show things creatively..",
      rating: 5,
      category: "Creative Direction"
    },
    {
      title: "Insiya Sabuwala",
      content: "You edited the videos in just the way I wanted, thank you for your service!",
      rating: 5,
      category: "Client Satisfaction"
    },
    {
      title: "Apkireturn (Better Insights)",
      content: "You add precision and depth to the videos, with right edits!",
      rating: 5,
      category: "Technical Excellence"
    },
    {
      title: "Life Champions Ecosystem",
      content: "You make explanation more understanding and virtually pleasing!",
      rating: 5,
      category: "Educational Content"
    },
  ];

  const openModal = (src: string, alt: string, type: 'graphic' | 'photo', index: number) => {
    setModalImage({ src, alt, type, index });
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    if (!modalImage) return;

    const maxIndex = modalImage.type === 'graphic' ? 8 : 2;
    let newIndex = modalImage.index;

    if (direction === 'next') {
      newIndex = modalImage.index < maxIndex ? modalImage.index + 1 : 0;
    } else {
      newIndex = modalImage.index > 0 ? modalImage.index - 1 : maxIndex;
    }

    const prefix = modalImage.type === 'graphic' ? 'design' : 'photo';
    const extension = modalImage.type === 'graphic' ? 'png' : 'jpg';
    const newSrc = `/${modalImage.type}s/${prefix}-${newIndex + 1}.${extension}`;
    const newAlt = `${modalImage.type === 'graphic' ? 'Graphic Design' : 'Photo'} ${newIndex + 1}`;

    setModalImage({
      src: newSrc,
      alt: newAlt,
      type: modalImage.type,
      index: newIndex
    });
  };

  return (
    <div className={`min-h-screen relative overflow-hidden bg-gradient-to-br ${colors.bg.primary} ${colors.text.primary}`}>

      {/* Image Modal */}
      <AnimatePresence>
        {modalImage && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/90 backdrop-blur-md" />

            {/* Modal Content */}
            <motion.div
              className="relative z-10 max-w-7xl max-h-[90vh] w-full flex flex-col"
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between mb-4 px-4">
                <h3 className="text-white text-xl font-semibold">
                  {modalImage.alt}
                </h3>
                <button
                  onClick={closeModal}
                  className="text-white/80 hover:text-white transition-colors p-2 hover:bg-white/10 rounded-lg"
                  aria-label="Close modal"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              {/* Image Container with Scroll */}
              <div className="relative flex-1 overflow-auto rounded-lg bg-black/50 backdrop-blur-sm">
                <div className="relative min-h-full flex items-center justify-center p-4">
                  <img
                    src={modalImage.src}
                    alt={modalImage.alt}
                    className="max-w-full h-auto object-contain rounded-lg"
                    style={{ maxHeight: '80vh' }}
                  />
                </div>

                {/* Navigation Buttons */}
                <button
                  onClick={() => navigateImage('prev')}
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all hover:scale-110"
                  aria-label="Previous image"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <button
                  onClick={() => navigateImage('next')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all hover:scale-110"
                  aria-label="Next image"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>

              {/* Image Counter */}
              <div className="text-center mt-4 text-white/70 text-sm">
                {modalImage.index + 1} / {modalImage.type === 'graphic' ? 9 : 3}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* Floating Stars */}
        {[
          { size: 'w-2 h-2', color: 'bg-white', top: '8%', left: '10%', delay: 0 },
          { size: 'w-1.5 h-1.5', color: 'bg-yellow-300', top: '20%', right: '15%', delay: 1 },
          { size: 'w-3 h-3', color: 'bg-pink-300', bottom: '25%', left: '12%', delay: 0.5 },
          { size: 'w-2 h-2', color: 'bg-cyan-300', top: '45%', right: '8%', delay: 0.7 },
          { size: 'w-1 h-1', color: 'bg-white', bottom: '15%', right: '25%', delay: 0.3 },
          { size: 'w-2.5 h-2.5', color: 'bg-violet-300', top: '70%', left: '18%', delay: 1.2 },
          { size: 'w-1.5 h-1.5', color: 'bg-emerald-300', bottom: '40%', right: '12%', delay: 0.9 }
        ].map((star, i) => (
          <motion.div
            key={i}
            className={`absolute ${star.size} ${star.color} rounded-full opacity-80`}
            style={{ top: star.top, left: star.left, right: star.right, bottom: star.bottom }}
            variants={pulseVariants}
            animate="animate"
            transition={{ delay: star.delay }}
          />
        ))}

        {/* Animated Plus Signs */}
        {[
          { top: '12%', right: '30%', color: 'text-pink-400', size: 'text-2xl', delay: 0 },
          { bottom: '20%', left: '25%', color: 'text-cyan-300', size: 'text-xl', delay: 1 },
          { top: '60%', left: '8%', color: 'text-yellow-300', size: 'text-lg', delay: 2 },
          { bottom: '55%', right: '18%', color: 'text-violet-400', size: 'text-xl', delay: 1.5 }
        ].map((plus, i) => (
          <motion.div
            key={i}
            className={`absolute ${plus.color} opacity-60 ${plus.size} font-light`}
            style={{ top: plus.top, left: plus.left, right: plus.right, bottom: plus.bottom }}
            animate={{ rotate: 360 }}
            transition={{ ...spinTransition, delay: plus.delay }}
          >
            +
          </motion.div>
        ))}

        {/* Geometric Shapes */}
        <motion.div
          className="absolute top-20 left-1/4 w-8 h-8 border-2 border-pink-400 opacity-30 rotate-45"
          variants={floatVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-32 right-1/4 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-25 rounded-full"
          variants={floatVariants}
          animate="animate"
          transition={{ delay: 1 }}
        />
        <motion.div
          className="absolute top-1/3 right-16 w-10 h-10 border-2 border-yellow-300 opacity-20"
          variants={floatVariants}
          animate="animate"
          transition={{ delay: 2 }}
        />

        {/* Asterisk/Star Shapes */}
        {[
          { top: '25%', left: '5%', color: 'text-pink-300', rotation: 15, delay: 0 },
          { bottom: '30%', right: '5%', color: 'text-cyan-300', rotation: -20, delay: 0.5 },
          { top: '75%', right: '8%', color: 'text-yellow-300', rotation: 45, delay: 1.5 },
          { top: '50%', left: '3%', color: 'text-violet-300', rotation: -30, delay: 2 }
        ].map((star, i) => (
          <motion.div
            key={i}
            className={`absolute ${star.color} opacity-50 text-3xl`}
            style={{
              top: star.top,
              left: star.left,
              right: star.right,
              bottom: star.bottom,
              transform: `rotate(${star.rotation}deg)`
            }}
            variants={pulseVariants}
            animate="animate"
            transition={{ delay: star.delay }}
          >
            ✦
          </motion.div>
        ))}

        {/* Large Background Glows */}
        <motion.div
          className="absolute -top-32 -left-32 w-80 h-80 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full blur-3xl"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-32 -right-32 w-96 h-96 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
          animate={{ opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-emerald-500/8 to-teal-500/8 rounded-full blur-3xl"
          animate={{ opacity: [0.1, 0.4, 0.1] }}
          transition={{ duration: 6, repeat: Infinity, delay: 2 }}
        />

      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-10 relative z-10">

        {/* Header Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className={`bg-gradient-to-r ${colors.text.gradient.videoEditor} bg-clip-text text-transparent`}>
              Reviews & Portfolio
            </span>
          </motion.h1>

          <motion.p
            className={`${colors.text.secondary} text-lg max-w-2xl mx-auto`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Client testimonials, graphic designs, and creative photography showcasing our diverse expertise
          </motion.p>

          {/* Decorative Line */}
          <motion.div
            className={`w-24 h-1 bg-gradient-to-r ${colors.text.gradient.videoEditor} mx-auto mt-6 rounded-full`}
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          />
        </motion.div>

        <Tabs defaultValue="reviews" className="w-full" onValueChange={setActiveTab}>

          {/* Enhanced Tab Navigation */}
          <motion.div
            className="flex justify-center mb-12"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <TabsList className={`${colors.bg.card.main} backdrop-blur-sm border ${colors.border.primary} rounded-2xl p-2`}>
              {[
                { value: "reviews", label: "Reviews", icon: "⭐" },
                { value: "graphics", label: "Graphics", icon: "🎨" },
                { value: "photos", label: "Photos", icon: "📸" }
              ].map((tab) => (
                <motion.div
                  key={tab.value}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <TabsTrigger
                    value={tab.value}
                    className={`flex items-center ${colors.text.muted} space-x-2 px-6 py-3 rounded-xl transition-all duration-300 data-[state=active]:bg-gradient-to-r data-[state=active]:${tabGradients[tab.value as keyof typeof tabGradients]} data-[state=active]:text-white data-[state=active]:shadow-lg`}
                  >
                    <span className="text-lg">{tab.icon}</span>
                    <span className={`font-medium`}>{tab.label}</span>
                  </TabsTrigger>
                </motion.div>
              ))}
            </TabsList>
          </motion.div>

          {/* Reviews Tab */}
          <TabsContent value="reviews">
            <motion.div
              className="grid md:grid-cols-2 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {reviews.map((review, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className={`group ${colors.bg.card.main} backdrop-blur-sm rounded-2xl border ${colors.border.primary} transition-all duration-500 ${colors.hover.card.translate} hover:scale-105 ${colors.hover.card.border} hover:drop-shadow-[0_20px_40px_rgba(45,212,191,0.2)] relative overflow-hidden`}
                  whileHover={{
                    y: -8,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                >
                  {/* Card Glow Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  />

                  <div className="p-8 relative z-10">
                    {/* Rating Stars */}
                    <div className="flex items-center space-x-1 mb-4">
                      {[...Array(review.rating)].map((_, i) => (
                        <motion.span
                          key={i}
                          className="text-yellow-400 text-lg"
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ delay: 0.1 * i, duration: 0.3 }}
                        >
                          ⭐
                        </motion.span>
                      ))}
                    </div>

                    {/* Category Badge */}
                    <motion.div
                      className="inline-block px-3 py-1 bg-gradient-to-r from-pink-500/20 to-violet-500/20 rounded-full text-sm font-medium text-pink-400 mb-4"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.3, duration: 0.3 }}
                    >
                      {review.category}
                    </motion.div>

                    <h3 className="text-xl font-bold mb-4 bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent">
                      {review.title}
                    </h3>

                    {/* Quote Icon */}
                    <div className="text-4xl text-pink-400/30 mb-4">"</div>

                    <p className={`${colors.text.muted} leading-relaxed italic`}>
                      {review.content}
                    </p>

                    {/* Bottom Decoration */}
                    <div className="absolute bottom-4 right-4 opacity-20 group-hover:opacity-40 transition-opacity">
                      <svg className="w-8 h-8 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
                      </svg>
                    </div>
                  </div>

                  {/* Corner Decorations */}
                  <div className="absolute top-3 left-3 w-4 h-4 border-l-2 border-t-2 border-pink-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-3 right-3 w-4 h-4 border-r-2 border-b-2 border-violet-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          {/* Graphics Tab */}
          <TabsContent value="graphics">
            <motion.div
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {Array.from({ length: 9 }).map((_, i) => (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  className={`group ${colors.bg.card.main} backdrop-blur-sm rounded-2xl border ${colors.border.primary} transition-all duration-500 hover:scale-105 ${colors.hover.card.border} hover:drop-shadow-[0_20px_40px_rgba(45,212,191,0.25)] relative overflow-hidden cursor-pointer`}
                  onMouseEnter={() => setHoveredCard(i)}
                  onMouseLeave={() => setHoveredCard(null)}
                  whileHover={{
                    y: -10,
                    transition: { duration: 0.3, ease: "easeOut" }
                  }}
                  onClick={() => openModal(`/graphics/design-${i + 1}.png`, `Graphic Design ${i + 1}`, 'graphic', i)}
                >
                  {/* Card Glow Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  />

                  <div className="relative overflow-hidden rounded-t-2xl">
                    <motion.div
                      className="aspect-[4/3] relative"
                      whileHover={{ scale: 1.1 }}
                      transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                      <img
                        src={`/graphics/design-${i + 1}.png`}
                        alt={`Graphic Design ${i + 1}`}
                        className="w-full h-full object-cover transition-all duration-500 group-hover:brightness-110"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Design Type Badge */}
                      <motion.div
                        className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-semibold rounded-full opacity-0 group-hover:opacity-100"
                        initial={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        Design {i + 1}
                      </motion.div>

                      {/* View Icon */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="bg-white/90 backdrop-blur-sm p-3 rounded-full">
                          <svg className="w-6 h-6 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                          </svg>
                        </div>
                      </div>
                    </motion.div>
                  </div>

                  <div className="p-6 relative z-10">
                    <div className="flex items-center justify-between">
                      <p className={`${colors.text.muted} text-sm`}>Graphic Design {i + 1}</p>
                      <motion.div
                        className="text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity"
                        whileHover={{ scale: 1.2, rotate: 12 }}
                      >
                        🎨
                      </motion.div>
                    </div>
                  </div>

                  {/* Corner Decorations */}
                  <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-blue-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-cyan-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

          {/* Photos Tab */}
          <TabsContent value="photos">
            <motion.div
              className="grid sm:grid-cols-1 md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {Array.from({ length: 3 }).map((_, i) => (
                <motion.div
                  key={i}
                  variants={cardVariants}
                  className={`group ${colors.bg.card.main} backdrop-blur-sm rounded-2xl border ${colors.border.primary} transition-all duration-500 hover:scale-105 ${colors.hover.card.border} hover:drop-shadow-[0_25px_50px_rgba(45,212,191,0.3)] relative overflow-hidden cursor-pointer`}
                  whileHover={{
                    y: -12,
                    rotate: i % 2 === 0 ? 1 : -1,
                    transition: { duration: 0.4, ease: "easeOut" }
                  }}
                  onClick={() => openModal(`/photos/photo-${i + 1}.jpg`, `Photo ${i + 1}`, 'photo', i)}
                >
                  {/* Card Glow Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  />

                  <div className="relative overflow-hidden rounded-t-2xl">
                    <motion.div
                      className="aspect-[3/4] relative"
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                      <img
                        src={`/photos/photo-${i + 1}.jpg`}
                        alt={`Photo ${i + 1}`}
                        className="w-full h-full object-cover transition-all duration-600 group-hover:brightness-110 group-hover:contrast-110"
                      />

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-gray-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                      {/* Photo Type Badge */}
                      <motion.div
                        className="absolute top-4 right-4 px-3 py-1 bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-semibold rounded-full opacity-0 group-hover:opacity-100"
                        initial={{ scale: 0, opacity: 0 }}
                        whileHover={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      >
                        Photo {i + 1}
                      </motion.div>

                      {/* Camera Icon */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <motion.div
                          className="bg-white/90 backdrop-blur-sm p-4 rounded-full"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.2 }}
                        >
                          <svg className="w-7 h-7 text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </motion.div>
                      </div>

                      {/* Artistic Frame Effect */}
                      <div className="absolute inset-2 border border-white/20 rounded-lg opacity-0 group-hover:opacity-60 transition-opacity duration-500" />
                    </motion.div>
                  </div>

                  <div className="p-6 relative z-10">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className={`${colors.text.muted} text-sm`}>Photography</p>
                        <h4 className="text-white font-medium mt-1">Creative Shot {i + 1}</h4>
                      </div>
                      <motion.div
                        className="text-emerald-400 opacity-0 group-hover:opacity-100 transition-opacity"
                        whileHover={{ scale: 1.3, rotate: -12 }}
                      >
                        📸
                      </motion.div>
                    </div>

                    {/* Photo Description */}
                    <motion.p
                      className={`${colors.text.muted} text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                      initial={{ y: 10, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      Professional photography showcasing creative vision and technical excellence
                    </motion.p>
                  </div>

                  {/* Enhanced Corner Decorations */}
                  <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-emerald-400/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-teal-400/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Subtle Gradient Border on Hover */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-400/0 via-emerald-400/20 to-teal-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{ padding: '1px' }}>
                    <div className={`w-full h-full ${colors.bg.card.main} rounded-2xl`} />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </TabsContent>

        </Tabs>

        {/* Call to Action Section */}
        <motion.div
          className="text-center mt-20 py-16"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-6"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <span className={`bg-gradient-to-r ${colors.text.gradient.videoEditor} bg-clip-text text-transparent`}>
              Ready to Create Something Amazing?
            </span>
          </motion.h2>

          <motion.p
            className={`${colors.text.secondary} text-lg mb-8 max-w-2xl mx-auto`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.6 }}
          >
            Let's bring your vision to life with professional video editing, stunning graphics, and creative photography
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.6 }}
          >
            <motion.button
              className="px-8 py-4 bg-gradient-to-r from-pink-500 to-violet-500 text-white font-semibold rounded-xl hover:from-pink-600 hover:to-violet-600 transition-all duration-300 transform hover:scale-105 hover:shadow-xl shadow-pink-500/25"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(236,72,153,0.3)" }}
              onClick={() => router.push("/contact")}
            >
              Start Your Project
            </motion.button>

            <motion.button
              className={`px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 font-semibold rounded-xl hover:bg-cyan-400/10 hover:border-cyan-400 transition-all duration-300`}
              whileHover={{ scale: 1.05, borderColor: "rgb(34,211,238)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() =>
                window.open("https://naqiya.mystrikingly.com/", "_blank")
              }
            >
              View More Work
            </motion.button>
          </motion.div>
        </motion.div>

      </div>
    </div>
  );
}