import React, { useState } from 'react';
import './App.css';

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setIMC] = useState(0);
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = () => {
    if (altura === '' || peso === '') {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const alturaMetros = altura / 100;
    const imcResultado = peso / (alturaMetros * alturaMetros);
    setIMC(imcResultado);

    let classificacaoResultado = '';

    if (imcResultado < 18.5) {
      classificacaoResultado = 'Magreza';
    } else if (imcResultado < 24.9) {
      classificacaoResultado = 'Normal';
    } else if (imcResultado < 29.9) {
      classificacaoResultado = 'Sobrepeso';
    } else if (imcResultado < 34.9) {
      classificacaoResultado = 'Obesidade Grau I';
    } else if (imcResultado < 39.9) {
      classificacaoResultado = 'Obesidade Grau II';
    } else {
      classificacaoResultado = 'Obesidade Grau III';
    }

    setClassificacao(classificacaoResultado);
  };

  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>
      <div>
        <label>Altura (cm):</label>
        <input type="number" value={altura} onChange={(e) => setAltura(e.target.value)} />
      </div>
      <div>
        <label>Peso (kg):</label>
        <input type="number" value={peso} onChange={(e) => setPeso(e.target.value)} />
      </div>
      <button onClick={calcularIMC}>Calcular</button>
      <div>
        <p>IMC: {imc.toFixed(2)}</p>
        <p>Classificação: {classificacao}</p>
      </div>
    </div>
  );
}

export default App;

