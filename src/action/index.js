// Action Creator 1

export const ambilData = () => {

    const data = [
        { id: 1, namaproduk: 'Kipas Angin', harga: 200000, stok: 40 },
        { id: 2, namaproduk: 'Meja Belajar', harga: 1000000, stok: 4 },
        { id: 3, namaproduk: 'Lampu Tidur', harga: 40000, stok: 400 },
        { id: 4, namaproduk: 'Kursi Teras', harga: 800000, stok: 8 },
        { id: 5, namaproduk: 'Jam Dinding', harga: 150000, stok: 27 },
        { id: 6, namaproduk: 'Vas Bunga', harga: 50000, stok: 100 }
    ]

    // Action
    return {
        type: 'AMBIL_DATA',
        data: data
    }
}

// Action Creator 2
export const pilihProduk = (produk) => {
    return {
        type: 'PILIH_PRODUK',
        data: produk
    }
}