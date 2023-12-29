// Ajout d'une class commune aux paragraphes de la section Story
document.addEventListener('DOMContentLoaded', function() {
    const paragraphe1 = document.querySelector('.story__article p');
    const paragraphe2 = document.querySelector('#place div p');

    paragraphe1.classList.add('fixe');
    paragraphe2.classList.add('fixe');
});

//////////////////////////////////////////////////////

// Ajout d'une class commune aux fleurs
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.story h2, .story__article, #studio h2, .site-footer ul, .site-footer, .oscars');

    elements.forEach(element => {
        element.classList.add('fleurs');
    });
});

///////////////////////////////////////////////////

// Définition de l'accélération au scroll pour la rotation des fleurs
document.addEventListener('DOMContentLoaded', function() {
    // Création de variables pour le délai de fin de scroll, pour la class à ajouter et pour les éléments auxquels ajouter cette nouvelle class
    let delaiFinScroll;
    const classScroll = 'scroll';
    const fleursElements = document.querySelectorAll('.fleurs');
  
    // Création de la fonction d'ajout de la class
    function ajoutClassScroll() {
      fleursElements.forEach(element => {
        element.classList.add(classScroll);
      });
    }
  
    // Création de la fonction de retrait de la class
    function retraitClassScroll() {
      fleursElements.forEach(element => {
        element.classList.remove(classScroll);
      });
    }
    
    // Création de l'évènement au scroll d'ajout et de retrait de la class
    document.addEventListener('scroll', function() {
        // Réinitialisation du délai de fin de scroll à chaque nouveau scroll
        clearTimeout(delaiFinScroll);
        
        if (window.scrollY !== 0) {
            ajoutClassScroll();
            delaiFinScroll = setTimeout(retraitClassScroll, 100);
        } else {
            retraitClassScroll();
        }
    });
});

///////////////////////////////////////////////////////////

// Ajout d'une class commune .titres aux titres + textes des titres isolés dans des span
document.addEventListener('DOMContentLoaded', function() {
    const titres = document.querySelectorAll('h2, h3');

    titres.forEach(titre => {
        titre.classList.add('titres');
        ajoutMotsTitre(titre);
    });

    function ajoutMotsTitre(element) {
        const text = element.innerText;
        const words = text.split(' ');
        element.innerHTML = words.map((word, index) => `<span class="word" style="animation-delay: ${index * 0.5}s">${word}</span>&nbsp;`).join(' ');
    }
});

// Création d'un Observer pour savoir quand l'utilisateur se trouve dans les sections avec nos .titres
const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        // Si l'élement est au moins visible à 50%
        if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
            const spans = entry.target.querySelectorAll('span');
            spans.forEach(span => {
                span.classList.add('texte-titre');
            });

            // Quand la class a été ajoutée, on arrête l'observation de l'élément
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5
});

// Création d'une fonction pour observer tous les titres au chargement de la page
function observerLesTitres() {
    const titres = document.querySelectorAll('.titres');
    titres.forEach(titre => {
        observer.observe(titre);
    });
}

// Appel de la fonction d'observation des titres au chargement de la page
window.addEventListener('load', observerLesTitres);

////////////////////////////////////////////////////////////////

// Création d'un événement en cas d'erreur de chargement de la vidéo
document.addEventListener("DOMContentLoaded", function() {
    const video = document.querySelector("video");

    // L'image de background étant présente mais masquée par la vidéo, en cas d'erreur de chargement, désactivation de la vidéo
    video.onerror = function() {
        video.style.display = "none";
    };
});

////////////////////////////////

// Parallaxe du Titre du site dans la banner
document.addEventListener("DOMContentLoaded", function() {
    const boxTitre = document.querySelector('.box-titre');
    //Création d'un décalage de 50px pour empêcher le scroll de s'activer de suite
    const décalageTop = boxTitre.offsetTop - 50; 

    //Initialisation de la variable sur false
    let scrollEnCours = false;

    // Event Listener scroll qui passe la variable scrollEnCours en true
    window.addEventListener('scroll', () => {
        scrollEnCours = true;
    });

    // Transition appliquée au scrollEnCours
    boxTitre.style.transition = 'transform 0.4s linear';

    window.addEventListener('scroll', () => {
        if (scrollEnCours) {
            const défilementPixelsY = window.scrollY;
            const positionInitAvecDécalage = défilementPixelsY - décalageTop;

            // Bloquage du déplacement vers le haut pour ne pas dépasser l'emplacement initial du titre au chargement de la page
            if (positionInitAvecDécalage < 0) {
                boxTitre.style.transform = `translateY(0)`;
            } else {
                boxTitre.style.transform = `translateY(${positionInitAvecDécalage}px)`;
            }

            scrollEnCours = false;
        }
    });
});

//////////////////////////////////////////

//Carrousel Swiper JS
const swiper = new Swiper(".mySwiper",{
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: false,
    loop: true,
    slidesPerView: 2,
    coverflowEffect: {
        slideShadows: false,
    },
});

//////////////////////////////////////////////////////////////////////

// Parallaxe pour nuages de la section Place

document.addEventListener("DOMContentLoaded", function() {
    // Ciblage des éléments et paramètres initiaux
    const sectionNuages = document.querySelector('.nuages');
    const articlePlace = document.querySelector('#place');
    let positionInitiale = 0;
    let observerActivated = false;

    // Création d'une limite de déplacement à gauche de 300 pixels
    const déplacementMaxGauche = -300;

    // Création d'un Observer pour savoir quand l'utilisateur se trouve dans la section #place
    function handleIntersection(entries, observer) {
        entries.forEach((entry) => {
            // Ajout des conditions : intersection, ratio 80% de l'article #place visible et Observer sur False
            if (entry.isIntersecting && entry.intersectionRatio >= 0.8 && !observerActivated) {
                observerActivated = true;
                // Mise à jour de la valeur de la position initiale
                positionInitiale = window.scrollY;

                // Création d'une fonction pour gérer le déplacement au scroll
                function handleScroll() {
                    const défilementPixelsY = window.scrollY;

                    // Calcul de la différence de pixels par rapport à la position initiale
                    const déplacement = (positionInitiale - défilementPixelsY);

                    // Création d'une borne à gauche à 300 pixels
                    const déplacementLimiteGauche = Math.max(déplacementMaxGauche, déplacement);

                    // Création d'une borne à droite à la position initiale de la div au chargement de la page 
                    const positionInitialeChargementPage = window.scrollY - positionInitiale;
                    const déplacementLimiteDroite = Math.min(0, positionInitialeChargementPage);

                    // Application du déplacement à la div .nuages et ajout d'un effet de transition
                    sectionNuages.style.transform = `translateX(${déplacementLimiteGauche + déplacementLimiteDroite}px)`;
                    sectionNuages.style.transition = 'transform 0.3s linear';
                }

                // Appel de la fonction précédemment définie avec le Event Listener scroll
                window.addEventListener('scroll', handleScroll);
            }
        });
    }

    // Création d'un observer pour l'article #place avec un ratio de 80%
    const options = {
        threshold: 0.8
    };

    const intersectionObserver = new IntersectionObserver(handleIntersection, options);

    // Début de l'observer pour l'article #place
    intersectionObserver.observe(articlePlace);
});

////////////////////////////////////////////////////////

// Gestion du menu burger et animation pour passage au design en croix

document.addEventListener("DOMContentLoaded", function () {
    const burgerBtn = document.getElementById("burgerBtn");
    const sidenav = document.getElementById("mySidenav");
    const lignes = document.querySelectorAll(".line");
    const sidenavLinks = sidenav.querySelectorAll("a");

    burgerBtn.addEventListener("click", function () {
        if (sidenav.classList.value.includes("active")) {
            sidenav.classList.remove("active");
            lignes[0].classList.remove("croixgauche");
            lignes[1].classList.remove("croixdroite");
            lignes[2].style.display = 'block';
        }
        else {
        sidenav.classList.add("active");
        lignes[0].classList.add("croixgauche");
        lignes[1].classList.add("croixdroite");
        lignes[2].style.display = 'none';
        }
    });

    // Fermeture du menu au clic sur un des liens du menu
    sidenavLinks.forEach(function (link) {
        link.addEventListener("click", function () {
            sidenav.classList.remove("active");
            lignes[0].classList.remove("croixgauche");
            lignes[1].classList.remove("croixdroite");
            lignes[2].style.display = 'block';
        });
    });
});

/////////////////////////////////////////////////

// Ajout de l'animation des titres déjà existante aux a href du menu burger grâce à l'ajout de la class .titres

document.addEventListener("DOMContentLoaded", function () {
    const titresMenuBurger = document.querySelectorAll('.sidenav a');

    titresMenuBurger.forEach(titre => {
        titre.classList.add('titres');
        splitMotsTitre(titre);
    });

    function splitMotsTitre(element) {
        const text = element.innerText;
        const words = text.split(' ');
        element.innerHTML = words.map((word, index) => `<span class="word" style="animation-delay: ${index * 0.5}s">${word}</span>&nbsp;`).join(' ');
    }
});