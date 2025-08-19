// lib/colors.ts
export const colors = {
  bg: {
    primary: "from-gray-900 to-black",
    card: {
      main: "bg-gray-800/50",
      secondary: "from-gray-800/50 to-gray-900/50",
      accent: "from-blue-500 to-teal-500",
    },
  },
  text: {
    primary: "text-white",
    secondary: "text-gray-300",
    muted: "text-gray-400",
    gradient: {
      videoEditor: "from-blue-500 to-teal-500",
      storyteller: "from-purple-500 to-pink-500",
      graphicDesigner: "from-yellow-400 to-orange-500",
    },
  },
  border: {
    primary: "border-gray-700",
    accent: "border-teal-400",
  },
  shadow: {
    card: {
      main: "shadow-xl",
      hover: "shadow-2xl",
      accent: "shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)]",
    },
  },
  hover: {
    card: {
      translate: "hover:-translate-y-1",
      border: "hover:border-teal-400",
      // shadow: "hover:shadow-2xl-border-teal-400"
    },
    button: {
      primary: "hover:opacity-90",
      secondary: "hover:bg-white/20",
    },
  },
};