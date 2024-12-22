import React, { use, useEffect } from "react"

import { useSelector, useDispatch } from "react-redux"
import object from "../../store/counterSlice.js"
import { day } from "../css/style.css"

import { Cloudy } from "../public/Cloudy.svg"
import { MostlyCloudyNight } from "../public/MostlyCloudy-night.svg"
import { MostlyCloudy } from "../public/MostlyCloudy.svg"

function Day({ id, item }) {
    const weather = useSelector(state => state.weather)
    const dispatch = useDispatch()

    return (
        <div stlye={day} onClick={() => dispatch(object.actions.setCurrent({key: id, weather: weather}))}>
            
        </div>
    )
}

export default Day