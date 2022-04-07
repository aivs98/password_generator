import {AUTH,UNAME,PASS,NAME,MAIL} from './actions'

const intialState ={
    uname:'',
    pass:'',
    name:'',
    mail:'',
    isauth:false
}

export default function reducer(state = intialState,action)
{
    switch(action.type)

    {
        case UNAME:
          return  {...state,
            uname:action.payload            
            }
        case PASS:
            return{...state,
                pass:action.payload
            }
        case NAME:
            return{...state,
                name:action.payload
            }
        case MAIL:
            return{...state,
                mail:action.payload
            }
        case AUTH:
            return{...state,
                isauth:action.payload
            }

        default:
            return state
    }
}