from .models import Search
from rest_framework import serializers

class SearchSerializer(serializers.ModelSerializer):
    class Meta:
        model = Search
        # field= '__all__'
        exclude = ['user','response']
    # def create(
    #     self,
    #     validated_data
    # ):
    #     search = Search.objects.create(
    #         user=self.context['request'].user,
    #         **validated_data
    #     )
    #     return search
    