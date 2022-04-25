const { configureStore } = require('@reduxjs/toolkit');

const store = configureStore({
    reducer: {
        // test: testReducer,
    },
    middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), /* middlewares */],
    devTools: process.env.NODE_ENV === 'development',

    })
    export default store;