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
            state.weather = [action.payload]
            state.location = [action.payload.location]
            state.current = [action.payload.forecast.forecastday[0]]
            state.active = 0
        },
        setCurrent: (state, action) => {
            state.current = [action.payload.weather[0].forecast.forecastday[action.payload.key]]
            state.active = action.payload.key
        }
    }
})