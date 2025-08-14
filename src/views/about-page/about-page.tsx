import { FC } from 'react';
import Title from '../../components/Title/Title';
import Header from '../../layout/header/Header';
import Footer from '../../layout/footer/Footer';
import './about-page.scss';

const AboutPage: FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="about-page min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="hero-section py-20 bg-white">
          <div className="container mx-auto px-5 text-center">
            <Title 
              titleContent="О нас" 
              titleClass="mb-6 text-center"
              description="Мы создаем инновационные решения для будущего"
              descriptionClass="text-xl text-gray-600 max-w-2xl mx-auto"
            />
          </div>
        </section>

        {/* Mission Section */}
        <section className="mission-section py-16 bg-white">
          <div className="container mx-auto px-5">
            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-gray-800 mb-6">Наша миссия</h2>
                  <p className="text-lg text-gray-600 leading-relaxed mb-6">
                    Мы стремимся создавать технологии, которые делают мир лучше. 
                    Наша команда работает над решениями, которые помогают людям 
                    и бизнесу достигать новых высот.
                  </p>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Мы верим в силу инноваций и постоянно ищем новые способы 
                    решения сложных задач.
                  </p>
                </div>
                <div className="bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl p-8 text-white text-center">
                  <div className="text-4xl font-bold mb-2">5+</div>
                  <div className="text-lg">Лет опыта</div>
                  <div className="text-4xl font-bold mb-2 mt-6">100+</div>
                  <div className="text-lg">Проектов</div>
                  <div className="text-4xl font-bold mb-2 mt-6">50+</div>
                  <div className="text-lg">Довольных клиентов</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="values-section py-16 bg-gray-50">
          <div className="container mx-auto px-5">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Наши ценности</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Принципы, которые направляют нашу работу каждый день
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Инновации</h3>
                <p className="text-gray-600 text-center">
                  Мы постоянно ищем новые подходы и технологии для решения задач
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Качество</h3>
                <p className="text-gray-600 text-center">
                  Мы не идем на компромиссы в вопросах качества наших решений
                </p>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-shadow">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                  <svg className="w-8 h-8 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center">Команда</h3>
                <p className="text-gray-600 text-center">
                  Мы ценим каждого члена команды и работаем сообща для достижения целей
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="team-section py-16 bg-white">
          <div className="container mx-auto px-5">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Наша команда</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Талантливые профессионалы, которые воплощают наши идеи в жизнь
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                  АК
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Алексей Ковалев</h3>
                <p className="text-gray-600">CEO & Основатель</p>
              </div>

              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-green-400 to-teal-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                  МП
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Мария Петрова</h3>
                <p className="text-gray-600">CTO</p>
              </div>

              <div className="text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center text-white text-3xl font-bold">
                  ДС
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Дмитрий Сидоров</h3>
                <p className="text-gray-600">Lead Developer</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="contact-cta py-16 bg-gradient-to-r from-blue-600 to-indigo-700">
          <div className="container mx-auto px-5 text-center">
            <h2 className="text-3xl font-bold text-white mb-6">Готовы начать проект?</h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Свяжитесь с нами, и мы обсудим, как можем помочь вашему бизнесу
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Связаться с нами
            </button>
          </div>
        </section>
      </main>

      <Footer
        content={`© ${currentYear} Your Company. All rights reserved.`}
      />
    </div>
  );
};

export default AboutPage;
