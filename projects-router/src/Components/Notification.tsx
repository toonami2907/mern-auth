import React from 'react';

const Notification = ({ count }) => {
  return (
    <div className="absolute top-0 right-0 mt-2 mr-2 bg-blue-500 text-white px-2 py-1 rounded-full">
      {count}
    </div>
  );
};

export default Notification;
