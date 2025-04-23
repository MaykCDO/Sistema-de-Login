import React, { useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import * as C from "./styles";

const Home = () => {
  const { logout, signout } = useAuth();
  const navigate = useNavigate();

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

  return (
    <C.Container>
      <C.Header>
        <C.Cabecalho>
          <img src="" alt="logo da barbearia" />
          <C.NavLinks>
            <Link to="/home">INÍCIO</Link>
          </C.NavLinks>
        </C.Cabecalho>

        <C.LogoutButton onClick={handleLogout}>Sair</C.LogoutButton>
      </C.Header>

      <C.Line />

      <C.Section>
        <C.TitleBox>Seu perfil</C.TitleBox>
        <C.ContainerInterno>
          <C.Registro>
            <input type="number" placeholder="Registre o valor do serviço" required />
            <button>Registrar</button>
          </C.Registro>
          <C.PerfilPessoal>
            <img src="" alt="foto de perfil" />
            <h2>Nome do Funcionário</h2>
            <C.ValorCorte>
              <p>Valor de hoje: R$ 105,00</p>
            </C.ValorCorte>
          </C.PerfilPessoal>
        </C.ContainerInterno>
      </C.Section>
    </C.Container>
  );
};

export default Home;
