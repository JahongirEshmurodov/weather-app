import sunImg from "@i/sun.svg";
import cloudsImg from "@i/clouds.svg";
import rainImg from "@i/rain.svg";
import small_rainImg from "@i/small_rain.svg";
import snowImg from "@i/snow.png";
import notFoundImg from "@i/notFound.png";
export function getIcon(description){
    switch (description) {
        case 'Clear':
            return sunImg
        case 'Clouds':
            return cloudsImg
        case 'Snow': 
            return snowImg
        case 'Rain':
            return rainImg
        case 'Drizzle':
            return small_rainImg
        default:
           return notFoundImg
    }
}
export function getDay(dt = 1730962801, info){
    let milliseconds = dt * 1000
       return  new Date(milliseconds).toLocaleDateString("ru-RU",{
        [info]: info == 'day' ? 'numeric' : info == 'weekday' ? 'long' : 'short'
       })
}
export function getTime(timezone){
    return new Date().toLocaleString("ru-RU",{
        timeZone:timezone,
        timeStyle:'short'
    })
}