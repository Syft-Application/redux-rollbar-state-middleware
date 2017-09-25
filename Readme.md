
## Redux Rollbar State Middleware

Middleware that add redux state to the payload of [Rollbar](https://rollbar.com) logs

**Note:** `lib/` is in repo until we publish package on npm

### Installation

```
npm install redux-rollbar-state-middleware --save
# or
yarn install redux-rollbar-state-middleware --save
```

### Usage

```
import rollbarStateMiddleware from 'redux-rollbar-state-middleware'

const middleware = rollbarStateMiddleware(rollbar, options)
```

### Options

| Name | Type | Default | Description |
| - | - | - | - |
| sanitizeState | `function` | - | You can change the state before adding it to the Rollbar configuration

### Example

```
import { createStore, applyMiddleware } from 'redux'
import rollbarStateMiddleware from 'redux-rollbar-state-middleware'

import Rollbar from 'rollbar' // server usage. for client use the instruction https://rollbar.com/docs/notifier/rollbar.js/#umd--browserify--requirejs--webpack

const rollbar = new Rollbar({ /* ... some config */ })

const middleware = [
  rollbarStateMiddleware(rollbar)
];

export const store = createStore(
  appReducers,
  composeWithDevTools(
    applyMiddleware(...middleware),
  )
)

```

You can find more usecases in the [tests](./src/index.spec.js).


### License

MIT
