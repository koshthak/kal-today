import React from 'react';

type Props = {
  imgSrc: string;
  onClick: () => void;
  className: string;
  imgClassName?: string;
};

const ImageBtn: React.FC<Props> = ({
  imgSrc,
  onClick,
  className,
  imgClassName
}: Props) => {
  return (
    <button
      type="button"
      className={`transparent-btn ${className}`}
      onClick={onClick}
    >
      <img src={imgSrc} className={imgClassName} alt="prev-btn" />
    </button>
  );
};

export default ImageBtn;
