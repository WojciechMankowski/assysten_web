from flask import Flask, render_template, request, redirect, url_for, flash
from flask_login import LoginManager, UserMixin, login_user, logout_user, current_user
from accounts import accounts
from api import api
from database import UserDB, session
from models import User

app = Flask(__name__)
app.secret_key = 'supersekretnyklucz'
app.register_blueprint(accounts)
app.register_blueprint(api, url_prefix="/api")


login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'login'


@login_manager.user_loader
def load_user(user_id):
    userDB = session.query(UserDB).filter_by(id=user_id).first()
    user = User(
        username=userDB.username, password=userDB.password, id=userDB.id,
        email=userDB.email
    )
    return user

@app.route('/')
def index():
    print(current_user)
    if current_user.is_authenticated == False:
        return redirect(url_for("accounts.login"))
    return render_template('index.html', name=current_user.username)


if __name__ == '__main__':
    app.run(debug=True)


