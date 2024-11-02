import './App.css';
import React, {useState, useEffect} from 'react';
import ItemList from './componenets/itemList.jsx'
import SelectedItem from './componenets/selectedItem.jsx';


function App() {
  const itemList = ["Apple", "Banana", "Orange", "Grapes"];

  const [selected, setSelected] = useState(null);
  
  useEffect(() => {
    console.log(`selected item was changed to ${selected}`);
  },[selected]);

  return (
    <div>
      <h1>Select an Item</h1>
      {itemList.map((item, index) => (
        <div key={index}>
          <ItemList listItem={item} setSelected={setSelected}/>
        </div>
      ))}
      {selected && <SelectedItem selected={selected}/>}
    </div>
  );
}

export default App;
