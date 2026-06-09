import { Link } from "react-router-dom";

export default function Footer() {
  return (
<footer className="py-10 px-6 md:px-20">

<div className="text-center space-y-6">

  <div className="text-[#D4AF37] text-sm uppercase gap-6 flex justify-center">
    <Link to="/">Home</Link>
    <Link to="/about">About</Link>
    <Link to="/practice-areas">Practice Areas</Link>
    <Link to="/news">News</Link>
    <Link to="/contact">Contact</Link>
    {/* <span>Home</span>
    <span>About</span>
    <span>Practice Areas</span>
    <span>News</span>
    <span>Contact</span> */}
  </div>

  <p className="text-white text-xs">
    Copyright ASP Law Group 2025. All rights reserved.
  </p>

</div>

</footer>
    );
}