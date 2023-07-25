import React, {useState, useEffect} from "react"
import axios from "axios"
import { CircularProgress, Box } from "@mui/material"
import Snackbar from '@mui/material/Snackbar';
import MuiAlert from '@mui/material/Alert';
import "./App.css"

import AppBar from "./Components/AppBar"
import DisplayBox from "./Components/DisplayBox"
import DisplayText from "./Components/DisplayText"
import WeatherCard from "./Components/WeatherCard"
import BodyStyles from "./Components/BodyStyles"
import Header from "./Components/Header"

function App() {
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const [inputValue, setInputValue] = useState("")
  const [weatherData, setWeatherData] = useState("")
  const [displayContentWhileSearch, setDisplayContentWhileSearch] = useState("")

  const screenWidth = window.innerWidth;

  useEffect(()=>{
    const timerId = setTimeout(async ()=>{
      try{
        if(inputValue !== ""){
          setDisplayContentWhileSearch(
          <Box className = "display-content-while-search">
          <CircularProgress color = "success" />
          <strong className = "text-black" style = {{marginTop: "1rem"}}>Loading...</strong>
          </Box>)
          
          const responseData = await axios.get(`http://api.weatherapi.com/v1/current.json?key=77c435ebd76949e38e4155526232307&q=${inputValue}`)
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
                                        <Snackbar open={true}>
                                          <Alert id = "alert" severity="error" sx={{ width: '35vw' }}>
                                              {screenWidth > 300? "There is an error loading the data. Please check the console tab for more details." : "There is an error loading the data."}
                                          </Alert>
                                        </Snackbar>
                                     </Box>
                                    )
        setWeatherData("")
      }
    }, 500)

    return () => {
      clearTimeout(timerId)
    }
  }, [inputValue, screenWidth])

  return (
    <>
    <Header />
    <AppBar />
    <DisplayBox inputValue = {inputValue} setInputValue = {setInputValue} weatherData = {weatherData}/>
    <DisplayText weatherData = {weatherData} />
    {weatherData?<WeatherCard weatherData = {weatherData}/> : displayContentWhileSearch}
    <BodyStyles weatherData={weatherData} /> 
    </>
  )
}

export default App;
