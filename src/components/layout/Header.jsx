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
                <a href="#" className="facebook"><i className="bi bi-facebook"></i></a>
                <a href="#" className="twitter"><i className="bi bi-twitter"></i></a>
                <a href="#" className="instagram"><i className="bi bi-instagram"></i></a>
              </div>

              <form className="search-form ms-4">
                <input type="text" placeholder="Search..." className="form-control"/>
                <button type="submit" className="btn"><i className="bi bi-search"></i></button>
              </form>
            </div>
          </div>

        </div>

        <div className="nav-wrap">
          <div className="container d-flex justify-content-center position-relative">
            <nav id="navmenu" className="navmenu">
              <ul>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/category">Category</Link></li>
                <li className="dropdown"><a href="#"><span>Pages</span> <i
                    className="bi bi-chevron-down toggle-dropdown"></i></a>
                  <ul>
                    <li><Link href="about.html">About</Link></li>
                    <li><Link href="category.html">Category</Link></li>
                    <li><Link href="blog-details.html">Blog Details</Link></li>
                    <li><Link href="author-profile.html">Author Profile</Link></li>
                    <li><Link href="search-results.html">Search Results</Link></li>
                    <li><Link href="404.html" className="active">404 Not Found Page</Link></li>

                    <li className="dropdown"><a href="#"><span>Deep Dropdown</span> <i
                        className="bi bi-chevron-down toggle-dropdown"></i></a>
                      <ul>
                        <li><Link href="#">Deep Dropdown 1</Link></li>
                        <li><Link href="#">Deep Dropdown 2</Link></li>
                        <li><Link href="#">Deep Dropdown 3</Link></li>
                        <li><Link href="#">Deep Dropdown 4</Link></li>
                        <li><Link href="#">Deep Dropdown 5</Link></li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
              <i className="mobile-nav-toggle d-xl-none bi bi-list"></i>
            </nav>
          </div>
        </div>

      </header>

  );
}