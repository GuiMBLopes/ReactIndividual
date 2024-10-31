import React, { useState } from "react";
import { renderToString } from "react-dom/server";
import "../Imc/imc.css";

export default function index() {
  const [peso, setPeso] = useState(0);
  const [altura, setAltura] = useState(0);

  function receber(e) {
    e.preventDefault();
  }

  function calcular() {
    var resultado = peso / (altura * altura);
    resultado = parseFloat(resultado.toFixed(2));

    if (peso == 0 && altura != 0) {
      return `Preencha o peso`;
    }
    if (altura == 0 && peso != 0) {
      return `Preencha a altura`;
    }
    if(altura == 0 && peso == 0){
      return null
    }
    else{
      if (resultado < 18.5) {
        return `Resultado: Abaixo do Peso - ${resultado}`;
      }
      if (resultado > 18.5 && resultado < 24.99) {
        return `Resultado: Peso ideal - ${resultado}`;
      }
      if (resultado >= 25 && resultado < 29.99) {
        return `Resultado: Sobrepeso - ${resultado}`;
      }
      if (resultado > 30 && resultado < 34.99) {
        return `Resultado: Obesidade 1 - ${resultado}`;
      }
      if (resultado > 35 && resultado < 39.99) {
        return `Resultado: Obesidade 2 - ${resultado}`;
      }
      if (resultado > 40) {
        return `Resultado: Obesidade Extrema - ${resultado}`;
      } else {
        return null;
      }
    }
   
  }

  return (
    <div className="corpo">
      <div className="titulo">
      <h1>Vamos calcular seu IMC</h1>
        </div>
      <div className="container-forms">
        <h2>Preencha os dados</h2>
        <form onSubmit={calcular}>
          <div className="peso-input">
            <label>Peso: </label>
            <input
              type="number"
              placeholder="em kg"
              name="peso"
              onChange={(e) => setPeso(e.target.value)}
            />
          </div>
          <div className="altura-input">
            <label>Altura: </label>
            <input
              type="number"
              placeholder="em cm"
              name="altura"
              onChange={(e) => setAltura(e.target.value / 100)}
            />
          </div>
        </form>
      </div>
      <h1>{calcular()}</h1>
    </div>
  );
}
