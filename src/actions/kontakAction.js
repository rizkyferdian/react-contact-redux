import axios, { Axios } from "axios";

export const GET_LIST_KONTAK = "GET_LIST_KONTAK"
export const ADD_KONTAK = "ADD_KONTAK"
export const DELETE_KONTAK = "DELETE_KONTAK"
export const DETAIL_KONTAK = "DETAIL_KONTAK"
export const UPDATE_KONTAK = "UPDATE_KONTAK"



// AMBIL DATA API
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


// TAMBAH DATA KONTAK
export const addKontak = (data) => {
    return (dispatch) => {
        // Loading 
        dispatch({
            type: ADD_KONTAK,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        // TAMBAH DATA KONTAK
        axios({
            method: 'POST',
            url: 'http://localhost:3000/kontaks',
            timeout: 120000,
            data: data
        })

            .then((response) => {
                // console.log('Berhasil Tambah data : ', response);
                //Get data Berhasil
                dispatch({
                    type: ADD_KONTAK,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })
            })

            .catch((error) => {
                // Gagal Get Data
                // console.log('gagal Tambah data baru: ', error);
                dispatch({
                    type: ADD_KONTAK,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message
                    }
                })
            })
    }
}

// DELETE DATA KONTAK
export const deleteKontak = (id) => {
    return (dispatch) => {
        // Loading 
        dispatch({
            type: DELETE_KONTAK,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        // DELETE DATA KONTAK
        axios({
            method: 'DELETE',
            url: `http://localhost:3000/kontaks/${id}`,
            timeout: 120000,
        })

            .then((response) => {
                console.log('Berhasil delete data : ', response);
                //Get data Berhasil
                dispatch({
                    type: ADD_KONTAK,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })
            })

            .catch((error) => {
                // Gagal Get Data
                console.log('gagal Tambah data baru: ', error);
                dispatch({
                    type: ADD_KONTAK,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message
                    }
                })
            })
    }
}

export const detailKontak = (data) => {
    return (dispatch) => {
        // Loading 
        dispatch({
            type: DETAIL_KONTAK,
            payload: {
                data: data,
            }
        })
    }
}


// UPDATE DATA KONTAK
export const updateKontak = (data) => {
    return (dispatch) => {
        // Loading 
        dispatch({
            type: UPDATE_KONTAK,
            payload: {
                loading: true,
                data: false,
                errorMessage: false
            }
        })

        // TAMBAH DATA KONTAK
        axios({
            method: 'PUT',
            url: `http://localhost:3000/kontaks/${data.id}`,
            timeout: 120000,
            data: data
        })

            .then((response) => {
                // console.log('Berhasil Tambah data : ', response);
                //Get data Berhasil
                dispatch({
                    type: UPDATE_KONTAK,
                    payload: {
                        loading: false,
                        data: response.data,
                        errorMessage: false
                    }
                })
            })

            .catch((error) => {
                // Gagal Get Data
                // console.log('gagal Tambah data baru: ', error);
                dispatch({
                    type: UPDATE_KONTAK,
                    payload: {
                        loading: false,
                        data: false,
                        errorMessage: error.message
                    }
                })
            })
    }
}

