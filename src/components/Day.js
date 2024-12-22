import React, { use, useEffect } from "react"

import { useSelector, useDispatch } from "react-redux"
import object from "../../store/counterSlice.js"

console.log()

const App = () => {
    let [weather, setWeather] = React.useState([])
    const wtr = useSelector(state => state.weather)
    const dispatch = useDispatch()

    return (
        <div>
            {weather.length > 0 ? weather.map((key, item) => {
                return <div>Hello World</div>
            }) : null}
            <div>
            </div>
        </div>
    )
}

export default App