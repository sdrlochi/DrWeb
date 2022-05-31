import { useState, useEffect, useId } from 'react';
import Card from './card'

const Favorites = () => {

    const [favourites, setFavourites] = useState(null);

    useEffect(() => {
        fetch("https://api.thecatapi.com/v1/favourites", {
            headers: { 'x-api-key': '2c806c06-7132-4706-9f4a-f957c5c0d1a0' }
        })
            .then(res => res.json())
            .then(data => setFavourites(data))
            .catch(err => console.log('ERROR happened', err))
    }, [])

    console.log('favvv', favourites)
    return <>
        <h1 class="header">Here are your favorites</h1>

        <div className='card-wrapper'>
            {
                favourites?.map(fav => <Card key={fav.id} {...fav} />)
            }


        </div></>
}

export default Favorites