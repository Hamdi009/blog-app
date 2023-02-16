from pymongo import MongoClient
client = MongoClient("mongodb+srv://admin:admin@cluster0.1idqljv.mongodb.net/test")

db = client["blog_database"]

collection = db["blog_collection"]