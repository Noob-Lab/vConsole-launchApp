// rollup.config.js
// umd
var nodeResolve = require('rollup-plugin-node-resolve');
var commonjs = require('rollup-plugin-commonjs');
var uglify = require('rollup-plugin-uglify');
import html from 'rollup-plugin-html';
var common = require('./rollup.js');
var prod = process.env.NODE_ENV === 'production';

module.exports = {
    input: 'src/launchApp/index.' + common.type,
    output: {
        file: prod ? 'dist/index.aio.min.js' : 'dist/index.aio.js',
        format: 'umd',
        // When export and export default are not used at the same time, set legacy to true.
        // legacy: true,
        name: common.name,
        banner: common.banner,
    },
    plugins: [
        html({
			include: 'src/**/*.html',
			htmlMinifierOptions: {
				collapseWhitespace: true,
				collapseBooleanAttributes: true,
				conservativeCollapse: true,
				minifyJS: true
			}
		}),        
        nodeResolve({
            main: true,
            extensions: [common.type === 'ts' ? '.ts' : '', '.js']
        }),
        commonjs({
            include: 'node_modules/**',
        }),
        common.getCompiler(),
        (prod && uglify())
    ]
};
