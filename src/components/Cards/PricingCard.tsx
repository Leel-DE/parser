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
    <div className="pricing__card">
      <span>{label}</span>
      <p>{headText}</p>
      <div className="price-holder">
        <span>{price}</span>
      </div>
      <BlueBtn text={btnText} />
      <div className="feature-holder">
        <ul>
          {features.map((el) => (
            <li key={Date.now()+ Math.random()}>{el}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PricingCard;
