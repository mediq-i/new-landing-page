import Image from "next/image";
import { Button } from "@/components/ui/button";

export function MainHeaderContent() {
  return (
    <div className="flex flex-col md:flex-row md:space-x-24">
      <div className="flex-1 max-w-xl -mt-8 px-6 flex justify-center flex-col">
        <h1
          className="text-4xl md:text-5xl font-semibold mb-4 border-l pl-3"
          id="main-heading"
        >
          Your Best Personal Health Solution
        </h1>
        <p className="text-lg mb-6 font-medium pl-3">
          Chat with doctors, visit nearest hospitals, buy your medicine, check
          on labs and update your information about health, all in one package!
        </p>
        <Button
          //   size="lg"
          className="bg-primary text-primary-foreground hover:bg-primary/90 w-[300px] rounded-full ml-3"
        >
          Book Appointment
        </Button>
      </div>
      <div className="flex-1 h-[600px]">
        <Image
          src="/webapp-image.png"
          alt="Doctor appointment booking application interface"
          width={1000}
          height={800}
          //   style={{ objectFit: "fill" }}
          //   sizes="(max-width: 768px) 100vw, 50vw"
          priority
        />
      </div>
    </div>
  );
}
