import bcrypt
from flask import Blueprint, render_template, redirect, url_for, flash, request, session
from flask_login import login_user, login_required, logout_user
from sqlalchemy.orm import sessionmaker
from forms import LoginForm, RegisterForm
from database import UserDB, engine
from models import User

accounts = Blueprint('accounts', __name__)

def hash_password(password: str):
    return bcrypt.hashpw(password.encode('utf-8'), bcrypt.gensalt(10))

def check_password(password: str, hashed_password):
    return bcrypt.checkpw(password.encode('utf-8'), hashed_password)

@accounts.route('/login', methods=["GET", "POST"])
def login():
    Session = sessionmaker(bind=engine)
    sessionDB = Session()
    form = LoginForm(request.form)
    if form.validate_on_submit():
        userName = form.username.data
        password = form.password.data
        userDB = sessionDB.query(UserDB).filter_by(username=userName).first()
        if userDB:
            if check_password(password, userDB.password):
                flash('Zalogowano')
                user = User(userDB.id,userDB.username, userDB.password, userDB.email)
                login_user(user)
                session["username"] = user.username
                return redirect(url_for('index'))
            else:
                flash('Niepoprawne hasło')
                return redirect(url_for('accounts.login'))
        return render_template('login.html', form=form)
    return render_template('login.html', form=form)


@accounts.route('/register', methods=["GET", "POST"])
def register():
    Session = sessionmaker(bind=engine)
    session = Session()
    form = RegisterForm(request.form)
    print(form.validate_on_submit())
    if form.validate_on_submit():
        hashed_password = hash_password(form.password.data)
        user = session.query(UserDB).filter_by(username=form.username.data).first()
        if user:
            flash('Użytkownik już istnieje')
            return redirect(url_for('accounts.register'))
        else:
            new_user = UserDB(username=form.username.data,
            password=hashed_password, email=form.email.data)
            session.add(new_user)
            session.commit()
            return redirect("/login")
    return render_template('register.html', form=form)

@accounts.route("/logout")
@login_required
def logout():
    logout_user()
    session.clear()
    return redirect("/login")