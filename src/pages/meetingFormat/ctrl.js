yodasws.page('pageMeetingFormat').setRoute({
	title: 'Meeting format',
	canonicalRoute: '/meetingFormat/',
	template(match, ...p) {
		const path = p.join('/').replace(/\/+/g, '/').replace(/^\/|\/$/g, '').split('/').filter(p => p != '');
		if (path.length === 0) {
			return 'pages/meetingFormat/index.html';
		}
		return {
			canonicalRoute: '/meetingFormat/' + path.join('/') + '/',
			template: 'pages/meetingFormat/' + path.join('.') + '.html',
		};
	},
	route: '/meetingFormat(/.*)*',
}).on('load', () => {
	console.log('Page loaded!');
});
