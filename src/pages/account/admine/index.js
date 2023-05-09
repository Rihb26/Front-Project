import React, { useState, useEffect } from 'react';
import styles from './index.module.scss';
import Button from '@/components/UI/Button/';
import { useRouter } from 'next/router';
import UserContext from '@/context/UserContext';


const index = () => {
  
  const [users, setUsers] = useState([]);

  
  const [missions, setMissions] = useState([]);


  async function fetchUsers() {
    try {
      const response = await fetch('/api/users');
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error(error);
    }
  }

  
  async function fetchMissions() {
    try {
      const response = await fetch('/api/missions');
      const data = await response.json();
      setMissions(data);
    } catch (error) {
      console.error(error);
    }
  }

 
  useEffect(() => {
    fetchUsers();
    fetchMissions();
  }, []);

 
  async function deleteUser(userId) {
    try {
      const response = await fetch(`/api/users/${userId}`, {
        method: 'DELETE'
      });
      if (response.ok) {
        // Si la suppression réussit, mettre à jour la liste des utilisateurs
        setUsers(users.filter(user => user.id !== userId));
      } else {
        console.error(`Erreur HTTP ${response.status}`);
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h1>Interface d'administration</h1>

      {/* Section pour les compétences */}
      <section>
        <h2>Compétences</h2>

        {/* Formulaire pour ajouter une compétence */}
        <form>
          <label htmlFor="competence">Ajouter une compétence :</label>
          <input type="text" id="competence" />
          <button type="submit">Ajouter</button>
        </form>

        {/* Tableau des compétences existantes */}
        <table>
          <thead>
            <tr>
              <th>Compétence</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {/* Remplacer les valeurs factices par la liste réelle des compétences */}
            <tr>
              <td>Compétence 1</td>
              <td>
                <button>Modifier</button>
                <button>Supprimer</button>
              </td>
            </tr>
            <tr>
              <td>Compétence 2</td>
              <td>
                <button>Modifier</button>
                <button>Supprimer</button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Section pour les métiers */}
      <section>
        <h2>Métiers</h2>

        {/* Formulaire pour ajouter un métier */}
        <form>
          <label htmlFor="metier">Ajouter un métier :</label>
          <input type="text" id="metier" />
          <button type="submit">Ajouter</button>
        </form>

        {/* Tableau des métiers existants */}
        <table>
          <thead>
            <tr>
              <th>Métier</th>
              <th>Action</th>
            </tr>
          </thead>
            <tbody>
                {/* Remplacer les valeurs factices par la liste réelle des métiers */}
                <tr>
                    <td>Métier 1</td>
                    <td>
                        <button>Modifier</button>
                        <button>Supprimer</button>
                    </td>
                </tr>
                <tr>
                    <td>Métier 2</td>
                    <td>
                        <button>Modifier</button>
                        <button>Supprimer</button>
                    </td>
                </tr>
            </tbody>
        </table>
        </section>
</div> 
    );
}
export default index;
