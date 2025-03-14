"use client";

import type React from "react";

import { useState } from "react";
import { Facebook, Instagram, Linkedin, Twitter } from "../icons";
import { ChevronRight, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { AnimateWrapper } from "@/helpers/animations/animateWrapper";

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Add your form submission logic here
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulated API call
    setIsSubmitting(false);
  };

  return (
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 items-center shadow-lg rounded-2xl pr-10">
          {/* Contact Info Card */}
          <AnimateWrapper variant="slideRight">
            <div className="bg-[url(/images/contact-img.png)] bg-cover max-w-[548px] h-[568px] rounded-2xl p-8 text-white flex flex-col justify-between">
              <div>
                <h2 className="text-3xl md:text-4xl/11 font-semibold mb-8 md:w-5/6">
                  We Can Be One Of Your Key Factors Being Healthy
                </h2>
              </div>

              <div className="flex justify-between items-end pb-8">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 mt-1" />
                    <div>
                      <p>533 Park Lane, Brighton</p>
                      <p>BN35 0DB</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <Phone className="w-6 h-6" />
                    <p>(024) 311-3214</p>
                  </div>

                  <div className="flex items-center gap-4">
                    <Mail className="w-6 h-6" />
                    <p>doctordoc@email.com</p>
                  </div>
                </div>

                <div className="flex gap-3 flex-col">
                  <a
                    href="#"
                    className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  >
                    <Facebook />
                  </a>
                  <a
                    href="#"
                    className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  >
                    <Twitter />
                  </a>
                  <a
                    href="#"
                    className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  >
                    <Linkedin />
                  </a>
                  <a
                    href="#"
                    className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  >
                    <Instagram />
                  </a>
                </div>
              </div>
            </div>
          </AnimateWrapper>

          {/* Contact Form */}
          <AnimateWrapper variant="slideLeft">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  type="text"
                  placeholder="Full Name"
                  required
                  className="border-0 border-b border-gray-200 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary"
                />
              </div>

              <div>
                <Input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="border-0 border-b border-gray-200 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary"
                />
              </div>

              <div>
                <Input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  className="border-0 border-b border-gray-200 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary"
                />
              </div>

              <div>
                <Textarea
                  placeholder="How can we help you?"
                  required
                  className="min-h-[100px] border-0 border-b border-gray-200 rounded-none px-0 focus-visible:ring-0 focus-visible:border-primary"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-primary text-white hover:bg-primary/90 rounded-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Submit →"}
              </Button>
            </form>
          </AnimateWrapper>
        </div>
      </div>
    </section>
  );
}
