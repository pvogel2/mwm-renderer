import nodeResolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

const plugins = [
	nodeResolve(), // so Rollup can find `ms`
	commonjs() // so Rollup can convert `ms` to an ES module
];

const globals = {
	three: 'THREE',
	'three/addons/controls/OrbitControls.js': 'OrbitControls',
};

export default [
	{
		input: 'src/js/renderer.js',
		external: ['three', 'three/addons/controls/OrbitControls.js'],
		output: {
			globals,
			name: 'mwm',
			file: 'dist/renderer.js',
			format: 'umd'
		},
		plugins,
	},
  {
    external: ['three', 'three/addons/controls/OrbitControls.js'],
    input: 'src/js/renderer.js',
    plugins,
    output: {
      globals,
      file: 'dist/js/renderer.js',
      format: 'iife',
      name: 'mwm'
    },
  }, 
  {
    external: ['three', 'three/addons/controls/OrbitControls.js'],
    input: 'src/js/renderer.js',
    plugins,
		output: {
			name: 'mwm',
			file: 'dist/jsm/renderer.js',
			format: 'es'
		},
  }, 
];