# Generated by Django 4.1.4 on 2022-12-29 14:54

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('username', models.CharField(max_length=24, unique=True, verbose_name='사용자 아이디')),
                ('password', models.CharField(max_length=128, verbose_name='비밀번호')),
                ('created_at', models.DateTimeField(auto_now_add=True, verbose_name='생성일')),
                ('is_active', models.BooleanField(default=True)),
                ('is_admin', models.BooleanField(default=False)),
            ],
            options={
                'abstract': False,
            },
        ),
    ]
