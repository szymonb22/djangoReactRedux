import axios from "axios"
import { ADD_PROJECT_FAIL, ADD_PROJECT_REQUEST, ADD_PROJECT_SUCCESS, DETAIL_PROJECT_FAIL, DETAIL_PROJECT_REQUEST, DETAIL_PROJECT_SUCCESS, GET_PROJECT_FAIL, GET_PROJECT_REQUEST, GET_PROJECT_SUCCESS } from "../constants/projectConstants"

export const getListProjects = () => async (dispatch) => {

    try {

        dispatch({ type: GET_PROJECT_REQUEST })

        const { data } = await axios.get('http://127.0.0.1:8000/api/');

        dispatch({
            type: GET_PROJECT_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type:GET_PROJECT_FAIL,
            payload: error.response && error.response.data.message
        })
    }
}

export const addProject = (projectData) => async (dispatch) => {

    try {

        dispatch({ type: ADD_PROJECT_REQUEST })

        const { data } = await axios.post('http://127.0.0.1:8000/api/',projectData);

        dispatch({
            type: ADD_PROJECT_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type:ADD_PROJECT_FAIL,
            payload: error.response && error.response.data.message
        })
    }
}
export const detailProject = (id) => async (dispatch) => {

    try {

        dispatch({ type: DETAIL_PROJECT_REQUEST })

        const { data } = await axios.get(`http://127.0.0.1:8000/${id}`);

        dispatch({
            type: DETAIL_PROJECT_SUCCESS,
            payload: data
        })

    } catch (error) {
        dispatch({
            type:DETAIL_PROJECT_FAIL,
            payload: error.response && error.response.data.message
        })
    }
}

export default getListProjects;