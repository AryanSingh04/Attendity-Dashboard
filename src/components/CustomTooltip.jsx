import React from 'react';

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className='bg- border border-gray-300 rounded-md p-2 shadow-md bg-main-light-bg dark:bg-main-dark-bg'
      >
        <p >{label}</p>
        {payload.map((entry, index) => (
          <p key={index} style={{ margin: 0, color: entry.stroke }}>
            {`${entry.name}: ${entry.value}`}
          </p>
        ))}
      </div>
    );
  }

  return null;
};

export default CustomTooltip;
