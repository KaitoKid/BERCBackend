# BERCBackend

# Setup
1. Clone repo
2. Install virtualenv and use it. Make sure you have Python 3.5+ installed and pip is associated with it. You can test with `python --version` and `pip --version`.

## How to setup virtualenv
1. Install: `pip install virtualenv`
2. `cd` into the root directory of the repo
3. Create virtualenv named *env*: `virtualenv env`
4. Start it: `source my_project/bin/activate`
5. Install all of the required python packages with `pip install -r requirements.txt`
6. If you install any new python packages with pip, make sure to freeze them with `pip freeze > requirements.txt`
7. Stop the virtualenv with: `deactivate`

## Migrations
Django is weird, you don't need to worry about migrations. Everytime you change a model and want to run the server, you want to make these commands:
1. `python manage.py makemigrations`
2. `python manage.py migrate`
Bam. You're done.

## Start server
1. All of your work should be inside the directory `solar`
2. Your models go in `models.py`, your controllers go in the `views.py` (it's weird), and your URLs go into `urls.py`
3. You can run the server by calling `python manage.py runserver`

## Other
1. Your `superuser` was created with username `admin` and password `gobears123`
2. The project was initialized as 'berc' but the app itself is named 'solar'

## Where to learn
1. Setup was followed: http://www.django-rest-framework.org/tutorial/quickstart/
