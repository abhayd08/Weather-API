import Box from "@mui/material/Box"
import {Card, CardContent, CardMedia, Typography} from "@mui/material"
import "./WeatherCard.css"

const WeatherCard = ({weatherData}) => {
    const lastTimeUpdated = new Date(weatherData.current["last_updated"]).toLocaleString("en-US",  {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true}
    )
    
    const currentLocalTime = new Date(weatherData.location["localtime"]).toLocaleString("en-US",  {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: true}
    )

    return (
            <Card id = "card-container">
                <CardMedia component = "img"
                image = {weatherData.current.condition.icon}
                sx = {{height: "112px", width: "112px"}}
                />
                <CardContent>
                    <Box style = {{display: "flex", justifyContent: "center", alignItems: "center", flexWrap : "wrap"}}>
                        <ul className = "list-unstyled">
                            <li style = {{fontSize: "2rem"}} className = "mx-1 text-body-secondary text-decoration-none" variant = "title1"><strong>{`${weatherData.location.name}`}</strong></li>
                            <li className = "mx-1 text-body-secondary text-decoration-none" variant = "subtitle2" style = {{fontWeight: "lighter", fontSize: "1.2rem"}}><strong>{`${weatherData.location.country}`}</strong></li>
                        </ul>
                    </Box>
                    <Box className = "content-title mt-5">
                    <Typography component = "h6" variant = "subtitle">Condition</Typography>
                    <Typography variant = "subtitle1">{weatherData.current.condition.text}</Typography>
                    </Box>
                    <Box className = "content-title">
                    <Typography component = "h6" variant = "subtitle">Wind speed</Typography>
                    <Typography variant = "subtitle1">{`${weatherData.current["wind_kph"]} km/h`}</Typography>
                    </Box>
                    <Box className = "content-title">
                    <Typography component = "h6" variant = "subtitle">Humidity</Typography>
                    <Typography variant = "subtitle1">{`${weatherData.current.humidity} %`}</Typography>
                    </Box>
                    <Box className = "content-title">
                    <Typography component = "h6" variant = "subtitle">Cloud Coverage</Typography>
                    <Typography variant = "subtitle1">{`${weatherData.current.cloud} %`}</Typography>
                    </Box>
                    <Box className = "content-title">
                    <Typography component = "h6" variant = "subtitle">Wind Gust Speed</Typography>
                    <Typography variant = "subtitle1">{`${weatherData.current["gust_kph"]} km/h`}</Typography>
                    </Box>
                    <Box className = "content-title">
                    <Typography component = "h6" variant = "subtitle">Last Updated</Typography>
                    <Typography variant = "subtitle1">{lastTimeUpdated}</Typography>
                    </Box>
                    <Box id = "last-content" className = "content-title">
                    <Typography component = "h6" variant = "subtitle">Local Time</Typography>
                    <Typography variant = "subtitle1">{currentLocalTime.split("at").join(",")}</Typography>
                    </Box>
                </CardContent>
            </Card>
    )
}

export default WeatherCard