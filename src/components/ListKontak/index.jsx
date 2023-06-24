import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getListKontak } from '../../actions/kontakAction'

function ListKontak() {

    const { getListKontakResult, getListKontakLoading, getListKontakError } = useSelector((state) => state.KontakReducer)
    const dispatch = useDispatch()

    useEffect(() => {
        // Panggil Action Get List Kontak
        dispatch(getListKontak())

    }, [dispatch])

    return (
        <div>
            <div>ListKontak</div>
            {
                getListKontakResult ? (
                    getListKontakResult.map((kontak) => {
                        return (
                            <p key={kontak.id}>{kontak.nama} - {kontak.nohp}</p>
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