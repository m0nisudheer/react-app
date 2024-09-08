import React from 'react';

const Categories = ({ imageSrc, title }) => {
  return (
    <div>
      <img src={imageSrc} alt={title} />
      <h1>{title}</h1>
    </div>
  );
};

export default Categories;
