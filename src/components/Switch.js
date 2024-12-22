import React, { use, useEffect } from "react"

import { useSelector, useDispatch } from "react-redux"
import object from "../../store/counterSlice.js"
import { wDay, degree } from "../css/style.css"

function Switch() {
    const celsius = useSelector(state => state.celsius)
    const dispatch = useDispatch()

    return (
        <div className={wDay}>
            <div onClick={() => dispatch(object.actions.setCelsius({celsius: true}))} className={celsius ? active : degree}>
                C°
            </div>
            <div onClick={() => dispatch(object.actions.setCelsius({celsius: false}))} className={celsius ? active : degree}>
                F°
            </div>
        </div>
    )
}

export default Switch