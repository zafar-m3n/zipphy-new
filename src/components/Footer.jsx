import React from "react";
import Icon from "@/components/ui/Icon";
import logoWhite from "@/assets/logo-white.png";
import { SparklesCore } from "@/components/animated/Sparkles";

export default function Footer() {
  return (
    <div className="min-h-40 relative w-full bg-[#010101] flex flex-col items-center justify-center overflow-hidden">
      <div className="w-full absolute inset-0 h-screen">
        <SparklesCore
          id="tsparticlesfullpage"
          background="transparent"
          minSize={0.6}
          maxSize={1.4}
          particleDensity={1000}
          className="w-full h-full"
          particleColor="#0bf40a"
        />
      </div>
      <footer className="p-8">
        <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col items-start space-y-4">
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
                <a href="/" className="hover:text-accent">
                  Home
                </a>
              </li>
              <li>
                <a href="/company/contact-us" className="hover:text-accent">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="/company/about-us" className="hover:text-accent">
                  About Us
                </a>
              </li>
              <li>
                <a href="/company/faq" className="hover:text-accent">
                  FAQ
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="container mx-auto text-justify text-gray-400 pt-8">
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
        </div>
      </footer>

      <div className="container mx-auto flex flex-col-reverse md:flex-row justify-between items-center py-4">
        <p>&copy; {new Date().getFullYear()} Zipphy.com. All Rights Reserved.</p>
        <div className="flex space-x-4">
          <a href="/terms" className="hover:text-[#0bf40a]">
            Terms & Conditions
          </a>
          <a href="/privacy" className="hover:text-[#0bf40a]">
            Privacy Policy
          </a>
        </div>
      </div>
    </div>
  );
}
