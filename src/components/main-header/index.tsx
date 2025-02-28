import { MainHeaderContent } from "./MainHeaderContent";
import { MainHeaderAnimation } from "./MainHeaderAnimation";

export default function MainHeader() {
  return (
    <header className="min-h-screen p-6 md:p-12 md:pr-0 flex items-center">
      <MainHeaderAnimation>
        <MainHeaderContent />
      </MainHeaderAnimation>
    </header>
  );
}
