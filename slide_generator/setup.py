# -*- coding: utf-8 -*-
from setuptools import setup, find_packages

version = '0.5'

setup(
    name='Slides Generator Tools',
    version=version,
    description="Tool to create slides using markdown and the google slides library",
    packages= find_packages(),
    # Get more strings from http://www.python.org/pypi?%3Aaction=list_classifiers
    classifiers=[
        "Programming Language :: Python",
        "Topic :: Software Development :: Libraries :: Python Modules",
    ],
    keywords='Slides',
    author='Matias Iturburu',
    author_email='matias.iturburu@tallertechnologies.com',
    url='',
    package_data={
        'slides_generator' : ['theme/*.*', 'js/*.*'],
    },
    include_package_data=True,
    zip_safe=False,
    entry_points = {
        'console_scripts': [
            'generate = render:main',
            'serve = render:serve'
        ],
    },
    install_requires=[
        "markdown",
        "jinja2",
    ],
)
