from django.db import models
from django.contrib.auth.models import User

class Search(models.Model):
    search_data=models.CharField(max_length=100)
    response=models.CharField(max_length=100,default="")
    user=models.ForeignKey(User,on_delete=models.CASCADE)
# Create your models here.


