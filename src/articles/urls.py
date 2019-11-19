from django.urls import path
from articles.api import ArticleViewSet
from articles.api import BlogViewSet
from rest_framework.routers import DefaultRouter

router = DefaultRouter()

# router.register(r'', ArticleViewSet, base_name="articles")

router.register(r'article', ArticleViewSet, base_name="articles")
router.register(r'blog', BlogViewSet, base_name="blogs")

urlpatterns = router.urls


# #not that you can also do the registeration this way below
# router.register('api/leads', LeadViewSet, 'leads')



# from .api import ArticleListView, ArticleDetailView, ArticleCreateView, ArticleUpdateView, ArticleDeleteView

# urlpatterns = [

# 	path('', ArticleListView.as_view()),
# 	path('create/', ArticleCreateView.as_view()),
# 	path('<pk>', ArticleDetailView.as_view()),

# 	path('update/<pk>', ArticleUpdateView.as_view()),
# 	path('delete/<pk>', ArticleDeleteView.as_view()),

# ]