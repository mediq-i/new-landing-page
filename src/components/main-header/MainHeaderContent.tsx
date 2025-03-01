import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight, Tags } from "lucide-react";

export function MainHeaderContent() {
  return (
    <div className="flex flex-col justify-center items-center pt-16">
      <div className="flex-1 max-w-6xl px-6 flex justify-center items-center flex-col py-12">
        <Button className="bg-ring w-fit rounded-full hover:bg-muted-foreground/50">
          <div className="flex items-center gap-x-1">
            <Tags color="#636363" />
            <p className="text-accent-text font-light">
              Promo until 28th February to save 20%
            </p>
            <ChevronRight color="#3B3956" strokeWidth={4} />
          </div>
        </Button>
        <h1
          className="text-4xl md:text-6xl font-semibold mb-4 text-accent-text pt-10 text-center"
          id="main-heading"
        >
          Your Best Personal Health Solution
        </h1>
        <p className="text-lg mb-8 font-medium text-accent-text-2 max-w-2xl text-center">
          Chat with doctors, visit nearest hospitals, buy your medicine, check
          on labs and update your information about health, all in one package!
        </p>
        <Button
          // size="lg"
          className="bg-primary py-6 text-primary-foreground hover:bg-primary/90 w-[300px] rounded-full text-lg"
        >
          <div className="flex items-center gap-x-3">
            Book Appointment
            <ChevronRight color="#fff" />
          </div>
        </Button>
      </div>
      <div className="flex-1 h-[600px]">
        <Image
          src="/images/webapp-img.png"
          alt="Doctor appointment booking application interface"
          width={1000}
          height={800}
        />
      </div>
    </div>
  );
}
