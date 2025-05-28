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
                            <Link className="nav-link" href="/pricing">
                                Pricing
                            </Link>
                        </li>
                       
                        <li>
                            <Link className="nav-link" href="/service">
                                Offers
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" href="/contact">
                                Contact
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" href="pay-bill">
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