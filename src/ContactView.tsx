import React, { useState } from "react";
import { motion } from "motion/react";
import { Send, CheckCircle } from "lucide-react";

export function ContactView() {
  const [formData, setFormData] = useState({
    nome: "",
    telefone: "",
    desejo: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

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
        },
      );

      // no-cors sempre retorna status 0, assumimos sucesso
      setIsSuccess(true);
      setFormData({ nome: "", telefone: "", desejo: "" });
    } catch (err) {
      setError("Ocorreu um erro ao enviar os dados. Por favor, tente novamente.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-[#fdfbf7]">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block bg-[#2B786A]/10 text-[#2B786A] font-bold tracking-widest text-xs px-4 py-2 rounded-full mb-6">
            CONTATO
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#232E35] mb-4">
            Vamos automatizar?
          </h1>
          <p className="text-xl text-[#656D72]">
            Envie suas informações e conte-nos um pouco sobre o que você deseja automatizar na sua operação.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100"
        >
          {isSuccess ? (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-[#2B786A]/10 text-[#2B786A] rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle size={40} />
              </div>
              <h2 className="text-3xl font-bold text-[#232E35] mb-4">Mensagem Enviada!</h2>
              <p className="text-[#656D72] text-lg">
                Obrigado pelo seu interesse. Nossa equipe recebeu sua solicitação.
              </p>
              <p className="text-sm text-gray-400 mt-4 max-w-sm mx-auto">
                Nota: Por medidas de segurança e política da nossa empresa, não publicamos nossos canais de atendimento (como WhatsApp) de forma aberta. Nós entraremos em contato diretamente com você.
              </p>
              <button
                onClick={() => setIsSuccess(false)}
                className="mt-8 text-[#2B786A] font-semibold hover:underline"
              >
                Enviar nova solicitação
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-[#232E35] mb-2">
                  Nome Completo
                </label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-[#2B786A] focus:ring-1 focus:ring-[#2B786A] outline-none transition-all text-[#232E35]"
                  placeholder="Digite seu nome"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#232E35] mb-2">
                  Telefone / Email
                </label>
                <input
                  type="text"
                  name="telefone"
                  value={formData.telefone}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-[#2B786A] focus:ring-1 focus:ring-[#2B786A] outline-none transition-all text-[#232E35]"
                  placeholder="Seu contato"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-[#232E35] mb-2">
                  O que desejaria automatizar?
                </label>
                <textarea
                  name="desejo"
                  value={formData.desejo}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-5 py-4 rounded-xl border border-gray-200 focus:border-[#2B786A] focus:ring-1 focus:ring-[#2B786A] outline-none transition-all text-[#232E35] resize-none"
                  placeholder="Ex: Gostaria de automatizar o agendamento de consultas..."
                />
              </div>

              {error && (
                <div className="p-4 bg-red-50 text-red-600 rounded-xl text-sm font-medium">
                  {error}
                </div>
              )}

              <div className="flex flex-col gap-4">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#2B786A] text-white font-bold px-8 py-4 rounded-xl hover:bg-[#236357] transition-colors disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? "Enviando..." : "Enviar Solicitação"}
                  {!isSubmitting && <Send size={20} />}
                </button>
                <p className="text-xs text-center text-gray-400 mt-2">
                  Por medidas de segurança e política da Nexus, não disponibilizamos links diretos de WhatsApp e contato aqui. Por favor, preencha o formulário e um especialista da nossa equipe lhe enviará uma mensagem.
                </p>
              </div>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}
