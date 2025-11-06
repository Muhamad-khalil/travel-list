export default function Stats({ items }) {
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;

  const percentages = Math.round((numPacked / numItems) * 100);
  if (numPacked === 0) {
    return (
      <p className="stats">
        <em>start Adding some items to your packing list 🚀</em>
      </p>
    );
  }

  return (
    <footer className="stats">
      <em>
        {percentages === 100
          ? "You got everything! Ready to go ✈️"
          : `💼You have ${numItems} items list , and you already packed ${numPacked} (
          ${percentages}%)`}
      </em>
    </footer>
  );
}
