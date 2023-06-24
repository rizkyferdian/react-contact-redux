import axios, { Axios } from "axios";

export const GET_LIST_KONTAK = "GET_LIST_KONTAK"

export const getListKontak = () => {
    return (dispatch) => {
        // Loading 
        dispatch({
            type: GET_LIST_KONTAK,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        // Get API
        axios({
            method: 'GET',
            url: 'http://localhost:3000/kontaks',
            timeout: 120000
        })

            .then((response) => {
                console.log('Berhasil get data : ', response);
                //Get data Berhasil
                dispatch({
                    type: GET_LIST_KONTAK,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })
            })

            .catch((error) => {
                // Gagal Get Data
                console.log('gagal ambil data: ', error);
                dispatch({
                    type: GET_LIST_KONTAK,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message
                    }
                })
            })
    }
}