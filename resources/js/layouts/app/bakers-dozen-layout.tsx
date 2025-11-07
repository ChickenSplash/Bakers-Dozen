import { AppContent } from '@/components/app-content';
import { AppShell } from '@/components/app-shell';
import { type BreadcrumbItem } from '@/types';
import { type PropsWithChildren } from 'react';

export default function DefaultLayout({
    children,
    breadcrumbs = [],
}: PropsWithChildren<{ breadcrumbs?: BreadcrumbItem[] }>) {

    return (
        <>
            <header className="bg-[#51658f] text-[#fff8ee]">
                <div className="container mx-auto px-4 py-6 flex items-center justify-between">
                    <a href="/" className="flex items-center">
                        <h1 className="text-5xl lg:text-7xl md:pb-1 font-[Birthstone]">Baker's Dozen</h1>
                    </a>

                    <div className="header flex items-center space-x-8 uppercase text-md lg:text-lg font-semibold justify-center md:pt-1">
                        <a href="/" className="tab hidden md:inline">About</a>
                        <a href="/products" className="tab hidden md:inline">Products</a>
                        <a href="/" className="tab hidden md:inline">Testimonials</a>
                        <a href="/" className="tab hidden md:inline">Order</a>

                        <i id="menu-toggle" className="fa-solid fa-angle-down md:hidden cursor-pointer transition-transform duration-300"></i>

                        <div className="flex gap-3">
                            <div className="w-[50px] aspect-square rounded-full bg-[#3c4b6f] flex items-center justify-center cursor-pointer hover:bg-[#364464]">
                                <i className="fa-solid fa-phone-flip text-orange-400 text-2xl"></i>
                            </div>
                            <div id="cart" className="w-[50px] aspect-square rounded-full bg-orange-400 flex items-center justify-center cursor-pointer hover:bg-orange-500">
                                <i className="fa-solid fa-basket-shopping text-[#3c4b6f] text-2xl"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

            <AppContent className="overflow-x-hidden">
                {children}
            </AppContent>

            <footer className="bg-[#51658f] text-[#fff8ee] py-10">
                <div className="container mx-auto px-4 grid grid-cols-1 sm:grid-cols-3 gap-8">
                    <div className="flex flex-col items-center md:items-start">
                        <h3 className="text-2xl font-bold mb-6">ADDRESS</h3>
                        <p className="mb-2">107 Gloucester Street</p>
                        <p className="mb-2">Norwich, Norfolk</p>
                        <p className="mb-4">NR2 2DY</p>
                        <p className="mb-1">01603 123 987</p>
                        <p>info@bakersdozen.co.uk</p>
                    </div>

                    <div className="flex flex-col items-center text-center">
                        <h3 className="text-2xl font-bold mb-6">OPENING TIMES</h3>
                        <p className="mb-2">Monday- Friday 8AM - 4PM</p>
                        <p className="mb-2">Saturday 8AM - 3PM</p>
                        <p>Closed Sunday</p>
                    </div>

                    <div className="flex flex-col items-center md:items-end">
                        <h3 className="text-2xl font-bold mb-6">SECTIONS</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="/" className="hover:text-gray-300 flex items-center gap-2">
                                    <i className="fa-solid fa-angle-right text-sm"></i>About
                                </a>
                            </li>
                            <li>
                                <a href="/" className="hover:text-gray-300 flex items-center gap-2">
                                    <i className="fa-solid fa-angle-right text-sm"></i>Products
                                </a>
                            </li>
                            <li>
                                <a href="/" className="hover:text-gray-300 flex items-center gap-2">
                                    <i className="fa-solid fa-angle-right text-sm"></i>Testimonials
                                </a>
                            </li>
                            <li>
                                <a href="/" className="hover:text-gray-300 flex items-center gap-2">
                                    <i className="fa-solid fa-angle-right text-sm"></i>Order
                                </a>
                            </li>
                            <li>
                                <a href="/" className="hover:text-gray-300 flex items-center gap-2">
                                    <i className="fa-solid fa-angle-right text-sm"></i>Privacy Policy
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="container mx-auto px- pt-12 text-center tracking-wider">
                    <p className="text-sm">Copyright &copy; Baker's Dozen. All Rights Reserved 2025</p>
                </div>
            </footer>
        </>
    );
}
