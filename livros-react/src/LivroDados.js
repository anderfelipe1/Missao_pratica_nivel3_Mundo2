import React, { useState } from 'react';
import ControleLivros from './controle/ControleLivros';
import ControleEditoras from './controle/ControleEditoras';
import { useNavigate } from 'react-router-dom';

const controleLivro = new ControleLivros();
const controleEditora = new ControleEditoras();

const LivroDados = () => {
  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [autores, setAutores] = useState('');
  const [codEditora, setCodEditora] = useState(0);
  const navigate = useNavigate();

  const opcoes = controleEditora.getEditoras().map(editora => ({
    value: editora.codEditora,
    text: editora.nome,
  }));

  const tratarCombo = (event) => {
    setCodEditora(Number(event.target.value));
  };

  const incluir = (event) => {
    event.preventDefault();
    const novoLivro = {
      codigo: 0,
      titulo,
      resumo,
      autores: autores.split('\n'),
      codEditora,
    };
    controleLivro.incluir(novoLivro);
    navigate('/');
  };

  return (
    <main>
      <h2>Cadastro de Livro</h2>
      <form onSubmit={incluir}>
        {/* Campos do formulário */}
      </form>
    </main>
  );
};

export default LivroDados;
