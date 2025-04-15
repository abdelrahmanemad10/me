import { motion } from "framer-motion";
import { socialLinks } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function HeroSection() {
  return (
    <section 
      id="home" 
      className="min-h-screen pt-28 pb-20 flex items-center relative overflow-hidden"
      style={{
        background: "radial-gradient(circle at 30% 50%, rgba(0, 98, 255, 0.1), transparent 40%), radial-gradient(circle at 70% 50%, rgba(255, 85, 0, 0.1), transparent 40%)"
      }}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-6">
              <span className="px-4 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-primary/20 to-secondary/20 text-primary">
                Engineering Intelligence. Empowering Solutions.
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6 leading-tight">
              Building <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">future-proof</span> solutions for tomorrow's challenges
            </h1>
            <p className="text-muted-foreground text-lg mb-8 max-w-lg">
              Electrical Engineer · AI Developer · Data Scientist building innovative solutions for industries, startups, and academia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="#projects" 
                className="px-6 py-3 rounded-md bg-gradient-to-r from-primary to-primary/80 text-white font-medium hover:from-primary/90 hover:to-primary/70 transition-all text-center"
              >
                View My Work
              </a>
              <a 
                href="#contact" 
                className="px-6 py-3 rounded-md bg-card border border-white/10 text-foreground font-medium hover:bg-card/80 transition-all text-center relative overflow-hidden group"
              >
                <span className="relative z-10">Get In Touch</span>
                <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
                  background: "linear-gradient(90deg, rgba(0,98,255,0.2), rgba(255,85,0,0.2))",
                  maskImage: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskImage: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                  WebkitMaskComposite: "xor",
                  maskComposite: "exclude",
                }}></span>
              </a>
            </div>
            
            <div className="flex items-center gap-6 mt-12">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={link.name}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className={`fab fa-${link.icon} text-2xl`}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="hidden lg:flex justify-center items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              {/* Profile image container with animation */}
              <div className="w-[400px] h-[400px] rounded-full bg-gradient-to-br from-card to-card relative z-10 flex items-center justify-center">
                <motion.div
                  animate={{ 
                    boxShadow: [
                      "0 0 20px rgba(0, 98, 255, 0.3)", 
                      "0 0 40px rgba(0, 98, 255, 0.2)", 
                      "0 0 20px rgba(0, 98, 255, 0.3)"
                    ]
                  }}
                  transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                  className="w-[280px] h-[280px] rounded-full flex items-center justify-center bg-gradient-to-br from-primary/10 to-secondary/10 overflow-hidden"
                >
                  <span className="text-8xl text-primary/30">
                    <i className="fas fa-user"></i>
                  </span>
                </motion.div>
              </div>
              
              {/* Decorative elements */}
              <motion.div 
                className="absolute -top-6 -left-6 w-full h-full rounded-full border border-primary/30"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
              ></motion.div>
              <motion.div 
                className="absolute -bottom-6 -right-6 w-full h-full rounded-full border border-secondary/30"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 3, delay: 1.5, repeat: Infinity, repeatType: "reverse" }}
              ></motion.div>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-primary/10 to-secondary/10 blur-xl"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
