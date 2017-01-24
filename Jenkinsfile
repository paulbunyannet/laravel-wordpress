#!groovy
node {
  stage('Upload .env') {
      // Get file using input step, will put it in build directory
      def inputFile = input message: 'Upload file', parameters: [file(name: '.env')]
      // Read contents and write to workspace
      writeFile(file: '.env', text: inputFile.readToString())
  }
	// TODO: Load .env this way
	//properties([[$class: 'EnvInjectJobProperty', info: [loadFilesFromMaster: false, propertiesFilePath: '.env'], keepBuildVariables: true, keepJenkinsSystemVariables: true, on: true], pipelineTriggers([])])
	stage('Preparation') { // for display purposes
		// Get some code from a GitHub repository
		git 'https://github.com/silentdragonz/laravel-wordpress.git'
		// Fix permissions
		sh 'chmod -R 755 storage/ bootstrap/cache/'
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
		// wait 4 minutes before giving up
		timeout(240) {
		    parallel (
		        checkphp: {
		        	waitUntil {
				        def r = sh script: 'docker-compose exec -T laravel ps x | grep [f]pm', returnStatus: true
				        return (r == 0);
			        }
		        },
		        checkdb: {
		            waitUntil {
		                def r = sh script: 'docker-compose exec -T db ls /var/run/mysqld/mysqld.sock', returnStatus: true
		                return (r == 0);
		            }
		        }
		    )
		}
	}
	stage('Test') {
	    // DB slow???
	    //sleep 240
		// Run phpunit in the container
		try {
		    ansiColor('xterm') {
					parallel (
								phpunit: { sh "docker-compose exec -T laravel vendor/bin/phpunit || true" },
								selenium: {
										def cid = sh script: 'docker-compose ps -q laravel', returnStdout: true
										def network = sh( script: "docker inspect -f \"{{ range .NetworkSettings.Networks }}{{.NetworkID}}{{end}}\" ${cid}", returnStdout: true).trim()
									sh "docker run -d --name=\"selenium-${BUILD_NUMBER}\" selenium/standalone-firefox"
									sh "docker network connect --alias selenium ${network} selenium-${BUILD_NUMBER}"
									sh "docker-compose exec -T laravel vendor/bin/codecept run --xml || true"
									sh "docker stop selenium-${BUILD_NUMBER} && docker rm selenium-${BUILD_NUMBER}"
								}
					)
					// some block
        }
		    step([$class: 'XUnitBuilder',
			    thresholds: [[$class: 'FailedThreshold', unstableThreshold: '0']],
			    tools: [[$class: 'JUnitType', pattern: 'tests/_output/*.xml']]])
		} finally {
		    ansiColor('xterm') {
					sh "docker-compose down -v"
					sh "docker network rm frontend || true"
		    }
		}
	}
	stage('Cleanup') {
	  ansiColor('xterm') {
			// Bring down and also delete temp volumes to ensure clean tests and free up disk space
			sh "docker-compose down -v"
			sh "docker network rm frontend || true"
	  }
	}
}
