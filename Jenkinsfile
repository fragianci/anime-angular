pipeline {
    agent {
        docker {
            image 'node:20'
        }
    }

    environment {
        DOCKER_IMAGE = "anime-angular"
        DOCKER_TAG = "latest"
        REGISTRY_URL = "https://registry.hub.docker.com"
        REGISTRY_NAME = "docker"
        PROJECT_DIR = "anime-angular"
    }

    stages {
        stage('Clonare Repository') {
            steps {
                git 'https://github.com/fragianci/anime-angular.git'
            }
        }

        stage('Installare Dipendenze') {
            steps {
                script {
                    sh 'npm install'  // Installa dipendenze per Angular
                }
            }
        }

        stage('Deploy dell\'App') {
            steps {
                script {
                    sh 'npm run patch:deploy'  // Esegui la build per produzione
                }
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh 'docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} .'  // Crea l'immagine Docker
                }
            }
        }

        stage('Test con TestContainers') {
            steps {
                script {
                    sh 'docker run --rm ${DOCKER_IMAGE}:${DOCKER_TAG} ng test --watch=false --browsers=ChromeHeadless'  // Esegui i test (ad esempio unit test)
                    // sh 'npm run test -- --watch=false --browsers=ChromeHeadless'
                }
            }
        }

        stage('Deploy') {
            steps {
                script {
                    sh 'docker run -d -p 3000:3000 ${DOCKER_IMAGE}:${DOCKER_TAG}'  // Esegui il container in modalità detached
                }
            }
        }

        stage('Push Docker Image') {
            when {
                branch 'main'  // Esegui questo step solo se il branch è "main"
            }
            steps {
                script {
                    sh 'docker tag ${DOCKER_IMAGE}:${DOCKER_TAG} ${REGISTRY_URL}/${REGISTRY_NAME}/${DOCKER_IMAGE}:${DOCKER_TAG}'  // Tagga l'immagine per il registry
                    sh 'docker push ${REGISTRY_URL}/${REGISTRY_NAME}/${DOCKER_IMAGE}:${DOCKER_TAG}'  // Push dell'immagine nel registry
                }
            }
        }
    }

    post {
        always {
            cleanWs()  // Pulisce il workspace al termine
        }
        success {
            echo 'La pipeline è stata completata con successo!'
        }
        failure {
            echo 'C\'è stato un errore durante l\'esecuzione della pipeline.'
        }
    }
}
