import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import aiImage from "../assets/images/aiproject.jpg";
import frontend from "../assets/images/frontenddevelopment.jpg";
import backend from "../assets/images/resizebackend.jpg";
import machinelearning from "../assets/images/194machinelearning.jpg";
import Footer from "../components/Common/Footer/Footer";
import "./Home.css";
import Header from "../components/Common/Header/Header";

const Home = () => {
  const [showTagline, setShowTagline] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth >= 325 && window.innerWidth <= 425);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <Header />
      <div className="mainbody">
        <div
          style={{
            textAlign: "center",
            marginBottom: "35px",
            marginTop: "35px",
          }}
        >
          <TypeAnimation
            sequence={[
              isMobile ? "GYP" : "GET YOUR PROJECT ...",
              () => setShowTagline(true),
            ]}
            wrapper="h1"
            cursor={false}
            repeat={0}
            style={{
              fontWeight: "bold",
              fontSize: "2rem",
            }}
          />
          {showTagline && (
            <TypeAnimation
              sequence={["Learn . Grow . Excel ."]}
              wrapper="p"
              cursor={false}
              repeat={0}
              style={{
                fontSize: "1.5rem",
                marginTop: "10px",
                color: "#555",
              }}
            />
          )}
        </div>
        <p className="description">
          At Get Your Project, we understand the importance of practical
          experience in today’s fast-paced and competitive world. That’s why we
          offer specialized project services designed to help you stand out and
          accelerate both your academic and professional journey. Whether you're
          a student looking to bridge the gap between theory and practice, a
          professional aiming to gain new skills, or someone wanting to take
          your career to the next level, our tailored project solutions are here
          to help you achieve your goals with confidence and expertise.
        </p>
        <div className="container">
          <div className="p-3">
            <div className="type-animation-container"></div>
          </div>
        </div>
      </div>
      <div className="container" style={{ marginBottom: "-100px" }}>
        <div className="row g-4">
          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="card clickable-card">
              <Link to="/aipage" className="text-decoration-none text-dark">
                <img src={aiImage} className="card-img-top" alt="AI Project" />
                <div className="card-body">
                  <h5 className="card-title">Artificial Intelligence (AI)</h5>
                  <p className="card-des">Real-Time Projects on AI</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="card clickable-card">
              <Link
                to="/frontendpage"
                className="text-decoration-none text-dark"
              >
                <img
                  src={frontend}
                  className="card-img-top"
                  alt="Frontend Project"
                />
                <div className="card-body">
                  <h5 className="card-title">UI Front End</h5>
                  <p className="card-des">Real Time Projects on Front end.</p>
                </div>
              </Link>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="card clickable-card">
              <Link
                to="/backendpage"
                className="text-decoration-none text-dark"
              >
                <img
                  src={backend}
                  className="card-img-top"
                  alt="Backend Project"
                />
                <div className="card-body">
                  <h5 className="card-title">Machine Learning</h5>
                  <p className="card-des">
                    Real Time Projects on Machine Learning.
                  </p>
                </div>
              </Link>
            </div>
          </div>

          <div className="col-lg-3 col-md-4 col-sm-6 col-12">
            <div className="card clickable-card">
              <Link
                to="/pythonfullstackpage"
                className="text-decoration-none text-dark"
              >
                <img
                  src={machinelearning}
                  className="card-img-top"
                  alt="Python Full Stack Project"
                />
                <div className="card-body">
                  <h5 className="card-title">Python Full Stack</h5>
                  <p className="card-des">
                    Real time projects on Python Full stack.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
