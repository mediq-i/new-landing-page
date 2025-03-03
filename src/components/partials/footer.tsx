import Image from "next/image";
import Link from "next/link";
import {
  FooterFacebook,
  FooterInstagram,
  FooterLinkedin,
  FooterTwitter,
  PlayStore,
  AppStore,
} from "../icons";
import { Button } from "@/components/ui/button";
import {
  StaggerWrapper,
  StaggerItem,
} from "@/helpers/animations/staggerWrapper";
import { AnimateWrapper } from "@/helpers/animations/animateWrapper";
import footerIcon from "../../../public/images/mediqi-icon.svg";
import { ChevronRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#070B1D] text-white py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {/* Logo and Company Info */}
          <AnimateWrapper variant="slideUp" className="col-span-1">
            <div className="space-y-4">
              <Link href="/" className="inline-block">
                <Image priority src={footerIcon} alt="Mediqi-icon" />

                <h3 className="text-lg font-semibold pt-5 max-w-2/3">
                  Your Best Personal Health Solution
                </h3>
              </Link>
            </div>
          </AnimateWrapper>

          {/* Menu Links */}
          <div className="col-span-1">
            <StaggerWrapper className="space-y-4">
              <StaggerItem>
                <h3 className="text-lg font-semibold mb-4">Menu</h3>
              </StaggerItem>
              <StaggerWrapper className="space-y-3" staggerDelay={0.1}>
                {[
                  "Blog",
                  "Career",
                  "Security",
                  "Media",
                  "Corporate Partnership",
                ].map((item) => (
                  <StaggerItem key={item}>
                    <Link
                      href="#"
                      className="block text-gray-400 hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </StaggerItem>
                ))}
              </StaggerWrapper>
            </StaggerWrapper>
          </div>

          {/* Help Links */}
          <div className="col-span-1">
            <StaggerWrapper className="space-y-4">
              <StaggerItem>
                <h3 className="text-lg font-semibold mb-4">Help</h3>
              </StaggerItem>
              <StaggerWrapper className="space-y-3" staggerDelay={0.1}>
                {["FAQ", "Terms & condition", "Privacy Policy"].map((item) => (
                  <StaggerItem key={item}>
                    <Link
                      href="#"
                      className="block text-gray-400 hover:text-white transition-colors"
                    >
                      {item}
                    </Link>
                  </StaggerItem>
                ))}
              </StaggerWrapper>
            </StaggerWrapper>
          </div>

          {/* Download App Section */}
          <div className="col-span-1 pt-6 lg:pt-0">
            <StaggerWrapper className="space-y-6">
              <StaggerItem>
                <h3 className="text-lg font-semibold">Download Our App</h3>
                <div className="flex flex-col lg:flex-row gap-4 mt-4">
                  <button className="flex items-center justify-center gap-x-3 rounded-md bg-[#3B3956] px-4 text-white shadow-md sm:justify-start py-2 lg:py-0 max-w-[300px] lg:w-full">
                    <PlayStore />
                    <div className="hidden text-left sm:block">
                      <small className="text-xs uppercase">Get it on</small>
                      <p className="text-[18px] font-semibold">Google Play</p>
                    </div>
                    <span className="font-semibold sm:hidden">
                      Get it on Playstore
                    </span>
                  </button>
                  <button className="flex items-center justify-center gap-x-3 rounded-md bg-[#3B3956] px-4 text-white shadow-md sm:justify-start max-w-[300px] py-2 lg:py-0 lg:w-full">
                    <AppStore />
                    <div className="hidden text-left sm:block">
                      <small className="text-xs">Download on the</small>
                      <p className="text-[18px] font-semibold">App Store</p>
                    </div>
                    <span className=" text-center font-semibold sm:hidden">
                      Download it on the App Store
                    </span>
                  </button>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="space-y-3 pt-4">
                  <p className="text-white pl-1">Are you a Doctor?</p>
                  <Button
                    className="bg-primary hover:bg-primary/90 text-white rounded-full px-6 text-lg"
                    size="lg"
                  >
                    Sign up as a Doctor
                    <ChevronRight strokeWidth={3} />
                  </Button>
                </div>
              </StaggerItem>
            </StaggerWrapper>
          </div>
        </div>

        {/* Bottom Section */}
        <AnimateWrapper variant="fadeIn" delay={0.4}>
          <div className="mt-16 pt-8 border-t border-gray-800">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-gray-400 text-sm">
                Copyright © 2023 Doctor. All rights reserved.
              </p>
              <div className="flex gap-6">
                {[
                  FooterFacebook,
                  FooterTwitter,
                  FooterLinkedin,
                  FooterInstagram,
                ].map((Icon, index) => (
                  <Link
                    key={index}
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors"
                    aria-label={`Visit our ${Icon.name}`}
                  >
                    <Icon />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </AnimateWrapper>
      </div>
    </footer>
  );
}
