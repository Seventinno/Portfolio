/*Mostrar SideBr*/
const navMenu = document.getElementById('sidebar'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');


/*MOSTRAR*/
/*Validar si  la constante existe */
if(navToggle){
    navToggle.addEventListener("click", ()=>{
        navMenu.classList.add('show-sidebar')
    })
}

/*ESCONDER*/
/*Validar si  la constante existe */
if(navClose){
    navClose.addEventListener("click", ()=>{
        navMenu.classList.remove('show-sidebar')
    })
}

/*SKILLS TAB*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContent = document.querySelectorAll('[data-content]')

    tabs.forEach(tab => {
        tab.addEventListener("click", () => {
            const target = document.querySelector(tab.dataset.target);
    
            tabContent.forEach(tabContents => {
                tabContents.classList.remove("skills__active");
            });
    
            target.classList.add('skills__active');
    
            tabs.forEach(tab => {
                tab.classList.remove("skills__active");
            });
    
            tabs.forEach(tab => {
                const associatedTarget = document.querySelector(tab.dataset.target);
                const isTargetActive = associatedTarget.classList.contains('skills__active');
                
                // Ajusta la rotación del icono de cada pestaña
                const arrowIcon = tab.querySelector('.skills__arrow');
                arrowIcon.style.transform = isTargetActive ? 'rotate(-90deg)' : 'rotate(0deg)';
            });
        });
    });

//Mixtup Fixed Portfolio
let mixerPortfolio = mixitup('.work__container', {
    selectors: {
        target: '.work__card'
    },
    animation: {
        duration: 300
    }
});

//Link active work
const linkWork = document.querySelectorAll('.work__item');

function activeWork() {
    linkWork.forEach(l=> l.classList.remove('active-work'))
    this.classList.add('active-work')
}

linkWork.forEach(l=> l.addEventListener('click', activeWork))

/*Work Popup*/ 
document.addEventListener("click", (e) => {
    if (e.target.classList.contains("work__button")) {
        togglePortfolioPopup();
        const projectId = e.target.getAttribute("data-target"); // Obtener el valor del atributo data-target
        portfolioItemDetails(projectId);
    }
});


function togglePortfolioPopup(){
    document.querySelector(".portfolio__popup").classList.toggle("open");
}

document.querySelector(".portfolio__popup-close").addEventListener("click", togglePortfolioPopup);

function portfolioItemDetails(portfolioItem) {
    document.querySelector(".pp__thumbnail img").src = portfolioItem.querySelector(".work__img").src;
    document.querySelector(".portfolio__popup-subtitle span").textContent = portfolioItem.querySelector(".work__title").textContent;
}

//Services Modal
const modalViews = document.querySelectorAll('.services__modal'),
modelBtns = document.querySelectorAll('.services__button, .services__button-icon'),
modalCloses = document.querySelectorAll('.services__modal-close')

let modal = function(modalClick) {
    modalViews[modalClick].classList.add('active-modal')
}

modelBtns.forEach((modelBtn, i) =>{  
    modelBtn.addEventListener('click', ()=>{
        modal(i)
    })
})

modalCloses.forEach((modalClose) =>{
    modalClose.addEventListener("click", ()=>{
        modalViews.forEach((modalView) =>{
            modalView.classList.remove('active-modal')
        })
    })
})

//Input animation

const inputs = document.querySelectorAll(".input");

function focusFunc(){
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc(){
    let parent = this.parentNode;
    if(this.value == ""){
        parent.classList.remove("focus")
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
})

// Scroll Section Active Link
//Obtener todas las secciones con un id definido
const section =  document.querySelectorAll("section[id]");

//Agregar un listener para el scroll
window.addEventListener("scroll",navHighlighter);

function navHighlighter()
{
    //Obtener posicion actual del scroll
    let scrollY = window.scrollY;
    //Loopeamos a traves de las secciones, para tener la altura top y los valores de ID de cada uno
    section.forEach(current =>{
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50,
        sectionId = current.getAttribute("id");

        if(scrollY > sectionTop && scrollY < sectionTop + sectionHeight)
        {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add("active-link")
        }
        else
        {
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove("active-link")
        }
    })

}    
