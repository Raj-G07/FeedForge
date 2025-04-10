const ProductPricingSection = () => {
    return (
      <fieldset className="space-y-4">
        <legend className="text-lg font-medium mb-2">Product Pricing</legend>
        <div>
          <label className="block mb-1">How would you rate the value for money of our product?</label>
          <div className="flex flex-wrap gap-6">
            {["Excellent value", "Good value", "Fair value", "Overpriced"].map((opt) => (
              <label key={opt} className="flex items-center space-x-2">
                <input type="radio" name="pricing" />
                <span>{opt}</span>
              </label>
            ))}
          </div>
        </div>
        <textarea placeholder="Your thoughts on our pricing" className="border px-4 py-2 rounded-md w-full min-h-[100px]"></textarea>
      </fieldset>
    );
  };
  
  export default ProductPricingSection;
  