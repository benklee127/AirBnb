import SpotForm from "../SpotForm"

const CreateSpotForm = () => {
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

export default CreateSpotForm;
