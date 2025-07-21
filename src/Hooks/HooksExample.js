import UseEffectExample from "./UseEffectExample";
import UseReducerHookExample from "./UseReducerExample";
import WithoutContextExample from './WithoutContextExample';
import WithContextExample from "./WithContextExample";

function HooksExample() {
    return <>
        <WithContextExample />
        <WithoutContextExample />
        <UseEffectExample />
        <UseReducerHookExample />
    </>
}

export default HooksExample;