import ScrollToTop from "@/components/ScrollToTop";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <div className="flex flex-col justify-between p-4 border max-w-[1800px] mx-auto">
      <ScrollToTop />
      <Navbar />
    </div>
  );
}
