import Link from "next/link";
import { ThemeSwitch } from "./theme-switch";
import { metaData } from "../config";

const navItems = {
  "/resume": { name: "Download CV" },
};

export function Navbar() {
  return (
    <nav className="lg:mb-16 mb-12 py-5">
      <div className="flex flex-col md:flex-row md:items-center justify-between">
        <div className="flex items-center">
          <Link href="/" className="text-3xl font-semibold tracking-tight">
            {metaData.title}
          </Link>
        </div>
        <div className="flex flex-row gap-4 mt-6 md:mt-0 md:ml-auto items-center">
        <button className="button">
    <a className="button" href="../../../William's_CV.pdf" download="William's_CV.pdf">
      Download Resume
    </a>
</button>
          <ThemeSwitch />
        </div>
      </div>
    </nav>
  );
}
