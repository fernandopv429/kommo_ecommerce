import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BotMessageSquare, X, Send, Loader2 } from 'lucide-react';
import { useLocation } from 'react-router-dom';

interface Message {
  id: string;
  sender: 'user' | 'bot';
  text: string;
}

export function FloatingAIButton() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 'initial', sender: 'bot', text: 'Olá! Muito obrigado pelo interesse. Por razões de privacidade e política da nossa empresa, não informamos números de telefone por aqui, apenas recolhemos os dados e um humano do suporte entrará em contato.\n\nPara começarmos, qual o nicho da sua empresa (ex: Clínica, Marketplace)?' }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  if (location.pathname === '/contato') return null;

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = inputValue.trim();
    setInputValue('');
    
    // Add user message immediately
    setMessages(prev => [...prev, { id: Date.now().toString(), sender: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const response = await fetch('https://evogo.a5ecossistema.tech/webhook/196a148e-610c-4ece-b60b-c07a27da519c', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: userMessage }),
      });

      let botReply = 'Mensagem recebida! Nossa equipe entrará em contato com você em breve.';
      
      try {
        const contentType = response.headers.get('content-type');
        if (contentType && contentType.includes('application/json')) {
          const data = await response.json();
          if (data && (data.output || data.response || data.message || data.text)) {
            botReply = data.output || data.response || data.message || data.text;
          }
        } else {
          const textData = await response.text();
          if (textData && textData.trim().length > 0 && textData.trim() !== 'Workflow was started') {
            botReply = textData;
          }
        }
      } catch (e) {
        // Fallback se não conseguir ler a resposta
        console.log("A resposta obtida não pôde ser analisada como JSON/Texto útil.");
      }

      setMessages(prev => [...prev, { id: Date.now().toString(), sender: 'bot', text: botReply }]);
    } catch (error) {
      console.error('Error sending message:', error);
      setMessages(prev => [...prev, { id: Date.now().toString(), sender: 'bot', text: 'Desculpe, ocorreu um erro ao enviar sua mensagem. Tente novamente mais tarde.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col"
            style={{ maxHeight: 'calc(100vh - 120px)' }}
          >
            <div className="bg-[#2B786A] p-4 flex items-center justify-between text-white">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <BotMessageSquare size={18} />
                </div>
                <div className="flex flex-col">
                  <span className="font-bold text-sm bg-clip-text text-transparent bg-gradient-to-r from-green-300 to-white">Nexus IA</span>
                  <span className="text-[10px] text-green-100 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>
                    Online
                  </span>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="text-white/80 hover:text-white transition-colors"
                aria-label="Fechar"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-3 min-h-[300px] max-h-[400px] bg-slate-50">
              {messages.map((message) => (
                <div 
                  key={message.id} 
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[85%] rounded-2xl px-4 py-2 ${
                      message.sender === 'user' 
                        ? 'bg-[#2B786A] text-white rounded-br-sm' 
                        : 'bg-white border border-gray-200 text-gray-800 rounded-bl-sm shadow-sm'
                    }`}
                  >
                    <p className="text-sm whitespace-pre-wrap">{message.text}</p>
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
                    <Loader2 size={16} className="animate-spin text-[#2B786A]" />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSendMessage} className="p-3 bg-white border-t border-gray-100">
              <div className="flex items-center gap-2 relative">
                <input 
                  type="text" 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  placeholder="Digite sua mensagem..."
                  className="w-full text-sm border border-gray-200 rounded-full pl-4 pr-12 py-3 focus:outline-none focus:ring-2 focus:ring-[#2B786A]/20 focus:border-[#2B786A] transition-all bg-gray-50"
                  disabled={isLoading}
                />
                <button 
                  type="submit"
                  disabled={!inputValue.trim() || isLoading}
                  className="absolute right-1 w-10 h-10 bg-[#2B786A] text-white rounded-full flex items-center justify-center hover:bg-[#236357] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <Send size={16} className="ml-1" />
                </button>
              </div>
              <div className="text-center mt-2">
                <span className="text-[10px] text-gray-400">Power by Nexus.ai</span>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0, opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-6 right-6 z-50 bg-[#2B786A] text-white p-4 rounded-full shadow-[0_0_20px_rgba(43,120,106,0.4)] hover:bg-[#236357] hover:scale-110 transition-all flex items-center justify-center group"
        aria-label="Falar com IA"
      >
        <BotMessageSquare size={32} />
        {!isOpen && (
          <span className="absolute right-full mr-4 bg-white text-[#232E35] text-sm font-semibold py-2 px-4 rounded-xl shadow-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-gray-100">
            Falar com a IA
          </span>
        )}
        {!isOpen && (
          <span className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
        )}
      </motion.button>
    </>
  );
}

