pipeline {
  agent any

  environment {
    DOCKER_IMAGE = 'anime-angular'
  }

  stages {
    stage('Build') {
      steps {
        script {
          docker.build(DOCKER_IMAGE)
        }
      }
    }

    stage('Test') {
      steps {
        script {
          docker.image(DOCKER_IMAGE).inside {
            sh 'npm run test -- --watch=false --browsers=ChromeHeadless'
          }
        }
      }
    }

    stage('Deploy') {
      steps {
        script {
          docker.image(DOCKER_IMAGE).inside {
            sh 'npm run patch:deploy'
          }
        }
      }
    }
  }
}
