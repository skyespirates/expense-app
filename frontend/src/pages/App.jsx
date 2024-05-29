import { useState } from "react";
import { nanoid } from "nanoid";
import { useListStore } from "@stores/store";
import Input from "@components/Input";
import Button from "@components/Button";
import List from "@components/List";

const App = () => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const { list, addItem } = useListStore();

  const handleClick = () => {
    console.log(title, amount);
    const expense = {
      id: nanoid(12),
      title,
      amount: parseInt(amount),
    };
    addItem(expense);
  };

  return (
    <div>
      <div>
        <Input
          type="text"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          type="number"
          placeholder="amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <Button onClick={handleClick} size="lg">
          add
        </Button>
      </div>
      <List items={list} />
    </div>
  );
};

export default App;
