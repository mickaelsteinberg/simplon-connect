import { members } from "../data/members";
import MemberCard from "./components/MemberCard";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Liste des membres</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {members.map((member) => (
          <MemberCard
            key={member.first + member.lastName}
            member={member}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
