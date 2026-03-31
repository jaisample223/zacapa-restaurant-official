import { motion } from "framer-motion";
import { Phone, Clock, MapPin, Truck, ExternalLink } from "lucide-react";

const info = [
  { icon: Phone, label: "Phone", value: "(321) 926-3451", href: "tel:+13219263451" },
  { icon: Clock, label: "Hours", value: "Mon & Sun 11AM–9PM\nTue–Sat 11AM–10PM" },
  { icon: MapPin, label: "Address", value: "7025 Co Rd 46A\nSte 1011, Lake Mary, FL 32746" },
  { icon: Truck, label: "Delivery", value: "Free delivery on\norders above $30" },
];

const Reservations = () => {
  return (
    <section id="visit" className="py-24 md:py-32 bg-foreground text-white">
      <div className="container max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-crimson-light text-sm tracking-[0.3em] uppercase font-body mb-4 font-medium">Come See Us</p>
          <h2 className="font-display text-4xl md:text-5xl text-white">
            Visit <span className="italic text-crimson-light">Zacapa</span>
          </h2>
          <div className="divider-crimson w-16 mx-auto mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-2 gap-6 mb-8">
              {info.map((item) => (
                <div key={item.label} className="bg-white/5 rounded-lg p-5 border border-white/10">
                  <item.icon className="w-5 h-5 text-crimson-light mb-3" />
                  <p className="font-body text-xs text-white/50 tracking-wider uppercase mb-1">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="font-body text-sm text-white whitespace-pre-line hover:text-crimson-light transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-body text-sm text-white whitespace-pre-line">{item.value}</p>
                  )}
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:+13219263451"
                className="flex items-center justify-center gap-2 bg-crimson text-white px-6 py-3.5 text-sm tracking-[0.15em] uppercase font-body font-semibold hover:bg-crimson-light transition-colors rounded-md"
              >
                <Phone className="w-4 h-4" /> Call Now
              </a>
              <a
                href="https://www.getsauce.com/order/zacapa-mexican-restaurant-and-bar/menu"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border-2 border-white/30 text-white px-6 py-3.5 text-sm tracking-[0.15em] uppercase font-body font-medium hover:border-crimson-light hover:text-crimson-light transition-colors rounded-md"
              >
                <ExternalLink className="w-4 h-4" /> Order Online
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="rounded-lg overflow-hidden border border-white/10"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3498.5!2d-81.3566!3d28.7857!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88e770b8a0000001%3A0x1234567890abcdef!2s7025%20Co%20Rd%2046A%20%231011%2C%20Lake%20Mary%2C%20FL%2032746!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Zacapa Mexican Restaurant Location"
              className="w-full"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Reservations;
