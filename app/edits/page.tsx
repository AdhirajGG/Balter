// app/edits/page.tsx
'use client';

import Link from "next/link";
import Image from "next/image";
import { motion } from 'framer-motion';
import type { Variants, Transition } from 'framer-motion';
import { colors } from '@/lib/colors';

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

const categories = [
  {
    name: "Fun/Vlog",
    id: "fun-vlog",
    description: "Spontaneous moments and vibrant stories captured creatively.",
    image: "/fun-vlog.png",
    gradient: "from-pink-500 to-violet-500"
  },
  {
    name: "Motivation/Business",
    id: "motivation-business",
    description: "Inspiring edits with a purpose-driven message.",
    image: "/motivation-business.png",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    name: "Fashion",
    id: "fashion",
    description: "Bold visuals and stylish edits for modern fashion.",
    image: "/fashion.png",
    gradient: "from-rose-500 to-pink-500"
  },
  {
    name: "Tutorial/Products",
    id: "tutorial-products",
    description: "Clear, engaging breakdowns of products and tutorials.",
    image: "/tutorial-products.png",
    gradient: "from-emerald-500 to-teal-500"
  },
  {
    name: "ITR/Advertise",
    id: "itr-advertise",
    description: "Concise ads and informative reels for businesses and ITR.",
    image: "/itr-advertise.png",
    gradient: "from-orange-500 to-red-500"
  },
  {
    name: "Stop Motion Videos",
    id: "stop-motion",
    description: "Creative stop-motion sequences that tell more with less.",
    image: "/stop-motion.png",
    gradient: "from-purple-500 to-indigo-500"
  },
  {
    name: "Behind the Scenes (BTS)",
    id: "bts",
    description: "Real work behind the lens—raw and unscripted moments.",
    image: "/bts.png",
    gradient: "from-amber-500 to-yellow-500"
  },
];

export default function EditsPage() {
  return (
    <div className={`min-h-screen p-6 md:p-10 relative overflow-hidden bg-gradient-to-br ${colors.bg.primary} ${colors.text.primary}`}>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        
        {/* Floating Stars */}
        {[
          { size: 'w-2 h-2', color: 'bg-white', top: '10%', left: '15%', delay: 0 },
          { size: 'w-1.5 h-1.5', color: 'bg-yellow-300', top: '25%', right: '25%', delay: 1 },
          { size: 'w-3 h-3', color: 'bg-pink-300', bottom: '30%', left: '10%', delay: 0.5 },
          { size: 'w-2 h-2', color: 'bg-cyan-300', top: '45%', right: '15%', delay: 0.7 },
          { size: 'w-1 h-1', color: 'bg-white', bottom: '20%', right: '30%', delay: 0.3 },
          { size: 'w-2.5 h-2.5', color: 'bg-violet-300', top: '70%', left: '25%', delay: 1.2 },
          { size: 'w-1.5 h-1.5', color: 'bg-emerald-300', bottom: '50%', right: '5%', delay: 0.9 }
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
          { top: '15%', right: '35%', color: 'text-pink-400', size: 'text-2xl', delay: 0 },
          { bottom: '25%', left: '35%', color: 'text-cyan-300', size: 'text-xl', delay: 1 },
          { top: '55%', left: '5%', color: 'text-yellow-300', size: 'text-lg', delay: 2 },
          { bottom: '60%', right: '20%', color: 'text-violet-400', size: 'text-xl', delay: 1.5 }
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
          className="absolute bottom-32 right-1/3 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-25 rounded-full"
          variants={floatVariants}
          animate="animate"
          transition={{ delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 right-10 w-10 h-10 border-2 border-yellow-300 opacity-20"
          variants={floatVariants}
          animate="animate"
          transition={{ delay: 2 }}
        />
        
        {/* Asterisk/Star Shapes */}
        {[
          { top: '35%', left: '8%', color: 'text-pink-300', rotation: 15, delay: 0 },
          { bottom: '40%', right: '12%', color: 'text-cyan-300', rotation: -20, delay: 0.5 },
          { top: '75%', right: '8%', color: 'text-yellow-300', rotation: 45, delay: 1.5 },
          { top: '20%', left: '50%', color: 'text-violet-300', rotation: -30, delay: 2 }
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
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-gradient-to-r from-violet-500/5 to-pink-500/5 rounded-full blur-3xl"
          animate={{ opacity: [0.1, 0.4, 0.1] }}
          transition={{ duration: 6, repeat: Infinity, delay: 2 }}
        />
        
      </div>

      {/* Page Title */}
      <motion.div 
        className="text-center mb-12 relative z-10"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          <span className={`bg-gradient-to-r ${colors.text.gradient.videoEditor} bg-clip-text text-transparent`}>
            Video Categories
          </span>
        </h1>
        <p className={`${colors.text.secondary} text-lg max-w-2xl mx-auto`}>
          Explore my diverse portfolio of video editing work across different styles and genres
        </p>
      </motion.div>

      {/* Cards Grid */}
      <motion.div 
        className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {categories.map((category, index) => (
          <Link key={category.id} href={`/edits/${category.id}`}>
            <motion.div
              variants={cardVariants}
              className={`group ${colors.bg.card.main} backdrop-blur-sm rounded-2xl border ${colors.border.primary} transition-all duration-500 ${colors.hover.card.translate} hover:scale-105 ${colors.hover.card.border} hover:drop-shadow-[0_20px_40px_rgba(45,212,191,0.3)] relative overflow-hidden`}
              whileHover={{ 
                y: -8,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
            >
              {/* Card Glow Effect */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}
                initial={false}
              />
              
              {/* Image Container */}
              <div className="relative overflow-hidden rounded-t-2xl">
                <motion.div
                  className="aspect-video relative"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <Image
                    src={category.image}
                    alt={category.name}
                    fill
                    className="object-cover transition-all duration-500 group-hover:brightness-110"
                  />
                  {/* Image Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                </motion.div>
                
                {/* Floating Badge */}
                <motion.div 
                  className={`absolute top-4 right-4 px-3 py-1 bg-gradient-to-r ${category.gradient} text-white text-xs font-semibold rounded-full opacity-0 group-hover:opacity-100`}
                  initial={{ scale: 0, opacity: 0 }}
                  whileHover={{ scale: 1, opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  View Work
                </motion.div>
              </div>
              
              {/* Content */}
              <div className="p-6">
                <motion.h3 
                  className="text-xl font-semibold mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text transition-all duration-300"
                  style={{ backgroundImage: `linear-gradient(to right, ${category.gradient.includes('pink') ? '#ec4899, #8b5cf6' : category.gradient.includes('blue') ? '#3b82f6, #06b6d4' : category.gradient.includes('rose') ? '#f43f5e, #ec4899' : category.gradient.includes('emerald') ? '#10b981, #14b8a6' : category.gradient.includes('orange') ? '#f97316, #ef4444' : category.gradient.includes('purple') ? '#a855f7, #6366f1' : '#f59e0b, #eab308'})` }}
                >
                  {category.name}
                </motion.h3>
                <p className={`${colors.text.muted} text-sm leading-relaxed group-hover:text-opacity-90 transition-all duration-300`}>
                  {category.description}
                </p>
                
                {/* Action Arrow */}
                <motion.div 
                  className="mt-4 flex items-center space-x-2 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  initial={{ x: -10 }}
                  whileHover={{ x: 0 }}
                >
                  <span className={`text-sm font-medium bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                    Explore Collection
                  </span>
                  <motion.svg 
                    className={`w-4 h-4 text-cyan-400`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    initial={{ x: 0 }}
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </motion.svg>
                </motion.div>
              </div>
              
              {/* Corner Decorations */}
              <div className="absolute top-2 left-2 w-3 h-3 border-l-2 border-t-2 border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-2 right-2 w-3 h-3 border-r-2 border-b-2 border-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </div>
  );
}