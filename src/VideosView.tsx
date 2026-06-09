import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageCircle } from "lucide-react";
import { Link } from "react-router-dom";

export function VideosView() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const pacotes = [
    {
      title: "Vídeo Avulso",
      desc: "Criativo direto, focado em captar a atenção nos primeiros 3 segundos e converter visualizações em cliques e agendamentos.",
      price: "R$ 200 por vídeo",
      color: "bg-[#E35A4B]",
    },
    {
      title: "Pacote Mensal",
      desc: "1 criativo (vídeo ou imagem) por dia garantindo conteúdos sempre atualizados para manter seus anúncios rodando em alta performance.",
      price: "R$ 500 ao mês",
      color: "bg-[#2B786A]",
    },
    {
      title: "Conteúdo Institucional",
      desc: "Vídeos para o seu site ou perfil, transmitindo autoridade, tecnologia e o lado humano do seu atendimento.",
      price: "Sob consulta",
      color: "bg-[#F2A641]",
    },
  ];

  const videos = [
    "https://db.nexusdevhub.com/api/files/pbc_3280207267/19e30ydnzn0c0a5/nexus_o_seu_departamento_de_tecnologia_1080p_caption_9utc9sy723.mp4",
    "https://db.nexusdevhub.com/api/files/pbc_3280207267/p4gvhpj6fucdqa1/gest_o_de_elite_pilares_de_dados_1080p_caption_hnsdo03oh4.mp4",
    "https://db.nexusdevhub.com/api/files/pbc_3280207267/1ko35pg01p4782s/nexus_diagn_stico_de_opera_o_cl_nica_1080p_caption_wh70nvt0wi.mp4",
    "https://db.nexusdevhub.com/api/files/pbc_3280207267/13rw09dm86r22mp/nexus_automa_o_cl_nica_ia_1080p_caption_9pgoit9uj0.mp4",
    "https://db.nexusdevhub.com/api/files/pbc_3280207267/7a7wamigkgjc5gt/engenharia_de_processos_o_segredo_da_escala_1080p_caption_ru92gff5sp.mp4"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % pacotes.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [pacotes.length]);

  useEffect(() => {
    // Only auto-play carousel if the user hasn't interacted, but for videos it might interupt watching.
    // Let's not auto-rotate videos so the user can watch them.
  }, []);

  return (
    <div className="pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <div className="inline-block bg-[#2B786A]/10 text-[#2B786A] font-bold tracking-widest text-xs px-4 py-2 rounded-full mb-6">
          SERVIÇOS DE VÍDEO
        </div>
        <h1 className="text-4xl md:text-6xl font-bold text-[#232E35] mb-6">
          Criativos que convertem.
        </h1>
        <p className="text-xl text-[#656D72] max-w-2xl mx-auto mb-8">
          Potencialize as vendas do seu negócio e divulgue seus produtos com
          vídeos focados em alta conversão para Ads e redes sociais.
        </p>
        <div className="flex justify-center">
          <Link
            to="/contato"
            className="inline-flex items-center justify-center space-x-2 bg-[#2B786A] text-white px-8 py-4 rounded-full font-bold hover:bg-[#236357] transition-all hover:scale-105 shadow-lg shadow-[#2B786A]/20"
          >
            <MessageCircle size={20} />
            <span>Falar com a Equipe</span>
          </Link>
        </div>
      </motion.div>

      <div className="hidden md:grid md:grid-cols-3 gap-8 mb-24">
        {pacotes.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={`bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-shadow flex flex-col`}
          >
            <div className="p-8 flex-1 flex flex-col">
              <div className={`w-3 h-3 rounded-full ${item.color} mb-6`}></div>
              <h3 className="text-2xl font-bold text-[#232E35] mb-4">
                {item.title}
              </h3>
              <p className="text-[#656D72] mb-8 flex-1">{item.desc}</p>
              <div className="text-sm font-semibold text-[#232E35]">
                {item.price}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile View */}
      <div className="md:hidden relative min-h-[350px] w-full mb-24">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className={`absolute inset-0 bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm flex flex-col`}
          >
            <div className="p-8 flex-1 flex flex-col h-full">
              <div className={`w-3 h-3 rounded-full ${pacotes[currentIndex].color} mb-6`}></div>
              <h3 className="text-2xl font-bold text-[#232E35] mb-4">
                {pacotes[currentIndex].title}
              </h3>
              <p className="text-[#656D72] mb-8 flex-1">{pacotes[currentIndex].desc}</p>
              <div className="text-sm font-semibold text-[#232E35]">
                {pacotes[currentIndex].price}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute -bottom-8 left-0 right-0 flex justify-center gap-2 z-20">
          {pacotes.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Ir para pacote ${idx + 1}`}
              className={`h-2 rounded-full transition-all ${idx === currentIndex ? 'w-8 bg-[#2B786A]' : 'w-2 bg-gray-300'}`}
            />
          ))}
        </div>
      </div>

      <div className="mb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#232E35] mb-4">
            Galeria de Projetos
          </h2>
          <p className="text-lg text-[#656D72]">
            Alguns dos nossos trabalhos recentes para você entender o que
            fazemos.
          </p>
        </div>

        <div className="hidden md:flex flex-wrap justify-center gap-8 max-w-7xl mx-auto px-4">
          {videos.map((vid, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              className="bg-black rounded-[2.5rem] p-3 shadow-2xl border-4 border-gray-100 relative max-w-[320px] mx-auto w-full"
            >
              {/* Phone Notch/Dynamic Island mockup */}
              <div className="absolute top-0 inset-x-0 h-7 flex justify-center z-20">
                <div className="w-24 h-6 bg-black rounded-b-3xl"></div>
              </div>

              <video
                src={vid}
                controls
                controlsList="nodownload"
                playsInline
                className="w-full h-auto aspect-[9/16] object-cover rounded-[2rem] bg-gray-900"
              />
            </motion.div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="md:hidden relative w-full flex flex-col items-center mt-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentVideoIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="bg-black rounded-[2.5rem] p-3 shadow-2xl border-4 border-gray-100 relative max-w-[320px] w-full"
            >
              {/* Phone Notch/Dynamic Island mockup */}
              <div className="absolute top-0 inset-x-0 h-7 flex justify-center z-20">
                <div className="w-24 h-6 bg-black rounded-b-3xl"></div>
              </div>

              <video
                src={videos[currentVideoIndex]}
                controls
                controlsList="nodownload"
                playsInline
                className="w-full h-auto aspect-[9/16] object-cover rounded-[2rem] bg-gray-900"
              />
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-2 z-20 mt-8">
            {videos.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentVideoIndex(idx)}
                aria-label={`Ir para vídeo ${idx + 1}`}
                className={`h-2 rounded-full transition-all ${idx === currentVideoIndex ? 'w-8 bg-[#2B786A]' : 'w-2 bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className="bg-[#2B786A] text-white rounded-[3rem] p-12 text-center"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Pronto para aumentar seu alcance?
        </h2>
        <p className="text-white/80 max-w-xl mx-auto mb-8">
          Nossa equipe cuida de tudo: desde o roteiro baseado em copy de
          conversão até a edição dinâmica voltada para engajamento rápido.
        </p>
        <Link 
          to="/contato"
          className="inline-block bg-white text-[#2B786A] font-bold px-8 py-4 rounded-full hover:bg-gray-50 transition-colors"
        >
          Solicitar Orçamento de Vídeo
        </Link>
      </motion.div>
    </div>
  );
}
