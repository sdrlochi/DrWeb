import { useState } from "react";
import Button from "./button";
const Card = (props) => {
    const {
        origin,
        name,
        image,
        description
    } = props;

    const [result, setResult] = useState(null)

    const addToFavorite = () => {
        fetch("https://api.thecatapi.com/v1/favourites", {
            method: 'POST',
            headers: {
                'x-api-key': '2c806c06-7132-4706-9f4a-f957c5c0d1a0',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                image_id: image?.id,
            })
        })
            .then(res => res.json())
            .then(data => setResult(data))
            .catch(err => console.log('ERROR happened', err))
    }

    return <>
        <li className="card">
            <img
                src={image?.url}
                alt={description}
            />
            <h3>
                <a href="">{name}</a>
            </h3>
            <p>{origin}</p>
            <Button onClick={addToFavorite} />
        </li>
    </>
}

export default Card;