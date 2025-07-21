import { useReducer } from 'react';

const reducer = (state, action) => { // update state based on action
    switch (action) {
        case "increment":
            return state + 1;

        case "decrement":
            return state - 1;

        case "reset":
            return 0;

        default:
            return state;
    }
}

const UseReducerHookExample = () => {
    const [count, dispatch] = useReducer(reducer, 0); // initial count value is 0
    // dispatch method to dispatch action

    return (<>
        <h1>useReducer Hook Example</h1>
        <h2>{count}</h2>
        <button className='btn btn-outline-success m-1' onClick={() => dispatch('increment')}>Increment</button>
        <button className='btn btn-outline-danger m-1' onClick={() => dispatch('decrement')}>Decrement</button>
        <button className='btn btn-outline-dark m-1' onClick={() => dispatch('reset')}>Reset</button>
    </>);
}

export default UseReducerHookExample;