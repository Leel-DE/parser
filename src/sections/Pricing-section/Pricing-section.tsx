import { FC } from 'react';
import Title from '../../components/Title/Title.tsx';
import PricingCard from '../../components/Cards/PricingCard.tsx';

interface pricingProps {
  title: string;
}

const PricingSection: FC<pricingProps> = ({ title }) => {
  return (
    <section className={'pricing-section'}>
      <div className="pricing__wrapper items-center my-20 mx-auto">
        <div className="pricing__top-container container px-5 items-center my-20 mx-auto">
          <Title
            titleContent={title}
            titleClass="mb-3 "
            description={
              'Choose an affordable plan that’s packed with the best features for engaging your audience, creating customer loyalty, and driving sales.'
            }
          />
        </div>
        <div className="pricing__bott-container ">
            <div className="pricing__cards-wrapper container px-5 items-center my-20 mx-auto">
              <PricingCard
                label='label'
                headText='head text'
                price={21}
                btnText='ololo btn'
                features={['feature!','asdasd','asdasda']}
              />
              <PricingCard
                label='label'
                headText='head text'
                price={21}
                btnText='ololo btn'
                features={['feature!','asdasd','asdasda']}
              />
              <PricingCard
                label='label'
                headText='head text'
                price={21}
                btnText='ololo btn'
                features={['feature!','asdasd','asdasda']}
              />
            </div>
          </div>
      </div>
    </section>
  );
};

export default PricingSection;
