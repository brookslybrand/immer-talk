import React, { useReducer } from 'react';

import Card from './Card';

import initialData from './fake_data';

function App() {
  const [data, dispatch] = useReducer(reducer, initialData);

  return (
    <React.Profiler
      id="main"
      onRender={(_, phase) => {
        console.count(`render ${phase}`);
      }}
    >
      <button onClick={() => dispatch({ type: REVERSE })}>
        This is a button
      </button>

      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {data.map(d => (
          <Card key={d.id} {...d} />
        ))}
      </div>
    </React.Profiler>
  );
}

const REVERSE = 'REVERSE';

const reducer = (state, action) => {
  switch (action.type) {
    case REVERSE: {
      const copy = [...state].reverse();
      return copy;
    }
    default:
      return state;
  }
};
export default App;
