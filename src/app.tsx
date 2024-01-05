import { Item } from "./components/Item";

// Example mockdata
const items = [
  {
    id: "1",
    label: "Using nicotine",
  },
  {
    id: "2",
    label: "Drinking alcohol",
  },
];

export function App() {
  return (
    <>
      <h1>Time since</h1>
      {items ? (
        <ul>
          {items.map(({ id, label }) => (
            <li key={id}>
              <Item label={label} />
            </li>
          ))}
        </ul>
      ) : (
        <p>No items</p>
      )}
    </>
  );
}
