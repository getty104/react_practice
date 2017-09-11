import * as App from "../../constants/top/app"
const initialState = {
  fuga: 1
}

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case App.INCREMENT: {
      return { fuga: state.fuga + 1 }
    }

    case App.DECREMENT: {
      return { fuga: state.fuga - 1 }
    }

    default:
      return state
  }
}
