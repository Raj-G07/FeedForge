const UserInfoSection = () => {
    return (
      <fieldset className="space-y-4">
        <legend className="text-lg font-medium mb-2">Information</legend>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <select className="border px-4 py-2 rounded-md w-full">
            <option disabled selected>Select product</option>
            <option>Product A</option>
            <option>Product B</option>
          </select>
          <select className="border px-4 py-2 rounded-md w-full">
            <option disabled selected>Select duration</option>
            <option>Less than a month</option>
            <option>1-6 months</option>
            <option>More than 6 months</option>
          </select>
        </div>
      </fieldset>
    );
  };
  
  export default UserInfoSection;
  