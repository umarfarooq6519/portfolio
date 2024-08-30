/* eslint-disable react/prop-types */
export default function Button({ text, icon }) {
  return (
    <button className="font-[450] uppercase">
      <span>[</span>
      <span className="pl-2">{text}</span>
      <span>{icon}</span>
      <span>]</span>
    </button>
  );
}
