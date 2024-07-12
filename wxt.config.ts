import { defineConfig } from 'wxt';

// See https://wxt.dev/api/config.html
export default defineConfig({
	outDir: 'dist',
	srcDir: "src",
	manifest: {
		version: '1.0.0',
	},
	modules: ['@wxt-dev/module-vue'],
	imports: {
		addons: {
			vueTemplate: true,
		},
	},
});
