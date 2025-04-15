import { motion } from "framer-motion";
import ContactForm from "@/components/ContactForm";
import { contactInfo, socialLinks } from "@/lib/constants";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-card">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="px-4 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-primary/20 to-secondary/20 text-primary inline-block mb-4">
              Get In Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-6">Let's Work Together</h2>
            <p className="text-muted-foreground mb-8 max-w-md">
              Whether you're looking for an AI solution, need technical consultation, or want to collaborate on an innovative project, I'm here to help.
            </p>
            
            <div className="space-y-6 mb-8">
              {contactInfo.map((item, index) => (
                <motion.div 
                  key={index}
                  className="flex items-start space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                >
                  <div className="bg-background p-3 rounded-lg text-primary">
                    <i className={`fas fa-${item.icon}`}></i>
                  </div>
                  <div>
                    <h4 className="font-heading font-medium mb-1 text-foreground">{item.title}</h4>
                    <p className="text-muted-foreground">{item.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="flex space-x-4">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.url}
                  className="bg-background p-3 rounded-full text-muted-foreground hover:text-primary transition-colors"
                  aria-label={link.name}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <i className={`fab fa-${link.icon}`}></i>
                </motion.a>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
