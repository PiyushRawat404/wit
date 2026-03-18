package routes
import (
"golang/handler"
"github.com/gin-gonic/gin"
)


func UserRoutes(r *gin.Engine) {
	r.GET("/users", handler.GetUsers)
	r.POST("/users/create", handler.CreateUser)
	r.PUT("/users/:id", handler.UpdateUser)
	r.DELETE("/users/:id", handler.DeleteUser)
}