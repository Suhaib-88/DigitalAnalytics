from django.db import models

# Create your models here.
class Customers(models.Model):
    username=models.CharField(max_length=50)
    gender=models.CharField(max_length=10,choices=[('Male','Male'),('Female','Female')])
    age=models.IntegerField()
    height=models.FloatField()


# class Products(models.Model):
#     pass