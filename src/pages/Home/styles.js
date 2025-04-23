import styled from "styled-components";

export const Container = styled.div`
  font-family: Arial, sans-serif;
  background-color: #000;
  color: #fff;
  min-height: 100vh;
`;

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  background-color: #2c2c2c;
`;

export const Cabecalho = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;

  img {
    height: 50px;
  }
`;

export const NavLinks = styled.nav`
  display: flex;
  gap: 20px;

  a {
    text-decoration: none;
    color: #fff;
    font-weight: bold;

    &:hover {
      color: #ccc;
    }
  }
`;

export const LogoutButton = styled.button`
  background-color: #28a745;
  border: none;
  color: #fff;
  padding: 10px 20px;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #218838;
  }
`;

export const Line = styled.div`
  height: 1px;
  background-color: #444;
  margin: 0;
`;

export const Section = styled.section`
  padding: 40px 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TitleBox = styled.div`
  background-color: #2c2c2c;
  padding: 10px 30px;
  border-radius: 40px;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const ContainerInterno = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

export const Registro = styled.div`
  display: flex;
  gap: 10px;

  input {
    padding: 10px;
    font-size: 16px;
    border-radius: 10px;
    border: none;
    width: 250px;
  }

  button {
    padding: 10px 15px;
    background-color: #777;
    color: #fff;
    border: none;
    border-radius: 10px;
    font-weight: bold;

    &:hover {
      background-color: #999;
    }
  }
`;

export const PerfilPessoal = styled.div`
  background-color: #2c2c2c;
  padding: 30px;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    height: 100px;
    width: 100px;
    object-fit: cover;
    border-radius: 100px;
    margin-bottom: 20px;
  }

  h2 {
    margin-bottom: 15px;
  }
`;

export const ValorCorte = styled.div`
  background-color: #999;
  padding: 12px 20px;
  border-radius: 12px;

  p {
    font-size: 16px;
    font-weight: bold;
    color: #000;
    margin: 0;
  }
`;
