from django.urls import path
from .views import AnimalViewSet, DeforestationAreaViewSet, LivestockIdentificationView, RiskAssessmentView

urlpatterns = [
    path('livestock-identification/', LivestockIdentificationView.as_view(), name='livestock-identification'),
    path('risk-assessment/', RiskAssessmentView.as_view(), name='risk-assessment'),

    path('api/animals/', AnimalViewSet.as_view({'get': 'list', 'post': 'create'}), name='animal-list'),
    path('api/animals/<int:pk>/', AnimalViewSet.as_view({'get': 'retrieve', 'put': 'update', 'patch': 'partial_update', 'delete': 'destroy'}), name='animal-detail'),
    path('api/deforestation/', DeforestationAreaViewSet.as_view({'get': 'list', 'post': 'create'}), name='deforestation-list'),
    path('api/deforestation/<int:pk>/', DeforestationAreaViewSet.as_view({'get': 'retrieve', 'put': 'update', 'patch': 'partial_update', 'delete': 'destroy'}), name='deforestation-detail'),
]
