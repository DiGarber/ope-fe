// Reusable component styles
export const buttonStyles = {
  primary:
    "bg-gradient-to-r from-accent-pink to-accent-purple hover:from-accent-purple hover:to-accent-pink text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-accent-pink focus:ring-opacity-50",
  secondary:
    "border border-gray-300 text-white hover:bg-gray-700 font-medium py-3 px-6 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50",
  ghost:
    "text-white hover:text-accent-pink font-medium py-2 px-4 rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent-pink focus:ring-opacity-50",
};

export const inputStyles = {
  base: "w-full bg-dark-200 border border-gray-600 text-white placeholder-gray-400 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-accent-pink focus:border-transparent transition-all duration-300",
  error:
    "w-full bg-dark-200 border border-red-500 text-white placeholder-gray-400 rounded-lg py-3 px-4 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all duration-300",
};

export const cardStyles = {
  base: "bg-dark-200 rounded-xl p-6 border border-gray-700 hover:border-accent-pink transition-all duration-300",
  gradient:
    "bg-gradient-to-br from-dark-200 to-dark-300 rounded-xl p-6 border border-gray-700 hover:border-accent-pink transition-all duration-300",
};

export const textStyles = {
  heading1: "text-4xl md:text-5xl lg:text-6xl font-bold",
  heading2: "text-3xl md:text-4xl lg:text-5xl font-bold",
  heading3: "text-2xl md:text-3xl font-bold",
  subtitle: "text-lg md:text-xl text-gray-300",
  body: "text-gray-300 leading-relaxed",
  accent:
    "bg-gradient-to-r from-accent-pink to-accent-purple bg-clip-text text-transparent font-bold",
};

export const containerStyles = {
  base: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
  section: "py-16 md:py-24",
};
