import React, { Profiler } from 'react';

const CustomProfiler = ({
  id,
  showCount = true,
  showActualDuration = true,
  showBaseDuration = false,
  children
}) => {
  return (
    <Profiler
      id={id}
      onRender={(id, phase, actualDuration, baseDuration) => {
        // time spent rendering the committed update
        if (showCount) console.count(`${id} ${phase}`);
        if (showActualDuration) console.log('actualDuration', actualDuration);
        // estimated time to render the entire subtree without memoization
        if (showBaseDuration) console.log('baseDuration', baseDuration);
      }}
    >
      {children}
    </Profiler>
  );
};

export default CustomProfiler;
