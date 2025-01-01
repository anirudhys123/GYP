// About.js
import React from 'react';
import Footer from '../components/Common/Footer/Footer';
import './About.css';


import AnirudhImage from '../assets/images/ani.jpg';
import GaneshImage from '../assets/images/ganesh.jpg';
import SriImage from '../assets/images/srh.jpg';
import AnuImage from '../assets/images/srh.jpg';
import ErikaImage from '../assets/images/srh.jpg';
import JamesImage from '../assets/images/srh.jpg';

const teamMembers = [
  {
    name: 'Y. Sai Anirudh ',
    title: 'UI Full Stack Developer (MERN Stack) ',
    imageUrl: AnirudhImage,
    href: 'https://anirudh-yellapragada.vercel.app/' // anirudh portfolio link
  },
  {
    name: 'Ganesh Kadimi',
    title: 'Founder & Back End Developer',
    imageUrl: GaneshImage,
    href: '' // Ganesh portfolio link
  },
  {
    name: 'Sri Viswanath',
    title: 'Chief Technology Officer',
    imageUrl: SriImage,
    href: '' // Sri's portfolio link
  },
  {
    name: 'Anu Bharadwaj',
    title: 'Head of Enterprise & Cloud Platform',
    imageUrl: AnuImage,
    href: '' // Anu's portfolio link
  },
  {
    name: 'Erika Fisher',
    title: 'Chief Administrative Officer & General Counsel',
    imageUrl: ErikaImage,
    href: '' // Erika's portfolio link
  },
  {
    name: 'James Beer',
    title: 'Chief Financial Officer',
    imageUrl: JamesImage,
    href: '' // James's portfolio link
  },
];

const About = () => {
  return (
    <>
      <div className="leadership-section" style={{ marginBottom: '-100px' }}>
        <h1 style={{ marginTop: '100px', marginBottom: '30px' }}>Our Team Members</h1>
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            member.href ? (
              <a 
                key={index} 
                href={member.href} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="team-member-link"
              >
                <div className="team-member">
                  <img src={member.imageUrl} alt={member.name} className="member-photo" />
                  <h3 className="member-name">{member.name}</h3>
                  <p className="member-title">{member.title}</p>
                </div>
              </a>
            ) : (
              <div key={index} className="team-member">
                <img src={member.imageUrl} alt={member.name} className="member-photo" />
                <h3 className="member-name">{member.name}</h3>
                <p className="member-title">{member.title}</p>
              </div>
            )
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
