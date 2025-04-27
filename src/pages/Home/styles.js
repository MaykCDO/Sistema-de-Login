import styled from "styled-components";

export const Container = styled.div`
  font-family: 'Poppins', sans-serif;
  background-color: #111;
  color: #eee;
  min-height: 100vh;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 40px;
  background-color: #1c1c1c;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.7);
`;

export const Cabecalho = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;

  img {
    height: 50px;
    width: auto;
  }
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 20px;

  a {
    text-decoration: none;
    color: #eee;
    font-weight: 600;
    font-size: 16px;
    transition: color 0.2s ease;

    &:hover {
      color: #4caf50;
    }
  }
`;

export const LogoutButton = styled.button`
  background-color: #4caf50;
  border: none;
  color: #fff;
  padding: 10px 25px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #43a047;
    transform: scale(1.05);
  }
`;

export const Line = styled.div`
  height: 2px;
  background: linear-gradient(to right, #4caf50, #81c784);
  margin: 0;
`;

export const Section = styled.section`
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleBox = styled.div`
  background-color: #222;
  padding: 12px 30px;
  border-radius: 30px;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
  box-shadow: 0 0 10px rgba(76, 175, 80, 0.4);
`;

export const ContainerInterno = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  width: 100%;
  max-width: 800px;
`;

export const Registro = styled.div`
  background-color: #1c1c1c;
  padding: 30px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 20px;
`;

export const InputContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;

  input {
    padding: 10px;
    font-size: 16px;
    border-radius: 10px;
    border: 1px solid #444;
    background-color: #222;
    color: #eee;
    width: 100%;

    &:focus {
      outline: none;
      border-color: #4caf50;
      background-color: #2a2a2a;
    }
  }
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
`;

export const RadioGroup = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;

  input[type="radio"] {
    accent-color: #4caf50;
  }
`;

export const Input = styled.input``;

export const Button = styled.button`
  background-color: #4caf50;
  border: none;
  color: #fff;
  padding: 12px 30px;
  border-radius: 10px;
  font-weight: 600;
  font-size: 16px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #43a047;
    transform: scale(1.05);
  }
`;

export const ListaRegistros = styled.div`
  margin-top: 20px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ItemRegistro = styled.div`
  background-color: #1e1e1e;
  padding: 15px 20px;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-left: 5px solid ${(props) => (props.expense ? "#f44336" : "#4caf50")};
  transition: background-color 0.2s;

  span {
    font-size: 16px;
    font-weight: 600;
  }

  &:hover {
    background-color: #2a2a2a;
  }
`;

export const Estatisticas = styled.div`
  margin-top: 30px;
  background-color: #1c1c1c;
  padding: 20px;
  border-radius: 20px;
  width: 100%;
  max-width: 500px;
  text-align: center;
  box-shadow: 0 0 10px rgba(76, 175, 80, 0.4);

  h3 {
    margin-bottom: 20px;
    font-size: 20px;
    color: #4caf50;
  }

  p {
    margin: 5px 0;
    font-size: 16px;
    font-weight: 500;
  }
`;

// Adicionado agora:
export const DeleteButton = styled.button`
  background-color: #f44336;
  border: none;
  color: #fff;
  padding: 8px 16px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #e53935;
    transform: scale(1.05);
  }
`
export const Resumo = styled.div`
  background-color: #1c1c1c;
  padding: 20px;
  border-radius: 20px;
  width: 100%;
  max-width: 500px;
  margin-bottom: 30px;
  display: flex;
  justify-content: space-around;
  text-align: center;
  box-shadow: 0 0 10px rgba(76, 175, 80, 0.4);

  div {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  h4 {
    font-size: 18px;
    color: #ccc;
  }

  p {
    font-size: 20px;
    font-weight: bold;
  }
`;

