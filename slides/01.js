/* eslint-disable */

// Prior Art

const state = { really: { deeply: { nested: { values: [0, 1, 2] } } } };

// es6 (probably...who can remember anymore)
// see what I mean by spread hell?
const stateSquared = {
  ...state,
  ...{
    ...state.really,
    ...{
      ...state.really.deeply,
      ...{
        ...state.really.deeply.nested,
        values: state.really.deeply.nested.values.map(d => d ** 2)
      }
    }
  }
};

// immutable (and friends)
// pretty cool, but you have to use different collections and remember when
// you're using those collections and when you're in regular ol' JS land
import { fromJS } from 'immutable';
const stateCubed = fromJS(state)
  .updateIn(['really', 'deeply', 'nested', 'values'], d => d.map(c => c ** 3))
  .toJS();
