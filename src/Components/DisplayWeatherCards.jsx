import React from "react"
import {useState, useEffect} from "react"
import {Card, CardMedia, CardContent, Box, Grid, Typography} from "@mui/material"
import axios from "axios";
import MuiAlert from '@mui/material/Alert';
import "./DisplayWeatherCards.css"

export default function DisplayWeatherCards ({displayContentWhileSearch2, setDisplayContentWhileSearch2}) {
    const [weatherDataVaranasi, setWeatherDataVaranasi] = useState("")
    const [weatherDataNewDelhi, setWeatherDataNewDelhi] = useState("")
    const [weatherDataMumbai, setWeatherDataMumbai] = useState("")
    const [weatherDataLucknow, setWeatherDataLucknow] = useState("")
    const [weatherDataBangalore, setWeatherDataBangalore] = useState("")
    const [weatherDataIndore, setWeatherDataIndore] = useState("")
    const [weatherDataUnnao, setWeatherDataUnnao] = useState("")
    const [weatherDataAhmedabad, setWeatherDataAhmedabad] = useState("")

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
      });

    const weatherDataArray = [weatherDataVaranasi, weatherDataNewDelhi, weatherDataMumbai, weatherDataLucknow, weatherDataBangalore, weatherDataIndore, weatherDataUnnao, weatherDataAhmedabad]
    
    useEffect(()=>{
        (async ()=>{
            try{

                const responseVaranasi = await axios.get("https://api.weatherapi.com/v1/current.json?key=77c435ebd76949e38e4155526232307&q=Varanasi, India")
                setWeatherDataVaranasi(responseVaranasi.data)
                const responseNewDelhi = await axios.get("https://api.weatherapi.com/v1/current.json?key=77c435ebd76949e38e4155526232307&q=New Delhi, India")
                setWeatherDataNewDelhi(responseNewDelhi.data)
                const responseMumbai = await axios.get("https://api.weatherapi.com/v1/current.json?key=77c435ebd76949e38e4155526232307&q=Mumbai, india")
                setWeatherDataMumbai(responseMumbai.data)
                const responseLucknow = await axios.get("https://api.weatherapi.com/v1/current.json?key=77c435ebd76949e38e4155526232307&q=Lucknow, India")
                setWeatherDataLucknow(responseLucknow.data)
                const responseBangalore = await axios.get("https://api.weatherapi.com/v1/current.json?key=77c435ebd76949e38e4155526232307&q=Bangalore, India")
                setWeatherDataBangalore(responseBangalore.data)
                const responseIndore = await axios.get("https://api.weatherapi.com/v1/current.json?key=77c435ebd76949e38e4155526232307&q=Indore, India")
                setWeatherDataIndore(responseIndore.data)
                const responseUnnao = await axios.get("https://api.weatherapi.com/v1/current.json?key=77c435ebd76949e38e4155526232307&q=Unnao, India")
                setWeatherDataUnnao(responseUnnao.data)
                const responseAhmedabad = await axios.get("https://api.weatherapi.com/v1/current.json?key=77c435ebd76949e38e4155526232307&q=Ahmedabad, India")
                setWeatherDataAhmedabad(responseAhmedabad.data)

                setTimeout(()=>{
                    setDisplayContentWhileSearch2("")
                }, 700)

            }
            catch(error) {
                console.log(error)

                setDisplayContentWhileSearch2(<Box className = "display-content-while-search">                      
                                                <Alert id = "alert" severity="error" sx={{ width: '35vw' }}>
                                                    There is an error loading the data. Please check the console tab for more details.
                                                </Alert>
                                              </Box>
                )
            }
        }
        )()

    }, [setDisplayContentWhileSearch2])

    useEffect(()=>{
        const timerId = setInterval(async ()=>{
            try{
                const responseVaranasi = await axios.get("https://api.weatherapi.com/v1/current.json?key=77c435ebd76949e38e4155526232307&q=Varanasi, India")
                setWeatherDataVaranasi(responseVaranasi.data)
                const responseNewDelhi = await axios.get("https://api.weatherapi.com/v1/current.json?key=77c435ebd76949e38e4155526232307&q=New Delhi, India")
                setWeatherDataNewDelhi(responseNewDelhi.data)
                const responseMumbai = await axios.get("https://api.weatherapi.com/v1/current.json?key=77c435ebd76949e38e4155526232307&q=Mumbai, India")
                setWeatherDataMumbai(responseMumbai.data)
                const responseLucknow = await axios.get("https://api.weatherapi.com/v1/current.json?key=77c435ebd76949e38e4155526232307&q=Lucknow, India")
                setWeatherDataLucknow(responseLucknow.data)
                const responseIndore = await axios.get("https://api.weatherapi.com/v1/current.json?key=77c435ebd76949e38e4155526232307&q=Indore, India")
                setWeatherDataIndore(responseIndore.data)
                const responseBangalore = await axios.get("https://api.weatherapi.com/v1/current.json?key=77c435ebd76949e38e4155526232307&q=Bangalore, India")
                setWeatherDataBangalore(responseBangalore.data)
                const responseUnnao = await axios.get("https://api.weatherapi.com/v1/current.json?key=77c435ebd76949e38e4155526232307&q=Unnao, India")
                setWeatherDataUnnao(responseUnnao.data)
                const responseAhmedabad = await axios.get("https://api.weatherapi.com/v1/current.json?key=77c435ebd76949e38e4155526232307&q=Ahmedabad, India")
                setWeatherDataAhmedabad(responseAhmedabad.data)

            }
            catch(error) {
                console.log(error)

                setDisplayContentWhileSearch2(<Box className = "display-content-while-search">                      
                                                <Alert id = "alert" severity="error" sx={{ width: '35vw' }}>
                                                    There is an error loading the data. Please check the console tab for more details.
                                                </Alert>
                                             </Box>
                )
            }
        }, 480000)

        return ()=>{
            clearInterval(timerId)
        }     
    })

    if(weatherDataArray[0] !== "" && weatherDataArray[1] !== "" && weatherDataArray[3] !== "" && weatherDataArray[3] !== "" && weatherDataArray[4] !== "" && weatherDataArray[5] !== ""  && weatherDataArray[6] !== "" && weatherDataArray[7] !== "" ){
        return (
            <Box>
                <Grid container style = {{marginTop: "2.5rem", display: "flex", justifyContent: "space-around"}}>
                    {weatherDataArray.map((cityData)=>{
    
                        const lastTimeUpdated = new Date(cityData.current["last_updated"]).toLocaleString("en-US",  {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                            hour: 'numeric',
                            minute: 'numeric',
                            hour12: true}
                        )
    
                        return (
                            <Grid item key ={cityData.location.name} className = "my-3" xl = {1.8} lg = {2.75} md = {3.75} sm = {4.75} xs = {10.5}>
                                <Card style = {{backgroundColor: "rgb(134 254 144 / 28%)", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                                    <CardMedia component = "img"
                                    image = {cityData.current.condition.icon}
                                    alt = "Weather-icon"
                                    id = "img-container"
                                    />
                                    <CardContent id = "card-content">
                                        <Box style = {{display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap : "wrap"}}>
                                            <ul className = "list-unstyled">
                                                <li id = "city-name" className = "mx-1 text-body-secondary text-decoration-none" variant = "title1"><strong>{`${cityData.location.name}`},</strong></li>
                                                <li id = "country-name" className = "mx-1 text-body-secondary text-decoration-none" variant = "subtitle2" style = {{fontWeight: "lighter"}}><strong>{`${cityData.location.country}`}</strong></li>
                                            </ul>
                                        </Box>
                                        <Box style = {{display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap"}}>
                                            <strong id = "temp-c" className = "text-body-secondary text-decoration-none">{cityData.current["temp_c"]}°C</strong>
                                            <strong id = "temp-f" className = "text-body-secondary text-decoration-none">{cityData.current["temp_f"]}°F</strong>
                                        </Box>
                                        <Box className = "mt-5">
                                            <Typography variant = "subtitle2">{lastTimeUpdated}</Typography>
                                        </Box>
                                    </CardContent>
                                </Card>
                            </Grid>
                        )
                    })}
                </Grid>
            </Box>
        )
    }
}