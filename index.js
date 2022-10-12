function purchaseBook({ item, discount, tax, stock, amount, credit }) {
      // using destructuring
      const { name, price } = item;

      // discount and tax amount in decimal
      const discountAmount = discount / 100 * price;

      // price after discount and tax
      const priceAfterDiscount = price - discountAmount;

      const taxAmount     = tax / 100 * priceAfterDiscount;
      const priceAfterTax = priceAfterDiscount + taxAmount;

      let remainStock = stock;
      let totalPrice  = 0;

      for (let i = 1; i <= amount; i++) {
            if (remainStock == 0) {
                  console.log("Maaf stock sudah habis. silahkan datang lagi besok!");
                  break; // brrrrrrrrrrrrrrrreeeeeeeeeeeeeeeaaaaaaaaaaaaaaaaak
            }

            totalPrice += priceAfterTax;
            remainStock -= 1;

            let message = `Transaksi berhasil. | Total : Rp ${totalPrice.toLocaleString("id")} | Sisa Stok : ${remainStock} | `;
                message += remainStock > 0 ? "Anda bisa berbelanja lagi......." : "Anda TIDAK bisa berbelanja lagi.......";

            console.log(message);
            console.log(`-------------------------------------------------------------------------------------------`);
      }

      console.log(`-------------------------------------------------------------------------------------------`);
      
      // to hold term object
      const terms = [];

      // get cicilan by divide totalPrice with credit
      const cicilan = totalPrice / credit;

      for (let i = 1; i <= credit; i++) {
            terms.push({
                  term: i,
                  total: `Rp ${(cicilan * i).toLocaleString("id")}`
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
      price: 120000,
      name: "Penggaris"
};

purchaseBook({
      item: item,
      discount: 50,
      tax: 10,
      stock: 5,
      amount: 6,
      credit: 6
});
