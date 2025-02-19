"use client"

import { ScrollArea } from "@/components/ui/scroll-area";
import { Circle } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
   <div className="w-full max-w-7xl mx-auto "> 
   <ScrollArea className="h-screen pb-20">



    <h2 className="text-3xl font-black pt-20">Privacy Policy</h2>
    <h3 className="text-gray-500">Effective Date: 10 Jan 2025</h3>
    
    <h4 className="mt-8 mb-3 text-2xl">1. Introduction</h4>

    <p>Welcome to Innovosprint. We value your privacy and are committed to protecting your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you visit our website <Link className="text-blue-800 underline" href="www.innovosprint.com"> www.innovosprint.com</Link> and use our services.
    </p>

    <h4 className="mt-8 mb-3 text-2xl">2. Information We Collect</h4>

    <p>We collect different types of information, including:</p>

    <ul className="px-3">
      <li className="flex flex-row items-center gap-2"><Circle size={10} /> <span><b>Personal Information:</b> Name, email address, phone number, company name, and any details you provide when contacting us or using our services.</span> </li>
      <li className="flex flex-row items-center gap-2"><Circle size={10} /> <span><b>Technical Information:</b> IP address, browser type, operating system, and analytics data to enhance website performance.</span> </li>
      <li className="flex flex-row items-center gap-2"><Circle size={10} /> <span><b>Cookies and Tracking Technologies:</b> We use cookies and similar technologies to improve user experience and analyze website traffic.</span> </li>
    </ul>

    <h4 className="mt-8 mb-3 text-2xl">3. How We Use Your Information</h4>

    <p>We use the collected information to:</p>

    <ul className="px-3">
      <li className="flex flex-row items-center gap-2"><Circle size={10} /> <span>Provide, operate, and improve our services.</span> </li>
      <li className="flex flex-row items-center gap-2"><Circle size={10} /> <span>Respond to inquiries and customer support requests.</span> </li>
      <li className="flex flex-row items-center gap-2"><Circle size={10} /> <span>Send promotional communications (with your consent).</span> </li>
      <li className="flex flex-row items-center gap-2"><Circle size={10} /> <span>Analyze trends and website usage for enhancement.</span> </li>
      <li className="flex flex-row items-center gap-2"><Circle size={10} /> <span>Comply with legal obligations and enforce our terms.</span> </li>
    </ul>

    <h4 className="mt-8 mb-3 text-2xl">4. Sharing Your Information</h4>

    <p>We do not sell your personal data. However, we may share your information with:</p>

    <ul className="px-3">
      <li className="flex flex-row items-center gap-2"><Circle size={10} /> <span><b>Service Providers:</b> Third parties that help us operate our business (e.g., hosting, analytics, marketing tools).</span> </li>
      <li className="flex flex-row items-center gap-2"><Circle size={10} /> <span><b>Legal Compliance:</b> If required by law, legal proceedings, or to protect our rights.</span> </li>
      <li className="flex flex-row items-center gap-2"><Circle size={10} /> <span><b>Business Transfers:</b> In case of a merger, sale, or business restructuring.</span> </li>
    </ul>

    <h4 className="mt-8 mb-3 text-2xl">5. Data Security</h4>

    <p>We implement security measures to protect your information. However, no system is completely secure, and we cannot guarantee absolute security.</p>

    <h4 className="mt-8 mb-3 text-2xl">6. Your Rights</h4>

    <p>Depending on your location, you may have rights to:</p>

    <ul className="px-3">
      <li className="flex flex-row items-center gap-2"><Circle size={10} /> <span>Access, update, or delete your personal information.</span> </li>
      <li className="flex flex-row items-center gap-2"><Circle size={10} /> <span>Object to or restrict data processing.</span> </li>
      <li className="flex flex-row items-center gap-2"><Circle size={10} /> <span>Withdraw consent for marketing communications.</span> </li>
    </ul>

    <p>To exercise these rights, please contact us at <Link className="text-blue-800 underline" href="mailto:privacy@innovosprint.com">privacy@innovosprint.com</Link>.</p>

    <h4 className="mt-8 mb-3 text-2xl">7. Third-Party Links</h4>

    <p>Our Website may contain links to third-party sites. We are not responsible for their privacy practices, and we encourage you to review their policies.</p>

    <h4 className="mt-8 mb-3 text-2xl">8. Changes to This Privacy Policy</h4>

    <p>We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.</p>

    <h4 className="mt-8 mb-3 text-2xl">9. Contact Us</h4>

    <p>For questions about this Privacy Policy, please contact us at:</p>

    <p>
      <b>Innovosprint</b><br />
      Website: <Link className="text-blue-800 underline" href="http://www.innovosprint.com">www.innovosprint.com</Link><br />
      Email: <Link className="text-blue-800 underline" href="mailto:privacy@innovosprint.com">privacy@innovosprint.com</Link><br />
      Phone: <Link className="text-blue-800 underline" href="tel:+1234567890">+1 (234) 567-890</Link>
    </p>
        
   </ScrollArea>
   </div>
  );
}