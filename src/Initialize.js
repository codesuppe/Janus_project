import Frontpage from "./Frontpage"
import Webdev from "./Webdev";
import Journalism from "./Journalism";

import Contact from "./Contact"
import ScrollTriggerAppear from "./ScrolltriggerAppear";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";


export default class Initialize {

  constructor() {

    console.log("... so is the init class")
    
    let front = new Frontpage();
    let scrolltrigg = new ScrollTriggerAppear();
    
    
  } // END constructor
} // END class
