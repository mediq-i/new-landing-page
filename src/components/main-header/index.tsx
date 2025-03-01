import { MainHeaderContent } from "./MainHeaderContent";
import { MainHeaderAnimation } from "./MainHeaderAnimation";
import { AnimateWrapper } from "@/helpers/animations/animateWrapper";

export default function MainHeader() {
  return (
    // <header className="min-h-screen flex flex-col items-center justify-center p-6 md:p-12 bg-gradient-to-br from-white-200 via-blue-200 to-pink-200">
    <header className="min-h-screen flex flex-col items-center justify-center p-6 md:p-12 bg-linear-to-br[white_25%,blue_20%,purple_20%,pink_20%,teal]">
      {/* <AnimateWrapper variant="slideUp" duration={0.5}> */}
      <MainHeaderAnimation>
        <MainHeaderContent />
      </MainHeaderAnimation>
      {/* </AnimateWrapper> */}
    </header>
  );
}
