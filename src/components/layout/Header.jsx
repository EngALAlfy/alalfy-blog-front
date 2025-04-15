'use client'

import Link from "next/link";
import { useState } from "react";

/**
 * Header component with navigation for the blog
 */
export default function Header() {
  return (
      <header id="header" className="header position-relative">
        <div className="container-fluid container-xl position-relative">

          <div className="top-row d-flex align-items-center justify-content-between">
            <Link href="/" className="logo d-flex align-items-end">
              <h1 className="sitename">Alalfy Tech</h1><span>.</span>
            </Link >

            <div className="d-flex align-items-center">
              <div className="social-links">
                <a href="https://www.facebook.com/EngineerMix" className="facebook"><i className="bi bi-facebook"></i></a>
                <a href="https://api.whatsapp.com/send?phone=201153263994" className="whatsapp"><i className="bi bi-whatsapp"></i></a>
                <a href="https://www.instagram.com/yotech_org/" className="instagram"><i className="bi bi-instagram"></i></a>
                <a href="https://www.linkedin.com/in/islam-hassan-alalfy-2b2234167" className="linkedin"><i className="bi bi-linkedin"></i></a>
                <a href="https://github.com/EngALAlfy" className="github"><i className="bi bi-github"></i></a>
              </div>

              {/*<form className="search-form ms-4">*/}
              {/*  <input type="text" placeholder="Search..." className="form-control"/>*/}
              {/*  <button type="submit" className="btn"><i className="bi bi-search"></i></button>*/}
              {/*</form>*/}
            </div>
          </div>

        </div>

        <div className="nav-wrap">
          <div className="container d-flex justify-content-center position-relative">
            <nav id="navmenu" className="navmenu">
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
              <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
            </nav>
          </div>
        </div>

      </header>

  );
}