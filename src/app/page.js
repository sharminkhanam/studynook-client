import Banner from "@/components/Banner";
import FeaturedRoom from "@/components/FeaturedRoom";
import StudyProductivity from "@/components/StudyProductivity";
import WhyChooseStudyNook from "@/components/WhyChooseStudyNook";

import Image from "next/image";



export default function Home() {
  return (
    <div >
     <Banner/>
     <FeaturedRoom/>
     <WhyChooseStudyNook/>
     <StudyProductivity/>
   
    </div>
  );
}
