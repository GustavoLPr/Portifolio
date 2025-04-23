import { useEffect } from 'react';
import { useTheme } from '../../context/themeContext';
// import particlesJS from 'particles.js';

export default function ParticlesBackground() {
  const { darkMode } = useTheme();

  useEffect(() => {
    if (window.particlesJS) {
      const configPath = darkMode
        ? '/particles-dark.json'
        : '/particles-light.json';
  
      window.particlesJS.load('particles-js', configPath, function () {
        console.log(`Particles carregado de ${configPath}`);
      });
    } else {
      console.error('particlesJS não está definido');
    }
  }, [darkMode]); // agora ele recarrega sempre que o tema mudar
  

  return (
    <div
      id="particles-js"
      style={{
        position: 'fixed',
        width: '100%',
        height: '100%',
        zIndex: 1,
        top: 0,
        left: 0,
        backgroundColor: 'transparent',
      }}
    />
  );
}
