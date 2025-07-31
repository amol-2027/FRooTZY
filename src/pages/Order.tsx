import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Minus,
  Plus,
  ShoppingCart,
  MapPin,
  Truck,
  CheckCircle,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface Product {
  id: number;
  name: string;
  flavor: string;
  price: number;
  imageSrc: string;
  quantity: number;
}

const Order = () => {
  const { toast } = useToast();
  const [products, setProducts] = useState<Product[]>([
    {
      id: 1,
      name: "Frootzy Splash",
      flavor: "Fresh Watermelon",
      price: 59,
      imageSrc: "/lovable-uploads/21533967-3e57-4c29-954f-974861d0e379.png",
      quantity: 0,
    },
    {
      id: 2,
      name: "Frootzy Splash",
      flavor: "Summer Orange",
      price: 59,
      imageSrc: "/lovable-uploads/41fbb537-90b2-496f-9702-1bf11038fd9a.png",
      quantity: 0,
    },
    {
      id: 3,
      name: "Frootzy Splash",
      flavor: "Tangy Lemon",
      price: 59,
      imageSrc: "/lovable-uploads/2f57bb65-ea40-47a5-8bea-69b8faf2e8cd.png",
      quantity: 0,
    },
    {
      id: 4,
      name: "Frootzy Splash",
      flavor: "Variety Pack (All Flavors)",
      price: 119,
      imageSrc: "/lovable-uploads/herosection.png",
      quantity: 0,
    },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    pincode: "",
    paymentMethod: "cash",
  });

  const handleQuantityChange = (id: number, change: number) => {
    setProducts(
      products.map((product) =>
        product.id === id
          ? { ...product, quantity: Math.max(0, product.quantity + change) }
          : product
      )
    );
  };

  const calculateSubtotal = () => {
    return products.reduce(
      (sum, product) => sum + product.price * product.quantity,
      0
    );
  };

  const calculateTotalItems = () => {
    return products.reduce((sum, product) => sum + product.quantity, 0);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (calculateTotalItems() === 0) {
      toast({
        title: "No items in cart",
        description:
          "Please add at least one item to your cart before placing an order.",
        variant: "destructive",
      });
      return;
    }

    // Simulate order submission
    toast({
      title: "Order Placed Successfully!",
      description:
        "Thank you for your order. You will receive a confirmation email shortly.",
      variant: "default",
    });

    // Reset cart
    setProducts(products.map((product) => ({ ...product, quantity: 0 })));
  };

  return (
    <>
      <Navbar />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 px-4 bg-kraft/10">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl font-bold mb-4">Order Frootzy Splash</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Get your favorite flavors delivered directly to your doorstep.
              Free shipping on orders above ₹499.
            </p>
          </div>
        </section>

        {/* Order Section */}
        <section className="py-16 px-4">
          <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row gap-10">
              {/* Product Selection */}
              <div className="lg:w-7/12">
                <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
                  <h2 className="text-2xl font-bold mb-6 flex items-center">
                    <ShoppingCart className="mr-2" /> Select Your Products
                  </h2>

                  <div className="space-y-6">
                    {products.map((product) => (
                      <div
                        key={product.id}
                        className="flex items-center border-b border-gray-100 pb-6 last:border-0 last:pb-0"
                      >
                        <div className="w-20 h-20 flex-shrink-0">
                          <img
                            src={product.imageSrc}
                            alt={`${product.flavor} ${product.name}`}
                            className="w-full h-full object-contain"
                            onError={(e) => {
                              const target = e.target as HTMLImageElement;
                              target.src =
                                "https://via.placeholder.com/150?text=Frootzy";
                            }}
                          />
                        </div>

                        <div className="ml-4 flex-grow">
                          <h3 className="font-medium">{product.name}</h3>
                          <p className="text-gray-500">{product.flavor}</p>
                          <p className="font-medium mt-1">₹{product.price}</p>
                        </div>

                        <div className="flex items-center">
                          <button
                            onClick={() => handleQuantityChange(product.id, -1)}
                            className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center"
                            disabled={product.quantity === 0}
                          >
                            <Minus size={16} />
                          </button>
                          <span className="w-10 text-center font-medium">
                            {product.quantity}
                          </span>
                          <button
                            onClick={() => handleQuantityChange(product.id, 1)}
                            className="h-8 w-8 rounded-full bg-gray-100 flex items-center justify-center"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h3 className="text-xl font-bold mb-4">
                    Special Instructions
                  </h3>
                  <textarea
                    className="w-full border border-gray-200 rounded-md p-3 h-24"
                    placeholder="Any specific delivery instructions or requests?"
                  ></textarea>

                  <div className="mt-4 flex items-start">
                    <Checkbox id="recycling" className="mt-1" />
                    <Label
                      htmlFor="recycling"
                      className="ml-2 text-sm text-gray-600"
                    >
                      I want to participate in the Vivra Recycling Program. I
                      have 5 or more empty bottles to return for a free drink.
                    </Label>
                  </div>
                </div>
              </div>

              {/* Order Summary & Checkout Form */}
              <div className="lg:w-5/12">
                <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
                  <h2 className="text-2xl font-bold mb-6">Order Summary</h2>

                  <div className="space-y-3 text-gray-700">
                    <div className="flex justify-between">
                      <span>Subtotal ({calculateTotalItems()} items)</span>
                      <span>₹{calculateSubtotal()}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Shipping</span>
                      <span>{calculateSubtotal() >= 499 ? "Free" : "₹50"}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Tax</span>
                      <span>₹{Math.round(calculateSubtotal() * 0.05)}</span>
                    </div>
                    <div className="border-t border-gray-200 pt-3 mt-3 flex justify-between font-bold text-lg">
                      <span>Total</span>
                      <span>
                        ₹
                        {calculateSubtotal() +
                          (calculateSubtotal() >= 499 ? 0 : 50) +
                          Math.round(calculateSubtotal() * 0.05)}
                      </span>
                    </div>
                  </div>

                  {calculateTotalItems() > 0 && (
                    <div className="bg-leaf/10 border border-leaf/20 rounded-lg p-4 mt-6 flex items-start">
                      <CheckCircle className="text-leaf h-5 w-5 mr-2 mt-0.5" />
                      <div>
                        <p className="text-gray-800 font-medium">
                          Your cart qualifies for:
                        </p>
                        <ul className="text-gray-600 text-sm mt-1">
                          {calculateSubtotal() >= 499 && (
                            <li className="flex items-center">
                              <span className="h-1.5 w-1.5 rounded-full bg-leaf mr-2"></span>
                              Free shipping
                            </li>
                          )}
                          <li className="flex items-center">
                            <span className="h-1.5 w-1.5 rounded-full bg-leaf mr-2"></span>
                            Eco-friendly packaging
                          </li>
                          {calculateTotalItems() >= 3 && (
                            <li className="flex items-center">
                              <span className="h-1.5 w-1.5 rounded-full bg-leaf mr-2"></span>
                              Free sample with purchase
                            </li>
                          )}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>

                <div className="bg-white rounded-xl shadow-sm p-6">
                  <h2 className="text-2xl font-bold mb-6">Checkout</h2>

                  <Tabs defaultValue="delivery">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger
                        value="delivery"
                        className="flex items-center"
                      >
                        <Truck className="mr-2 h-4 w-4" /> Delivery
                      </TabsTrigger>
                      <TabsTrigger value="pickup" className="flex items-center">
                        <MapPin className="mr-2 h-4 w-4" /> Pickup
                      </TabsTrigger>
                    </TabsList>

                    <TabsContent value="delivery">
                      <form onSubmit={handleSubmit} className="space-y-4 mt-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="name">Full Name</Label>
                            <Input
                              id="name"
                              name="name"
                              value={formData.name}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="email">Email</Label>
                            <Input
                              id="email"
                              name="email"
                              type="email"
                              value={formData.email}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="phone">Phone Number</Label>
                          <Input
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        <div>
                          <Label htmlFor="address">Delivery Address</Label>
                          <Input
                            id="address"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                          />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="city">City</Label>
                            <Input
                              id="city"
                              name="city"
                              value={formData.city}
                              onChange={handleChange}
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="pincode">Pincode</Label>
                            <Input
                              id="pincode"
                              name="pincode"
                              value={formData.pincode}
                              onChange={handleChange}
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <p className="font-medium mb-2">Payment Method</p>
                          <div className="space-y-2">
                            <div className="flex items-center">
                              <input
                                type="radio"
                                id="cash"
                                name="paymentMethod"
                                value="cash"
                                checked={formData.paymentMethod === "cash"}
                                onChange={handleChange}
                                className="h-4 w-4"
                              />
                              <Label htmlFor="cash" className="ml-2">
                                Cash on Delivery
                              </Label>
                            </div>
                            <div className="flex items-center">
                              <input
                                type="radio"
                                id="online"
                                name="paymentMethod"
                                value="online"
                                checked={formData.paymentMethod === "online"}
                                onChange={handleChange}
                                className="h-4 w-4"
                              />
                              <Label htmlFor="online" className="ml-2">
                                Online Payment (UPI/Card)
                              </Label>
                            </div>
                          </div>
                        </div>

                        <Button
                          type="submit"
                          className="w-full mt-6 bg-kraft hover:bg-kraft/90"
                        >
                          Place Order
                        </Button>
                      </form>
                    </TabsContent>

                    <TabsContent value="pickup">
                      <div className="mt-6">
                        <p className="mb-4">
                          Select a store to pick up your order:
                        </p>

                        <div className="space-y-3">
                          <div className="border border-gray-200 rounded-lg p-4 cursor-pointer hover:border-kraft">
                            <h4 className="font-semibold">
                              Vivra Store - South Mumbai
                            </h4>
                            <p className="text-sm text-gray-600 mt-1">
                              123 Health Street, Colaba, Mumbai - 400001
                            </p>
                          </div>
                          <div className="border border-gray-200 rounded-lg p-4 cursor-pointer hover:border-kraft">
                            <h4 className="font-semibold">
                              Vivra Store - Bandra
                            </h4>
                            <p className="text-sm text-gray-600 mt-1">
                              456 Wellness Road, Bandra West, Mumbai - 400050
                            </p>
                          </div>
                          <div className="border border-gray-200 rounded-lg p-4 cursor-pointer hover:border-kraft">
                            <h4 className="font-semibold">
                              Vivra Store - Andheri
                            </h4>
                            <p className="text-sm text-gray-600 mt-1">
                              789 Nutrition Lane, Andheri East, Mumbai - 400069
                            </p>
                          </div>
                        </div>

                        <Button className="w-full mt-6 bg-kraft hover:bg-kraft/90">
                          Continue with Pickup
                        </Button>
                      </div>
                    </TabsContent>
                  </Tabs>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Order;
