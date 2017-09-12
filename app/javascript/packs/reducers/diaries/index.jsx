import * as Constant from "../../constants/diaries/index"
import request from 'superagent/superagent'
function diaries() {
return
}
const initialState = {
  page: 1,
  diaries: diaries()
}

export default function reducer(state = initialState, action) {

  switch(action.type) {

    case Constant.next: {
      return {page: state.page+1,
        diaries: state.diaries}
      }

      case Constant.back: {
        return {page: state.page-1,
          diaries: state.diaries }
        }

        default: {
         return request.get('http://localhost:3000/api/diaries').end((err, res) => {
          return {page: state.page,
                  diaries: res.body
                };
        });
        }

      }
    }
