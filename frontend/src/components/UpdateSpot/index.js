import { useDispatch } from "react-redux";
import { updateSpotThunk } from "../../store/spots";
import { useModal } from "../../context/Modal";


const UpdateSpotForm = (spotInfo) => {
    const spot = {
        name: "",
        address: "",
        city: "",
        state: "",
        country: "",
        lat: "",
        lng: "",
        description: "",
        price: "",
    };

    return (
        <SpotForm spot={spot} />
    )
}

export default UpdateSpotForm;
