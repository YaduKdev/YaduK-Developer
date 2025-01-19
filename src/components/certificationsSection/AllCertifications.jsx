import { FaGoogle } from "react-icons/fa";
import { SiCisco } from "react-icons/si";
import { SiUdemy } from "react-icons/si";
import { SiOracle } from "react-icons/si";
import SingleCertification from "./SingleCertification";

const certifications = [
  {
    main: "Google Cloud Essentials",
    icon: FaGoogle,
    company: "Google Cloud Skills Boost",
    date: "2023",
    courses: [
      {
        name: "Google Cloud Computing Foundations: Cloud Computing Fundamentals",
        link: "https://www.cloudskillsboost.google/public_profiles/45c6318c-6ce8-4498-a623-2263a4d3a001/badges/9696891?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
      },
      {
        name: "Google Cloud Computing Foundations: Data, ML, and AI in Google Cloud",
        link: "https://www.cloudskillsboost.google/public_profiles/45c6318c-6ce8-4498-a623-2263a4d3a001/badges/9710016?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
      },
      {
        name: "Google Cloud Computing Foundations: Infrastructure in Google Cloud",
        link: "https://www.cloudskillsboost.google/public_profiles/45c6318c-6ce8-4498-a623-2263a4d3a001/badges/9706011?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
      },
      {
        name: "Google Cloud Computing Foundations: Networking & Security in Google Cloud",
        link: "https://www.cloudskillsboost.google/public_profiles/45c6318c-6ce8-4498-a623-2263a4d3a001/badges/9707268?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
      },
      {
        name: "Baseline: Infrastructure",
        link: "https://www.cloudskillsboost.google/public_profiles/45c6318c-6ce8-4498-a623-2263a4d3a001/badges/9669805?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
      },
      {
        name: "Baseline: Data, ML, AI",
        link: "https://www.cloudskillsboost.google/public_profiles/45c6318c-6ce8-4498-a623-2263a4d3a001/badges/9675713?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
      },
      {
        name: "Networking Fundamentals in Google Cloud",
        link: "https://www.cloudskillsboost.google/public_profiles/45c6318c-6ce8-4498-a623-2263a4d3a001/badges/4485554?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
      },
      {
        name: "Google Cloud Essentials",
        link: "https://www.cloudskillsboost.google/public_profiles/45c6318c-6ce8-4498-a623-2263a4d3a001/badges/4478985?utm_medium=social&utm_source=linkedin&utm_campaign=ql-social-share",
      },
    ],
  },
  {
    main: "Programming Essentials in Python",
    icon: SiCisco,
    company: "Cisco Networking Academy",
    date: "2024",
    courses: [
      {
        name: "Programming Essentials in Python",
        link: "https://drive.google.com/file/d/1Cc9ufECCc4gQiJLdvPdmnZQ0EsI4gWqq/view",
      },
    ],
  },
  {
    main: "Udemy Courses",
    icon: SiUdemy,
    company: "Udemy",
    date: "2021",
    courses: [
      {
        name: "The Complete Web Developer in 2021: Zero To Mastery",
        link: "https://drive.google.com/file/d/1kBlbgBtNwH0wSbDrJKRGCrA6YclN0XRW/view",
      },
      {
        name: "The Complete 2021 Web Development Bootcamp",
        link: "https://drive.google.com/file/d/1AU8ZvvZT6Xn36E5MTQqA0uaFCYLpmOiT/view",
      },
    ],
  },
  {
    main: "Oracle Database 11g: SQL Fundamentals",
    icon: SiOracle,
    company: "Oracle",
    date: "2014",
    courses: [
      {
        name: "Oracle Database 11g: SQL Fundamentals",
        link: "https://drive.google.com/file/d/1UVW-uppS0Ubq3AUigRQzqs6saWT2Fe8v/view",
      },
    ],
  },
];

const AllCertifications = () => {
  return (
    <div className="flex flex-col items-center justify-between">
      {certifications.map((certification, index) => {
        return (
          <SingleCertification key={index} certification={certification} />
        );
      })}
    </div>
  );
};

export default AllCertifications;
