import * as App from '../../constants/top/app';

export default {
  increment: () => {
    return { type: App.INCREMENT }
  },

  decrement: () => {
    return { type: App.DECREMENT }
  }
}
