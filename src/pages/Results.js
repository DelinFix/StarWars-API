import React,{useState, useEffect, useContext} from "react"
import {Link} from "react-router-dom"
import {FindPathContext} from './Input'

export default function Results() {
    const [userList, setUserList] = useState([])
    const [data, setData] = useState([])
    const find = useContext(FindPathContext)

    function fetchPeople() {
        fetch("https://swapi.dev/api/people/?search="+find)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setUserList(data.results)
                setData(data)
            })
    }

    function nextPage(){
        fetch(data.next)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setUserList(data.results)
                setData(data)
            })
    }

    function prevPage(){
        fetch(data.previous)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setUserList(data.results)
                setData(data)
            })
    }

    useEffect(() => {
        fetchPeople()
    }, [])

    return (
        <>
            <Link to='/'>
                <h2 className="backBtn">Back to main</h2>
            </Link>
            {(userList.length !== 0) ? (
                <>
                    {userList.map((user, index) =>
                        <li key={index}>
                            <Link to={`/people/${user.name}`}>
                                <div>
                                    {user.name}
                                </div>
                            </Link>
                        </li>
                    )}
                    {(data.previous != null) &&
                        <button className="pagination" onClick={prevPage}>Previous page</button>
                    }
                    {(data.next != null) &&
                        <button className="pagination" onClick={nextPage}>Next page</button>
                    }
                </>
            ) : <h1>No characters found with this name</h1>}
        </>
    )
}


