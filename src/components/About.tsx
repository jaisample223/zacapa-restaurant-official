import { motion } from "framer-motion";
import chimi from "@/assets/yelp-chimichanga.jpg";
import quesadillas from "@/assets/yelp-quesadillas.jpg";

const About = () => {
  return (
    <section id="about" className="py-24 md:py-32 bg-white">
      <div className="container max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-crimson text-sm tracking-[0.3em] uppercase font-body mb-4 font-medium">Our Story</p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Where Mayan Culture <br />
              <span className="italic text-crimson">Meets Flavor</span>
            </h2>
            <div className="divider-crimson w-16 mb-8" />
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              Zacapa Mexican Restaurant & Bar is the result of a gastronomic fusion inspired by the Mayan culture, 
              marrying the flavors, colors, textures and authentic smells of Mexico and Central America.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-6">
              Led by Chef Enrique Hernandez and his team, we provide in each dish a unique and exclusive experience. 
              Come and experience the warmth of a family-owned restaurant where Chef Enrique personally takes care of you.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed mb-8">
              Our pride lies in our diverse team, hailing from various backgrounds, all united by a passion for 
              authentic cuisine and genuine hospitality.
            </p>
            <div className="flex gap-8">
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-crimson">4.8</p>
                <p className="font-body text-xs text-muted-foreground tracking-wider uppercase mt-1">Yelp Rating</p>
              </div>
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-crimson">46+</p>
                <p className="font-body text-xs text-muted-foreground tracking-wider uppercase mt-1">Reviews</p>
              </div>
              <div className="text-center">
                <p className="font-display text-3xl font-bold text-crimson">Free</p>
                <p className="font-body text-xs text-muted-foreground tracking-wider uppercase mt-1">Delivery*</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="overflow-hidden rounded-lg">
              <img
                  src={chimi}
                  alt="Zacapa chimichanga dish"
                loading="lazy"
                className="w-full aspect-[3/4] object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="pt-8">
              <div className="overflow-hidden rounded-lg">
              <img
                  src={quesadillas}
                  alt="Zacapa quesadillas"
                  loading="lazy"
                  className="w-full aspect-[3/4] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
