import React from 'react';
import { NavLink } from 'react-router-dom';

const ListItems = ({ items, setItems }) => {
  const clearItems = () => {
    localStorage.removeItem('items');
    setItems([]);
  };

  React.useEffect(() => {
    const storedItems = JSON.parse(localStorage.getItem('items')) || [];
    storedItems.sort((a, b) => a.valor - b.valor);
    setItems(storedItems);
  }, []);

  if (!items) return null;
  return (
    <div className="container mx-auto my-5 w-50 border border-2 rounded-3 shadow bg-body-tertiary p-3">
      <h1 className="text-center">Listagem de Produtos</h1>
      <ul className="list-unstyled mt-4">
        {items.map((item, index) => (
          <li key={index} className="mt-2">
            <p><strong>Nome:</strong> {item.nome},    <strong>Valor:</strong>{' '}
            {item.valor}</p>
          </li>
        ))}
      </ul>
      <div className="d-flex justify-content-between my-4">
        <div>
          <button className="btn btn-danger" onClick={clearItems}>
            Excluir
          </button>
        </div>
        <div>
          <NavLink to="/">
            <button className="btn btn-primary">Cadastrar</button>
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ListItems;
