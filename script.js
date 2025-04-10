// Script pour ajouter de l'interactivité au site

// Fonction pour animer le défilement doux lors des clics sur les liens internes
document.addEventListener('DOMContentLoaded', function() {
    // Sélectionne tous les liens qui commencent par # (liens internes)
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Défilement doux vers l'élément cible
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Ajoute une classe active au scroll pour les animations
    window.addEventListener('scroll', function() {
        const revealElements = document.querySelectorAll('.card, .section-title, .image-container, .code-feature');
        
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight - 100) {
                element.classList.add('show');
            }
        });
    });

    // Active le premier scroll pour afficher les éléments visibles
    setTimeout(() => {
        window.dispatchEvent(new Event('scroll'));
    }, 300);
    
    // Fonctionnalité du mini-défi
    const checkSolutionBtn = document.getElementById('check-solution');
    const showSolutionBtn = document.getElementById('show-solution');
    const solutionInput = document.getElementById('solution');
    const resultFeedback = document.getElementById('result-feedback');
    const solutionDisplay = document.getElementById('solution-display');
    
    if (checkSolutionBtn && showSolutionBtn) {
        // Vérifier la solution
        checkSolutionBtn.addEventListener('click', function() {
            const userSolution = solutionInput.value.trim();
            
            if (!userSolution) {
                resultFeedback.innerHTML = '<div class="alert alert-warning">Veuillez entrer une solution.</div>';
                resultFeedback.style.display = 'block';
                return;
            }
            
            // Calcul simple pour vérifier si la solution donne 753
            try {
                // On prépare l'expression pour l'évaluation en remplaçant × par *
                let preparedExpression = userSolution.replace(/×/g, '*');
                
                // Vérifier si tous les nombres sont utilisés (simplification)
                const numbersUsed = [4, 8, 9, 25, 50, 75];
                let allNumbersUsed = true;
                
                // Vérifie si l'expression contient tous les nombres requis
                // Cette vérification est simplifiée et pas parfaite
                numbersUsed.forEach(num => {
                    if (!preparedExpression.includes(num.toString())) {
                        allNumbersUsed = false;
                    }
                });
                
                // Évaluation sécurisée (dans un contexte d'apprentissage)
                // NOTE: Dans un environnement de production, il faudrait utiliser une méthode plus sécurisée
                const result = eval(preparedExpression);
                
                if (result === 753 && allNumbersUsed) {
                    resultFeedback.innerHTML = '<div class="alert alert-success">Bravo ! Votre solution donne bien 753.</div>';
                } else if (result === 753) {
                    resultFeedback.innerHTML = '<div class="alert alert-warning">Votre solution donne 753, mais assurez-vous d\'utiliser les nombres fournis.</div>';
                } else {
                    resultFeedback.innerHTML = `<div class="alert alert-danger">Votre solution donne ${result}, pas 753. Essayez encore !</div>`;
                }
                
                resultFeedback.style.display = 'block';
                
            } catch (error) {
                resultFeedback.innerHTML = '<div class="alert alert-danger">Erreur dans votre formule. Vérifiez la syntaxe.</div>';
                resultFeedback.style.display = 'block';
            }
        });
        
        // Afficher la solution
        showSolutionBtn.addEventListener('click', function() {
            solutionDisplay.style.display = 'block';
            this.disabled = true;
        });
    }
});

// Ajout d'événements pour les cartes interactives
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px)';
            this.style.boxShadow = '0 15px 30px rgba(0, 0, 0, 0.15)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.05)';
        });
    });
});



