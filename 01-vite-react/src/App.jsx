import Wc from "./Wc";

function App() {
  const username = 'Istiak'
  return (
    <div>
      <h2>This username varible is evaluated expression -  {username}, we can't use javascript code directly, but we can use expression. becouse this jsx covert in object and every thing will be property of object, and we can't use javascript code in object property but we can use expression </h2>
      <Wc />
    </div>
  );
}

export default App;
