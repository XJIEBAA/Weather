import React, { use, useEffect } from "react"

import { useSelector, useDispatch } from "react-redux"
import object from "../../store/counterSlice.js"

console.log()

const App = () => {
    const weather = useSelector(state => state.weather)
    const dispatch = useDispatch()

    return (
        <div onClick={dispatch(object.actions.)}>
            Hello World
        </div>
    )
}

export default App