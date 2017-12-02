/**
 * Created by Leeeco on 2017/12/2.
 * remove webpage ads
 */
(function(global, factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define(['jquery'], function($) {
            return factory($, global, global.document, global.Math);
        });
    } else if (typeof exports !== 'undefined') {
        module.exports = factory(require('jquery'), global, global.document, global.Math);
    } else {
        factory(jQuery, global, global.document, global.Math);
    }
})(typeof window !== 'undefined' ? window : this, function($, window, document, Math, undefined) {
    'use strict';
    function killWebpageAds() {
        //防止被iframe嵌套
        if (top != self) top.location = self.location;

        //防止广告以iframe形式插入,跟当前域hostname不一致的iframe都去掉
        var hostname = location.hostname;
        window.frames.forEach(function (iframe) {
            var src = iframe.getAttribute('src');
            if(!~src.indexOf(hostname)){
                iframe.parentNode.removeChild(iframe);
            }
        });
    }

    document.addEventListener('DOMContentLoaded', killWebpageAds, false);
    document.addEventListener('load', killWebpageAds, false);
    window.addEventListener('load', killWebpageAds, false);
    setTimeout(killWebpageAds, 10000);

});
