import React from 'react';

interface PersonaImageProps extends React.HTMLAttributes<HTMLImageElement> {
  name: string;
  alt: string;
}

export const PersonaImage: React.FC<PersonaImageProps> = ({ name, alt, ...props }) => {
  return (
    <img
      src={`/${name}.png`}
      alt={alt}
      {...props}
    />
  );
};
