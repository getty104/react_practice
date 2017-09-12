import * as Constant from "../../constants/diaries/index"

const initialState = {
  page: 1
}

export default function reducer(state = initialState, action) {
  switch(action.type) {

    case Constant.next: {
      return {page: state.page+1}
    }

    case Constant.back: {
      return {page: state.page-1}
    }


    default:
      return state

  }
}
