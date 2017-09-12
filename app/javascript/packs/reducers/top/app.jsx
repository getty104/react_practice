import * as Constant from "../../constants/top/app"
const initialState = {
  fuga: 1
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case Constant.INCREMENT: {
      return { fuga: state.fuga + 1 }
    }

    case Constant.DECREMENT: {
      return { fuga: state.fuga - 1 }
    }

    case Constant.MUL: {
      return { fuga: state.fuga * 2 }
    }

    case Constant.DIV: {
      return { fuga: state.fuga / 2 }
    }

    default:
      return state
  }
}
