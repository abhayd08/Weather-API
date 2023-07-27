import Box from '@mui/material/Box';
import "./Header.css"

function Header({weatherData}) {
  if(weatherData){
    document.getElementById("header").style.height = "auto"
  }
  else{
    if(document.getElementById("header")){
      document.getElementById("header").style.height = "3rem" 
    }
  }
  return (
    <Box id = "header">
            {weatherData? <Box className = "my-3">
                            <img src = {weatherData.current.condition.icon}
                              style = {{height: "40px", width: "40px"}}
                              alt = "weather-logo"
                            />
                            <strong className = "mx-1 text-body text-decoration-none">{`${weatherData.location.name} |`}</strong>
                            <strong className = "text-body-secondary text-decoration-none">{weatherData.current["temp_c"]}°C</strong>
                          </Box>: ""
            }
            <i className="fa-solid fa-face-smile fa-shake fa-xl mx-2" style={{color: "#4348e2"}}></i>
    </Box>
  );
}
export default Header;
