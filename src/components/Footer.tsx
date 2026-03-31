import { Link } from "react-router-dom";

const Footer = () => (
  <footer className="bg-charcoal text-white py-12 border-t border-white/10">
    <div className="container max-w-7xl mx-auto px-6">
      <div className="flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <Link to="/" className="font-display text-xl text-crimson font-bold">Zacapa</Link>
          <p className="font-body text-xs text-white/50 mt-1">Mexican Restaurant & Bar · Lake Mary, FL</p>
        </div>
        <div className="flex items-center gap-6 flex-wrap justify-center">
          <Link
            to="/menu"
            className="font-body text-xs text-white/50 hover:text-crimson-light transition-colors tracking-wide"
          >
            Full Menu
          </Link>
          <a
            href="https://zacapamexicanrestaurantbar.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs text-white/50 hover:text-crimson-light transition-colors tracking-wide"
          >
            Official Website
          </a>
          <a
            href="https://www.getsauce.com/order/zacapa-mexican-restaurant-and-bar/menu"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs text-white/50 hover:text-crimson-light transition-colors tracking-wide"
          >
            Order Online
          </a>
          <a
            href="https://www.yelp.com/biz/zacapa-mexican-restaurant-and-bar-lake-mary"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body text-xs text-white/50 hover:text-crimson-light transition-colors tracking-wide"
          >
            Yelp
          </a>
        </div>
        <p className="font-body text-xs text-white/40 tracking-wide">
          © {new Date().getFullYear()} Zacapa Mexican Restaurant & Bar
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
