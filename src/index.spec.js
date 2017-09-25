
import middleware from './index'

describe('redux-rollbar-state-middleware', () => {
  let rollbarMock
  let store
  let next

  const dispatch = (action, options) => middleware(rollbarMock, options)(store)(next)(action)

  beforeEach(() => {
    rollbarMock = {
      configure: (jest.fn())
    }
    store = {
      state: {},
      getState: jest.fn(() => store.state)
    }
    next = jest.fn()
  })

  it('should add state state to the payload of Rollbar', () => {
    dispatch({ type: 'SOME_ACTION' })
    expect(rollbarMock.configure.mock.calls.length).toBe(1)
  })

  describe('sanitizeState', () => {
    it('should invoke sanitizeState with the state of store', () => {
      const fn = jest.fn()
      store.state = { test: true }
      dispatch({ type: 'SOME_ACTION' }, { sanitizeState: fn })
      expect(fn.mock.calls.length).toBe(1)
      expect(fn.mock.calls[0][0]).toEqual(store.state)
    })
  })
})
