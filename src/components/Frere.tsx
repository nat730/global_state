import { useContext, useState } from "react";
import {useFamilyStore } from "../App";

export default function Frere(){
    const { prenom, setPrenom } = useFamilyStore()
    const [newPrenom, setNewPrenom] = useState(prenom)

    const handleChangePrenom = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNewPrenom(event.target.value)
    }

    const handleUpdatePrenom = () => {
        setPrenom(newPrenom)
    }

    return (
        <div>
        <h1>Frère : {prenom} </h1>
        <input type="text" value={newPrenom} onChange={handleChangePrenom} />
        <button onClick={handleUpdatePrenom}>Mettre à jour le prénom</button>
        </div>
    );
}