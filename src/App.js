import React from 'react';

import Card from './Card';

import data from './fake_data';

function App() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      {data.map(d => (
        <Card key={d.id} {...d} />
      ))}
    </div>
  );
}

export default App;
