"use client";

import type React from "react";

import { motion } from "framer-motion";

export function MainHeaderAnimation({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      className="w-full"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      <motion.div
        initial={{ y: 20 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}
