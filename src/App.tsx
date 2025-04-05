import React, { useState } from 'react';
import { Send, BookOpen, Sparkles } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'assistant';
  timestamp: Date;
}

function App() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Olá! Sou um assistente espiritual baseado nos ensinamentos de Allan Kardec. Como posso ajudar você hoje em sua jornada espiritual?",
      sender: 'assistant',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    const assistantResponse: Message = {
      id: messages.length + 2,
      text: "Estou processando sua mensagem com base nos princípios kardecistas. Em breve trarei uma resposta fundamentada na doutrina espírita.",
      sender: 'assistant',
      timestamp: new Date()
    };

    setMessages([...messages, userMessage, assistantResponse]);
    setInputMessage('');
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50">
      <div className="container mx-auto max-w-4xl h-screen p-4 flex flex-col">
        {/* Header */}
        <div className="bg-white rounded-t-lg p-4 shadow-sm border-b">
          <div className="flex items-center gap-3">
            <Sparkles className="text-purple-600 w-8 h-8" />
            <h1 className="text-2xl font-semibold text-gray-800">Kardec Chat</h1>
          </div>
          <p className="text-gray-600 mt-2 text-sm">
            Diálogos espirituais baseados na codificação kardecista
          </p>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-white">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === 'user' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-4 ${
                  message.sender === 'user'
                    ? 'bg-purple-600 text-white'
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                <p>{message.text}</p>
                <span className="text-xs opacity-70 mt-2 block">
                  {message.timestamp.toLocaleTimeString()}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <form onSubmit={handleSendMessage} className="bg-white rounded-b-lg p-4 shadow-sm">
          <div className="flex gap-2">
            <input
              type="text"
              value={inputMessage}
              onChange={(e) => setInputMessage(e.target.value)}
              placeholder="Digite sua mensagem ou dúvida..."
              className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <button
              type="submit"
              className="bg-purple-600 text-white rounded-lg px-4 py-2 hover:bg-purple-700 transition-colors flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              Enviar
            </button>
          </div>
        </form>

        {/* Footer */}
        <div className="mt-4 text-center text-sm text-gray-600 flex items-center justify-center gap-2">
          <BookOpen className="w-4 h-4" />
          <span>Inspirado nos ensinamentos de Allan Kardec</span>
        </div>
      </div>
    </div>
  );
}

export default App;