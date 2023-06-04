# from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate

# app = Flask(__name__)

# app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://salt:password@localhost:5432/viewtouchDB'
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# db = SQLAlchemy(app)
# migrate = Migrate(app, db)
# db.init_app(app)

db = SQLAlchemy()
migrate = Migrate()

def initialize_app(app):
    app.config['SQLALCHEMY_DATABASE_URI'] = 'postgresql://salt:password@localhost:5432/viewtouchDB'
    app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
    db.init_app(app)
    migrate.init_app(app, db)
