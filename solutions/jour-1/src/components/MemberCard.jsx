export default function MemberCard(props) {
  return (
    <div className="member-card">
      <h2>{props.name}</h2>
      <p>{props.tech}</p>
      <p>{props.message}</p>
    </div>
  );
}
