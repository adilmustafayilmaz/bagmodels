import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="py-6 w-full shrink-0 border-t">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground text-center sm:text-left">
            © 2024 John Doe. All rights reserved.
          </p>
          <nav className="flex gap-4">
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="#"
            >
              Terms of Service
            </Link>
            <Link
              className="text-xs hover:underline underline-offset-4"
              href="#"
            >
              Privacy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
