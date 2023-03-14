import * as API from '../api'
import { setCurrentUser } from './currentUser'

export const signup = (authData, navigate) => async (dispatch) => {
    try {
        const {data} = await API.signUp(authData)
        dispatch({type : 'AUTH', data})
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile")) ))
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}

export const login = (authData, navigate) => async (dispatch) => {
    try {
        const {data} = await API.logIn(authData)
        dispatch({type : 'AUTH', data})
        dispatch(setCurrentUser(JSON.parse(localStorage.getItem("Profile")) ))
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}

