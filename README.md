# JANALYA CARE

Application web moderne pour un centre de soins esthétiques, développée avec Angular 17.

## Technologies utilisées

- Angular 17
- SCSS
- Docker
- Nginx

## Fonctionnalités

- Page d'accueil moderne et responsive
- Catalogue des soins
- Témoignages clients
- Système de réservation
- Design élégant et professionnel

## Installation

### Développement local

```bash
# Cloner le repository
git clone git@github.com:oussama-USTS/JANALYA-CARE-D-MO.git
cd janalya-care

# Installer les dépendances
npm install

# Lancer le serveur de développement
npm start
```

### Production avec Docker

```bash
# Construire l'image
docker-compose build

# Lancer l'application
docker-compose up -d
```

L'application sera accessible sur `http://localhost:80`

## Structure du projet

```
janalya-care/
├── src/
│   ├── app/
│   │   ├── components/
│   │   ├── services/
│   │   └── shared/
│   ├── assets/
│   └── styles/
├── Dockerfile
├── docker-compose.yml
└── nginx.conf
```

## Contribution

1. Fork le projet
2. Créer une branche pour votre fonctionnalité (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## License

Ce projet est sous licence MIT.
