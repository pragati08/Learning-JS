// Do not alter the starter code

const orders = [
  {
    orderNumber: 1,
    items: [
      { name: "Cappuccino", price: 3.5 },
      { name: "Chocolate Croissant", price: 2.5 },
    ],
  },
  {
    orderNumber: 2,
    items: [
      { name: "Latte", price: 4.0 },
      { name: "Blueberry Muffin", price: 2.75 },
    ],
    discountCode: "COFFEELOVER",
  },
];

let priceAfterDisc = [];
let totalPrice = 0;

function eachItemPrice(item) {
  let a = item.items;

  let price = a.reduce((total, num) => {
    return total + num.price;
  }, 0);

  return price;
}

const applyDiscount = (discountCode, total) => {
  if (discountCode === "COFFEELOVER") {
    total = total - (total * 10) / 100;
  } else if (discountCode === "TEALOVER") {
    total = total - (total * 0) / 100;
  }

  return ((total * 100) / 100).toFixed(2);
};

function totalOrderValue(orders, applyDiscount) {
  const eachItemPrice1 = orders.map(eachItemPrice);
  for (i in orders) {
    priceAfterDisc = applyDiscount(orders[i].discountCode, eachItemPrice1[i]);

    totalPrice = totalPrice + Number(priceAfterDisc);
  }

  return totalPrice;
}

console.log(totalOrderValue(orders, applyDiscount));
