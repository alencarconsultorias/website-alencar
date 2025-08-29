'use client';

import { useEffect, useState } from 'react';

export default function ComingSoon() {
  const [progressValue, setProgressValue] = useState(0);
  const [targetProgress] = useState(75);
  const [typedText, setTypedText] = useState('');
  const [launchMessage, setLaunchMessage] = useState('Em breve...');

  const fullText = "Site em Construção";
  const messages = [
    "Em breve...",
    "Quase lá!",
    "Últimos ajustes...",
    "Preparando o lançamento...",
    "Finalizando detalhes..."
  ];

  // Typing animation
  useEffect(() => {
    let index = 0;
    const typeText = () => {
      if (index < fullText.length) {
        setTypedText(fullText.substring(0, index + 1));
        index++;
        setTimeout(typeText, 100);
      }
    };
    setTimeout(typeText, 500);
  }, []);

  // Progress animation
  useEffect(() => {
    const animateProgress = () => {
      setProgressValue(prev => {
        if (prev < targetProgress) {
          return prev + 0.5;
        }
        return prev;
      });
    };

    const interval = setInterval(animateProgress, 50);
    return () => clearInterval(interval);
  }, [targetProgress]);

  // Launch message rotation
  useEffect(() => {
    const interval = setInterval(() => {
      setLaunchMessage(prev => {
        const currentIndex = messages.indexOf(prev);
        const nextIndex = (currentIndex + 1) % messages.length;
        return messages[nextIndex];
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Particle creation
  useEffect(() => {
    const createParticle = () => {
      const particle = document.createElement('div');
      particle.className = 'particle';
      particle.style.cssText = `
        position: fixed;
        width: ${Math.random() * 4 + 2}px;
        height: ${Math.random() * 4 + 2}px;
        background: #ffd700;
        border-radius: 50%;
        left: ${Math.random() * 100}%;
        top: 100vh;
        pointer-events: none;
        z-index: 1;
        animation: particleFloat ${Math.random() * 4 + 4}s linear forwards;
      `;
      
      document.body.appendChild(particle);
      
      setTimeout(() => {
        if (particle.parentNode) {
          particle.parentNode.removeChild(particle);
        }
      }, 8000);
    };

    const interval = setInterval(createParticle, 300);
    return () => clearInterval(interval);
  }, []);

  const handleToolClick = (e: React.MouseEvent) => {
    const tool = e.currentTarget as HTMLElement;
    tool.style.transform = 'scale(1.3) rotate(15deg)';
    tool.style.color = '#ffed4e';
    
    setTimeout(() => {
      tool.style.transform = 'scale(1) rotate(0deg)';
      tool.style.color = '#ffd700';
    }, 300);
  };

  return (
    <>
      <style jsx global>{`
        @keyframes particleFloat {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.7;
          }
          90% {
            opacity: 0.7;
          }
          100% {
            transform: translateY(-100vh) rotate(360deg);
            opacity: 0;
          }
        }
        
        @keyframes craneSwing {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(3deg); }
        }
        
        @keyframes blockFloat {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes hatBounce {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
        }
        
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        @keyframes progressShine {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        
        @keyframes soundWave {
          0%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(0.3); }
        }
        
        .animate-crane-swing {
          animation: craneSwing 4s ease-in-out infinite;
        }
        
        .animate-block-float {
          animation: blockFloat 3s ease-in-out infinite;
        }
        
        .animate-hat-bounce {
          animation: hatBounce 2s ease-in-out infinite;
        }
        
        .animate-blink {
          animation: blink 1s infinite;
        }
        
        .animate-progress-shine {
          background: linear-gradient(90deg, #eab308, #fbbf24, #eab308);
          background-size: 200% 100%;
          animation: progressShine 2s linear infinite;
        }
        
        .animate-sound-wave {
          animation: soundWave 1.5s ease-in-out infinite;
        }
      `}</style>
      
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white overflow-hidden relative">
        {/* Background Construction Elements */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {/* Crane */}
          <div className="absolute top-[10%] right-[5%] w-48 h-72 bg-gradient-to-r from-yellow-500 to-yellow-400 opacity-30 animate-crane-swing"
               style={{ clipPath: 'polygon(0% 100%, 5% 0%, 10% 0%, 15% 100%, 85% 100%, 90% 0%, 95% 0%, 100% 100%)' }}>
          </div>
          
          {/* Building Blocks */}
          <div className="absolute bottom-0 left-0 w-full h-48">
            <div className="absolute bottom-0 left-[10%] w-20 h-16 bg-white/10 border-2 border-white/20 rounded-lg animate-block-float"></div>
            <div className="absolute bottom-0 left-[20%] w-24 h-20 bg-white/10 border-2 border-white/20 rounded-lg animate-block-float" style={{ animationDelay: '0.5s' }}></div>
            <div className="absolute bottom-0 right-[20%] w-18 h-14 bg-white/10 border-2 border-white/20 rounded-lg animate-block-float" style={{ animationDelay: '1s' }}></div>
            <div className="absolute bottom-0 right-[10%] w-22 h-18 bg-white/10 border-2 border-white/20 rounded-lg animate-block-float" style={{ animationDelay: '1.5s' }}></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex items-center justify-center min-h-screen p-5">
          <div className="text-center max-w-4xl w-full">
            {/* Logo */}
            <div className="mb-10">
              <div className="inline-flex items-center gap-4 text-3xl font-bold text-yellow-400">
                <div className="text-4xl">⚙️</div>
                <span>Alencar Consultorias</span>
              </div>
            </div>

            {/* Construction Hat */}
            <div className="mb-8">
              <div className="text-6xl animate-hat-bounce">🚧</div>
            </div>

            {/* Main Title */}
            <h1 className="text-4xl md:text-6xl font-bold mb-5 text-shadow-lg">
              <span>{typedText}</span>
              <span className="text-yellow-400 animate-blink">|</span>
            </h1>

            <p className="text-xl mb-10 opacity-90 font-light">
              Estamos trabalhando duro para trazer algo incrível para você!
            </p>

            {/* Progress Bar */}
            <div className="mb-10 bg-white/10 p-8 rounded-2xl backdrop-blur-sm border border-white/20">
              <div className="text-lg mb-4 font-semibold text-yellow-400">
                Progresso da Construção
              </div>
              <div className="relative w-full h-5 bg-black/30 rounded-full overflow-hidden shadow-inner">
                <div 
                  className="h-full animate-progress-shine rounded-full transition-all duration-500"
                  style={{ width: `${progressValue}%` }}
                ></div>
                <div className="absolute top-1/2 right-3 transform -translate-y-1/2 text-sm font-semibold text-white text-shadow">
                  {Math.floor(progressValue)}%
                </div>
              </div>
            </div>

            {/* Construction Tools */}
            <div className="flex justify-center gap-10 mb-10">
              <div className="text-4xl text-yellow-400 cursor-pointer transition-all duration-300 hover:scale-125" onClick={handleToolClick}>
                🔨
              </div>
              <div className="text-4xl text-yellow-400 cursor-pointer transition-all duration-300 hover:scale-125" onClick={handleToolClick}>
                🔧
              </div>
              <div className="text-4xl text-yellow-400 cursor-pointer transition-all duration-300 hover:scale-125" onClick={handleToolClick}>
                🪛
              </div>
            </div>

            {/* Launch Info */}
            <div className="mb-10">
              <div className="inline-flex items-center gap-5 bg-white/10 p-6 rounded-2xl backdrop-blur-sm border border-white/20">
                <div className="text-3xl text-yellow-400">📅</div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">Previsão de Lançamento</h3>
                  <p className="opacity-80 transition-opacity duration-300">{launchMessage}</p>
                </div>
              </div>
            </div>

            {/* Contact Buttons */}
            <div className="space-y-4">
              <p className="text-lg opacity-90">Quer ser notificado quando estivermos prontos?</p>
              <div className="flex flex-wrap justify-center gap-5">
                <a href="mailto:contato@alencarconsultorias.com" 
                   className="inline-flex items-center gap-3 px-6 py-3 bg-yellow-400/20 text-yellow-400 border-2 border-yellow-400 rounded-full font-semibold transition-all duration-300 hover:bg-yellow-400 hover:text-blue-900 hover:-translate-y-1 hover:shadow-lg hover:shadow-yellow-400/30">
                  ✉️ Entre em Contato
                </a>
                <a href="#" 
                   className="inline-flex items-center gap-3 px-6 py-3 bg-yellow-400/20 text-yellow-400 border-2 border-yellow-400 rounded-full font-semibold transition-all duration-300 hover:bg-yellow-400 hover:text-blue-900 hover:-translate-y-1 hover:shadow-lg hover:shadow-yellow-400/30">
                  🔗 LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Sound Indicator */}
        <div className="absolute bottom-8 left-8 flex gap-1 items-end">
          <div className="w-1 h-5 bg-yellow-400 rounded animate-sound-wave"></div>
          <div className="w-1 h-8 bg-yellow-400 rounded animate-sound-wave" style={{ animationDelay: '0.2s' }}></div>
          <div className="w-1 h-6 bg-yellow-400 rounded animate-sound-wave" style={{ animationDelay: '0.4s' }}></div>
        </div>
      </div>
    </>
  );
}
