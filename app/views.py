from app import app


@app.route('/')
@app.route('/home')
def index():
    return mta_Api


@app.route('/projects')
def index():
    return mta_Api
