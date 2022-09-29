import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import data from "./data.json";

class Webdev {
    constructor(){


        // webdev section

        let webdevSection = document.createElement('section');
        webdevSection.id = "webdevSection";
        document.body.appendChild(webdevSection);

        //headline2

        let headline2 = document.createElement('h1');
        headline2.innerHTML = data.headlines[1];
        headline2.className = "headline headline2";
        webdevSection.appendChild(headline2);

        //webdev flexbox
        let webdevFlexbox = document.createElement('div');
        webdevFlexbox.id = "webdevFlexbox";
        webdevSection.appendChild(webdevFlexbox);

        //create content dive

        let webProjects = document.createElement('div');
        webProjects.className = "webProjects";
        webdevSection.appendChild(webProjects);

        

        //webdev loop for boxes, gsap and div showing
        for(let i = 0; i < 3; i++){

            //create seperate boxe 
            let webdevFlexCon = document.createElement('div');
            webdevFlexCon.className = "webdevFlexCon" + " webdevFlexCon" + i;
            webdevFlexbox.appendChild(webdevFlexCon);

             //create div-maker img
            let rocketMan = document.createElement('img');
            rocketMan.className = "rocketman rocketman" + i;
            rocketMan.src = data.bucket[i];
            webdevFlexCon.appendChild(rocketMan);

            //webdevProjects inner divs
            let webdevProjectInner = document.createElement('div');
            webdevProjectInner.className = "webdevProjectInner webdevProjectInner" + i;
            webProjects.appendChild(webdevProjectInner);

            //imgs of projects
            let webdevProjectImages = document.createElement('img');
            webdevProjectImages.src = data.projects[i];
            webdevProjectImages.className = "webdevProjectImages webdevProjectImages" + i 
            webdevProjectInner.appendChild(webdevProjectImages);


            rocketMan.addEventListener("click", event=>{
                
                console.log(event.target.className);

                let rocket_timeline = gsap.timeline({repeat: 0, repeatDelay: 1});

                    if(event.target.className = document.querySelector(".webdevProjectInner0"))
                    {
                            gsap.to(document.querySelectorAll(".webdevProjectInner1, .webdevProjectInner2"), {
                                left: -1100
                            });

                            

                        
                    }//1st if done
                    if(event.target.className = document.querySelector(".webdevProjectInner1"))
                    {
                        gsap.to(document.querySelectorAll(".webdevProjectInner0, .webdevProjectInner2"), {
                            left: -1100
                        });
                    } 
                    if(event.target.className = document.querySelector(".webdevProjectInner2"))
                    {
                        gsap.to(document.querySelectorAll(".webdevProjectInner0, .webdevProjectInner1"), {
                            left: -1100
                        });
                    }

                    rocket_timeline.to(event.target, {
                        y: 325,
                        rotate: 175,
                        duration: 1,
                        ease: "Circ.easeIn",

                        
                    });

                    rocket_timeline.to(webdevProjectInner, {
                        left: 0,
                        duration: .4     
                    })

                    rocket_timeline.to(event.target, {
                        y: 0,
                        rotate: 0,
                        duration: 2,
                        ease: "Circ.easeIn",
                    });
            })

        }//loop end
    }
}
export default Webdev