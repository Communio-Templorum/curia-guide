yodasws.page('pageWelcome').setRoute({
	title: 'welcome',
	template: 'pages/welcome/welcome.html',
	canonicalRoute: '/welcome/',
	route: '/welcome/?',
}).on('load', () => {
});
