import {MonsterCard} from "../index";
import {useState, useEffect} from "react";
import {Container, Row, Col, InputGroup, FormControl} from "react-bootstrap";
import {Link, Outlet} from "react-router-dom";


const MonsterList = () => {
    const [monsterList, setMonsterList] = useState([])
    const [filter, setFilter] = useState('')
    const getMonsters = () => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => setMonsterList(data));
    }

    useEffect(() => {
        document.title = 'Monsters'
        getMonsters()
    })
    return (
        <div>

            <Container className='mainContent'>
                <Outlet/>
                <Row>
                    <Col className='mt-auto'>
                        <InputGroup className="mb-3">
                            <FormControl
                                placeholder="Robot's name"
                                aria-label="Username"
                                onChange={e => setFilter(e.target.value)}
                                aria-describedby="basic-addon1"
                            />
                            <InputGroup.Text id="basic-addon1">Search</InputGroup.Text>
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    {monsterList.filter(monster => monster.name.toLowerCase().includes(filter.toLowerCase())).length === 0 ?
                        <p className='text-center mt-5'>Sorry,could not find :((</p> :
                        monsterList.filter(monster => monster.name.toLowerCase().includes(filter.toLowerCase())).map((monster) => (
                            <Col className='cardContainer' key={monster.id} xs={12} sm={6} md={4} lg={3}>
                                <Link to={`/monsters/${monster.id}`} style={{ textDecoration: 'none' }}>
                                    <MonsterCard name={monster.name}
                                                 description={monster.email}
                                                 image={'https://robohash.org/qq' + monster.username}/>
                                </Link>
                            </Col>

                        ))
                    }
                </Row>
            </Container>
        </div>
    )
}

export default MonsterList