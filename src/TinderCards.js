import React, {useState, useEffect} from 'react'
import './TinderCards.css'
import TinderCard from 'react-tinder-card'
import axios from './axios';

function TinderCards() {
    const [People, setPeople] = useState([
        
    ]);

    useEffect(() => {
        async function fetchData() {
            const req = await axios.get('/tinder/cards');

            setPeople(req.data);
        }
        fetchData();
    }, [])
    console.log('done')

    const swiped = (direction, nameToDelete) => {
        console.log(`Removing ${nameToDelete}`);
    }

    const outOfFrame = (name) => {
        console.log(`${name} Left the Screen.`);
    }

    return (
        <div className="tindercards">
            <div className="tinderCards_container">
            {People.map((Person) => (
                <TinderCard className='swipe' key={Person.name} preventSwipe={['up', 'down']} onSwipe={(dir) => swiped(dir, Person.name)} onCardLeftScreen={() => outOfFrame(Person.name)}>
                    <div className='card' style={{backgroundImage:`url(${Person.imgUrl})`}}>
                        <h3>{Person.name}</h3>
                    </div>
                </TinderCard>
            ))}
            </div>
        </div>
    )
}

export default TinderCards
