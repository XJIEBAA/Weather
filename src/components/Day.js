import React, { use, useEffect } from "react"

import { useSelector, useDispatch } from "react-redux"
import object from "../../store/counterSlice.js"
import { wDay } from "../css/style.css"

import Cloudy from "../public/Cloudy.svg"
import MostlyCloudyNight from "../public/MostlyCloudy-night.svg"
import MostlyCloudy from "../public/MostlyCloudy.svg"

function getDays(day, days) {
    let slice1 = days.slice(0, day)
    let slice2 = days.slice(day, days.length)

    return [...slice2, ...slice1]
}

function check(title, time) {
    if (title == "Patchy rain nearby" && time > 6 && time < 23) {
        return [MostlyCloudyNight, "Mostly Cloudy"]
    } else if (title == "Patchy rain nearby" && time < 6 && time > 23) {
        return [MostlyCloudyNight, "Mostly Cloudy"]
    } else if ((title == "Mist" || title == "Cloudy") && time < 6 && time > 23) {
        return [Cloudy, "Cloudy"]
    }
}

function Day({ id, item }) {
    const weather = useSelector(state => state.weather)
    const dispatch = useDispatch()

    let days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"]
    let date = new Date()
    let day = date.getDay() + 6 

    let newDays = getDays(day, days)

    return (
        <div className={wDay} onClick={() => dispatch(object.actions.setCurrent({key: id, weather: weather}))}>
            {newDays[id]}
        </div>
    )
}

export default Day