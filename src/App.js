import { useState } from "react";
const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "graf", quantity: 4, packed: true },
];

export default function App() {
  return (
    <div className="app">
      <Logo />
      <Form />
      <PackingList />
      <Stats />
    </div>
  );
}

// component Logo
function Logo() {
  return <h1>🌴 Far Away 💼</h1>;
}
// component Logo

// component Form
function Form() {
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

    console.log(newItems);

    setDescription("");
    setQuantity(1);

    const addedItems = [...initialItems, newItems];

    return addedItems;
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
// component Form

//component lists
function PackingList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((item) => (
          <Items item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}
function Items({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button>❌</button>
    </li>
  );
}
//component lists

//component stats
function Stats() {
  return (
    <footer className="stats">
      <em>💼You have X items list , and you already packed X (X%)</em>
    </footer>
  );
}
//component stats
