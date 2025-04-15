import { motion } from "framer-motion";
import { aboutItems } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function AboutSection() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="px-4 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-primary/20 to-secondary/20 text-primary inline-block mb-4">
              About Me
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Engineering Intelligence</h2>
            
            <p className="text-muted-foreground mb-4">
              I'm an Electrical Engineer specializing in electrical distribution systems design, load calculations, and protection systems according to IEC and NEC standards. I combine technical expertise with AI and data science skills for innovative solutions.
            </p>
            
            <p className="text-muted-foreground mb-6">
              With proficiency in industry-standard software like AutoCAD, Revit MEP, and DIALux evo, I deliver comprehensive electrical designs for complex projects. I excel in short circuit analysis, voltage drop calculations, and multidisciplinary collaboration across engineering teams.
            </p>
            
            <motion.div 
              className="grid grid-cols-2 gap-4 mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              {aboutItems.map((item, index) => (
                <motion.div 
                  key={index}
                  className="bg-background p-4 rounded-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                >
                  <h4 className={cn(
                    "font-heading font-medium mb-2",
                    item.isPrimary ? "text-primary" : "text-secondary"
                  )}>
                    {item.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </motion.div>
              ))}
            </motion.div>
            
            <motion.a 
              href="#contact" 
              className="inline-block px-6 py-3 rounded-md bg-gradient-to-r from-primary to-secondary text-white font-medium hover:opacity-90 transition-opacity"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let's Connect
            </motion.a>
          </motion.div>
          
          <motion.div 
            className="order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              {/* About image container */}
              <div className="w-[400px] h-[500px] rounded-2xl overflow-hidden relative z-10">
                <motion.div 
                  className="w-full h-full bg-gradient-to-br from-card to-background flex items-center justify-center"
                  animate={{
                    background: [
                      "linear-gradient(to bottom right, hsl(222.2 84% 4.9%), hsl(217 33% 17.5%))",
                      "linear-gradient(to bottom right, hsl(224.3 76.3% 10%), hsl(215 27.9% 16.9%))",
                      "linear-gradient(to bottom right, hsl(222.2 84% 4.9%), hsl(217 33% 17.5%))"
                    ]
                  }}
                  transition={{ duration: 5, repeat: Infinity, repeatType: "reverse" }}
                >
                  <motion.span 
                    className="text-5xl text-foreground/10"
                    initial={{ opacity: 0.6 }}
                    animate={{ opacity: [0.6, 0.8, 0.6] }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: "reverse" }}
                  >
                    <i className="fas fa-user-tie"></i>
                  </motion.span>
                </motion.div>
              </div>
              
              {/* Decorative elements */}
              <motion.div 
                className="absolute top-6 -right-6 w-32 h-32 rounded-lg bg-primary/30 blur-xl"
                animate={{ 
                  opacity: [0.3, 0.5, 0.3],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 4, repeat: Infinity, repeatType: "reverse" }}
              ></motion.div>
              <motion.div 
                className="absolute -bottom-6 -left-6 w-32 h-32 rounded-lg bg-secondary/30 blur-xl"
                animate={{ 
                  opacity: [0.3, 0.5, 0.3],
                  scale: [1, 1.1, 1]
                }}
                transition={{ duration: 4, delay: 1, repeat: Infinity, repeatType: "reverse" }}
              ></motion.div>
              <motion.div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[400px] border border-white/5 rounded-2xl"
                animate={{ rotate: -6 }}
                transition={{ duration: 1 }}
              ></motion.div>
              <motion.div 
                className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[400px] border border-white/5 rounded-2xl"
                animate={{ rotate: 6 }}
                transition={{ duration: 1 }}
              ></motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
