import {useState, useEffect} from "react";
export default function Form(props){
   //state to hold the data of our form
   const [formData, setFormData] = useState({
    searchterm: "",
   });

   //handleChange - updates formData when we type into form
   const handleChange = (event) => {
    //Use the event object to detect key, and value to update
    setFormData({...formData, [event.target.name]: event.target.value});
   };

   const handleSubmit = (event) => {
    //Prevent Page from refreshing on form submission
    event.preventDefault();
    //pass the search term to weathersearch prop, which is App's getWeather function
    props.weathersearch(formData.searchterm);
   };

    return (
      <div>
        <h1>Weather town search</h1>;
        <form onSubmit={handleSubmit}>
            <input
             type ="text" 
             name ="searchterm"
             onChange = {handleChange}
             value = {formData.searchterm}
            />
            <input type ="submit" value="submit"/>
        </form>
      </div>
    );
 
  }