import React from 'react';
import { motion } from 'motion/react';
import { Shield, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export function PrivacyPolicyView() {
  return (
    <div className="pt-32 pb-24 px-6 min-h-screen bg-[#fdfbf7]">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center text-[#2B786A] font-semibold hover:underline cursor-pointer">
            <ArrowLeft size={18} className="mr-2" />
            Voltar para o início
          </Link>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100"
        >
          <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-[#2B786A]/10 text-[#2B786A] rounded-full flex items-center justify-center shrink-0">
              <Shield size={32} />
            </div>
            <div>
              <h1 className="text-3xl md:text-4xl font-bold text-[#232E35]">
                Política de Privacidade
              </h1>
              <p className="text-[#656D72] mt-2">
                Transparência e segurança no uso dos seus dados.
              </p>
            </div>
          </div>

          <div className="space-y-8 text-[#656D72] leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-[#232E35] mb-4">1. Informações que Coletamos</h2>
              <p className="mb-2">A Nexus Soluções e Tecnologia coleta as seguintes informações para fornecer nossos serviços:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li><strong>Dados Fornecidos por Você:</strong> Nome, endereço de e-mail, telefones (como WhatsApp), nome da clínica, e outras informações submetidas através de nossos formulários.</li>
                <li><strong>Dados de Integração:</strong> Dados e metadados provenientes das plataformas integradas ao nosso CRM para possibilitar as automações de processos.</li>
                <li><strong>Metadados Técnicos:</strong> Cookies, identificadores de dispositivo, tipo de navegador e tempo de acesso, utilizados para fins de diagnóstico e melhorias de uso.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#232E35] mb-4">2. Como Usamos Seus Dados</h2>
              <p className="mb-2">As informações coletadas são utilizadas exclusivamente para:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Prestar, gerenciar e otimizar nossos serviços de CRM com IA e agendamentos automatizados.</li>
                <li>Processar interações com a ferramenta e gerar as respostas e relatórios pertinentes ao negócio.</li>
                <li>Entrar em contato com você para tirar dúvidas, prover suporte avançado, ou apresentar novas soluções da plataforma.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#232E35] mb-4">3. Compartilhamento de Dados</h2>
              <p>Nós da Nexus nos comprometemos a <strong>não vender, alugar ou transferir comercialmente</strong> suas informações privadas a terceiros. Seus dados só poderão ser compartilhados nos seguintes casos controlados:</p>
              <ul className="list-disc pl-5 space-y-2 mt-2">
                <li>Com provedores de serviços de infraestrutura (cloud servers parceiras) estritamente necessários para manter a aplicação online.</li>
                <li>Com autoridades judiciais ou órgãos governamentais, caso sejamos obrigados por lei aplicável e com o processo judicial adequado.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#232E35] mb-4">4. Proteção e Segurança da Informação</h2>
              <p>
                Implementamos rigorosas medidas de segurança em nível de nuvem para proteger os dados da sua empresa. Os dados são transferidos com comunicação criptografada. Recomendamos, todavia, que tome precauções utilizando equipamentos seguros em suas dependências também, pois nenhum tráfego online de dados é categoricamente inviolável.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-[#232E35] mb-4">5. Seus Direitos (LGPD)</h2>
              <p className="mb-2">De acordo com a Lei de Proteção de Dados, você tem o direito garantido de:</p>
              <ul className="list-disc pl-5 space-y-2">
                <li>Ter confirmação do tratamento, acessar e visualizar as informações de base que mantemos sobre a empresa.</li>
                <li>Corrigir dados inconsistentes, incompletos ou desatualizados.</li>
                <li>Requerer a inativação ou deleção da conta, o que implicará no cancelamento seguro da retenção dos dados não exigidos legalmente.</li>
                <li>Revogar o seu consentimento em situações onde ele foi explicitamente cedido, respeitando o encerramento dos trâmites automáticos.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-bold text-[#232E35] mb-4">6. Como Entrar em Contato</h2>
              <p>Para dúvidas adicionais, sugestões voltadas para segurança de dados, ou para solicitar a remoção/acesso a dados, os clientes podem contactar nosso suporte especializado por meio do WhatsApp oficial ou email de atendimento repassados em contrato.</p>
            </section>

            <div className="pt-8 border-t border-gray-100 text-sm flex items-center justify-between">
              <p>Última atualização: {new Date().toLocaleDateString('pt-BR')}</p>
              <p className="font-semibold text-[#232E35]">Nexus.ai</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
