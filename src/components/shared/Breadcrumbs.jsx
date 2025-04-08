import React from 'react';

const Breadcrumbs = ({ items }) => {
  return (
    <div className="breadcrumbs">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          {items.map((item, index) => (
            <li 
              key={index} 
              className={`breadcrumb-item ${item.active ? 'active current' : ''}`}
            >
              {item.active ? (
                item.label
              ) : (
                <a href={item.href}>
                  {item.icon && <i className={`bi bi-${item.icon}`}></i>} {item.label}
                </a>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumbs;
