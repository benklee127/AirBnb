import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { createSpotThunk, updateSpotThunk } from "../../store/spots";
import "./SpotForm.css";
import { useEffect } from "react";

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
  const [img5, setImg5] = useState("");

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
    };

    //add images
    const spotImgs = [];

    if (img1) spotImgs.push({ url: img1, preview: true });
    if (img2) spotImgs.push({ url: img2, preview: false });
    if (img3) spotImgs.push({ url: img3, preview: false });
    if (img4) spotImgs.push({ url: img4, preview: false });
    if (img5) spotImgs.push({ url: img5, preview: false });

    //Split between new/update
    if (type === "new") {
      console.log("spotinfo recieved from user on submit for new", createdSpot);
      e.preventDefault();
      console.log("submit attempt");
      const newSpot = await dispatch(
        createSpotThunk({ createdSpot, spotImgs })
      );
      console.log("newspot", newSpot);
      history.push(`/spots/${newSpot.id}`);
    } else {
      e.preventDefault();
      console.log("edited spot sumbit created  spot data", createdSpot);
      const updatedSpot = await dispatch(
        updateSpotThunk({ createdSpot, spotImgs })
      );
      console.log("updatedspot in form", createdSpot);
      history.push(`/spots/${createdSpot.id}`);
    }
  };

  return (
    <div className="form-wrapper">
      <div className="boundary"></div>
      <form onSubmit={handleSubmit} className="spot-form">
        <h2 className="form-title">Create a new Spot</h2>
        <label className="form-label">
          Country: <br />
          <input
            className="form-input-inline"
            type="text"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="Country"
          />
        </label>
        <label className="form-label">
          Street Address: <br />
          <input
            className="form-input"
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Address"
          />
        </label>
        <div className="row">
          <label className="form-input-inline">
            City<br></br>
            <input
              className="form-input-inline"
              type="text"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="City"
            />
          </label>
          <label className="form-label">
            State <br></br>
            <input
              className="form-input-inline"
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
              placeholder="State"
            />
          </label>
        </div>
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
        <div className="divider" />
        <label className="form-label">
          <h3>Describe your place to guests</h3>
          <p>
            Mention the best features of your space, any special amenities like
            fast wifi or parking, and what you love about the neighborhood.
          </p>
          <textarea
            className="form-input"
            type="textarea"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Please write at least 30 characters"
          />
        </label>
        <label className="form-label">
          <h3>Create a title for your spot</h3>
          <p>
            Catch guests' attention with a spot title that highlights what makes
            your space special.
          </p>
          <input
            className="form-input"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label className="form-label">
          <h3>Set a base price for your spot</h3>
          <p>
            Competitive pricing can help your listing stand out and rank higher
            in search results.
          </p>
          <input
            className="form-input"
            type="text"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </label>

        <label className="form-label">
          <h3>Liven up your spot with photos</h3>
          <p>Submit a link to at least one photo to publish your spot.</p>
          <input
            className="form-input"
            type="text"
            value={img1}
            onChange={(e) => setImg1(e.target.value)}
            placeholder="Preview Image URL"
          />
          <br />
          <br />
          <input
            className="form-input"
            type="text"
            value={img2}
            onChange={(e) => setImg2(e.target.value)}
            placeholder="Image URL"
          />
          <br />
          <br />
          <input
            className="form-input"
            type="text"
            value={img3}
            onChange={(e) => setImg3(e.target.value)}
            placeholder="Image URL"
          />
          <br />
          <br />
          <input
            className="form-input"
            type="text"
            value={img4}
            onChange={(e) => setImg4(e.target.value)}
            placeholder="Image URL"
          />
          <br />
          <br />
          <input
            className="form-input"
            type="text"
            value={img5}
            onChange={(e) => setImg5(e.target.value)}
            placeholder="Image URL"
          />
        </label>
        <br />
        <br />
        <button type="submit" className="form-submit">
          Create Spot
        </button>
      </form>
      <div className="boundary"></div>
    </div>
  );
}

export default SpotForm;
