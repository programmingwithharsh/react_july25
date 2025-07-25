Project Demo for Rajesh, Affan and Rupesh
Comparison between Angular, React and Next.js
useSelector, useDispatch
Redux Toolkit
getStaticProps, getServerSideProps
Static Generation (SSG) vs Server-side Rendering (SSR) 
Next.js Layouts
Vercel
Webpack
Running VS Code debugger
Assignment 
Project Update 
Queries
Project Demo
Revision
Post Assessment 
Feedback

Redux Toolkit
src/
├── app/
│   └── store.js
├── features/
│   └── counter/
│       ├── counterSlice.js
│       └── Counter.js
├── App.js
└── index.js

Step 1
------
npm i react-redux @reduxjs/toolkit

Step 2 - counterSlice.js
-------------------------
Create features folder 

├── features/
│   └── counter/
│       ├── counterSlice.js -> createSlice -> Reducer -> Action
│       └── Counter.js -> Component

createSlice is a Redux Toolkit utility that:

Defines initial state
Creates reducer functions
Automatically generates actions

Step 3 - Counter.js -> Component
---------------------------------
useSelector is used to read data from the Redux store.
useDispatch is used to send actions to the Redux store.

Step 4 - src/App.js
------
// src/App.js
import React from 'react';
import Counter from './features/counter/Counter';

function App() {
  return (
    <div>
      <Counter />
    </div>
  );
}

export default App;

Step 5 - src/index.js
------
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './app/store';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Provider store={store}>
    <App />
</Provider>); // calling Main Component


| **Functional Hook** / **Class Lifecycle**                | **Purpose**                                                                   |
| -------------------------------------------------------- | ----------------------------------------------------------------------------- |
| **useState**                                             | Adds local state to functional components (like `this.state`).                |
| **constructor()**                                        | Initializes state and binds methods before render in class component.         |
| **useEffect**                                            | Performs side effects (e.g., API calls); replaces multiple lifecycle methods. |
| **componentDidMount()**                                  | Runs once after component is mounted; good for API calls or subscriptions.    |
| **useRef**                                               | Persists mutable values across renders, without causing re-renders.           |
| **getSnapshotBeforeUpdate()** + **componentDidUpdate()** | Capture DOM info before update and use it after update.                       |
| **useReducer**                                           | Alternative to useState for complex state logic or multiple sub-values.       |
| **shouldComponentUpdate()**                              | Controls re-rendering by comparing current and next props/state.              |
| **useContext**                                           | Access context values directly without `contextType` or `<Consumer>`.         |
| **static getDerivedStateFromProps()**                    | Syncs state from props before rendering (rarely needed).                      |
| **useMemo**                                              | Memoizes computed values to avoid unnecessary recalculations.                 |
| **render()**                                             | Returns JSX (UI); re-renders on state or prop change.                         |
|                                                          |                                                                               |
| --- **Lifecycle Phases** ---                             |                                                                               |
| **Mounting**                                             | Initial phase of component creation and insertion into the DOM.               |
| **Updating**                                             | Component re-renders due to state/prop changes.                               |
| **Unmounting**                                           | Cleanup phase before component is removed from DOM.                           |
| **componentWillUnmount()**                               | Cleanup logic like clearing timers, listeners, etc.                           |

| **Functional Hook**           | **Class Lifecycle Method**                      | **Purpose / Usage**                                                                    |
| ----------------------------- | ----------------------------------------------- | -------------------------------------------------------------------------------------- |
| `useState`                    | `this.state`, `this.setState()`                 | Adds and manages local state in functional components.                                 |
| `useEffect` (empty deps `[]`) | `componentDidMount()`                           | Runs once after initial render; for setup tasks like API calls.                        |
| `useEffect` (with cleanup)    | `componentWillUnmount()`                        | Handles cleanup like removing listeners or cancelling timers.                          |
| `useEffect` (with deps)       | `componentDidUpdate()` + `componentDidMount()`  | Runs on mount and on dependency updates; reacts to prop/state changes.                 |
| `useRef`                      | `createRef()` / Instance properties             | Stores a mutable value that persists across renders; doesn't trigger re-renders.       |
| `useReducer`                  | Complex `this.setState()` or external reducers  | Manages complex state transitions (like Redux-style reducer logic).                    |
| `useContext`                  | `static contextType` / `<MyContext.Consumer>`   | Accesses context values directly in functional components.                             |
| `useMemo`                     | Manual memoization or `shouldComponentUpdate()` | Memoizes expensive computations between renders for performance.                       |
| —                             | `constructor()`                                 | Initializes state, binds methods before mounting.                                      |
| —                             | `render()`                                      | Returns JSX/HTML; functional components return JSX directly without this method.       |
| —                             | `getSnapshotBeforeUpdate()`                     | Captures pre-update DOM state, typically used with scroll position logic.              |
| —                             | `static getDerivedStateFromProps()`             | Updates state based on new props before rendering; rarely used in hooks.               |
| —                             | `shouldComponentUpdate()`                       | Controls re-rendering based on prop/state changes; use `React.memo()` for functionals. |


