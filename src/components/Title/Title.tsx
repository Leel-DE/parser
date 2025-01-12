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
      <h1 className={`main-title text-6xl ${titleClass}`}>{titleContent}</h1>
      {description && (
        <p className={`description ${descriptionClass}`}>{description}</p>
      )}
    </div>
  );
};

export default Title;
