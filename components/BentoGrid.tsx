import { motion } from 'motion/react';
import { useApp } from '../context/AppContext';
import { postsData } from '../data/posts';
import BentoCard from './BentoCard';

export default function BentoGrid() {
  const { setActivePostId, language } = useApp();

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-12 md:mb-20"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-4">
          {language === 'zh' ? '探索与成长' : '発見と成長'}
        </h1>
        <p className="text-lg md:text-xl text-gray-500 max-w-2xl">
          {language === 'zh' 
            ? 'UCL 内部教育平台。在这里发现最新的见解、技能和灵感。' 
            : 'UCL 社内教育プラットフォーム。ここで最新の洞察、スキル、インスピレーションを発見してください。'}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[320px] gap-6">
        {postsData.map((post) => (
          <BentoCard key={post.id} post={post} onClick={() => setActivePostId(post.id)} language={language} />
        ))}
      </div>
    </div>
  );
}

