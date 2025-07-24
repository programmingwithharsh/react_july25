import UseEffectExample from "./UseEffectExample";
import UseReducerHookExample from "./UseReducerExample";
import WithoutContextExample from './WithoutContextExample';
import WithContextExample from "./WithContextExample";
import UseRefExample from "./UseRefExample";
import UseCustomHook from "./UseCustomHook";

function HooksExample() {
    const [todos] = UseCustomHook("https://jsonplaceholder.typicode.com/todos");
    const [albums] = UseCustomHook("https://jsonplaceholder.typicode.com/albums");

    return <>

        <div>
            <h1>Todos List using custom hook</h1>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo.title}</li>
                ))}
            </ul>
        </div>

        <div>
            <h1>Album List using custom hook</h1>
            <ul>
                {albums.map((album, index) => (
                    <li key={index}>{album.title}</li>
                ))}
            </ul>
        </div>

        <UseRefExample />

        <WithContextExample />
        <WithoutContextExample />
        <UseEffectExample />
        <UseReducerHookExample />
    </>
}

export default HooksExample;