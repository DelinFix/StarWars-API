//Страница персонажа, делается запрос на поиск по имени персонажа и выводим данные из этого запроса
import React,{useState, useEffect} from "react"
import {Link, useParams} from "react-router-dom"

export default function CharacterPage() {
    const [aboutPeople, setAboutPeople] = useState([])
    const {name} = useParams()

    async function fetchAboutPeople() {
        let res = await fetch("https://swapi.dev/api/people/?search="+name)
        let data = await res.json()
        setAboutPeople(data.results)
    }
    useEffect(() => {
        fetchAboutPeople()
    }, [])
    return (
        <>
            <Link to='/'>
                <h2 className="backBtn">Back to main</h2>
            </Link>
            {(aboutPeople.length > 0) ? (
                <>
                    <h1>About character</h1>
                    <h2>Name: {aboutPeople[0].name}</h2>
                    <h2>Mass: {aboutPeople[0].mass} kg</h2>
                    <h2>Height: {aboutPeople[0].height} cm</h2>
                    <h2>Gender: {aboutPeople[0].gender}</h2>
                    <h2>Hair color: {aboutPeople[0].hair_color}</h2>
                    <h2>Skin color: {aboutPeople[0].skin_color}</h2>
                    <h2>Eye color: {aboutPeople[0].eye_color}</h2>
                    <h2>Year of birth: {aboutPeople[0].birth_year}</h2>
                </>
            ) : <h1>Nothing about this user</h1>}
        </>
    )
}


