import React, { useState, useEffect } from "react";
import {
  Bot,
  ArrowRight,
  Play,
  ShoppingCart,
  TrendingUp,
  Package,
  MessageCircle,
  BarChart3,
  Users,
  Zap,
  Search,
  UploadCloud,
  Database,
  PlaySquare,
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

export function EcommerceView() {
  return (
    <div className="animate-in fade-in duration-500">
      <HeroEcommerce />
      <EcommerceVideoSection />
      <EcommerceServices />
      <EcommerceFeatures />
      <EcommerceBonus />
      <EcommerceTestimonials />
    </div>
  );
}

function HeroEcommerce() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    "/nexus_ecommerce_mockup_v2.png",
    "/nexus_automation_mockup_Ecom sem Cel.png",
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Alternates every 4 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative pt-20 pb-32 overflow-hidden px-6">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#fdfbf7] -z-10 transform translate-x-1/3 rounded-bl-[100px]"></div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-8 relative z-20">
          <div className="inline-flex items-center space-x-2 bg-black text-white px-4 py-2 rounded-full text-sm font-medium">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span>Nexus para E-commerce & Marketplaces</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#232E35] leading-[1.1] tracking-tight">
            Conecte seu Varejo<br />ao Mundo <span className="text-[#2B786A]">Digital</span>
          </h1>
          <p className="text-lg text-[#656D72] max-w-lg leading-relaxed">
            Automatize 90% da sua Operação em um só Lugar. Sincronize estoque, publique em marketplaces, automatize o atendimento e controle pedidos sem precisar contratar mais funcionários ou digitar dados manualmente.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4">
            <Link
              to="/contato"
              className="inline-flex items-center justify-center space-x-2 bg-[#2B786A] text-white px-8 py-4 rounded-full font-bold hover:bg-[#236357] transition-all hover:scale-105 shadow-lg shadow-[#2B786A]/20"
            >
              <MessageCircle size={20} />
              <span>Ativar Minha Operação Automática</span>
            </Link>
          </div>
        </div>

        <div className="relative w-full max-w-[650px] z-10 flex items-center justify-center mt-12 md:mt-0">
          <div className="absolute inset-0 bg-gradient-to-tr from-[#232E35] to-[#4a5f6e] rounded-[40px] transform rotate-2 scale-90 opacity-10 backdrop-blur-3xl transition-transform duration-700 ease-in-out hover:scale-95 hover:rotate-6"></div>
          {/* Mockup do E-commerce */}
          <div className="relative z-10 w-full md:w-[120%] h-auto drop-shadow-2xl transform hover:-translate-y-2 transition-transform duration-500">
            {images.map((img, index) => (
              <img
                key={img}
                src={img}
                alt="Nexus E-commerce Mockup"
                className={`${index === 0 ? "relative" : "absolute inset-0"} w-full h-full object-contain transition-opacity duration-1000 ${currentImageIndex === index ? "opacity-100" : "opacity-0"}`}
                draggable={false}
              />
            ))}
          </div>

          <div className="absolute -left-2 md:-left-12 -bottom-4 md:-bottom-6 z-20 bg-[#fdfbf7] p-3 md:p-5 rounded-2xl md:rounded-3xl shadow-lg max-w-[140px] md:max-w-[200px] text-center border-[3px] md:border-4 border-white flex flex-col items-center">
            <div className="w-8 h-8 md:w-12 md:h-12 mb-2 md:mb-3 bg-[#E35A4B] text-white flex items-center justify-center rounded-full">
              <ShoppingCart size={16} className="md:w-5 md:h-5 w-4 h-4" />
            </div>
            <div className="text-[9px] md:text-[11px] font-bold tracking-widest text-[#232E35] mb-1">
              RECUPERAÇÃO RATE
            </div>
            <div className="text-[10px] md:text-[13px] font-semibold text-[#2B786A] leading-tight">
              +68%
              <br />
              EM VENDAS
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EcommerceVideoSection() {
  return (
    <section className="bg-white py-24 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="space-y-8">
          <div className="inline-block bg-[#232E35]/10 text-[#232E35] font-bold tracking-widest text-xs px-4 py-2 rounded-full">
            E-COMMERCE INSIGHT
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-[#232E35] leading-tight">
            Carrinhos abandonados não precisam ser vendas perdidas
          </h2>
          <div className="space-y-4 text-lg text-[#656D72] leading-relaxed">
            <p>
              Você gasta uma fortuna em anúncios, o cliente entra no site,
              coloca no carrinho e... <strong>some.</strong>
            </p>
            <p>
              A integração da Nexus para e-commerce permite que nossa IA chame
              esse cliente no WhatsApp em até 10 minutos, tire as objeções e
              ofereça um incentivo para fechar a venda.
            </p>
          </div>
        </div>

        <div className="relative mx-auto md:ml-auto w-full max-w-[320px]">
          <div className="absolute -inset-4 bg-gradient-to-r from-[#2B786A]/20 to-[#232E35]/20 blur-3xl -z-10 rounded-full"></div>

          <div className="relative bg-black rounded-[2.5rem] p-2 shadow-2xl border-4 border-gray-100">
            <div className="absolute top-0 inset-x-0 h-6 flex justify-center z-20">
              <div className="w-28 h-5 bg-black rounded-b-2xl"></div>
            </div>
            <div className="relative w-full aspect-[9/16] bg-gray-900 rounded-[2rem] overflow-hidden">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/oxNAFAFqsbU?autoplay=0&rel=0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function EcommerceServices() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const services = [
    {
      icon: <ShoppingCart size={24} />,
      title: "Recuperação de Carrinho",
      desc: "Mensagens dinâmicas que trazem o cliente de volta no momento de maior intenção de compra.",
      color: "bg-[#232E35]",
      iconColor: "text-white",
    },
    {
      icon: <TrendingUp size={24} />,
      title: "Upsell e Cross-sell Automático",
      desc: "Nossa IA entende o que o cliente comprou e sugere produtos complementares pelo WhatsApp.",
      color: "bg-[#2B786A]",
      iconColor: "text-white",
    },
    {
      icon: <MessageCircle size={24} />,
      title: "Suporte e Dúvidas",
      desc: "Resoluções imediatas sobre tamanhos, estoques, rastreio e prazos de entrega.",
      color: "bg-[#fdfbf7]",
      iconColor: "text-[#2B786A]",
      border: true,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % services.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [services.length]);

  return (
    <section className="py-24 bg-[#fdfbf7] px-6" id="solucoes">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#232E35] mb-4">
            Venda mais com menos esforço
          </h2>
          <p className="text-lg text-[#656D72] max-w-2xl mx-auto">
            Nós cuidamos de toda a integração tecnológica e automatizamos suas tarefas. Você foca em despachar os pedidos e faturar.
          </p>
        </div>

        <div className="hidden md:grid md:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={idx}
              className={`p-8 rounded-3xl ${service.color} ${service.border ? "border border-[#2B786A]/20" : ""} transition-all duration-300 hover:-translate-y-2`}
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-8 ${service.border ? "bg-[#2B786A]/10" : "bg-white/10"}`}
              >
                <div className={service.iconColor}>{service.icon}</div>
              </div>
              <h3
                className={`text-2xl font-bold mb-4 ${service.border ? "text-[#232E35]" : "text-white"}`}
              >
                {service.title}
              </h3>
              <p
                className={service.border ? "text-[#656D72]" : "text-gray-300"}
              >
                {service.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="md:hidden relative min-h-[350px] w-full mt-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className={`absolute inset-0 p-8 rounded-3xl ${services[currentIndex].color} ${services[currentIndex].border ? "border border-[#2B786A]/20" : ""} shadow-sm flex flex-col`}
            >
              <div
                className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${services[currentIndex].border ? "bg-[#2B786A]/10" : "bg-white/10"}`}
              >
                <div className={services[currentIndex].iconColor}>{services[currentIndex].icon}</div>
              </div>
              <h3
                className={`text-2xl font-bold mb-4 ${services[currentIndex].border ? "text-[#232E35]" : "text-white"}`}
              >
                {services[currentIndex].title}
              </h3>
              <p
                className={services[currentIndex].border ? "text-[#656D72]" : "text-gray-300"}
              >
                {services[currentIndex].desc}
              </p>
            </motion.div>
          </AnimatePresence>

          <div className="absolute -bottom-8 left-0 right-0 flex justify-center gap-2 z-20">
            {services.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Ir para serviço ${idx + 1}`}
                className={`h-2 rounded-full transition-all ${idx === currentIndex ? 'w-8 bg-[#2B786A]' : 'w-2 bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function EcommerceFeatures() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const steps = [
    {
      title: "Atendimento e Pós-Venda",
      desc: "Atendimento no WhatsApp com IA, pós-venda automatizado para retenção e monitoramento de reputação em marketplaces.",
      icon: <MessageCircle size={24} />,
    },
    {
      title: "Cadastro e IA de Produtos",
      desc: "Cadastro de produtos, descrições e títulos otimizados automaticamente com IA. Organização inteligente de categorias.",
      icon: <Bot size={24} />,
    },
    {
      title: "Estoque e Multicanalidade",
      desc: "Atualização de preço e estoque em tempo real. Publicação simultânea, análise de concorrência e precificação inteligente.",
      icon: <Zap size={24} />,
    },
    {
      title: "Logística e Gestão",
      desc: "Integração de pedidos e entregas. Emissão de etiquetas, controle de trocas/devoluções e painel de relatórios automáticos.",
      icon: <Package size={24} />,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % steps.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [steps.length]);

  return (
    <section className="py-24 bg-white border-y border-gray-100 px-6">
      <div className="max-w-7xl mx-auto space-y-12 text-center">
        <div>
          <h2 className="text-4xl font-bold text-[#232E35] mb-6">
            Agrupamento Estratégico de Funcionalidades
          </h2>
          <p className="text-[#656D72] text-lg max-w-2xl mx-auto">
            Evite a paralisia de decisão. Dividimos nossos benefícios em 4 pilares práticos e essenciais para a sua operação.
          </p>
        </div>

        {/* Desktop View */}
        <div className="hidden md:grid md:grid-cols-2 gap-8 text-left">
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center md:items-start text-center md:text-left gap-4 bg-[#fdfbf7] p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-[#232E35] rounded-full flex items-center justify-center text-white shrink-0">
                {step.icon}
              </div>
              <div>
                <h4 className="text-xl font-bold text-[#232E35] mb-2">
                  {step.title}
                </h4>
                <p className="text-[#656D72] leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="md:hidden relative min-h-[300px] w-full mt-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 flex flex-col items-center text-center gap-4 bg-[#fdfbf7] p-8 rounded-3xl border border-gray-100 shadow-sm"
            >
              <div className="w-12 h-12 bg-[#232E35] rounded-full flex items-center justify-center text-white shrink-0 mb-2">
                {steps[currentIndex].icon}
              </div>
              <div>
                <h4 className="text-2xl font-bold text-[#232E35] mb-4">
                  {steps[currentIndex].title}
                </h4>
                <p className="text-[#656D72] leading-relaxed">{steps[currentIndex].desc}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="absolute -bottom-10 left-0 right-0 flex justify-center gap-2 z-20">
            {steps.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Ir para passo ${idx + 1}`}
                className={`h-2 rounded-full transition-all ${idx === currentIndex ? 'w-8 bg-[#2B786A]' : 'w-2 bg-gray-300'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function EcommerceBonus() {
  return (
    <section className="py-24 bg-[#E35A4B] text-white px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
        <div className="space-y-6 md:w-2/3">
          <div className="inline-block bg-white/20 text-white font-bold tracking-widest text-xs px-4 py-2 rounded-full">
            BÔNUS EXCLUSIVO
          </div>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            Oferecemos 1 Vídeo Ad por semana gratuitamente durante 6 meses
          </h2>
          <p className="text-lg text-white/90 leading-relaxed max-w-xl">
            Sabemos que criativo é o que vende. Com nossa assinatura corporativa
            de e-commerce, sua operação ganha um impulso extra em tráfego com
            vídeos profissionais criados pelo nosso time.
          </p>
        </div>
        <div className="md:w-1/3 flex justify-center md:justify-end">
          <Link
            to="/videos"
            className="bg-[#232E35] text-white font-semibold px-8 py-4 rounded-full text-lg hover:bg-black transition-colors shadow-lg hover:shadow-xl flex items-center gap-2 text-center group"
          >
            Ver exemplos de vídeos{" "}
            <PlaySquare
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}

function EcommerceTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/whatsapp_ecommerce_v2_1.png",
    "/whatsapp_lead_2.png",
    "/whatsapp_ecommerce_v2_2.png",
    "/instagram_dm_2.png"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <section
      className="py-24 bg-[#232E35] text-white text-center px-6"
      id="depoimentos"
    >
      <div className="max-w-7xl mx-auto">
        <Users size={48} className="mx-auto mb-8 text-[#2B786A]" />
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          "Deixamos de perder R$30.000 todo mês"
        </h2>
        <div className="text-xl text-gray-300 italic mb-16 max-w-4xl mx-auto">
          "Desde que colocamos a IA da Nexus para recuperar nossos boletos não
          pagos e carrinhos de cartão recusado, nosso faturamento subiu
          vertiginosamente. Parece mágica, mas é só tecnologia de ponta."
          <div className="font-bold text-lg not-italic mt-4 text-white">
            Juliana M, Dona de E-commerce de Moda
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 text-left max-w-5xl mx-auto">
          <div className="bg-[#2B786A]/20 p-6 rounded-2xl border border-[#2B786A]/30">
            <h3 className="text-3xl font-bold text-[#2B786A] mb-2">+500</h3>
            <p className="text-gray-300 text-sm">Varejistas utilizam nossa plataforma de integração para escalar suas vendas.</p>
          </div>
          <div className="bg-[#E35A4B]/20 p-6 rounded-2xl border border-[#E35A4B]/30">
            <h3 className="text-3xl font-bold text-[#E35A4B] mb-2">+8.4%</h3>
            <p className="text-gray-300 text-sm">Aumento na taxa de conversão no varejo e redução de 5.7% na taxa de rejeição.</p>
          </div>
          <div className="bg-blue-500/20 p-6 rounded-2xl border border-blue-500/30">
            <h3 className="text-3xl font-bold text-blue-400 mb-2">+9.2%</h3>
            <p className="text-gray-300 text-sm">Crescimento médio no valor do ticket médio (Average Order Value) de lojistas integrados.</p>
          </div>
        </div>

        <h3 className="text-2xl font-semibold mb-10">
          Casos reais das nossas IAs em ação
        </h3>

        {/* Desktop View */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center">
          {images.map((img, idx) => (
            <div key={idx} className="w-full max-w-[280px] hover:scale-105 transition-transform duration-300">
              <img
                src={img}
                alt={`Depoimento ${idx + 1}`}
                className="rounded-3xl shadow-xl w-full h-auto object-contain border border-gray-700"
              />
            </div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="md:hidden relative h-[500px] w-full flex justify-center items-center mt-6">
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
                alt={`Depoimento ${currentIndex + 1}`}
                className="rounded-3xl shadow-xl w-full max-w-[320px] h-auto object-contain border border-gray-700"
              />
            </motion.div>
          </AnimatePresence>

          <div className="absolute -bottom-10 left-0 right-0 flex justify-center gap-2 z-20">
            {images.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Ir para depoimento ${idx + 1}`}
                className={`h-2 rounded-full transition-all ${idx === currentIndex ? 'w-8 bg-[#2B786A]' : 'w-2 bg-gray-500'}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
