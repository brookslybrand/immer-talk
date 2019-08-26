import uuid from 'uuid/v4';

const N = 10;

export default Array.from({ length: N }).map((_, i) => ({
  id: uuid(),
  title: `Title ${i}`
}));
