import { motion } from "framer-motion";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const menuData = [
  {
    category: "Popular Items ⭐",
    items: [
      { name: "Birria Tacos", desc: "Slow-cooked beef Birria, melted cheese, onions, and cilantro in a corn tortilla, served with consommé for dipping.", price: "$24.50", badge: "Top Pick" },
      { name: "Seafood Tacos", desc: "3 tacos topped with pico de gallo and cabbage served with house specialty dressing. Served with Mexican rice and refried beans.", price: "$24.50" },
      { name: "Carnita's Romero", desc: "Slow cooked pulled pork, marinated with the chef family's recipe. Served with Mexican rice and black beans.", price: "$24.00" },
      { name: "Enchiladas Trio", desc: "3 tortillas rolled: 1 shredded cheese, 1 shredded chicken, 1 ground beef topped with queso dip. Served with Mexican rice and refried beans.", price: "$22.50" },
      { name: "Del Barrio Tacos", desc: "3 tacos topped with raw onions, cilantro, fresco cheese and avocado slices served with salsa zacapa.", price: "$22.50" },
      { name: "Mexican Tacos", desc: "3 tacos topped with raw onions, cilantro, and served with salsa verde. Served with Mexican rice and refried beans.", price: "$21.99" },
    ],
  },
  {
    category: "Botanas (Appetizers)",
    items: [
      { name: "Empanadas", desc: "3 house-made pastries filled with cheese and your choice of ground beef or shredded chicken.", price: "$17.00" },
      { name: "Birria-Empanadas", desc: "3 homemade empanadas filled with birria topped with marinated onions served with birria broth.", price: "$19.00" },
      { name: "Fried Calamari", desc: "", price: "$15.25" },
      { name: "Wings", desc: "7 pick your sauce barbeque or hot served with celery sticks and ranch or blue cheese.", price: "$15.25" },
      { name: "Nachos", desc: "Homemade fried chips, topped with refried beans, mixed cheese, lettuce, pico de gallo, sour cream, guacamole, and pickled jalapeños.", price: "$19.50" },
      { name: "Queso Dip", desc: "Delicious American melted cheese mixed with mild jalapeños.", price: "$13.99" },
      { name: "Guacamole", desc: "Homemade fresh guacamole made with tomatoes, lime, cilantro, red onions, and chopped jalapeños.", price: "$15.25" },
      { name: "Ceviche", desc: "Slowly marinated shrimp in lime juice, seasoned with traditional spices, tomatoes, onions, cucumber, and cilantro.", price: "$21.00" },
      { name: "Ceviche Combo", desc: "Made with shrimp and fish (haddock).", price: "$23.00" },
      { name: "Ceviche Trio", desc: "Made with shrimp, fish, and octopus.", price: "$24.75" },
      { name: "Queso Fundido", desc: "Mexican cheese served with warm tortillas.", price: "$14.50" },
      { name: "Street Corn", desc: "With the meal or served first.", price: "$15.00" },
      { name: "Jalapeño Poppers", desc: "Stuffed deep-fried jalapeño served with house specialty dressing.", price: "$15.25" },
      { name: "Steak Fries", desc: "Our popular version of French fries, topped with cheese, and chunks of steak, grilled to your preference.", price: "$20.50" },
    ],
  },
  {
    category: "Soups & Salads",
    items: [
      { name: "Chicken Tortilla Soup", desc: "Tomato base chicken broth with chicken, cilantro, fresh onions, and tortilla strips.", price: "$17.00" },
      { name: "Cóctel De Camarones", desc: "Shrimp cocktail.", price: "$21.00" },
      { name: "Cóctel Combo", desc: "Fish and shrimp cocktail.", price: "$23.00" },
      { name: "Cóctel Trio", desc: "Fish, shrimp, and octopus cocktail.", price: "$24.75" },
      { name: "House Salad", desc: "Fresh mix of greens, diced cucumbers, tomatoes, raw onions, and fresco cheese.", price: "$12.00" },
      { name: "Mexican Bowl", desc: "Mixture of greens with black beans, Mexican rice, mixed cheese, sour cream, pico de gallo, and fresh guacamole.", price: "$20.50" },
      { name: "Taco Salad", desc: "Flour tortilla bowl with mixed greens, mixed cheese, sour cream, pico de gallo, and guacamole.", price: "$18.50" },
      { name: "Fajita Taco Salad", desc: "Flour tortilla bowl with mixed greens, cheese, sour cream, pico de gallo, guacamole, grilled onions and bell peppers, rice, and beans.", price: "$22.99" },
    ],
  },
  {
    category: "Tacos, Tacos + Tacos",
    items: [
      { name: "Mexican Tacos", desc: "3 tacos topped with raw onions, cilantro, and salsa verde. Served with Mexican rice and refried beans.", price: "$21.99" },
      { name: "Birria Tacos", desc: "Slow-cooked beef Birria, melted cheese, onions, and cilantro in a corn tortilla with consommé.", price: "$24.50", badge: "Top Pick" },
      { name: "Chori Cheese Tacos", desc: "3 tacos filled with grilled cheese, chorizo topped with raw onions, cilantro, and salsa verde.", price: "$22.50" },
      { name: "Del Barrio Tacos", desc: "3 tacos topped with raw onions, cilantro, fresco cheese, avocado slices, and salsa zacapa.", price: "$22.50" },
      { name: "Chicharron Tacos", desc: "3 tacos filled with chicharron and guacamole topped with marinated onions, cilantro, and fresco cheese.", price: "$23.50" },
      { name: "Seafood Tacos", desc: "3 tacos topped with pico de gallo and cabbage served with house specialty dressing.", price: "$24.50" },
      { name: "Amigos Favorites", desc: "3 tacos topped with lettuce, pico de gallo, and shredded cheese.", price: "$18.99" },
    ],
  },
  {
    category: "The Chef's Signature Tacos",
    items: [
      { name: "Yummy and Healthy", desc: "3 romaine lettuce shells, peppers, onions, corn, cheese drizzled with sour cream.", price: "$21.75" },
      { name: "Amazing Salmon Tacos", desc: "Grilled salmon, red cabbage, pico de gallo, and chipotle sauce on corn tortillas.", price: "$24.99" },
    ],
  },
  {
    category: "Fajitas",
    items: [
      { name: "Chicken Fajita", desc: "Served with Mexican rice, refried beans, lettuce, pico de gallo, shredded cheese, sour cream, and guacamole.", price: "$24.99" },
      { name: "Steak Fajita", desc: "Served with Mexican rice, refried beans, lettuce, pico de gallo, shredded cheese, sour cream, and guacamole.", price: "$26.50" },
      { name: "Shrimp Fajita", desc: "Served with Mexican rice, refried beans, lettuce, pico de gallo, shredded cheese, sour cream, and guacamole.", price: "$26.50" },
      { name: "Fajita Carnitas", desc: "Served with Mexican rice, refried beans, lettuce, pico de gallo, shredded cheese, sour cream, and guacamole.", price: "$24.50" },
      { name: "Zacapa Fajita", desc: "Steak, chicken, shrimp and grilled cheese. Served with all the fixings.", price: "$35.00", badge: "Signature" },
    ],
  },
  {
    category: "Mexican Favorites",
    items: [
      { name: "Burritos", desc: "Burrito filled with rice, refried beans, mixed cheese, and choice of meat topped with homemade salsa.", price: "$19.50" },
      { name: "Chimichanga", desc: "Crispy deep-fried flour tortilla stuffed with rice, refried beans, mixed cheese, and choice of meat topped with queso dip.", price: "$20.75" },
      { name: "Fajita Chimichanga", desc: "Deep-fried tortilla with rice, beans, cheese, grilled onions, bell peppers, and choice of meat.", price: "$25.75" },
      { name: "Quesadilla", desc: "Flour tortilla grilled and filled with cheese, bell peppers, onions, and choice of meat.", price: "$19.50" },
      { name: "Zacapa Quesa Birria", desc: "Flour tortilla grilled and filled with cheese, bell peppers, onions, and house made birria.", price: "$26.50" },
      { name: "Enchiladas", desc: "3 tortillas rolled with your choice of filling topped with homemade salsa.", price: "$20.50" },
      { name: "Enchiladas Trio", desc: "3 tortillas: cheese, chicken, and ground beef topped with queso dip.", price: "$22.50" },
      { name: "Flautas", desc: "4 corn tortillas filled with shredded chicken or beef, rolled and deep fried until crispy.", price: "$21.25" },
      { name: "Tamales", desc: "Chicken or pork tamales topped with red or green sauce and fresco cheese.", price: "$21.50" },
    ],
  },
  {
    category: "Vegetarian",
    items: [
      { name: "Nachos Lover", desc: "Homemade chips with black beans, cheese, lettuce, pico, guacamole, sautéed mushrooms, broccoli, zucchini.", price: "$20.50" },
      { name: "Veggie Lover Tacos", desc: "3 tacos with grilled veggies, topped with lettuce, pico de gallo, shredded cheese.", price: "$19.99" },
      { name: "Spinach Enchiladas", desc: "Filled with spinach and cheese topped with tomatillo sauce, cheese, and sour cream.", price: "$20.50" },
      { name: "Veggie Quesadilla", desc: "Flour tortilla grilled with cheese, bell peppers, onions, zucchini, broccoli, and mushrooms.", price: "$20.50" },
      { name: "Incredible Chimichanga", desc: "Crispy deep-fried tortilla stuffed with rice, black beans, cheese, and veggies topped with queso dip.", price: "$20.50" },
      { name: "Veggie Lover Fajita", desc: "Smoked fajita with grilled tomatoes, mushrooms, zucchini, broccoli, onions, and bell peppers.", price: "$22.50" },
      { name: "Don Juan Combo", desc: "1 cheese chile relleno and 1 cheese enchilada topped with house made red sauce.", price: "$20.95" },
    ],
  },
  {
    category: "Entrees",
    items: [
      { name: "Ribeye (12 oz)", desc: "Ribeye Angus choice grilled to your preference served with tortillas and Mexican rice.", price: "$31.99" },
      { name: "Chef's Favorite Ribeye (12 oz)", desc: "Ribeye topped with sautéed mushrooms, rosemary, and olive oil garlic.", price: "$31.99" },
      { name: "Arrachera", desc: "Traditional Mexican skirt steak marinated, grilled, served with white rice, house salad, chimichurri.", price: "$30.99" },
      { name: "Steak Ranchero (12 oz)", desc: "Ribeye grilled to preference, topped with 2 eggs and red and green sauce.", price: "$31.99" },
      { name: "Grilled Salmon", desc: "Grilled salmon topped with house garlic butter. Served with Mexican rice and grilled veggies.", price: "$25.99" },
      { name: "Molcajete", desc: "Chicken, steak, shrimp, chorizo garnished with cheese, avocado, jalapeño, green onions, house made sauce.", price: "$40.00", badge: "Signature" },
      { name: "Arroz Con Pollo", desc: "Sliced chicken breast over a bed of rice topped with queso dip and cilantro.", price: "$21.95" },
      { name: "Zacapa Burger", desc: "Beef patty topped with chorizo, cheese, lettuce, pico de gallo, mayo, avocado, and jalapeño toreado.", price: "$20.99" },
      { name: "Chiles Rellenos", desc: "Poblano peppers filled with cheese, chicken or beef topped with red sauce and fresco cheese.", price: "$21.50" },
      { name: "Pollo Chipotle", desc: "Chicken strips sautéed with onions, mushrooms and spicy chipotle sauce.", price: "$21.95" },
      { name: "Camarones Al Scampi", desc: "Sautéed shrimp cooked with scampi sauce, served with Mexican rice and corn.", price: "$23.95" },
      { name: "Camarones A La Diabla", desc: "Sautéed shrimp with smoky chipotle sauce, served with Mexican rice and corn.", price: "$23.95" },
      { name: "Carnita's Romero", desc: "Slow cooked pulled pork with the chef family's recipe. Served with Mexican rice and black beans.", price: "$24.00" },
      { name: "Mojarra", desc: "Deep fried red snapper seasoned with chef's favorite spices served with Mexican rice and house salad.", price: "$27.50" },
    ],
  },
  {
    category: "Desserts",
    items: [
      { name: "Chef's Sopapillas", desc: "", price: "$11.50" },
      { name: "Fried Ice Cream", desc: "", price: "$11.50" },
      { name: "Chocolate Lava Cake", desc: "", price: "$14.00" },
      { name: "Churros", desc: "", price: "$11.50" },
      { name: "Flan", desc: "", price: "$11.50" },
    ],
  },
  {
    category: "Beverages",
    items: [
      { name: "Coca-Cola Bottle", desc: "", price: "$5.50" },
      { name: "Iced Tea", desc: "", price: "$4.95" },
      { name: "Fiji Water", desc: "", price: "$4.99" },
      { name: "Jarritos", desc: "", price: "$5.50" },
      { name: "Aguas Frescas", desc: "", price: "$8.00" },
    ],
  },
  {
    category: "Salsas & Hot Sauces",
    items: [
      { name: "Chips and Salsa Mild (8 oz)", desc: "Classic mild salsa and chips, freshly made and full of flavor!", price: "$6.00" },
      { name: "Zacapa Sauce (2 oz)", desc: "Creamy, flavorful, and perfectly balanced with a gentle habanero kick. Heat level: 3/10.", price: "$1.25" },
      { name: "Fanny Sauce (2 oz)", desc: "Green tomatillos combined with the heat of our chiles. Heat level: 7/10.", price: "$1.25" },
      { name: "Morita Sauce (2 oz)", desc: "Chef's pride — crafted with smoky chile morita and a blend of spices. Heat level: 7/10.", price: "$1.25" },
      { name: "Diabla Sauce (2 oz)", desc: "Smoky chipotle chiles with bold seasonings. Perfect with Pastor Tacos. Heat level: 7/10.", price: "$1.25" },
      { name: "Killer Sauce (2 oz)", desc: "The ultimate heat experience. Habanero takes the spotlight. Heat level: 11/10 🔥", price: "$1.25" },
    ],
  },
];

const categories = menuData.map((s) => s.category);

const MenuPage = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  const scrollToCategory = (cat: string) => {
    setActiveCategory(cat);
    const el = document.getElementById(`menu-${cat}`);
    el?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="bg-white min-h-screen">
      <Navbar />

      {/* Hero Banner */}
      <section className="pt-20 pb-12 md:pt-28 md:pb-16 bg-foreground text-white text-center">
        <div className="container max-w-4xl mx-auto px-6">
          <Link to="/" className="inline-flex items-center gap-2 text-crimson-light font-body text-sm tracking-wide mb-6 hover:text-white transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Link>
          <h1 className="font-display text-5xl md:text-7xl font-bold mb-4">
            Our <span className="italic text-crimson-light">Menu</span>
          </h1>
          <div className="divider-crimson w-16 mx-auto my-6" />
          <p className="font-body text-white/60 text-sm md:text-base max-w-lg mx-auto">
            Authentic Mexican cuisine crafted by Chef Enrique Hernandez. 
            Free delivery on orders above $30 within 5 miles.
          </p>
          <a
            href="https://www.getsauce.com/order/zacapa-mexican-restaurant-and-bar/menu"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 bg-crimson text-white px-8 py-3 text-sm tracking-[0.15em] uppercase font-body font-semibold hover:bg-crimson-light transition-colors rounded-md"
          >
            Order Online
          </a>
        </div>
      </section>

      {/* Sticky Category Nav */}
      <div className="sticky top-16 md:top-20 z-40 bg-white border-b border-border shadow-sm">
        <div className="container max-w-7xl mx-auto px-6">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => scrollToCategory(cat)}
                className={`whitespace-nowrap px-4 py-2 text-xs tracking-wide uppercase font-body font-medium rounded-md transition-colors ${
                  activeCategory === cat
                    ? "bg-crimson text-white"
                    : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Menu Sections */}
      <div className="container max-w-7xl mx-auto px-6 py-12">
        {menuData.map((section, si) => (
          <motion.div
            key={section.category}
            id={`menu-${section.category}`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="mb-16 scroll-mt-36"
          >
            <div className="flex items-center gap-4 mb-8">
              <h2 className="font-display text-2xl md:text-3xl text-foreground whitespace-nowrap">
                {section.category}
              </h2>
              <div className="flex-1 h-px bg-border" />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {section.items.map((item) => (
                <div
                  key={item.name}
                  className="flex justify-between items-start gap-4 p-4 bg-secondary rounded-lg border border-border hover:border-crimson/30 transition-colors group"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-body text-sm font-semibold text-foreground group-hover:text-crimson transition-colors">
                        {item.name}
                      </h3>
                      {item.badge && (
                        <span className="text-[10px] tracking-wider uppercase bg-crimson/10 text-crimson px-2 py-0.5 rounded-sm font-bold">
                          {item.badge}
                        </span>
                      )}
                    </div>
                    {item.desc && (
                      <p className="font-body text-xs text-muted-foreground leading-relaxed line-clamp-2">
                        {item.desc}
                      </p>
                    )}
                  </div>
                  <p className="font-body text-sm font-bold text-crimson whitespace-nowrap">{item.price}</p>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <section className="py-16 bg-foreground text-white text-center">
        <div className="container max-w-2xl mx-auto px-6">
          <h2 className="font-display text-3xl md:text-4xl mb-4">Ready to <span className="italic text-crimson-light">Order?</span></h2>
          <p className="font-body text-white/60 text-sm mb-8">
            Order delivery or pickup directly from Zacapa. Free delivery on orders above $30!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.getsauce.com/order/zacapa-mexican-restaurant-and-bar/menu"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-crimson text-white px-8 py-3.5 text-sm tracking-[0.15em] uppercase font-body font-semibold hover:bg-crimson-light transition-colors rounded-md"
            >
              Order Delivery & Pickup
            </a>
            <a
              href="tel:+13219263451"
              className="border-2 border-white/30 text-white px-8 py-3.5 text-sm tracking-[0.15em] uppercase font-body font-medium hover:border-crimson-light hover:text-crimson-light transition-colors rounded-md"
            >
              Call (321) 926-3451
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default MenuPage;
