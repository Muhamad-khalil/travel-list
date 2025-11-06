import { useState } from "react";

export default function Form({ onAddItems }) {
  // state
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  // Event Handler

  function handleSubmit(e) {
    e.preventDefault();

    const newItems = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    };
    if (!description) return;

    onAddItems(newItems);
    setDescription("");
    setQuantity(1);
  }
  // function handleAddClick() {}

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select
        value={quantity}
        onChange={(e) => {
          setQuantity(e.target.value);
        }}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      />
      <button onClick={handleSubmit}>add</button>
    </form>
  );
}
