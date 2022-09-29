import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import data from "./data.json";
import Webdev from "./Webdev";
import Journalism from "./Journalism";
import Contact from "./Contact";


class Frontpage {

    constructor(){

      
      gsap.registerPlugin(ScrollTrigger);

      

      //frontpage - section - grid
      let container = document.createElement('section');
      container.id = "frontpage";
      document.body.appendChild(container);

      //headline
      let headline1 = document.createElement('h1');
      headline1.innerHTML = data.headlines[0];
      headline1.className = "headline headline1";
      container.appendChild(headline1);

      let frontpageFlexbox = document.createElement('div');
      frontpageFlexbox.id = "frontpageFlexbox";
      container.appendChild(frontpageFlexbox);
      
      let hiddenTextBox = document.createElement("div");
      hiddenTextBox.className = "hiddenTextBox";
      container.appendChild(hiddenTextBox);

      /* Buttons */
      for (let i = 0; i < 3; i++) {
     
        let frontpageButton = document.createElement("div");
        frontpageButton.className = "frontpageButton frontpageButton" + (i+1);
        frontpageFlexbox.appendChild(frontpageButton);


        let hiddenText = document.createElement("div");
        hiddenText.className = "hiddenText hiddenText"+ i;
        
        hiddenTextBox.appendChild(hiddenText);


        //hiddenText Textnodes
        let hiddenTextTextnodes = document.createTextNode(data.myArray[i].text);
        hiddenText.appendChild(hiddenTextTextnodes);

        //a-tags inside hiddenText
        let linkingText = document.createElement('a');
        linkingText.innerHTML = data.myArray[i].linkText;
        linkingText.href = data.myArray[i].link;
        
        linkingText.id = "linkingText";
        

        hiddenText.appendChild(linkingText);


        //eventlistener to make menu work
        frontpageButton.addEventListener("click", event=>{

          if(event.target == document.querySelector(".frontpageButton1")) {

          gsap.to(document.querySelector(".frontpageButton1"), {

            duration: .5, 
            scaleX: 1.2,
            scaleY: 1.2,
            zIndex: 10, 
            onComplete: () => {

              gsap.to(hiddenText, {
                duration: .4,
                opacity: 1,
                x: 0,
                  scale: 1,
                  ease: "Circ.easeOut"
              })
              gsap.to(document.querySelector(".hiddenText1"),{
                duration:.4,
                opacity: 0,
                x: -400,
                  scale: .5,
                  ease: "Circ.easeOut"

              })
              gsap.to(document.querySelector(".hiddenText2"),{
                duration:.4,
                opacity: 0,
                x: -400,
                  scale: .5,
                  ease: "Circ.easeOut"

              })
            }

          })//1ST GSAP END

          gsap.to(document.querySelector(".frontpageButton2"), {

            duration: 1, 
            scaleX: 1,
            scaleY: 1,
            zIndex: 1

          })//2ND GSAP END

          gsap.to(document.querySelector(".frontpageButton3"), {

            duration: 1, 
            scaleX: 1,
            scaleY: 1,
            zIndex: 1

          })//3RD GSAP END

          } //1st IF end
          else if(event.target == document.querySelector(".frontpageButton2")){
            gsap.to(document.querySelector(".frontpageButton2"), {

              duration: .5, 
              scaleX: 1.2,
              scaleY: 1.2,
              zIndex: 10,
              onComplete: () => {

                gsap.to(hiddenText, {
                  duration: .4,
                  opacity: 1, 
                  x: 0,
                  scale: 1,
                  ease: "Circ.easeOut"
                })

                gsap.to(document.querySelector(".hiddenText2"),{
                  duration:.4,
                  opacity: 0,
                  x: -400,
                  scale: .5,
                  ease: "Circ.easeOut"
  
                })
                gsap.to(document.querySelector(".hiddenText0"),{
                  duration:.4,
                  opacity: 0,
                  x: -400,
                  scale: .5,
                  ease: "Circ.easeOut"
  
                })
              }
  
            })//1ST GSAP END
  
            gsap.to(document.querySelector(".frontpageButton1"), {
  
              duration: .5, 
              scaleX: 1,
              scaleY: 1,
              zIndex: 1,
              
  
            })//2ND GSAP END
  
            gsap.to(document.querySelector(".frontpageButton3"), {
  
              duration: 1, 
              scaleX: 1,
              scaleY: 1,
              zIndex: 1
              
  
            })//3RD GSAP END

          }//2nd else if ended
          else if(event.target == document.querySelector(".frontpageButton3")){
            gsap.to(document.querySelector(".frontpageButton3"), {

              duration: .5, 
              scaleX: 1.2,
              scaleY: 1.2,
              zIndex: 10,
              onComplete: () => {

                gsap.to(hiddenText, {
                  duration: .4,
                  opacity: 1,
                  x: 0,
                  scale: 1,
                  ease: "Circ.easeOut"
                  
                })
                gsap.to(document.querySelector(".hiddenText1"),{
                  duration:1,
                  opacity: 0,
                  x: -400,
                  scale: .5,
                  ease: "Circ.easeOut"
                  
  
                })
                gsap.to(document.querySelector(".hiddenText0"),{
                  duration:.4,
                  opacity: 0,
                  x: -400,
                  scale: .5,
                  ease: "Circ.easeOut"
                  
  
                })
              }
  
            })//1ST GSAP END
  
            gsap.to(document.querySelector(".frontpageButton1"), {
  
              duration: 1, 
              scaleX: 1,
              scaleY: 1,
              zIndex: 1,
              x: 0,
              scale: 1,
              ease: "Circ.easeOut"
  
            })//2ND GSAP END
  
            gsap.to(document.querySelector(".frontpageButton2"), {
  
              duration: 1, 
              scaleX: 1,
              scaleY: 1,
              zIndex: 1
  
            })//3RD GSAP END


          }//3rd else if end


          }) // CLICK EVENT END

      }//looping ended

      /* IMG - frontpage */
      let frontpageImg = document.createElement('img');
      frontpageImg.id = "frontpageImg";
      frontpageImg.src = "../assets/head-bg.svg";
      container.appendChild(frontpageImg);


      /* IMG inside  */

     

    for(let i = 0; i < 3 ; i++){

      let buttonImg = data.buttonImg[i];

      //ICONS
      let buttonImage = document.createElement('img');
      buttonImage.src = buttonImg;
      document.querySelector(".frontpageButton"+(i+1)).appendChild(buttonImage);

    }

    //make logo fixed top left
    
    let web = new Webdev();
    let jour = new Journalism();
    let contactSection = new Contact();
        


    gsap.to("#frontpageImg", {
      scale: 0.2,
      x: -700,
      y: -850,

      onComplete: ()=> {
        gsap.from("#frontpageImg", {
          scrollTrigger: {
            trigger: "#webdevSection",
            start: "top center",
            end: "bottom center",
            scrub: 1,
            
          },
          scale: 0.25,
          x: -600,
          y: -750,
          

          onComplete: ()=> {
            gsap.to("#frontpageImg", {
              scrollTrigger: {
                trigger: "#journosection",
                start: "center center",
                end: "+=150%",
                scrub: 1,
                
              },
              scale: .25,
              x: -700,
              y: -750
            })
          }
        })
      }
    })
    

    
    
    
    
    
    
    
   
    }
}

export default Frontpage;