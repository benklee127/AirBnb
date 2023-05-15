import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { createSpotThunk, updateSpotThunk } from "../../store/spots";
import "./SpotForm.css";

function SpotForm({ spot, type }) {

    console.log(spot);
    const [name, setName] = useState(spot?.name);
    const [address, setAddress] = useState(spot?.address);
    const [city, setCity] = useState(spot?.city);
    const [state, setState] = useState(spot?.state);
    const [country, setCountry] = useState(spot?.country);
    const [lat, setLat] = useState(spot?.lat);
    const [lng, setLng] = useState(spot?.lng);
    const [description, setDescription] = useState(spot?.name);
    const [price, setPrice] = useState(spot?.price);

    const [img1, setImg1] = useState("");
    const [img2, setImg2] = useState("");
    const [img3, setImg3] = useState("");
    const [img4, setImg4] = useState("");

    const dispatch = useDispatch();
    const history = useHistory();

    //handle form submission
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

        //add images
        const spotImgs = [];

        if (img1) spotImgs.push({ url: img1, preview: true });
        if (img2) spotImgs.push({ url: img2, preview: false });
        if (img3) spotImgs.push({ url: img3, preview: false });
        if (img4) spotImgs.push({ url: img4, preview: false });


        //Split between new/update
        if (type === 'new') {
            console.log("spotinfo recieved from user on submit for new", createdSpot);
            e.preventDefault();
            console.log('submit attempt');
            const newSpot = await dispatch(createSpotThunk({ createdSpot, spotImgs }));
            console.log('newspot', newSpot);
            history.push(`/spots/${newSpot.id}`);
        } else {
            e.preventDefault();
            console.log('edited spot sumbit created  spot data', createdSpot);
            const updatedSpot = await dispatch(updateSpotThunk({ createdSpot, spotImgs }));
            console.log('updatedspot in form', createdSpot);
            history.push(`/spots/${createdSpot.id}`);
        }


    }

    return (
        <form onSubmit={handleSubmit} className='spot-form'>
            <h2 className='form-title'>Create a Spot</h2>
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
            {/* <label>
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
            </label> */}
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
            <label>
                images
                <input
                    type="text"
                    value={img1}
                    onChange={(e) => setImg1(e.target.value)}
                />
            </label>
            <label>
                image2
                <input
                    type="text"
                    value={img2}
                    onChange={(e) => setImg2(e.target.value)}
                />
            </label>
            <label>
                image3
                <input
                    type="text"
                    value={img3}
                    onChange={(e) => setImg3(e.target.value)}
                />
            </label>
            <label>
                image4
                <input
                    type="text"
                    value={img4}
                    onChange={(e) => setImg4(e.target.value)}
                />
            </label>

            <button type="submit" className='form-submit'>Submit</button>
        </form>
    )
}

export default SpotForm;
