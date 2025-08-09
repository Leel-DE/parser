import { FC } from 'react';
import Title from '../../components/Title/Title.tsx';
import PricingCard from '../../components/Cards/PricingCard.tsx';

interface pricingProps {
  title: string;
}

const PricingSection: FC<pricingProps> = ({ title }) => {
  return (
    <section id={'pricing'} className={'pricing-section'}>
      <div className="pricing__wrapper items-center my-20 mx-auto">
        <div className="pricing__top-container container px-5 items-center my-12 mx-auto">
          <Title
            titleContent={title}
            titleClass="mb-3 text-center"
            description={
              'Choose an affordable plan that’s packed with the best features for engaging your audience, creating customer loyalty, and driving sales.'
            }
            descriptionClass="text-gray-600 max-w-2xl mx-auto text-center"
          />
        </div>
        <div className="pricing__bott-container">
          <div className="pricing__cards-wrapper container px-5 my-12 mx-auto">
            <PricingCard
              label="label"
              headText="Starter"
              price={9}
              btnText="Choose Starter"
              features={[
                'Basic selectors',
                '1 project',
                'Email support',
              ]}
            />
            <PricingCard
              label="label"
              headText="Pro"
              price={21}
              btnText="Choose Pro"
              features={['Advanced selectors', '5 projects', 'Priority support']}
            />
            <PricingCard
              label="label"
              headText="Enterprise"
              price={49}
              btnText="Contact Sales"
              features={['Custom selectors', 'Unlimited projects', 'SLA']}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
