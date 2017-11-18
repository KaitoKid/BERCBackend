from __future__ import unicode_literals
from django.conf import settings
from django.core.urlresolvers import reverse
from django.db import models
from django.db.models.signals import post_save
from django.utils.encoding import python_2_unicode_compatible
from django.utils.translation import ugettext_lazy as _


# Create your models here.
class Listing(models.Model):
    title = models.CharField(max_length=200, verbose_name=_("title"))
    posted_by = models.ForeignKey(settings.AUTH_USER_MODEL,
                                  verbose_name=_("posted by"))
    post_date = models.DateTimeField(
        auto_now_add=True, verbose_name=_("post date"))
    modified = models.DateTimeField(null=True, verbose_name=_("modified"))
    body = models.TextField(max_length=500, blank=True)
    location = models.CharField(max_length=30, blank=True)
