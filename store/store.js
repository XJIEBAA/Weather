var { configureStore } = require("@reduxjs/toolkit")
var counterSlice = require("./counterSlice.js")

const { incremented, decrement } = counterSlice.actions

module.exports = store = configureStore({
    reducer: counterSlice.reducer
})