from rest_framework import generics, permissions
from rest_framework.response import Response
from knox.models import AuthToken
from .serializers import UserSerializer, RegisterSerializer, LoginSerializer



# Register API
class RegisterAPI(generics.GenericAPIView):
	serializer_class = RegisterSerializer

	def post(self, request, *args, **kwargs):
		#labeling the data send in by the user as serializer
		serializer = self.get_serializer(data=request.data)
		#raise any exceptions if neccessary
		serializer.is_valid(raise_exception=True)
		#saving the user in the database
		user = serializer.save()

		# the response sends data back to the user after the user has posted - in this case it sends a dictionary back
		return Response({
			"user": UserSerializer(user, context=self.get_serializer_context()).data,
			# creating a token that is specific to the user
			"token": AuthToken.objects.create(user)[1]
			})



# Login API
class LoginAPI(generics.GenericAPIView):
	serializer_class = LoginSerializer

	def post(self, request, *args, **kwargs):
		#labeling the data send in by the user as serializer
		serializer = self.get_serializer(data=request.data)
		#raise any exceptions if neccessary
		serializer.is_valid(raise_exception=True)
		#saving the user in the database
		user = serializer.validated_data

		# the response sends data back to the user after the user has posted - in this case it sends a dictionary back
		return Response({
			"user": UserSerializer(user, context=self.get_serializer_context()).data,
			"token": AuthToken.objects.create(user)[1]
			})


# Get User API
class UserAPI(generics.RetrieveAPIView):
	# to make sure that you need to be logged in to be able to access
	permission_classes = [
		permissions.IsAuthenticated,
	]

	serializer_class = UserSerializer

	# this will look at the token and send back whichever the user is associated with the token
	def get_object(self):
		return self.request.user