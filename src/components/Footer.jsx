import React from "react";
import Icon from "@/components/ui/Icon";
import logoWhite from "@/assets/logo-white.png";
import licenseImage from "@/assets/license-image.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="min-h-40 relative w-full bg-[#010101] flex flex-col items-center justify-center overflow-hidden">
      <footer className="p-8 z-50">
        <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-start justify-between space-y-4">
            <img src={logoWhite} alt="Zipphy Logo" className="w-full" />
            <div className="flex space-x-4">
              <div className="rounded-full">
                <Icon icon="mdi:facebook" width={36} className="text-[#0bf40a]" />
              </div>
              <div className="rounded-full">
                <Icon icon="mdi:instagram" width={36} className="text-[#0bf40a]" />
              </div>
              <div className="rounded-full">
                <Icon icon="mdi:linkedin" width={36} className="text-[#0bf40a]" />
              </div>
            </div>
          </div>

          <div className="text-left">
            <h3 className="text-lg font-bold text-[#0bf40a] mb-6 underline underline-offset-8">Contact Us</h3>
            <div className="flex flex-col space-y-6">
              <div className="flex items-center">
                <div className="aspect-square bg-[#0bf40a] text-[#010101] rounded-full p-2 flex justify-center items-center">
                  <Icon icon="heroicons:envelope" width={20} />
                </div>
                <span className="ml-4">support@zipphy.com</span>
              </div>
              <div>
                <h4 className="text-base font-semibold text-background mb-2">Australia</h4>
                <div className="flex items-start mb-2">
                  <div className="aspect-square bg-[#0bf40a] text-[#010101] rounded-full p-2 flex justify-center items-center">
                    <Icon icon="heroicons:map-pin" width={20} />
                  </div>
                  <p className="ml-4 text-background">57 Carters Road, Dural NSW 2158, Sydney, Australia.</p>
                </div>
                <div className="flex items-center">
                  <div className="aspect-square bg-[#0bf40a] text-[#010101] rounded-full p-2 flex justify-center items-center">
                    <Icon icon="heroicons:phone" width={20} />
                  </div>
                  <span className="ml-4 text-background">+61 483 956 413</span>
                </div>
              </div>
              <div>
                <h4 className="text-base font-semibold text-background mb-2">United Kingdom</h4>
                <div className="flex items-start mb-2">
                  <div className="aspect-square bg-[#0bf40a] text-[#010101] rounded-full p-2 flex justify-center items-center">
                    <Icon icon="heroicons:map-pin" width={20} />
                  </div>
                  <p className="ml-4 text-background">22 Broomfield Place, Stoven, United Kingdom.</p>
                </div>
                <div className="flex items-center">
                  <div className="aspect-square bg-[#0bf40a] text-[#010101] rounded-full p-2 flex justify-center items-center">
                    <Icon icon="heroicons:phone" width={20} />
                  </div>
                  <span className="ml-4 text-background">+44 7360 545857</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-left">
            <h3 className="text-lg font-bold text-[#0bf40a] mb-6 underline underline-offset-8">Useful Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-[#0bf40a]">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/company/contact-us" className="hover:text-[#0bf40a]">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/company/about-us" className="hover:text-[#0bf40a]">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/company/faq" className="hover:text-[#0bf40a]">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="container mx-auto text-justify text-gray-400 pt-8">
          <p>
            <span className="font-bold">Risk Warning: </span>
            Our services involve trading in complex financial instruments that carry a high level of risk and may not be
            suitable for all investors. You could lose all your invested capital. Please ensure you fully understand the
            risks involved, consider your level of experience, and seek independent financial advice if necessary. Past
            performance does not guarantee future results.
          </p>
          <br />
          <p>
            Zipphy is proud to be a certified broker, duly licensed and regulated by FIZ CONSULTANTS LIMITED
            {/* <a href="https://fsdh.org" target="_blank" rel="noopener noreferrer" className="text-[#0bf40a] underline">
              FSDH.org
            </a> */}
            . Our company number is{" "}
            <a
              href="https://find-and-update.company-information.service.gov.uk/company/06145674"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#0bf40a] hover:underline"
            >
              06145674
            </a>
            , reflecting our commitment to maintaining the highest standards of financial integrity and transparency.
          </p>
        </div>
      </footer>

      <div className="container mx-auto flex flex-col-reverse md:flex-row justify-between items-center py-4 z-50 border-t border-[#f2f2f2]">
        <p>&copy; {new Date().getFullYear()} Zipphy.com. All Rights Reserved.</p>
        <div className="flex space-x-4">
          <Link to="/terms" className="hover:text-[#0bf40a]">
            Terms & Conditions
          </Link>
          <Link to="/privacy" className="hover:text-[#0bf40a]">
            Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
}
