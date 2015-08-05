'use strict';

angular.module('example366', ['ngAnimate', 'ngTouch'])
  .controller('MainCtrl', function ($scope) {

    // Set of Photos
    $scope.photos = [
        {src: 'http://mcsaatchiladigital.com/digital/dev/ugg_mens_fall_2015_banner_ads/static/bueller_heritage/BuellerHeritage_300x50.jpg', desc: '300x50', site: 'Standard'},
        {src: 'http://mcsaatchiladigital.com/digital/dev/ugg_mens_fall_2015_banner_ads/static/bueller_heritage/BuellerHeritage_300x60.jpg', desc: '300x60', site: 'Standard'},
        {src: 'http://mcsaatchiladigital.com/digital/dev/ugg_mens_fall_2015_banner_ads/static/bueller_heritage/BuellerHeritage_300x250.jpg', desc: '300x250', site: 'Standard'},
        {src: 'http://mcsaatchiladigital.com/digital/dev/ugg_mens_fall_2015_banner_ads/static/bueller_heritage/BuellerHeritage_300x600.jpg', desc: '300x600', site: 'Standard'},
        {src: 'http://mcsaatchiladigital.com/digital/dev/ugg_mens_fall_2015_banner_ads/static/bueller_heritage/BuellerHeritage_320x50.jpg', desc: '320x50', site: 'Standard'},
        {src: 'http://mcsaatchiladigital.com/digital/dev/ugg_mens_fall_2015_banner_ads/static/bueller_heritage/BuellerHeritage_320x120.jpg', desc: '320x120', site: 'Standard'},
        {src: 'http://mcsaatchiladigital.com/digital/dev/ugg_mens_fall_2015_banner_ads/static/bueller_heritage/BuellerHeritage_468x60.jpg', desc: '468x60', site: 'Standard'},
        {src: 'http://mcsaatchiladigital.com/digital/dev/ugg_mens_fall_2015_banner_ads/static/bueller_heritage/BuellerHeritage_480x60.jpg', desc: '480x60', site: 'Standard'},
        {src: 'http://mcsaatchiladigital.com/digital/dev/ugg_mens_fall_2015_banner_ads/static/bueller_heritage/BuellerHeritage_640x640.jpg', desc: '640x640', site: 'Standard'},
        {src: 'http://mcsaatchiladigital.com/digital/dev/ugg_mens_fall_2015_banner_ads/static/bueller_heritage/BuellerHeritage_728x90.jpg', desc: '728x90', site: 'Standard'},
        {src: 'http://mcsaatchiladigital.com/digital/dev/ugg_mens_fall_2015_banner_ads/static/bueller_heritage/BuellerHeritage_800x435.jpg', desc: '800x435', site: 'Standard'},
        {src: 'http://mcsaatchiladigital.com/digital/dev/ugg_mens_fall_2015_banner_ads/static/bueller_heritage/BuellerHeritage_970x66.jpg', desc: '970x66', site: 'Standard'},
        {src: 'http://mcsaatchiladigital.com/digital/dev/ugg_mens_fall_2015_banner_ads/static/bueller_heritage/BuellerHeritage_970x250.jpg', desc: '970x250', site: 'Standard'},
        {src: 'http://mcsaatchiladigital.com/digital/dev/ugg_mens_fall_2015_banner_ads/static/bueller_heritage/BuellerHeritage_1050x1020.jpg', desc: '1050x1020', site: 'Standard'},
        {src: 'http://mcsaatchiladigital.com/digital/dev/ugg_mens_fall_2015_banner_ads/static/bueller_heritage/BuellerHeritage_1280x100.jpg', desc: '1280x100', site: 'Standard'},
        {src: 'http://mcsaatchiladigital.com/digital/dev/ugg_mens_fall_2015_banner_ads/static/bueller_heritage/Complex_Mobile_Inline_600x800_half.jpg', desc: '600X800', site: 'Mobile'},
        {src: 'http://mcsaatchiladigital.com/digital/dev/ugg_mens_fall_2015_banner_ads/static/bueller_heritage/BuellerHeritage_640x1136_half.jpg', desc: '640x1136', site: 'Millenial'},
        {src: 'http://mcsaatchiladigital.com/digital/dev/ugg_mens_fall_2015_banner_ads/static/bueller_heritage/BuellerHeritage_1136x640_half.jpg', desc: '1136x640', site: 'Millenial'},
        {src: 'http://mcsaatchiladigital.com/digital/dev/ugg_mens_fall_2015_banner_ads/static/bueller_heritage/BuellerHeritage_1152x1536_half.jpg', desc: '1152x1536', site: 'Millenial'},
        {src: 'http://mcsaatchiladigital.com/digital/dev/ugg_mens_fall_2015_banner_ads/static/bueller_heritage/BuellerHeritage_1200x1920_half.jpg', desc: '1200x1920', site: 'Millenial'},
        {src: 'http://mcsaatchiladigital.com/digital/dev/ugg_mens_fall_2015_banner_ads/static/bueller_heritage/BuellerHeritage_1536x1152_half.jpg', desc: '1536x1152', site: 'Millenial'},
        {src: 'http://mcsaatchiladigital.com/digital/dev/ugg_mens_fall_2015_banner_ads/static/bueller_heritage/BuellerHeritage_Static_1920x1200_half.jpg', desc: '1920x1200', site: 'Millenial'},
        {src: 'http://mcsaatchiladigital.com/digital/dev/ugg_mens_fall_2015_banner_ads/static/bueller_heritage/BuellerHeritage_Yahoo_Insitu.jpg', desc: 'Yahoo Insitu', site: 'Yahoo'},
        {src: 'http://mcsaatchiladigital.com/digital/dev/ugg_mens_fall_2015_banner_ads/static/bueller_heritage/BuellerHeritage_Yahoo_InsituMarks.jpg', desc: 'Yahoo Watermark', site: 'Yahoo'},
        {src: 'http://mcsaatchiladigital.com/digital/dev/ugg_mens_fall_2015_banner_ads/static/bueller_heritage/FWBB_Exp_UGG-BUELLER.jpg', desc: '1200x75 (Collapsed) & 1200x300 (Expanded)', site: 'Standard'}
            ];

    // initial image index
    $scope._Index = 0;

    // if a current image is the same as requested image
    $scope.isActive = function (index) {
        return $scope._Index === index;
    };

    // show prev image
    $scope.showPrev = function () {
        $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.photos.length - 1;
    };

    // show next image
    $scope.showNext = function () {
        $scope._Index = ($scope._Index < $scope.photos.length - 1) ? ++$scope._Index : 0;
    };

    // show a certain image
    $scope.showPhoto = function (index) {
        $scope._Index = index;
    };
});

$(document).ready(function () {

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

});