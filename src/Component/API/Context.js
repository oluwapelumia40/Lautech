import { createContext, useReducer} from "react";
import { reducer } from "./Reducer";

const Initial_State = {
    isFetching: false,
    user: null,
    error: false,
}

export const context = createContext(Initial_State) 

export const UserProvider = ({children}) => {
    const [state, dispatch] = useReducer (reducer, Initial_State)
    return (
        <context.Provider value={ {
            isFetching: state.isFetching,
            user: state.user,
            error: state.error,
            dispatch
         }}>
            {children}
        </context.Provider>
    )
}