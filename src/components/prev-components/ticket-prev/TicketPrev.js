import React, {useState} from 'react';

const TicketPrev = ({name}) => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count => count + 1);
  };

  return (
    <div>
      <h2 className="title">{name}</h2>
      <button onClick={increment}>Add</button>
      <h2 className="total">{count}</h2>
    </div>
  );
};

export default TicketPrev;