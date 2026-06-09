import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Send, CheckCircle } from 'lucide-react';

interface DiagnosticModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DiagnosticModal({ isOpen, onClose }: DiagnosticModalProps) {
  const [formData, setFormData] = useState({
    nome: '',
    tipo: 'Clínica',
    expectativa: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");

    try {
      await fetch(
        "https://evogo.a5ecossistema.tech/webhook/196a148e-610c-4ece-b60b-c07a27da519c",
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      // Com no-cors a resposta é opaca (status 0), assumimos sucesso se não houver erro de rede
      setIsSuccess(true);
      setFormData({ nome: '', tipo: 'Clínica', expectativa: '' });
    } catch (err) {
      setError("Ocorreu um erro ao enviar. Por favor, tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleClose = () => {
    onClose();
    if (isSuccess) {
      setTimeout(() => setIsSuccess(false), 300);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={handleClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="bg-[#2B786A] p-6 flex items-center justify-between text-white">
              <div>
                <h3 className="font-bold text-lg">Solicitar Diagnóstico</h3>
                <p className="text-sm text-white/80">Preencha os dados abaixo e falaremos com seu negócio.</p>
              </div>
              <button 
                onClick={handleClose}
                className="text-white/80 hover:text-white transition-colors absolute top-6 right-6"
                aria-label="Fechar"
              >
                <X size={24} />
              </button>
            </div>
            
            {isSuccess ? (
              <div className="p-8 flex flex-col items-center text-center gap-4">
                <div className="w-16 h-16 bg-[#2B786A]/10 text-[#2B786A] rounded-full flex items-center justify-center mb-2">
                  <CheckCircle size={32} />
                </div>
                <h4 className="text-xl font-bold text-[#232E35]">Informações Enviadas!</h4>
                <p className="text-[#656D72]">
                  Sua solicitação foi registrada com sucesso. Logo entraremos em contato.
                  <br/><br/>
                  <span className="text-xs text-gray-400">Devido às diretrizes da plataforma, não compartilhamos meios de contato (como WhatsApp) diretamente por esse canal.</span>
                </p>
                <button 
                  onClick={handleClose}
                  className="mt-4 w-full bg-[#2B786A] text-white py-3 rounded-lg font-bold hover:bg-[#236357] transition-colors"
                >
                  Fechar
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-6 flex flex-col gap-5">
                <div>
                  <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">Nome da Empresa / Contato</label>
                  <input 
                    type="text" 
                    id="nome"
                    name="nome"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#2B786A] focus:border-transparent transition-all"
                    placeholder="Ex: Minha Clínica"
                  />
                </div>
                <div>
                  <label htmlFor="tipo" className="block text-sm font-medium text-gray-700 mb-1">Tipo de Negócio</label>
                  <select 
                    id="tipo"
                    name="tipo"
                    value={formData.tipo}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 bg-white focus:outline-none focus:ring-2 focus:ring-[#2B786A] focus:border-transparent transition-all"
                  >
                    <option value="Clínica">Clínica</option>
                    <option value="Marketplace">Marketplace</option>
                    <option value="Outro">Outro</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="expectativa" className="block text-sm font-medium text-gray-700 mb-1">O que espera da nossa solução?</label>
                  <textarea 
                    id="expectativa"
                    name="expectativa"
                    required
                    rows={3}
                    value={formData.expectativa}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-lg px-4 py-2.5 resize-none focus:outline-none focus:ring-2 focus:ring-[#2B786A] focus:border-transparent transition-all"
                    placeholder="Ex: Gostaria de automatizar agendamentos..."
                  ></textarea>
                </div>
                {error && (
                  <div className="p-3 bg-red-50 text-red-600 rounded-lg text-sm font-medium">
                    {error}
                  </div>
                )}
                <button 
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 w-full bg-[#2B786A] text-white py-3 rounded-lg font-bold hover:bg-[#236357] transition-colors flex items-center justify-center gap-2 disabled:opacity-70"
                >
                  {isSubmitting ? "Enviando..." : "Solicitar Diagnóstico"} 
                  {!isSubmitting && <Send size={18} />}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
