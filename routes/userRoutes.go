package routes
import (
"net/http"
"golang/controllers"
)

func GetUserRoute() {
	http.HandleFunc("/users", controllers.GetUsers)
}

func CreateUserRoute() {
	http.HandleFunc("/users/create", controllers.CreateUser)
}