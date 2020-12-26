import { combineReducers } from 'redux'
import activitiesReducer from './activitiesReducer'
import userReducer from './userReducer'

const rootReducer = combineReducers({
    activities: activitiesReducer,
    users: userReducer
})

export default rootReducer