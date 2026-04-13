  /* ═══════════════════════════════════════════
   BASE DE DONNÉES PRODUITS
   Pour ajouter un produit : copie un objet
   et modifie ses propriétés.
   amazonUrl: mets le lien Amazon affilié ici
═══════════════════════════════════════════ */
const products = [
  /* ════ PC GAMING ════ */
  {
    id: 1, cat: "pc", usage: ["esport","pro"],
    name: "PC Ultra FPS", brand: "Config personnalisée",
    subtitle: "La machine absolue pour le jeu compétitif",
    icon: "🖥️", color: "#1a0e30",
    price: 3499, priceDisplay: "3 499 €",
    badge: "top", badgeLabel: "Best seller",
    year: 2025, popular: 98, rating: 9.8, reviews: 512,
    amazonUrl: "#amazon-lien-ici",
    tags: ["4K", "360Hz", "DDR5", "PCIe 5.0"],
    specs: [
      { label: "Processeur", value: "Intel Core i9-14900K (24 cœurs, 6.0 GHz)" },
      { label: "Carte graphique", value: "NVIDIA RTX 4090 24 Go GDDR6X" },
      { label: "RAM", value: "64 Go DDR5 6400 MHz" },
      { label: "Stockage", value: "2 To NVMe PCIe 5.0 + 4 To HDD" },
      { label: "Alimentation", value: "1000W 80+ Platinum" },
      { label: "Refroidissement", value: "AIO 360mm liquide" },
      { label: "Carte mère", value: "Z790 ROG MAXIMUS HERO" },
      { label: "OS", value: "Windows 11 Pro 64 bits" }
    ],
    scores: [
      { label: "Performances", val: 10, color: "#f59e0b" },
      { label: "Rapport Q/P", val: 6, color: "#06b6d4" },
      { label: "Refroidissement", val: 9, color: "#10b981" },
      { label: "Évolutivité", val: 9, color: "#8b5cf6" },
      { label: "Silenciosité", val: 7, color: "#ec4899" }
    ],
    pros: ["Performances absolues en 4K/360Hz", "Stockage PCIe 5.0 ultra rapide", "DDR5 haute fréquence", "Refroidissement excellent"],
    cons: ["Prix très élevé", "Consommation importante", "Encombrant"],
    verdict: "La configuration de référence absolue pour 2025. Rien ne lui résiste : ni la 4K ultra, ni le 360Hz en compétitif, ni le streaming haute qualité. Pour les joueurs et créateurs qui exigent le meilleur sans compromis."
  },
  {
    id: 2, cat: "pc", usage: ["esport","casual"],
    name: "PC Gamer Mid-Range", brand: "Config personnalisée",
    subtitle: "Le parfait équilibre performance/prix",
    icon: "🖥️", color: "#0e1a10",
    price: 1199, priceDisplay: "1 199 €",
    badge: "deal", badgeLabel: "Meilleur prix",
    year: 2025, popular: 95, rating: 9.1, reviews: 1240,
    amazonUrl: "#amazon-lien-ici",
    tags: ["1440p", "144Hz", "DDR5"],
    specs: [
      { label: "Processeur", value: "AMD Ryzen 7 7700X (8 cœurs, 5.4 GHz)" },
      { label: "Carte graphique", value: "NVIDIA RTX 4070 Ti 12 Go" },
      { label: "RAM", value: "32 Go DDR5 5600 MHz" },
      { label: "Stockage", value: "1 To NVMe PCIe 4.0" },
      { label: "Alimentation", value: "750W 80+ Gold" },
      { label: "Refroidissement", value: "Ventirad Noctua NH-D15" },
      { label: "Carte mère", value: "X670E ASUS TUF Gaming" },
      { label: "OS", value: "Windows 11 Home 64 bits" }
    ],
    scores: [
      { label: "Performances", val: 8, color: "#f59e0b" },
      { label: "Rapport Q/P", val: 9, color: "#06b6d4" },
      { label: "Refroidissement", val: 9, color: "#10b981" },
      { label: "Évolutivité", val: 8, color: "#8b5cf6" },
      { label: "Silenciosité", val: 9, color: "#ec4899" }
    ],
    pros: ["Excellent rapport qualité/prix", "Silencieux sous charge", "1440p 144Hz sans effort", "Facile à évoluer"],
    cons: ["Pas optimisé pour la 4K", "Sans SSD secondaire", "Pas de Wi-Fi intégré"],
    verdict: "Le sweet spot de 2025 : suffisamment puissant pour tout jouer en 1440p/144Hz, assez abordable pour ne pas vider le portefeuille. Le meilleur choix pour 90% des gamers."
  },
  {
    id: 3, cat: "pc", usage: ["casual","family"],
    name: "PC Gamer Entrée de gamme", brand: "Config personnalisée",
    subtitle: "Débuter dans le gaming sans se ruiner",
    icon: "🖥️", color: "#0e1818",
    price: 649, priceDisplay: "649 €",
    badge: null, badgeLabel: null,
    year: 2024, popular: 78, rating: 7.8, reviews: 634,
    amazonUrl: "#amazon-lien-ici",
    tags: ["1080p", "144Hz", "DDR4"],
    specs: [
      { label: "Processeur", value: "Intel Core i5-13400F (10 cœurs, 4.6 GHz)" },
      { label: "Carte graphique", value: "AMD RX 7600 8 Go GDDR6" },
      { label: "RAM", value: "16 Go DDR4 3200 MHz" },
      { label: "Stockage", value: "500 Go NVMe PCIe 4.0" },
      { label: "Alimentation", value: "550W 80+ Bronze" },
      { label: "Refroidissement", value: "Ventirad stock amélioré" },
      { label: "Carte mère", value: "B760M ASUS Prime" },
      { label: "OS", value: "Windows 11 Home 64 bits" }
    ],
    scores: [
      { label: "Performances", val: 6, color: "#f59e0b" },
      { label: "Rapport Q/P", val: 9, color: "#06b6d4" },
      { label: "Refroidissement", val: 7, color: "#10b981" },
      { label: "Évolutivité", val: 7, color: "#8b5cf6" },
      { label: "Silenciosité", val: 8, color: "#ec4899" }
    ],
    pros: ["Budget très accessible", "Bon pour la 1080p 144Hz", "Facile à upgrader", "Silencieux"],
    cons: ["Limité en 1440p", "Stockage un peu juste", "Pas de DDR5"],
    verdict: "La config idéale pour commencer le gaming avec un budget limité. La RX 7600 tient bien ses promesses en 1080p et le i5-13400F ne brille dans aucun jeu."
  },
 
  /* ════ TÉLÉVISIONS ════ */
  {
    id: 4, cat: "tv", usage: ["family","casual"],
    name: "LG OLED C4 65\"", brand: "LG",
    subtitle: "La référence OLED pour le salon gaming",
    icon: "📺", color: "#0e0e25",
    price: 1799, priceDisplay: "1 799 €",
    badge: "top", badgeLabel: "Meilleur OLED",
    year: 2024, popular: 97, rating: 9.6, reviews: 3241,
    amazonUrl: "#amazon-lien-ici",
    tags: ["OLED", "4K", "144Hz", "HDMI 2.1", "VRR", "G-Sync"],
    specs: [
      { label: "Dalle", value: "OLED evo 65 pouces" },
      { label: "Résolution", value: "4K Ultra HD (3840 × 2160)" },
      { label: "Fréquence", value: "144 Hz natif" },
      { label: "HDR", value: "Dolby Vision, HDR10, HLG" },
      { label: "Luminosité max", value: "1 500 cd/m² (pic)" },
      { label: "HDMI", value: "4× HDMI 2.1 (48 Gbps)" },
      { label: "Input lag", value: "0.1 ms (mode jeu)" },
      { label: "Smart TV", value: "webOS 24, ThinQ AI" }
    ],
    scores: [
      { label: "Image", val: 10, color: "#f59e0b" },
      { label: "Gaming", val: 9, color: "#10b981" },
      { label: "Son intégré", val: 7, color: "#06b6d4" },
      { label: "Smart TV", val: 8, color: "#8b5cf6" },
      { label: "Rapport Q/P", val: 8, color: "#ec4899" }
    ],
    pros: ["Noirs absolus OLED", "144Hz HDMI 2.1 ×4", "Input lag 0.1ms", "Dolby Vision Gaming", "G-Sync Compatible + FreeSync"],
    cons: ["Risque burn-in à surveiller", "Son correct mais pas exceptionnel", "Prix élevé"],
    verdict: "Le TV gaming de référence. Ses 4 ports HDMI 2.1 font de lui l'idéal pour connecter PS5, Xbox et PC simultanément en 4K/120Hz. L'image OLED reste insoupçonnable."
  },
  {
    id: 5, cat: "tv", usage: ["family","casual"],
    name: "Samsung Neo QLED QN90C 55\"", brand: "Samsung",
    subtitle: "La meilleure LCD pour les pièces lumineuses",
    icon: "📺", color: "#0f1218",
    price: 1299, priceDisplay: "1 299 €",
    badge: null, badgeLabel: null,
    year: 2024, popular: 88, rating: 8.9, reviews: 2108,
    amazonUrl: "#amazon-lien-ici",
    tags: ["QLED", "4K", "144Hz", "HDMI 2.1", "Mini-LED"],
    specs: [
      { label: "Dalle", value: "Neo QLED Mini-LED 55 pouces" },
      { label: "Résolution", value: "4K Ultra HD (3840 × 2160)" },
      { label: "Fréquence", value: "144 Hz" },
      { label: "HDR", value: "HDR10+, Quantum HDR 32×" },
      { label: "Luminosité max", value: "2 000 cd/m² (pic)" },
      { label: "HDMI", value: "4× HDMI (dont 1× 2.1)" },
      { label: "Input lag", value: "5.5 ms (mode jeu)" },
      { label: "Smart TV", value: "Tizen OS, Samsung Gaming Hub" }
    ],
    scores: [
      { label: "Image", val: 8, color: "#f59e0b" },
      { label: "Gaming", val: 8, color: "#10b981" },
      { label: "Son intégré", val: 8, color: "#06b6d4" },
      { label: "Smart TV", val: 9, color: "#8b5cf6" },
      { label: "Rapport Q/P", val: 8, color: "#ec4899" }
    ],
    pros: ["Excellente luminosité pour pièce lumineuse", "Couleurs vives et saturées", "Gaming Hub intégré", "Son Dolby Atmos 60W"],
    cons: ["Halos Mini-LED visibles sur les bords", "Un seul HDMI 2.1", "Noir moins profond que l'OLED"],
    verdict: "Le meilleur choix si votre salon est très lumineux. Le Mini-LED produit une luminosité éblouissante que l'OLED ne peut pas atteindre, parfait pour regarder du sport en journée."
  },
  {
    id: 6, cat: "tv", usage: ["family","casual"],
    name: "Philips OLED+908 48\"", brand: "Philips",
    subtitle: "L'OLED haut de gamme avec Ambilight",
    icon: "📺", color: "#250e0e",
    price: 2299, priceDisplay: "2 299 €",
    badge: "pro", badgeLabel: "Premium",
    year: 2024, popular: 76, rating: 9.2, reviews: 876,
    amazonUrl: "#amazon-lien-ici",
    tags: ["OLED", "4K", "120Hz", "Ambilight", "Dolby Atmos"],
    specs: [
      { label: "Dalle", value: "OLED MLA 48 pouces" },
      { label: "Résolution", value: "4K Ultra HD" },
      { label: "Fréquence", value: "120 Hz" },
      { label: "HDR", value: "Dolby Vision, HDR10+, HLG" },
      { label: "Luminosité max", value: "2 100 cd/m² (pic MLA)" },
      { label: "Ambilight", value: "4 côtés" },
      { label: "Son", value: "Bowers & Wilkins 3.1.2 80W" },
      { label: "Smart TV", value: "Android TV 12 / Google TV" }
    ],
    scores: [
      { label: "Image", val: 10, color: "#f59e0b" },
      { label: "Gaming", val: 7, color: "#10b981" },
      { label: "Son intégré", val: 10, color: "#06b6d4" },
      { label: "Smart TV", val: 9, color: "#8b5cf6" },
      { label: "Rapport Q/P", val: 7, color: "#ec4899" }
    ],
    pros: ["Ambilight 4 côtés saisissant", "Son Bowers & Wilkins exceptionnel", "OLED MLA ultra lumineux", "Google TV complet"],
    cons: ["Prix très élevé", "Pas de HDMI 2.1 full 48Gbps", "Taille 48\" limitée"],
    verdict: "L'expérience cinéma ultime à domicile. L'Ambilight crée une immersion sans pareille, le son B&W remplace presque une barre de son. Pour les cinéphiles avant les gamers."
  },
 
  /* ════ CAMÉRAS ════ */
  {
    id: 7, cat: "camera", usage: ["pro","content"],
    name: "Sony A7R V", brand: "Sony",
    subtitle: "Le hybride plein format à 61 Mpx ultime",
    icon: "📷", color: "#1a1408",
    price: 4199, priceDisplay: "4 199 €",
    badge: "pro", badgeLabel: "Professionnel",
    year: 2023, popular: 82, rating: 9.4, reviews: 1456,
    amazonUrl: "#amazon-lien-ici",
    tags: ["61 Mpx", "Plein format", "8K", "IBIS 8 stops", "IA AF"],
    specs: [
      { label: "Capteur", value: "CMOS BSI plein format 61 Mpx" },
      { label: "Processeur", value: "BIONZ XR + AI Processing Unit" },
      { label: "Vidéo", value: "8K 25p / 4K 60p / 1080p 240p" },
      { label: "Autofocus", value: "693 points AF hybride, détection IA" },
      { label: "Stabilisation", value: "IBIS 8 stops (Steady Shot)" },
      { label: "Rafale", value: "10 i/s (mécanique), 8 i/s (électronique)" },
      { label: "Écran", value: "3 pouces 4 axes 1,44 Mpts tactile" },
      { label: "Viseur", value: "EVF 9,44 Mpts 0.9× 120 i/s" },
      { label: "Autonomie", value: "~530 photos (CIPA)" }
    ],
    scores: [
      { label: "Résolution", val: 10, color: "#f59e0b" },
      { label: "Autofocus", val: 9, color: "#10b981" },
      { label: "Vidéo", val: 8, color: "#06b6d4" },
      { label: "Ergonomie", val: 8, color: "#8b5cf6" },
      { label: "Rapport Q/P", val: 6, color: "#ec4899" }
    ],
    pros: ["61 Mpx pour un recadrage extrême", "IA AF bluffant", "IBIS 8 stops impressionnant", "8K vidéo disponible", "Construction pro"],
    cons: ["Prix très élevé (boîtier nu)", "Buffer limité en rafale", "Autonomie correcte mais pas plus"],
    verdict: "Le roi de la résolution pour hybride plein format. Photographes de studio, paysagistes et architectes trouveront ici une machine sans égal. L'IA AF révolutionne la mise au point."
  },
  {
    id: 8, cat: "camera", usage: ["content","casual"],
    name: "DJI Osmo Pocket 3", brand: "DJI",
    subtitle: "La caméra pocket créateur parfaite",
    icon: "🎥", color: "#0e1820",
    price: 519, priceDisplay: "519 €",
    badge: "new", badgeLabel: "2024",
    year: 2024, popular: 91, rating: 9.3, reviews: 2341,
    amazonUrl: "#amazon-lien-ici",
    tags: ["4K 120fps", "Gimbal 3 axes", "1\" CMOS", "ActiveTrack"],
    specs: [
      { label: "Capteur", value: "1 pouce CMOS 20 Mpx" },
      { label: "Vidéo", value: "4K 120fps, 1080p 240fps" },
      { label: "Stabilisation", value: "Gimbal 3 axes mécanique" },
      { label: "Suivi", value: "ActiveTrack 6.0 (IA)" },
      { label: "Écran", value: "2 pouces OLED rotatif" },
      { label: "Audio", value: "4 micros directionnels" },
      { label: "Autonomie", value: "166 min (4K 30fps)" },
      { label: "Mémoire", value: "Micro SD jusqu'à 2 To" }
    ],
    scores: [
      { label: "Stabilisation", val: 10, color: "#f59e0b" },
      { label: "Qualité vidéo", val: 9, color: "#10b981" },
      { label: "Compacité", val: 10, color: "#06b6d4" },
      { label: "Autonomie", val: 9, color: "#8b5cf6" },
      { label: "Rapport Q/P", val: 9, color: "#ec4899" }
    ],
    pros: ["Stabilisation gimbal parfaite", "Capteur 1 pouce excellent en basse lumière", "Très compact", "Autonomie longue", "Suivi IA bluffant"],
    cons: ["Pas étanche de base", "Objectif fixe non interchangeable", "Pas d'image fixe prioritaire"],
    verdict: "Le compagnon ultime pour les créateurs de contenu. Que ce soit pour les vlogs, les voyages ou les stories, l'Osmo Pocket 3 produit des vidéos pro en toute situation et en toute simplicité."
  },
  {
    id: 9, cat: "camera", usage: ["casual","family"],
    name: "GoPro HERO 13 Black", brand: "GoPro",
    subtitle: "La caméra d'action incontournable",
    icon: "🎬", color: "#0e180e",
    price: 399, priceDisplay: "399 €",
    badge: "new", badgeLabel: "2024",
    year: 2024, popular: 89, rating: 8.7, reviews: 4521,
    amazonUrl: "#amazon-lien-ici",
    tags: ["5.3K", "HyperSmooth 6.0", "Étanche 10m", "Lentille mag."],
    specs: [
      { label: "Vidéo max", value: "5.3K 60fps / 4K 120fps" },
      { label: "Stabilisation", value: "HyperSmooth 6.0 Horizon Lock" },
      { label: "HDR Vidéo", value: "Log natif + HDR" },
      { label: "Étanchéité", value: "10 mètres sans boîtier" },
      { label: "Écran", value: "Avant 1.4\" + Arrière 2.27\" tactile" },
      { label: "Audio", value: "3 micros + réduction vent" },
      { label: "Autonomie", value: "~70 min 5.3K (Enduro incluse)" },
      { label: "Lentilles", value: "System Mod compatible" }
    ],
    scores: [
      { label: "Stabilisation", val: 9, color: "#f59e0b" },
      { label: "Robustesse", val: 10, color: "#10b981" },
      { label: "Qualité vidéo", val: 8, color: "#06b6d4" },
      { label: "Autonomie", val: 7, color: "#8b5cf6" },
      { label: "Rapport Q/P", val: 8, color: "#ec4899" }
    ],
    pros: ["HyperSmooth 6.0 époustouflant", "Étanche sans accessoire", "Système de lentilles modulaires", "5.3K 60fps"],
    cons: ["Autonomie courte (~70 min)", "Surchauffe possible en 5.3K 60fps", "Accessoires coûteux"],
    verdict: "La référence absolue en caméra d'action. Surf, ski, vélo ou plongée : la HERO 13 encaisse tout et produit des vidéos stabilisées bluffantes. Incontournable pour les sportifs."
  },
 
  /* ════ PÉRIPHÉRIQUES ════ */
  {
    id: 10, cat: "peripheral", usage: ["esport","pro"],
    name: "Logitech G Pro X Superlight 2", brand: "Logitech G",
    subtitle: "La souris e-sport la plus légère et précise",
    icon: "🖱️", color: "#1a1008",
    price: 159, priceDisplay: "159 €",
    badge: "top", badgeLabel: "Meilleure souris",
    year: 2023, popular: 99, rating: 9.7, reviews: 8741,
    amazonUrl: "#amazon-lien-ici",
    tags: ["60g", "HERO 25K", "Lightspeed 2", "Zero-latency"],
    specs: [
      { label: "Capteur", value: "HERO 25K (25 600 DPI)" },
      { label: "Poids", value: "60 grammes (sans fil)" },
      { label: "Connexion", value: "Lightspeed 2 (1 ms) + Bluetooth" },
      { label: "Boutons", value: "5 programmables" },
      { label: "Autonomie", value: "95 heures" },
      { label: "Revêtement", value: "PTFE grade 1" },
      { label: "Accélération max", value: "40G" },
      { label: "Vitesse max", value: "500 IPS" }
    ],
    scores: [
      { label: "Précision", val: 10, color: "#f59e0b" },
      { label: "Légèreté", val: 10, color: "#10b981" },
      { label: "Latence", val: 10, color: "#06b6d4" },
      { label: "Ergonomie", val: 8, color: "#8b5cf6" },
      { label: "Rapport Q/P", val: 7, color: "#ec4899" }
    ],
    pros: ["Seulement 60g", "Capteur HERO 25K parfait", "Lightspeed 2 zéro latence perceptible", "Autonomie 95h", "PTFE grade 1"],
    cons: ["Prix élevé", "Forme ambidextre seulement", "Pas de RGB", "Câble non fourni (sans fil seul)"],
    verdict: "La souris préférée des professionnels e-sport mondiaux. À 60g avec le HERO 25K, elle définit le standard absolu de la souris gaming compétitive. Aucun compromis."
  },
  {
    id: 11, cat: "peripheral", usage: ["esport","pro"],
    name: "SteelSeries Apex Pro TKL", brand: "SteelSeries",
    subtitle: "Le clavier mécanique à actuation ajustable",
    icon: "⌨️", color: "#0e1010",
    price: 229, priceDisplay: "229 €",
    badge: "pro", badgeLabel: "Pro choice",
    year: 2024, popular: 87, rating: 9.2, reviews: 5120,
    amazonUrl: "#amazon-lien-ici",
    tags: ["OmniPoint 2.0", "0.1mm actuation", "OLED display", "Sans fil"],
    specs: [
      { label: "Switches", value: "OmniPoint 2.0 magnétiques ajustables" },
      { label: "Actuation", value: "0.1 mm – 4.0 mm réglable par touche" },
      { label: "Layout", value: "TKL (sans pavé numérique)" },
      { label: "Connexion", value: "USB-C + 2.4GHz sans fil" },
      { label: "Écran", value: "OLED mini intégré" },
      { label: "Rétroéclairage", value: "RGB per-key" },
      { label: "N-Key Rollover", value: "Full (toutes touches simultanées)" },
      { label: "Polling rate", value: "8000 Hz" }
    ],
    scores: [
      { label: "Réactivité", val: 10, color: "#f59e0b" },
      { label: "Personnalisation", val: 10, color: "#10b981" },
      { label: "Construction", val: 9, color: "#06b6d4" },
      { label: "Feeling frappe", val: 8, color: "#8b5cf6" },
      { label: "Rapport Q/P", val: 7, color: "#ec4899" }
    ],
    pros: ["Actuation ajustable par touche", "8000 Hz polling rate", "Switches magnétiques durables", "Sans fil 2.4 GHz", "Écran OLED intégré"],
    cons: ["Prix premium", "Switches propriétaires", "Bruit de frappe modéré"],
    verdict: "L'innovation la plus marquante en claviers gaming depuis des années. Pouvoir ajuster l'actuation de 0.1 à 4mm par touche ouvre des possibilités inédites pour les joueurs de précision."
  },
  {
    id: 12, cat: "peripheral", usage: ["esport","casual"],
    name: "ASUS ROG Swift Pro PG248QP", brand: "ASUS ROG",
    subtitle: "L'écran 540Hz pour l'e-sport extrême",
    icon: "🖥️", color: "#200e08",
    price: 899, priceDisplay: "899 €",
    badge: "new", badgeLabel: "2024",
    year: 2024, popular: 84, rating: 9.0, reviews: 1234,
    amazonUrl: "#amazon-lien-ici",
    tags: ["540Hz", "1080p", "0.2ms GTG", "G-Sync Ultra"],
    specs: [
      { label: "Dalle", value: "IPS 24.1 pouces Fast IPS" },
      { label: "Résolution", value: "1920 × 1080 (FHD)" },
      { label: "Fréquence", value: "540 Hz natif" },
      { label: "Temps réponse", value: "0.2 ms GTG / 1 ms MPRT" },
      { label: "HDR", value: "HDR400 (600 nits peak)" },
      { label: "Sync", value: "G-Sync Ultra Performance" },
      { label: "Connectique", value: "1× DP 1.4 + 2× HDMI 2.0" },
      { label: "Ergonomie", value: "Hauteur + Rotation + Inclinaison" }
    ],
    scores: [
      { label: "Fluidité", val: 10, color: "#f59e0b" },
      { label: "Réactivité", val: 10, color: "#10b981" },
      { label: "Qualité image", val: 7, color: "#06b6d4" },
      { label: "Ergonomie", val: 9, color: "#8b5cf6" },
      { label: "Rapport Q/P", val: 6, color: "#ec4899" }
    ],
    pros: ["540 Hz aucun autre concurrent", "0.2 ms ultra réactif", "G-Sync Ultra Performance", "Très stable en mouvement"],
    cons: ["Seulement 1080p (pas de 1440p)", "Couleurs moins riches qu'un OLED", "Prix élevé pour du FHD"],
    verdict: "L'écran le plus rapide du marché, point. À 540 Hz, les mouvements sont quasi imperceptibles. Réservé aux joueurs compétitifs professionnels avec un PC suffisamment puissant."
  },
  {
    id: 13, cat: "peripheral", usage: ["casual","family"],
    name: "Focusrite Scarlett Solo 4e gen", brand: "Focusrite",
    subtitle: "L'interface audio indispensable des créateurs",
    icon: "🎙️", color: "#1a0808",
    price: 129, priceDisplay: "129 €",
    badge: "top", badgeLabel: "Best seller",
    year: 2024, popular: 93, rating: 9.1, reviews: 12450,
    amazonUrl: "#amazon-lien-ici",
    tags: ["24 bits 192 kHz", "Préampli Air", "USB-C", "Monitoring"],
    specs: [
      { label: "Entrées", value: "1× XLR-Jack combo + 1× Jack 6.35" },
      { label: "Sorties", value: "2× Jack 6.35 moniteur + casque" },
      { label: "Résolution", value: "24 bits / 192 kHz" },
      { label: "Préampli", value: "Scarlett 4e gen + mode Air" },
      { label: "Connexion", value: "USB-C (compatible Mac/PC/iPad)" },
      { label: "Alimentation", value: "Bus USB (sans alim externe)" },
      { label: "Latence", value: "1.8 ms (96 kHz, buffer 32)" },
      { label: "Logiciel", value: "Hitmaker Expansion offert" }
    ],
    scores: [
      { label: "Qualité audio", val: 9, color: "#f59e0b" },
      { label: "Facilité d'usage", val: 10, color: "#10b981" },
      { label: "Polyvalence", val: 8, color: "#06b6d4" },
      { label: "Compacité", val: 9, color: "#8b5cf6" },
      { label: "Rapport Q/P", val: 10, color: "#ec4899" }
    ],
    pros: ["Préampli excellent pour le prix", "Mode Air (émulation transformer)", "Plug & Play absolu", "Très compact", "Logiciels offerts"],
    cons: ["Une seule entrée XLR", "Pas de MIDI", "Monitoring direct seulement stéréo"],
    verdict: "La référence absolue pour débuter en home studio ou podcasting. Sa simplicité d'utilisation et la qualité de ses préamplis en font le choix numéro 1 depuis des années."
  },
 
  /* ════ AUDIO ════ */
  {
    id: 14, cat: "audio", usage: ["casual","pro","content"],
    name: "Sony WH-1000XM5", brand: "Sony",
    subtitle: "Le meilleur casque ANC du marché",
    icon: "🎧", color: "#100e18",
    price: 299, priceDisplay: "299 €",
    badge: "top", badgeLabel: "Meilleur ANC",
    year: 2023, popular: 96, rating: 9.5, reviews: 15230,
    amazonUrl: "#amazon-lien-ici",
    tags: ["ANC", "30h autonomie", "LDAC", "Multipoint"],
    specs: [
      { label: "ANC", value: "QN2e + QN1 double processeur" },
      { label: "Codec", value: "LDAC (990 kbps), AAC, SBC" },
      { label: "Autonomie", value: "30h (ANC) / 40h (sans ANC)" },
      { label: "Recharge", value: "3h full / 3 min = 3h" },
      { label: "Microphones", value: "8 micros (4 ANC + 4 appels)" },
      { label: "Connexion", value: "Bluetooth 5.2 + Jack 3.5" },
      { label: "Multipoint", value: "2 appareils simultanés" },
      { label: "Poids", value: "250 grammes" }
    ],
    scores: [
      { label: "ANC", val: 10, color: "#f59e0b" },
      { label: "Qualité sonore", val: 9, color: "#10b981" },
      { label: "Confort", val: 9, color: "#06b6d4" },
      { label: "Autonomie", val: 9, color: "#8b5cf6" },
      { label: "Rapport Q/P", val: 8, color: "#ec4899" }
    ],
    pros: ["ANC inégalé sur le marché", "LDAC haute résolution", "30h autonomie", "Recharge rapide", "8 micros pour les appels"],
    cons: ["Ne se plie pas à plat", "Pas d'ANC adaptative en temps réel", "Prix élevé"],
    verdict: "Le summum du casque à réduction de bruit. L'ANC à double processeur efface les bruits de fond comme aucun autre. Idéal pour les voyages, le bureau en open space ou la concentration."
  },
  {
    id: 15, cat: "audio", usage: ["esport","gaming"],
    name: "SteelSeries Arctis Nova Pro Wireless", brand: "SteelSeries",
    subtitle: "Le casque gaming avec ANC le plus complet",
    icon: "🎮", color: "#0e1218",
    price: 349, priceDisplay: "349 €",
    badge: "pro", badgeLabel: "Gaming Pro",
    year: 2023, popular: 85, rating: 9.1, reviews: 3421,
    amazonUrl: "#amazon-lien-ici",
    tags: ["ANC", "2 batteries hot-swap", "Hi-Res", "Multiplateforme"],
    specs: [
      { label: "ANC", value: "Active Noise Cancelling adaptatif" },
      { label: "Audio", value: "Sonar Software 7.1 virtuel" },
      { label: "Batteries", value: "Double batterie hot-swap 40h total" },
      { label: "Connexion", value: "2.4 GHz + Bluetooth 5.0" },
      { label: "Compatibilité", value: "PC, PS5, Switch, Mac, Mobile" },
      { label: "Micro", value: "ClearCast Gen 2 bidirectionnel" },
      { label: "Drivers", value: "40 mm Neodymium" },
      { label: "DAC", value: "GameDAC Gen 2 inclus (Hi-Res)" }
    ],
    scores: [
      { label: "Qualité sonore", val: 9, color: "#f59e0b" },
      { label: "Gaming", val: 10, color: "#10b981" },
      { label: "Autonomie", val: 10, color: "#06b6d4" },
      { label: "Micro", val: 9, color: "#8b5cf6" },
      { label: "Rapport Q/P", val: 7, color: "#ec4899" }
    ],
    pros: ["Double batterie hot-swap (jamais en panne)", "GameDAC Hi-Res inclus", "Multiplateforme universel", "ANC adaptatif", "Micro GameDAC excellent"],
    cons: ["Lourd (337g)", "Prix élevé", "Station de charge obligatoire"],
    verdict: "L'écosystème gaming audio le plus complet du marché. Le double système de batteries hot-swap élimine définitivement la peur de la panne en pleine session. Un investissement durable."
  },
 
  /* ════ SMARTPHONES ════ */
  {
    id: 16, cat: "smartphone", usage: ["pro","content","casual"],
    name: "Samsung Galaxy S25 Ultra", brand: "Samsung",
    subtitle: "Le smartphone phare avec S Pen et IA",
    icon: "📱", color: "#080e18",
    price: 1469, priceDisplay: "1 469 €",
    badge: "new", badgeLabel: "2025",
    year: 2025, popular: 94, rating: 9.3, reviews: 6540,
    amazonUrl: "#amazon-lien-ici",
    tags: ["200 Mpx", "S Pen", "Galaxy AI", "Snapdragon 8 Elite", "Titanium"],
    specs: [
      { label: "Processeur", value: "Snapdragon 8 Elite for Galaxy" },
      { label: "Écran", value: "6.9\" Dynamic AMOLED 2X 2600 nits" },
      { label: "Capteur principal", value: "200 Mpx f/1.7 OIS" },
      { label: "Téléobjectif", value: "50 Mpx 5× optique + 50 Mpx 10×" },
      { label: "RAM", value: "12 Go LPDDR5X" },
      { label: "Stockage", value: "256 Go / 512 Go / 1 To" },
      { label: "Batterie", value: "5000 mAh, 45W fil, 15W sans fil" },
      { label: "OS", value: "One UI 7 (Android 15), 7 ans MAJ" }
    ],
    scores: [
      { label: "Appareil photo", val: 10, color: "#f59e0b" },
      { label: "Performances", val: 10, color: "#10b981" },
      { label: "Écran", val: 10, color: "#06b6d4" },
      { label: "Autonomie", val: 8, color: "#8b5cf6" },
      { label: "Rapport Q/P", val: 7, color: "#ec4899" }
    ],
    pros: ["200 Mpx + 2 téléobjectifs", "Galaxy AI très utile", "S Pen intégré", "7 ans de mises à jour", "Châssis titanium"],
    cons: ["Prix très élevé", "Charge lente (45W vs concurrents)", "S Pen ne charge plus sans fil"],
    verdict: "L'Android le plus complet de 2025. Le S Pen + Galaxy AI + 3 capteurs longue focale forment une combinaison imbattable pour les créateurs de contenu et les professionnels."
  },
  {
    id: 17, cat: "smartphone", usage: ["casual","family"],
    name: "Google Pixel 9", brand: "Google",
    subtitle: "Le meilleur rapport IA/photo/prix Android",
    icon: "📱", color: "#0e1808",
    price: 899, priceDisplay: "899 €",
    badge: "deal", badgeLabel: "Bon plan",
    year: 2024, popular: 82, rating: 8.9, reviews: 3218,
    amazonUrl: "#amazon-lien-ici",
    tags: ["Tensor G4", "Google AI", "7 ans MAJ", "Ultra HDR"],
    specs: [
      { label: "Processeur", value: "Google Tensor G4" },
      { label: "Écran", value: "6.3\" OLED 1080p 120Hz 2700 nits" },
      { label: "Capteur principal", value: "50 Mpx f/1.68 OIS" },
      { label: "Ultra grand-angle", value: "48 Mpx f/1.7" },
      { label: "RAM", value: "12 Go LPDDR5" },
      { label: "Stockage", value: "128 Go / 256 Go" },
      { label: "Batterie", value: "4700 mAh, 27W fil, 15W sans fil" },
      { label: "OS", value: "Android 15 pur, 7 ans MAJ garantis" }
    ],
    scores: [
      { label: "Appareil photo", val: 9, color: "#f59e0b" },
      { label: "Performances", val: 8, color: "#10b981" },
      { label: "Logiciel IA", val: 10, color: "#06b6d4" },
      { label: "Autonomie", val: 8, color: "#8b5cf6" },
      { label: "Rapport Q/P", val: 9, color: "#ec4899" }
    ],
    pros: ["Photo computational IA meilleure classe", "7 ans MAJ garantis", "Android pur rapide", "Prix raisonnable", "Magic Eraser/Editor"],
    cons: ["Tensor G4 moins rapide que Snapdragon", "Pas de téléobjectif longue focale", "Charge lente"],
    verdict: "Le choix le plus malin en Android 2024-2025. Google offre les meilleures fonctions IA du marché, 7 ans de mises à jour garanties et une expérience photo exceptionnelle à un prix raisonnable."
  },
 
  /* ════ CONSOLES ════ */
  {
    id: 18, cat: "console", usage: ["casual","family","esport"],
    name: "PlayStation 5 Pro", brand: "Sony",
    subtitle: "La console Sony la plus puissante jamais créée",
    icon: "🎮", color: "#0a0a1a",
    price: 799, priceDisplay: "799 €",
    badge: "new", badgeLabel: "2024",
    year: 2024, popular: 96, rating: 9.2, reviews: 8743,
    amazonUrl: "#amazon-lien-ici",
    tags: ["4K 120fps", "8K prêt", "PSSR IA", "2 To SSD", "PlayStation Spectral Super Res"],
    specs: [
      { label: "CPU", value: "Zen 2 8 cœurs 3.85 GHz (custom)" },
      { label: "GPU", value: "RDNA 4 custom 33.5 TFLOPS" },
      { label: "RAM", value: "16 Go GDDR6 576 Go/s" },
      { label: "Stockage", value: "2 To NVMe SSD 5.5 Go/s" },
      { label: "Résolution", value: "Jusqu'à 8K / 4K 120fps" },
      { label: "Upscaling", value: "PSSR (PlayStation Spectral Super Res)" },
      { label: "Ray Tracing", value: "Hardware RT 2× PS5 standard" },
      { label: "Lecteur", value: "Vendu sans lecteur (achat séparé)" }
    ],
    scores: [
      { label: "Performances", val: 9, color: "#f59e0b" },
      { label: "Qualité des jeux", val: 10, color: "#10b981" },
      { label: "SSD vitesse", val: 10, color: "#06b6d4" },
      { label: "Rapport Q/P", val: 7, color: "#8b5cf6" },
      { label: "Rétrocompat.", val: 9, color: "#ec4899" }
    ],
    pros: ["33.5 TFLOPS GPU impressionnant", "PSSR upscaling IA", "2 To SSD intégré", "Rétrocompatibilité complète PS4/PS5", "DualSense Pro"],
    cons: ["Prix élevé (799€ sans lecteur)", "Lecteur BD vendu séparément", "Design encombrant"],
    verdict: "La PS5 Pro justifie son prix premium pour les fans de Sony. Le PSSR offre une image 4K d'une qualité inédite sur console et le GPU est un bond significatif. Pour les puristes exclusivités PlayStation."
  },
  {
    id: 19, cat: "console", usage: ["casual","family"],
    name: "Nintendo Switch 2", brand: "Nintendo",
    subtitle: "L'hybride portable-salon de nouvelle génération",
    icon: "🕹️", color: "#180a08",
    price: 469, priceDisplay: "469 €",
    badge: "new", badgeLabel: "2025",
    year: 2025, popular: 99, rating: 9.5, reviews: 12100,
    amazonUrl: "#amazon-lien-ici",
    tags: ["1080p portable", "4K dock", "Joy-Con 2 magnétiques", "GameShare"],
    specs: [
      { label: "Écran", value: "8\" LCD 1080p 120Hz (portable)" },
      { label: "Sortie dock", value: "4K 60fps via HDMI 2.0" },
      { label: "Processeur", value: "NVIDIA custom Tegra T239 (Ampere)" },
      { label: "RAM", value: "12 Go LPDDR5" },
      { label: "Stockage", value: "256 Go + micro SD Express" },
      { label: "Autonomie", value: "2-6.5h selon les jeux" },
      { label: "Joy-Con 2", value: "Fixation magnétique + bouton C" },
      { label: "GameShare", value: "Partage de jeux en local" }
    ],
    scores: [
      { label: "Portabilité", val: 10, color: "#f59e0b" },
      { label: "Catalogue jeux", val: 10, color: "#10b981" },
      { label: "Performances", val: 8, color: "#06b6d4" },
      { label: "Rapport Q/P", val: 9, color: "#8b5cf6" },
      { label: "Familles", val: 10, color: "#ec4899" }
    ],
    pros: ["Catalogue Switch légendaire + nouvelles exclusivités", "Joy-Con 2 magnétiques innovants", "4K en mode dock", "GameShare révolutionnaire", "Prix accessible"],
    cons: ["Autonomie encore limitée", "Pas de 4K en portable", "Performances moindres vs PS5/Xbox"],
    verdict: "La console la plus attendue de la décennie. Nintendo réussit à nouveau son pari : une expérience hybride irréprochable avec un catalogue de jeux incomparable. Le choix évident pour les familles."
  }
];
 
/* ══ ÉTAT DE L'APPLICATION ══ */
const state = {
  activeCategory: 'all',
  activePrice: 'all',
  activeUsage: 'all',
  sortBy: 'rating',
  compareList: [],
  search: ''
};
 
/* ══ UTILITAIRES ══ */
function getScoreColor(val) {
  if (val >= 9) return '#f59e0b';
  if (val >= 7) return '#10b981';
  if (val >= 5) return '#06b6d4';
  if (val >= 3) return '#f97316';
  return '#ef4444';
}
 
function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5;
  let stars = '';
  for (let i = 0; i < 5; i++) {
    if (i < full) stars += '<svg class="star full" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
    else stars += '<svg class="star empty" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>';
  }
  return stars;
}
 
function animateNumber(el, target) {
  let current = 0;
  const step = target / 50;
  const timer = setInterval(() => {
    current = Math.min(current + step, target);
    el.textContent = Math.floor(current).toLocaleString('fr-FR');
    if (current >= target) clearInterval(timer);
  }, 30);
}
 
/* ══ FILTRAGE ══ */
function getFiltered() {
  let list = [...products];
 
  if (state.activeCategory !== 'all')
    list = list.filter(p => p.cat === state.activeCategory);
 
  if (state.activePrice !== 'all') {
    const [min, max] = state.activePrice.split('-').map(Number);
    list = list.filter(p => p.price >= min && p.price <= max);
  }
 
  if (state.activeUsage !== 'all')
    list = list.filter(p => p.usage.includes(state.activeUsage));
 
  if (state.search)
    list = list.filter(p =>
      p.name.toLowerCase().includes(state.search) ||
      p.brand.toLowerCase().includes(state.search) ||
      p.subtitle.toLowerCase().includes(state.search)
    );
 
  switch (state.sortBy) {
    case 'price-asc':  list.sort((a,b) => a.price - b.price); break;
    case 'price-desc': list.sort((a,b) => b.price - a.price); break;
    case 'newest':     list.sort((a,b) => b.year - a.year); break;
    case 'popular':    list.sort((a,b) => b.popular - a.popular); break;
    default:           list.sort((a,b) => b.rating - a.rating);
  }
 
  return list;
}
 
/* ══ RENDU D'UNE CARTE ══ */
function renderCard(p) {
  const inCompare = state.compareList.includes(p.id);
  const scoreColor = getScoreColor(p.rating);
 
  const mainScores = p.scores.slice(0, 3).map(s => `
    <div class="card-score-row">
      <span class="score-label">${s.label}</span>
      <div class="score-bar-wrap">
        <div class="score-bar-fill" style="width:${s.val*10}%;background:${s.color}"></div>
      </div>
      <span class="score-val" style="color:${s.color}">${s.val}</span>
    </div>
  `).join('');
 
  const badge = p.badge ? `<div class="card-badge badge-${p.badge}">${p.badgeLabel}</div>` : '';
  const compareAdded = inCompare ? 'added' : '';
 
  return `
  <div class="product-card" data-id="${p.id}">
    <div class="card-banner">
      <div class="card-banner-bg" style="background:${p.color}"></div>
      <div class="card-banner-icon">${p.icon}</div>
      ${badge}
      <button class="card-compare-btn ${compareAdded}" data-id="${p.id}" title="Comparer">
        ${inCompare ? '✓ Comparé' : '+ Comparer'}
      </button>
    </div>
    <div class="card-body">
      <div class="card-category">${getCatLabel(p.cat)}</div>
      <div class="card-name">${p.name}</div>
      <div class="card-subtitle">${p.subtitle}</div>
      <div class="card-rating-row">
        <div class="stars">${renderStars(p.rating)}</div>
        <span class="rating-num">${p.rating}</span>
        <span class="rating-count">(${p.reviews.toLocaleString('fr-FR')} avis)</span>
      </div>
      <div class="card-specs">
        ${p.specs.slice(0,3).map(s => `<div class="spec-row"><span class="spec-dot"></span><span><strong>${s.label} :</strong> ${s.value}</span></div>`).join('')}
      </div>
      <div class="card-scores">${mainScores}</div>
      <div class="card-footer-row">
        <div>
          <div class="card-price" style="color:${scoreColor}">${p.priceDisplay}</div>
          <div class="card-price-note">Prix indicatif Amazon</div>
        </div>
        <div class="card-cta-row">
          <button class="btn-detail" data-id="${p.id}">Détails</button>
          <a class="btn-amazon" href="${p.amazonUrl}" target="_blank" rel="noopener noreferrer">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9l-7-7z"/></svg>
            Amazon
          </a>
        </div>
      </div>
    </div>
  </div>`;
}
 
function getCatLabel(cat) {
  const map = { pc:'PC Gaming', tv:'Télévision', camera:'Caméra', peripheral:'Périphérique', audio:'Audio', smartphone:'Smartphone', console:'Console' };
  return map[cat] || cat;
}
 
/* ══ RENDU GRILLE ══ */
function renderGrid() {
  const list = getFiltered();
  const half = Math.ceil(list.length / 2);
  const grid1 = list.slice(0, half);
  const grid2 = list.slice(half);
 
  document.getElementById('productsGrid').innerHTML = grid1.map(renderCard).join('');
  document.getElementById('productsGrid2').innerHTML = grid2.map(renderCard).join('');
  document.getElementById('resultsCount').textContent = `${list.length} produit${list.length > 1 ? 's' : ''}`;
 
  attachCardListeners();
}
 
function attachCardListeners() {
  document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', e => {
      if (e.target.closest('.card-compare-btn') || e.target.closest('.btn-amazon') || e.target.closest('.btn-detail')) return;
      openModal(parseInt(card.dataset.id));
    });
  });
  document.querySelectorAll('.btn-detail').forEach(btn => {
    btn.addEventListener('click', () => openModal(parseInt(btn.dataset.id)));
  });
  document.querySelectorAll('.card-compare-btn').forEach(btn => {
    btn.addEventListener('click', e => { e.stopPropagation(); toggleCompare(parseInt(btn.dataset.id)); });
  });
}
 
/* ══ MODAL PRODUIT ══ */
function openModal(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
 
  const allSpecs = p.specs.map(s => `
    <div class="modal-spec-row">
      <span class="modal-spec-label">${s.label}</span>
      <span class="modal-spec-value">${s.value}</span>
    </div>`).join('');
 
  const allScores = p.scores.map(s => `
    <div class="modal-score-row">
      <span class="modal-score-label">${s.label}</span>
      <div class="modal-score-bar"><div class="modal-score-fill" style="width:${s.val*10}%;background:${s.color}"></div></div>
      <span class="modal-score-val" style="color:${s.color}">${s.val}/10</span>
    </div>`).join('');
 
  const tags = p.tags.map(t => `<span class="modal-tag">${t}</span>`).join('');
  const pros = p.pros.map(pr => `<div class="pro-item">${pr}</div>`).join('');
  const cons = p.cons.map(c => `<div class="con-item">${c}</div>`).join('');
 
  document.getElementById('modalContent').innerHTML = `
    <div class="modal-header">
      <div class="modal-icon" style="background:${p.color}">${p.icon}</div>
      <div>
        <div class="modal-title">${p.name}</div>
        <div class="modal-brand">${p.brand} · ${p.year} · ${getCatLabel(p.cat)}</div>
        <div class="modal-tags">${tags}</div>
      </div>
    </div>
    <div class="modal-body">
      <div>
        <div class="modal-section">
          <div class="modal-section-title">Fiche technique complète</div>
          ${allSpecs}
        </div>
        <div class="modal-section">
          <div class="modal-section-title">Points forts & faibles</div>
          <div class="modal-pros-cons">
            <div class="pros-list">${pros}</div>
            <div class="cons-list">${cons}</div>
          </div>
        </div>
      </div>
      <div>
        <div class="modal-section">
          <div class="modal-section-title">Scores TechPeak</div>
          <div class="modal-scores">${allScores}</div>
        </div>
        <div class="modal-section">
          <div class="modal-section-title">Notre verdict</div>
          <div class="modal-verdict">
            <strong>⭐ Note globale : ${p.rating}/10</strong>
            <p>${p.verdict}</p>
          </div>
        </div>
      </div>
    </div>
    <a class="modal-amazon-btn" href="${p.amazonUrl}" target="_blank" rel="noopener noreferrer">
      🛒 Voir le prix sur Amazon — ${p.priceDisplay}
    </a>
    <div class="modal-affiliate-note">* Lien affilié Amazon. Le prix peut varier. Votre achat nous aide à maintenir ce site gratuitement.</div>
  `;
 
  document.getElementById('modalOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
 
document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalOverlay').addEventListener('click', e => { if (e.target === e.currentTarget) closeModal(); });
 
function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
  document.body.style.overflow = '';
}
 
/* ══ COMPARATEUR ══ */
function toggleCompare(id) {
  const idx = state.compareList.indexOf(id);
  if (idx > -1) {
    state.compareList.splice(idx, 1);
  } else {
    if (state.compareList.length >= 3) {
      alert('Vous pouvez comparer au maximum 3 produits.');
      return;
    }
    state.compareList.push(id);
  }
  updateCompareWidget();
  renderGrid();
}
 
function updateCompareWidget() {
  const list = document.getElementById('compareList');
  const btn = document.getElementById('openCompare');
  list.innerHTML = state.compareList.map(id => {
    const p = products.find(x => x.id === id);
    return `<div class="compare-item">${p.icon} ${p.name} <button data-id="${id}">✕</button></div>`;
  }).join('');
  list.querySelectorAll('button').forEach(b => b.addEventListener('click', () => toggleCompare(parseInt(b.dataset.id))));
  btn.style.display = state.compareList.length >= 2 ? 'block' : 'none';
}
 
document.getElementById('openCompare').addEventListener('click', openCompareModal);
 
function openCompareModal() {
  const items = state.compareList.map(id => products.find(x => x.id === id));
  const cols = items.length + 1;
  const colStyle = `grid-template-columns: 160px ${items.map(() => '1fr').join(' ')}`;
 
  const headerRow = `<div class="compare-row compare-row-header" style="${colStyle}">
    <div class="compare-cell">Caractéristique</div>
    ${items.map(p => `<div class="compare-cell">${p.icon} ${p.name}</div>`).join('')}
  </div>`;
 
  const rows = [
    { label: 'Marque', key: p => p.brand },
    { label: 'Prix', key: p => p.priceDisplay },
    { label: 'Note', key: p => `${p.rating}/10` },
    { label: 'Avis', key: p => p.reviews.toLocaleString('fr-FR') },
    { label: 'Année', key: p => p.year },
    ...items[0].specs.slice(0, 5).map((s, i) => ({ label: s.label, key: p => p.specs[i]?.value || '—' }))
  ];
 
  const dataRows = rows.map(r => `
    <div class="compare-row" style="${colStyle}">
      <div class="compare-cell" style="color:var(--text4);font-size:0.78rem">${r.label}</div>
      ${items.map(p => `<div class="compare-cell">${r.key(p)}</div>`).join('')}
    </div>`).join('');
 
  document.getElementById('compareContent').innerHTML = `
    <div class="compare-header">Comparaison de ${items.length} produits</div>
    <div class="compare-grid">${headerRow}${dataRows}</div>`;
 
  document.getElementById('compareOverlay').classList.add('open');
  document.body.style.overflow = 'hidden';
}
 
document.getElementById('compareClose').addEventListener('click', () => {
  document.getElementById('compareOverlay').classList.remove('open');
  document.body.style.overflow = '';
});
document.getElementById('compareOverlay').addEventListener('click', e => {
  if (e.target === e.currentTarget) { document.getElementById('compareOverlay').classList.remove('open'); document.body.style.overflow = ''; }
});
 
/* ══ FILTRES ══ */
document.querySelectorAll('[data-cat]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('[data-cat]').forEach(b => b.classList.remove('chip--active'));
    btn.classList.add('chip--active');
    state.activeCategory = btn.dataset.cat;
    renderGrid();
  });
});
 
document.querySelectorAll('[data-price]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('[data-price]').forEach(b => b.classList.remove('chip--active'));
    btn.classList.add('chip--active');
    state.activePrice = btn.dataset.price;
    renderGrid();
  });
});
 
document.querySelectorAll('[data-usage]').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('[data-usage]').forEach(b => b.classList.remove('chip--active'));
    btn.classList.add('chip--active');
    state.activeUsage = btn.dataset.usage;
    renderGrid();
  });
});
 
document.getElementById('sortSelect').addEventListener('change', e => {
  state.sortBy = e.target.value;
  renderGrid();
});
 
document.getElementById('globalSearch').addEventListener('input', e => {
  state.search = e.target.value.toLowerCase().trim();
  renderGrid();
});
 
document.getElementById('resetFilters').addEventListener('click', () => {
  state.activeCategory = 'all';
  state.activePrice = 'all';
  state.activeUsage = 'all';
  state.sortBy = 'rating';
  state.search = '';
  document.getElementById('globalSearch').value = '';
  document.getElementById('sortSelect').value = 'rating';
  document.querySelectorAll('[data-cat]').forEach(b => b.classList.toggle('chip--active', b.dataset.cat === 'all'));
  document.querySelectorAll('[data-price]').forEach(b => b.classList.toggle('chip--active', b.dataset.price === 'all'));
  document.querySelectorAll('[data-usage]').forEach(b => b.classList.toggle('chip--active', b.dataset.usage === 'all'));
  renderGrid();
});
 
/* ══ TOP PICKS SIDEBAR ══ */
function renderTopPicks() {
  const top = [...products].sort((a,b) => b.rating - a.rating).slice(0, 5);
  const ranks = ['gold','silver','bronze','',''];
  document.getElementById('topPicks').innerHTML = top.map((p, i) => `
    <div class="top-pick-item" onclick="openModal(${p.id})">
      <span class="tpi-rank ${ranks[i]}">${i+1}</span>
      <div class="tpi-icon">${p.icon}</div>
      <div>
        <div class="tpi-name">${p.name}</div>
        <div class="tpi-price">${p.priceDisplay}</div>
      </div>
    </div>`).join('');
}
 
/* ══ HERO FLOAT CARD ══ */
function renderHeroCard() {
  const top = [...products].sort((a,b) => b.rating - a.rating)[0];
  const el = document.getElementById('heroFloatCard');
  if (!el) return;
  el.innerHTML = `
    <div style="padding:1.25rem;height:100%;display:flex;flex-direction:column;justify-content:space-between">
      <div style="display:flex;align-items:center;gap:10px">
        <div style="font-size:2rem">${top.icon}</div>
        <div>
          <div style="font-family:'Syne',sans-serif;font-weight:700;font-size:0.9rem">${top.name}</div>
          <div style="font-size:0.7rem;color:#94a3b8">${top.brand}</div>
        </div>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:flex-end">
        <div>
          <div style="font-size:0.65rem;color:#64748b;text-transform:uppercase;letter-spacing:1px">Note TechPeak</div>
          <div style="font-family:'Syne',sans-serif;font-size:1.8rem;font-weight:800;color:#f59e0b">${top.rating}</div>
        </div>
        <div style="font-family:'Syne',sans-serif;font-size:1.1rem;font-weight:800;color:#10b981">${top.priceDisplay}</div>
      </div>
    </div>`;
}
 
/* ══ INIT ══ */
document.addEventListener('DOMContentLoaded', () => {
  renderGrid();
  renderTopPicks();
  renderHeroCard();
 
  document.querySelectorAll('.hstat-n').forEach(el => {
    animateNumber(el, parseInt(el.dataset.target));
  });
 
  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.querySelectorAll('.score-bar-fill, .modal-score-fill').forEach(bar => {
          const w = bar.style.width;
          bar.style.width = '0';
          setTimeout(() => bar.style.width = w, 100);
        });
      }
    });
  }, { threshold: 0.1 });
 
  document.querySelectorAll('.product-card').forEach(c => observer.observe(c));
});
 
 
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  GUIDE POUR AJOUTER DES PRODUITS ET DES PUBLICITÉS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 
─── AJOUTER UN PRODUIT ───────────────────────────────────────────
Dans le tableau "products" du JS, copie un objet et modifie :
  - id: numéro unique (incrémente le dernier)
  - cat: "pc" | "tv" | "camera" | "peripheral" | "audio" | "smartphone" | "console"
  - usage: tableau parmi ["esport","pro","content","casual","family"]
  - amazonUrl: remplace "#amazon-lien-ici" par ton lien Amazon affilié
  - badge: "new" | "top" | "deal" | "pro" | null
 
─── LIEN AMAZON AFFILIÉ ─────────────────────────────────────────
1. Crée un compte Amazon Partenaires (affiliate-program.amazon.fr)
2. Génère un lien tracké pour chaque produit
3. Remplace amazonUrl: "#amazon-lien-ici" par l'URL complète
   Exemple: amazonUrl: "https://amzn.to/3xXxXxX"
   Le lien apparaît sur les boutons "Amazon" des cartes
   ET dans le bouton principal de la modal produit.
 
─── CONFIGURER LES ESPACES PUBLICITAIRES ────────────────────────
3 emplacements prévus dans le HTML :
 
1. BANNIÈRE EN-TÊTE (#adTop)
   → Remplace le contenu de .ad-content par ton code banner
   → Format idéal : 728×90 px (leaderboard)
 
2. ENCART SIDEBAR (#adSidebar)
   → Remplace .ad-sidebar-content par ton code banner
   → Format idéal : 300×250 px (medium rectangle)
 
3. BANNIÈRE MILIEU PAGE (#adInline)
   → Remplace .ad-inline-content par ton code
   → Format idéal : 728×90 px (leaderboard)
 
Pour Google AdSense, colle simplement le code script AdSense
à l'intérieur de ces div en remplacement du contenu placeholder.
 
─── AJOUTER UNE CATÉGORIE ───────────────────────────────────────
1. Dans le HTML, ajoute : <button class="chip" data-cat="ma-cat">Label</button>
2. Dans le JS, dans getCatLabel(), ajoute : ma-cat: 'Mon Label'
3. Crée tes produits avec cat: "ma-cat"
 