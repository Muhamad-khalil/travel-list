import { useState } from "react";
import Logo from "./component/Logo";
import Form from "./component/Form";
import PackingList from "./component/PackingList";
import Stats from "./component/Stats";

export default function App() {
  const [items, setItems] = useState([]);

  // event Handler
  function handleAddClick(item) {
    setItems([...items, item]);
  }

  function handleDeleteClick(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleClick(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  function handleClearList() {
    const confirms = window.confirm("are you sure remove all items");
    if (confirms) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddClick} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteClick}
        onToggleItems={handleToggleClick}
        onClearItems={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}
