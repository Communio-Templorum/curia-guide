yodasws.page('pageWelcome').setRoute({
	title: 'Welcoming new members',
	template: 'pages/welcome/welcome.html',
	canonicalRoute: '/welcome/',
	route: '/welcome/?',
}).on('load', () => {
});
