
class MyRoute{

    constructor(){
        this.routes = new Map();

        window.addEventListener('hashchange', (event)=>{

        });
    }

    on(key, handler) {
        this.routes.set(key, handler);
        return this;
    }

    off() {
        return this;
    }

    navigate() {
        return this;
    }

    resolve() {
        return this;
    }

}

module.exports = MyRoute;