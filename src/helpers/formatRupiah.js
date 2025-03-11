// Fungsi untuk memformat angka menjadi Rupiah
export function formatRupiah(number) {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR'
    }).format(number);
}

// Contoh penggunaan
const harga = 50000;
console.log(formatRupiah(harga)); // Output: "Rp50.000,00"
