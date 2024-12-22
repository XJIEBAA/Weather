import React, { use, useEffect } from "react"

import { useSelector, useDispatch } from "react-redux"
import object from "../../store/counterSlice.js"
import { farActive, degreeFar, degreeCels, classSwitch, celsActive } from "../css/style.css"

function Switch() {
    const celsius = useSelector(state => state.celsius)
    const dispatch = useDispatch()

    return (
        <div className={classSwitch}>
            <span onClick={() => dispatch(object.actions.setCelsius({celsius: true}))} className={celsius ? celsActive : degreeCels}>
                C°
            </span>
            <span onClick={() => dispatch(object.actions.setCelsius({celsius: false}))} className={celsius == false ? farActive : degreeFar}>
                F°
            </span>
        </div>
    )
}

export default Switch