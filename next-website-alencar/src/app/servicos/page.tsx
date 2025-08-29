import { 
  FaHeadset, FaTools, FaChartLine, FaUsers, FaClock, 
  FaFileAlt, FaProjectDiagram, FaCheckCircle, FaChartBar, 
  FaClipboardCheck, FaSalesforce, FaHandshake, FaChartPie,
  FaUserTie, FaLightbulb, FaBullhorn, FaSearch, FaShareAlt,
  FaMobile, FaBullseye, FaRocket, FaArrowRight
} from 'react-icons/fa';
import Image from 'next/image';

const styles = `
  @keyframes border-glow {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
  
  @keyframes border-glow-vertical {
    0% { transform: translateY(-100%); }
    100% { transform: translateY(100%); }
  }
  
  @keyframes border-glow-delayed {
    0% { transform: translateX(100%); }
    100% { transform: translateX(-100%); }
  }
  
  @keyframes border-glow-vertical-delayed {
    0% { transform: translateY(100%); }
    100% { transform: translateY(-100%); }
  }
  
  @keyframes border-pulse {
    0% { 
      border-color: rgba(156, 163, 175, 0.1);
      box-shadow: 0 0 0 0 rgba(156, 163, 175, 0.1);
    }
    25% {
      border-color: rgba(234, 179, 8, 0.3);
      box-shadow: 0 0 10px 2px rgba(234, 179, 8, 0.2);
    }
    50% { 
      border-color: rgba(156, 163, 175, 0.3);
      box-shadow: 0 0 10px 2px rgba(156, 163, 175, 0.2);
    }
    75% {
      border-color: rgba(234, 179, 8, 0.3);
      box-shadow: 0 0 10px 2px rgba(234, 179, 8, 0.2);
    }
    100% { 
      border-color: rgba(156, 163, 175, 0.1);
      box-shadow: 0 0 0 0 rgba(156, 163, 175, 0.1);
    }
  }
  
  .animate-border-glow {
    animation: border-glow 3s linear infinite;
  }
  
  .animate-border-glow-vertical {
    animation: border-glow-vertical 3s linear infinite;
  }
  
  .animate-border-glow-delayed {
    animation: border-glow-delayed 3s linear infinite;
    animation-delay: 1.5s;
  }
  
  .animate-border-glow-vertical-delayed {
    animation: border-glow-vertical 3s linear infinite;
    animation-delay: 1.5s;
  }
  
  .animate-border-pulse {
    animation: border-pulse 3s ease-in-out infinite;
  }
`;

export default function Servicos() {
  const categoriasServicos = [
    {
      titulo: "Suporte e Atendimento ao Cliente",
      cor: "from-black to-gray-900",
      corHover: "hover:from-gray-900 hover:to-black",
      servicos: [
        {
          titulo: "Suporte Técnico Especializado",
          descricao: "Oferecemos suporte técnico de alta performance, com foco em velocidade e eficiência. Utilizamos ferramentas avançadas de monitoramento e gestão de tickets para garantir o melhor atendimento possível.",
          imagem: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80",
          caracteristicas: [
            {
              titulo: "Resposta rápida e eficiente",
              icone: <FaClock className="w-6 h-6 text-yellow-400" />,
              descricao: "Tempo médio de resposta inferior a 15 minutos"
            },
            {
              titulo: "Ferramentas de monitoramento",
              icone: <FaChartLine className="w-6 h-6 text-yellow-400" />,
              descricao: "Monitoramento em tempo real 24/7"
            },
            {
              titulo: "Sistema de tickets integrado",
              icone: <FaTools className="w-6 h-6 text-yellow-400" />,
              descricao: "Acompanhamento completo do seu atendimento"
            },
            {
              titulo: "Equipe altamente qualificada",
              icone: <FaUsers className="w-6 h-6 text-yellow-400" />,
              descricao: "Profissionais certificados e experientes"
            },
            {
              titulo: "SLA personalizado",
              icone: <FaHeadset className="w-6 h-6 text-yellow-400" />,
              descricao: "Acordo de nível de serviço sob medida"
            }
          ]
        }
      ]
    },
    {
      titulo: "Implantação de Software",
      cor: "from-gray-900 to-black",
      corHover: "hover:from-black hover:to-gray-900",
      servicos: [
        {
          titulo: "Implantação Eficiente e Documentada",
          descricao: "Nossa metodologia de implantação é focada em eficiência e qualidade, utilizando ferramentas avançadas de gestão de projetos e documentação detalhada para garantir o sucesso da implementação.",
          imagem: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80",
          caracteristicas: [
            {
              titulo: "Gestão de Projetos Avançada",
              icone: <FaProjectDiagram className="w-6 h-6 text-yellow-400" />,
              descricao: "Utilizamos ferramentas modernas de acompanhamento de projetos para garantir prazos e qualidade"
            },
            {
              titulo: "Documentação Detalhada",
              icone: <FaFileAlt className="w-6 h-6 text-yellow-400" />,
              descricao: "Processos e procedimentos documentados com precisão para facilitar a manutenção"
            },
            {
              titulo: "Metodologia Ágil",
              icone: <FaChartBar className="w-6 h-6 text-yellow-400" />,
              descricao: "Sprints bem definidos com entregas incrementais e feedback constante"
            },
            {
              titulo: "Controle de Qualidade",
              icone: <FaCheckCircle className="w-6 h-6 text-yellow-400" />,
              descricao: "Testes rigorosos e validações em cada etapa do processo"
            },
            {
              titulo: "Checklist de Implantação",
              icone: <FaClipboardCheck className="w-6 h-6 text-yellow-400" />,
              descricao: "Processos padronizados que reduzem o tempo de implementação"
            }
          ]
        }
      ]
    },
    {
      titulo: "Venda de Software",
      cor: "from-black to-gray-900",
      corHover: "hover:from-gray-900 hover:to-black",
      servicos: [
        {
          titulo: "Vendas Estratégicas com Salesforce",
          descricao: "Utilizamos o Salesforce, a plataforma líder em CRM, combinada com nossa metodologia única de vendas para maximizar resultados e criar relacionamentos duradouros com nossos clientes.",
          imagem: "https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=800&q=80",
          caracteristicas: [
            {
              titulo: "Salesforce Enterprise",
              icone: <FaSalesforce className="w-6 h-6 text-yellow-400" />,
              descricao: "Utilizamos a versão Enterprise do Salesforce para gestão completa do ciclo de vendas"
            },
            {
              titulo: "Metodologia Única",
              icone: <FaLightbulb className="w-6 h-6 text-yellow-400" />,
              descricao: "Processo de vendas personalizado e otimizado para o mercado brasileiro"
            },
            {
              titulo: "Análise de Dados",
              icone: <FaChartPie className="w-6 h-6 text-yellow-400" />,
              descricao: "Relatórios e dashboards avançados para tomada de decisão estratégica"
            },
            {
              titulo: "Equipe Especializada",
              icone: <FaUserTie className="w-6 h-6 text-yellow-400" />,
              descricao: "Profissionais certificados em Salesforce e com vasta experiência em vendas"
            },
            {
              titulo: "Gestão de Relacionamento",
              icone: <FaHandshake className="w-6 h-6 text-yellow-400" />,
              descricao: "Acompanhamento completo do ciclo de vida do cliente"
            }
          ]
        }
      ]
    },
    {
      titulo: "Marketing",
      cor: "from-gray-900 to-black",
      corHover: "hover:from-black hover:to-gray-900",
      servicos: [
        {
          titulo: "Marketing Digital Integrado",
          descricao: "Desenvolvemos estratégias de marketing digital completas e integradas, combinando diferentes canais e ferramentas para maximizar o alcance e os resultados das suas campanhas.",
          imagem: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
          caracteristicas: [
            {
              titulo: "Marketing de Performance",
              icone: <FaBullseye className="w-6 h-6 text-yellow-400" />,
              descricao: "Campanhas otimizadas com foco em resultados e ROI mensurável"
            },
            {
              titulo: "SEO e SEM",
              icone: <FaSearch className="w-6 h-6 text-yellow-400" />,
              descricao: "Otimização para mecanismos de busca e gestão de anúncios patrocinados"
            },
            {
              titulo: "Social Media",
              icone: <FaShareAlt className="w-6 h-6 text-yellow-400" />,
              descricao: "Gestão completa de redes sociais e criação de conteúdo engajante"
            },
            {
              titulo: "Marketing Mobile",
              icone: <FaMobile className="w-6 h-6 text-yellow-400" />,
              descricao: "Estratégias específicas para dispositivos móveis e apps"
            },
            {
              titulo: "Growth Hacking",
              icone: <FaRocket className="w-6 h-6 text-yellow-400" />,
              descricao: "Técnicas inovadoras para crescimento acelerado e escalável"
            }
          ]
        },
        {
          titulo: "Estratégias de Conteúdo",
          descricao: "Criamos e gerenciamos conteúdo estratégico que gera valor para sua marca, atrai leads qualificados e fortalece sua autoridade no mercado.",
          imagem: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?auto=format&fit=crop&w=800&q=80",
          caracteristicas: [
            {
              titulo: "Content Marketing",
              icone: <FaFileAlt className="w-6 h-6 text-yellow-400" />,
              descricao: "Desenvolvimento de conteúdo relevante e estratégico para seu público"
            },
            {
              titulo: "Email Marketing",
              icone: <FaBullhorn className="w-6 h-6 text-yellow-400" />,
              descricao: "Campanhas de email personalizadas e automatizadas"
            },
            {
              titulo: "Inbound Marketing",
              icone: <FaChartLine className="w-6 h-6 text-yellow-400" />,
              descricao: "Atração e conversão de leads através de conteúdo de valor"
            },
            {
              titulo: "Marketing de Influência",
              icone: <FaUsers className="w-6 h-6 text-yellow-400" />,
              descricao: "Parcerias estratégicas com influenciadores do seu setor"
            },
            {
              titulo: "Análise de Resultados",
              icone: <FaChartPie className="w-6 h-6 text-yellow-400" />,
              descricao: "Métricas e KPIs para acompanhamento de performance"
            }
          ]
        }
      ]
    }
  ];

  return (
    <>
      <style>{styles}</style>
      <main className="min-h-screen bg-black py-12 px-6 md:px-20">
        <h1 className="text-5xl font-bold text-center mb-16 text-yellow-400 animate-fade-in">
          Nossos Serviços
        </h1>
        
        {categoriasServicos.map((categoria, index) => (
          <div 
            key={index} 
            className="mb-24 animate-slide-up"
            style={{ animationDelay: `${index * 200}ms` }}
            id={categoria.titulo.toLowerCase().replace(/\s+/g, '')}
          >
            <h2 className="text-4xl font-semibold mb-12 text-center text-yellow-400 border-b-2 border-yellow-400 pb-4">
              {categoria.titulo}
            </h2>
            
            {categoria.servicos.length > 0 ? (
              <div className="grid grid-cols-1 gap-12">
                {categoria.servicos.map((servico, servicoIndex) => (
                  <div
                    key={servicoIndex}
                    className={`bg-gradient-to-br ${categoria.cor} ${categoria.corHover} rounded-3xl shadow-2xl p-8 transition-all duration-500 hover:scale-[1.02] group relative overflow-hidden`}
                  >
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-gray-400/20 transition-all duration-500 rounded-3xl" />
                    <div className="absolute inset-0 border-2 border-transparent group-hover:border-gray-400/20 transition-all duration-500 rounded-3xl animate-border-pulse" />
                    
                    <div className="relative z-10">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div className="relative h-64 lg:h-full rounded-2xl overflow-hidden">
                          <Image
                            src={servico.imagem}
                            alt={servico.titulo}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                        
                        <div>
                          <h3 className="text-3xl font-semibold mb-4 text-yellow-400">{servico.titulo}</h3>
                          <p className="text-gray-300 mb-8 text-lg">{servico.descricao}</p>
                          
                          {servico.caracteristicas && (
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                              {servico.caracteristicas.map((caracteristica, caracIndex) => (
                                <div
                                  key={caracIndex}
                                  className="bg-black/50 backdrop-blur-sm rounded-xl p-6 hover:bg-black/70 transition-all duration-300 hover:scale-[1.05] animate-fade-in border border-yellow-400/20"
                                  style={{ animationDelay: `${caracIndex * 100}ms` }}
                                >
                                  <div className="flex items-center mb-3">
                                    {caracteristica.icone}
                                    <h4 className="text-lg font-semibold ml-3 text-yellow-400">
                                      {caracteristica.titulo}
                                    </h4>
                                  </div>
                                  <p className="text-gray-300">{caracteristica.descricao}</p>
                                </div>
                              ))}
                            </div>
                          )}
                          
                          <button className="mt-8 flex items-center text-yellow-400 hover:text-yellow-300 transition-colors">
                            Saiba mais
                            <FaArrowRight className="ml-2" />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-500 italic text-lg animate-fade-in">
                Em breve
              </p>
            )}
          </div>
        ))}
      </main>
    </>
  );
}