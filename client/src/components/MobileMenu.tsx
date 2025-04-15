import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks } from "@/lib/constants";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const handleLinkClick = () => {
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="md:hidden bg-card absolute w-full py-4 shadow-lg border-b border-white/5"
        >
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-foreground hover:text-primary transition-colors font-medium py-2"
                  onClick={handleLinkClick}
                >
                  {link.text}
                </a>
              ))}
              <a
                href="#contact"
                className="px-4 py-2 rounded-md bg-gradient-to-r from-primary to-secondary text-white font-medium hover:opacity-90 transition-opacity w-full text-center"
                onClick={handleLinkClick}
              >
                Contact
              </a>
            </nav>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
