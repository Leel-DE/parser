import { FC } from 'react';
import Title from '../../components/Title/Title.tsx';

interface testProps {
  testContent: string;
}

const PricingSection: FC<testProps> = ({ testContent }) => {
  const title: string = 'Choose the right plan for you ';
  return (
    <section className={'pricing-section'}>
      <h1>{testContent}</h1>
      <div className="pricing__wrapper container items-center my-20 mx-auto px-5">
        <div className="pricing__top-container">
          <Title
            titleContent={title}
            titleClass="mb-3 text-center"
            label={'pricing'}
            labelClass={'text-center block'}
            descriptionClass={'text-center'}
            description={
              'Choose an affordable plan that’s packed with the best features for engaging your audience, creating customer loyalty, and driving sales.'
            }
          />
        </div>
        <div className="pricing__bott-container">BOTTOM</div>
      </div>
    </section>
  );
};

export default PricingSection;
