from app import app
from flask import request, render_template


@app.route('/')
def home():
    return render_template('home.html')


@app.route('/projects')
def project():
    return render_template('home.html')
