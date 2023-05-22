from rest_framework import serializers
from .models import Animal, DeforestationArea

class AnimalSerializer(serializers.ModelSerializer):
    class Meta:
        model = Animal
        fields = '__all__'

class DeforestationAreaSerializer(serializers.ModelSerializer):
    class Meta:
        model = DeforestationArea
        fields = '__all__'
