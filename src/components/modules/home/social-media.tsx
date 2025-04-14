import {
  aiWritting,
  comparisonReport,
  postCreation,
  seoOptimization,
} from '../../../static-img-url';

const cards = [
  {
    icon: postCreation,
    color: 'bg-green-500',
    title: 'Automated Post Creation',
    description: 'Write an amazing description in this dedicated card section. Each word counts.',
  },
  {
    icon: seoOptimization,
    color: 'bg-purple-500',
    title: 'SEO Optimization',
    description: 'Write an amazing description in this dedicated card section. Each word counts.',
  },
  {
    icon: aiWritting,
    color: 'bg-blue-500',
    title: "AI Writing fro Ad's",
    description: 'Write an amazing description in this dedicated card section. Each word counts.',
  },
  {
    icon: comparisonReport,
    color: 'bg-yellow-500',
    title: 'Comparison Report',
    description: 'Write an amazing description in this dedicated card section. Each word counts.',
  },
];

const AdditionalFeatures = () => {
  return (
    <section className="py-16 px-4 max-w-4xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 leading-snug mb-12">
        SEAMLESS SOCIAL MEDIA <br className="hidden sm:block" />
        MANAGEMENT FOR SMARTER GROWTH
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-md border border-gray-100 flex flex-col items-start gap-4"
          >
            <div className={`w-12 h-12 rounded flex items-center justify-center`}>
              {' '}
              <img src={card.icon} alt="" />{' '}
            </div>
            <div className="flex flex-col gap-2">
              <h3 className="font-semibold text-sm text-gray-900 mb-1 uppercase">{card.title}</h3>
              <p className="text-sm text-gray-600 leading-snug">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AdditionalFeatures;
