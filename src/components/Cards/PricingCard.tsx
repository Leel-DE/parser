import BlueBtn from "../Btns/Blue-btn";

interface PricingCardProps {
  label: string;
  headText: string;
  price: number;
  features: string[];
  btnText: string;
}

const PricingCard: React.FC<PricingCardProps> = ({ label, headText, price, features, btnText }) => {
  return (
    <div className="pricing__card rounded-2xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow">
      <span className="text-xs uppercase tracking-widest text-gray-400">{label}</span>
      <h3 className="mt-2 text-xl font-semibold text-gray-900">{headText}</h3>
      <div className="price-holder mt-4 flex items-baseline gap-1">
        <span className="text-4xl font-semibold text-gray-900">${price}</span>
        <span className="text-sm text-gray-500">/mo</span>
      </div>
      <div className="mt-4">
        <BlueBtn text={btnText} />
      </div>
      <div className="feature-holder mt-6">
        <ul className="space-y-2 text-sm text-gray-600">
          {features.map((feature, idx) => (
            <li key={`${feature}-${idx}`}>{feature}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PricingCard;
