import React, { useState } from 'react';

function List() {
  const [showNames, setShowNames] = useState(false) 

  const names = ['kelly', 'bancy', 'mish', 'sha', 'zish'];

  const renderList = names.map((name, index) => {
    return <li key={index}>{name}</li>;
  });

  function handleClickNames() {
    setShowNames(prevShownames => !prevShownames)
    
  }

  return (
    <div>
      <h1>List of Names</h1>
      
      <button onClick={handleClickNames}>{showNames ? 'hide names' : 'show names'}</button>
      {showNames && <ol>{renderList}</ol>}
    </div>
  );
}

export default List;
