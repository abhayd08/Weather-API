import {useEffect} from "react"

export default function BodyStyles({weatherData}) {
    const containerForImage = document.getElementById("container-for-image")

    useEffect(()=>{

        if(weatherData){
            const weatherCondition = weatherData.current.condition.text
            if(weatherCondition === "Sunny"){ 
                containerForImage.style.backgroundImage="url('https://i.gifer.com/CZx.gif')"
            }
            else if(weatherCondition === "Clear"){
                containerForImage.style.backgroundImage = "url('https://i.gifer.com/origin/45/454ba38b4ce5b3fdc8796ed710769e69.gif')"
                containerForImage.style.color = "black"
            }
            else if(weatherCondition === "Patchy rain possible" || weatherCondition === "Overcast" || weatherCondition.toLowerCase().split(" ").includes("cloudy") || weatherCondition.toLowerCase().split(" ").includes("cloud")){
                containerForImage.style.backgroundImage = "url('https://cdn.pixabay.com/animation/2022/11/23/14/29/14-29-43-264_512.gif')"
                containerForImage.style.color = "white"
            }
            else if(weatherCondition === "Fog"){
                containerForImage.style.backgroundImage = "url('https://media.tenor.com/5ImWLS5QAJgAAAAC/foggy-fog.gif')"
            }
            else if(weatherCondition.toLowerCase().split(" ").includes("thunder") || weatherCondition.toLowerCase().split(" ").includes("thundery") ){
                containerForImage.style.backgroundImage = "url('https://media.tenor.com/o-hNb7sjQSwAAAAd/rain-lightning.gif')"
                containerForImage.style.color = "white"
            }
            else if(weatherCondition.toLowerCase().split(" ").includes("mist")){
                containerForImage.style.backgroundImage = "url('https://cdnb.artstation.com/p/assets/images/images/036/014/633/original/viktor-moroz-demo-environment-5.gif?1616510564')"
                containerForImage.style.color = "white"
            }
            else if(weatherCondition.toLowerCase().split(" ").includes("rain")){
                containerForImage.style.backgroundImage = "url('https://external-preview.redd.it/qQjQCwBAMNS6CjC5E1CG7bQxTDYjnRrtNcljEKohHjM.gif?width=1200&height=628.272251309&s=94b76e506b8a43e501b2132834e6733c5769853e')"
                containerForImage.style.color = "white"
            }
            else if(weatherCondition.toLowerCase().split(" ").includes("drizzle")){
                containerForImage.style.backgroundImage = "url('https://media.tenor.com/aKTZMFuBbdEAAAAC/rain-window.gif')"
            }
            else{
                containerForImage.style.backgroundImage = ""
                containerForImage.style.color = "black"
            }
        }

        return ()=>{
            if(containerForImage){
                containerForImage.style.backgroundImage = ""
                containerForImage.style.color = "black"
            }
        }
    })

}