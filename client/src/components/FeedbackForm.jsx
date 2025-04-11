import { useState } from "react";
import { useNavigate } from "react-router-dom";

const FeedbackForm = () => {
  const navigate =useNavigate();
  const [data,setData] = useState({
    email: "",
    product: "",
    duration:"",
    featureRating:"",
    favoriteFeature:"",
    featureSuggestion:"",
    pricingRating:"",
    pricingComment: "",
    usabilityRating:"",
    usabilityComment: "",
    additionalComment: "",
  })

  const handleOnchange= (e)=>{
    const {name,value} = e.target
    setData((pre)=>{
      return{ ...pre,
      [name] : value}
    })
  }
  const handleOnSubmit=async(e)=>{
    e.preventDefault()
    navigate('/thankyou')
    try{
      const dataResponse = await fetch(`http://localhost:8000/api/v1/auth/product`,{
        method:'POST',
        credentials:'include',
        headers: {
          "Content-Type" : "application/json"
        },
        body : JSON.stringify(data)
      })
       console.log(data);
       const dataApi = await dataResponse.json()
      if (dataApi.error) {
        console.log("invalid details");
    } 
    if(dataApi.success) {
        setData({ ...data, 
          email: "",
          product: "",
          duration:"",
          featureRating:"",
          favoriteFeature:"",
          featureSuggestion:"",
          pricingRating:"",
          pricingComment: "",
          usabilityRating:"",
          usabilityComment: "",
          additionalComment: "", })

        navigate('/thankyou')
    }
    }catch(error){
      console.log("login page ka error" + error.message);
    }
  }
  return (
    <section className="max-w-4xl mx-auto px-6 py-8">
      <form className="space-y-10" onSubmit={handleOnSubmit}>
        <div>
          <h2 className="text-2xl font-semibold mb-1">Product Feedback Form</h2>
          <p className="text-gray-600 text-sm">We value your opinion! Please share your thoughts about our product to help us improve.</p>
        </div>

      <fieldset class="space-y-4">
        <legend class="text-lg font-medium mb-2">Information</legend>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input type="email" placeholder="Your email" name="email" class="border px-4 py-2 rounded-md w-full" onChange={handleOnchange}/>
        <input type="text" placeholder="Product name..." name="product" class="border px-4 py-2 rounded-md w-full" onChange={handleOnchange}/>
        <input type="text" placeholder="Enter duration..." name="duration" class="border px-4 py-2 rounded-md w-full" onChange={handleOnchange}/>
        </div>
      </fieldset>

        <fieldset class="space-y-4">
        <legend class="text-lg font-medium mb-2">Product Features</legend>
        <div>
          <label class="block mb-1">How would you rate our product features?</label>
          <div class="flex flex-wrap gap-6" >
            <label class="flex items-center space-x-2"><input type="radio" name="featureRating" onChange={handleOnchange} value="Excellent" checked={data.featureRating === "Excellent"}/> <span>Excellent</span></label>
            <label class="flex items-center space-x-2"><input type="radio" name="featureRating" onChange={handleOnchange} value="Good" checked={data.featureRating === "Good"}/> <span>Good</span></label>
            <label class="flex items-center space-x-2"><input type="radio" name="featureRating" onChange={handleOnchange} value="Average" checked={data.featureRating === "Average"}/> <span>Average</span></label>
            <label class="flex items-center space-x-2"><input type="radio" name="featureRating" onChange={handleOnchange} value="Poor" checked={data.featureRating === "Poor"}/> <span>Poor</span></label>
          </div>
        </div>
        <input type="text" placeholder="Your favorite feature" name="favoriteFeature" class="border px-4 py-2 rounded-md w-full"  onChange={handleOnchange}/>
        <textarea placeholder="Please describe any features you'd like to see" class="border px-4 py-2 rounded-md w-full min-h-[100px]" name="featureSuggestion"  onChange={handleOnchange}></textarea>
      </fieldset>

      <fieldset class="space-y-4">
        <legend class="text-lg font-medium mb-2">Product Pricing</legend>
        <div>
          <label class="block mb-1">How would you rate the value for money of our product?</label>
          <div class="flex flex-wrap gap-6">
            <label class="flex items-center space-x-2"><input type="radio" name="pricingRating" onChange={handleOnchange} value="Excellent value" checked={data.pricingRating === "Excellent value"}/> <span>Excellent value</span></label>
            <label class="flex items-center space-x-2"><input type="radio" name="pricingRating" onChange={handleOnchange} value="Good value"  checked={data.pricingRating === "Good value"}/> <span>Good value</span></label>
            <label class="flex items-center space-x-2"><input type="radio" name="pricingRating" onChange={handleOnchange} checked={data.pricingRating === "Fair value"} value="Fair value" /> <span>Fair value</span></label>
            <label class="flex items-center space-x-2"><input type="radio" name="pricingRating" onChange={handleOnchange} value="Overpriced"  checked={data.pricingRating === "Overpriced "}/> <span>Overpriced</span></label>
          </div>
        </div>
        <textarea placeholder="Your thoughts on our pricing" class="border px-4 py-2 rounded-md w-full min-h-[100px]" name="pricingComment"  onChange={handleOnchange}></textarea>
      </fieldset>

      <fieldset class="space-y-4">
        <legend class="text-lg font-medium mb-2">Product Usability</legend>
        <div>
          <label class="block mb-1">How easy is our product to use?</label>
          <div class="flex flex-wrap gap-6"  >
            <label class="flex items-center space-x-2"><input type="radio" name="usabilityRating"onChange={handleOnchange} value="Very easy" checked={data.usabilityRating === "Very easy"}/> <span>Very easy</span></label>
            <label class="flex items-center space-x-2"><input type="radio" name="usabilityRating" onChange={handleOnchange} value="Easy"  checked={data.usabilityRating=== "Easy"}/> <span>Easy</span></label>
            <label class="flex items-center space-x-2"><input type="radio" name="usabilityRating" onChange={handleOnchange} value="Moderate" checked={data.usabilityRating=== "Moderate"}/> <span>Moderate</span></label>
            <label class="flex items-center space-x-2"><input type="radio" name="usabilityRating" onChange={handleOnchange} value="Difficult" checked={data.usabilityRating === "Difficult"}/> <span>Difficult</span></label>
          </div>
        </div>
        <textarea placeholder="Your suggestions for improving usability" class="border px-4 py-2 rounded-md w-full min-h-[100px]" name="usabilityComment"  onChange={handleOnchange}></textarea>
      </fieldset>
      <fieldset class="space-y-4">
        <legend class="text-lg font-medium mb-2">Additional Comments</legend>
        <textarea placeholder="Any other feedback you'd like to share" class="border px-4 py-2 rounded-md w-full min-h-[100px]" name="additionalComment"  onChange={handleOnchange}></textarea>
        <p class="text-sm text-gray-600">Please share any other thoughts or suggestions you have about our product.</p>
      </fieldset>
        <button type="submit" className="bg-black text-white w-full py-3 rounded-md hover:bg-gray-900 text-lg">Submit Feedback</button>
      </form>
    </section>
  );
};

export default FeedbackForm;
