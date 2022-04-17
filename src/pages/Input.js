import React, {useState} from "react"
import {Link} from "react-router-dom"
import '../styles/input.css'

export const FindPathContext = React.createContext()

let transfer = ''

export const FindPathProvider = ({ children }) => {
    return(
        <FindPathContext.Provider value={transfer}>
            { children }
        </FindPathContext.Provider>
    )
}

export default function Input() {
    const [inputValue, setInputValue] = useState("")

    const onChangeHandler = event => {
        setInputValue(event.target.value)
        transfer = event.target.value
    }

    return (
        <>
            <form className="findForm">
                <div>Find character:</div>
                <input
                    className="findInput"
                    type="text"
                    name="name"
                    onChange={onChangeHandler}
                    value={inputValue}
                />
                <Link to={`/results/${inputValue ? inputValue : 'allPeoples'}`}>
                    <span className="find">Find</span>
                </Link>
            </form>
        </>
    )
}


