"use client"

import { ScrollArea } from "@/components/ui/scroll-area";

import Link from "next/link";

export default function Page() {
  return (
   <div className="w-full max-w-7xl mx-auto "> 
   <ScrollArea className="h-screen pb-20">

 
  <h2 className="text-3xl font-black pt-20">How to Delete Your Data from Innovosprint</h2>
  <p className="text-gray-500">Last Updated: 10 Jan 2025</p>

  <p className="mt-4">
    At Innovosprint, we respect your privacy and provide you with full control over your personal data. If you wish to delete your data from our systems, please follow the steps below:
  </p>

  <h4 className="mt-8 mb-3 text-2xl">Option 1: Delete Your Data via the App/Website</h4>
  <ol className="list-decimal px-6">
    <li className="mb-2">
      <b>Log in to Your Account:</b>
      <span> Visit <Link className="text-blue-800 underline" href="http://www.innovosprint.com">www.innovosprint.com</Link> and log in to your account using your credentials.</span>
    </li>
    <li className="mb-2">
      <b>Navigate to Account Settings:</b>
      <span> Go to the <b>Settings</b> or <b>Account</b> section of your profile.</span>
    </li>
    <li className="mb-2">
      <b>Request Data Deletion:</b>
      <span> Look for the <b>Privacy</b> or <b>Data Management</b> section. Click on the <b>Delete My Data</b> or <b>Request Account Deletion</b> option.</span>
    </li>
    <li className="mb-2">
      <b>Confirm Deletion:</b>
      <span> Follow the on-screen instructions to confirm your request. You may be asked to provide additional verification (e.g., password or email confirmation).</span>
    </li>
    <li className="mb-2">
      <b>Completion:</b>
      <span> Once confirmed, your data will be permanently deleted from our systems within <b>30 days</b>.</span>
    </li>
  </ol>

  <h4 className="mt-8 mb-3 text-2xl">Option 2: Request Data Deletion via Email</h4>
  <p className="mb-4">
    If you are unable to delete your data through the app or website, you can contact us directly via email:
  </p>
  <ol className="list-decimal px-6">
    <li className="mb-2">
      <b>Send an Email:</b>
      <span> Write to us at <Link className="text-blue-800 underline" href="mailto:privacy@innovosprint.com">privacy@innovosprint.com</Link> with the subject line: <b>Request for Data Deletion</b>.</span>
    </li>
    <li className="mb-2">
      <b>Include the Following Details:</b>
      <ul className="list-disc px-6 mt-2">
        <li>Your full name.</li>
        <li>The email address associated with your Innovosprint account.</li>
        <li>A clear statement requesting the deletion of your data.</li>
      </ul>
    </li>
    <li className="mb-2">
      <b>Verification:</b>
      <span> Our team will verify your identity to ensure the request is legitimate. Once verified, your data will be permanently deleted within <b>30 days</b>.</span>
    </li>
  </ol>

  <h4 className="mt-8 mb-3 text-2xl">What Happens After Data Deletion?</h4>
  <ul className="list-disc px-6">
    <li className="mb-2">All your personal data, including account information, activity history, and any other stored data, will be permanently removed from our systems.</li>
    <li className="mb-2">Please note that some data may be retained for legal or regulatory purposes, as required by law.</li>
  </ul>

  <h4 className="mt-8 mb-3 text-2xl">Need Help?</h4>
  <p className="mb-4">
    If you have any questions or need assistance with the data deletion process, feel free to contact us at:
  </p>
  <ul className="list-disc px-6">
    <li className="mb-2">
      <b>Email:</b> <Link className="text-blue-800 underline" href="mailto:privacy@innovosprint.com">privacy@innovosprint.com</Link>
    </li>
    <li className="mb-2">
      <b>Phone:</b> <Link className="text-blue-800 underline" href="tel:+1234567890">+1 (234) 567-890</Link>
    </li>
  </ul>

  <h4 className="mt-8 mb-3 text-2xl">Important Notes:</h4>
  <ul className="list-disc px-6 pb-20">
    <li className="mb-2">Data deletion is irreversible. Once your data is deleted, you will lose access to your account and any associated services.</li>
    <li className="mb-2">If you have multiple accounts, you will need to submit a deletion request for each account separately.</li>
  </ul>

        
   </ScrollArea>
   </div>
  );
}