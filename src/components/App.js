import React, { use, useEffect } from "react"

import { useSelector, useDispatch } from "react-redux"
import object from "../../store/counterSlice.js"

import { container, title, pretitle, days } from "../css/style.css"

import Day from "./Day.js"

console.log()

const App = () => {
    const weather = useSelector(state => state.weather)
    const current = useSelector(state => state.current)
    const location = useSelector(state => state.location)
    const count = useSelector(state => state.value)
    const dispatch = useDispatch()

    useEffect(() => {
        fetch('http://api.weatherapi.com/v1/forecast.json?key=42f1b40bbf184411b26100231242112&q=London&days=7&aqi=yes&alerts=no')
        .then((data) => data.json())
        .then(data => dispatch(object.actions.set(data)))
        .catch(error => console.log(error))
    }, [])

    return (
        <div className={container}>
            <div className={title}>
                {current.length > 0 ? current[0].day.condition.text : null}
            </div>
            <div className={pretitle}>
                {location.length > 0 ? location[0].tz_id : null}
            </div>
            <div class={days}>
                {weather.length > 0 ? weather[0].forecast.forecastday.map((item, key) => {
                    console.log(key)
                    return <Day item={item} id={key}></Day>
                }) : null}
            </div>
{/* 
            {weather.length > 0 ? weather.map((key, item) => {
                return <div key={key}>Hello World</div>
            }) : null} */}
            <div>
            </div>
        </div>
    )
}

export default App