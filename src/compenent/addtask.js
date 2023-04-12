import React, { useState } from 'react'; // Importer React et useState depuis le package react
import { connect } from 'react-redux'; // Importer connect depuis le package react-redux
import { addTask } from '../Action'; // Importer la fonction addTask depuis le fichier d'action

const AddTask = ({ dispatch }) => { // Créer un composant fonctionnel AddTask avec dispatch comme argument destructuré
  const [description, setDescription] = useState(''); // Initialiser l'état local "description" à une chaîne vide avec la fonction useState

  const handleSubmit = (e) => { // Créer une fonction de gestionnaire pour la soumission du formulaire
    e.preventDefault(); // Empêcher le comportement par défaut de la soumission du formulaire
    if (description.trim() === '') { // Vérifier si la description est vide ou contient uniquement des espaces
      return; // Si oui, ne rien faire
    }
    dispatch(addTask(description.trim())); // Si la description n'est pas vide, appeler la fonction addTask de l'action avec la description sans les espaces
    setDescription(''); // Réinitialiser la description à une chaîne vide
  };

  return ( // Retourner l'élément JSX représentant le formulaire d'ajout de tâche
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Add a new task..."
        className="task-input"
      />
      <button type="submit" className="add-task-button">Add Task</button>
    </form>
  );
};

export default connect()(AddTask); // Connecter le composant AddTask au magasin Redux en utilisant la fonction connect()
