const jsdom = require("jsdom");
const { JSDOM } = jsdom;
const MyRoute = require('../');


describe('myroute', function () {
    it('instance', function () {
        const { window } = new JSDOM('',{
            url: 'http://localhost'
        });

        global.window = window;

        window.history.pushState({}, 'route1', '/route1');
        window.history.pushState({}, 'route2', '/route2');
        console.log(window.location.pathname);
        window.history.back();
        console.log(window.location.pathname);
        new MyRoute();
    })
});