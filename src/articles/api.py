from rest_framework import viewsets, permissions
# from rest_framework.generics import ListAPIView, RetrieveAPIView, CreateAPIView, UpdateAPIView, DestroyAPIView
from articles.models import Article
from .serializers import ArticleSerializer

from articles.models import Blog
from .serializers import BlogSerializer

from rest_framework import generics, mixins


from rest_framework.authentication import SessionAuthentication, BasicAuthentication
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from django.utils.decorators import method_decorator
from django.views.decorators.csrf import csrf_exempt



# class ArticleListView(ListAPIView):
# 	queryset = Article.objects.all()
# 	serializer_class = ArticleSerializer

# class ArticleDetailView(RetrieveAPIView):
# 	queryset = Article.objects.all()
# 	serializer_class = ArticleSerializer


# class ArticleCreateView(CreateAPIView):
# 	queryset = Article.objects.all()
# 	serializer_class = ArticleSerializer


# class ArticleUpdateView(UpdateAPIView):
# 	queryset = Article.objects.all()
# 	serializer_class = ArticleSerializer

# class ArticleDeleteView(DestroyAPIView):
# 	queryset = Article.objects.all()
# 	serializer_class = ArticleSerializer


class ArticleViewSet(viewsets.ModelViewSet):
	lookup_field = 'pk'
	queryset = Article.objects.all()
	serializer_class = ArticleSerializer

	permission_classes = [
		permissions.AllowAny
		# permissions.IsAuthenticated
		# permissions.IsAdminUser
	]


class BlogViewSet(viewsets.ModelViewSet):
	# # you need to remove this if you want to customize the blog to be only viewed by the creator - get_queryset
	# queryset = Blog.objects.all()
	lookup_field = 'pk'
	serializer_class = BlogSerializer

	permission_classes = [
		# permissions.AllowAny
		permissions.IsAuthenticated
		# permissions.IsAdminUser
	]

	# You can use http://localhost:8000/api/ to find out the specific blogview set the user has authenication to when they are signed up or not signed up
	authentication_classes = [SessionAuthentication, ]
	
	#try to insert a filter

	# customised queryset
	def get_queryset(self):
		return self.request.user.blog.all()

	def perform_create(self, serializer):
		serializer.save(user=self.request.user)

	# confirm that only user who create can update
	def perform_update(self, serializer):

		# created_user = self.get_queryset().first().user
		# print (created_user)

		# user can only update information only if they are staff
		if self.request.user.is_staff:
			print(f'is staff')
			serializer.save(user=self.request.user)

		else:
			print(f'not staff')			
			return None







class AdminBlogViewSet(viewsets.ModelViewSet):
	# # you need to remove this if you want to customize the blog to be only viewed by the creator - get_queryset
	queryset = Blog.objects.all()
	serializer_class = BlogSerializer

	permission_classes = [
		# permissions.AllowAny
		# permissions.IsAuthenticated
		permissions.IsAdminUser
	]

	# def perform_create(self, serializer):
	# 	serializer.save(user=self.request.user)

	# # confirm that only user who create can update
	# def perform_update(self, serializer):
	# 	serializer.save(user=self.request.user)









	# def list(self, request):
	# 	pass

	# def create(self, request):
	# 	pass

	# def update(self, request, pk=None):
	# 	pass

	# def retrieve(self, request, pk=None):
	# 	pass

	# def destroy(self, request, pk=None):
	# 	pass





	# def get_permissions(self):
	# 	"""
	# 	Instantiates and returns the list of permissions that this view requires.
	# 	"""
	# 	if self.action == 'list':
	# 		permission_classes = [IsAuthenticated]
	# 	else:
	# 		permission_classes = [IsAdmin]
	# 	return [permission() for permission in permission_classes]











# class ArticleRudView(generics.RetrieveUpdateDestroyAPIView):
# 	lookup_field = 'pk'
# 	# queryset = Article.objects.all()

# 	serializer_class = ArticleSerializer

# 	def get_queryset(self):
# 		return Article.objects.all()



# class ArticleAPIView(mixins.CreateModelMixin, generics.ListAPIView):
# 	lookup_field = 'pk'
# 	# queryset = Article.objects.all()

# 	serializer_class = ArticleSerializer

# 	def get_queryset(self):
# 		return Article.objects.all()

# 	def perform_create(self, serializer):
# 		serializer.save(user=self.request.user)

# 	def post(self, request, *args, **kwargs):
# 		serializer.create(request, *args, **kwargs)


