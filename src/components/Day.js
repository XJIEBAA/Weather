import React, { use, useEffect } from "react"

import { useSelector, useDispatch } from "react-redux"
import object from "../../store/counterSlice.js"

console.log()

function Day({ id, item }) {
    const weather = useSelector(state => state.weather)
    const dispatch = useDispatch()

    console.log(item, id)

    return (
        <div onClick={() => dispatch(object.actions.setCurrent({key: id, weather: weather}))}>
            Hello World
        </div>
    )
}

export default Day