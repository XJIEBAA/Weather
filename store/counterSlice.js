const { createSlice } = require("@reduxjs/toolkit")

module.exports = createSlice({
    name: "weather",
    initialState: {
        weather: [],
        current: [],
        celsius: true,
        active: 0,
        value: 0
    },
    reducers: {
        set: (state, action) => {
            console.log(action)
            console.log("action")
            state.weather = [action.payload]
        },
        incremented: (state, action) => {
            state.value += 1
        },
        decrement: state => {
            state.value -= 1
        },
        selectCount: state => {
            return state.value
        }
    }
})