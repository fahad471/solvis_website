# import sqlite3
# import hashlib
# import socket
# import threading

# server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
# server.bind(("localhost", 9999))

# server.listen()

# def handle_connection(c):
#     c.send("Username: ".encode())
#     username = c.recv(1024).decode()
#     c.send("Password: ".encode())
#     password = c.recv(1024)
#     password = hashlib.sha256(password).hexdigest()
    
#     conn = sqlite3.connect("userdata.db")
#     cur = conn.cursor()
    
#     cur.execute("SELECT * FROM userdata WHERE username = ? AND password = ?", (username, password))
    
#     if cur.fetchall():
#         c.send ("Login succesfull!".encode())
#     else:
#         c.send ("Login failed!".encode())
        
#         while True:
#           client, addr = server.accept()
#           threading.Thread(target=handle_connection, args = (client,)).start()  
# import sqlite3
# import hashlib
# import socket
# import threading

# server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
# server.bind(("localhost", 9999))
# server.listen()

# def handle_connection(c):
#     c.send("Username: ".encode())
#     username = c.recv(1024).decode()
    
#     c.send("Password: ".encode())
#     password = c.recv(1024).decode()  # Decode the password bytes before hashing
#     password_hash = hashlib.sha256(password.encode()).hexdigest()

#     conn = sqlite3.connect("userdata.db")
#     cur = conn.cursor()
    
#     cur.execute("SELECT * FROM userdata WHERE username = ? AND password = ?", (username, password_hash))
    
#     if cur.fetchall():
#         c.send("Login successful!".encode())
#     else:
#         c.send("Login failed!".encode())

#     # c.close()  # Close the connection when done

# # Main server loop
# while True:
#     client, addr = server.accept()
#     threading.Thread(target=handle_connection, args=(client,)).start()
import sqlite3
import hashlib
from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def home():
    return render_template('login.html')

@app.route('/login', methods=['POST'])
def login():
    username = request.form.get('username')
    password = request.form.get('password')
    password_hash = hashlib.sha256(password.encode()).hexdigest()

    conn = sqlite3.connect("userdata.db")
    cur = conn.cursor()

    cur.execute("SELECT * FROM userdata WHERE username = ? AND password = ?", (username, password_hash))

    if cur.fetchall():
        return "Login successful!"
    else:
        return "Login failed!"

if __name__ == '__main__':
    app.run(debug=True)
