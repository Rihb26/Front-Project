import { useState, useEffect } from 'react';
import MissionForm from './MissionForm';
import MissionList from './MissionList';
import FreelanceList from './FreelanceList';
import styles from './index.module.scss';

const Index = () => {
  const [missions, setMissions] = useState([]);
  const [freelances, setFreelances] = useState([]);

  useEffect(() => {
    
    fetch('/api/missions')
      .then((response) => response.json())
      .then((data) => setMissions(data));
  }, []);

  useEffect(() => {
    
    fetch('/api/freelances')
      .then((response) => response.json())
      .then((data) => setFreelances(data));
  }, []);

  function handleCreateMission(newMission) {
    
    setMissions([...missions, newMission]);
  }

  function handleUpdateMission(updatedMission) {
    
    const updatedMissions = missions.map((mission) =>
      mission.id === updatedMission.id ? updatedMission : mission
    );
    setMissions(updatedMissions);
  }

  function handleDeleteMission(missionId) {
    
    const updatedMissions = missions.filter((mission) => mission.id !== missionId);
    setMissions(updatedMissions);
  }

  function handleProposeMission(missionId, freelanceId) {
   
    fetch(`/api/missions/${missionId}/propositions`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ freelanceId }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }

  return (
    <div className="container">
      <h1>Interface Entreprise</h1>
      <MissionForm onCreateMission={handleCreateMission} />
      <MissionList
        missions={missions}
        onUpdateMission={handleUpdateMission}
        onDeleteMission={handleDeleteMission}
      />
      <FreelanceList freelances={freelances} onProposeMission={handleProposeMission} />
    </div>
  );
}

export default index;
