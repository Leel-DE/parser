import { FC } from 'react';
import { FooterGridColumnProps } from '../../types/interfaces.ts';

const FooterGridColumn: FC<FooterGridColumnProps> = ({ title, gridItems }) => {
  return (
    <div className="footer-links-grid__wrapper">
      <div className="footer-links-grid__column">
        <span className="footer__column-title">{title}</span>
        <ul>
          {gridItems.map((gridItem) => {
            return (
              <li key={Date.now()+Math.random()}>
                <a href="#">{gridItem}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default FooterGridColumn;
