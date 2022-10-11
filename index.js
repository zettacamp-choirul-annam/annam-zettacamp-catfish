function purchaseBook(book, discount, tax) {
      const totalDiscount = discount / 100 * book.price;
      const totalTax = tax / 100 * book.price;

      const priceAfterDiscount = book.price - totalDiscount;
      const priceAfteTax = priceAfterDiscount + totalTax;
      
      console.log("===========================================");
      console.log(`Amount of discount   : ${discount}%`);
      console.log(`Price after discount : Rp ${priceAfterDiscount}`);
      console.log(`Amount of tax        : ${tax}%`);
      console.log(`Price after tax      : Rp ${priceAfteTax}`);
      console.log("===========================================");
}

const book = {
      price: 200000,
      name: "",
      in_stock: true
};

purchaseBook(book, 40, 10);