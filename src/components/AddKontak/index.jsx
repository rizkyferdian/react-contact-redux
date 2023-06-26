import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addKontak, getListKontak } from '../../actions/kontakAction'

function AddContact() {
    const [nama, setNama] = useState('')
    const [nohp, setNohp] = useState('')

    const { addKontakResult } = useSelector((state) => state.KontakReducer)
    const dispatch = useDispatch()

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(addKontak({ nama: nama, nohp: nohp }))
    }

    useEffect(() => {
        if (addKontakResult) {
            dispatch(getListKontak())
        }
    }, [addKontakResult])

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