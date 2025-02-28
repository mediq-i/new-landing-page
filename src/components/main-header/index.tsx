import { MainHeaderContent } from "./MainHeaderContent";
import { MainHeaderAnimation } from "./MainHeaderAnimation";
import { AnimateWrapper } from "@/helpers/animations/animateWrapper";

export default function MainHeader() {
  return (
    <header className="min-h-screen p-6 md:p-12 md:pr-0 flex items-center">
      {/* <AnimateWrapper variant="slideUp" duration={0.5}> */}
      <MainHeaderAnimation>
        <MainHeaderContent />
      </MainHeaderAnimation>
      {/* </AnimateWrapper> */}
    </header>
  );
}
