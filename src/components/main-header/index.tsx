import { MainHeaderContent } from "./MainHeaderContent";
import { MainHeaderAnimation } from "./MainHeaderAnimation";

export default function MainHeader() {
  return (
    <header className="min-h-screen flex flex-col items-center justify-center p-6 md:p-12 pt-0 bg-[url(/images/header-bg.png)] bg-cover">
      <MainHeaderAnimation>
        <MainHeaderContent />
      </MainHeaderAnimation>
    </header>
  );
}
