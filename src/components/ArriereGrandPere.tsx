import { useContext } from "react";
import GrandPere from "./GrandPere";
import {useFamilyStore } from "../App";

export default function ArriereGrandPere() {
    const prenomARGP = useFamilyStore().prenom
  return (
    <div>
      <h1>Arrière grand-père: {prenomARGP}</h1>
      <GrandPere />
    </div>
  );
}