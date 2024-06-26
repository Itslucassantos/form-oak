import { Field, Form, Formik } from 'formik';
import Input from '../Input';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';

const FormOak = ({ items, setItems }) => {
  const navigate = useNavigate();

  const schema = Yup.object().shape({
    nome: Yup.string().required('Campo obrigatório'),
    descricao: Yup.string().required('Campo obrigatório'),
    valor: Yup.number().required('Campo obrigatório'),
  });

  return (
    <>
      <div className="container border border-2 rounded-3 mx-auto mt-5 w-75 shadow bg-body-tertiary">
        <h1 className="mb-5 text-center mt-3">Cadastrar</h1>
        <Formik
          initialValues={{
            nome: '',
            descricao: '',
            valor: '',
            disponivel: 'sim',
          }}
          validationSchema={schema}
          onSubmit={(values) => {
            const storedItems = JSON.parse(localStorage.getItem('items')) || [];
            const updatedItems = [...storedItems, values];
            localStorage.setItem('items', JSON.stringify(updatedItems));
            setItems(updatedItems);
            navigate('/lista');
          }}
        >
          {(formik) => (
            <Form onSubmit={formik.handleSubmit}>
              <Input name="nome" type="text" label="Nome do produto" />
              <Input
                name="descricao"
                type="text"
                label="Descrição do produto"
              />
              <Input name="valor" type="number" label="Valor do produto" placeholder="Digite o preço do produto" />

              <label htmlFor="disponivel" className="form-label">
                Disponível para venda
              </label>
              <div>
                <Field as="select" name="disponivel">
                  <option value="sim">Sim</option>
                  <option value="não">Não</option>
                </Field>
              </div>
              <div className="d-flex flex-row-reverse">
                <button type="submit" className="btn btn-primary m-5">
                  Enviar
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default FormOak;
