//Include Template
(function () {
    'use strict';
    var s,
        TmplObj = {
            settings: {

            },

            init: function () {
                s = this.settings;
                this.bindUIActions();
            },

            bindUIActions: function () {
                //Toggle Active Class on the link
                $('#nav ul li a').on('click', function () {
                    TmplObj.activeSection($(this));
                });


                //Partials
                $('#overview').on('click', function () {
                    TmplObj.tpl('_overview.html');
                });

                $('#forms').on('click', function () {
                    TmplObj.tpl('_forms.html');
                });



                

            },

            activeSection: function ($clicked) {
                $('#nav ul li a').removeClass('active');
                $clicked.addClass('active');
            },

            tpl: function (url) {
                $.get(url, function (data) {
                    $('#content').html(data);
                });
            }
        };

    TmplObj.init();

}());