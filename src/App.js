import React, {useState, useEffect} from "react"
import axios from "axios"
import { CircularProgress, Box } from "@mui/material"
import MuiAlert from '@mui/material/Alert';
import "./App.css"

import Header from "./Components/Header"
import AppBar from "./Components/AppBar"
import DisplayBox from "./Components/DisplayBox"
import WeatherCard from "./Components/WeatherCard"
import DisplayWeatherCards from "./Components/DisplayWeatherCards";
import BodyStyles from "./Components/BodyStyles"
import Footer from "./Components/Footer"

function App() {
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const [inputValue, setInputValue] = useState("")
  const [weatherData, setWeatherData] = useState("")
  const [displayContentWhileSearch, setDisplayContentWhileSearch] = useState("")
  const [displayContentWhileSearch2, setDisplayContentWhileSearch2] = useState("")

  useEffect(()=>{
    setDisplayContentWhileSearch2(
        <Box className = "display-content-while-search">
            <CircularProgress color = "success" />
            <strong className = "text-black" style = {{marginTop: "1rem"}}>Loading...</strong>
        </Box>
    )
  }, [])


  useEffect(()=>{
    const timerId = setTimeout(async ()=>{
      try{
        if(inputValue !== ""){
          setDisplayContentWhileSearch(
          <Box className = "display-content-while-search">
          <CircularProgress color = "success" />
          <strong className = "text-black" style = {{marginTop: "1rem"}}>Loading...</strong>
          </Box>)
          
          const responseData = await axios.get(`https://api.weatherapi.com/v1/current.json?key=77c435ebd76949e38e4155526232307&q=${inputValue}`)
          setWeatherData(responseData.data)
          document.title = `Weather | ${responseData.data.location.name}`
        }
        else{
          setWeatherData("")
          setDisplayContentWhileSearch("")
          document.title = "Weather Forecast"
        }
      }
      catch(error){
        console.log(error)
        document.title = "Weather Forecast"
        
        setDisplayContentWhileSearch(<Box className = "display-content-while-search">
                                        
                                          <Alert id = "alert" severity="error" sx={{ width: '35vw' }}>
                                              There is an error loading the data. Please check the console tab for more details.
                                          </Alert>
                                        
                                     </Box>
                                    )
        setWeatherData("")
      }
    }, 500)

    return () => {
      clearTimeout(timerId)
    }
  }, [inputValue])

  return (
    <>
    <Header weatherData = {weatherData}/>
    <Box id = "container-for-image" sx = {{        
        background: "#80808021",
        backgroundImage: "",
        color: "black", 
        backgroundRepeat: "no-repeat", 
        backgroundSize: "100% calc(100%)"
        }}
    >
      <AppBar />
      <DisplayBox inputValue = {inputValue} setInputValue = {setInputValue} weatherData = {weatherData}/>
      <Box id = "blank-container"></Box>
    </Box>
    {weatherData?<WeatherCard weatherData = {weatherData}/> : displayContentWhileSearch}
    {displayContentWhileSearch2}
    <DisplayWeatherCards displayContentWhileSearch2 = {displayContentWhileSearch2} setDisplayContentWhileSearch2 = {setDisplayContentWhileSearch2}/>
    <BodyStyles weatherData={weatherData} /> 
    <Footer />
    </>
  )
}

export default App;
