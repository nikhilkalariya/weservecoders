import React, { useState } from 'react';
import FamilyMember from './components/FamilyMember';


const App = () => {
  // Root family member with some initial data
  const [familyTree, setFamilyTree] = useState({
    id: 1,
    name: 'John Doe',
    children: [],
  });

  // Function to add a new family member
  const addFamilyMember = (parentId, name) => {
    const addMemberRecursive = (member) => {
      if (member.id === parentId) {
        // Add the new child to the parent
        member.children.push({
          id: Date.now(),
          name,
          children: [],
        });
      } else {
        // Recursively find the right parent to add the child
        member.children.forEach((child) => addMemberRecursive(child));
      }
    };

    const updatedTree = { ...familyTree };
    addMemberRecursive(updatedTree);
    setFamilyTree(updatedTree);
  };

  return (
    <div className="min-h-screen p-10 bg-gray-100">
      <h1 className="text-3xl font-bold mb-5">Family Tree</h1>
      <FamilyMember member={familyTree} addMember={addFamilyMember} />
    </div>
  );
};

export default App;

