import bottle


@bottle.get('/')
def index():
    return bottle.static_file('index.html', root="")

application = bottle.default_app()
