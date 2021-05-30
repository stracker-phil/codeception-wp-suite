exports.config = {
	tests: '../browser/**/*.js',
	output: '../_output',
	timeout: 1800000,
	helpers: {
		FileSystem: {},
		ResembleHelper: {
			require: 'codeceptjs-resemblehelper',
			screenshotFolder: './_output/',
			baseFolder: './_screenshots/base/',
			diffFolder: './_screenshots/diff/'
		},
		Puppeteer: {
			url: 'https://localhost',
			show: true,
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
	mocha: {},
	name: 'QA',
	plugins: {}
};
