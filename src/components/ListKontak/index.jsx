import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteKontak, detailKontak, getListKontak } from '../../actions/kontakAction'

function ListKontak() {

    const { getListKontakResult, getListKontakLoading, getListKontakError, deleteKontakResult } = useSelector((state) => state.KontakReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        // Panggil Action Get List Kontak
        dispatch(getListKontak())

    }, [dispatch])

    useEffect(() => {
        if (deleteKontakResult) {
            dispatch(getListKontak())
        }
    }, [deleteKontakResult, dispatch])

    return (
        <div>
            <div>ListKontak</div>
            {
                getListKontakResult ? (
                    getListKontakResult.map((kontak) => {
                        return (
                            <div key={kontak.id}>
                                <p>{kontak.nama} - {kontak.nohp} - </p>
                                <button onClick={() => dispatch(deleteKontak(kontak.id))}>Hapus</button>
                                <button onClick={() => dispatch(detailKontak(kontak))}>Edit</button>
                            </div>
                        )
                    })
                ) : getListKontakLoading ? (
                    <p>Loading...</p>
                ) : (
                    <p>{getListKontakError ? getListKontakError : "Data Kosong"}</p>
                )
            }
        </div>
    )
}

export default ListKontak