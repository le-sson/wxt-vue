export default defineContentScript({
	matches: ['<all_urls>'],
	runAt: 'document_start',
	main() {
		document.addEventListener('DOMContentLoaded', function () {
			let url = window.location.href;
			const patterns = 'https://*.*.com/*';
			if (matchPattern(patterns, url)) {
				
			}
		});
		console.log('Hello content.');
	},
});
