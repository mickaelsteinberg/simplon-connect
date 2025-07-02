export const Badge = ({ inverted, children }) => {
  const colorBadge = !inverted
    ? "bg-blue-100 text-blue-800 border-blue-400 hover:bg-blue-200 "
    : "bg-blue-800 text-blue-100 border-blue-400 hover:bg-blue-900 ";

  return (
    <button
      className={`${colorBadge} text-xs font-semibold mr-2 px-2.5 py-0.5 rounded border transition-all`}
    >
      {children}
    </button>
  );
};
