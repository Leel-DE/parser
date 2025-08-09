import { FC } from 'react';
import { aboutSectionProps } from '../../types/interfaces.ts';
import Title from '../../components/Title/Title.tsx';

const AboutSection: FC<aboutSectionProps> = ({ title, description }) => {
  return (
    <section id="about" className={'about-section bg-white'}>
      <div className="about-section__wrapper container items-center py-16 md:py-24 mx-auto px-5">
        <Title titleContent={title} titleClass="mb-4 text-center" />
        <p className="max-w-3xl mx-auto text-center text-lg leading-8 text-gray-600">{description}</p>
      </div>
    </section>
  );
};

export default AboutSection;
