from flask import Flask, jsonify, request
# from Business_Tier.model import User, Order, Admin
from flask_marshmallow import Marshmallow
from flask_cors import CORS

import os, sys

current_dir = os.path.dirname(os.path.abspath(__file__))
business_dir = os.path.join(current_dir, '..')

# Add the business_dir to the Python path
sys.path.insert(0, business_dir)

from Business_Tier.model import User, Order, Booking, Item, Price
from Data_Access_Tier.config import initialize_app, db

app = Flask(__name__)
CORS(app)
# db.init_app(app)
initialize_app(app)

ma = Marshmallow(app)

class UserSchema(ma.Schema):
    class Meta:
        fields = ('id', 'username', 'password', 'category')

user_schema = UserSchema()
users_schema = UserSchema(many=True)

@app.route('/login', methods=['POST'])
def login():
    # Retrieve the username and password from the request data
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')

    user = User.query.filter_by(username=username, password=password).first()

    if user:
        # User exists, return a successful response
        response = {
            'isLoggedIn': True,
            'category': user.category,
            'userId': user.id
        }
    else:
        # User does not exist, return an error response
        response = {
            'isLoggedIn': False,
            'error': 'Invalid username or password'
        }

    return jsonify(response)

# API routes and logic
@app.route('/admin_users', methods=['GET'])
def get_users():
    users = User.query.filter(User.category.in_(["manager", "cashier", "waiter"])).all()
    results = users_schema.dump(users)

    print(results)
    # Convert users to JSON or customize the response as needed
    return jsonify(results)

@app.route('/create_user', methods=['POST'])
def create_user():
    data = request.json

    # Extract the necessary information from the request body
    name = request.json.get('name')
    password = request.json.get('password')
    category = request.json.get('category')

    # Create a new User instance
    new_user = User(username=name, password=password, category=category)

    # Add the new user to the session
    db.session.add(new_user)

    # Commit the changes to the database
    db.session.commit()

    # Return the user ID in the response
    return jsonify(message='User credentials sent to user')

@app.route('/booking', methods=['POST'])
def create_order():
    # Handle creating a new order based on the request data
    # You can access the request data using request.json
    return jsonify({'message': 'Order created successfully'})

# Other API routes and logic

# if __name__ == '__main__':
#     app.run()

if __name__ == '__main__':
   app.debug = True
   app.run(host="0.0.0.0")
