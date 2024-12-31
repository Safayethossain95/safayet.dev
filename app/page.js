import Bandan from "@/components/Bandan";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Page from "@/components/Page";
import Projects from "@/components/Projects";
import ProjectsCards from "@/components/ProjectsCards";
import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
    <Page currentPage="Home" desc="I'm a passionate web developer and designer coding beautiful websites and apps.">
    <Hero/>
    <Bandan/>
    <ProjectsCards/>

    </Page>

    </>
  );
}
