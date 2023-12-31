import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import Layout from "../components/layouts/Layout";
import { Col, Row } from "react-bootstrap";
import Link from "next/link";
import kidsWithPc from "../public/images/home/kids-with-computer.png";
import occ from "../public/images/home/kid_2.svg";
import kid_3 from "../public/images/home/kid_3.svg";
import kid_4 from "../public/images/home/kid_4.svg";
import kid_5 from "../public/images/home/kid_5.svg";
import Badge from "react-bootstrap/Badge";
import { BiCheck, BiTrophy, BiDownload } from "react-icons/bi";

export default function Home() {
  const [courses, setCourses] = useState([
    {
      id: 1,
      grade: "1-3",
      courses: [
        {
          id: 1,
          title: "Rising Coding Star G1",
          class_numbers: "24",
          quizzes: "24",
          Activities: "48+",
          durations: "3",
          description:
            "Empowering young minds with coding, AI, and creativity for enhanced aptitude and critical thinking skills.",
          pdfLink: "https://docs.google.com/document/d/1PQrRlo9_KIhzSBBCwyh1Tnwi_GmrzF3VEORJFgNfFVw/edit?usp=sharing",
          topics: [
            {
              id: 1,
              name: "Basic Web App",
            },
            {
              id: 2,
              name: "Front-end",
            },
            {
              id: 3,
              name: "Web Styling",
            },
            {
              id: 4,
              name: "Python",
            },
            {
              id: 5,
              name: "JS App Development",
            },
          ],
          achievements: [
            {
              id: 1,
              name: "Improved aptitude",
            },
            {
              id: 2,
              name: "Critical thinking",
            },
            {
              id: 3,
              name: "Conceptual clarity ",
            },
            {
              id: 4,
              name: "Creative boost",
            },
          ],
        },
        {
          id: 2,
          title: "Coding Champion",
          class_numbers: "48",
          quizzes: "84",
          Activities: "168+",
          durations: "6",
          description:
            "Interactive coding journey for mastering fundamentals, transitioning to advanced languages seamlessly.",
          pdfLink: "https://docs.google.com/document/d/1PQrRlo9_KIhzSBBCwyh1Tnwi_GmrzF3VEORJFgNfFVw/edit?usp=sharing",
          topics: [
            {
              id: 1,
              name: "Game Development",
            },
            {
              id: 2,
              name: "Deep Dive Into AI",
            },
            {
              id: 3,
              name: "ML in Advance",
            },
            {
              id: 4,
              name: "Advance Problem Solving",
            },
            {
              id: 5,
              name: "Git Version Control",
            },
          ],
          achievements: [
            {
              id: 1,
              name: "Improved aptitude",
            },
            {
              id: 2,
              name: "Critical thinking",
            },
            {
              id: 3,
              name: "Conceptual clarity ",
            },
            {
              id: 4,
              name: "Creative boost",
            },
          ],
        },
        {
          id: 3,
          title: "Coding Prodigy",
          class_numbers: "96",
          quizzes: "96",
          Activities: "192+",
          durations: "12",
          description:
            "Comprehensive, problem-solving-focused course unlocking creativity and paving the way for tech brilliance.",
          pdfLink: "https://docs.google.com/document/d/1PQrRlo9_KIhzSBBCwyh1Tnwi_GmrzF3VEORJFgNfFVw/edit?usp=sharing",
          topics: [
            {
              id: 1,
              name: "GUI Development",
            },
            {
              id: 2,
              name: "Introduction to Data Science",
            },
            {
              id: 3,
              name: "OOP",
            },
            {
              id: 4,
              name: "JS App Development",
            },
            {
              id: 5,
              name: "Web Hosting",
            },
          ],
          achievements: [
            {
              id: 1,
              name: "Improved aptitude",
            },
            {
              id: 2,
              name: "Critical thinking",
            },
            {
              id: 3,
              name: "Conceptual clarity ",
            },
            {
              id: 4,
              name: "Creative boost",
            },
          ],
        },
      ],
    },
    {
      id: 2,
      grade: "4-6",
      courses: [
        {
          id: 1,
          title: "Rising Coding Star G4",
          class_numbers: "24",
          quizzes: "24",
          Activities: "48+",
          durations: "3",
          description:
            "Engaging coding lessons, building strong foundations for young tech enthusiasts' future endeavors.",
          pdfLink: "https://docs.google.com/document/d/1EJfMQSrp5AcBDNfSf6oo62iHeT-_24ybYc03i-U_krY/edit?usp=sharing",
          topics: [
            {
              id: 1,
              name: "Web Development",
            },
            {
              id: 2,
              name: "Python Programming",
            },
            {
              id: 3,
              name: "Game Development",
            },
            {
              id: 3,
              name: "Data Science",
            },
            {
              id: 3,
              name: "Java Programming",
            },
          ],
          achievements: [
            {
              id: 1,
              name: "Improved aptitude",
            },
            {
              id: 2,
              name: "Critical thinking",
            },
            {
              id: 3,
              name: "Conceptual clarity ",
            },
            {
              id: 4,
              name: "Creative boost",
            },
          ],
        },
        {
          id: 2,
          title: "Coding Champion",
          class_numbers: "48",
          quizzes: "48",
          Activities: "96+",
          durations: "6",
          description:
            "Robust, problem-centric curriculum fostering innovative thinking and preparing students for tech excellence.",
          pdfLink: "https://docs.google.com/document/d/1EJfMQSrp5AcBDNfSf6oo62iHeT-_24ybYc03i-U_krY/edit?usp=sharing",
          topics: [
            {
              id: 1,
              name: "Web in Advance",
            },
            {
              id: 2,
              name: "Advance Python",
            },
            {
              id: 3,
              name: "Game Development",
            },
            {
              id: 3,
              name: "Data Science",
            },
            {
              id: 3,
              name: "Java Advance",
            },
          ],
          achievements: [
            {
              id: 1,
              name: "Improved aptitude",
            },
            {
              id: 2,
              name: "Critical thinking",
            },
            {
              id: 3,
              name: "Conceptual clarity ",
            },
            {
              id: 4,
              name: "Creative boost",
            },
          ],
        },
        {
          id: 3,
          title: "Judge Coding Prodigy",
          class_numbers: "96",
          quizzes: "96",
          Activities: "192+",
          durations: "12",
          description:
            "Cutting-edge coding program cultivating advanced skills, propelling students towards tech mastery and innovation.",
          pdfLink: "https://docs.google.com/document/d/1EJfMQSrp5AcBDNfSf6oo62iHeT-_24ybYc03i-U_krY/edit?usp=sharing",
          topics: [
            {
              id: 1,
              name: "Deep in Web",
            },
            {
              id: 2,
              name: "Python With Problem Solving",
            },
            {
              id: 3,
              name: "Game Development in Deep",
            },
            {
              id: 3,
              name: "Data Science Advance",
            },
            {
              id: 3,
              name: "Java OOP",
            },
          ],
          achievements: [
            {
              id: 1,
              name: "Improved aptitude",
            },
            {
              id: 2,
              name: "Critical thinking",
            },
            {
              id: 3,
              name: "Conceptual clarity ",
            },
            {
              id: 4,
              name: "Creative boost",
            },
          ],
        },
      ],
    },
    {
      id: 3,
      grade: "7-9",
      courses: [
        {
          id: 1,
          title: "Rising Coding Star G7",
          class_numbers: "24",
          quizzes: "24",
          Activities: "48+",
          durations: "3",
          description:
            "Foundational coding immersion, nurturing a love for programming and logical thinking.",
           pdfLink: "https://docs.google.com/document/d/1unTz2RQM7TaOdJKPPw7FpjDcF12qwrAB_4Hh3O-pZkI/edit?usp=sharing",
          topics: [
            {
              id: 1,
              name: "Web Dev Pro",
            },
            {
              id: 2,
              name: "Python Pro",
            },
            {
              id: 3,
              name: "Game Development",
            },
            {
              id: 3,
              name: "Data Science",
            },
            {
              id: 3,
              name: "Applyed Java",
            },
          ],
          achievements: [
            {
              id: 1,
              name: "Improved aptitude",
            },
            {
              id: 2,
              name: "Critical thinking",
            },
            {
              id: 3,
              name: "Conceptual clarity ",
            },
            {
              id: 4,
              name: "Creative boost",
            },
          ],
        },
        {
          id: 2,
          title: "Coding Champion",
          class_numbers: "48",
          quizzes: "48",
          Activities: "96+",
          durations: "6",
          description:
            "Advanced problem-solving course igniting creativity and preparing students for tech leadership roles.",
           pdfLink: "https://docs.google.com/document/d/1unTz2RQM7TaOdJKPPw7FpjDcF12qwrAB_4Hh3O-pZkI/edit?usp=sharing",
          topics: [
            {
              id: 1,
              name: "Web App Pro",
            },
            {
              id: 2,
              name: "Python Pro",
            },
            {
              id: 3,
              name: "Game Development",
            },
            {
              id: 3,
              name: "Data Science",
            },
            {
              id: 3,
              name: "Applyed Java",
            },
          ],
          achievements: [
            {
              id: 1,
              name: "Improved aptitude",
            },
            {
              id: 2,
              name: "Critical thinking",
            },
            {
              id: 3,
              name: "Conceptual clarity ",
            },
            {
              id: 4,
              name: "Creative boost",
            },
          ],
        },
        {
          id: 3,
          title: "Coding Prodigy",
          class_numbers: "96",
          quizzes: "96",
          Activities: "192+",
          durations: "12",
          description:
            "Exhaustive coding curriculum, honing expert-level skills for tech innovation and industry leadership.",
           pdfLink: "https://docs.google.com/document/d/1unTz2RQM7TaOdJKPPw7FpjDcF12qwrAB_4Hh3O-pZkI/edit?usp=sharing",
          topics: [
            {
              id: 1,
              name: "Web App Pro",
            },
            {
              id: 2,
              name: "Practical Python",
            },
            {
              id: 3,
              name: "Game Development",
            },
            {
              id: 3,
              name: "Data Science",
            },
            {
              id: 3,
              name: "Applyed Java",
            },
          ],
          achievements: [
            {
              id: 1,
              name: "Improved aptitude",
            },
            {
              id: 2,
              name: "Critical thinking",
            },
            {
              id: 3,
              name: "Conceptual clarity ",
            },
            {
              id: 4,
              name: "Creative boost",
            },
          ],
        },
      ],
    },
  ]);
  const [gradeWiseCourses, setGradeWiseCourses] = useState(courses[0]);
  return (
    <>
      <Head>
        <title>Progobees | Home</title>
        <meta name="description" content="Meta description will be here" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Row>
          <Col xs={{ span: 12, order: 1 }} md={{ span: 4, order: 1 }}>
            <div className="fun-game ms-2">
              <h1>Coding Is Fun Game</h1>
              <p>
                Online coding classes for kids to become the innovators of the
                future
              </p>
              <Link href={"/free-class-request"} className="btn btn-primary">
                TRY FREE CLASSES
              </Link>
            </div>
          </Col>
          <Col
            xs={{ span: 12 }}
            md={{ span: 8, order: 2 }}
            className="text-center"
          >
            <Image
              className="img-fluid"
              src={kidsWithPc}
              alt="kids with computers"
            />
          </Col>
        </Row>
        <Row className="mt-2">
          <Col md={5} className="text-center">
            <Image className="img-fluid" src={occ} alt="kids with computers" />
          </Col>
          <Col md={7}>
            <div className="occ_font ms-2">
              <h1>Online coding classes for kids with expert Cod players</h1>
              <br />
              <Row className="two_btn justify-content-xs-center justify-content-lg-start">
                <Link
                  href={"/free-class-request"}
                  className="btn btn-primary pgb_btn ms-1 me-1"
                >
                  TRY FREE CLASSES
                </Link>
                <Link
                  href={"#"}
                  className="btn btn-outline-primary pgb_btn_outline me-1"
                >
                  Become A Teacher
                </Link>
              </Row>
            </div>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={12}>
            <div className="occ_font mt-4">
              <h1 className="text-center">Choose A Coding Course</h1>
              <br />
              <div className="grade_btn_div text-center">
                <button
                  className={
                    gradeWiseCourses && gradeWiseCourses.id === 1
                      ? "btn btn-outline-primary pgb_btn_outline grade_btn_padding active"
                      : "btn btn-outline-primary pgb_btn_outline grade_btn_padding"
                  }
                  onClick={() => {
                    setGradeWiseCourses(courses[0]);
                  }}
                >
                  Class 6-8
                </button>
                <button
                  className={
                    gradeWiseCourses && gradeWiseCourses.id === 2
                      ? "btn btn-outline-primary pgb_btn_outline grade_btn_padding active"
                      : "btn btn-outline-primary pgb_btn_outline grade_btn_padding"
                  }
                  onClick={() => {
                    setGradeWiseCourses(courses[1]);
                  }}
                >
                  Class 9-10
                </button>
                <button
                  className={
                    gradeWiseCourses && gradeWiseCourses.id === 3
                      ? "btn btn-outline-primary pgb_btn_outline grade_btn_padding active"
                      : "btn btn-outline-primary pgb_btn_outline grade_btn_padding"
                  }
                  onClick={() => {
                    setGradeWiseCourses(courses[2]);
                  }}
                >
                  Class 11-12
                </button>
                {/* <button
                  className={
                    gradeWiseCourses && gradeWiseCourses.id === 4
                      ? "btn btn-outline-primary pgb_btn_outline grade_btn_padding active"
                      : "btn btn-outline-primary pgb_btn_outline grade_btn_padding"
                  }
                  onClick={() => {
                    setGradeWiseCourses(courses[3]);
                  }}
                >
                  Grade 10-12
                </button> */}
              </div>
              <br />
              <Row className="justify-content-center">
                {gradeWiseCourses &&
                  gradeWiseCourses.courses.map((course, index) => {
                    return (
                      <Col key={index} sm={6} md={4} className="text-center">
                        <div className="card coding_course_card">
                          <div className="card-body">
                            <h5 className="card-title">{course.title}</h5>
                            <p className="card-text">
                              <b>Class Number: {course.class_numbers}</b>
                              <br /> {course.description}{" "}
                            </p>
                            <p className="card-text">
                              
                              {course.Activities}{" "}Activities{" "}|{" "}{course.quizzes}{" "}Quizzes
                              <br />
                              Durations:{" "}{course.durations}{" "}Months
                            </p>
                            {course.topics.map((topic, index) => {
                              return (
                                <li
                                  key={index}
                                  className="text-start"
                                  style={{ listStyleType: "none" }}
                                >
                                  <BiCheck
                                    style={{ color: "blue", fontSize: "18px" }}
                                  />
                                  {topic.name}
                                </li>
                              );
                            })}
                            <hr
                              style={{
                                margin: "5px 0",
                                border: "0.5px solid #ddd",
                              }}
                            />
                            {course.achievements &&
                              course.achievements.map((achievement, index) => {
                                return (
                                  <li
                                    key={index}
                                    className="text-start"
                                    style={{ listStyleType: "none" }}
                                  >
                                    <span className="rounded-circle d-inline-flex align-items-center justify-content-center me-2 p-1 custom-badge">
                                      <BiTrophy
                                        style={{
                                          fontSize: "14px",
                                          color: "#fff",
                                          lineHeight: 0,
                                        }}
                                      />
                                    </span>
                                    {achievement.name}
                                  </li>
                                );
                              })}

                            {/* Add a button for downloading the PDF */}
                            <a href={course.pdfLink} download>
                              <button className="btn btn-link mt-2 text-decoration-none">
                                Download the Details
                                <BiDownload
                                  style={{ color: "blue", fontSize: "15px", marginLeft:"5" }}
                                />
                              </button>
                            </a>
                          </div>
                        </div>
                      </Col>
                    );
                  })}

                <Link
                  href={"/free-class-request"}
                  className="btn btn-primary pgb_btn mt-4"
                >
                  TRY FREE CLASSES
                </Link>
                <h1 className="text-center mt-1">
                  Learn, compete, and win certificates in coding competitions
                </h1>
              </Row>
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={5} className="text-center">
            <Image
              className="img-fluid"
              src={kid_3}
              alt="kids with computers"
            />
          </Col>
          <Col md={7}>
            <div className="occ_font ms-2">
              <h1>Enhancing Problem-Solving Skills</h1>
              <br />
              <p>
                Coding encourages kids to think critically and develop
                problem-solving abilities. When they encounter a bug or a
                logical error, they learn to analyze the issue, identify
                patterns, and find creative solutions. These problem-solving
                skills are applicable not only in programming but also in
                various real-life situations.
              </p>
              <br />
              <Row className="two_btn justify-content-xs-center justify-content-lg-start">
                <Link
                  href={"/free-class-request"}
                  className="btn btn-primary pgb_btn ms-1 me-1"
                >
                  TRY FREE CLASSES
                </Link>
                <Link
                  href={"#"}
                  className="btn btn-outline-primary pgb_btn_outline me-1"
                >
                  Become A Teacher
                </Link>
              </Row>
            </div>
          </Col>
        </Row>

        <Row>
          <Col xs={{ span: 12, order: 1 }} md={{ span: 7, order: 1 }}>
            <div className="occ_font mt-2">
              <h1>Fostering Creativity</h1>
              <br />
              <p>
                Coding is an art form that allows kids to express their
                creativity and imagination. Through coding, children can bring
                their ideas to life by creating games, animations, websites, and
                interactive stories. It enables them to think outside the box
                and find innovative solutions to problems.
              </p>
              <br />
              <Row className="two_btn justify-content-xs-center justify-content-lg-start">
                <Link
                  href={"/free-class-request"}
                  className="btn btn-primary pgb_btn ms-1 me-1"
                >
                  TRY FREE CLASSES
                </Link>
                <Link
                  href={"#"}
                  className="btn btn-outline-primary pgb_btn_outline me-1"
                >
                  Become A Teacher
                </Link>
              </Row>
            </div>
          </Col>
          <Col
            xs={{ span: 12 }}
            md={{ span: 5, order: 2 }}
            className="text-center mt-2"
          >
            <Image
              className="img-fluid"
              src={kid_4}
              alt="kids with computers"
            />
          </Col>
        </Row>

        <Row>
          <Col md={5} className="text-center mt-2">
            <Image
              className="img-fluid"
              src={kid_5}
              alt="kids with computers"
            />
          </Col>
          <Col md={7}>
            <div className="occ_font ms-2">
              <h1>Preparing for the Future</h1>
              <br />
              <p>
                In a technology-driven world, coding skills are becoming
                increasingly in demand across various industries. By introducing
                kids to coding at an early age, we equip them with a valuable
                skill set that can open doors to future career opportunities.
                Even if they don&apos;t pursue a career in programming, the
                problem-solving and logical thinking skills gained through
                coding are transferable to any profession.
              </p>
              <br />
              <Row className="two_btn justify-content-xs-center justify-content-lg-start">
                <Link
                  href={"/free-class-request"}
                  className="btn btn-primary pgb_btn ms-1 me-1"
                >
                  TRY FREE CLASSES
                </Link>
                <Link
                  href={"#"}
                  className="btn btn-outline-primary pgb_btn_outline me-1"
                >
                  Become A Teacher
                </Link>
              </Row>
            </div>
          </Col>
        </Row>

        <Row className="justify-content-center mt-4">
          <Col sm={6} md={4} className="text-center">
            <div className="card coding_course_card">
              <div className="card-body">
                <h5 className="card-title">
                  Building Persistence and Resilience
                </h5>
                <p className="card-text">
                  Coding is a process that often involves trial and error. Kids
                  learn that making mistakes is a natural part of the learning
                  process, and they develop the resilience to persevere and
                  overcome obstacles. This resilience translates into other
                  areas of life, where they learn not to give up easily and to
                  embrace challenges as opportunities for growth.
                </p>
              </div>
            </div>
          </Col>
          <Col sm={6} md={4} className="text-center">
            <div className="card coding_course_card">
              <div className="card-body">
                <h5 className="card-title">Collaboration and Teamwork</h5>
                <p className="card-text">
                  Coding often involves working on projects with others, which
                  fosters collaboration and teamwork. Through coding workshops
                  or coding clubs, kids learn to communicate, share ideas, and
                  work together to achieve a common goal. These collaborative
                  skills are vital in the modern workplace and help children
                  develop strong interpersonal skills.
                </p>
              </div>
            </div>
          </Col>
          <Col sm={6} md={4} className="text-center">
            <div className="card coding_course_card">
              <div className="card-body">
                <h5 className="card-title">Empowering Digital Citizenship</h5>
                <p className="card-text">
                  As children navigate the digital world, understanding how
                  technology works and having knowledge of coding gives them a
                  sense of empowerment and digital citizenship. They become
                  aware of the possibilities and limitations of technology,
                  understand the importance of responsible online behavior, and
                  develop critical thinking skills to navigate the digital
                  landscape safely.
                </p>
              </div>
            </div>
          </Col>
        </Row>
      </Layout>
    </>
  );
}
