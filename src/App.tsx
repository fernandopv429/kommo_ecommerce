import React, { useState, useEffect, createContext, useContext } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation,
} from "react-router-dom";

// Modal Context
export const DiagnosticModalContext = createContext<{
  openModal: () => void;
}>({ openModal: () => {} });

export function useDiagnosticModal() {
  return useContext(DiagnosticModalContext);
}
import {
  Phone,
  Bot,
  Calendar,
  CreditCard,
  ArrowRight,
  PlaySquare,
  Play,
  ShoppingCart,
  TrendingUp,
  Package,
  MessageCircle,
  BarChart3,
  Users,
  Zap,
  Search,
  Menu,
  X,
  Gem,
  RefreshCw,
  ShieldCheck,
  Video,
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { EcommerceView } from "./EcommerceView";
import { VideosView } from "./VideosView";
import { ContactView } from "./ContactView";
import { PrivacyPolicyView } from "./PrivacyPolicyView";
import { FloatingAIButton } from "./FloatingAIButton";

import { DiagnosticModal } from "./DiagnosticModal";

function Home() {
  return (
    <>
      <Hero />
      <VideoSection />
      <Ecosystem />
      <Services />
      <Experience />
      <LatestWorks />
      <Testimonials />
    </>
  );
}

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <DiagnosticModalContext.Provider value={{ openModal: () => setIsModalOpen(true) }}>
      <Router>
        <div className="min-h-screen bg-[#fdfbf7] selection:bg-[#2B786A] selection:text-white overflow-x-hidden">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/ecommerce" element={<EcommerceView />} />
              <Route path="/videos" element={<VideosView />} />
              <Route path="/contato" element={<ContactView />} />
              <Route path="/politica-de-privacidade" element={<PrivacyPolicyView />} />
            </Routes>
          </main>
          <Footer />
          <FloatingAIButton />
          <DiagnosticModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
      </Router>
    </DiagnosticModalContext.Provider>
  );
}

function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { openModal } = useDiagnosticModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  if (location.pathname === "/contato" || location.pathname === "/politica-de-privacidade") return null;

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? "bg-white/90 backdrop-blur-md shadow-sm py-4" : "bg-transparent py-8"}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-bold tracking-tight text-[#232E35]"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Nexus<span className="text-[#2B786A]">.ai</span>
          </Link>

          <button
            className="md:hidden text-[#232E35] focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-[#656D72]">
            {location.pathname === "/" ? (
              <>
                <a
                  href="#solucoes"
                  className="px-5 py-2 border border-[#656D72] rounded-full text-[#232E35] hover:bg-[#2B786A] hover:text-white hover:border-[#2B786A] transition-all"
                >
                  SOLUÇÕES
                </a>
                <a
                  href="#recursos"
                  className="hover:text-[#232E35] transition-colors"
                >
                  RECURSOS
                </a>
                <a
                  href="#depoimentos"
                  className="hover:text-[#232E35] transition-colors"
                >
                  DEPOIMENTOS
                </a>
              </>
            ) : null}
            <Link
              to="/videos"
              className={`hover:text-[#232E35] transition-colors ${location.pathname === "/videos" ? "text-[#2B786A] font-bold" : ""}`}
            >
              CRIATIVOS (VÍDEOS)
            </Link>
            <button
              onClick={() => openModal()}
              className="bg-[#2B786A] text-white px-5 py-2.5 rounded-full font-bold hover:bg-[#236357] transition-colors ml-4 flex items-center gap-2"
            >
              <MessageCircle size={18} />
              Solicitar Diagnóstico
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[72px] z-40 bg-white/95 backdrop-blur-md md:hidden overflow-y-auto"
          >
            <div className="flex flex-col items-center space-y-2 pt-8 pb-12 px-6 text-lg font-medium text-[#232E35]">
              {location.pathname === "/" ? (
                <>
                  <a
                    href="#solucoes"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full text-center py-4 hover:text-[#2B786A] transition-colors rounded-xl active:bg-gray-50"
                  >
                    SOLUÇÕES
                  </a>
                  <a
                    href="#recursos"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full text-center py-4 hover:text-[#2B786A] transition-colors rounded-xl active:bg-gray-50"
                  >
                    RECURSOS
                  </a>
                  <a
                    href="#depoimentos"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="w-full text-center py-4 hover:text-[#2B786A] transition-colors rounded-xl active:bg-gray-50"
                  >
                    DEPOIMENTOS
                  </a>
                </>
              ) : null}
              <Link
                to="/videos"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`w-full text-center py-4 hover:text-[#2B786A] transition-colors rounded-xl active:bg-gray-50 ${location.pathname === "/videos" ? "text-[#2B786A] font-bold" : ""}`}
              >
                CRIATIVOS (VÍDEOS)
              </Link>
              <div className="w-full pt-8 flex justify-center border-t border-gray-100 mt-4">
                <button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    openModal();
                  }}
                  className="bg-[#2B786A] w-full max-w-sm text-white px-6 py-4 rounded-full font-bold shadow-lg flex items-center justify-center gap-2 active:scale-95 transition-transform"
                >
                  <MessageCircle size={24} />
                  Solicitar Diagnóstico
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Hero() {
  const { openModal } = useDiagnosticModal();
  return (
    <section className="max-w-7xl mx-auto px-6 pt-32 pb-12 md:pb-24 md:pt-40 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="space-y-8 z-10"
      >
        <h1 className="text-5xl md:text-7xl font-bold text-[#232E35] leading-[1.1] tracking-tight">
          Automação e IA
          <br />
          para sua <span className="text-[#2B786A]">Clínica</span>
        </h1>
        <p className="text-lg text-[#656D72] max-w-md leading-relaxed">
          Seu novo Agente de IA faz tudo: desde a qualificação e agendamento,
          até o follow-up de orçamentos e cobranças automáticas. Entregamos um
          CRM completo e 1 criativo por dia para seus anúncios.
        </p>
        <div className="pt-4 flex flex-col sm:flex-row gap-4">
          <Link
            to="/videos"
            className="inline-flex items-center justify-center space-x-2 bg-[#2B786A] text-white px-8 py-4 rounded-full font-bold hover:bg-[#236357] transition-all hover:scale-105 shadow-lg shadow-[#2B786A]/20"
          >
            <PlaySquare size={20} />
            <span>Ver Estilos de Vídeo</span>
          </Link>
          <button
            onClick={() => openModal()}
            className="inline-flex items-center justify-center space-x-2 bg-white text-[#25D366] border-2 border-gray-100 px-8 py-4 rounded-full font-bold hover:bg-gray-50 transition-all hover:border-gray-200"
          >
            <MessageCircle size={20} />
            <span>Solicitar Diagnóstico</span>
          </button>
        </div>
        <div className="pt-8 flex items-baseline space-x-6">
          <div className="flex items-baseline space-x-2">
            <span className="text-5xl font-bold text-[#232E35]">10x</span>
            <span className="text-sm font-medium text-[#656D72] leading-tight max-w-[80px]">
              MAIS
              <br />
              AGENDAMENTOS
            </span>
          </div>
          <div className="flex items-baseline space-x-2 border-l border-gray-300 pl-6">
            <span className="text-5xl font-bold text-[#232E35]">24h</span>
            <span className="text-sm font-medium text-[#656D72] leading-tight max-w-[80px]">
              ATENDIMENTO
              <br />
              INTEGRAL
            </span>
          </div>
        </div>
      </motion.div>

      <div className="relative flex justify-center md:justify-end items-center mt-12 md:mt-0">
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="absolute top-0 right-10 md:right-32 w-1/2 max-w-[200px] text-right xl:translate-x-12 xl:-translate-y-12 z-20"
        >
          <p className="text-[#656D72] text-sm md:text-base leading-relaxed font-semibold">
            Esqueça as faltas e os leads perdidos.
          </p>
        </motion.div>

        {/* Organic background shape masking / effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="relative w-full max-w-[650px] z-10 flex items-center justify-center mt-12 md:mt-0"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-[#2B786A] to-[#43a190] rounded-[40px] transform rotate-2 scale-90 opacity-10 backdrop-blur-3xl transition-transform duration-700 ease-in-out hover:scale-95 hover:rotate-6"></div>
          {/* Mockup do CRM */}
          <img
            src="/nexus-mockup.png"
            alt="Nexus CRM Mockup"
            className="relative z-10 w-[110%] max-w-none md:w-[120%] h-auto object-contain drop-shadow-2xl transform hover:-translate-y-2 transition-transform duration-500"
            draggable={false}
          />

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
            className="absolute -left-2 md:-left-12 -bottom-4 md:-bottom-6 z-20 bg-[#fdfbf7] p-3 md:p-5 rounded-2xl md:rounded-3xl shadow-lg max-w-[140px] md:max-w-[200px] text-center border-[3px] md:border-4 border-white flex flex-col items-center"
          >
            <div className="w-8 h-8 md:w-12 md:h-12 mb-2 md:mb-3 bg-[#E35A4B] text-white flex items-center justify-center rounded-full">
              <Phone size={16} className="md:w-5 md:h-5 w-4 h-4" />
            </div>
            <div className="text-[9px] md:text-[11px] font-bold tracking-widest text-[#232E35] mb-1">
              AGENDAMENTO
            </div>
            <div className="text-[10px] md:text-[13px] font-semibold text-[#2B786A] leading-tight">
              AUTOMÁTICO
              <br />
              POR PROFISSIONAL
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function VideoSection() {
  return (
    <section className="bg-white py-24 border-t border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left: Hook & Copy */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div className="inline-block bg-[#E35A4B]/10 text-[#E35A4B] font-bold tracking-widest text-xs px-4 py-2 rounded-full">
            CLINIC INSIGHT
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#232E35] leading-tight">
            Você sabia que sua clínica pode estar deixando dinheiro na mesa?
          </h2>
          <div className="space-y-4 text-lg text-[#656D72] leading-relaxed">
            <p>
              Uma clínica média perde <strong>até 30% do faturamento</strong>{" "}
              simplesmente porque as mensagens do WhatsApp acumulam ou o
              paciente esquece da consulta.
            </p>
            <p>
              Leads que esfriam no WhatsApp e faltas sem aviso são ralos de
              dinheiro escondidos na sua operação, enquanto a sua secretária não
              dá conta de responder todo mundo a tempo.
            </p>
          </div>
          <div className="pt-4">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 bg-[#2B786A]/10 rounded-full flex items-center justify-center text-[#2B786A]">
                <Play fill="currentColor" size={24} className="ml-1" />
              </div>
              <div>
                <div className="font-bold text-[#232E35]">Assista ao Vídeo</div>
                <div className="text-sm text-[#656D72]">
                  Entenda como o Nexus resolve isso
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right: Video Player */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mx-auto md:ml-auto w-full max-w-[360px]"
        >
          {/* Decorative Elements */}
          <div className="absolute -inset-4 bg-gradient-to-r from-[#2B786A]/20 to-[#E35A4B]/20 blur-3xl -z-10 rounded-full"></div>

          <div className="relative bg-black rounded-[3rem] p-3 shadow-2xl border-4 border-gray-100">
            {/* Phone Notch/Dynamic Island mockup */}
            <div className="absolute top-0 inset-x-0 h-7 flex justify-center z-20">
              <div className="w-32 h-6 bg-black rounded-b-3xl"></div>
            </div>

            <iframe
              className="w-full h-auto aspect-[9/16] object-cover rounded-[2.5rem] bg-gray-900"
              src="https://www.youtube.com/embed/BE_HWS8E_vY"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Ecosystem() {
  return (
    <section className="bg-[#fdfbf7] py-24 border-b border-gray-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold text-[#232E35] mb-4"
        >
          Ecossistema Estratégico 360°
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-[#656D72] max-w-2xl mx-auto mb-16 px-4"
        >
          Do primeiro contato à recuperação de pagamentos. Integramos Conteúdo, IA, Gestão de Leads e Cobrança em uma única central inteligente.
        </motion.p>

        <motion.div
           initial={{ opacity: 0, scale: 0.95, y: 20 }}
           whileInView={{ opacity: 1, scale: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 0.8, ease: "easeOut" }}
           className="relative mx-auto max-w-4xl px-4 flex justify-center"
        >
           <img 
              src="/nexus_ecosystem_option_glass.png" 
              alt="Ecossistema Estratégico 360 graus: Ads/Conteúdo, IA Leads/Agendamento, Acompanhamento Estratégico, Cobrança, Posicionamento de marca"
              className="w-full h-auto max-w-[800px] mix-blend-multiply object-contain hover:scale-[1.03] transition-transform duration-500 cursor-pointer"
           />
        </motion.div>
      </div>
    </section>
  );
}

function Services() {
  const services = [
    {
      title: "Atendimento com IA",
      projects: "24/7 Ativo",
      icon: <Bot size={20} className="text-white" />,
      color: "bg-[#2B786A]",
    },
    {
      title: "Agendamento Inteligente",
      projects: "Por Profissional",
      icon: <Calendar size={20} className="text-white" />,
      color: "bg-[#F2A641]",
    },
    {
      title: "Cobrança Automática",
      projects: "Inadimplência Zero",
      icon: <CreditCard size={20} className="text-white" />,
      color: "bg-[#E35A4B]",
    },
  ];

  return (
    <section id="solucoes" className="bg-white py-24 mt-20 relative">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
        {/* Left: Cards Stack */}
        <div className="space-y-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`bg-white p-6 rounded-2xl flex items-center space-x-6 hover:-translate-y-1 transition-transform cursor-pointer border border-gray-100 ${index === 1 ? "shadow-xl shadow-gray-100/80 scale-105 z-10 relative" : "shadow-sm"}`}
            >
              <div
                className={`w-14 h-14 rounded-full flex items-center justify-center ${service.color}`}
              >
                {service.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-[#232E35] mb-1">
                  {service.title}
                </h3>
                <p className="text-sm text-[#656D72]">{service.projects}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="space-y-8"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-[#232E35] leading-tight">
            Um Agente IA que faz absolutamente tudo.
          </h2>
          <div className="space-y-6 text-[#656D72] leading-relaxed mt-8">
            <p className="text-lg">
              Deixe o trabalho duro com a máquina. Nosso{" "}
              <strong className="text-[#2B786A]">
                Agente de Inteligência Artificial
              </strong>{" "}
              atua como seu recepcionista e vendedor 24 horas por dia.
            </p>
            <ul className="space-y-3 font-medium">
              <li className="flex items-center gap-2">
                <ArrowRight size={16} className="text-[#E35A4B]" />{" "}
                <strong>Qualificação de Leads:</strong> Filtra interessados e
                entende a necessidade.
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight size={16} className="text-[#E35A4B]" />{" "}
                <strong>Agendamento Inteligente:</strong> Marca a consulta na
                agenda do profissional certo.
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight size={16} className="text-[#E35A4B]" />{" "}
                <strong>Follow-up Implacável:</strong> Vai atrás de orçamentos
                não fechados e reativa pacientes.
              </li>
              <li className="flex items-center gap-2">
                <ArrowRight size={16} className="text-[#E35A4B]" />{" "}
                <strong>Cobranças:</strong> Cobra mensalidades e inadimplências
                de forma humanizada.
              </li>
            </ul>
            <p className="text-lg">
              Tudo isso sem que sua equipe precise mover um dedo, consolidado em
              um CRM exclusivo.
            </p>
          </div>

          <div className="flex items-center space-x-12 pt-8">
            <div>
              <div className="text-4xl font-bold text-[#232E35] mb-2">+40%</div>
              <div className="text-sm font-medium text-[#656D72]">
                Taxa de Conversão
              </div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#232E35] mb-2">-80%</div>
              <div className="text-sm font-medium text-[#656D72]">
                Tempo em Tarefas Manuais
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Experience() {
  const experiences = [
    {
      period: "Gestão Descomplicada",
      company: "Hub Central",
      title: "CRM e Pipeline de Vendas",
      description:
        "Visualize facilmente em qual etapa cada paciente ou lead está. Mova cards, agende retornos e saiba exatamente o faturamento projetado.",
      dotColor: "bg-[#2B786A]",
    },
    {
      period: "Agente IA na Prática",
      company: "Atuação 360º",
      title: "Qualifica, Agenda, Acompanha e Cobra",
      description:
        "Esqueça perder tempo. A IA atende os pacientes, os qualifica, gerencia agendamentos por profissional, dispara follow-ups e faz cobranças ativas sem esquecer de ninguém.",
      dotColor: "bg-[#E35A4B]",
    },
    {
      period: "Bônus Exclusivo",
      company: "Tráfego Pago",
      title: "1 Criativo Novo por Dia",
      description:
        "Nós também entregamos um criativo (vídeo ou imagem) por dia focado no seu negócio, pronto para você usar em anúncios e redes sociais.",
      dotColor: "bg-[#F2A641]",
    },
  ];

  return (
    <section id="recursos" className="bg-[#fcfbf7] py-24">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-[#232E35] mb-16 text-center">
          Nosso Pacote de Automação
        </h2>

        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-[5.5rem] md:before:mx-auto md:before:left-0 md:before:right-0 before:h-full before:w-0.5 before:-translate-x-px md:before:translate-x-0 before:bg-gray-200">
          {experiences.map((exp, index) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              key={index}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              {/* Timeline marker */}
              <div
                className={`flex items-center justify-center w-4 h-4 rounded-full border-2 border-white ${exp.dotColor} shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 absolute left-[5.5rem] md:left-1/2 -translate-x-1/2 md:translate-x-0 z-10`}
              ></div>

              {/* Details (Left/Right dependent on screen and parity) */}
              <div className="w-[calc(100%-7rem)] md:w-[calc(50%-2.5rem)] text-left md:text-right md:group-odd:text-left ml-auto md:ml-0 md:group-odd:pl-0 md:group-even:pr-0 pb-6 md:pb-0">
                <div className="flex flex-col md:group-even:items-end md:group-odd:items-start mb-2">
                  <h4 className="text-xl font-bold text-[#232E35]">
                    {exp.title}
                  </h4>
                  <div className="flex flex-wrap items-center gap-2 mt-1 md:hidden">
                    <span className="text-sm font-semibold text-[#232E35] block">
                      {exp.company}
                    </span>
                    <span className="text-xs text-[#656D72] block border-l border-gray-300 pl-2">
                      {exp.period}
                    </span>
                  </div>
                </div>
                <p className="text-[#656D72] text-sm leading-relaxed">
                  {exp.description}
                </p>
              </div>

              {/* Company & Date (Opposite side on Desktop) */}
              <div className="hidden md:block w-[calc(50%-2.5rem)] text-right md:group-odd:text-right md:group-even:text-left px-4">
                <h4 className="text-lg font-semibold text-[#232E35]">
                  {exp.company}
                </h4>
                <p className="text-sm text-[#656D72] mt-1">{exp.period}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LatestWorks() {
  const { openModal } = useDiagnosticModal();
  const [currentIndex, setCurrentIndex] = useState(0);

  const works = [
    {
      title: "Visão 360",
      subtitle: "Dashboard Completo",
      image: "/nexus-mockup.png",
      color: "bg-[#FAD9A1]",
      textColor: "text-[#D98A2B]",
      link: "/",
    },
    {
      title: "Omnichannel",
      subtitle: "WhatsApp com IA",
      image: "/nexus_chats_tab_mockup.png",
      color: "bg-[#2B786A]",
      textColor: "text-white",
      link: "/",
    },
    {
      title: "Bônus",
      subtitle: "Criativos para Ads",
      image: "/video_ads_promo.png",
      color: "bg-[#E35A4B]",
      textColor: "text-white",
      link: "/videos",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % works.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [works.length]);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-4xl font-bold text-[#232E35] mb-3">
              Conheça o Ecossistema
            </h2>
            <p className="text-[#656D72]">
              Tudo centralizado para escalar sua operação.
            </p>
          </div>
          <button
            onClick={() => openModal()}
            className="text-[#E35A4B] font-semibold flex items-center gap-2 hover:gap-3 transition-all mt-4 md:mt-0"
          >
            Solicitar Diagnóstico <ArrowRight size={18} />
          </button>
        </div>

        {/* Desktop View */}
        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              key={index}
              className="group relative rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 transform md:aspect-[3/4]"
            >
              <Link to={work.link} className="absolute inset-0 z-10"></Link>
              <div
                className={`absolute inset-0 ${work.color} opacity-90 transition-opacity`}
              ></div>
              <img
                src={work.image}
                alt={work.title}
                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute inset-0 p-8 flex flex-col justify-start pointer-events-none">
                <span
                  className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold mb-3 self-start ${index === 0 ? "bg-white text-[#F2A641]" : "bg-white/20 text-white backdrop-blur-md"}`}
                >
                  {work.title}
                </span>
                <h3 className={`text-2xl font-bold ${work.textColor}`}>
                  {work.subtitle}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="md:hidden relative h-[450px] w-full rounded-3xl overflow-hidden shadow-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 group cursor-pointer"
            >
              <Link to={works[currentIndex].link} className="absolute inset-0 z-10"></Link>
              <div
                className={`absolute inset-0 ${works[currentIndex].color} opacity-90 transition-opacity`}
              ></div>
              <img
                src={works[currentIndex].image}
                alt={works[currentIndex].title}
                className="absolute inset-0 w-full h-full object-cover mix-blend-overlay group-hover:scale-105 transition-transform duration-700"
              />

              <div className="absolute inset-0 p-8 flex flex-col justify-start pointer-events-none">
                <span
                  className={`inline-block px-4 py-1.5 rounded-full text-xs font-bold mb-3 self-start ${currentIndex === 0 ? "bg-white text-[#F2A641]" : "bg-white/20 text-white backdrop-blur-md"}`}
                >
                  {works[currentIndex].title}
                </span>
                <h3 className={`text-2xl font-bold ${works[currentIndex].textColor}`}>
                  {works[currentIndex].subtitle}
                </h3>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-2 z-20">
            {works.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Ir para card ${idx + 1}`}
                className={`w-2 h-2 rounded-full transition-all ${idx === currentIndex ? 'bg-white scale-125' : 'bg-white/50'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/whatsapp_clinica_v2_1.png",
    "/whatsapp_clinica_v2_2.png",
    "/whatsapp_clinica_v2_3.png"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section id="depoimentos" className="py-24 bg-[#fcfbf7]">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-[#232E35] mb-4">
          Clínicas que confiam em nós
        </h2>
        <p className="text-[#656D72] max-w-2xl mx-auto mb-16">
          Nossa solução já ajudou diversas clínicas a reduzirem o tempo gasto
          com tarefas administrativas e aumentarem seus agendamentos.
        </p>

        {/* Desktop View */}
        <div className="hidden md:grid md:grid-cols-3 gap-8 justify-center items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 0.8, x: 0 }}
            whileHover={{ opacity: 1, scale: 1.05 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mt-6 scale-95 transition-opacity"
          >
            <img
              src="/whatsapp_clinica_v2_1.png"
              alt="Print WhatsApp 1"
              className="rounded-3xl shadow-md w-full max-w-[280px] h-auto object-contain border border-gray-100"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center relative z-10 scale-105 shadow-xl rounded-3xl overflow-hidden border border-gray-50"
          >
            <img
              src="/whatsapp_clinica_v2_2.png"
              alt="Print WhatsApp 2"
              className="w-full max-w-[320px] h-auto object-contain"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 0.8, x: 0 }}
            whileHover={{ opacity: 1, scale: 1.05 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mt-6 scale-95 transition-opacity"
          >
            <img
              src="/whatsapp_clinica_v2_3.png"
              alt="Print WhatsApp 3"
              className="rounded-3xl shadow-md w-full max-w-[280px] h-auto object-contain border border-gray-100"
            />
          </motion.div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden relative h-[500px] w-full flex justify-center items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 flex justify-center items-center"
            >
              <img
                src={images[currentIndex]}
                alt={`Print WhatsApp ${currentIndex + 1}`}
                className="rounded-3xl shadow-xl w-full max-w-[320px] h-auto object-contain border border-gray-100"
              />
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-12 flex justify-center space-x-2 md:hidden">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Ir para depoimento ${idx + 1}`}
              className={`h-2 rounded-full transition-all ${idx === currentIndex ? 'w-8 bg-[#2B786A]' : 'w-2 bg-gray-300'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  const location = useLocation();
  
  if (location.pathname === "/contato" || location.pathname === "/politica-de-privacidade") return null;
  
  const isEcommerce = location.pathname.includes("/ecommerce");
  const isVideos = location.pathname.includes("/videos");

  const getFooterTitle = () => {
    if (isEcommerce) return "sua operação.";
    if (isVideos) return "seus anúncios.";
    return "sua clínica.";
  };

  return (
    <footer className="bg-[#fdfbf7] border-t border-gray-200/60 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20 relative">
          <div>
            <h2 className="text-5xl md:text-6xl font-bold text-[#232E35] leading-tight mb-8">
              Vamos revolucionar
              <br />
              {getFooterTitle()}
            </h2>
          </div>

          <div className="flex flex-col md:items-end justify-between md:text-right">
            <ul className="space-y-4 text-sm font-semibold text-[#656D72]">
              <li>
                <a href="#solucoes" className="hover:text-[#2B786A]">
                  SOLUÇÕES
                </a>
              </li>
              <li>
                <a href="#recursos" className="hover:text-[#2B786A]">
                  RECURSOS
                </a>
              </li>
              <li>
                <a href="#depoimentos" className="hover:text-[#2B786A]">
                  DEPOIMENTOS
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-200/60 text-sm text-[#656D72]">
          <div className="text-xl font-bold text-[#232E35] mb-4 md:mb-0">
            Nexus
            <span className="text-[#2B786A] text-2xl leading-none">.ai</span>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
            <span>© {new Date().getFullYear()} Nexus. Todos os direitos reservados.</span>
            <span className="hidden md:inline text-gray-300">|</span>
            <Link to="/politica-de-privacidade" className="hover:text-[#2B786A] transition-colors">
              Política de Privacidade
            </Link>
          </div>
          <div className="mt-4 md:mt-0">Desenvolvido com Automação</div>
        </div>
      </div>
    </footer>
  );
}
