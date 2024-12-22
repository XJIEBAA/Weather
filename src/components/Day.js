import React, { use, useEffect } from "react"

import { useSelector, useDispatch } from "react-redux"
import object from "../../store/counterSlice.js"
import { wDay, degree } from "../css/style.css"

import Cloudy from "../public/Cloudy.svg"
import MostlyCloudyNight from "../public/MostlyCloudy-night.svg"
import MostlyCloudy from "../public/MostlyCloudy.svg"

function getDays(day, days) {
    let slice1 = days.slice(0, day)
    let slice2 = days.slice(day, days.length)

    return [...slice2, ...slice1]
}

function check(title, time) {
    if ((title == "Patchy rain nearby" || title == "Sunny") && time >= 6 && time < 23) {
        return [MostlyCloudy, "Mostly Cloudy"]
    } else if ((title == "Patchy rain nearby" || title == "Sunny") && time <= 6 && time >= 23) {
        return [MostlyCloudyNight, "Mostly Cloudy"]
    } else if ((title == "Mist" || title == "Cloudy ")) {
        return [Cloudy, "Cloudy"]
    }
}

function Day({ id, item }) {
    const weather = useSelector(state => state.weather)
    const celsius = useSelector(state => state.celsius)
    const dispatch = useDispatch()

    let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    let date = new Date()
    let day = date.getDay() + 6 

    let newDays = getDays(day, days)
    let hour = date.getHours();

    let component = check(item.day.condition.text, hour)

    return (
        <div className={wDay} onClick={() => dispatch(object.actions.setCurrent({key: id, weather: weather}))}>
            {newDays[id]}
            <div>
                {component != undefined ? <img src={component[0]}/> : null}
            </div>
            <div className={degree}>
                {celsius == 1 ? item.day.avgtemp_c : item.day.avgtemp_f}°
            </div>
        </div>
    )
}

export default Day