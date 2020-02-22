/**
 * Config for JEST, testing
 **/

module.exports = {
	rootDir: 'src',
	verbose: true,
	moduleFileExtensions: [
		'js',
		'json',
		'vue'
	],
	transform: {
		// For vue
		'.*\\.(vue)$': 'vue-jest',
		'^.+\\.js$': 'babel-jest'
	},
	collectCoverage: true,
	collectCoverageFrom: [
		'**/*.{vue}',
		'!**/node_modules/**'
	],
	coverageReporters: [
		'text', 'html'
	],
	// Coverage, 80% at least
	coverageThreshold: {
		'global': {
			'branches': 80,
			'functions': 80,
			'lines': 80,
			'statements': 80
		}
	},
	moduleNameMapper: {
		'^.+\\.(css|less|scss)$': 'babel-jest',
		'\\.(jpg|jpeg|png|gif|eot|svg|ttf|woff|woff2)$': 'identity-obj-proxy'
	},
};
