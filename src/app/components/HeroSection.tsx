import Link from "next/link";
import React from "react";
import HeroImage from "../image/heroImage.png";
import topHeroImage from "../image/topHeroImage.png";
import Image from "next/image";
import { appPATH } from "../utils/path";

const HeroSection = () => {
    return (
        <section className="hero_section_container">
            <div className="hero_section_left_side">
                <h5 className="first_title">the ultimate collecion</h5>
                <h1 className="seconde_title">
                    <span style={{ fontFamily: "inherit" }}>Be Confident</span>
                    <span style={{ fontFamily: "inherit" }}>Be stylish</span>
                </h1>
                <Link
                    className="base_button hero_section_button "
                    href={appPATH + "/products"}
                >
                    shop now
                </Link>
            </div>
            <div className="hero_section_right_side">
                <Image className="first_image" alt="image" src={HeroImage} />{" "}
                <Image
                    alt="image"
                    src={topHeroImage}
                    className="seconde_image"
                />
            </div>
        </section>
    );
};

export default HeroSection;
