import bottle


@bottle.get('/')
def index():
    return bottle.static_file('index.html', root="")

@bottle.get('/feedback')
def index():
    return bottle.redirect('https://sendwithus.wufoo.com/forms/z1fxg2hi06l4k7h/')

@bottle.get('/static/<filepath:path>')
def server_static(filepath):
    return bottle.static_file(filepath, root='static')

application = bottle.default_app()
