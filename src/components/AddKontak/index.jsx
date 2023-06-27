import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addKontak, getListKontak, updateKontak } from '../../actions/kontakAction'

function AddContact() {
    const [nama, setNama] = useState('')
    const [nohp, setNohp] = useState('')
    const [id, setId] = useState('')

    const { addKontakResult, detailKontakResult, updateKontakResult } = useSelector((state) => state.KontakReducer)
    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault()
        if (id) {
            dispatch(updateKontak({ id: id, nama: nama, nohp: nohp }))
        } else {
            dispatch(addKontak({ nama: nama, nohp: nohp }))
        }
    }

    useEffect(() => {
        if (addKontakResult) {
            dispatch(getListKontak())
        }
    }, [addKontakResult, dispatch])

    useEffect(() => {
        if (detailKontakResult) {
            setNama(detailKontakResult.nama)
            setNohp(detailKontakResult.nohp)
            setId(detailKontakResult.id)
        }
    }, [detailKontakResult, dispatch])

    useEffect(() => {
        if (updateKontakResult) {
            dispatch(getListKontak())
            setNama('')
            setNohp('')
            setId('')
        }
    }, [updateKontakResult, dispatch])

    return (
        <>
            <form onSubmit={(event) => handleSubmit(event)}>
                <input type="text" placeholder='Nama' value={nama}
                    onChange={(event) => setNama(event.target.value)} />
                <input type="text" placeholder='Nomor Handphone' value={nohp}
                    onChange={(event) => setNohp(event.target.value)} />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}

export default AddContact