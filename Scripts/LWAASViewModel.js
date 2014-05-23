function LWAASViewModel(why) {
            var self = this;

            self.why = ko.observable();

            self.whyText = ko.computed(function () { return why; }, self);

            self.urlWithQ = ko.computed(function () {
                var url = [location.protocol, '//', location.host, location.pathname].join('');
                url += "?why=" + why;
                return url;
            }, self);

            self.tweetText = ko.computed(function () {
                return why + " http://www.LWAAS.com";
            }, self);
            self.tweetLastWord = ko.computed(function () {
                var url = self.urlWithQ();
                return "http://twitter.com/intent/tweet?url=" + encodeURIComponent(url) + "&text=" + encodeURIComponent(self.tweetText());
            }, self);
        }