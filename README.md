<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Le Compte Est Bon - Un jeu mathématique de logique développé dans le cadre d'un projet NSI">
    <meta name="author" content="Yassine HABA et Souidi Zakaria">
    <meta name="keywords" content="compte est bon, jeu mathématique, projet NSI, des chiffres et des lettres">
    <title>Le Compte Est Bon | Projet NSI</title>
    <!-- Favicon -->
    <link rel="icon" type="image/png" href="favicon.png">
    <!-- Lien vers le CSS de Bootstrap 5 -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome pour les icônes -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet">
    <style>
        :root {
            --primary-color: #3949ab;
            --secondary-color: #5c6bc0;
            --accent-color: #ffd600;
            --dark-color: #283593;
            --light-color: #e8eaf6;
        }
        
        body {
            background-color: var(--light-color);
            color: #333;
            font-family: 'Roboto', sans-serif;
        }
        
        .navbar {
            background-color: var(--primary-color);
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }
        
        .logo-img {
            height: 30px;
            width: auto;
            margin-right: 10px;
        }
        
        .hero-section {
            background: linear-gradient(135deg, var(--primary-color), var(--dark-color));
            color: white;
            padding: 5rem 0;
            margin-bottom: 2rem;
            position: relative;
            overflow: hidden;
        }
        
        .hero-section h1 {
            font-size: 2.8rem;
            font-weight: 700;
            margin-bottom: 1rem;
            opacity: 0;
            transform: translateY(20px);
            animation: fadeInUp 0.8s ease forwards 0.3s;
        }
        
        .hero-section .lead {
            font-size: 1.2rem;
            opacity: 0;
            transform: translateY(20px);
            animation: fadeInUp 0.8s ease forwards 0.6s;
        }
        
        .hero-section .btn {
            opacity: 0;
            transform: translateY(20px);
            animation: fadeInUp 0.8s ease forwards 0.9s;
        }
        
        @keyframes fadeInUp {
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        .hero-overlay {
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.2);
            z-index: 1;
        }
        
        .hero-content {
            position: relative;
            z-index: 2;
        }
        
        .card {
            border: none;
            border-radius: 10px;
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
            transition: transform 0.3s ease, box-shadow 0.3s ease;
            margin-bottom: 2rem;
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.5s ease, transform 0.5s ease;
        }
        
        .card.show {
            opacity: 1;
            transform: translateY(0);
        }
        
        .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
        }
        
        .card-title {
            color: var(--primary-color);
            font-weight: 600;
        }
        
        .section-title {
            color: var(--primary-color);
            font-weight: 700;
            margin-bottom: 1.5rem;
            position: relative;
            padding-bottom: 0.5rem;
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.5s ease, transform 0.5s ease;
        }
        
        .section-title.show {
            opacity: 1;
            transform: translateY(0);
        }
        
        .section-title::after {
            content: '';
            position: absolute;
            bottom: 0;
            left: 0;
            width: 50px;
            height: 3px;
            background-color: var(--accent-color);
            transform: scaleX(0);
            transform-origin: left;
            transition: transform 0.5s ease 0.2s;
        }
        
        .section-title.show::after {
            transform: scaleX(1);
        }
        
        .btn-primary {
            background-color: var(--primary-color);
            border-color: var(--primary-color);
            transition: all 0.3s ease;
        }
        
        .btn-primary:hover {
            background-color: var(--dark-color);
            border-color: var(--dark-color);
            transform: translateY(-2px);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
        }
        
        .feature-icon {
            font-size: 2.5rem;
            color: var(--accent-color);
            margin-bottom: 1rem;
            transition: transform 0.3s ease;
        }
        
        .card:hover .feature-icon {
            transform: scale(1.2);
        }
        
        .image-container {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.5s ease, transform 0.5s ease;
        }
        
        .image-container.show {
            opacity: 1;
            transform: translateY(0);
        }
        
        footer {
            background-color: var(--dark-color);
            color: white;
            padding: 2rem 0;
            margin-top: 3rem;
        }
        
        .img-thumbnail {
            border: 3px solid var(--secondary-color);
            border-radius: 10px;
        }
        
        @media (max-width: 768px) {
            .hero-section h1 {
                font-size: 2rem;
            }
            
            .hero-section {
                padding: 3rem 0;
            }
        }
    </style>
</head>
<body>
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-dark sticky-top">
        <div class="container">
            <a class="navbar-brand" href="#">
                <img src="favicon.png" alt="Logo" class="logo-img">
                Le Compte Est Bon
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">Accueil</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="index2.html.html">Présentation détaillée</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

    <!-- Hero Section -->
    <section class="hero-section">
        <div class="hero-overlay"></div>
        <div class="container hero-content text-center">
            <h1>Le Compte Est Bon</h1>
            <p class="lead">Un projet NSI créé par Yassine HABA et Souidi Zakaria</p>
            <a href="#discover" class="btn btn-light btn-lg mt-3">Découvrir <i class="fas fa-arrow-down ms-2"></i></a>
        </div>
    </section>

    <main class="container" id="discover">
        <!-- Introduction -->
        <section class="row mb-5">
            <div class="col-lg-8 mx-auto text-center">
                <h2 class="section-title text-center">Bienvenue</h2>
                <p class="lead">Bienvenue sur la page de notre jeu "Le compte est bon". Ce projet présente le concept et les défis rencontrés lors de son développement. Nous espérons que cette visite vous donnera une idée de notre travail en NSI. Bonne exploration !</p>
            </div>
        </section>

        <!-- Features -->
        <section class="row mb-5">
            <div class="col-md-3">
                <div class="card h-100 p-4 text-center">
                    <div class="feature-icon">
                        <i class="fas fa-history"></i>
                    </div>
                    <h3 class="card-title">Histoire</h3>
                    <p class="card-text">Découvrez l'histoire du jeu et son origine.</p>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card h-100 p-4 text-center">
                    <div class="feature-icon">
                        <i class="fas fa-gamepad"></i>
                    </div>
                    <h3 class="card-title">Concept</h3>
                    <p class="card-text">Comprendre les règles et le concept du jeu.</p>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card h-100 p-4 text-center">
                    <div class="feature-icon">
                        <i class="fas fa-code"></i>
                    </div>
                    <h3 class="card-title">Programme</h3>
                    <p class="card-text">Explication du programme et son fonctionnement.</p>
                </div>
            </div>
            <div class="col-md-3">
                <div class="card h-100 p-4 text-center">
                    <div class="feature-icon">
                        <i class="fas fa-puzzle-piece"></i>
                    </div>
                    <h3 class="card-title">Difficultés</h3>
                    <p class="card-text">Les défis rencontrés lors du développement.</p>
                </div>
            </div>
        </section>

        <!-- Histoire du jeu -->
        <section class="row mb-5">
            <div class="col-lg-6">
                <h2 class="section-title">L'histoire du jeu</h2>
                <p>
                    Ce projet est inspiré du célèbre jeu télévisé « Des Chiffres et Des Lettres ». Le jeu comporte plusieurs épreuves, mais nous avons programmé la première partie, appelée « Le Compte est bon ».
                </p>
                <p>
                    Cette émission mythique de France Télévisions existe depuis 1965, ce qui en fait l'un des plus anciens jeux télévisés français. Sa popularité ne s'est jamais démentie au fil des décennies.
                </p>
                <a href="https://www.youtube.com/watch?v=X1jwjiEQG9Y" target="_blank" class="btn btn-primary mt-3">
                    <i class="fab fa-youtube me-2"></i>Voir l'émission
                </a>
            </div>
            <div class="col-lg-6">
                <img src="https://image.jeuxvideo.com/images/videos/extraits-images/200911/des_chiffres_et_des_lettres_wii-00003973-high.jpg" class="img-fluid rounded shadow" alt="Image de référence du jeu">
            </div>
        </section>

        <!-- Concept du jeu -->
        <section class="row mb-5">
            <div class="col-lg-6 order-lg-2">
                <h2 class="section-title">Concept du jeu</h2>
                <p>L'objectif est de donner à l'utilisateur 6 nombres aléatoires entre 1 et 75, ainsi qu'un grand nombre (entre 101 et 999) à atteindre. En utilisant des opérations de base (addition, soustraction, multiplication, division), il faut trouver la meilleure combinaison pour atteindre ce nombre cible.</p>
                <ul class="list-group mt-3 mb-3">
                    <li class="list-group-item"><i class="fas fa-check-circle text-success me-2"></i> Utiliser les 6 chiffres proposés</li>
                    <li class="list-group-item"><i class="fas fa-check-circle text-success me-2"></i> Appliquer des opérations mathématiques</li>
                    <li class="list-group-item"><i class="fas fa-check-circle text-success me-2"></i> Atteindre le nombre cible ou s'en approcher</li>
                </ul>
                <a href="https://www.youtube.com/watch?v=t_4dAYk5ySY" target="_blank" class="btn btn-primary">
                    <i class="fab fa-youtube me-2"></i>Voir un exemple de jeu
                </a>
            </div>
            <div class="col-lg-6 order-lg-1 d-flex align-items-center">
                <div class="card p-4 w-100">
                    <div class="card-body text-center">
                        <h4 class="card-title">Exemple de partie</h4>
                        <p>Chiffres disponibles: 3, 5, 7, 10, 25, 75</p>
                        <p>Nombre cible: 352</p>
                        <p>Solution possible:</p>
                        <p>((25 × 10) + 75 + 3 - 5) ÷ 7 = 352</p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Découvrir plus -->
        <section class="text-center py-5">
            <h2 class="section-title text-center">En savoir plus</h2>
            <p class="lead">Pour découvrir les détails du programme et des défis rencontrés :</p>
            <a href="index2.html.html" class="btn btn-primary btn-lg">Voir la présentation détaillée</a>
        </section>
    </main>

    <footer class="text-center">
        <div class="container">
            <p>&copy; 2024 Yassine HABA et Souidi Zakaria. Tous droits réservés.</p>
            <p>Projet NSI - Première</p>
        </div>
    </footer>

    <!-- JavaScript de Bootstrap -->
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js"></script>
    <!-- JavaScript personnalisé -->
    <script src="script.js"></script>
</body>
</html>

 
