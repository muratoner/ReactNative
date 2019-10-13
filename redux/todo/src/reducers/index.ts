import { combineReducers } from 'redux'
import visibilityFilter from './visibilyFilter'
import todos from './todos'

const rootReducers = combineReducers({
	todos,
	visibilityFilter
})

export default rootReducers