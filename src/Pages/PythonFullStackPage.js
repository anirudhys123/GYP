import React from "react";
import Header from "../components/Common/Header/Header";
import Footer from "../components/Common/Footer/Footer";
import './AiPage.css';

// Import images for Python Full Stack projects
import image1 from '../assets/images/frontenddevelopment.jpg';
import image2 from '../assets/images/frontenddevelopment.jpg';
import image3 from '../assets/images/frontenddevelopment.jpg';
import image4 from '../assets/images/frontenddevelopment.jpg';
import image5 from '../assets/images/frontenddevelopment.jpg';
import image6 from '../assets/images/frontenddevelopment.jpg';
import image7 from '../assets/images/frontenddevelopment.jpg';
import image8 from '../assets/images/frontenddevelopment.jpg';
import image9 from '../assets/images/frontenddevelopment.jpg';
import image10 from '../assets/images/frontenddevelopment.jpg';
import image11 from '../assets/images/frontenddevelopment.jpg';
import image12 from '../assets/images/frontenddevelopment.jpg';

// Reuse PDF paths from AiPage
import pdf1 from '../assets/AiPdfs/demo.pdf';
import pdf2 from '../assets/AiPdfs/demo.pdf';
import pdf3 from '../assets/AiPdfs/demo.pdf';
import pdf4 from '../assets/AiPdfs/demo.pdf';
import pdf5 from '../assets/AiPdfs/demo.pdf';
import pdf6 from '../assets/AiPdfs/demo.pdf';
import pdf7 from '../assets/AiPdfs/demo.pdf';
import pdf8 from '../assets/AiPdfs/demo.pdf';
import pdf9 from '../assets/AiPdfs/demo.pdf';
import pdf10 from '../assets/AiPdfs/demo.pdf';
import pdf11 from '../assets/AiPdfs/demo.pdf';
import pdf12 from '../assets/AiPdfs/demo.pdf';

const projects = [
  { id: 1, title: "Python Full Stack Project 1", description: "Description for Python Full Stack Project 1", image: image1, pdf: pdf1 },
  { id: 2, title: "Python Full Stack Project 2", description: "Description for Python Full Stack Project 2", image: image2, pdf: pdf2 },
  { id: 3, title: "Python Full Stack Project 3", description: "Description for Python Full Stack Project 3", image: image3, pdf: pdf3 },
  { id: 4, title: "Python Full Stack Project 4", description: "Description for Python Full Stack Project 4", image: image4, pdf: pdf4 },
  { id: 5, title: "Python Full Stack Project 5", description: "Description for Python Full Stack Project 5", image: image5, pdf: pdf5 },
  { id: 6, title: "Python Full Stack Project 6", description: "Description for Python Full Stack Project 6", image: image6, pdf: pdf6 },
  { id: 7, title: "Python Full Stack Project 7", description: "Description for Python Full Stack Project 7", image: image7, pdf: pdf7 },
  { id: 8, title: "Python Full Stack Project 8", description: "Description for Python Full Stack Project 8", image: image8, pdf: pdf8 },
  { id: 9, title: "Python Full Stack Project 9", description: "Description for Python Full Stack Project 9", image: image9, pdf: pdf9 },
  { id: 10, title: "Python Full Stack Project 10", description: "Description for Python Full Stack Project 10", image: image10, pdf: pdf10 },
  { id: 11, title: "Python Full Stack Project 11", description: "Description for Python Full Stack Project 11", image: image11, pdf: pdf11 },
  { id: 12, title: "Python Full Stack Project 12", description: "Description for Python Full Stack Project 12", image: image12, pdf: pdf12 },
];

const PythonFullStackPage = () => {
  return (
    <>
      <Header />
      <div className="container python-container" style={{ marginBottom: '-150px', marginTop: '140px', textAlign: 'center' }}>
        <h2 className="python-title" style={{ fontWeight: 'bold', marginBottom: '20px', marginTop: '20px',fontSize:'25px' }}>Python Full Stack Development Projects</h2>
        <p className="python-description" style={{ marginBottom: '25px',fontSize:'25px' }}>Explore real-time projects focused on Python Full Stack Development.</p>
        <div className="row">
          {projects.map((project) => (
            <div key={project.id} className="col-lg-3 col-md-4 col-sm-6 col-12 mb-4">
              <a href={project.pdf} download={project.title} className="text-decoration-none">
                <div className="card project-card">
                  <img src={project.image} className="card-img-top" alt={project.title} />
                  <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text">{project.description}</p>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default PythonFullStackPage;
