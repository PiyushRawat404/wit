package main


import (
	"fmt"
	"golang/routes"
	"github.com/gin-gonic/gin"
	"golang/database"
)

func main(){
	 database.ConnectDB()

	r := gin.Default()

	routes.UserRoutes(r)

	fmt.Println("Server running on port http://localhost:8000")
	r.Run(":8000")
}



