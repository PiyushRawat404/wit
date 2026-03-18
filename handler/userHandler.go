package handler

import (
	"net/http"
	"golang/model"
	"golang/database"
	"github.com/gin-gonic/gin"
)

var Users = model.User{}



func GetUsers(c *gin.Context) {
	var users []model.User
	database.DB.Find(&users)

	c.JSON(http.StatusOK, users)
}
func CreateUser(c *gin.Context) {
	var user model.User
	c.BindJSON(&user)

	database.DB.Create(&user)

	c.JSON(http.StatusOK, user)
}
func UpdateUser(c *gin.Context) {
	id := c.Param("id")

	var user model.User
	database.DB.First(&user, id)

	c.BindJSON(&user)
	database.DB.Save(&user)

	c.JSON(http.StatusOK, user)
}
func DeleteUser(c *gin.Context) {
	id := c.Param("id")

	database.DB.Delete(&model.User{}, id)

	c.JSON(http.StatusOK, gin.H{"message": "Deleted"})
}