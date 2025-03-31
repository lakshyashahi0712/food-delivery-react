const Shimmer = () => {
    return (
      <div className="shimmer-container grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 p-4">
        {Array(10).fill("").map((_, index) => (
          <div 
            key={index} 
            className="w-52 h-64 bg-gray-200 rounded-lg animate-pulse"
          />
        ))}
      </div>
    );
  };
  
  export default Shimmer;
  