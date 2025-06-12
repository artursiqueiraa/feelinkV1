import React, { useState } from 'react';

export default function Chat() {
  const [mensagem, setMensagem] = useState('');
  const [sugestao, setSugestao] = useState('');

  const analisarMensagem = (texto) => {
    if (texto.includes('você nunca me entende')) {
      return 'Que tal tentar: “Sinto que não estamos nos ouvindo. Podemos conversar com mais calma?”';
    }
    if (texto.includes('você só pensa em você')) {
      return 'Tente dizer: “Estou me sentindo deixado de lado. Podemos nos ouvir melhor?”';
    }
    return '';
  };

  const handleSend = () => {
    setSugestao(analisarMensagem(mensagem.toLowerCase()));
  };

  return (
    <div className="p-4">
      <h2>Chat com IA Empática</h2>
      <textarea className="w-full p-2 border" value={mensagem} onChange={(e) => setMensagem(e.target.value)} />
      <button onClick={handleSend} className="mt-2 bg-blue-500 text-white px-4 py-2">Enviar</button>
      {sugestao && <p className="mt-4 text-green-700">{sugestao}</p>}
    </div>
  );
}