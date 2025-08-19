// app/edits/[category]/page.tsx
"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from 'framer-motion';
import type { Variants, Transition } from 'framer-motion';
import { colors } from '@/lib/colors';
import { useState } from 'react';

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

const thumbnailVariants: Variants = {
  hidden: { y: 30, opacity: 0, scale: 0.9 },
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
      staggerChildren: 0.15
    }
  }
};

// Video data structure
interface VideoData {
  title: string;
  thumbnail: string;
  link: string;
  description?: string;
}

interface CategoryData {
  name: string;
  description: string;
  videos: VideoData[];
  externalLink: string;
  gradient: string;
  accentColor: string;
}

const categoryData: Record<string, CategoryData> = {
  "fun-vlog": {
    name: "Fun/Vlog",
    description: "Spontaneous moments and vibrant stories captured creatively.",
    videos: [
      {
        title: "Is this growth or just burn out?",
        thumbnail: "/1.png",
        link: "https://www.instagram.com/reel/DLy3oaTsgSM/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
      },
      {
        title: "Alan Turing",
        thumbnail: "/Alan Turing.png",
        link: "https://www.instagram.com/reel/DMFvJ8OxtlT/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
      },
      {
        title: "Virginia Woolf",
        thumbnail: "/Broken glass.png",
        link: "https://www.instagram.com/reel/DMfm6xCg_0K/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
      }
    ],
    externalLink: "https://www.instagram.com/naqiyaaa_?igsh=YzAyMmc1ODhqdTJ6",
    gradient: "from-pink-500 to-violet-500",
    accentColor: "pink"
  },
  "motivation-business": {
    name: "Motivation/Business",
    description: "Inspiring edits with a purpose-driven message.",
    videos: [
      {
        title: "Top Benefits of Business Digitalization | Dr. Ajay Shesh | Life Champions Ecosystem for SME Growth",
        thumbnail: "/ytTaklu.png",
        link: "https://www.youtube.com/watch?v=8_nLrahoR1Q&ab_channel=LifeChampionsEcosystem",
        description: "A video on business digitalization"
      },
      {
        title: "Motivation pushes you, but inspiration pulls you.",
        thumbnail: "/5.png",
        link: "https://youtube.com/shorts/0KY0FVsYBwI?si=P3FSWPXy5HkAQZ4e",
        description: "It's a short on how motivation and inspiration works"
      },
      {
        title: "Money Mastery for a Better Future | Gaurav Agarwal at Saksham Summit 2024",
        thumbnail: "/6.png",
        link: "https://youtu.be/HNSK0KMB938?si=HeFql6ghl6pFgVjz",
        description: "This was a series, filled with proper guidelines on how to improve in your wealth"
      }
    ],
    externalLink: "https://www.instagram.com/naqiyaaa_?igsh=YzAyMmc1ODhqdTJ6",
    gradient: "from-blue-500 to-cyan-500",
    accentColor: "blue"
  },
  "fashion": {
    name: "Fashion",
    description: "Bold visuals and stylish edits for modern fashion.",
    videos: [
      {
        title: "Pink dress",
        thumbnail: "/yt01.png",
        link: "https://www.instagram.com/reel/DFH-OSOS_xq/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
      },
      {
        title: "White dress",
        thumbnail: "/yt.png",
        link: "https://www.instagram.com/reel/DF5EZgcyXJm/"
      }
    ],
    externalLink: "https://www.instagram.com/naqiyaaa_?igsh=YzAyMmc1ODhqdTJ6",
    gradient: "from-rose-500 to-pink-500",
    accentColor: "rose"
  },
  "tutorial-products": {
    name: "Tutorial/Products",
    description: "Clear, engaging breakdowns of products and tutorials.",
    videos: [
      {
        title: "Knitting",
        thumbnail: "/11.png",
        link: "https://youtu.be/sx8TJEA7MZs?si=KC69tGlTPI35bSj2"
      },
      {
        title: "DIY Clutch",
        thumbnail: "/12.png",
        link: "https://youtu.be/rJMhKXCt4Sc?si=8VUANilkfMDjthEg"
      },
      {
        title: "Short about the tutorial",
        thumbnail: "/13.png",
        link: "https://youtube.com/shorts/x7DI-9brdRg?si=AqHWgyRAcHl3PjWz"
      },
      {
        title: "Company advertisement",
        thumbnail: "/14.png",
        link: "https://youtube.com/shorts/RihZtXARbrU?si=qym4-KYHA0Ddmgqb"
      },
      {
        title: "Stop motion product advertisement",
        thumbnail: "/15.png",
        link: "https://www.instagram.com/reel/DJ0_nloIVE2/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
      }
    ],
    externalLink: "https://www.instagram.com/naqiyaaa_?igsh=YzAyMmc1ODhqdTJ6",
    gradient: "from-emerald-500 to-teal-500",
    accentColor: "emerald"
  },
  "itr-advertise": {
    name: "ITR/Advertise",
    description: "Concise ads and informative reels for businesses and ITR.",
    videos: [
      {
        title: "March 31st Tax",
        thumbnail: "/tax.png",
        link: "https://www.instagram.com/reel/DHn0sLSpfl-/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
      },
      {
        title: "Celebrating women's day",
        thumbnail: "/yt2.png",
        link: "https://www.instagram.com/reel/DG7M635NpTP/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
      },
      {
        title: "Advertisement",
        thumbnail: "/ad.png",
        link: "https://drive.google.com/file/d/12Hc79XZ7VEzb_HDBF9waHm4Tj-VTV3jo/view?usp=drive_link"
      }
    ],
    externalLink: "https://www.instagram.com/naqiyaaa_?igsh=YzAyMmc1ODhqdTJ6",
    gradient: "from-orange-500 to-red-500",
    accentColor: "orange"
  },
  "stop-motion": {
    name: "Stop Motion Videos",
    description: "Creative stop-motion sequences that tell more with less.",
    videos: [
      {
        title: "Logo animation",
        thumbnail: "/drive.png",
        link: "https://drive.google.com/file/d/1ijoVZpe1V3eMUUkHNrFJiV2gmYkAIaqF/view?usp=drive_link"
      },
      {
        title: "Tatting Information",
        thumbnail: "/17.png",
        link: "https://www.instagram.com/reel/DH5zeVroatW/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA=="
      }
    ],
    externalLink: "https://www.instagram.com/naqiyaaa_?igsh=YzAyMmc1ODhqdTJ6",
    gradient: "from-purple-500 to-indigo-500",
    accentColor: "purple"
  },
  "bts": {
    name: "Behind the Scenes (BTS)",
    description: "Real work behind the lens—raw and unscripted moments.",
    videos: [
      {
        title: "Siddharth Nigam",
        thumbnail: "/18.jpg",
        link: "https://www.linkedin.com/posts/khandwalanaqiya019240_dop-onsetlife-lowbudgethighimpact-activity-7320692669272215552-ZAbj?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAD9xMocBIbd7etcL04BYnVrIPmOMvOTRpHk"
      }
    ],
    externalLink: "https://www.instagram.com/naqiyaaa_?igsh=YzAyMmc1ODhqdTJ6",
    gradient: "from-amber-500 to-yellow-500",
    accentColor: "amber"
  },
};

// Video Player Modal Component
const VideoPlayerModal = ({ video, category, isOpen, onClose }: {
  video: VideoData | null;
  category: CategoryData;
  isOpen: boolean;
  onClose: () => void;
}) => {
  if (!video || !isOpen) return null;

  const getEmbedUrl = (url: string) => {
    // YouTube handling
    if (url.includes('youtube.com/watch')) {
      const videoId = url.split('v=')[1]?.split('&')[0];
      return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    }
    if (url.includes('youtu.be/')) {
      const videoId = url.split('youtu.be/')[1]?.split('?')[0];
      return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    }
    if (url.includes('youtube.com/shorts/')) {
      const videoId = url.split('shorts/')[1]?.split('?')[0];
      return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    }

    return null; // Return null for non-embeddable content
  };

  const embedUrl = getEmbedUrl(video.link);
  const isEmbeddable = !!embedUrl;

  const handleExternalOpen = () => {
    window.open(video.link, '_blank', 'noopener,noreferrer');
    onClose(); // Close modal after opening external link
  };

return (
  <AnimatePresence>
    <motion.div
      className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-gray-600 hover:scrollbar-thumb-gray-500 scrollbar-thumb-rounded-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="bg-gray-900 rounded-2xl overflow-hidden max-w-5xl w-full max-h-[95vh] relative shadow-2xl my-8"
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 50 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`p-6 border-b border-gray-700 bg-gradient-to-r ${category.gradient} bg-opacity-20 sticky top-0 z-10`}>
          <div className="flex justify-between items-start">
            <div className="flex-1 pr-4">
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2 line-clamp-2">
                {video.title}
              </h3>
              {video.description && (
                <p className="text-gray-300 text-sm md:text-base">{video.description}</p>
              )}
            </div>
            <button
              onClick={onClose}
              className="text-white hover:text-gray-300 transition-colors p-2 hover:bg-white/10 rounded-lg flex-shrink-0"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>

        {/* Scrollable Content */}
        <div className="overflow-y-auto max-h-[calc(95vh-120px)] scrollbar-thin scrollbar-track-gray-800/30 scrollbar-thumb-gray-600 hover:scrollbar-thumb-gray-500 scrollbar-thumb-rounded-full scrollbar-track-rounded-full scroll-smooth relative">
          {/* Scroll fade indicators */}
          <div className="absolute top-0 left-0 right-0 h-6 bg-gradient-to-b from-gray-900 to-transparent pointer-events-none z-10 opacity-80"></div>
          <div className="absolute bottom-0 left-0 right-0 h-6 bg-gradient-to-t from-gray-900 to-transparent pointer-events-none z-10 opacity-80"></div>
          {/* Video Content */}
          <div className="p-6">
            {isEmbeddable ? (
              <div className="aspect-video rounded-xl overflow-hidden bg-black">
                <iframe
                  src={embedUrl}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  title={video.title}
                />
              </div>
            ) : (
              <div className="aspect-video rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 flex flex-col items-center justify-center text-center p-8">
                <div className="mb-6">
                  <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r ${category.gradient} flex items-center justify-center`}>
                    <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </div>
                  <h4 className="text-white text-lg font-semibold mb-2">External Content</h4>
                  <p className="text-gray-400">This video is hosted on an external platform</p>
                </div>
                <button
                  onClick={handleExternalOpen}
                  className={`px-8 py-4 bg-gradient-to-r ${category.gradient} text-white rounded-xl font-semibold hover:opacity-90 transition-opacity transform hover:scale-105 duration-200 shadow-lg`}
                >
                  Open Video
                </button>
              </div>
            )}

            {/* Action Buttons */}
            <div className="mt-6 flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={handleExternalOpen}
                className={`flex items-center justify-center space-x-2 px-6 py-3 bg-gradient-to-r ${category.gradient} text-white rounded-lg hover:opacity-90 transition-opacity font-medium`}
              >
                <span>View on Platform</span>
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </button>
              
              <button
                onClick={onClose}
                className="px-6 py-3 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition-colors font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </AnimatePresence>
);
};

export default function CategoryPage() {
  const params = useParams();
  const categoryId = params.category as keyof typeof categoryData;
  const [selectedVideo, setSelectedVideo] = useState<VideoData | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const category = categoryData[categoryId];

  if (!category) {
    return (
      <div className={`min-h-screen flex items-center justify-center bg-gradient-to-br ${colors.bg.primary} ${colors.text.primary}`}>
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Category not found</h1>
          <Link href="/edits" className={`inline-block px-6 py-3 bg-gradient-to-r ${colors.text.gradient.videoEditor} text-white rounded-lg hover:opacity-90 transition-opacity`}>
            Back to Categories
          </Link>
        </div>
      </div>
    );
  }

  const handleVideoClick = (video: VideoData) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedVideo(null), 300); // Delay clearing video to allow exit animation
  };

  return (
    <>
      <div className={`min-h-screen p-6 md:p-10 relative overflow-hidden bg-gradient-to-br ${colors.bg.primary} ${colors.text.primary}`}>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          
          {/* Floating Stars */}
          {[
            { size: 'w-2 h-2', color: 'bg-white', top: '8%', left: '12%', delay: 0 },
            { size: 'w-1.5 h-1.5', color: 'bg-yellow-300', top: '22%', right: '18%', delay: 1 },
            { size: 'w-3 h-3', color: 'bg-pink-300', bottom: '25%', left: '8%', delay: 0.5 },
            { size: 'w-2 h-2', color: 'bg-cyan-300', top: '50%', right: '10%', delay: 0.7 },
            { size: 'w-1 h-1', color: 'bg-white', bottom: '15%', right: '25%', delay: 0.3 },
            { size: 'w-2.5 h-2.5', color: 'bg-violet-300', top: '75%', left: '20%', delay: 1.2 }
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
            { bottom: '20%', left: '30%', color: 'text-cyan-300', size: 'text-xl', delay: 1 },
            { top: '65%', left: '5%', color: 'text-yellow-300', size: 'text-lg', delay: 2 },
            { bottom: '50%', right: '15%', color: 'text-violet-400', size: 'text-xl', delay: 1.5 }
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
            className="absolute bottom-28 right-1/4 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-400 opacity-25 rounded-full"
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
            { top: '30%', left: '15%', color: 'text-pink-300', rotation: 15, delay: 0 },
            { bottom: '35%', right: '20%', color: 'text-cyan-300', rotation: -20, delay: 0.5 },
            { top: '80%', right: '5%', color: 'text-yellow-300', rotation: 45, delay: 1.5 }
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
        <div className="max-w-6xl mx-auto relative z-10">
          
          {/* Back Navigation */}
          <motion.div
            className="mb-8"
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              href="/edits"
              className={`inline-flex items-center space-x-2 ${colors.text.secondary} hover:text-cyan-400 transition-all duration-300 group`}
            >
              <motion.svg 
                className="w-5 h-5"
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
                whileHover={{ x: -3 }}
                transition={{ duration: 0.2 }}
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </motion.svg>
              <span className="group-hover:underline">Back to Categories</span>
            </Link>
          </motion.div>

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
              <span className={`bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                {category.name}
              </span>
            </motion.h1>
            
            <motion.p 
              className={`${colors.text.secondary} text-lg max-w-2xl mx-auto`}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              {category.description}
            </motion.p>
            
            {/* Decorative Line */}
            <motion.div 
              className={`w-24 h-1 bg-gradient-to-r ${category.gradient} mx-auto mt-6 rounded-full`}
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            />
          </motion.div>

          {/* Videos Grid */}
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {category.videos.map((video, i) => (
              <motion.div
                key={i}
                variants={thumbnailVariants}
                className={`group relative aspect-video rounded-2xl overflow-hidden ${colors.bg.card.main} backdrop-blur-sm border ${colors.border.primary} transition-all duration-500 hover:scale-105 ${colors.hover.card.border} hover:drop-shadow-[0_20px_40px_rgba(45,212,191,0.25)] cursor-pointer`}
                whileHover={{ 
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" }
                }}
                onClick={() => handleVideoClick(video)}
              >
                {/* Card Glow Effect */}
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}
                  initial={false}
                />
                
                {/* Image Container */}
                <div className="relative w-full h-full overflow-hidden rounded-2xl">
                  <motion.div
                    className="w-full h-full relative"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                  >
                    <Image
                      src={video.thumbnail}
                      alt={video.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover transition-all duration-500 group-hover:brightness-110"
                    />
                    
                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Play Button Overlay */}
                    <motion.div 
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ scale: 0.8 }}
                      whileHover={{ scale: 1 }}
                    >
                      <div className={`w-16 h-16 bg-gradient-to-r ${category.gradient} rounded-full flex items-center justify-center shadow-2xl backdrop-blur-sm`}>
                        <svg className="w-6 h-6 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M8 5v14l11-7z"/>
                        </svg>
                      </div>
                    </motion.div>
                    
                    {/* Title Overlay */}
                    <motion.div 
                      className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={{ y: 20 }}
                      whileHover={{ y: 0 }}
                    >
                      <h3 className="text-white text-sm font-semibold line-clamp-2">
                        {video.title}
                      </h3>
                      {video.description && (
                        <p className="text-gray-300 text-xs mt-1 line-clamp-1">
                          {video.description}
                        </p>
                      )}
                    </motion.div>
                    
                    {/* Corner Number */}
                    <motion.div 
                      className={`absolute top-4 right-4 w-8 h-8 bg-gradient-to-r ${category.gradient} rounded-full flex items-center justify-center text-white text-sm font-bold opacity-0 group-hover:opacity-100`}
                      initial={{ scale: 0, rotate: -180 }}
                      whileHover={{ scale: 1, rotate: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                    >
                      {i + 1}
                    </motion.div>
                  </motion.div>
                </div>
                
                {/* Border Decorations */}
                <div className="absolute top-2 left-2 w-4 h-4 border-l-2 border-t-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-r-2 border-b-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced External Link Section */}
          <motion.div 
            className="text-center"
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <motion.div
              className={`inline-block ${colors.bg.card.main} backdrop-blur-sm p-8 rounded-2xl border ${colors.border.primary} relative group`}
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Card Glow */}
              <motion.div 
                className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl`}
              />
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-4">
                  <span className={`bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                    Want to see more?
                  </span>
                </h3>
                <p className={`${colors.text.muted} mb-6 max-w-md mx-auto`}>
                  Discover the complete collection of {category.name.toLowerCase()} videos and behind-the-scenes content
                </p>
                
                <motion.a
                  href={category.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r ${category.gradient} text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-2xl group/button`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span>View more on {getDomainName(category.externalLink)}</span>
                  <motion.svg 
                    className="w-5 h-5"
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                    initial={{ x: 0 }}
                    whileHover={{ x: 3 }}
                    transition={{ duration: 0.2 }}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </motion.svg>
                </motion.a>
              </div>
              
              {/* Floating Elements around CTA */}
              <motion.div
                className={`absolute -top-2 -right-2 w-4 h-4 bg-gradient-to-r ${category.gradient} rounded-full opacity-60`}
                animate={{ scale: [1, 1.5, 1], opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <motion.div
                className={`absolute -bottom-2 -left-2 w-3 h-3 bg-gradient-to-r ${category.gradient} rounded-full opacity-40`}
                animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
                transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
              />
            </motion.div>
          </motion.div>

          {/* Category Stats */}
          <motion.div 
            className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mt-16"
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            {[
              { value: category.videos.length.toString(), label: 'Featured Videos', icon: '🎬' },
              { value: '4K', label: 'Video Quality', icon: '✨' },
              { value: '100%', label: 'Creativity', icon: '🎨' },
            ].map((stat, index) => (
              <motion.div 
                key={index}
                className={`${colors.bg.card.main} backdrop-blur-sm p-6 rounded-xl border ${colors.border.primary} transition-all duration-300 ${colors.hover.card.translate} ${colors.hover.card.border} hover:drop-shadow-[0_10px_20px_rgba(45,212,191,0.3)] relative text-center group`}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.1 + index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div 
                  className={`absolute inset-0 bg-gradient-to-r ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl`}
                />
                <div className="relative z-10">
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <p className={`text-2xl font-bold mb-2 bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent`}>
                    {stat.value}
                  </p>
                  <p className={`${colors.text.muted} text-sm`}>{stat.label}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
          
        </div>
      </div>

      {/* Video Player Modal */}
      <VideoPlayerModal 
        video={selectedVideo}
        category={category}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
}

// Helper function to extract domain name
function getDomainName(url: string) {
  try {
    const domain = new URL(url).hostname.replace(/^www\./, '');
    return domain.split('.')[0];
  } catch {
    return "External Platform";
  }
}