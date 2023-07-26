import Box from '@mui/material/Box';
import "./Header.css"

function Header({weatherData}) {

  return (
    <Box id = "header">
            {weatherData? <Box>
                            <img src = {weatherData.current.condition.icon}
                              style = {{height: "40px", width: "40px"}}
                              alt = "weather-logo"
                            />
                            <strong className = "mx-2 text-body text-decoration-none">{`${weatherData.location.name} |`}</strong>
                            <strong className = "text-body-secondary text-decoration-none">{weatherData.current["temp_c"]}°C</strong>
                          </Box>: ""
            }
            <i className="fa-solid fa-face-smile fa-shake fa-xl mx-2" style={{color: "#4348e2"}}></i>
    </Box>
  );
}
export default Header;
