from rest_framework import serializers
from articles.models import Article
from articles.models import Blog


class ArticleSerializer(serializers.ModelSerializer):
	class Meta:
		model = Article
		fields = ('id','title','content')

		read_only_fields = ['id']

	def validate_title(self, value):
		qs = Article.objects.filter(title__iexact=value)

		if self.instance:
			qs = qs.exclude(pk=self.instance.pk)

		if qs.exists():
			raise serializers.ValidationError("The title has already been used")
		return value



class BlogSerializer(serializers.ModelSerializer):
	user = serializers.SerializerMethodField()
	class Meta:
		model = Blog
		fields = ('id',
				'title',
				'description',
				'date',
				'user',
				'quantity',
				'active',
				'upload',
				'image'
				)

		read_only_fields = ['id']

	def get_user(self, obj):
		return obj.user.username

