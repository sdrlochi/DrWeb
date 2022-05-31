import React, { useEffect, useState } from "react";
import Card from './card'

const Main = () => {
    const [breeds, setBreeds] = useState(null);

    useEffect(() => {
        fetch("https://api.thecatapi.com/v1/breeds", {
            headers: { 'x-api-key': '2c806c06-7132-4706-9f4a-f957c5c0d1a0' }
        })
            .then(res => res.json())
            .then(data => setBreeds(data))
            .catch(err => console.log('ERROR happened', err))
    }, [])

    console.log('breeeeds', breeds)

    return (
        <>
            <div div className="container">
                <ul className="card-wrapper">
                    {
                        breeds?.map(breed => <>
                            <Card {...breed} />
                        </>
                        )
                    }
                </ul>

            </div>
        </>
    )
}
export default Main;