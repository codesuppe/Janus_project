import data from "./data.json"
import Frontpage from "./Frontpage";


class Contact {
    constructor(){

        let contactSection = document.createElement('section');
        contactSection.id = "contactSection";
        document.body.appendChild(contactSection);

        let headline4 = document.createElement('h1');
        headline4.className = "headline headline4";
        headline4.innerHTML = data.headlines[3];
        contactSection.appendChild(headline4);  
        
        let contactForm = document.createElement('div');
        contactForm.className = "contactForm";
        contactSection.appendChild(contactForm);

        for(let i = 0 ; i < 3 ; i++){

            let contactFormInner = document.createElement('a');
            contactFormInner.className = "contactFormInner" + i;
            contactFormInner.href = data.contactFormInnerHref[i];
            contactFormInner.target = "_blank";
            contactForm.appendChild(contactFormInner);

            let contactInnerIcons = document.createElement('img');
            contactInnerIcons.src = data.contacsIcons[i];
            contactFormInner.appendChild(contactInnerIcons);

            let contactTextnode = document.createTextNode(data.contactFormInners[i]);
            contactTextnode.className = "contactTextnode";
            contactFormInner.appendChild(contactTextnode);

        }
    }
}
export default Contact;