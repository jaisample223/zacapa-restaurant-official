import { motion } from "framer-motion";
import heroImg from "@/assets/yelp-hero.jpg";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <img
        src={heroImg}
        alt="Zacapa Mexican Restaurant & Bar"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />
      <div className="absolute inset-0 overlay-hero" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-crimson-light font-body text-sm tracking-[0.35em] uppercase mb-6 font-medium"
        >
          Lake Mary, Florida
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="font-display text-7xl md:text-9xl lg:text-[10rem] font-bold text-white leading-none"
        >
          Zacapa
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="font-display text-xl md:text-3xl text-white/90 italic mt-2"
        >
          Mexican Restaurant & Bar
        </motion.p>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="divider-crimson w-32 my-8"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="font-body text-white/60 text-sm md:text-base tracking-widest uppercase max-w-lg"
        >
          A Gastronomic Fusion Inspired by the Mayan Culture
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="https://www.getsauce.com/order/zacapa-mexican-restaurant-and-bar/menu"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-crimson text-white px-8 py-3.5 text-sm tracking-[0.2em] uppercase font-body font-semibold hover:bg-crimson-light transition-all duration-300 rounded-md"
          >
            Order Delivery & Pickup
          </a>
          <Link
            to="/menu"
            className="border-2 border-white/30 text-white px-8 py-3.5 text-sm tracking-[0.2em] uppercase font-body font-medium hover:border-crimson hover:text-crimson-light transition-all duration-300 rounded-md"
          >
            View Full Menu
          </Link>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="w-5 h-8 border border-white/30 rounded-full flex justify-center pt-1.5">
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-1 rounded-full bg-crimson"
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
