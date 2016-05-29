'use strict';

var app = angular.module('app', []);



app.controller('controller', function($scope, $http) {

    $scope.portfolioList = [

        {

            id: 0,

            class: 0,

            company: 'Billtrust',

            title: 'Front-end Developer',

            image: 'project1.jpg',

            sectionID:'billtrust',

            description: 'Billtrust provides payment cycle management solutions that accelerate invoice-to-cash.',

            template: 'js/work/billtrust.html',

            resume: '',

            photos: [

                {

                    title: 'CST',

                    description: '',

                    image: 'bt-1.jpg'

                },

                {

                    title: 'CAC',

                    description: '',

                    image: 'bt-2.jpg'

                },

                {

                    title: 'CAC',

                    description: '',

                    image: 'bt-3.jpg'

                },

                {

                    title: 'CAC',

                    description: '',

                    image: 'bt-4.jpg'

                },

                {

                    title: 'CAC',

                    description: '',

                    image: 'bt-5.jpg'

                },

                {

                    title: 'CAC',

                    description: '',

                    image: 'bt-6.jpg'

                },

                {

                    title: 'CAC',

                    description: '',

                    image: 'bt-7.jpg'

                },

                {

                    title: 'CAC',

                    description: '',

                    image: 'bt-8.jpg'

                },

                {

                    title: 'CAC',

                    description: '',

                    image: 'bt-9.jpg'

                },

                {

                    title: 'CAC',

                    description: '',

                    image: 'bt-10.jpg'

                },

                {

                    title: 'CAC',

                    description: '',

                    image: 'bt-11.jpg'

                }

            ]

        },

        {



            id: 1,

            class: 1,

            company: 'Mediaxpress',

            title: 'Designer & Developer',

            image: 'project3.jpg',

            sectionID:'mediaxpress',

            description: 'Mediaxpress specializes in physical and digital media such as CDs, DVDs and Blu-ray, Graphic Design and Web Development.',

            template: '',

            photos: [

                {

                    title: 'CST',

                    description: '',

                    image: 'web_design_001.png'

                },

                {

                    title: 'CAC',

                    description: '',

                    image: 'web_design_002.png'

                },

                {

                    title: 'CAC',

                    description: '',

                    image: 'web_design_003.png'

                },

                {

                    title: 'CAC',

                    description: '',

                    image: 'web_design_004.png'

                },

                {

                    title: 'CAC',

                    description: '',

                    image: 'web_design_005.png'

                },

                {

                    title: 'CAC',

                    description: '',

                    image: 'web_design_006.png'

                },

                {

                    title: 'CAC',

                    description: '',

                    image: 'web_design_007.png'

                },

                {

                    title: 'CAC',

                    description: '',

                    image: 'web_design_008.png'

                },

                {

                    title: 'CAC',

                    description: '',

                    image: 'web_design_009.png'

                },

                {

                    title: 'CAC',

                    description: '',

                    image: 'web_design_010.png'

                },

                {

                    title: 'CAC',

                    description: '',

                    image: 'web_design_012.png'

                },

                {

                    title: 'CAC',

                    description: '',

                    image: 'web_design_013.png'

                },

                {

                    title: 'CAC',

                    description: '',

                    image: 'web_design_014.png'

                },

                {

                    title: 'CAC',

                    description: '',

                    image: 'web_design_015.png'

                },

                {

                    title: 'CAC',

                    description: '',

                    image: 'web_design_016.png'

                },

                {

                    title: 'CAC',

                    description: '',

                    image: 'web_design_017.png'

                },

                {

                    title: 'CAC',

                    description: '',

                    image: 'web_design_018.png'

                },

                {

                    title: 'CAC',

                    description: '',

                    image: 'web_design_019.png'

                },

                {

                    title: 'CAC',

                    description: '',

                    image: 'web_design_021.png'

                },

                {

                    title: 'CAC',

                    description: '',

                    image: 'web_design_022.png'

                },

                {

                    title: 'CAC',

                    description: '',

                    image: 'web_design_023.png'

                },

                {

                    title: 'CAC',

                    description: '',

                    image: 'web_design_024.png'

                },

                {

                    title: 'CAC',

                    description: '',

                    image: 'web_design_025.png'

                },

                {

                    title: 'CAC',

                    description: '',

                    image: 'web_design_026.png'

                },

                {

                    title: 'CAC',

                    description: '',

                    image: 'web_design_027.png'

                },

                {

                    title: 'CAC',

                    description: '',

                    image: 'web_design_028.png'

                },

                {

                    title: 'CAC',

                    description: '',

                    image: 'web_design_029.png'

                },

                {

                    title: 'CAC',

                    description: '',

                    image: 'web_design_030.png'

                },

                {

                    title: 'CAC',

                    description: '',

                    image: 'web_design_031.png'

                }

            ]

        },

        {

            id: 2,

            class: 2,

            company: 'Mad303',

            title: 'Freelance Project',

            image: 'project5.jpg',

            sectionID:'Mad303',

            description: 'We are a small creative company based in Denver, Colorado. Specializing in Graphic Design & Web Development.',

            template: '',

            links: [

                {

                    title: 'Hex to RGB Converter',

                    link: 'http://www.icodepixels.com/hex-to-rgb/'

                }]

        }

    ];

});