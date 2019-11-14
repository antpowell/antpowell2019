import React from "react";
import "./about.css";
import ButtonGroup from "../button_group/button_group";
import casual_img from "../../res/Casual_2_no_bg.png";
import uniform_img from "../../res/Uniform_2_no_bg.png";

const show_about_me = e => {};
const About = () => {
  return (
    <section className="vh-100 flex items-center">
      <img
        className="bg-img-holder vh-100 w-100 o-30"
        src={uniform_img}
        alt="Military uniform profile img"
      />
      <div className="bg-img-overlay"></div>
      <div className="tc mh7 z-1">
        <h2 className="f3 f2-m f-subheadline-l fw2 mv3 color_accent">
          A little about me... Hello,
        </h2>
        {/* TODO: Create a decision point selection for the the about me section, one for military one for software engineering. */}
        <div className="center ">
          <div className="cf ">
            <p className="general_about_me f4 fw3 pb4">
              I am a proud graduate of Texas Southern University, a university
              that was originally founded to educate students of
              African-American descent, also known as a HBCU, where I graduated
              with both B.S. and M.S. in Computer Science. I have worked for two
              Fortune500 companies, one of which being among the big five tech
              companies, and operated as a co-founder and lead engineer of a
              small education technology start-up. I have also tough students of
              varying ages and school levels, to include university level, the
              fundamentals of Computer Science and coding. I love everything
              tech and cool and want to bring as much of that world to
              underserved communities like the ones I was raised in. I also
              bring a capacity to accomplish any mission assigned to me, work
              independently or within a group, and give purpose, direction, and
              motivation to others thanks to the skills I acquired in my 12+
              years serving in the United States Armed Forces.
            </p>

            <p className="miliary_about_me fw3 dn">
              SGT Powell, Anthony has served as a Military Police Enlisted
              Soldier for 12+ years. His military career accomplishments include
              earning a position on the Commandant’s List during Warrior Leaders
              Course (WLC), received top honors for most accurate positive
              detections during AN/PSS-14 Mine Detector Operators Course, a
              course for NCOs, as a E-1, holding multiple Additional Skill
              Identifiers (ASIs), Military Police Investigator (V5) and
              Interservice Non-Lethal Inpidual Weapons Instructor (2A), and
              entrusted with multiple additional duties including but not
              limited to Master Resilience Trainer, Squad Leader, assistant
              Squad Leader, unit Master Driver, and Unit Public Affairs
              Representative. With SGT Powell’s accomplishments and additional
              duties during his 12 years and counting of service he was also
              able to complete and obtain a Bachelor of Science in Computer
              Science a highly technical and demanding achievement, complete two
              internship with Fortune 500 companies, and currently two courses
              away from earning a M.S. in Computer Science. SGT Powell
              traditionally maintains a PT score of 270 or above. SGT Powell has
              worked alongside MPI investigators in Grafenwöhr, Germany,
              assisting in multiple cases during his time there, and as
              Investigator and later NCOIC of the MPI office out of Guantanamo
              Bay, Cuba.
            </p>

            <p className="developer_about_me fw3 dn">
              I'm currently working on my M.S. Computer Science at Texas
              Southern University where he also was awarded his B.S. Computer
              Science. During my time at TSU, I was a Graduate Research
              Assistant, Lead System Engineer, Software Developer, and Team
              Leader for the Center for Research on Complex Networks Education
              Outreach Software Development section. Under the guidance of a
              mentor, Dr. Oscar Criner, I led a team of undergraduate and
              graduate developers in the development of an attendance management
              system that was adopted by professors University-wide. My passion
              for software development, technology, and teaching led to me being
              the first student from TSU to acquire the Lead position with
              Google Developer Groups - Houston and co-founding the largest
              student-run Computer Science organization as an undergraduate, the
              Mobile Application Development Group. My presentation, "Dynamic
              Data Analytics for Higher Education", won first place Oral
              Presenter in Computer Sciences & Information Management at the
              2017 Emerging Researchers National Conference in STEM for my
              research on the relationship between class attendance and
              successful matriculation through STEM degrees in higher education
              and the creation of an Attendance Management System to help track
              and manage attendance at my University.
            </p>
          </div>
        </div>
        <ButtonGroup></ButtonGroup>
      </div>
    </section>
  );
};

export default About;
