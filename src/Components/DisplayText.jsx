import Box from "@mui/material/Box"
import {Alert} from "@mui/material"
import "./DisplayText.css"

export default function DisplayText ({weatherData}) {
    if(weatherData !== ""){
              return(
                <Box sx = {{display: "flex", justifyContent: "center", marginTop: "1.5rem"}}>
                  <Alert id = "location-text" severity="success" variant = "filled" sx = {{}}>
                    <strong style = {{textAlign: "center",fontSize: "1.5rem"}}>{ `${weatherData.location.name}, ${weatherData.location.country}` || ""}
                    </strong>
                  </Alert>
                </Box>
              )
    }

}