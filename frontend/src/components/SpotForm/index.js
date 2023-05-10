import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { createSpotThunk } from "../../store/spots";
import "./SpotForm.css";

function SpotForm({ spot }) {

    const [name, setName] = useState(spot?.name);
    const [address, setAddress] = useState(spot?.address);
    const [city, setCity] = useState(spot?.city);
    const [state, setState] = useState(spot?.state);
    const [country, setCountry] = useState(spot?.country);
    const [lat, setLat] = useState(spot?.lat);
    const [lng, setLng] = useState(spot?.lng);
    const [description, setDescription] = useState(spot?.name);
    const [price, setPrice] = useState(spot?.price);

    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = async (e) => {

        let createdSpot = {
            ...spot,
            address: address,
            city: city,
            state: state,
            country: country,
            lat: 1,
            lng: 1,
            name: name,
            description: description,
            price: price,
        }
        console.log("spotinfo recieved from user on submit", createdSpot);
        e.preventDefault();
        console.log('submit attempt');
        const newSpot = await dispatch(createSpotThunk(createdSpot));
        console.log('newspot', newSpot);
        history.push(`/spots/${newSpot.id}`);
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Create a Spot</h2>
            <label>
                Name:
                <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </label>
            <label>
                address:
                <input
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                />
            </label>
            <label>
                city:
                <input
                    type="text"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />
            </label>
            <label>
                state:
                <input
                    type="text"
                    value={state}
                    onChange={(e) => setState(e.target.value)}
                />
            </label>
            <label>
                country:
                <input
                    type="text"
                    value={country}
                    onChange={(e) => setCountry(e.target.value)}
                />
            </label>
            <label>
                lat:
                <input
                    type="text"
                    value={lat}
                    onChange={(e) => setLat(e.target.value)}
                />
            </label>
            <label>
                lng:
                <input
                    type="text"
                    value={lng}
                    onChange={(e) => setLng(e.target.value)}
                />
            </label>
            <label>
                description:
                <input
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </label>
            <label>
                price:
                <input
                    type="text"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                />
            </label>
            <button type="submit">Submit</button>
        </form>
    )
}

export default SpotForm;
