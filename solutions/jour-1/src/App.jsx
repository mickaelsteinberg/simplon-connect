import MemberCard from "./components/MemberCard";
import { members } from "./data/members";

function App() {
  return (
    <div className="app">
      <h1>Simplon Connect</h1>
      {members.map((member) => (
        <MemberCard
          key={JSON.stringify(member)}
          name={`${member.firstName} ${member.lastName}`}
          tech={member.tech}
          message={member.message}
        />
      ))}
    </div>
  );
}

export default App;
