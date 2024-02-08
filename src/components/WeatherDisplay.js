//destructure props directly from the parameter
export default function WeatherDisplay({weather}) {
    //Function to return loaded JSX
    const loaded = () => {
      return(
        <>
          <h1>{weather}</h1>
        </> 
    );
 };

 //function to return loading JSX
 const loading =() => {
    return <h1> No weather to Display for this town</h1>;
 };

 //Ternary operator will determine which functions Jsx we will return
 return weather ? loaded() : loading();
}