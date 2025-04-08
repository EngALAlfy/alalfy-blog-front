import React from 'react';
import Breadcrumbs from './Breadcrumbs';

const PageTitle = ({ title, description, breadcrumbItems }) => {
  return (
    <div className="page-title">
      <Breadcrumbs items={breadcrumbItems} />
      
      <div className="title-wrapper">
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default PageTitle;
