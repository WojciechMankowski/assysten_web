from flask_login import UserMixin


class User(UserMixin):

    def __init__(self, id, username, password, email):
        self.id = id
        self.username = username
        self.password = password
        self.email = email

    def __repr__(self):
        return f"User('{self.username}', '{self.email}')"

    def get(id):
        return id