import { Orders } from "./components/Orders";

function App() {
    return (
        <div className="App">
            <h1>Welcome to the back office restaurant OPS!</h1>

            <h3>List of current orders</h3>
            <Orders/>
        </div>
    );
}

export { App };
