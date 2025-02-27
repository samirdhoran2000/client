import React from 'react'
import { DigitalABS, MaterialSpecifications, SLA3DPrintingOverview,SLADesignGuidelines } from '../components/SLAComponent';
import HeroSection from '../components/HeroSection';
import image1 from '../assets/Bottle-Mold_4744.webp'
import video1 from '../assets/video/video1.mp4'
import video2 from '../assets/video/video2.mp4'



const SLAPage = () => {
    return (
      <>
        <HeroSection
          mediaItems={[
            { type: "image", src: image1, duration: 3000 },
            { type: "video", src: video1 },
            { type: "video", src: video2 },
          ]}
        />
        <SLA3DPrintingOverview />
        <MaterialSpecifications />
        <DigitalABS />
        <MaterialSpecifications />
        <DigitalABS />
        <MaterialSpecifications />
        <SLADesignGuidelines />
      </>
    );
}

export default SLAPage