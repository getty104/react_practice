import * as Constant from '../../constants/diaries/index';

export default {
  next: () => {
    return { type: Constant.next }
  },

  back: () => {
    return { type: Constant.back }
  }
}

