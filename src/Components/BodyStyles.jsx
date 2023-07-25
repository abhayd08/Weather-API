
export default function BodyStyles({weatherData}) {
    const body = document.body
    body.style.backgroundRepeat="no-repeat"
    body.style.backgroundSize="cover"
    body.style.backgroundPosition="center"
    body.style.color = "white"

    if(weatherData){
        body.style.height = "100%"
        const weatherCondition = weatherData.current.condition.text
        if(weatherCondition === "Sunny"){ 
            body.style.backgroundImage="url('https://i.gifer.com/CZx.gif')"
            body.style.color = "black" 
        }
        else if(weatherCondition === "Clear"){
            body.style.backgroundImage = "url('https://i.gifer.com/origin/45/454ba38b4ce5b3fdc8796ed710769e69.gif')"
        }
        else if(weatherCondition === "Patchy rain possible" || weatherCondition === "Overcast" || weatherCondition.toLowerCase().split(" ").includes("cloudy") || weatherCondition.toLowerCase().split(" ").includes("cloud")){
            body.style.backgroundImage = "url('https://cdn.pixabay.com/animation/2022/11/23/14/29/14-29-43-264_512.gif')"
        }
        else if(weatherCondition === "Fog"){
            body.style.backgroundImage = "url('https://media.tenor.com/5ImWLS5QAJgAAAAC/foggy-fog.gif')"
        }
        else if(weatherCondition.toLowerCase().split(" ").includes("thunder")){
            body.style.backgroundImage = "url('https://media.tenor.com/o-hNb7sjQSwAAAAd/rain-lightning.gif')"
        }
        else if(weatherCondition.toLowerCase().split(" ").includes("mist")){
            body.style.backgroundImage = "url('https://cdnb.artstation.com/p/assets/images/images/036/014/633/original/viktor-moroz-demo-environment-5.gif?1616510564')"
            body.style.color = "black"
        }
        else if(weatherCondition.toLowerCase().split(" ").includes("rain")){
            body.style.backgroundImage = "url('https://external-preview.redd.it/qQjQCwBAMNS6CjC5E1CG7bQxTDYjnRrtNcljEKohHjM.gif?width=1200&height=628.272251309&s=94b76e506b8a43e501b2132834e6733c5769853e')"
            body.style.color = "white"
        }
        else if(weatherCondition.toLowerCase().split(" ").includes("drizzle")){
            body.style.backgroundImage = "url('https://media.tenor.com/aKTZMFuBbdEAAAAC/rain-window.gif')"
        }
    }
    else{
        body.style.backgroundColor = "rgba(13, 110, 253, 0.25)"
    }

}