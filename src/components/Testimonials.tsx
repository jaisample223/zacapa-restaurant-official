import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const reviews = [
  {
    text: "Very authentic mexican food for the area. The skinny margaritas were great as well! Servers were very nice and the decor was bright and inviting.",
    author: "Bella S.",
    time: "Recent",
    rating: 5,
  },
  {
    text: "Great service (friendly, bilingual, attentive), great food (many options, fresh, delicious), great atmosphere (clean, spacious, casual). Just what we needed!",
    author: "Jennifer N.",
    time: "Recent",
    rating: 5,
  },
  {
    text: "Amazing salsa, amazing food, amazing drinks, and incredible service. We loved this place so much we came back three days in a row!",
    author: "Allison M.",
    time: "Recent",
    rating: 5,
  },
  {
    text: "Great lunch specials that are priced right. People are catching on that they have some of the cheapest lunch specials in Heathrow!",
    author: "Brett V.",
    time: "Recent",
    rating: 5,
  },
];

const Testimonials = () => {
  return (
    <section id="reviews" className="py-24 md:py-32 bg-white">
      <div className="container max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <p className="text-crimson text-sm tracking-[0.3em] uppercase font-body mb-4 font-medium">What People Say</p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground">
            Our Guests <span className="italic text-crimson">Love It</span>
          </h2>
          <div className="flex items-center justify-center gap-2 mt-4">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-crimson text-crimson" />
              ))}
            </div>
            <span className="font-body text-sm text-muted-foreground ml-2">4.8 / 5 on Yelp · 46 reviews</span>
          </div>
          <div className="divider-crimson w-16 mx-auto mt-6" />
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, i) => (
            <motion.div
              key={review.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-secondary border border-border p-6 rounded-lg relative"
            >
              <Quote className="w-8 h-8 text-crimson/20 mb-3" />
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 fill-crimson text-crimson" />
                ))}
              </div>
              <p className="font-body text-sm text-secondary-foreground leading-relaxed mb-4">
                "{review.text}"
              </p>
              <div className="flex items-center justify-between border-t border-border pt-3">
                <p className="font-body text-xs text-crimson font-semibold tracking-wide">{review.author}</p>
                <p className="font-body text-xs text-muted-foreground">{review.time}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
