
export default (rollbar, options = {}) => {
  if (!rollbar) throw new Error('redux-rollbar-state-middleware: you need to pass Rollbar object to the middleware')
  const sanitizeState = options.sanitizeState || (state => state)

  return store => next => action => {
    rollbar.configure({
      payload: {
        state: sanitizeState(store.getState()),
      }
    })
    return next(action)
  }
}
