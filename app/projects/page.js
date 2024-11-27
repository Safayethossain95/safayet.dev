import Navbar from '@/components/Navbar'
import Page from '@/components/Page'
import React from 'react'
import Projects from "@/components/Projects";

export default function page() {
  return (
    <Page  currentPage="Projects" desc="I'm a passionate web developer and designer coding beautiful websites and apps.">
      
        <div className="div mt-[80px]"></div>

        <Projects/>
    </Page>
  )
}
