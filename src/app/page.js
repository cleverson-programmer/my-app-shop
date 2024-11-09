
import { Header } from "@/components/PageHome/Header";
import { MacbookScrollDemo } from "@/components/PageHome/macbookScrollDemo";
import { ThreeDCardDemo}  from "@/components/PageHome/TreeDCardDemo";

export default function Home() {
  return (
    <>
      <div className="bg-[#D0051F]">
      <Header/>
      <MacbookScrollDemo/>
      <ThreeDCardDemo/>
      </div>
    </>
  );
}
