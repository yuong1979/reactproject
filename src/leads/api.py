from leads.models import Lead
from rest_framework  import viewsets, permissions
from .serializers import LeadSerializer


# Lead Viewset
class LeadViewSet(viewsets.ModelViewSet):
	
	permission_classes = [
		# # allow all users
		# permissions.AllowAny

		# allow allow users who are authenticated to view
		permissions.IsAuthenticated
	]


	# # return all the objects
	# queryset = Lead.objects.all()

	serializer_class = LeadSerializer


	#only return the querysets that are created by the user
	def get_queryset(self):
		return self.request.user.leads.all()

	# allow the request user to be saved as the owner when he creates a lead 
	def perform_create(self, serializer):
		serializer.save(owner=self.request.user)

