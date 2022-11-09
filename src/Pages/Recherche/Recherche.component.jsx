

const Recherche = () => {
    let searchValue = localStorage.getItem('searchValue')
    return (
        <>
            Notre recherche
            <br />
            la valeur que l'on a reçu :
            {searchValue}

        </>
    )
}

export default Recherche;
