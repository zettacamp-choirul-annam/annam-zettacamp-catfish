function purchaseBook({ item, discount, tax, stock, amount, credit }) {
      // memecah value dari object
      // kedalam variable baru
      const { name, price } = item;
 
      // mengkonversi nilai diskon dari
      // persen ke desimal
      const discountAmount = discount / 100 * price;

      // menghitung harga setelah diskon
      const priceAfterDiscount = price - discountAmount;

      // mengkonversi nilai tax dari
      // persen ke desimal berdasarkan harga setelah diskon
      const taxAmount = tax / 100 * priceAfterDiscount;

      // menghitung harga + pajak
      const priceAfterTax = priceAfterDiscount + taxAmount;

      // buat nyimpin jumlah stok
      // yang tersisa
      let remainStock = stock;

      // buat nyimpen total harga
      let totalPrice  = 0;

      for (let i = 1; i <= amount; i++) {
            if (remainStock == 0) {
                  console.log("Maaf stock sudah habis. silahkan datang lagi besok!");
                  break; // brrrrrrrrrrrrrrrreeeeeeeeeeeeeeeaaaaaaaaaaaaaaaaak
            }

            // menambah jumlah total harga
            totalPrice += priceAfterTax;
            // mengurangi stok
            remainStock -= 1;

            let message = `Transaksi berhasil. | Total : Rp ${totalPrice.toLocaleString("id")} | Sisa Stok : ${remainStock} | `;
                message += remainStock > 0 ? "Anda bisa berbelanja lagi......." : "Anda TIDAK bisa berbelanja lagi.......";

            console.log(message);
            console.log(`-------------------------------------------------------------------------------------------`);
      }

      console.log(`-------------------------------------------------------------------------------------------`);
      
      // buat nyimpen object term
      const terms = [];

      // menghitung cicilan dengan membagi 
      // total harga dengan berapa lama masa kreditnya
      let cicilan = parseFloat((totalPrice / credit).toFixed(2));
      // let cicilan = 857.14;

      for (let i = 1; i <= credit; i++) {
            let totalCicilan = cicilan * i;

            // kalo udah nyampe ujung
            if (i == credit) {
                  const diff = totalPrice - totalCicilan;
                  cicilan += diff;
                  totalCicilan += diff;
            }

            // push object kedalam array terms
            terms.push({
                  term: i,
                  cicilan: cicilan.toFixed(2),
                  total: `$${(totalCicilan).toFixed(2)}`
            });
      }

      const terms2 = [
            "===================================",
            ...terms, // using spread operator
            "===================================",
      ];

      console.log(terms2);
}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const item = {
      price: 6000,
      name: "Penggaris"
};

purchaseBook({
      item: item,
      discount: 0,
      tax: 0,
      stock: 5,
      amount: 1,
      credit: 7
});
