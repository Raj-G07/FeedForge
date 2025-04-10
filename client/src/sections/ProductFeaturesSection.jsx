const ProductFeaturesSection = () => {
    return (
      <fieldset className="space-y-4">
        <legend className="text-lg font-medium mb-2">Product Features</legend>
        <div>
          <label className="block mb-1">How would you rate our product features?</label>
          <div className="flex flex-wrap gap-6">
            {["Excellent", "Good", "Average", "Poor"].map((opt) => (
              <label key={opt} className="flex items-center space-x-2">
                <input type="radio" name="features" />
                <span>{opt}</span>
              </label>
            ))}
          </div>
        </div>
        <input type="text" placeholder="Your favorite feature" className="border px-4 py-2 rounded-md w-full" />
        <textarea placeholder="Please describe any features you'd like to see" className="border px-4 py-2 rounded-md w-full min-h-[100px]"></textarea>
      </fieldset>
    );
  };
  
  export default ProductFeaturesSection;
  