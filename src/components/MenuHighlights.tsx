import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import fajitasImg from "@/assets/yelp-fajitas.jpg";
import cornImg from "@/assets/yelp-corn.jpg";
import cocktailsImg from "@/assets/bar-cocktails.jpg";

const categories = [
  {
    title: "Tacos & Favorites",
    image: fajitasImg,
    items: [
      { name: "Birria Tacos", price: "$24.50", badge: "Top Pick" },
      { name: "Seafood Tacos", price: "$24.50" },
      { name: "Del Barrio Tacos", price: "$22.50" },
      { name: "Enchiladas Trio", price: "$22.50" },
    ],
  },
  {
    title: "Chef's Specialties",
    image: cornImg,
    items: [
      { name: "Molcajete", price: "$40.00", badge: "Signature" },
      { name: "Zacapa Fajita", price: "$35.00" },
      { name: "Ribeye (12oz)", price: "$31.99" },
      { name: "Arrachera", price: "$30.99" },
    ],
  },
  {
    title: "Bar & Drinks",
    image: cocktailsImg,
    items: [
      { name: "Skinny Margarita", price: "" },
      { name: "Aguas Frescas", price: "$8.00" },
      { name: "Jarritos", price: "$5.50" },
      { name: "Mexican Coca-Cola", price: "$5.50" },
    ],
  },
];

const MenuHighlights = () => {
  return (
    <section id="menu" className="py-24 md:py-32 bg-secondary">
      <div className="container max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="text-crimson text-sm tracking-[0.3em] uppercase font-body mb-4 font-medium">Curated Selection</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground">
            Menu <span className="italic text-crimson">Highlights</span>
          </h2>
          <div className="divider-crimson w-16 mx-auto mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-3 gap-10">
          {categories.map((cat, i) => (
            <motion.div
              key={cat.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group bg-white rounded-lg shadow-sm border border-border overflow-hidden"
            >
              <div className="overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="w-full aspect-[4/3] object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl text-crimson mb-5">{cat.title}</h3>
                <ul className="space-y-3">
                  {cat.items.map((item) => (
                    <li key={item.name} className="flex justify-between items-baseline">
                      <span className="font-body text-sm text-foreground tracking-wide flex items-center gap-2">
                        {item.name}
                        {item.badge && (
                          <span className="text-[10px] tracking-wider uppercase bg-crimson/10 text-crimson px-2 py-0.5 rounded-sm font-semibold">
                            {item.badge}
                          </span>
                        )}
                      </span>
                      <span className="flex-1 mx-3 border-b border-border" />
                      <span className="font-body text-sm text-crimson font-semibold">{item.price}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-14 flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/menu"
            className="inline-block bg-crimson text-white px-10 py-3.5 text-sm tracking-[0.2em] uppercase font-body font-semibold hover:bg-crimson-light transition-all duration-300 rounded-md"
          >
            View Full Menu
          </Link>
          <a
            href="https://www.getsauce.com/order/zacapa-mexican-restaurant-and-bar/menu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border-2 border-charcoal text-charcoal px-10 py-3.5 text-sm tracking-[0.2em] uppercase font-body font-semibold hover:bg-charcoal hover:text-white transition-all duration-300 rounded-md"
          >
            Order Online
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default MenuHighlights;
