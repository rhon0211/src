export type Language = 'zh' | 'jp';

export interface Post {
  id: string;
  title: {
    zh: string;
    jp: string;
  };
  category: {
    zh: string;
    jp: string;
  };
  duration: string;
  summary: {
    zh: string;
    jp: string;
  };
  content: {
    zh: string;
    jp: string;
  };
  image: string;
  size: 'large' | 'medium' | 'small' | 'tall';
}

export const postsData: Post[] = [
  {
    id: '1',
    title: {
      zh: '设计思维：从同理心到创新',
      jp: 'デザイン思考：共感からイノベーションへ',
    },
    category: {
      zh: '设计哲学',
      jp: 'デザイン哲学',
    },
    duration: '8 min',
    summary: {
      zh: '探索如何通过深入理解用户需求，将同理心转化为具有突破性的创新解决方案。',
      jp: 'ユーザーのニーズを深く理解し、共感を画期的なイノベーションに変える方法を探ります。',
    },
    content: {
      zh: '设计思维不仅仅是一个流程，它是一种心态。在UCL E-Learning的这门课程中，我们将深入探讨五个核心阶段：共情、定义、构思、原型和测试。真正的创新往往源于对用户未被满足需求的深刻洞察...',
      jp: 'デザイン思考は単なるプロセスではなく、マインドセットです。UCL E-Learningのこのコースでは、共感、定義、概念化、プロトタイプ、テストの5つの主要段階を深く掘り下げます。真のイノベーションは、ユーザーの満たされていないニーズへの深い洞察から生まれることがよくあります...',
    },
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&q=80&w=2070',
    size: 'large',
  },
  {
    id: '2',
    title: {
      zh: '高效沟通的艺术',
      jp: '効果的なコミュニケーションの技術',
    },
    category: {
      zh: '软技能',
      jp: 'ソフトスキル',
    },
    duration: '5 min',
    summary: {
      zh: '在多元化团队中建立信任与清晰度的实用指南。',
      jp: '多様なチーム内で信頼と明確さを築くための実践ガイド。',
    },
    content: {
      zh: '沟通是所有成功项目的基石。本模块将教你如何进行积极倾听，以及如何根据受众调整你的信息...',
      jp: 'コミュニケーションはすべての成功したプロジェクトの基礎です。このモジュールでは、アクティブリスニングの方法と、聴衆に合わせてメッセージを調整する方法を教えます...',
    },
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80&w=2084',
    size: 'tall',
  },
  {
    id: '3',
    title: {
      zh: 'React 19 新特性解析',
      jp: 'React 19 新機能の解説',
    },
    category: {
      zh: '技术前沿',
      jp: '技術トレンド',
    },
    duration: '12 min',
    summary: {
      zh: '深入了解 Server Components 和新的 Hook 如何改变前端开发。',
      jp: 'Server Componentsと新しいHookがフロントエンド開発をどのように変えるかを深く理解します。',
    },
    content: {
      zh: 'React 19 带来了革命性的变化。Server Actions 让我们能够更直接地处理数据突变，而无需繁琐的 API 层...',
      jp: 'React 19は革命的な変化をもたらしました。Server Actionsにより、面倒なAPIレイヤーなしでデータの変更をより直接的に処理できるようになります...',
    },
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=2070',
    size: 'medium',
  },
  {
    id: '4',
    title: {
      zh: '可持续发展的未来',
      jp: '持続可能な未来',
    },
    category: {
      zh: '企业社会责任',
      jp: 'CSR',
    },
    duration: '6 min',
    summary: {
      zh: '我们如何通过微小的改变创造巨大的环境影响。',
      jp: '小さな変化を通じて、どのように大きな環境への影響を生み出すことができるか。',
    },
    content: {
      zh: '可持续性不再是一个选项，而是必须。从减少碳足迹到支持循环经济，每一家企业都必须承担起责任...',
      jp: '持続可能性はもはや選択肢ではなく、必須です。二酸化炭素排出量の削減から循環型経済の支援まで、すべての企業が責任を負わなければなりません...',
    },
    image: 'https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&q=80&w=1948',
    size: 'small',
  },
  {
    id: '5',
    title: {
      zh: '数字时代的领导力',
      jp: 'デジタル時代のリーダーシップ',
    },
    category: {
      zh: '管理',
      jp: 'マネジメント',
    },
    duration: '10 min',
    summary: {
      zh: '适应远程工作和数字化转型的领导策略。',
      jp: 'リモートワークとデジタルトランスフォーメーションに適応するためのリーダーシップ戦略。',
    },
    content: {
      zh: '传统的领导模式正在被颠覆。在数字时代，领导者需要展现出更高的适应性和同理心...',
      jp: '従来のリーダーシップモデルは覆されつつあります。デジタル時代において、リーダーはより高い適応性と共感を示す必要があります...',
    },
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=2070',
    size: 'medium',
  },
  {
    id: '6',
    title: {
      zh: '色彩心理学',
      jp: '色彩心理学',
    },
    category: {
      zh: '设计基础',
      jp: 'デザイン基礎',
    },
    duration: '7 min',
    summary: {
      zh: '颜色如何影响用户的情绪和决策。',
      jp: '色がユーザーの感情や意思決定にどのように影響するか。',
    },
    content: {
      zh: '每种颜色都有其独特的频率和能量。了解色彩心理学可以帮助设计师更有效地传达品牌信息...',
      jp: 'すべての色には独自の周波数とエネルギーがあります。色彩心理学を理解することで、デザイナーはブランドメッセージをより効果的に伝えることができます...',
    },
    image: 'https://images.unsplash.com/photo-1502691876148-a84978e59af8?auto=format&fit=crop&q=80&w=2070',
    size: 'small',
  },
];
