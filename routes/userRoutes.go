package routes
import (
	"golang/handler"
	"golang/middleware"

	"github.com/gin-gonic/gin"
)



func UserRoutes(r *gin.Engine) {
	r.POST("/register", handler.Register)
	r.POST("/login", handler.Login)

	protected := r.Group("/")
	protected.Use(middleware.AuthMiddleware())

	protected.GET("/users", handler.GetUsers)
	protected.POST("/users", handler.CreateUser)

	
	r.PUT("/users/:id", handler.UpdateUser)
	r.DELETE("/users/:id", handler.DeleteUser)
}


