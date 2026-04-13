// Import React
import React from "react";

// Étape 1 : définir le type des props
interface GreetingProps {
  name: string;
}

// Étape 2 : typer le composant
const Greeting: React.FC<GreetingProps> = ({ name }) => {
  // Étape 3 : afficher le message
  return <div>Hello, {name}!</div>;
};

// Export du composant
export default Greeting;