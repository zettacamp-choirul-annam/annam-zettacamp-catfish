function purchaseBook({ item, discount, tax, stock, amount }) {
      // discount and tax amount in decimal
      const discountAmount = discount / 100 * item.price;
      const taxAmount      = tax / 100 * item.price;

      // price after discount and tax
      const priceAfterTax      = item.price + taxAmount;
      const priceAfterDiscount = priceAfterTax - discountAmount;

      let remainStock = stock;
      let totalPrice  = 0;

      for (let i = 1; i < amount; i++) {
            if (remainStock == 0) {
                  console.log("Maaf stock sudah habis. silahkan datang lagi besok!");
                  break; // brrrrrrrrrrrrrrrreeeeeeeeeeeeeeeaaaaaaaaaaaaaaaaak
            }

            totalPrice += priceAfterDiscount;
            remainStock -= 1;

            console.log(`Transaksi berhasil. | Total : Rp ${totalPrice.toLocaleString("id")} | Sisa Stok : ${remainStock}`);

            if (remainStock > 0) {
                  console.log("Anda bisa berbelanja lagi.......");
            } else {
                  console.log("Anda TIDAK bisa berbelanja lagi.......");
            }

            console.log(`-------------------------------------------------------------------------------------------`);
      }
}

const item = {
      price: 200000,
      name: "madilog"
};

purchaseBook({
      item: item,
      discount: 30,
      tax: 10,
      stock: 5,
      amount: 20
});
