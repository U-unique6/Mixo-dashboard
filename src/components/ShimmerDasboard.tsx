const ShimmerDashboard = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="mb-6">
        <div className="h-6 w-48 bg-gray-200 rounded animate-pulse mb-2"></div>
        <div className="h-4 w-72 bg-gray-200 rounded animate-pulse"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
        {[1, 2, 3].map((i) => (
          <div
            key={i}
            className="bg-white p-4 rounded-xl shadow animate-pulse"
          >
            <div className="h-4 w-24 bg-gray-200 rounded mb-2"></div>
            <div className="h-6 w-32 bg-gray-200 rounded"></div>
          </div>
        ))}
      </div>

      <div className="flex flex-col sm:flex-row gap-4 mb-4">
        <div className="h-10 w-full sm:w-1/2 bg-gray-200 rounded animate-pulse"></div>
        <div className="h-10 w-full sm:w-40 bg-gray-200 rounded animate-pulse"></div>
      </div>
      <div className="bg-white rounded-xl shadow overflow-hidden">
        <div className="p-4 border-b">
          <div className="h-4 w-full bg-gray-200 rounded animate-pulse"></div>
        </div>

        {[1, 2, 3, 4, 5, 6 , 7].map((row) => (
          <div
            key={row}
            className="grid grid-cols-6 gap-4 p-4 border-b animate-pulse"
          >
            {[1, 2, 3, 4, 5, 6].map((cell) => (
              <div
                key={cell}
                className="h-4 bg-gray-200 rounded"
              ></div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ShimmerDashboard;
