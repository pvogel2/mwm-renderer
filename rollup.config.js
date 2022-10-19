import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import pkg from './package.json';

export default [
	{
		input: 'src/js/renderer.js',
		output: {
			name: 'mwm',
			file: pkg.browser,
			format: 'umd'
		},
		external: ['three'],
		plugins: [
			nodeResolve(), // so Rollup can find `ms`
			commonjs() // so Rollup can convert `ms` to an ES module
		]
	},
	{
    input: 'src/js/renderer.js',
		plugins: [
			nodeResolve(), // so Rollup can find `ms`
			commonjs() // so Rollup can convert `ms` to an ES module
		],
		external: ['three'],
		output: [
			{ file: pkg.main, format: 'cjs' },
			{ file: pkg.module, format: 'es' }
		]
	}
];