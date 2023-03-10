import { useEffect, useState } from "react"
import reactLogo from "./assets/react.svg"
import "./App.css"
import createStore from "zustand-mini"

const useCount = createStore(0)

function Child() {
    const [count, setCount] = useCount()

    useEffect(() => {
        console.log(useCount.getState())
    })

    return <div>child count is {count}</div>
}

function App() {
    const [count, setCount] = useCount()

    return (
        <div>
            <div>count is {count}</div>
            {count >= 5 && <Child />}
            <div>
                <button onClick={() => setCount(count + 1)}>add one</button>
            </div>
        </div>
    )
}

export default App
