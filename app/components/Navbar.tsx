import { ShoppingCart, User } from "lucide-react";

export function Navbar() {
  return (
    <nav className="flex justify-between shadow-xl items-center p-4">
      <h1 className="text-2xl">Shirt Shop</h1>
      <div className="flex gap-4 items-center justify-center">
        <User />
        <ShoppingCart />
      </div>
    </nav>
  );
}
