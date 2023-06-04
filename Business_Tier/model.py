import os, sys

current_dir = os.path.dirname(os.path.abspath(__file__))
data_access_dir = os.path.join(current_dir, '..', 'Data_Access_Tier')

# Add the data_access_dir to the Python path
sys.path.insert(0, data_access_dir)

from Data_Access_Tier.config import db, app

class User(db.Model):
    __tablename__ = 'users'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    username = db.Column(db.String(), nullable=False)
    password = db.Column(db.String(), nullable=False)
    category = db.Column(db.String(), default='customer')
    orders = db.relationship('Order', backref='user', lazy=True)
    bookings = db.relationship('Booking', backref='user', lazy=True)

    def __repr__(self):
        return f'<User Id: {self.id}, username: {self.username}, category: {self.category}>'

class Order(db.Model):
    __tablename__ = 'orders'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    status = db.Column(db.Boolean, nullable=False, default=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    items = db.relationship('Item', backref='order', lazy=True)

    def __repr__(self):
        return f'<Order Id: {self.id}, status: {self.status}, user_id: {self.user_id}>'

class Booking(db.Model):
    __tablename__ = 'bookings'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    table = db.Column(db.Integer, nullable=False)
    description = db.Column(db.String(), nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    accepted = db.Column(db.Boolean, nullable=False, default=False)

    def __repr__(self):
        return f'<Booing Id: {self.id}, table: {self.table}, description: {self.description}, user_id: {self.user_id}, accepted: {self.accepted}>'

class Item(db.Model):
    __tablename__ = 'items'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    item_num = db.Column(db.Integer, nullable=False)
    quantity = db.Column(db.Integer, nullable=False, default=1)
    order_id = db.Column(db.Integer, db.ForeignKey('orders.id'), nullable=False)

    def __repr__(self):
        return f'<Item Id: {self.id}, item_num: {self.item_num}, quantity: {self.quantity}, order_id: {self.order_id}>'

class Price(db.Model):
    __tablename__ = 'prices'
    id = db.Column(db.Integer, primary_key=True, autoincrement=True)
    item_num = db.Column(db.Integer, nullable=False)
    amount = db.Column(db.Float, nullable=False, default=0.5)

    def __repr__(self):
        return f'<Price Id: {self.id}, item_num: {self.item_num}, amount: {self.amount}>'






# with app.app_context():
#     db.create_all()
