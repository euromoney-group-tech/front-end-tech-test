import { atom } from 'recoil';

const pilotsState = atom({
  key: 'pilots',
  default: []
});

export default pilotsState;