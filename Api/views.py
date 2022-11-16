from rest_framework.viewsets import ModelViewSet
from . models import Customers
from . serializers import *


# Create your views here.  
class ReactView(ModelViewSet):
    serializer_class = ReactSerializer
    queryset= Customers.objects.all()