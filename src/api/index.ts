import axios from 'axios'

export async function signUp(dispatch: any, data: any): Promise<any> {
    return axios.post('/api/signup', data).then((response: any) => {
        dispatch({
            type: 'SIGNUP_SUCCESS', payload: response.data,
        });
        return response.data;
    }).catch((err: any) => {

        dispatch({
            type: 'SIGNUP_FAILURE',
            payload: err.message || 'Something went wrong during sign up',
        });
        throw err;
    });
}
