package database

import (
	"fmt"
  "gorm.io/driver/postgres"
  "gorm.io/gorm"
  "golang/model"
//   "github.com/joho/godotenv"
)
var DB *gorm.DB

func ConnectDB(){
dsn := "host=localhost user=postgres password= dbname=database port=5432 sslmode=disable search_path=public"
db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
 if err != nil {
        panic("failed to connect database")
    }
 fmt.Println("Connected to DB")
DB=db
DB.AutoMigrate(&model.User{})

}