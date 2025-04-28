import React, { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";
import logo from '../../pages/img/logotipo.png';

const Home = () => {
  const { logout, signout } = useAuth();
  const navigate = useNavigate();
  const [transactionsList, setTransactionsList] = useState(() => {
    const saved = localStorage.getItem("transactions");
    return saved ? JSON.parse(saved) : [];
  });

  const [desc, setDesc] = useState("");
  const [amount, setAmount] = useState("");
  const [isExpense, setExpense] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      navigate("/", { replace: true });
    };

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    };
  }, [navigate]);

  const handleLogout = () => {
    if (logout) logout();
    else if (signout) signout();

    navigate("/", { replace: true });
  };

  const generateID = () => Math.round(Math.random() * 1000);

  const handleSave = () => {
    if (!desc || !amount) {
      alert("Informe a descrição e o valor!");
      return;
    } else if (parseFloat(amount) < 1) {
      alert("O valor tem que ser positivo!");
      return;
    }

    const now = new Date();
    const dateTime = now.toLocaleString(); // adiciona data e hora

    const transaction = {
      id: generateID(),
      desc: desc,
      amount: amount,
      expense: isExpense,
      dateTime: dateTime,
    };

    const newTransactions = [...transactionsList, transaction];
    setTransactionsList(newTransactions);
    localStorage.setItem("transactions", JSON.stringify(newTransactions));

    setDesc("");
    setAmount("");
  };

  const handleDelete = (id) => {
    const filtered = transactionsList.filter((item) => item.id !== id);
    setTransactionsList(filtered);
    localStorage.setItem("transactions", JSON.stringify(filtered));
  };

  const calcularEstatisticas = () => {
    const valores = transactionsList.map((item) => parseFloat(item.amount));
    if (valores.length === 0) return { media: 0, mediana: 0, moda: 0 };

    const media = valores.reduce((acc, val) => acc + val, 0) / valores.length;

    const valoresOrdenados = [...valores].sort((a, b) => a - b);
    const meio = Math.floor(valoresOrdenados.length / 2);
    const mediana =
      valoresOrdenados.length % 2 !== 0
        ? valoresOrdenados[meio]
        : (valoresOrdenados[meio - 1] + valoresOrdenados[meio]) / 2;

    const frequencia = {};
    valores.forEach((valor) => {
      frequencia[valor] = (frequencia[valor] || 0) + 1;
    });
    const moda = Object.keys(frequencia).reduce((a, b) =>
      frequencia[a] > frequencia[b] ? a : b
    );

    return { media, mediana, moda };
  };

  const calcularTotais = () => {
    let entradas = 0;
    let saidas = 0;

    transactionsList.forEach((item) => {
      if (item.expense) {
        saidas += parseFloat(item.amount);
      } else {
        entradas += parseFloat(item.amount);
      }
    });

    const total = entradas - saidas;

    return { entradas, saidas, total };
  };

  const { media, mediana, moda } = calcularEstatisticas();
  const { entradas, saidas, total } = calcularTotais();

  return (
    <C.Container>
      <C.Header>
        <C.Cabecalho>
        <C.img src={logo} alt="Logo"/>
          <C.NavLinks>
            <Link to="/home">INÍCIO</Link>
          </C.NavLinks>
        </C.Cabecalho>

        <C.LogoutButton onClick={handleLogout}>Sair</C.LogoutButton>
      </C.Header>

      <C.Line />

      <C.Section>
        <C.TitleBox>Registrar Serviços</C.TitleBox>
        <C.ContainerInterno>
          <C.Registro>
            <C.InputContent>
              <C.Label>Descrição</C.Label>
              <C.Input
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
                placeholder="Ex: Corte, Barba"
              />
            </C.InputContent>
            <C.InputContent>
              <C.Label>Valor</C.Label>
              <C.Input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Ex: 50"
              />
            </C.InputContent>
            <C.RadioGroup>
              <C.Input
                type="radio"
                id="rIncome"
                name="group1"
                onChange={() => setExpense(false)}
                checked={!isExpense}
              />
              <C.Label htmlFor="rIncome">Entrada</C.Label>
              <C.Input
                type="radio"
                id="rExpenses"
                name="group1"
                onChange={() => setExpense(true)}
                checked={isExpense}
              />
              <C.Label htmlFor="rExpenses">Saída</C.Label>
            </C.RadioGroup>
            <C.Button onClick={handleSave}>ADICIONAR</C.Button>
          </C.Registro>

          <C.Resumo>
            <div>
              <h4>Entradas</h4>
              <p style={{ color: "#4caf50" }}>R$ {entradas.toFixed(2)}</p>
            </div>
            <div>
              <h4>Saídas</h4>
              <p style={{ color: "#f44336" }}>R$ {saidas.toFixed(2)}</p>
            </div>
            <div>
              <h4>Total</h4>
              <p>R$ {total.toFixed(2)}</p>
            </div>
          </C.Resumo>

          <C.ListaRegistros>
            {transactionsList.map((item) => (
              <C.ItemRegistro key={item.id} expense={item.expense}>
                <div>
                  <strong>{item.desc}</strong>
                  <small>{item.dateTime}</small>
                </div>
                <div>
                  <span>
                    R$ {parseFloat(item.amount).toFixed(2)} {item.expense ? "(Saída)" : "(Entrada)"}
                  </span>
                  <C.Button onClick={() => handleDelete(item.id)}>Excluir</C.Button>
                </div>
              </C.ItemRegistro>
            ))}
          </C.ListaRegistros>

          <C.Estatisticas>
            <h3>Estatísticas dos Valores</h3>
            <p>Média: R$ {media.toFixed(2)}</p>
            <p>Mediana: R$ {mediana.toFixed(2)}</p>
            <p>Moda: R$ {parseFloat(moda).toFixed(2)}</p>
          </C.Estatisticas>
        </C.ContainerInterno>
      </C.Section>
    </C.Container>
  );
};

export default Home;
