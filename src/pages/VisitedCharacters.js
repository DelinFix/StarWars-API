//Страница с выводом посещенных персонажей, данные получаем из SessionStorage
import React,{useState, useEffect} from "react"

export default function VisitedCharacters() {
    const [visitedPeople, setVisitedPeople] = useState([])

    useEffect(() => {
        setVisitedPeople(JSON.parse(sessionStorage.getItem('visited')))
    },[])
    return (
        <>
            <h1>Visited characters</h1>
            <ul>
                {(visitedPeople != null) ? (
                    <>
                        {visitedPeople.map((item, index) =>
                            <li key={index}>
                                {item}
                            </li>
                        )}
                    </>
                ) : <h2>No one visited in this session</h2>}
            </ul>
        </>
    )
}
