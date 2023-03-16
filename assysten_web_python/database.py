from sqlite3 import connect

from sqlalchemy import create_engine, Column, Integer, String
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base

engine = create_engine('sqlite:///database.db', echo=True)
Base = declarative_base()
Session = sessionmaker(bind=engine)
session = Session()

class UserDB(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True)
    username = Column(String)
    email = Column(String)
    password = Column(String)

    def to_json(self):
        return {"id": self.id, "username": self.username, "email": self.email, "password": self.password}

Base.metadata.create_all(engine)

class Database:

    def __init__(self, databasename: str):
        self.conn = connect(databasename)
        self.cursor = self.conn.cursor()
    def __del__(self):
        self.conn.close()

    def executeQuery(self, query: str)->list:
        self.cursor.execute(query)
        return self.cursor.fetchall()

    def addValue(self, query: str):
        self.cursor.execute(query)
        self.conn.commit()



