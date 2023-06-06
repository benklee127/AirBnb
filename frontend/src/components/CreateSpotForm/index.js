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

    const spotImgs = {

    }

    return (
        <SpotForm spot={spot} type={'new'} className='spot-form-box' />
    )
}

export default CreateSpotForm;
