from flask import Flask, jsonify, request
# from Business_Tier.model import User, Order, Admin

import os, sys

current_dir = os.path.dirname(os.path.abspath(__file__))
business_dir = os.path.join(current_dir, '..')

# Add the business_dir to the Python path
sys.path.insert(0, business_dir)

from Business_Tier.model import User

app = Flask(__name__)

# API routes and logic
@app.route('/api/users', methods=['GET'])
def get_users():
    users = User.query.all()
    # Convert users to JSON or customize the response as needed
    return jsonify(users)

@app.route('/api/orders', methods=['POST'])
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
