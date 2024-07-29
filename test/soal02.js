// Import
const fs = require('fs');

// Membaca file json productBin
fs.readFile('./test/productBin.json', 'utf8', (err, jsonString) => {
    
    // Cetak error jika gagal membaca file json
    if (err) {
        console.error('Error reading file:', err);
        return;
    }

    // lakukan try
    try {
        var totalQuantity = 0;

        // Parsing data json
        const productBin = JSON.parse(jsonString);

        // Lakukan perulangan untuk mendapatkan value tiap element dari array data
        productBin.data.forEach(element => {
            var productCode = element.productCode;
            var quantity = element.quantity;

            // ambil data jika codenya FBR00040101
            if(productCode == 'FBR00040101'){
                // menjumlahkan Quantity dari tiap element
                totalQuantity = totalQuantity + quantity;
            }
        });

        // Cetak hasil penjumlahan quantity yang memiliki productcode FBR00040101
        console.log(`Total dari barang dengan ProductCode FBR00040101 adalah : ${totalQuantity}`);

    } catch (error) {
        // Print Error jika gagal parsing data json
        console.error('Error parsing JSON:', error);
    }
});
