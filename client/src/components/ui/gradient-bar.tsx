const GradientBar = () => {
  return (
    <div className="relative w-full h-2 overflow-hidden">
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600"></div>
      <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-400 animate-pulse opacity-70"></div>
    </div>
  );
};

export default GradientBar;
