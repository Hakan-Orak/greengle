import Lottie from 'react-lottie';
import greenEarth from './../../Components/lotties/green-earth.json'
import InputAutocomplete from "../../Components/input-autocomplete/InputAutocomplete.component";

const Accueil = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: greenEarth,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    };

    return (
        <>
            <Lottie
                options={defaultOptions}
                height={500}
                width={500}
            />
            <div style={{
                display: "block",
                marginLeft: "auto",
                marginRight: "auto"
            }}>
                <InputAutocomplete/>
            </div>
        </>
    )
}

export default Accueil;
