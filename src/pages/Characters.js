//Страница всех персонажей, выводится через запрос, подаваемый при загрузке и при переходе на новую страницу
import React,{useState, useEffect} from "react"
import {Link} from "react-router-dom"

export default function Characters() {
    const [people, setPeople] = useState([])
    const [data, setData] = useState([])

    function fetchPeople() {
        fetch("https://swapi.dev/api/people")
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setPeople(data.results)
                setData(data)
            })
    }

    function addVisit(name) {
        let arr = (JSON.parse(sessionStorage.getItem('visited')) == null
            ? []
            : JSON.parse(sessionStorage.getItem('visited')))
        if(!arr.includes(name)) arr.push(name)
        sessionStorage.setItem('visited', JSON.stringify(arr))
    }

    function nextPage(){
        fetch(data.next)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setPeople(data.results)
                setData(data)
            })
    }

    function prevPage(){
        fetch(data.previous)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                setPeople(data.results)
                setData(data)
            })
    }

    useEffect(() => {
        fetchPeople()
    }, [])

    return (
        <>
            <h1>List of characters</h1>
            <ul>
                {people.map((user, index) =>
                    <li key={index}>
                        <Link to={`/people/${user.name}`}>
                            <div onClick={() => {addVisit(user.name)}}>
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
            </ul>
        </>
    )
}

