import { useState } from "react";
import Alert from "./Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import Message from "./Message";
import ExpandalbeText from "./components/ExpandalbeText";
import Form from "./forms/Form";
import ExpenseList from "./expense-tracker/components/ExpenseList";
import ExpenseFilter from "./expense-tracker/components/ExpenseFilter";
import ExpenseForm from "./expense-tracker/components/ExpenseForm";
import categories from "./expense-tracker/categories";

function App() {
  //   let items = [
  //     "Jalalpur Jattan",
  //     "Gujrat",
  //     "Gujranwala",
  //     "Lahore",
  //     "Islamabad",
  //   ];
  //   const handleSelectedItem = (item: string) => {
  //     console.log(item);
  //   };
  //   const [alertVisible, setalertVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [expenses, setExpenses] = useState([
    { id: 1, description: "abc", amount: 10, category: "Utilities" },
    { id: 2, description: "def", amount: 20, category: "Utilities" },
    { id: 3, description: "ghi", amount: 30, category: "Groceries" },
    { id: 4, description: "jkl", amount: 40, category: "Groceries" },
    { id: 5, description: "mno", amount: 50, category: "Utilities" },
  ]);
  const visibleExpenses = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;
  return (
    <div>
      <div className="mb-5">
        <ExpenseForm
          onSubmit={(expense) =>
            setExpenses([...expenses, { ...expense, id: expenses.length + 1 }])
          }
        />
      </div>
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        />
      </div>
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      />
      {/* <ListGroup
        items={items}
        heading="Cities"
        onSelctedItem={handleSelectedItem}
      /> */}
      {/* <Message /> */}
      {/* <ExpandalbeText maxChars={50}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat iure
        itaque dignissimos deleniti praesentium doloribus perspiciatis officia
        tempore incidunt consequuntur ipsa illum alias ullam rem error, illo ea?
        Voluptas, laboriosam accusantium voluptates placeat totam harum ab
        cupiditate obcaecati, temporibus assumenda delectus soluta porro tenetur
        odit voluptatibus quod veritatis. Accusamus ullam tempore itaque commodi
        ea iusto sit id expedita unde molestias fugiat necessitatibus, obcaecati
        omnis maxime velit qui facilis quibusdam nostrum dolore dolorem culpa
        soluta veniam? Amet doloremque voluptatem non odio? Itaque consectetur
        sapiente dolores voluptate officiis qui numquam in eum ex excepturi
        deserunt inventore, voluptatem similique! Asperiores ex repellendus
        perferendis!
      </ExpandalbeText> */}

      {/* {alertVisible && (
        <Alert onClose={() => setalertVisible(false)}>
          Hello <span>Abdul Wahab! How are You?</span>
        </Alert>
      )}
      <Button
        color="danger"
        onClick={() => setalertVisible(true)}
        children="Abdul Wahab"
      /> */}

      {/* <Form /> */}
    </div>
  );
}

export default App;
