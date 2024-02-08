import { useState, useEffect } from "react";
import logo from "./logo.svg";
import "./App.css";

// Import our components
import WeatherDisplay from "./components/WeatherDisplay";
import Form from "./components/Form";


function App() {
  const [weather, setWeather] = useState(null);

  //constant with API key
  const getWeather = async(searchTerm) => {
  const url = 'https://api.tomorrow.io/v4/timelines?location={searchTerm}&fields=temperature&timesteps=1h&units=metric&apikey=GVGfxa8EDkYkWNMJNdQmWCjrO0f8Q5jJ';
  
  try {
    const response = await fetch(url);
    const result = await response.text();
    console.log(result)
  } catch (error) {
    console.error(error);
  }
}
    
  //This will run on the first render but not on subsquent renders
  useEffect(() => {
    getWeather("new york");
  }, []);

  //We pass the getWeather function as a prop called weathersearch
  //We pass town as props to  display weather 
  return (
    <div className="App">
      <Form weathersearch={getWeather}/>
      <WeatherDisplay  weather={weather}/>
    </div>
  );
}

export default App;