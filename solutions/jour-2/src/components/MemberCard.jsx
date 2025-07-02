import { useState } from "react";
import { Badge } from "./Badge";

const MemberCard = ({ member }) => {
  const [isInverted, setIsInverted] = useState(false);

  const handleClick = () => {
    setIsInverted(!isInverted);
  };

  return (
    <div
      className="bg-white shadow-md rounded-xl p-4 w-full max-w-sm mx-auto mb-4"
      onClick={handleClick}
    >
      <img
        src={member.imageUrl}
        alt={`${member.firstName} avatar`}
        className="w-24 h-24 rounded-full mb-4 object-cover border-2 border-gray-300"
      />
      <h2 className="text-xl font-bold">
        {member.firstName} {member.lastName}
      </h2>
      <div className="mt-2">
        <Badge inverted={isInverted}>{member.tech}</Badge>
      </div>
      <p className="text-gray-600">{member.message}</p>
    </div>
  );
};

export default MemberCard;
