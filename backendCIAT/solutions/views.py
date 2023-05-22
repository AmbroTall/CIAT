import random

from rest_framework import viewsets
from .models import Animal, DeforestationArea
from .serializers import AnimalSerializer, DeforestationAreaSerializer
from rest_framework.views import APIView
from rest_framework.response import Response

class LivestockIdentificationView(APIView):
    def get(self, request):
        deforestation_areas = DeforestationArea.objects.values_list('latitude', 'longitude')
        livestock_in_deforested_areas = Animal.objects.filter(
            latitude__in=[area[0] for area in deforestation_areas],
            longitude__in=[area[1] for area in deforestation_areas]
        )
        serializer = AnimalSerializer(livestock_in_deforested_areas, many=True)
        return Response(serializer.data)

class RiskAssessmentView(APIView):
    def get(self, request):
        deforestation_areas = DeforestationArea.objects.values_list('latitude', 'longitude')
        livestock = Animal.objects.all()
        risk_assessment = []
        for animal in livestock:
            if (animal.latitude, animal.longitude) in deforestation_areas:
                risk = 'high'
            else:
                risk = 'low'
            risk_assessment.append({'animal_id': animal.pk, 'risk': risk, 'owner': animal.owner, "latitude": animal.latitude, "longitude": animal.longitude})
        return Response(risk_assessment)


class AnimalViewSet(viewsets.ModelViewSet):
    queryset = Animal.objects.all()
    serializer_class = AnimalSerializer


class DeforestationAreaViewSet(viewsets.ModelViewSet):
    queryset = DeforestationArea.objects.all()
    serializer_class = DeforestationAreaSerializer
