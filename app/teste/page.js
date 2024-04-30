"use client";
import { useState } from "react";

export default function Teste() {
  const [valor, setValor] = useState(0);

  const handleIncreaseValor = () => {
    setValor(valor + 1);
  };

  const handleDecreaseValor = () => {
    setValor(valor - 1);
  };

  return (
    <div>
      <p>{valor}</p>
      <div>
        <Botao
          nome="adicionar +"
          onClick={handleIncreaseValor}
          type="primario"
        />
        <Botao nome="diminuir -" onClick={handleDecreaseValor} />
      </div>
    </div>
  );
}

const Botao = ({ onClick, nome, type }) => {
  return (
    <button
      style={{
        marginRight: "10px",
        background: type === "primario" ? "blue" : "red",
      }}
      onClick={onClick}
    >
      {nome}
    </button>
  );
};
