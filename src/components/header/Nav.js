"use client"
import React from 'react'
import Link from 'next/link';
import { ReactSVG } from 'react-svg';
function Nav() {
    return (
        <div>
            <div className="nav-area">
                <nav>
                    <ul>
                        <li>
                            <Link className="nav-link" href="/about">
                                About Us
                            </Link>
                        </li>

                        <li>
                            <Link className="nav-link" href="#">
                                Pricing
                            </Link>
                        </li>
                       
                        <li>
                            <Link className="nav-link" href="#">
                                Offers
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" href="/contact">
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" href="#">
                                Pay Bill
                            </Link>
                        </li>
                        
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Nav