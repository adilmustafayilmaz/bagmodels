"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeProvider } from "@/components/theme-provider";
import Component from "@/components/product-card";

// Sample data generation function
const generateSampleProducts = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i + 1,
    imageUrl: `/placeholder.svg?height=200&width=200&text=Product ${i + 1}`,
    name: `Product ${i + 1}`,
    description: `This is a short description for Product ${
      i + 1
    }. It's amazing!`,
    price: `$${(Math.random() * 100).toFixed(2)}`,
    details: `Product ${
      i + 1
    } is a high-quality item that offers excellent value. It features durable construction, versatile functionality, and a sleek design that will complement any setting. Whether you're a professional or a hobbyist, this product is sure to meet your needs and exceed your expectations.`,
  }));
};

const ITEMS_PER_PAGE = 20;
const TOTAL_PRODUCTS = 100; // Assuming we have 100 products in total

export default function HomePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const products = generateSampleProducts(TOTAL_PRODUCTS);

  const indexOfLastProduct = currentPage * ITEMS_PER_PAGE;
  const indexOfFirstProduct = indexOfLastProduct - ITEMS_PER_PAGE;
  const currentProducts = products.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const totalPages = Math.ceil(TOTAL_PRODUCTS / ITEMS_PER_PAGE);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <div className="container mx-auto px-4 py-8">
        <header className="mb-8 text-center">
          <h1 className="text-3xl font-bold mb-2">Çantalarımız</h1>
          <p className="text-muted-foreground">
            Harika Ürünlerimizi Keşfedin!!
          </p>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {currentProducts.map((product) => (
            <Component
              key={product.id}
              imageUrl="/images/test2.jpeg"
              name={product.name}
              description={product.description}
              price={product.price}
              details={product.details}
            />
          ))}
        </div>
        <div className="mt-8 flex justify-center items-center space-x-2">
          <Button
            variant="outline"
            size="icon"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous page</span>
          </Button>
          <span className="text-sm font-medium">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            variant="outline"
            size="icon"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next page</span>
          </Button>
        </div>
      </div>
    </ThemeProvider>
  );
}
