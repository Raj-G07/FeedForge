const ProductUsabilitySection = () => {
    return (
      <fieldset className="space-y-4">
        <legend className="text-lg font-medium mb-2">Product Usability</legend>
        <div>
          <label className="block mb-1">How easy is our product to use?</label>
          <div className="flex flex-wrap gap-6">
            {["Very easy", "Easy", "Moderate", "Difficult"].map((opt) => (
              <label key={opt} className="flex items-center space-x-2">
                <input type="radio" name="usability" />
                <span>{opt}</span>
              </label>
            ))}
          </div>
        </div>
        <textarea placeholder="Your suggestions for improving usability" className="border px-4 py-2 rounded-md w-full min-h-[100px]"></textarea>
      </fieldset>
    );
  };
  
  export default ProductUsabilitySection;
  