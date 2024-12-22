import React, { use, useEffect } from "react"

import { useSelector, useDispatch } from "react-redux"
import { wHour, degreeHour } from "../css/style.css"

import Cloudy from "../public/Cloudy.svg"
import MostlyCloudyNight from "../public/MostlyCloudy-night.svg"
import MostlyCloudy from "../public/MostlyCloudy.svg"

function getHours(hour, hours, active) {
    console.log(active)
    
    if (active) {
        let slice1 = hours.slice(0, hour)
        
        return [...slice1]
    }

    if (!active) {
        let slice1 = hours.slice(hour, (hour + 8 % 24) - 1)
        
        return [...slice1]
    }

}

function check(title, time) {
    if ((title == "Patchy rain nearby" || title == "Sunny" || title == "Clear ") && time >= 6 && time < 23) {
        return [MostlyCloudy, "Mostly Cloudy"]
    } else if ((title == "Patchy rain nearby" || title == "Sunny" || title == "Clear ") && time <= 6 && time >= 23) {
        return [MostlyCloudyNight, "Mostly Cloudy"]
    } else if ((title == "Mist" || title == "Partly Cloudy " || title == "Light drizzle" || title == "Fog" || title == "Overcast " || title == "Cloudy ")) {
        return [Cloudy, "Cloudy"]
    }
}

function Hour({ id, item }) {
    const weather = useSelector(state => state.weather)
    const celsius = useSelector(state => state.celsius)
    const active = useSelector(state => state.active)
    const dispatch = useDispatch()
    
    let hours = ["1 AM", "2 AM", "3 AM", "4 AM", "5 AM", "7 AM", "8 AM", "9 AM", "10 AM", "11 AM", "12 AM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "7 PM", "8 PM", "9 PM", "10 PM", "11 PM", "12 PM"]
    let date = new Date()

    let hour = date.getHours();
    let newHours = getHours(hour, hours, active)

    let component = check(item.condition.text, hour)

    return (
        <div className={wHour}>
            {newHours[id]}
            <div>
                {component != undefined ? <img src={component[0]}/> : null}
            </div>
            <div className={degreeHour}>
                {Math.floor(celsius == 1 ? item.dewpoint_c : item.dewpoint_f)}°
            </div>
        </div>
    )
}

export default Hour