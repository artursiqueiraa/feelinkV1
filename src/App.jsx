import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Apresentacao from './apresentacao';
import Chat from './chat';
import Checkin from './checkin';
import ConversaSimulada from './conversaSimulada';
import Historico from './historico';
import Suporte from './suporte';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Apresentacao />} />
        <Route path="/chat" element={<Chat />} />
        <Route path="/checkin" element={<Checkin />} />
        <Route path="/conversa" element={<ConversaSimulada />} />
        <Route path="/historico" element={<Historico />} />
        <Route path="/suporte" element={<Suporte />} />
      </Routes>
    </Router>
  );
}

export default App;