from django.contrib import admin

from leads.models import Lead








class LeadAdmin(admin.ModelAdmin):
    list_display = ('id','name', 'message', 'owner','created_at')
    search_fields = ['name']
    # list_filter = ('active', 'freepoll','locked')

    def __str__(self,obj):
        return obj.__str__()



admin.site.register(Lead, LeadAdmin)
