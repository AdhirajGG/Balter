'use client'

import { motion } from 'framer-motion';
import type { Variants, Transition } from 'framer-motion';
import { colors } from '@/lib/colors';
import Link from "next/link";

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
      staggerChildren: 0.2
    }
  }
};

const skillsData = [
  {
    category: "Editing & Motion Design",
    icon: "🎬",
    gradient: "from-pink-500 to-violet-500",
    skills: [
      { name: "DaVinci Resolve", level: 95, color: "pink" },
      { name: "Adobe Premiere Pro", level: 90, color: "violet" },
      { name: "Adobe After Effects", level: 88, color: "purple" }
    ]
  },
  {
    category: "Design & Visual Art",
    icon: "🎨",
    gradient: "from-blue-500 to-cyan-500",
    skills: [
      { name: "Adobe Illustrator", level: 92, color: "blue" },
      { name: "Adobe Photoshop", level: 90, color: "cyan" }
    ]
  }
];

const achievements = [
  { number: "500+", label: "Projects Completed", icon: "🎯" },
  { number: "1+", label: "Years Experience", icon: "⏰" },
  { number: "10+", label: "Happy Clients", icon: "😊" },
  { number: "100%", label: "Passion Driven", icon: "❤️" }
];

export default function AboutPage() {
  return (
    <div className={`min-h-screen relative overflow-hidden bg-gradient-to-br ${colors.bg.primary} ${colors.text.primary}`}>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        
        {/* Floating Stars */}
        {[
          { size: 'w-2 h-2', color: 'bg-white', top: '8%', left: '10%', delay: 0 },
          { size: 'w-1.5 h-1.5', color: 'bg-yellow-300', top: '20%', right: '15%', delay: 1 },
          { size: 'w-3 h-3', color: 'bg-pink-300', bottom: '25%', left: '8%', delay: 0.5 },
          { size: 'w-2 h-2', color: 'bg-cyan-300', top: '50%', right: '12%', delay: 0.7 },
          { size: 'w-1 h-1', color: 'bg-white', bottom: '15%', right: '25%', delay: 0.3 },
          { size: 'w-2.5 h-2.5', color: 'bg-violet-300', top: '70%', left: '15%', delay: 1.2 },
          { size: 'w-1.5 h-1.5', color: 'bg-emerald-300', bottom: '35%', right: '8%', delay: 0.9 }
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
          { top: '12%', right: '28%', color: 'text-pink-400', size: 'text-2xl', delay: 0 },
          { bottom: '20%', left: '20%', color: 'text-cyan-300', size: 'text-xl', delay: 1 },
          { top: '60%', left: '5%', color: 'text-yellow-300', size: 'text-lg', delay: 2 },
          { bottom: '50%', right: '18%', color: 'text-violet-400', size: 'text-xl', delay: 1.5 }
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
          { top: '75%', right: '8%', color: 'text-yellow-300', rotation: 45, delay: 1.5 }
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
        
      </div>

      {/* Main Content */}
      <div className="px-6 py-10 max-w-5xl mx-auto space-y-12 relative z-10">
        
        {/* Header Section */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-4 flex items-center justify-center gap-3"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <span className="text-4xl">🖋</span>
            <span className={`bg-gradient-to-r ${colors.text.gradient.videoEditor} bg-clip-text text-transparent`}>
              About Me
            </span>
          </motion.h1>
          
          <motion.p 
            className={`${colors.text.secondary} text-xl max-w-2xl mx-auto leading-relaxed`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            I don't just edit—I translate emotions into motion.
          </motion.p>
          
          {/* Decorative Line */}
          <motion.div 
            className={`w-24 h-1 bg-gradient-to-r ${colors.text.gradient.videoEditor} mx-auto mt-6 rounded-full`}
            initial={{ width: 0 }}
            animate={{ width: 96 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          />
        </motion.div>

        {/* Story Section */}
        <motion.div
          className={`${colors.bg.card.main} backdrop-blur-sm p-8 md:p-12 rounded-3xl border ${colors.border.primary} relative group`}
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          whileHover={{ y: -5, scale: 1.02 }}
        >
          {/* Card Glow */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
          />
          
          <div className="relative z-10 space-y-6">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <p className="text-lg leading-relaxed">
                Hi, I'm <span className={`font-bold text-2xl bg-gradient-to-r ${colors.text.gradient.storyteller} bg-clip-text text-transparent`}>
                  Naqiya Khandwala
                </span>. A self-shot storyteller, editor, and creative mind who believes that even chaos has rhythm—and that every frame can carry a soul.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.6 }}
            >
              <p className="text-base leading-relaxed">
                With over <span className={`font-bold px-2 py-1 bg-gradient-to-r ${colors.text.gradient.videoEditor} bg-clip-text text-transparent`}>
                  500+ projects
                </span> and clients like <span className="font-semibold text-pink-400">Reels & Tales</span>, <span className="font-semibold text-blue-400">Better Insights</span>, and <span className="font-semibold text-cyan-400">Aapki Return</span>, my process is part instinct, part obsession. I work solo—filming, directing, editing—all from a single room, and yet, nothing I make feels small.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 1.4, duration: 0.6 }}
            >
              <p className="text-base leading-relaxed">
                My work ranges from snappy, scroll-stopping reels to soul-touching narratives with a hint of history and metaphor. Whether I'm crafting emotional edits or drawing from old idioms to tell modern stories, everything I create is deeply intentional, precise, and boldly original.
              </p>
            </motion.div>
          </div>
          
          {/* Floating Quote Marks */}
          <div className="absolute top-6 left-6 text-6xl text-pink-400/20 font-serif">"</div>
          <div className="absolute bottom-6 right-6 text-6xl text-violet-400/20 font-serif rotate-180">"</div>
        </motion.div>

        {/* Skills Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.6, duration: 0.8 }}
        >
          <div className="text-center mb-12">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-4 flex items-center justify-center gap-3"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 1.8, duration: 0.6 }}
            >
              <span className="text-3xl">🎨</span>
              <span className={`bg-gradient-to-r ${colors.text.gradient.graphicDesigner} bg-clip-text text-transparent`}>
                What I'm Great At
              </span>
            </motion.h2>
            
            <motion.p 
              className={`${colors.text.secondary} text-lg`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 2, duration: 0.6 }}
            >
              I don't just use tools—I bring them to life.
            </motion.p>
          </div>
          
          <motion.div 
            className="grid grid-cols-1 lg:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {skillsData.map((skillGroup, index) => (
              <motion.div
                key={index}
                variants={cardVariants}
                className={`group ${colors.bg.card.main} backdrop-blur-sm p-8 rounded-2xl border ${colors.border.primary} transition-all duration-500 ${colors.hover.card.translate} hover:scale-105 ${colors.hover.card.border} hover:drop-shadow-[0_20px_40px_rgba(45,212,191,0.25)] relative overflow-hidden`}
                whileHover={{ y: -8 }}
              >
                {/* Card Glow Effect */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-r ${skillGroup.gradient} opacity-0 group-hover:opacity-8 transition-opacity duration-500 rounded-2xl`}
                />
                
                <div className="relative z-10">
                  {/* Header */}
                  <div className="flex items-center space-x-3 mb-6">
                    <div className="text-3xl">{skillGroup.icon}</div>
                    <h3 className={`text-xl font-bold bg-gradient-to-r ${skillGroup.gradient} bg-clip-text text-transparent`}>
                      {skillGroup.category}
                    </h3>
                  </div>
                  
                  {/* Skills List */}
                  <div className="space-y-4">
                    {skillGroup.skills.map((skill, skillIndex) => (
                      <motion.div
                        key={skillIndex}
                        className="space-y-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 2.2 + skillIndex * 0.1, duration: 0.5 }}
                      >
                        <div className="flex justify-between items-center">
                          <span className="font-medium">{skill.name}</span>
                          <span className={`text-sm bg-gradient-to-r ${skillGroup.gradient} bg-clip-text text-transparent font-bold`}>
                            {skill.level}%
                          </span>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className="w-full bg-gray-700/30 rounded-full h-2 overflow-hidden">
                          <motion.div
                            className={`h-2 bg-gradient-to-r ${skillGroup.gradient} rounded-full`}
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ delay: 2.4 + skillIndex * 0.1, duration: 1, ease: "easeOut" }}
                          />
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                
                {/* Corner Decorations */}
                <div className="absolute top-3 left-3 w-4 h-4 border-l-2 border-t-2 border-pink-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-3 right-3 w-4 h-4 border-r-2 border-b-2 border-violet-400/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Achievements Section */}
        <motion.div 
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2.6, duration: 0.8 }}
        >
          {achievements.map((achievement, index) => (
            <motion.div 
              key={index}
              className={`${colors.bg.card.main} backdrop-blur-sm p-6 rounded-xl border ${colors.border.primary} transition-all duration-300 ${colors.hover.card.translate} ${colors.hover.card.border} hover:drop-shadow-[0_10px_20px_rgba(45,212,191,0.3)] relative text-center group`}
              initial={{ y: 20, opacity: 0, scale: 0.9 }}
              animate={{ y: 0, opacity: 1, scale: 1 }}
              transition={{ delay: 2.8 + index * 0.1, duration: 0.6 }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-pink-500/5 to-cyan-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
              />
              <div className="relative z-10">
                <div className="text-3xl mb-2">{achievement.icon}</div>
                <p className={`text-2xl md:text-3xl font-bold mb-2 bg-gradient-to-r ${colors.text.gradient.videoEditor} bg-clip-text text-transparent`}>
                  {achievement.number}
                </p>
                <p className={`${colors.text.muted} text-sm`}>{achievement.label}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 3.2, duration: 0.8 }}
        >
          <motion.div
            className={`inline-block ${colors.bg.card.main} backdrop-blur-sm p-8 rounded-2xl border ${colors.border.primary} relative group`}
            whileHover={{ scale: 1.02, y: -5 }}
            transition={{ duration: 0.3 }}
          >
            {/* Card Glow */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-r from-pink-500/8 to-violet-500/8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
            />
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4">
                <span className={`bg-gradient-to-r ${colors.text.gradient.storyteller} bg-clip-text text-transparent`}>
                  Ready to bring your vision to life?
                </span>
              </h3>
              <p className={`${colors.text.muted} mb-6 max-w-md mx-auto`}>
                Let's create something extraordinary together. Every project is a new story waiting to be told.
              </p>
              
              <Link href="/contact">
              <motion.button
                className={`px-8 py-4 bg-gradient-to-r ${colors.text.gradient.videoEditor} text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-2xl`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                
              >
                Let's Collaborate ✨
              </motion.button>
              </Link>
            </div>
            
            {/* Floating Elements around CTA */}
            <motion.div
              className="absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full opacity-60"
              animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              className="absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full opacity-40"
              animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
              transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
            />
          </motion.div>
        </motion.div>
        
      </div>
    </div>
  );
}