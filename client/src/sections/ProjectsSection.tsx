import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/constants";
import callCenterImage from "@assets/images (3).jpg";
import schoolGymImage from "@assets/School-Gym-Lighting-Plan.webp";
import commercialBuildingImage from "@assets/images (4).jpg";
import electricalDiagramImage from "@assets/draw-electrical-design-plan-single-line-diagram-load-calculation.jpg";

export default function ProjectsSection() {
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
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="px-4 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-primary/20 to-secondary/20 text-primary inline-block mb-4">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">Featured Projects</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Smart design. Scalable infrastructure. Real-world impact.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {projects.map((project) => {
            // Map the imageType to the corresponding image import
            let projectImage;
            switch(project.imageType) {
              case 'callCenter':
                projectImage = callCenterImage;
                break;
              case 'schoolGym':
                projectImage = schoolGymImage;
                break;
              case 'commercial':
                projectImage = commercialBuildingImage;
                break;
              case 'diagram':
                projectImage = electricalDiagramImage;
                break;
              default:
                projectImage = undefined;
            }
            
            return (
              <motion.div key={project.id} variants={itemVariants}>
                <ProjectCard
                  title={project.title}
                  description={project.description}
                  category={project.category}
                  tags={project.tags}
                  isPrimary={project.isPrimary}
                  image={projectImage}
                />
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.4 }}
        >
          <motion.a 
            href="#" 
            className="inline-block px-6 py-3 rounded-md border border-white/10 text-foreground font-medium hover:bg-card/80 transition-all relative overflow-hidden group"
            whileHover={{ y: -3 }}
          >
            <span className="relative z-10">View All Projects <i className="fas fa-arrow-right ml-2"></i></span>
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{
              background: "linear-gradient(90deg, rgba(0,98,255,0.2), rgba(255,85,0,0.2))",
              maskImage: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskImage: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "xor",
              maskComposite: "exclude",
            }}></span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
