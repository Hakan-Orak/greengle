import React from "react";
import Accueil from "./Accueil.component";

const HookedAccueil = (props) => {


    return React.createElement(Accueil, {...props})
}

export default HookedAccueil;
