import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";


class ScrollTriggerAppear {
    constructor(){
        gsap.to(".headline", {
            opacity: 0,
            y: 150
        })

        ScrollTrigger.batch(".headline", {
            onEnter: batch => gsap.to(batch, {opacity: 1, duration: .7, y: 0}),
            onLeave: batch => gsap.set(batch, {opacity: 0, duration: .7, y: 150, overwrite: true}),
            onEnterBack: batch => gsap.to(batch, {opacity: 1, duration: .7, y: 0, overwrite: true}),
            onLeaveBack: batch => gsap.set(batch, {opacity: 0, duration: .7, y: 150, overwrite: true}),
            start: "center bottom",
        })

        gsap.to("#frontpageFlexbox", {
            opacity: 0,
            y: 150
        })
        ScrollTrigger.batch("#frontpageFlexbox", {
            onEnter: batch => gsap.to(batch, {opacity: 1, duration: .7, y: 0}),
            onLeave: batch => gsap.set(batch, {opacity: 0, duration: .7, y: 150, overwrite: true}),
            onEnterBack: batch => gsap.to(batch, {opacity: 1, duration: .7, y: 0, overwrite: true}),
            onLeaveBack: batch => gsap.set(batch, {opacity: 0, duration: .7, y: 150, overwrite: true}),
            start: "center bottom",
        })

        gsap.to(".hiddenTextBox", {
            opacity: 0,
            y: 150
        })
        ScrollTrigger.batch(".hiddenTextBox", {
            onEnter: batch => gsap.to(batch, {opacity: 1, duration: .7, y: 0}),
            onLeave: batch => gsap.set(batch, {opacity: 0, duration: .7, y: 150, overwrite: true}),
            onEnterBack: batch => gsap.to(batch, {opacity: 1, duration: .7, y: 0, overwrite: true}),
            onLeaveBack: batch => gsap.set(batch, {opacity: 0, duration: .7, y: 150, overwrite: true}),
            start: "center bottom",
        })

        gsap.to("#webdevFlexbox", {
            opacity: 0,
            y: 150
        })
        ScrollTrigger.batch("#webdevFlexbox", {
            onEnter: batch => gsap.to(batch, {opacity: 1, duration: .7, y: 0}),
            onLeave: batch => gsap.set(batch, {opacity: 0, duration: .7, y: 150, overwrite: true}),
            onEnterBack: batch => gsap.to(batch, {opacity: 1, duration: .7, y: 0, overwrite: true}),
            onLeaveBack: batch => gsap.set(batch, {opacity: 0, duration: .7, y: 150, overwrite: true}),
            start: "center bottom",
        })

        gsap.to(".journoFlex", {
            opacity: 0,
            y: 150
        })
        ScrollTrigger.batch(".journoFlex", {
            onEnter: batch => gsap.to(batch, {opacity: 1, duration: .7, y: 0}),
            onLeave: batch => gsap.set(batch, {opacity: 0, duration: .7, y: 150, overwrite: true}),
            onEnterBack: batch => gsap.to(batch, {opacity: 1, duration: .7, y: 0, overwrite: true}),
            onLeaveBack: batch => gsap.set(batch, {opacity: 0, duration: .7, y: 150, overwrite: true}),
            start: "center bottom",
        })

        gsap.to(".contactForm", {
            opacity: 0,
            y: 150
        })
        ScrollTrigger.batch(".contactForm", {
            onEnter: batch => gsap.to(batch, {opacity: 1, duration: .7, y: 0}),
            onLeave: batch => gsap.set(batch, {opacity: 0, duration: .7, y: 150, overwrite: true}),
            onEnterBack: batch => gsap.to(batch, {opacity: 1, duration: .7, y: 0, overwrite: true}),
            onLeaveBack: batch => gsap.set(batch, {opacity: 0, duration: .7, y: 150, overwrite: true}),
            start: "center bottom",
        })

        
        
        
            
          
    }
}
export default ScrollTriggerAppear