"""leadmanager URL Configuration

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/1.11/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  url(r'^$', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  url(r'^$', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.conf.urls import url, include
    2. Add a URL to urlpatterns:  url(r'^blog/', include('blog.urls'))
"""
# from django.conf.urls import url, include

from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static



urlpatterns = [
    path('admin/', admin.site.urls),
    # url('', include(leads.urls)),

    path('', include('frontend.urls')),


    #knox is for traversy media
    path('', include('leads.urls')),
    path('', include('accounts.urls')),


    #for both knox and for just django
    path('api-auth/', include('rest_framework.urls')),

    #rest-auth is for just django
    path('rest-auth/', include('rest_auth.urls')),

    # this creates an api for api/articles and api/blog - in this way http://localhost:8000/api/blog/
    path('api/', include('articles.urls')),

    #django-allauth is for just django
    path('rest-auth/registration/', include('rest_auth.registration.urls')),

]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)



# #guidelines on setting up api

# # if you want to try to login direct using api use the below
#     path('rest-auth/', include('rest_auth.urls')),

# # if you want to try to login direct using api use the below
#     path('rest-auth/registration/', include('rest_auth.registration.urls')),
