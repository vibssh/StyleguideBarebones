var partialTplSettings,
    PartialTpl = {
        settings : {
            
        },

        init: function (el, url) {
            partialTplSettings = this.settings;
            partialTplSettings.$url = url;
            partialTplSettings.$container = el;
            this.PartTpl();
        },

        bindUIActions: function() {
            
        },

        PartTpl: function() {
            $.get(partialTplSettings.$url, function(data) {
                $(partialTplSettings.$container).append(data);
            });
        }
    };