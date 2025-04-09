import React from "react";

const Cadastro: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <form
        style={{ display: "flex", flexDirection: "column", width: "300px" }}
      >
        <h2>Cadastro</h2>
        <label htmlFor="nome">Nome:</label>
        <input
          type="text"
          id="nome"
          name="nome"
          placeholder="Digite seu nome"
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Digite seu email"
        />

        <label htmlFor="senha">Senha:</label>
        <input
          type="password"
          id="senha"
          name="senha"
          placeholder="Digite sua senha"
        />

        <button type="submit" style={{ marginTop: "20px" }}>
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default Cadastro;
