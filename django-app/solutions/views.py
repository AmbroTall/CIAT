import random
from faker import Faker

from rest_framework import viewsets
from .models import Animal, DeforestationArea
from .serializers import AnimalSerializer, DeforestationAreaSerializer
from rest_framework.views import APIView
from rest_framework.response import Response

class LivestockIdentificationView(APIView):
    def get(self, request):
        fake = Faker()

        coverage_options = ['Forest', 'Jungle', 'Woodland', 'Savannah', 'Mangrove']
       

        # Generate fake deforestation areas
        deforestation_areas = []
        for _ in range(10):
            deforestation_areas.append(
                (fake.latitude(), fake.longitude())
            )

        for _ in range(50):
            latitude, longitude = fake.random_element(deforestation_areas)
            DeforestationArea.objects.create(
                latitude=latitude,
                longitude=longitude,
                coverage=random.choice(coverage_options)
            )

        # Generate fake livestock data
        livestock_data = []
        for _ in range(100):
            latitude, longitude = fake.random_element(deforestation_areas)
            livestock_data.append({
                'owner': fake.name(),
                'latitude': latitude,
                'longitude': longitude
            })

        # Save fake livestock data to the database
        for data in livestock_data:
            Animal.objects.create(
                owner=fake.name(),
                latitude=data['latitude'],
                longitude=data['longitude']
            )
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
