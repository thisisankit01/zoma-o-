import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="text-center text-xl text-slate-500 py-8 ">
      Made by{" "}
      <Link
        to="https://thisisankit.netlify.com"
        className="underline-offset-2"
        target="_blank"
      >
        @Ankit Pandey
      </Link>
    </div>
  );
}

export default Footer;
