import { motion } from 'motion/react';
import { useApp } from '../context/AppContext';

export default function LanguageToggle() {
  const { language, setLanguage } = useApp();

  return (
    <div className="fixed top-6 right-6 z-50 flex items-center bg-white/80 backdrop-blur-md rounded-full p-1 shadow-sm border border-white/20">
      <button
        onClick={() => setLanguage('zh')}
        className={`relative px-4 py-1.5 text-xs font-medium rounded-full transition-colors duration-300 ${
          language === 'zh' ? 'text-black' : 'text-gray-400 hover:text-gray-600'
        }`}
      >
        {language === 'zh' && (
          <motion.div
            layoutId="lang-highlight"
            className="absolute inset-0 bg-white shadow-sm rounded-full"
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          />
        )}
        <span className="relative z-10">中文</span>
      </button>
      <button
        onClick={() => setLanguage('jp')}
        className={`relative px-4 py-1.5 text-xs font-medium rounded-full transition-colors duration-300 ${
          language === 'jp' ? 'text-black' : 'text-gray-400 hover:text-gray-600'
        }`}
      >
        {language === 'jp' && (
          <motion.div
            layoutId="lang-highlight"
            className="absolute inset-0 bg-white shadow-sm rounded-full"
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          />
        )}
        <span className="relative z-10">日本語</span>
      </button>
    </div>
  );
}
