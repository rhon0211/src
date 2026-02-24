import { createContext, useContext, useState, ReactNode } from 'react';
import { Language } from '../data/posts';

interface AppContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  activePostId: string | null;
  setActivePostId: (id: string | null) => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('zh');
  const [activePostId, setActivePostId] = useState<string | null>(null);

  return (
    <AppContext.Provider value={{ language, setLanguage, activePostId, setActivePostId }}>
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const context = useContext(AppContext);
  if (context === undefined) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
}
