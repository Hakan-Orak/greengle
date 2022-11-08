import React from 'react';
import Recherche from './Recherche.component';

const HookedRecherche = (props) => {
    return React.createElement(Recherche, {...props})
}

export default HookedRecherche;