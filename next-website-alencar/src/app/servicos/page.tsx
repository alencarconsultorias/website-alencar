import { 
  FaHeadset, FaTools, FaChartLine, FaUsers, FaClock, 
  FaFileAlt, FaProjectDiagram, FaCheckCircle, FaChartBar, 
  FaClipboardCheck, FaSalesforce, FaHandshake, FaChartPie,
  FaUserTie, FaLightbulb, FaBullhorn, FaSearch, FaShareAlt,
  FaMobile, FaBullseye, FaRocket
} from 'react-icons/fa';

export default function Servicos() {
  const categoriasServicos = [
    {
      titulo: "Suporte e Atendimento ao Cliente",
      servicos: [
        {
          titulo: "Suporte Técnico Especializado",
          descricao: "Oferecemos suporte técnico de alta performance, com foco em velocidade e eficiência. Utilizamos ferramentas avançadas de monitoramento e gestão de tickets para garantir o melhor atendimento possível.",
          caracteristicas: [
            {
              titulo: "Resposta rápida e eficiente",
              icone: <FaClock className="w-6 h-6 text-blue-500" />,
              descricao: "Tempo médio de resposta inferior a 15 minutos"
            },
            {
              titulo: "Ferramentas de monitoramento",
              icone: <FaChartLine className="w-6 h-6 text-green-500" />,
              descricao: "Monitoramento em tempo real 24/7"
            },
            {
              titulo: "Sistema de tickets integrado",
              icone: <FaTools className="w-6 h-6 text-purple-500" />,
              descricao: "Acompanhamento completo do seu atendimento"
            },
            {
              titulo: "Equipe altamente qualificada",
              icone: <FaUsers className="w-6 h-6 text-orange-500" />,
              descricao: "Profissionais certificados e experientes"
            },
            {
              titulo: "SLA personalizado",
              icone: <FaHeadset className="w-6 h-6 text-red-500" />,
              descricao: "Acordo de nível de serviço sob medida"
            }
          ]
        }
      ]
    },
    {
      titulo: "Implantação de Software",
      servicos: [
        {
          titulo: "Implantação Eficiente e Documentada",
          descricao: "Nossa metodologia de implantação é focada em eficiência e qualidade, utilizando ferramentas avançadas de gestão de projetos e documentação detalhada para garantir o sucesso da implementação.",
          caracteristicas: [
            {
              titulo: "Gestão de Projetos Avançada",
              icone: <FaProjectDiagram className="w-6 h-6 text-blue-500" />,
              descricao: "Utilizamos ferramentas modernas de acompanhamento de projetos para garantir prazos e qualidade"
            },
            {
              titulo: "Documentação Detalhada",
              icone: <FaFileAlt className="w-6 h-6 text-green-500" />,
              descricao: "Processos e procedimentos documentados com precisão para facilitar a manutenção"
            },
            {
              titulo: "Metodologia Ágil",
              icone: <FaChartBar className="w-6 h-6 text-purple-500" />,
              descricao: "Sprints bem definidos com entregas incrementais e feedback constante"
            },
            {
              titulo: "Controle de Qualidade",
              icone: <FaCheckCircle className="w-6 h-6 text-orange-500" />,
              descricao: "Testes rigorosos e validações em cada etapa do processo"
            },
            {
              titulo: "Checklist de Implantação",
              icone: <FaClipboardCheck className="w-6 h-6 text-red-500" />,
              descricao: "Processos padronizados que reduzem o tempo de implementação"
            }
          ]
        }
      ]
    },
    {
      titulo: "Venda de Software",
      servicos: [
        {
          titulo: "Vendas Estratégicas com Salesforce",
          descricao: "Utilizamos o Salesforce, a plataforma líder em CRM, combinada com nossa metodologia única de vendas para maximizar resultados e criar relacionamentos duradouros com nossos clientes.",
          caracteristicas: [
            {
              titulo: "Salesforce Enterprise",
              icone: <FaSalesforce className="w-6 h-6 text-blue-500" />,
              descricao: "Utilizamos a versão Enterprise do Salesforce para gestão completa do ciclo de vendas"
            },
            {
              titulo: "Metodologia Única",
              icone: <FaLightbulb className="w-6 h-6 text-green-500" />,
              descricao: "Processo de vendas personalizado e otimizado para o mercado brasileiro"
            },
            {
              titulo: "Análise de Dados",
              icone: <FaChartPie className="w-6 h-6 text-purple-500" />,
              descricao: "Relatórios e dashboards avançados para tomada de decisão estratégica"
            },
            {
              titulo: "Equipe Especializada",
              icone: <FaUserTie className="w-6 h-6 text-orange-500" />,
              descricao: "Profissionais certificados em Salesforce e com vasta experiência em vendas"
            },
            {
              titulo: "Gestão de Relacionamento",
              icone: <FaHandshake className="w-6 h-6 text-red-500" />,
              descricao: "Acompanhamento completo do ciclo de vida do cliente"
            }
          ]
        }
      ]
    },
    {
      titulo: "Marketing",
      servicos: [
        {
          titulo: "Marketing Digital Integrado",
          descricao: "Desenvolvemos estratégias de marketing digital completas e integradas, combinando diferentes canais e ferramentas para maximizar o alcance e os resultados das suas campanhas.",
          caracteristicas: [
            {
              titulo: "Marketing de Performance",
              icone: <FaBullseye className="w-6 h-6 text-blue-500" />,
              descricao: "Campanhas otimizadas com foco em resultados e ROI mensurável"
            },
            {
              titulo: "SEO e SEM",
              icone: <FaSearch className="w-6 h-6 text-green-500" />,
              descricao: "Otimização para mecanismos de busca e gestão de anúncios patrocinados"
            },
            {
              titulo: "Social Media",
              icone: <FaShareAlt className="w-6 h-6 text-purple-500" />,
              descricao: "Gestão completa de redes sociais e criação de conteúdo engajante"
            },
            {
              titulo: "Marketing Mobile",
              icone: <FaMobile className="w-6 h-6 text-orange-500" />,
              descricao: "Estratégias específicas para dispositivos móveis e apps"
            },
            {
              titulo: "Growth Hacking",
              icone: <FaRocket className="w-6 h-6 text-red-500" />,
              descricao: "Técnicas inovadoras para crescimento acelerado e escalável"
            }
          ]
        },
        {
          titulo: "Estratégias de Conteúdo",
          descricao: "Criamos e gerenciamos conteúdo estratégico que gera valor para sua marca, atrai leads qualificados e fortalece sua autoridade no mercado.",
          caracteristicas: [
            {
              titulo: "Content Marketing",
              icone: <FaFileAlt className="w-6 h-6 text-blue-500" />,
              descricao: "Desenvolvimento de conteúdo relevante e estratégico para seu público"
            },
            {
              titulo: "Email Marketing",
              icone: <FaBullhorn className="w-6 h-6 text-green-500" />,
              descricao: "Campanhas de email personalizadas e automatizadas"
            },
            {
              titulo: "Inbound Marketing",
              icone: <FaChartLine className="w-6 h-6 text-purple-500" />,
              descricao: "Atração e conversão de leads através de conteúdo de valor"
            },
            {
              titulo: "Marketing de Influência",
              icone: <FaUsers className="w-6 h-6 text-orange-500" />,
              descricao: "Parcerias estratégicas com influenciadores do seu setor"
            },
            {
              titulo: "Análise de Resultados",
              icone: <FaChartPie className="w-6 h-6 text-red-500" />,
              descricao: "Métricas e KPIs para acompanhamento de performance"
            }
          ]
        }
      ]
    }
  ];

  return (
    <main className="min-h-screen bg-gradient-to-b from-white to-gray-50 py-12 px-6 md:px-20">
      <h1 className="text-4xl font-bold text-center mb-12 text-gray-800 animate-fade-in">
        Nossos Serviços
      </h1>
      
      {categoriasServicos.map((categoria, index) => (
        <div 
          key={index} 
          className="mb-16 animate-slide-up"
          style={{ animationDelay: `${index * 200}ms` }}
          id={categoria.titulo.toLowerCase().replace(/\s+/g, '')}
        >
          <h2 className="text-3xl font-semibold mb-8 text-center text-gray-800">{categoria.titulo}</h2>
          
          {categoria.servicos.length > 0 ? (
            <div className="grid grid-cols-1 gap-8">
              {categoria.servicos.map((servico, servicoIndex) => (
                <div
                  key={servicoIndex}
                  className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
                >
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800">{servico.titulo}</h3>
                  <p className="text-gray-600 mb-8 text-lg">{servico.descricao}</p>
                  
                  {servico.caracteristicas && (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {servico.caracteristicas.map((caracteristica, caracIndex) => (
                        <div
                          key={caracIndex}
                          className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-all duration-300 hover:scale-[1.05] animate-fade-in"
                          style={{ animationDelay: `${caracIndex * 100}ms` }}
                        >
                          <div className="flex items-center mb-3">
                            {caracteristica.icone}
                            <h4 className="text-lg font-semibold ml-3 text-gray-800">
                              {caracteristica.titulo}
                            </h4>
                          </div>
                          <p className="text-gray-600">{caracteristica.descricao}</p>
                        </div>
                      ))}
                    </div>
                  )}
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
  );
}