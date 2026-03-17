package main


import (
	"fmt"
	"net/http"
	"golang/routes"
)

func main(){
		routes.GetUserRoute()
		routes.CreateUserRoute()

	fmt.Println("Server running on port 8000")
	http.ListenAndServe(":8000", nil)
}



