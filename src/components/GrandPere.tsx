import { useContext } from "react";
import Pere from "./Pere";
import { useFamilyStore } from "../App";

export default function GrandPere() {
    const GrandPere = useFamilyStore().prenom
  return (
    <div>
      <h1>grand-père: {GrandPere}</h1>
      <Pere />
    </div>
  );
}