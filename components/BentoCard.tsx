import { FC } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Clock } from 'lucide-react';
import { Post } from '../data/posts';

interface BentoCardProps {
  post: Post;
  onClick: () => void;
  language: 'zh' | 'jp';
}

const BentoCard: FC<BentoCardProps> = ({ post, onClick, language }) => {
  const getSizeClasses = (size: Post['size']) => {
    switch (size) {
      case 'large':
        return 'md:col-span-2 md:row-span-2';
      case 'tall':
        return 'md:col-span-1 md:row-span-2';
      case 'medium':
        return 'md:col-span-2 md:row-span-1';
      case 'small':
      default:
        return 'md:col-span-1 md:row-span-1';
    }
  };

  return (
    <motion.div
      layoutId={`card-${post.id}`}
      onClick={onClick}
      className={`group relative rounded-3xl overflow-hidden bg-white shadow-sm hover:shadow-xl transition-shadow duration-500 cursor-pointer ${getSizeClasses(post.size)}`}
      whileHover={{ scale: 1.01 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
    >
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.img
          layoutId={`image-${post.id}`}
          src={post.image}
          alt={post.title[language]}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-80" />
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end text-white">
        <motion.div
          initial={false}
          animate={{ y: 0 }}
          className="transform transition-transform duration-500 group-hover:-translate-y-2"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="inline-block px-2.5 py-0.5 text-[10px] font-semibold tracking-wider uppercase bg-white/20 backdrop-blur-md rounded-full border border-white/10">
              {post.category[language]}
            </span>
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/20 p-1.5 rounded-full backdrop-blur-md">
               <ArrowUpRight size={16} />
            </div>
          </div>
          
          <h3 className={`font-bold leading-tight mb-2 ${post.size === 'large' ? 'text-3xl md:text-4xl' : 'text-xl md:text-2xl'}`}>
            {post.title[language]}
          </h3>
          
          <div className="flex items-center text-white/70 text-xs md:text-sm mb-0 h-0 overflow-hidden group-hover:h-auto group-hover:mb-2 transition-all duration-300 opacity-0 group-hover:opacity-100">
             <Clock size={12} className="mr-1.5" />
             {post.duration}
          </div>

          <p className="text-white/80 text-sm md:text-base line-clamp-2 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-75">
            {post.summary[language]}
          </p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default BentoCard;
