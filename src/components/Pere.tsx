import { useContext } from "react";
import Frere from "./Frere";
import {useFamilyStore } from "../App";

export default function Pere() {
    const Pere = useFamilyStore().prenom
  return (
    <div>
      <h1>père: {Pere}</h1>
      <Frere />
    </div>
  );
}