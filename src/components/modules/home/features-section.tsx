import staticData from '../../../static-data';

const FeaturesSection = () => {
  return (
    <section className="px-4 py-16 max-w-6xl mx-auto">
      <h2 className="text-center text-2xl md:text-3xl font-bold mb-10">
        INTUITIVE <span className="text-orange-500 italic">AI TOOL</span>
        <br />
        DESIGNED FOR GROWING YOUR <span className="text-orange-500 italic">BUSINESS</span>
      </h2>

      <div className="grid md:grid-cols-2 gap-4">
        {staticData.featuresData.map(item => (
          <div
            key={item.id}
            className={`flex items-start gap-4 border-[1px] border-[#F8F8F8] p-6 bg-white rounded-xl shadow text-left
              }`}
          >
            <div className="bg-gray-100 px-4 py-2 rounded-md text-orange-500 font-bold text-xl">
              {String(item.id).padStart(2, '0')}
            </div>
            <div>
              <h3 className="font-semibold mb-1">{item.heading}</h3>
              <p className="text-sm text-gray-600">{item.content}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturesSection;
