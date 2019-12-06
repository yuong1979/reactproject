from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class Article(models.Model):
	title = models.CharField(max_length=120)
	content = models.TextField()

	def __str__(self):
		return self.title




def user_directory_path(instance, filename):
	# file will be uploaded to MEDIA_ROOT/user_<id>/<filename>
	return 'user_uploads/user_{0}/{1}'.format(instance.user.id, filename)


class Blog(models.Model):
	title = models.CharField(max_length=120)
	description = models.TextField()
	date = models.DateField()
	user = models.ForeignKey(User, related_name="blog", on_delete=models.CASCADE,)
	article = models.ForeignKey(Article, related_name="article", on_delete=models.DO_NOTHING, blank=True, null=True)
	quantity = models.IntegerField()
	active = models.BooleanField()
	upload = models.FileField(upload_to=user_directory_path, blank=True)
	image = models.ImageField(upload_to=user_directory_path, blank=True)

	def __str__(self):
		return self.title


