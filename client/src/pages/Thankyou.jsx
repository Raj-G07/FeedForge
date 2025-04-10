
const ThankYou = () => {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center text-center px-4">
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-md p-8 border border-gray-200">
        <div className="flex justify-center mb-6">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-14 w-14 text-pink-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.636l1.318-1.318a4.5 4.5 0 116.364 6.364L12 20.364l-7.682-7.682a4.5 4.5 0 010-6.364z"
            />
          </svg>
        </div>
        <h1 className="text-2xl font-bold mb-2">Thank You!</h1>
        <p className="text-gray-600">
          We're incredibly grateful for your support.
          <br />
          Your contribution makes all the difference.
        </p>
      </div>
    </div>
  );
};

export default ThankYou;
