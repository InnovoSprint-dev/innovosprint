"use client"
import Header from "@/components/Header";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'
import PreHeader from "@/components/preheader";
import MainBanner from "@/components/MainBanner";
import AboutSection from "@/components/AboutSection";
import BlogSection from "@/components/BlogSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import FreeQuoteSection from "@/components/FreeQuoteSection";
import PortfolioSection from "@/components/PortfolioSection";
import ServicesSection from "@/components/ServicesSection";



export default function Page() {
  return (
   <> <PreHeader /> <Header /> <MainBanner /><AboutSection />
   <ServicesSection />
   <FreeQuoteSection />
   <PortfolioSection />
   <BlogSection />
   <ContactSection />
   <Footer /></>
  );
}