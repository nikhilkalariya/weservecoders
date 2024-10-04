import React, { useState } from 'react';

const FamilyMember = ({ member, addMember }) => {
  const [newMemberName, setNewMemberName] = useState('');

  const handleAddMember = () => {
    if (newMemberName.trim()) {
      addMember(member.id, newMemberName);
      setNewMemberName('');
    }
  };

  return (
    <div className="border-l-4 pl-4 mb-4">
      <p className="font-bold text-lg mb-2">{member.name}</p>
      
      {/* Form to add new member */}
      <div className="">
        <input
          type="text"
          value={newMemberName}
          onChange={(e) => setNewMemberName(e.target.value)}
          className="border p-2 mr-2"
          placeholder="New Member Name"
        />
        <button onClick={handleAddMember} className="bg-blue-500 text-white px-3 py-1 rounded">
          Add Child
        </button>
      </div>

      {/* Recursively render children */}
      <div className="ml-4">
        {member.children.length > 0 && (
          member.children.map((child) => (
            <FamilyMember key={child.id} member={child} addMember={addMember} />
          ))
        )}
      </div>
    </div>
  );
};

export default FamilyMember;
