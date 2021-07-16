
// -----------------navigation menu------------
(()=>{
    const hamburgerBtn = document.querySelector(".hamburgerBtn");
    navMenu = document.querySelector(".nav-menu"),
    closeNavBtn = navMenu.querySelector(".close-nav-menu");

    hamburgerBtn.addEventListener("click",showNavMenu);
    closeNavBtn.addEventListener("click",hideNavMenu);

    function showNavMenu(){
        navMenu.classList.add("open");
        bodyScrollingToggle();
    }

    function hideNavMenu(){
        navMenu.classList.remove("open");
        fadeOutEffect();
        bodyScrollingToggle();
    }

    function fadeOutEffect(){
        document.querySelector(".fade-out-effect").classList.add("active");
        setTimeout(()=>{
            document.querySelector(".fade-out-effect").classList.remove("active");
        },300)
    }

    // attach an event handler to document
    document.addEventListener("click",(event)=>{
        if(event.target.classList.contains('link-item')){
        // make sure event.target.hash has a value before overriding default
            if(event.target.hash!==""){
                //prevent default anchor click behaviour
                event.preventDefault();
                const hash = event.target.hash;

                // deactivate existing active section

                document.querySelector(".section.active").classList.add("hide");
                document.querySelector(".section.active").classList.remove("active");

                document.querySelector(hash).classList.add("active");
                document.querySelector(hash).classList.remove("hide");

                navMenu.querySelector(".active").classList.add("outer-shadow","hover-in-shadow");
                navMenu.querySelector(".active").classList.remove("active","inner-shadow");

                if(navMenu.classList.contains("open")){
                event.target.classList.add("active","inner-shadow");
                event.target.classList.remove("outer-shadow","hover-in-shadow");
                hideNavMenu();
                }

                else{
                    let navItems = navMenu.querySelectorAll(".link-item");
                    navItems.forEach((item) =>{
                        if(hash==item.hash){
                            item.classList.add("active","inner-shadow");
                            item.classList.remove("outer-shadow","hover-in-shadow");
                        }
                    })
                    fadeOutEffect();
                }
                window.location.hash=hash;

            }
        }

    })

})();



// about section 

(() =>{
    const aboutSection = document.querySelector(".about-section"),
    tabsContainer = document.querySelector(".about-tabs");

    tabsContainer.addEventListener("click",(event) => {
        if(event.target.classList.contains("tab-item") && !event.target.classList.contains("active")){
            const target = event.target.getAttribute("data-target");

            tabsContainer.querySelector(".active").classList.remove("outer-shadow","active");

            event.target.classList.add("active","outer-shadow");

            aboutSection.querySelector(".tab-content.active").classList.remove("active");

            aboutSection.querySelector(target).classList.add("active");
        }

    })
})();



// ----------hide all sections except active----------

(()=>{
    const sections = document.querySelectorAll(".section");
    sections.forEach((section)=>{
        if(!section.classList.contains("active")){
            section.classList.add("hide");}
        
        })
})();
