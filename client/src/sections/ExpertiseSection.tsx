import { motion } from "framer-motion";
import FeatureCard from "@/components/FeatureCard";
import { features } from "@/lib/constants";

export default function ExpertiseSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="expertise" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="px-4 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-primary/20 to-secondary/20 text-primary inline-block mb-4">
            Core Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Technical Capabilities</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Leveraging cutting-edge technologies to deliver innovative solutions across multiple domains.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {features.map((feature) => (
            <motion.div key={feature.id} variants={itemVariants}>
              <FeatureCard
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
                skills={feature.skills}
                isPrimary={feature.isPrimary}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
