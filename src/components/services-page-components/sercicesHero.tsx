"use client";

import Link from "next/link";
import { AnimateWrapper } from "@/helpers/animations/animateWrapper";
import {
  StaggerWrapper,
  StaggerItem,
} from "@/helpers/animations/staggerWrapper";
import { ChevronRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  generalServices,
  specialServices,
  healthSupport,
} from "../partials/data";

export default function ServicesHero() {
  return (
    <section className="pt-32 pb-16 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-10">
          <AnimateWrapper variant="fadeIn" className="">
            <span className="text-primary font-medium ">Services</span>
            <h1 className="text-3xl md:text-4xl font-semibold text-accent-text mt-2 mb-4">
              General Service
            </h1>
          </AnimateWrapper>
          <AnimateWrapper variant="slideLeft">
            <p className="text-accent-text-2 max-w-lg">
              Choose Healthcare services encompasses a wide range of medical,
              preventive, diagnostic, therapeutic, and supportive services aimed
              at promoting, maintaining, or restoring health
            </p>
          </AnimateWrapper>
        </div>

        {/* Tabs */}
        <Tabs defaultValue="general" className="w-full">
          <AnimateWrapper variant="slideUp">
            <TabsList className="flex h-auto bg-transparent mb-12 border-b border-gray-200 w-full justify-start gap-8 p-0 rounded-none">
              <TabsTrigger
                value="general"
                className="pb-4 text-lg font-medium data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:-mb-[2px] data-[state=inactive]:text-accent-text-2 bg-transparent rounded-none"
              >
                General Services
              </TabsTrigger>
              <TabsTrigger
                value="special"
                className="pb-4 text-lg font-medium data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:-mb-[2px] data-[state=inactive]:text-accent-text-2 bg-transparent rounded-none"
              >
                Special Services
              </TabsTrigger>
              <TabsTrigger
                value="support"
                className="pb-4 text-lg font-medium data-[state=active]:text-primary data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:-mb-[2px] data-[state=inactive]:text-accent-text-2 bg-transparent rounded-none"
              >
                Health Support
              </TabsTrigger>
            </TabsList>
          </AnimateWrapper>

          {/* General Services Content */}
          <TabsContent value="general" className="mt-0">
            <StaggerWrapper className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {generalServices.map((service, index) => (
                <StaggerItem key={index}>
                  <div className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors group">
                    <div className="mb-4">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-accent-text mb-2">
                      {service.title}
                    </h3>
                    <p className="text-accent-text-2 mb-4">
                      {service.description}
                    </p>
                    <Link
                      href={service.link}
                      className="inline-flex items-center text-primary font-medium group-hover:underline"
                    >
                      {service.linkText}
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </StaggerItem>
              ))}
            </StaggerWrapper>
          </TabsContent>

          {/* Special Services Content */}
          <TabsContent value="special" className="mt-0">
            <StaggerWrapper className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {specialServices.map((service, index) => (
                <StaggerItem key={index}>
                  <div className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors group">
                    <div className="mb-4">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-accent-text mb-2">
                      {service.title}
                    </h3>
                    <p className="text-accent-text-2 mb-4">
                      {service.description}
                    </p>
                    <Link
                      href={service.link}
                      className="inline-flex items-center text-primary font-medium group-hover:underline"
                    >
                      {service.linkText}
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </StaggerItem>
              ))}
            </StaggerWrapper>
          </TabsContent>

          {/* Health Support Content */}
          <TabsContent value="support" className="mt-0">
            <StaggerWrapper className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {healthSupport.map((service, index) => (
                <StaggerItem key={index}>
                  <div className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors group">
                    <div className="mb-4">
                      <service.icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-accent-text mb-2">
                      {service.title}
                    </h3>
                    <p className="text-accent-text-2 mb-4">
                      {service.description}
                    </p>
                    <Link
                      href={service.link}
                      className="inline-flex items-center text-primary font-medium group-hover:underline"
                    >
                      {service.linkText}
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </Link>
                  </div>
                </StaggerItem>
              ))}
            </StaggerWrapper>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}
