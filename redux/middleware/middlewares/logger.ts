/**
 * Local Logger: My Custom Logger
 * Logs all actions and states after they are dispatched.
 */
export const logger = store => next => action => {
	console.group(action.type)
	console.info('dispatching', action)
	let result = next(action)
	console.log('next state', store.getState())
	console.groupEnd()
	return result
}

/**
 * Cloud Logger: Used Raven.js for sentry cloud logger tool:
 * Sends crash reports as state is updated and listeners are notified.
 */
export const crashReporter = store => next => action => {
	try {
		return next(action)
	} catch (err) {
		console.error('Caught an exception!', err)
		/* If you want report all crach then use Sentry Cloud free provider. */
		// Raven.captureException(err, {
		// 	extra: {
		// 		action,
		// 		state: store.getState()
		// 	}
		// })
		throw err
	}
}