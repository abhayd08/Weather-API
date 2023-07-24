import TextField from "@mui/material/TextField"
import Box from "@mui/material/Box"
import Stack from "@mui/material/Stack"
import Typography from "@mui/material/Typography"

import "./DisplayBox.css"

function SearchBox ({inputValue, setInputValue, weatherData}) {

    return (
        <Box id = "display-field">
            <Box id ="search-field">
                <Stack spacing = {1}>
                    <label id = "label" htmlFor = "input-box">{inputValue === ""? "Type in, the location." : "You can type in, another location."}</label>
                    <TextField id = "input-box"
                    name = "search"
                    placeholder = "Enter the City"
                    value = {inputValue}
                    onChange = {(event)=>{
                    setInputValue(event.target.value)
                    }}
                    onFocus = {()=>{
                        document.getElementById("label").style.display = "none";
                    }}
                    onBlur = {()=>{
                        document.getElementById("label").style.display = "block"
                    }}
                    />
                </Stack>
            </Box>
            <Box id = "temp-content">
            {weatherData?             
            <Box className = "temp-box my-2">
                <Typography component = "h1" variant = "title">{weatherData.current["temp_c"]}°C</Typography>
            </Box> : ""}

            {weatherData?             
            <Box className = "temp-box my-2">
                <Typography component = "h1" variant = "title">{weatherData.current["temp_f"]}°F</Typography>
            </Box> : ""}
            </Box>
        </Box>

        
    )

}

export default SearchBox