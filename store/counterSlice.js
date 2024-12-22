const { createSlice } = require("@reduxjs/toolkit")

module.exports = createSlice({
    name: "weather",
    initialState: {
        weather: [],
        current: [],
        location: [],
        celsius: true,
        active: 0
    },
    reducers: {
        set: (state, action) => {
            console.log(action)
            console.log("action")
            state.weather = [action.payload]
            state.location = [action.payload.location]
            state.current = [action.payload.forecast.forecastday[0]]
            state.active = 0
        }
    }
})