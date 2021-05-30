exports.config = {
	tests: '../browser/**/*.js',
	output: '../_output',
	helpers: {
		FileSystem: {},
		Puppeteer: {
			url: 'https://localhost',
			show: false,
			windowSize: '1200x900'
		}
	},
	multiple: { // https://codecept.io/helpers/Puppeteer-firefox.html#run-multiple
		parallel: {
			chunks: process.env.THREADS || 30,
			browsers: [
				{
					browser: 'chrome',
					windowSize: '1920x1080'
				}, {
					browser: 'firefox',
					windowSize: '1920x1080'
				}
			]
		}
	},
	include: {
		I: './steps_file.js'
	},
	name: 'QA',
	plugins: {},
	mocha: {
		"reporterOptions": {
			"codeceptjs-cli-reporter": {
				"stdout": "-",
				"options": {
					"verbose": false,
					"steps": true
				}
			},
			"mochawesome": {
				"stdout": "./_output/console.log",
				"options": {
					"reportDir": "./_output",
					"reportFilename": "index"
				}
			},
			"mocha-junit-reporter": {
				"stdout": "./_output/console.log",
				"options": {
					"mochaFile": "./_output/result.xml"
				},
				"attachments": true //add screenshot for a failed test
			}
		}
	}
};
