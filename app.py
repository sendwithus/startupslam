import bottle


@bottle.get('/')
def index():
    return bottle.static_file('index.html', root="")

@bottle.get('/static/<filepath:path>')
def server_static(filepath):
    return bottle.static_file(filepath, root='static')

application = bottle.default_app()
