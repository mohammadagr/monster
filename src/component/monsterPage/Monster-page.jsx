import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {Container, Card} from "react-bootstrap";
import {useParams} from "react-router-dom";
const MonsterPage = () => {
    const params = useParams()
    const [monster, setMonster] = useState({
        "id": 1,
        "name": "",
        "username": "",
        "email": "",
        "website": ""
    })
    const getMonster = () => {
        fetch(`https://jsonplaceholder.typicode.com/users/${params.monsterID}`)
                .then(response => response.json())
                .then(data => setMonster(data))
        }
        useEffect(()=>{getMonster ()},[])

        return (
            <Container >
                <Card>
                    <Card.Body>
                        <img style={{borderRadius: '50%', border: "solid 1px black", marginLeft: "70%"}}
                             src={'https://robohash.org/' + monster.username} alt='avatar'/>
                        <Card.Title>{monster.name}</Card.Title>
                        <Card.Title>{monster.username}</Card.Title>
                        <Card.Title>{monster.email}</Card.Title>
                        <Card.Title>{monster.phone}</Card.Title>
                        <Card.Title>{monster.website}</Card.Title>
                        <Link to='/monsters '> back to robots</Link>
                    </Card.Body>
                </Card>
            </Container>
        )
    }
    export default MonsterPage