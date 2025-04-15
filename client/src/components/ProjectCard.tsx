import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface ProjectCardProps {
  title: string;
  description: string;
  category: string;
  tags: string[];
  isPrimary: boolean;
  image?: string;
}

export default function ProjectCard({ title, description, category, tags, isPrimary, image }: ProjectCardProps) {
  const color = isPrimary ? "primary" : "secondary";
  
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-card rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 group"
    >
      <div className="relative">
        <div className="w-full h-48 bg-background/50 flex items-center justify-center overflow-hidden">
          {image ? (
            <img 
              src={image}
              alt={title}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          ) : (
            <motion.i 
              initial={{ scale: 0.8, opacity: 0.5 }}
              animate={{ 
                scale: [0.8, 1.2, 1],
                opacity: [0.5, 0.8, 0.6]
              }}
              transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              className={cn(
                "fas fa-code text-6xl",
                isPrimary ? "text-primary/30" : "text-secondary/30"
              )}
            />
          )}
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent"></div>
        <div className={cn(
          "absolute top-4 right-4 text-white text-xs font-medium px-2 py-1 rounded",
          isPrimary ? "bg-primary/90" : "bg-secondary/90"
        )}>
          {category}
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-heading font-semibold text-xl mb-2 text-foreground">{title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index} 
              className={cn(
                "text-xs bg-background px-2 py-1 rounded",
                isPrimary ? "text-primary/90" : "text-secondary/90"
              )}
            >
              {tag}
            </span>
          ))}
        </div>
        <a 
          href="#" 
          className={cn(
            "inline-flex items-center text-sm",
            isPrimary ? "text-primary hover:text-primary/80" : "text-secondary hover:text-secondary/80"
          )}
        >
          View Project <i className="fas fa-arrow-right ml-2"></i>
        </a>
      </div>
    </motion.div>
  );
}
