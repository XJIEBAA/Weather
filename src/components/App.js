import React, { use, useEffect } from "react"

import { useSelector, useDispatch } from "react-redux"
import object from "../../store/counterSlice.js"

import { container } from "../css/style.css"

import Day from "./Day.js"

import ReactLogo from '../public/Cloudy.svg';

console.log()

const App = () => {
    let [weather, setWeather] = React.useState([])
    const wtr = useSelector(state => state.weather)
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
            sd
            <img src={ReactLogo} alt="React Logo" />
            {weather.length > 0 ? weather.map((key, item) => {
                return <div>Hello World</div>
            }) : null}
            <Day></Day>
            <div>
            </div>
        </div>
    )
}

export default App