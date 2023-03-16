from flask import current_app

from app import db


@current_app.cli.command('init-db')
def init_db():
  db.create_all()

if __name__ == '__main__':
    init_db()