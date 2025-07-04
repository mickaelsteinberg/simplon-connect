import { useState } from "react";
import { members as initialMembers } from "../data/members";
import MemberCard from "./components/MemberCard";
import { MemberForm } from "./components/MemberForm";

const App = () => {
  const [members, setMembers] = useState(() => {
    const savedMembers = localStorage.getItem("members");

    if (savedMembers) {
      return JSON.parse(savedMembers);
    } else {
      return initialMembers;
    }
  });

  const handleAddMember = (memberData) => {
    setMembers([...members, memberData]);
    localStorage.setItem("members", JSON.stringify([...members, memberData]));
  };

  const handleDeleteMember = (memberToDelete) => {
    const updatedMembers = members.filter(
      (member) =>
        member.first !== memberToDelete.first ||
        member.lastName !== memberToDelete.lastName
    );
    setMembers(updatedMembers);
    localStorage.setItem("members", JSON.stringify(updatedMembers));
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Liste des membres</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {members.map((member) => (
          <MemberCard
            key={member.firstName + member.lastName}
            member={member}
            onDelete={handleDeleteMember}
          />
        ))}
      </div>
      <MemberForm onAddMember={handleAddMember} />
    </div>
  );
};

export default App;
