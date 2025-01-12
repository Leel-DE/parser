import { FC } from 'react';
import FooterGridColumn from '../../components/FooterGridColumn/FooterGridColumn.tsx';

interface testProps {
  content: string;
}

const Footer: FC<testProps> = ({ content }) => {
  return (
    <footer className="footer">
      <div className="footer__wrapper flex container my-5 mx-auto px-5 pt-32">
        <div className="footer-top">
          <div className="footer-social">
            <div className="footer-social__wrapper">
              <i className="icon-logo nav-logo-img w-11" />
              <span className="footer-social-text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consequuntur delectus dolor exercitationem impedit libero
                nostrum numquam soluta sunt tempora veniam!
              </span>
              <div className="footer-social__links-container">
                <ul>
                  <li>
                    <a href="">
                      <i className="icon-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="icon-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="icon-linkedin"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="icon-github"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="icon-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-links-grid">
            <FooterGridColumn
              title="Company"
              gridItems={['About Us', 'Careers', 'Press', 'Blog', 'Contact']}
            />
            <FooterGridColumn
              title="Resources"
              gridItems={[
                'Help Center',
                'Documentation',
                'API Reference',
                'Community Forum',
                'Status',
              ]}
            />
            <FooterGridColumn
              title="Legal"
              gridItems={[
                'Privacy Policy',
                'Terms of Service',
                'Cookie Policy',
                'Security',
                'GDPR',
              ]}
            />
            <FooterGridColumn
              title="Social"
              gridItems={[
                'Facebook',
                'Twitter',
                'LinkedIn',
                'Instagram',
                'YouTube',
              ]}
            />
          </div>
        </div>
        <div className="footer-bott">
          <span>{content}</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
