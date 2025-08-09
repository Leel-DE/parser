import { FC } from 'react';
import { TitleComponentProps } from '../../types/interfaces.ts';

const Title: FC<TitleComponentProps> = ({
  titleContent,
  titleClass = '',
  description,
  descriptionClass = '',
  label,
  labelClass = '',
}) => {
  return (
    <div className="title-container">
      {label && <span className={`label ${labelClass}`}>{label}</span>}
      <h1 className={`main-title text-5xl md:text-6xl font-semibold ${titleClass}`}>{titleContent}</h1>
      {description && (
        <p className={`description text-gray-600 ${descriptionClass}`}>{description}</p>
      )}
    </div>
  );
};

export default Title;
