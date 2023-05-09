import React, { useState, useEffect } from "react";
import { useEffect, useState, useContext } from 'react';
import styles from "./index.module.scss";

const index = () => {
  const [propositions, setPropositions] = useState([]);

  useEffect(() => {
    // Charger les propositions de missions depuis le serveur
    const propositionsDeMission = [
      {
        id: 1,
        titre: "Développement d'un site web",
        entreprise: "Acme Inc.",
        description: "Développer un site web pour notre entreprise",
      },
      {
        id: 2,
        titre: "Création d'un logo",
        entreprise: "Globex Corp.",
        description: "Créer un logo pour notre entreprise",
      },
    ];
    setPropositions(propositionsDeMission);
  }, []);

  function accepterProposition(id) {
    // Envoyer une demande au serveur pour accepter la proposition de mission
    console.log("Proposition de mission acceptée :", id);
  }

  function refuserProposition(id) {
    // Envoyer une demande au serveur pour refuser la proposition de mission
    console.log("Proposition de mission refusée :", id);
  }

  return (
    <div>
      <h1>Interface Freelance</h1>

      <h2>Propositions de missions</h2>
      {propositions.map((proposition) => (
        <div key={proposition.id}>
          <h3>{proposition.titre}</h3>
          <p>{proposition.entreprise}</p>
          <p>{proposition.description}</p>
          <button onClick={() => accepterProposition(proposition.id)}>Accepter</button>
          <button onClick={() => refuserProposition(proposition.id)}>Refuser</button>
        </div>
      ))}
    </div>
  );
}

export default index;
