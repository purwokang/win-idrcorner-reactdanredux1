import React from 'react'
import { connect } from 'react-redux'

function DetailProduk({ produk }) {

    if (!produk) {
        return <div>Silakan Pilih Produk...</div>
    }

    const { id, namaproduk, harga, stok } = produk

    return (
        <div>
            <h4>Nama Produk: {namaproduk}</h4>
            <p>ID: {id}</p>
            <p>Harga: Rp {harga},- </p>
            <p>Stok: {stok}</p>
        </div>
    )
}

const stateToProps = state => {
    return { produk: state.pilihan }
}

export default connect(stateToProps)(DetailProduk)
