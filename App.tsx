/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { AnimatePresence } from 'motion/react';
import { AppProvider, useApp } from './context/AppContext';
import BentoGrid from './components/BentoGrid';
import PostDetail from './components/PostDetail';
import LanguageToggle from './components/LanguageToggle';

function AppContent() {
  const { activePostId } = useApp();

  return (
    <div className="min-h-screen bg-[#fbfbfb] font-sans selection:bg-black/10">
      <LanguageToggle />
      
      <main className="relative z-10">
        <BentoGrid />
      </main>

      <AnimatePresence>
        {activePostId && <PostDetail postId={activePostId} />}
      </AnimatePresence>
      
      <footer className="py-12 text-center text-gray-400 text-sm">
        <p>&copy; {new Date().getFullYear()} UCL E-Learning. Designed with precision.</p>
      </footer>
    </div>
  );
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

