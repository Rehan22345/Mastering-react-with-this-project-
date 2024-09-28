// App.js
import './App.css';
import logo from "./assets/logo.png";
import { FaGithub, FaFacebook, FaLinkedin, FaTwitter, FaFigma, FaJava,  } from 'react-icons/fa';
import { FaReact, FaJsSquare, FaNodeJs, FaDatabase, FaHtml5 ,FaPhoneAlt, FaEnvelope, FaMapMarkerAlt} from 'react-icons/fa'; 
import { SiTailwindcss } from 'react-icons/si'; 
import gsap from 'gsap'; 
import { ScrollTrigger } from 'gsap/ScrollTrigger'; 
import { useState } from 'react';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useGSAP(() => {
    gsap.from("nav ul li,h2,h3,h4,p,.buttons,img,button,.service-icon,.skill-icon", {
      opacity: 0,
      y: -40,
      duration: 0.3,
      stagger: 0.2,
    });
  });

const [first, setfirst] = useState([
{
  name : "Frontend Development",
  description :  "I can build you awesome Websites & Webapps.",
icon : <FaReact/>,
},
{
  name : "App Development",
  description :  "I can build you awesome Apps.I used Java , React native , node , express and Mongo db to build beautiful ui apps",
  icon : <FaJava/>

},
{
  name : "Ui/Ux Designing",
  description :  "I can build the structure of your apps and websites.",
  icon : <FaFigma/>,
},
{
  name : "Backend Development",
  description :  "I can build powerful Api's and backend for your monile apps and Webapps.",
  icon: <FaNodeJs />,

},
])
  const skills = [
    {
      name: 'React',
      icon: <FaReact />,
      description: 'A JavaScript library for building user interfaces.'
    },
    {
      name: 'JavaScript',
      icon: <FaJsSquare />,
      description: 'A versatile programming language for web development.'
    },
    {
      name: 'Node.js',
      icon: <FaNodeJs />,
      description: 'A backend langauges to build powerful rest api and backend for apps.'
    },
    {
      name: 'MongoDB',
      icon: <FaDatabase />,
      description: 'A NoSQL database for modern applications.'
    },
    {
      name: 'HTML',
      icon: <FaHtml5 />,
      description: 'The standard markup language for creating web pages.'
    },
    {
      name: 'Tailwind CSS',
      icon: <SiTailwindcss />,
      description: 'A utility-first CSS framework for rapid UI development.'
    },
  ];

  return (
    <>
      <div className="box">
        <div className="navbar">
        <nav>
          <h2>Sangit <span><img style={{ width: "20px", height: "20px" }} src={logo} alt="" /></span></h2>
          <ul>
            <li> <a href="">Home</a></li>

<li> <a href="#skills">About</a></li>



<li> <a href="#service-cards" >Services</a></li>



                 <li> <a href="">Contact</a></li>
          </ul>
        </nav>
        </div>
        <section id="contenttext">
          <main>
            <h3>Web Developer</h3>
            <h2>Hello I'm</h2>
            <h2 id='name'>Sangit Kc</h2>
            <br />
            <p>I excel at crafting elegant digital experiences and <br /> I'm proficient in various programming languages and <br /> technologies</p>
            <br />
            <div className="buttons">
              <button>Download CV</button>
              <a href="https://github.com/Rehan22345" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
              <a href="https://www.facebook.com/samrat.kc.102" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            </div>
          </main>
          <main className="images">
            <div className="border-animation">
              <img src={logo} alt="Logo" />
            </div>
          </main>
        </section>

        <div className="horizontalbar">
          <h3 id='experience'>11</h3>
          <h3 id='projects'>24</h3>
          <h3 id='languages'>7</h3>
          <h3 id='commits'>68</h3>
        </div>

        <br /> <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        <h2 id='skills'>Here are my Skills</h2>

        {/* Skill Cards Section */}
        <div className="skill-cards">
          {skills.map(skill => (
            <div className="skill-card" key={skill.name}>
              <div className="skill-icon">{skill.icon}</div>
              <h4>{skill.name}</h4>
              <p>{skill.description}</p>
            </div>
          ))}
        </div>


        <br /><br /><br /><br /><br /><br /><br /><br />


        <h2 id='contacthead'>Our Services</h2>





        <div id='service-cards' className="service-cards">
          {first.map(skill => (
            <div className="service-card" key={skill.name}>
              <div className="service-icon">{skill.icon}</div>
              <h4>{skill.name}</h4>
              <p>{skill.description}</p>
              <button onClick={()=>{
                window.location.href = "https://www.facebook.com/samrat.kc.102"
              }} className='service-button'>Hire Me for this !</button>
            </div>
          ))}
        </div>





















<h2 id='contacthead2'>Contact Me</h2>




 <form id='formcontainer' onSubmit={()=>{
  // e.preventDefault(); u can use this it's depend on u whether u will be using this or not
  const email = "rehanpoudel2@gmail.com"
  const subject = encodeURIComponent('Hiring Developers');
  const body = encodeURIComponent(`I want you to work with me for my projects. For that, I will pay a certain amount of money.`);
  const mailtoLink = `mailto:rehanpoudel2@gmail.com?subject=${subject}&body=${body}%0A%0AFrom: ${name} <${email}>`;

  // Open the mail client
  window.location.href = mailtoLink;
 }}>
<h2 className='togethertext'>Let's Work Together</h2>
<p className='paratext'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, nemo porro? Ipsa enim.</p>
<input  style={{
  marginTop : "140px",
  marginLeft : "20px",

}}    type="text" placeholder='Firstname' />
<input type="text" placeholder='lastname'  style={{
  marginLeft : "20px",
}}/> <br />
<input type="text" placeholder='Email address' style={{
  marginTop : "40px",
  marginLeft : "20px",

}}  />
<input type="text" placeholder='Phone Number' style={{
  marginLeft : "20px",
}}/>
<br />
<br />
<textarea name="" id="messagesbox" placeholder="Type your message here.."></textarea>
<button className="formbutton">Send Message</button>
</form>  

<div className="aboutinfobox">
      <div className="call">
        <h4>
          <FaPhoneAlt className='numbericon'/> Number
        </h4>
        <h4 className='number'>(+97) 9809855551</h4> <br />
        
        <h4>
          <FaEnvelope className='email'/> Email
        </h4> 
        <p>rehanpoudel2@gmail.com</p> <br />
        
        <h4>
          <FaMapMarkerAlt className='address'/> Address
        </h4> 
        <p>Dang, Pakhapani</p>
      </div>
    </div>


<footer className='footer'>

<h3>©2024 Sangit KC. All rights reserved.</h3>
</footer>

      </div>
    </>
  );
}

export default App;
