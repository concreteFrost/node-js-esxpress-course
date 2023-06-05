const routing = (request, path) => {

    let status = null;
    switch (request.url) {
        case "/":
            path += 'index.html';
            status = 200
            break;
        case "/home":
            path += 'index.html';
            status = 200
            break;
        case "/about":
            path += "about.html";
            status = 200
            break;
        default:
            path += "404.html";
            status = 404
            break;
    }

    return { path, status }
}

module.exports = routing;