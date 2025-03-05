"use client";
import { AnimateWrapper } from "@/helpers/animations/animateWrapper";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FaqCategory = "general" | "payment" | "security" | "terms" | "policy";

const faqData: Record<FaqCategory, { question: string; answer: string }[]> = {
  general: [
    {
      question: "What is Doctor+?",
      answer:
        "Doctor+ is a healthcare platform that provides services such as chat with doctors, visit nearest hospitals, buy your medicine, check on labs and update your information about health, all in one package!",
    },
    {
      question: "What do I get if I use Doctor+?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Excepteur sint occaecat cupidatat non proident.",
    },
    {
      question: "Where can I download the app and dashboard?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
  ],
  payment: [
    {
      question: "What payment methods are accepted?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question: "How do I get a refund?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ],
  security: [
    {
      question: "How secure is my medical data?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.",
    },
    {
      question: "Who has access to my health information?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    },
  ],
  terms: [
    {
      question: "What are the terms of service?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit.",
    },
    {
      question: "Can I cancel my subscription?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ],
  policy: [
    {
      question: "What is your privacy policy?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident.",
    },
    {
      question: "How is my data used?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ],
};

export default function FaqSection() {
  return (
    <section className="py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <AnimateWrapper variant="fadeIn" className="text-center mb-12">
          <span className="text-primary font-medium">FAQ</span>
          <h2 className="text-3xl md:text-4xl font-semibold text-accent-text mt-2 mb-4">
            Frequently Asked Question
          </h2>
          <p className="text-accent-text-2">
            See what is going on with other users, and share different thought
            and experience on our services
          </p>
        </AnimateWrapper>

        <AnimateWrapper variant="slideUp" className="text-center mb-12">
          <Tabs defaultValue="general" className="w-full">
            <TabsList className="flex flex-wrap justify-center h-auto mb-8 gap-2 bg-transparent w-full lg:px-6">
              {(Object.keys(faqData) as FaqCategory[]).map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="px-6 py-2 rounded-full border text-sm font-medium data-[state=active]:bg-primary data-[state=active]:text-white"
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </TabsTrigger>
              ))}
            </TabsList>

            {(Object.keys(faqData) as FaqCategory[]).map((category) => (
              <TabsContent key={category} value={category} className="mt-0">
                <Accordion type="single" collapsible className="space-y-4">
                  {faqData[category].map((item, index) => (
                    <AccordionItem
                      key={index}
                      value={`${category}-${index}`}
                      className="bg-gray-50 rounded-lg overflow-hidden border-none mb-4"
                    >
                      <AccordionTrigger className="px-6 py-4 hover:no-underline">
                        <span className="font-medium text-accent-text">
                          {item.question}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4 text-accent-text-2 text-left">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </TabsContent>
            ))}
          </Tabs>
        </AnimateWrapper>
      </div>
    </section>
  );
}
