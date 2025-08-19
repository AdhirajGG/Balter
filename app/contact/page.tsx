// \app\contact\page.tsx

'use client';

import { motion } from 'framer-motion';
import type { Variants, Transition } from 'framer-motion';
import { Linkedin, Instagram, Github, Phone, Youtube, MailIcon } from "lucide-react";
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

const ContactPage = () => {
  return (
    <div className={`min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden bg-gradient-to-br ${colors.bg.primary} ${colors.text.primary}`}>

      {/* Animated Background Elements - Fixed z-index and pointer events */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">

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
            className={`absolute ${star.size} ${star.color} rounded-full opacity-80 pointer-events-none`}
            style={{
              top: star.top,
              left: star.left,
              right: star.right,
              bottom: star.bottom,
              zIndex: -1
            }}
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
            className={`absolute ${plus.color} opacity-60 ${plus.size} font-light pointer-events-none`}
            style={{
              top: plus.top,
              left: plus.left,
              right: plus.right,
              bottom: plus.bottom,
              zIndex: -1
            }}
            animate={{ rotate: 360 }}
            transition={{ ...spinTransition, delay: plus.delay }}
          >
            +
          </motion.div>
        ))}

        {/* Geometric Shapes */}
        <motion.div
          className="absolute top-16 left-1/4 w-8 h-8 border-2 border-pink-400 opacity-30 rotate-45 pointer-events-none"
          style={{ zIndex: -1 }}
          variants={floatVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-20 right-1/4 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-25 rounded-full pointer-events-none"
          style={{ zIndex: -1 }}
          variants={floatVariants}
          animate="animate"
          transition={{ delay: 1 }}
        />
        <motion.div
          className="absolute top-1/3 right-16 w-10 h-10 border-2 border-yellow-300 opacity-20 pointer-events-none"
          style={{ zIndex: -1 }}
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
            className={`absolute ${star.color} opacity-50 text-3xl pointer-events-none`}
            style={{
              top: star.top,
              left: star.left,
              right: star.right,
              bottom: star.bottom,
              transform: `rotate(${star.rotation}deg)`,
              zIndex: -1
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
          className="absolute -top-20 -left-20 w-64 h-64 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full blur-3xl pointer-events-none"
          style={{ zIndex: -2 }}
          animate={{ opacity: [0.3, 0.7, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-20 -right-20 w-72 h-72 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl pointer-events-none"
          style={{ zIndex: -2 }}
          animate={{ opacity: [0.2, 0.6, 0.2] }}
          transition={{ duration: 5, repeat: Infinity, delay: 1 }}
        />

      </div>

      {/* Main Content - Explicit z-index to ensure it's above background */}
      <div className="max-w-4xl w-full text-center relative z-10">

        {/* Header Section */}
        <motion.div
          className="mb-16 relative z-20"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-5xl font-bold mb-6"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Get in Touch
          </motion.h1>
          <motion.p
            className={`${colors.text.secondary} text-xl max-w-2xl mx-auto`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Feel free to reach out via phone or connect with me on social platforms.
          </motion.p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto relative z-20">

          {/* Phone Card */}
          <motion.div
            className={`${colors.bg.card.main} backdrop-blur-sm p-8 rounded-2xl border ${colors.border.primary} transition-all duration-300 ${colors.hover.card.translate} ${colors.hover.card.border} hover:drop-shadow-[0_15px_35px_rgba(45,212,191,0.25)] relative group`}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
            style={{ zIndex: 30 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"
            />

            <motion.div
              className="flex items-center justify-center mb-6"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="p-4 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full">
                <Phone className="w-8 h-8 text-pink-400" />
              </div>
            </motion.div>

            <h3 className="text-2xl font-bold mb-4">Phone</h3>
            <a
              href="tel:+918527973777"
              className="text-3xl font-semibold tracking-wide bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent hover:from-pink-300 hover:to-purple-300 transition-all duration-300 relative z-40"
            >
              +91 8767216178
            </a>
          </motion.div>

          {/* Social Links Card */}
          <motion.div
            className={`${colors.bg.card.main} backdrop-blur-sm p-8 rounded-2xl border ${colors.border.primary} transition-all duration-300 ${colors.hover.card.translate} ${colors.hover.card.border} hover:drop-shadow-[0_15px_35px_rgba(45,212,191,0.25)] relative group`}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            whileHover={{ scale: 1.02 }}
            style={{ zIndex: 30 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl pointer-events-none"
            />

            <motion.div
              className="flex items-center justify-center mb-6"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="p-4 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full">
                <span className="text-3xl">🌐</span>
              </div>
            </motion.div>

            <h3 className="text-2xl font-bold mb-6">Social Links</h3>
            <div className="flex gap-8 items-center justify-center">
              {[
                {
                  icon: Linkedin,
                  href: "https://www.linkedin.com/in/khandwalanaqiya019240?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
                  color: "text-blue-500 hover:text-blue-400",
                  hoverBg: "hover:bg-blue-500/20",
                  delay: 1.0,
                  label: "LinkedIn Profile"
                },
                {
                  icon: Instagram,
                  href: "https://www.instagram.com/naqiyaaa_?igsh=YzAyMmc1ODhqdTJ6",
                  color: "text-pink-500 hover:text-pink-400",
                  hoverBg: "hover:bg-pink-500/20",
                  delay: 1.1,
                  label: "Instagram Profile"
                },
                {
                  icon: Youtube,
                  href: "https://youtube.com/@thenaqiya?si=oSLgU74jHQ-fqnvn",
                  color: "text-red-800 hover:text-red-500",
                  hoverBg: "hover:bg-red-500/20",
                  delay: 1.2,
                  label: "GitHub Profile"
                },
                {
                  icon: MailIcon,
                  href: "https://mail.google.com/mail/?view=cm&fs=1&to=khandwalanaqiya@gmail.com",
                  color: "text-green-800 hover:text-green-500",
                  hoverBg: "hover:bg-green-500/20",
                  delay: 1.2,
                  label: "GitHub Profile"
                }
              ].map(({ icon: Icon, href, color, hoverBg, delay, label }, index) => (
                <motion.a
                  key={index}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-xl transition-all duration-300 ${color} ${hoverBg} transform hover:scale-110 hover:-translate-y-1 cursor-pointer block relative z-40`}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay, duration: 0.6 }}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                  aria-label={label}
                  title={label}
                  onClick={(e) => {
                    e.preventDefault();
                    window.open(href, '_blank', 'noopener,noreferrer');
                  }}
                >
                  <Icon className="w-8 h-8" />
                </motion.a>
              ))}
            </div>
          </motion.div>

        </div>

        {/* Additional Call-to-Action */}
        <motion.div
          className="mt-16 relative z-20"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
        >
          <motion.p
            className={`${colors.text.muted} text-lg`}
            whileHover={{ scale: 1.05 }}
          >
            Let's collaborate and create something amazing together! ✨
          </motion.p>
        </motion.div>

      </div>
    </div>
  );
};

export default ContactPage;