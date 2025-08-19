// components/HeroSection.tsx
'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import type { Variants, Transition } from 'framer-motion';
import { colors } from '@/lib/colors';

// Animation variants with proper typing
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

export default function HeroSection() {
  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden bg-gradient-to-br ${colors.bg.primary} ${colors.text.primary}`}>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">

        {/* Floating Stars */}
        {[
          { size: 'w-2 h-2', color: 'bg-white', top: '20%', left: '10%', delay: 0 },
          { size: 'w-1.5 h-1.5', color: 'bg-yellow-300', top: '40%', right: '20%', delay: 1 },
          { size: 'w-3 h-3', color: 'bg-pink-300', bottom: '60%', left: '20%', delay: 0.5 },
          { size: 'w-2 h-2', color: 'bg-cyan-300', top: '32%', right: '40%', delay: 0.7 },
          { size: 'w-1 h-1', color: 'bg-white', bottom: '40%', right: '10%', delay: 0.3 }
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
          { top: '24%', right: '32%', color: 'text-pink-400', size: 'text-2xl', delay: 0 },
          { bottom: '32%', left: '32%', color: 'text-cyan-300', size: 'text-xl', delay: 1 },
          { top: '60%', left: '16%', color: 'text-yellow-300', size: 'text-lg', delay: 2 }
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
          className="absolute top-16 left-1/4 w-8 h-8 border-2 border-pink-400 opacity-30 rotate-45"
          variants={floatVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-20 right-1/4 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-25 rounded-full"
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
          { top: '44%', left: '24%', color: 'text-pink-300', rotation: 15, delay: 0 },
          { bottom: '56%', right: '24%', color: 'text-cyan-300', rotation: -20, delay: 0.5 },
          { top: '80%', right: '12%', color: 'text-yellow-300', rotation: 45, delay: 1.5 }
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
          className="absolute -top-20 -left-20 w-64 h-64 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full blur-3xl"
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-72 h-72 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl"
          animate={{ opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />

      </div>

      {/* Main Content */}
      <div className="max-w-2xl w-full text-center relative z-10">
        {/* Profile section */}
        <div className="flex flex-col items-center mb-10">
          <motion.div
            className="relative mb-6"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Image
              src="/profile.png"
              alt="Profile"
              width={260}
              height={0}
              className="rounded-full border-4 border-white/10 shadow-2xl relative z-10"
            />
            <div className={`absolute bottom-3 right-3 w-6 h-6 bg-gradient-to-r ${colors.bg.card.accent} rounded-full border-2 border-gray-900 z-20`}></div>
            {/* Glow effect around profile */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-500/20 to-cyan-500/20 rounded-full blur-xl"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            />
          </motion.div>

          <motion.h1
            className="text-4xl font-bold mb-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Hi, I'm Naqiya Khandwala
          </motion.h1>

          <motion.div
            className="text-xl max-w-xl mb-8"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <p className="mb-3">
              I'm a <span className={`font-semibold bg-gradient-to-r ${colors.text.gradient.videoEditor} bg-clip-text text-transparent`}>
                Video Editor
              </span>
            </p>
            <p className="mb-3">
              Passionate <span className={`font-semibold bg-gradient-to-r ${colors.text.gradient.storyteller} bg-clip-text text-transparent`}>
                Storyteller
              </span>
            </p>
            <p>
              Creative <span className={`font-semibold bg-gradient-to-r ${colors.text.gradient.graphicDesigner} bg-clip-text text-transparent`}>
                Graphic Designer
              </span>
            </p>
          </motion.div>

          <motion.p
            className={`${colors.text.secondary} max-w-lg`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Helping brands and creators craft compelling visual stories that
            captivate audiences and elevate their message.
          </motion.p>
        </div>

        {/* Stats section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto mt-16 relative z-10"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
        >
          {[
            { value: '100%', label: 'Dedication', color: 'from-blue-500 to-violet-500' },
            { value: '7', label: 'Categories', color: 'from-pink-500 to-violet-500' },
            { value: '500+', label: 'Videos Created', color: 'from-blue-500 to-cyan-500' },
            { value: '10+', label: 'Satisfied Clients', color: 'from-emerald-500 to-teal-500' },
            { value: '1+', label: 'Years Experience', color: 'from-orange-500 to-red-500' },

          ].map((stat, index) => (
            <motion.div
              key={index}
              className={`${colors.bg.card.main} backdrop-blur-sm p-6 rounded-xl border ${colors.border.primary} transition-all duration-300 ${colors.hover.card.translate} ${colors.hover.card.border} hover:drop-shadow-[0_10px_20px_rgba(45,212,191,0.3)] relative text-center group`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.3 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl`}
              />
              <p className={`text-3xl font-bold mb-2 bg-gradient-to-r ${stat.color} bg-clip-text text-transparent`}>
                {stat.value}
              </p>
              <p className={`${colors.text.muted} text-sm`}>{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  );
}