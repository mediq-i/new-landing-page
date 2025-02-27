import React from "react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <div className="flex items-center space-x-2">
      <Button
        variant="outline"
        size="sm"
        className="hidden sm:flex border-primary text-primary hover:bg-primary hover:text-primary-foreground"
      >
        Login
      </Button>
      <Button
        size="sm"
        className="bg-primary text-primary-foreground hover:bg-primary/90"
      >
        Sign Up
      </Button>
    </div>
  );
}
