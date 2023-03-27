import '../Style.css';
import SriImage from './Sri.jpg';
import {Heading} from "@chakra-ui/react"


export default function Srilekha() {
    return(
    <div class="container1">
    <img src={SriImage} alt="It's me" />
    <div class="text">
      <h2> Hello,Here's Srilekha - 654034141</h2>
      <p>Want to see my Git Hub?</p>
      <button  class="button" ><a href="https://gitlab.com/SrilekhaKodavati">Click Here!</a></button>
      <p class="p">I am currently a graduate student From University of Illinois,Urbana-Champaign,
        I have completed my Under-Graduation from GITAM university.
        I developed a 3D adventure game “Adventuredo”.
        Adventuredo is a 3D game with a large map to play around with.
         a 3D game which fascinates the players and helps them enjoy it throughout the journey. 
         To build this game we used the “Unity” platform and Visual studio code. 
        it was a fun experience,I got to know how Unity engine works and all the packages Unity is offering to the gaming community.
       </p>
        <Heading><u>Three Fun Facts About me:-</u> </Heading>
        <ul>
            I can Play Piano.
        </ul>
        <ul>
          I Have studied Kindergarden Twice.
        </ul>
        <ul>
          I am weak at Spellings.
        </ul>
        <Heading><u>Reason why you are interested in PeopleWeave:-</u> </Heading>
        <p>As a web developer, I am always looking for opportunities to enhance my skills and knowledge.
         I am particularly interested in the PeopleWeave research assistant role because it will give me the chance
          to work with a team of professionals who are dedicated to making a positive impact in society. 
          I am excited about the prospect of contributing to research projects . Additionally, I am eager to learn about new technologies and 
           techniques that are being used in research and to apply my skills to real-world projects.
            Overall, I believe that the PeopleWeave research assistant role is a great opportunity for me 
            to grow both professionally and personally.</p>
    </div>
  </div>
    );
  }