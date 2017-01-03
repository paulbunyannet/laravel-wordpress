node {
	stage('Preparation') { // for display purposes
		// Get some code from a GitHub repository
		checkout scm
	}
	stage('Build') {
		// Set up dev network that compose expects
		sh "docker network create frontend || true"
		// Build our images
		sh "docker-compose build"
		// Run it
		sh "docker-compose up -d"
		// Show the containers we spun up for display purposes
		sh "docker-compose ps"
		// Wait until the php-fpm process is running so yarn and composer have time to run
		waitUntil {
			def r = sh script: 'docker exec ${SUB_IMAGE_NAME}laravel ps x | grep [f]pm', returnStatus: true
			return (r == 0);
		}
	}
	stage('Test') {
		// Run phpunit in the container
		sh "docker exec ${SUB_IMAGE_NAME}laravel vendor/phpunit/phpunit/phpunit"
	}
	stage('Cleanup') {
		// Bring down and also delete temp volumes to ensure clean tests and free up disk space
		sh "docker-compose down -v"
		sh "docker network rm frontend || true"
	}
}
