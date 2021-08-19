This is an app that allow the user to select and download a variety of images to use as background for different zoom meetings.

# Zoom background App in React & Redux + Django

```
Zoom background App, with a frontend built in React & Redux and a backend built in Django API.
```

Check out [FRONTEND](https://zoomglam-frontend.herokuapp.com/) here!!

Check out [BACKEND APIs](https://zoomglam-backend.herokuapp.com/) here!!

## Tech used

```
* Frontend : React & Redux
* Backend : Django
```

## How to Install

1. Git Clone

```
git clone https://github.com/superstevy/Zoomglam.git
```

2. Backend setting

```
cd backend
Python -m venv env
(For Mac) source env/bin/activate
(For Windows) env/Scripts\activate
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py runserver
# Open http://localhost:8000/images/
```

3. Frontend setting

```
cd frontend
npm install
npm start
# Open http://127.0.0.1:3000/
```
