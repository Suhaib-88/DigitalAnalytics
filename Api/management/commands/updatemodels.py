from django.core.management.base import BaseCommand
import pandas as pd
from Api.models import Customers


class Command(BaseCommand):
    help= 'import booms'
    def add_arguments(self, parser) -> None:
        pass
    
    def handle(self, *args, **options):
        df= pd.read_csv('Datasets.csv')
        for USERNAME,GENDER,AGE,HEIGHT in zip(df.Name,df.Gender,df.Age,df.Height):
            models= Customers(username=USERNAME,gender=GENDER,age=AGE,height=HEIGHT)
            models.save()