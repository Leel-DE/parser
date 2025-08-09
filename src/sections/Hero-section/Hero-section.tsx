import { FC } from 'react';
import Title from '../../components/Title/Title.tsx';

const HeroSection: FC = () => {
  return (
    <header className="hero">
      <div className="hero-wrapper container flex flex-col items-center justify-center text-center mx-auto px-6 py-24 md:py-32">
        <Title
          titleContent={'Parse the web. Effortlessly.'}
          titleClass="mb-4 tracking-tight"
          description={
            'A minimal toolkit to extract, organize, and scale your data pipelines with clarity.'
          }
          descriptionClass="text-gray-600 max-w-2xl mx-auto"
          label="r-parser"
          labelClass="uppercase tracking-widest text-xs text-gray-400"
        />
        <div className="mt-8 flex flex-col sm:flex-row gap-3">
          <a
            href="#pricing"
            className="inline-flex items-center justify-center rounded-xl bg-gray-900 text-white px-5 py-3 text-sm font-medium shadow-sm hover:bg-black transition-colors"
          >
            Get Started
          </a>
          <a
            href="#about"
            className="inline-flex items-center justify-center rounded-xl border border-gray-300 text-gray-900 px-5 py-3 text-sm font-medium hover:bg-gray-50 transition-colors"
          >
            Learn More
          </a>
        </div>
      </div>
    </header>
  );
};

export default HeroSection;
