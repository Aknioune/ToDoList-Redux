import React, { useState } from 'react'; // Importer React et useState depuis le package react
import { connect } from 'react-redux'; // Importer connect depuis le package react-redux
import { toggleTask, editTask } from '../Action'; // Importer les fonctions toggleTask et editTask depuis le fichier d'action

const Task = ({ task, toggleTask, editTask }) => { // Créer un composant fonctionnel Task avec task, toggleTask et editTask comme arguments destructurés
  const [isEditing, setIsEditing] = useState(false); // Initialiser l'état local "isEditing" à faux avec la fonction useState
  const [description, setDescription] = useState(task.description); // Initialiser l'état local "description" à la description de la tâche actuelle

  const handleToggle = () => { // Créer une fonction de gestionnaire pour le basculement de l'état de la tâche
    toggleTask(task.id); // Appeler la fonction toggleTask de l'action avec l'ID de la tâche actuelle
  };

  const handleEdit = () => { // Créer une fonction de gestionnaire pour l'édition de la tâche
    setIsEditing(true); // Définir "isEditing" sur vrai
  };

  const handleSave = () => { // Créer une fonction de gestionnaire pour la sauvegarde de la tâche modifiée
    if (description.trim() === '') { // Vérifier si la description est vide ou contient uniquement des espaces
      return; // Si oui, ne rien faire
    }
    editTask(task.id, description.trim()); // Si la description n'est pas vide, appeler la fonction editTask de l'action avec l'ID de la tâche actuelle et la description sans les espaces
    setIsEditing(false); // Définir "isEditing" sur faux
  };

  const handleCancel = () => { // Créer une fonction de gestionnaire pour l'annulation de l'édition de la tâche
    setDescription(task.description); // Réinitialiser "description" à la description de la tâche actuelle
    setIsEditing(false); // Définir "isEditing" sur faux
  };

  const handleDescriptionChange = (event) => { // Créer une fonction de gestionnaire pour le changement de la description
    setDescription(event.target.value); // Mettre à jour l'état local "description" avec la nouvelle valeur de la description
  };

  return ( // Retourner l'élément JSX représentant la tâche
    <div className="task">
      <input type="checkbox" checked={task.isDone} onChange={handleToggle} className="task-checkbox" />
      {isEditing ? ( // Si "isEditing" est vrai, afficher les éléments d'édition
        <>
          <input type="text" value={description} onChange={handleDescriptionChange} className="edit-input" />
          <button onClick={handleSave} className="save-button">Save</button>
          <button onClick={handleCancel} className="cancel-button">Cancel</button>
        </>
      ) : ( // Sinon, afficher la description de la tâche et le bouton d'édition
        <>
          <span className={task.isDone ? 'done task-description' : 'task-description'}>{task.description}</span>
          <button onClick={handleEdit} className="edit-button">Edit</button>
        </>
        )}

</div>
  );
};

export default connect(null, { toggleTask, editTask })(Task);