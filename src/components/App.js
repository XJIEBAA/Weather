import React, { use, useEffect } from "react"

import { useSelector, useDispatch } from "react-redux"
import object from "../../store/counterSlice.js"

import { container, containerPadding, title, pretitle, days } from "../css/style.css"

import Day from "./Day.js"

function check(title, time) {
    if ((title == "Patchy rain nearby" || title == "Sunny") && time >= 6 && time < 23) {
        return "Mostly Cloudy"
    } else if ((title == "Patchy rain nearby" || title == "Sunny") && time <= 6 && time >= 23) {
        return "Mostly Cloudy"
    } else if ((title == "Mist" || title == "Cloudy ")) {
        return "Cloudy"
    }
}

const App = () => {
    const weather = useSelector(state => state.weather)
    const current = useSelector(state => state.current)
    const location = useSelector(state => state.location)
    const dispatch = useDispatch()

    useEffect(() => {
        fetch('http://api.weatherapi.com/v1/forecast.json?key=42f1b40bbf184411b26100231242112&q=London&days=7&aqi=yes&alerts=no')
        .then((data) => data.json())
        .then(data => dispatch(object.actions.set(data)))
        .catch(error => console.log(error))
    }, [])

    let date = new Date()
    let hour = date.getHours();

    return (
        <div className={container}>
            <div className={containerPadding}>
                <div className={title}>
                    {current.length > 0 ? check(current.length > 0 ? current[0].day.condition.text : null, hour) : null}
                </div>
                <div className={pretitle}>
                    {location.length > 0 ? location[0].tz_id : null}
                </div>
            </div>
            
            <div class={days}>
                {weather.length > 0 ? weather[0].forecast.forecastday.map((item, key) => {
                    console.log(key)
                    return <Day item={item} id={key}></Day>
                }) : null}
            </div>
        </div>
    )
}

export default App