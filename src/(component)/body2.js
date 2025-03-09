import React from 'react';
import Image from "next/image";
import SocialIcon from "@/(component)/socialIcon";
import {Honk} from "next/dist/compiled/@next/font/dist/google";

function Body(props) {
    return (
        <div id="body" className="text-white d-flex flex-column flex-md-row-reverse justify-content-center align-items-center gap-2 py-lg-5">
            <div className="col-8 col-lg-4  d-flex justify-content-center align-items-center">
                <Image
                    src="/profile.jpg" // Replace with your image path
                    alt="Profile"
                    width={300} // Adjust width as needed
                    height={300} // Adjust height as needed
                    className="img-fluid rounded-circle border border-3  border-primary"
                />
            </div>
            <div className="col-12 col-lg-6 d-flex align-items-center flex-column">
                <p className="fs-1 Honk.ClassName"> 👋 Hi, I'm Harshana Wijerathne</p>
                <p className="fs-3">Full Stack Developer</p>
                <div className="px-2 w-100 d-none d-sm-block">
                    <p className="fs-5 text-justify px-2 ">
                        I am a dedicated Graduate Engineer from the University of Moratuwa with a strong passion for
                        exploring and expanding
                        my knowledge in the software industry. I am eager to pursue opportunities in the IT industry to
                        advance my career
                        as a Software Engineer </p>
                </div>

                <div className="socials d-flex gap-2">
                    <SocialIcon name="github" link="https://github.com/harshana-wijerathne"/>
                    <SocialIcon name="linkedin" link="https://www.linkedin.com/in/harshana-wijerathne-9a584621a/"/>
                    <SocialIcon name="whatsapp" link="tel: +94768585130"/>
                    <SocialIcon name="envelope-at-fill" link="mailto: harshanawijerathne08@gmail.com"/>
                </div>
                <div className="d-flex justify-content-center gap-3 mt-3">
                    <a href="/Harshana.pdf" target="_blank" rel="noopener noreferrer"
                       className="btn btn-primary d-flex align-items-center">
                        <i className="bi bi-eye me-2"></i> Preview CV
                    </a>
                    <a href="/Harshana.pdf" download="Harshana_Wijerathne_CV.pdf"
                       className="btn btn-success d-flex align-items-center">
                        <i className="bi bi-download me-2"></i> Download CV
                    </a>
                </div>
            </div>


        </div>
    );
}

export default Body;