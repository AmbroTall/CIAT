from django.db import models

class Animal(models.Model):
    latitude = models.FloatField()
    longitude = models.FloatField()
    owner = models.CharField(max_length=50)

    def __str__(self):
        return f'{self.owner}'

class DeforestationArea(models.Model):
    latitude = models.FloatField()
    longitude = models.FloatField()
    coverage = models.CharField(max_length=100)

    def __str__(self):
        return f'{self.coverage}'


