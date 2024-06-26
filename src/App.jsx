import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FormOak from './components/FormOak';
import ListItems from './components/ListItems';
import React from 'react';

function App() {
  const [items, setItems] = React.useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FormOak items={items} setItems={setItems} />} />
        <Route path="lista" element={<ListItems items={items} setItems={setItems} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
