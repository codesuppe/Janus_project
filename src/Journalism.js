import gsap from "gsap";
import data from "./data.json"


class Journalism {
    constructor(){

        //Elements

        let journosection = document.createElement('section');
        journosection.id = "journosection";
        document.body.appendChild(journosection);

        //headline3
        let headline3 = document.createElement('h1');
        headline3.innerHTML = data.headlines[2];
        headline3.className = "headline headline3";
        journosection.appendChild(headline3);

        //flexbox
        let journoFlex = document.createElement('div');
        journoFlex.className = "journoFlex";
        journosection.appendChild(journoFlex);


        let microphone = document.createElement('div')
        microphone.id = "microphone";
        journoFlex.appendChild(microphone);

        let microphone_image = document.createElement('img');
        microphone_image.className = "microphone_image";
        microphone_image.src = data.journoimgs[0];
        microphone.appendChild(microphone_image);
        
        let paper = document.createElement('div');
        paper.id = "paper";
        journoFlex.appendChild(paper);

        let paper_image = document.createElement('img');
        paper_image.id = "paper_image";
        paper_image.src = data.journoimgs[1];
        paper.appendChild(paper_image);

        let radiopres = document.createElement('div')
        radiopres.className = "radiopres hidden";
        journosection.appendChild(radiopres);

        let newspres = document.createElement('div');
        newspres.className = "newspres hidden";
        journosection.appendChild(newspres);
    
        //content in radiopres and newspres

        let radiopresContent = document.createElement('div');
        radiopresContent.className = "radiopresContent";
        radiopres.appendChild(radiopresContent);

        
        let radiopresContentInner = document.createElement('div');
        radiopresContentInner.className = "radiopresContentInner";
        radiopresContentInner.innerHTML = data.radioinner[0];
        radiopresContent.appendChild(radiopresContentInner);

        let paperpresContent = document.createElement('div');
        paperpresContent.className = "paperpresContent";
        newspres.appendChild(paperpresContent);

        
        let paperpresContentInner = document.createElement('div');
        paperpresContentInner.className = "paperpresContentInner";
        paperpresContentInner.innerHTML = data.paperinner[0];
        paperpresContent.appendChild(paperpresContentInner);

        for(let i = 0; i<2; i++){

            let radiopresContentImg = document.createElement('img');
            radiopresContentImg.src = data.radioinner[i+1];
            radiopresContentImg.className = "radiopresContentImg radiopresContentImg" + i
            radiopresContent.appendChild(radiopresContentImg);

            let paperpresContentImg = document.createElement('img');
            paperpresContentImg.src = data.paperinner[i+1];
            paperpresContentImg.className = "paperpresContentImg paperpresContentImg" + i
            paperpresContent.appendChild(paperpresContentImg);

        }
        

        //closer 
        let closer = document.createElement('div');
        closer.className = "closer";
        radiopres.appendChild(closer);

        let closer1 = document.createElement('div');
        closer1.className = "closer";
        newspres.appendChild(closer1);

      

        let closerCross = document.createElement('img');
        closerCross.className = "closerCross";
        closerCross.src = data.closercross;
        closer.appendChild(closerCross);

        let closerCross1 = document.createElement('img');
        closerCross1.className = "closerCross";
        closerCross1.src = data.closercross;
        closer1.appendChild(closerCross1);


        //eventlisteners

        microphone_image.addEventListener("click", ()=> {
            radiopres.classList.remove("hidden");

            
            gsap.to(".microphone_image", {
                scale: 1.2,
                duration: 2
            })
            gsap.to("#paper_image", {
                scale: 0,
                duration: 1.5
            })
            gsap.to(".radiopres", {
                scale: 1,
                duration: 2,
            })
        })

        paper_image.addEventListener("click", ()=> {
            newspres.classList.remove("hidden");

            gsap.to("#paper_image", {
                scale: .5,
                x: 200,
                duration: 2,
                rotate: 85
            })
            gsap.to(".microphone_image", {
                scale: 0,
                duration: 1.5
            })
            gsap.to(".newspres", {
                scale: 1,
                duration: 2,
                
            })
        })

        closerCross.addEventListener("click", ()=>{


            gsap.to(".microphone_image", {
                scale: 1,
                duration: 2
            })
            gsap.to("#paper_image", {
                scale: 1,
                duration: 1.5,
                
            })
            gsap.to(".radiopres", {
                scale: 0,
                duration: .5
            })
        })

        closerCross1.addEventListener("click", ()=>{


            gsap.to("#paper_image", {
                scale: 1,
                duration: 2,
                x: 0,
                rotate: 0
            })
            gsap.to(".microphone_image", {
                scale: 1,
                duration: 1.5,
            })
            gsap.to(".newspres", {
                scale: 0,
                duration: .5
            })
        })


        //gsap microphone animation 

        let mictimeline = gsap.timeline({yoyo: true, repeat: -1, ease: "Power0.easeIn" });
        mictimeline.to(".microphone_image", {
            rotate: 6,
            duration: 2, 
            yoyo: true, 
            transformOrigin: "center top", 
            
        })
       


    }
}
export default Journalism;