export const Badge = ({ inverted, color, onClick, children }) => {
  if (!color) {
    color = "blue"; 
  }

  const colorBadge = !inverted
    ? `bg-${color}-100 text-${color}-800 border-${color}-400 hover:bg-${color}-200 `
    : `bg-${color}-800 text-${color}-100 border-${color}-900 hover:bg-${color}-900 `;

  return (
    <button
      onClick={onClick}
      title={children}
      type="button"
      className={`${colorBadge} text-xs font-semibold mr-2 px-2.5 py-0.5 rounded border transition-all`}
    >
      {children}
    </button>
  );
};
