import {useEffect} from "react"

export default function BodyStyles({weatherData}) {
    const containerForImage = document.getElementById("container-for-image")

    useEffect(()=>{

        if(weatherData){
            const weatherCondition = weatherData.current.condition.text
            if(weatherCondition === "Sunny"){ 
                containerForImage.style.backgroundImage="url('https://github.com/abhayd08/Weather-Forecast/blob/main/public/assets/sunny.mp4')"
            }
            else if(weatherCondition === "Clear"){
                containerForImage.style.backgroundImage = "url('https://github.com/abhayd08/Weather-Forecast/blob/main/public/assets/clear.gif')"
                containerForImage.style.color = "black"
            }
            else if(weatherCondition === "Patchy rain possible" || weatherCondition === "Overcast" || weatherCondition.toLowerCase().split(" ").includes("cloudy") || weatherCondition.toLowerCase().split(" ").includes("cloud")){
                containerForImage.style.backgroundImage = "url('https://github.com/abhayd08/Weather-Forecast/blob/main/public/assets/cloudy.webp')"
                containerForImage.style.color = "white"
            }
            else if(weatherCondition.toLowerCase().split(" ").includes("fog") || weatherCondition === "Fog"){
                containerForImage.style.backgroundImage = "url('https://github.com/abhayd08/Weather-Forecast/blob/main/public/assets/fog.gif')"
            }
            else if(weatherCondition.toLowerCase().split(" ").includes("thunder") || weatherCondition.toLowerCase().split(" ").includes("thundery") ){
                containerForImage.style.backgroundImage = "url('https://github.com/abhayd08/Weather-Forecast/blob/main/public/assets/thunder.gif')"
                containerForImage.style.color = "white"
            }
            else if(weatherCondition.toLowerCase().split(" ").includes("mist")){
                containerForImage.style.backgroundImage = "url('https://github.com/abhayd08/Weather-Forecast/blob/main/public/assets/mist.gif')"
                containerForImage.style.color = "white"
            }
            else if(weatherCondition.toLowerCase().split(" ").includes("rain")){
                containerForImage.style.backgroundImage = "url('https://github.com/abhayd08/Weather-Forecast/blob/main/public/assets/rain.gif')"
                containerForImage.style.color = "white"
            }
            else if(weatherCondition.toLowerCase().split(" ").includes("drizzle")){
                containerForImage.style.backgroundImage = "url('https://github.com/abhayd08/Weather-Forecast/blob/main/public/assets/drizzle.gif')"
            }
            else{
                containerForImage.style.backgroundImage = `url("https://github.com/abhayd08/Weather-Forecast/blob/main/public/assets/hero.jpg")`
                containerForImage.style.color = "black"
            }
        }

        return ()=>{
            if(containerForImage){
                containerForImage.style.backgroundImage = `url("https://github.com/abhayd08/Weather-Forecast/blob/main/public/assets/hero.jpg")`
                containerForImage.style.color = "black"
            }
        }
    })

}