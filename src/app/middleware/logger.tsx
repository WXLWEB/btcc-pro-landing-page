import { enableLog } from '../utils/log';

export default store => next => action => {
  if (enableLog) {
    console.log(action);
  }
  return next(action);
};
