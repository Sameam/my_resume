import flask from "./components/pictures/flask.jpg"
import electron from "./components/pictures/electron.png"
import cifar from "./components/pictures/cifar10.png"
import django from "./components/pictures/django.jpg"

const project = [
  {
    "title":"Education Websites for students supplemental learning",
    "requirement":"Website, Have lessons with different levels, quiz to test the knowledge ",
    "backend":"The website is mainly done using Flask python framework for backend and use SQLite for storing persistent data", 
    "frontend":"The frontend is mainly based on HTML, CSS and JavaScript",
    "url":"https://statistic-study.herokuapp.com",
    "source_code":"https://github.com/Sameam/Project2",
    "image":flask
  }, 
  {
    "title":"Unit Budget",
    "requirement":"Desktop Software, upload files, store all information into Database, get summary report and data visualization",
    "backend":"The website mainly done using Flask framework with SQLite to store Peristent data",
    "frontend":"using HTML, CSS, JavaScript with Electron JS to turn into the Desktop application",
    "source_code":"https://github.com/WentworthJin/Unit_Budget_Planner",
    "image":electron
  },
  {
    "title":"Ecommerce Platform",
    "requirement":"Ecommerce Website that will allow user to upload their products, category, picture and display to user",
    "backend":"The website mainly done using Django framework with SQLite to store Peristent data",
    "frontend":"using ReactJS framework, with React-boostrap for styling",
    "upcoming":"There is still some features to be add on such as payment, and fully integrated with django admin. At the moment, django admin is not fully integrated with the websites.",
    "source_code":"https://github.com/Sameam/ecommerce",
    "image":django
  },
  {
    "title":"Convolutional Neural Network",
    "requirement":"Using CIFAR-10 dataset, able to recognize the picture and make prediction",
    "description":"It done using Python Tensorflow with accuracy acound 80%",
    "image":cifar
  }
]


export default project