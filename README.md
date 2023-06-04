# Viewtouch_POS

This repository contains the source code for ViewTouch, a modern and customizable Point of Sale (POS) system for the hospitality industry. Built with React, Flask, and PostgreSQL, it provides user-friendly interfaces for managing orders, tracking sales data, and handling bookings efficiently in foodservice establishments.

This project touches on CRUD (Create, Read, Update and Delete)
Data will be sent to the server asynchronously with the help of REACT.

### About the Tech Stack

- Flask - this is a library, it is going to be the web-server framework of my choice
- SQLAlchemy - like Psycopg2 but helps with connecting to a Flask application
- Flask-SQLAlchemy - this is a flask extension for SQLAlchemy to easily work with SQLAlchemy and a flask application
- REACT - allows web pages to be updated fast through asynchronously exchanging small amounts of data back and forth with the server. It allows only a part of a web page to be updated without reloading the entire page.

### Psycopg2, SQLAlchemy & Flask-SQLAlchemy

_All these helps connect the postgres database to a Flask application_

### Required Installation

- Python
- Pip
- Flask
  run `pip3 install flask` or `pip install flask`
- Flask-SQLAlchemy
  run `pip3 install flask-sqlalchemy` or `pip install flask-sqlalchemy`

### Instructions for running the code and seeing output

- run `select * from users;` on your terminal to see newly created todos
- run `python3 app.py` on your terminal

#### Table

```
viewtouchDB=# select \* from users;
id | username | password | category
----+-------------------+--------------+----------
1 | gosh@gmail.com | password | manager
2 | cust@gmail.com | password_2 | customer
4 | cust_2@gmail.com | password_3 |
5 | cust_3@gmail.com | password_4 |
6 | cust_5@gmail.com | password_3 | waiter
7 | cust_6@gmail.com | password_6 | waiter
9 | mike@gmail.com | mikepassword | cashier
10 | miranda@gmail.com | miranda | cashier
12 | charles@gmail.com | charles1234 | waiter
8 | mike@gmail.com | mikepassword | customer
11 | charles@gmail.com | charles1234 | customer
13 | gabriel@gmail.com | gabrielppass | customer
(12 rows)

viewtouchDB=#
```

- on your browser enter 127.0.0.1:5000 or localhost:5000, the webpage should show all the list of users in this page
