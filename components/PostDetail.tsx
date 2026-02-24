import { motion, useScroll, useSpring } from 'motion/react';
import { X, Clock, ChevronRight } from 'lucide-react';
import { useApp } from '../context/AppContext';
import { postsData } from '../data/posts';
import { useEffect, useRef } from 'react';

export default function PostDetail({ postId }: { postId: string }) {
  const { setActivePostId, language } = useApp();
  const post = postsData.find((p) => p.id === postId);
  const scrollRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ container: scrollRef });
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    if (postId) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [postId]);

  if (!post) return null;

  const paragraphs = post.content[language].split('\n').filter(Boolean);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => setActivePostId(null)}
        className="absolute inset-0 bg-white/60 backdrop-blur-xl"
      />
      
      <motion.div
        layoutId={`card-${post.id}`}
        className="relative w-full max-w-4xl h-full max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col"
        style={{ borderRadius: 24 }}
      >
        {/* Progress Bar */}
        <motion.div
          className="absolute top-0 left-0 right-0 h-1 bg-blue-500 z-30 origin-left"
          style={{ scaleX }}
        />

        {/* Close Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ delay: 0.2 }}
          onClick={(e) => {
            e.stopPropagation();
            setActivePostId(null);
          }}
          className="absolute top-6 right-6 z-20 p-2 bg-black/5 hover:bg-black/10 backdrop-blur-md rounded-full transition-colors"
        >
          <X size={20} className="text-black/70" />
        </motion.button>

        {/* Hero Image */}
        <div className="relative h-[40vh] shrink-0 overflow-hidden">
           <motion.img
            layoutId={`image-${post.id}`}
            src={post.image}
            alt={post.title[language]}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="absolute bottom-8 left-8 right-8 text-white"
          >
            <span className="inline-block px-3 py-1 mb-3 text-xs font-medium tracking-wider uppercase bg-white/20 backdrop-blur-md rounded-full border border-white/10">
              {post.category[language]}
            </span>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight mb-2">
              {post.title[language]}
            </h2>
             <div className="flex items-center text-white/80 text-sm">
              <Clock size={14} className="mr-1.5" />
              {post.duration}
            </div>
          </motion.div>
        </div>

        {/* Content */}
        <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 md:p-12 bg-white scroll-smooth">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-2xl mx-auto"
          >
            <p className="text-xl md:text-2xl font-medium text-gray-900 mb-8 leading-relaxed">
              {post.summary[language]}
            </p>
            
            <div className="prose prose-lg prose-gray">
              {paragraphs.map((para, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-gray-600 leading-loose mb-6"
                >
                  {para}
                </motion.p>
              ))}
               <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-gray-600 leading-loose mt-6"
                >
                {language === 'zh' 
                  ? '（此处为模拟的详细内容。在真实应用中，这里将展示完整的博客文章，包含图片、引用和更多段落。滚动阅读体验经过优化，确保长时间阅读的舒适性。）'
                  : '（これはシミュレーションされた詳細コンテンツです。実際のアプリケーションでは、画像、引用、その他の段落を含む完全なブログ記事がここに表示されます。スクロール読書体験は、長時間の読書の快適さを確保するために最適化されています。）'}
              </motion.p>
            </div>

            <div className="mt-12 pt-8 border-t border-gray-100 flex justify-between items-center">
               <div className="flex items-center space-x-2">
                  <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                    <img src="https://picsum.photos/seed/avatar/100/100" alt="Author" className="w-full h-full object-cover" />
                  </div>
                  <div className="text-sm">
                    <p className="font-medium text-gray-900">UCL Team</p>
                    <p className="text-gray-500 text-xs">Editor</p>
                  </div>
               </div>
               <button className="flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
                 {language === 'zh' ? '分享文章' : '記事を共有'} <ChevronRight size={16} className="ml-1" />
               </button>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

