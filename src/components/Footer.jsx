import React from "react";
import Icon from "@/components/ui/Icon";
import logoWhite from "@/assets/logo-white.png";
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
            ActiveX Ltd, a company with a solid reputation and over a decade of experience in the market, is a
            registered International Liquidity Provider. Our registration number is SL008901. We operate both the
            liquidity and the domain, with our registered address at 130 Old Street, London, EC1V 9B, and our office
            located at Suite 1, 44 Main Street, Douglas, ML11. Our longevity and standing in the market are testaments
            to our reliability and commitment to our clients. We adhere to strict trading regulations, including the
            protection of client funds, which are held in a segregated bank account to ensure their utmost safety and
            security. Trust in our experience and our commitment to providing exceptional service.
          </p>
          <br />
          <p>
            <span className="font-bold">Risk Warning: </span>
            CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. 82.12% of
            retail investor accounts lose money when trading CFDs with this provider. You should consider whether you
            understand how CFDs work and whether you can afford to take the high risk of losing your money. You don't
            own or have rights in the underlying assets. Past performance is not a reliable indicator of future
            performance and tax laws are subject to change. The information on this website is general in nature and
            doesn't take into account your or your client's personal objectives, financial circumstances, or needs.
            Please read our RDN and other legal documents and ensure you fully understand the risks before you make any
            trading decisions. We encourage you to seek independent advice.
          </p>
          <br />
          <p>
            Zipphy is proud to be a certified broker, duly licensed and regulated by the Financial Services Development
            House FSDH.org. Our license number is SN178, reflecting our commitment to maintaining the highest standards
            of financial integrity and transparency.
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
