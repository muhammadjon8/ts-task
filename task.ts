type Cart = {
  name: string;
  price: number;
};

let shoppingCart: Cart[] = [];

function addItem(name: string, price: number): string {
  const item: Cart = { name, price };
  shoppingCart.push(item);
  return `Item "${name}" added to the cart`;
}

function calculateTotalCost(cart: Cart[]): number {
  return cart.reduce((total, item) => total + item.price, 0);
}

console.log(addItem("Phone Case", 1.2));
console.log(addItem("Charger", 0.8));

const total = calculateTotalCost(shoppingCart);
console.log(`Total cost: $${total}`);
