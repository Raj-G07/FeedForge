const AdditionalCommentsSection = () => {
    return (
      <fieldset className="space-y-4">
        <legend className="text-lg font-medium mb-2">Additional Comments</legend>
        <textarea placeholder="Any other feedback you'd like to share" className="border px-4 py-2 rounded-md w-full min-h-[100px]"></textarea>
        <p className="text-sm text-gray-600">Please share any other thoughts or suggestions you have about our product.</p>
      </fieldset>
    );
  };
  
  export default AdditionalCommentsSection;
  