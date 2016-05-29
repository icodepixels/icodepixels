$(document).ready(function() {

    // Remove padding, set opening and closing animations, close if clicked and disable overlay

    $(".fancybox").fancybox({

        padding: 0,



        openEffect : 'elastic',



        closeEffect : 'elastic',



        closeClick : true,



        helpers : {

            overlay : {

                css: {

                    'background': 'rgba(33, 150, 243, 0.75)'

                }

            }

        }

    });

});