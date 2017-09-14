import * as Constant from "../../constants/diaries/index"

function get_diaries(page) {
  let request = new XMLHttpRequest();
request.open('GET', 'http://localhost:3000/api/diaries?page='+page, false);  // `false` makes the request synchronous
request.send(null);

if (request.status === 200) {
  return JSON.parse(request.response)
}
}

const initialState = {
  page: 0,
  diaries: get_diaries(0)
}

export default function reducer(state = initialState, action) {

  switch(action.type) {

    case Constant.next: {
      if(get_diaries(state.page+1).length > 0){
        return {
          page: state.page+1,
          diaries: get_diaries(state.page+1)
        }
      }else{
        return state
      }
    }

    case Constant.back: {
      if(get_diaries(state.page-1).length > 0){
        return {
          page: state.page-1,
          diaries: get_diaries(state.page-1)
        }
      }else{
        return state
      }
    }

    default: {
      return state
    }
  }
}
