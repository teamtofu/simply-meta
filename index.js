var genMeta = function (meta, options) {
    options = options || {};
    if (typeof meta !== 'object') throw new Error('Meta data passed to simply-meta is not an object.');

    var $ = require('cheerio').load('<!doctype html><html><head></head><body></body></html>');

    var newTag = function (obj, tagName) {
        tagName = tagName || 'meta';
        var metaSets = options.disableHelper ? [] : ['data-sm=""'];
        for (var i in obj) {
            if (obj[i] && obj[i][0] && obj[i].join) obj[i] = obj[i].join(',');
            metaSets.push(i+'="'+(obj[i] || '').replace('"','\\"')+'"');
        }
        return '<' + tagName + ' ' + metaSets.join(' ') + '>';
    };

    var thenTag = function (value, attr, set, tagName) {
        set = set || {};
        if (value && value[0] && value.join) value = value.join(',');
        set[attr] = value;
        if (value) $('head').append(newTag(set, tagName));
    };

    thenTag(meta.charset, 'charset');

    meta.httpEquiv = meta.httpEquiv || {};
    thenTag(meta.httpEquiv.cacheControl, 'content', {'http-equiv': 'Cache-Control'});
    thenTag(meta.httpEquiv.expires, 'content', {'http-equiv': 'Expires'});
    thenTag(meta.httpEquiv.contentSecurityPolicy, 'content', {'http-equiv': 'Content-Security-Policy'});
    thenTag(meta.httpEquiv.refresh, 'content', {'http-equiv': 'refresh'});

    meta.verificationCodes = meta.verificationCodes || {};
    thenTag(meta.verificationCodes.google, 'content', {name: 'google-site-verification'});
    thenTag(meta.verificationCodes.bing, 'content', {name: 'msvalidate.01'});
    thenTag(meta.verificationCodes.yandex, 'content', {name: 'yandex-verification'});
    
    meta.languages = meta.languages || {};
    thenTag(meta.languages.language, 'content', {name: 'language'});
    thenTag(meta.languages.defaultLanguage, 'content', {name: 'defaultLanguage'});
    thenTag(meta.languages.availableLanguages, 'content', {name: 'availableLanguages'});

    thenTag(meta.robots, 'content', {name: 'robots'});
    thenTag(meta.googlebot, 'content', {name: 'googlebot'});
    thenTag(meta.Slurp, 'content', {name: 'Slurp'});
    thenTag(meta.bingbot, 'content', {name: 'bingbot'});

    thenTag(meta.applicationName, 'content', {name: 'application-name'});
    thenTag(meta.description, 'content', {name: 'description'});
    thenTag(meta.keywords && meta.keywords.join ? meta.keywords.join(',') : meta.keywords, 'content', {name: 'keywords'});
    thenTag(meta.country, 'content', {name: 'country'});
    thenTag(meta.copyright, 'content', {name: 'copyright'});
    thenTag(meta.author, 'content', {name: 'author'});
    thenTag(meta.replyTo, 'content', {name: 'reply-to'});
    thenTag(meta.revisitAfter, 'content', {name: 'revisit-after'});
    thenTag(meta.expires, 'content', {name: 'expires'});
    thenTag(meta.coverage, 'content', {name: 'coverage'});
    thenTag(meta.distribution, 'content', {name: 'distribution'});
    thenTag(meta.rating, 'content', {name: 'rating'});

    meta.url = meta.url || {};
    thenTag(meta.url.base, 'href', meta.url.target ? {target: meta.url.target} : {}, 'base');
    thenTag(meta.url.canonical, 'href', {rel: 'canonical'}, 'link');

    meta.og = meta.og || {};
    thenTag(meta.og.locale, 'content', {property: 'og:locale'});
    thenTag(meta.og.siteName, 'content', {property: 'og:site_name'});
    thenTag(meta.og.type, 'content', {property: 'og:type'});
    thenTag(meta.og.description, 'content', {property: 'og:description'});
    thenTag(meta.og.url, 'content', {property: 'og:url'});
    thenTag(meta.og.image, 'content', {property: 'og:image'});
    thenTag(meta.og.imageType, 'content', {property: 'og:image:type'});
    thenTag(meta.og.imageWidth, 'content', {property: 'og:image:width'});
    thenTag(meta.og.imageHeight, 'content', {property: 'og:image:height'});

    meta.fb = meta.fb || {};
    thenTag(meta.fb.pageId, 'content', {property: 'fb:page_id'});
    thenTag(meta.fb.appId, 'content', {property: 'fb:app_id'});
    thenTag(meta.fb.admins, 'content', {property: 'fb:admins'});

    meta.twitter = meta.twitter || {};
    thenTag(meta.twitter.card, 'content', {name: 'twitter:card'});
    thenTag(meta.twitter.site, 'content', {name: 'twitter:site'});
    thenTag(meta.twitter.siteId, 'content', {name: 'twitter:site:id'});
    thenTag(meta.twitter.title, 'content', {name: 'twitter:title'});
    thenTag(meta.twitter.description, 'content', {name: 'twitter:description'});
    thenTag(meta.twitter.creator, 'content', {name: 'twitter:creator'});
    thenTag(meta.twitter.creatorId, 'content', {name: 'twitter:creator:id'});
    thenTag(meta.twitter.image, 'content', {name: 'twitter:image'});
    thenTag(meta.twitter.imageAlt, 'content', {name: 'twitter:image:alt'});
    thenTag(meta.twitter.player, 'content', {name: 'twitter:player'});
    thenTag(meta.twitter.playerWidth, 'content', {name: 'twitter:player:width'});
    thenTag(meta.twitter.playerHeight, 'content', {name: 'twitter:player:height'});
    thenTag(meta.twitter.playerStream, 'content', {name: 'twitter:player:stream'});
    thenTag(meta.twitter.appNameIphone, 'content', {name: 'twitter:app:name:iphone'});
    thenTag(meta.twitter.appIdIphone, 'content', {name: 'twitter:app:id:iphone'});
    thenTag(meta.twitter.appUrlIphone, 'content', {name: 'twitter:app:url:iphone'});
    thenTag(meta.twitter.appNameIpad, 'content', {name: 'twitter:app:name:ipad'});
    thenTag(meta.twitter.appIdIpad, 'content', {name: 'twitter:app:id:ipad'});
    thenTag(meta.twitter.appUrlIpad, 'content', {name: 'twitter:app:url:ipad'});
    thenTag(meta.twitter.appNameGooglePlay, 'content', {name: 'twitter:app:name:googleplay'});
    thenTag(meta.twitter.appIdGooglePlay, 'content', {name: 'twitter:app:id:googleplay'});
    thenTag(meta.twitter.appUrlGooglePlay, 'content', {name: 'twitter:app:url:googleplay'});

    if (meta.viewport && typeof meta.viewport === 'object') thenTag('viewport', 'name', {
        content: (meta.viewport.width ? "width=" + meta.viewport.width : '')
        + (meta.viewport.height ? ", height=" + meta.viewport.height : '')
        + (meta.viewport.initialScale ? ", initial-scale=" + meta.viewport.initialScale : '')
        + (meta.viewport.maximumScale ? ", maximum-scale=" + meta.viewport.maximumScale : '')
        + (meta.viewport.minimumScale ? ", minimum-scale=" + meta.viewport.minimumScale : '')
        + (meta.viewport.userScalable ? ", user-scalable=" + meta.viewport.userScalable : '')
    });

    meta.webAppCapable = meta.webAppCapable || {};
    meta.webAppCapable.ios = meta.webAppCapable.ios || {};
    thenTag(meta.webAppCapable.ios.appleMobileWebAppCapable, 'content', {name: 'apple-mobile-web-app-capable'});
    thenTag(meta.webAppCapable.ios.appleMobileWebAppTitle, 'content', {name: 'apple-mobile-web-app-title'});
    thenTag(meta.webAppCapable.ios.appleMobileWebAppStatusBarStyle, 'content', {name: 'apple-mobile-web-app-status-bar-style'});

    meta.msApplication = meta.msApplication || {};
    thenTag(meta.webAppCapable.android, 'content', {name: 'mobile-web-app-capable'});
    thenTag(meta.msApplication.tileImage, 'content', {name: 'msapplication-TileImage'});
    thenTag(meta.msApplication.tileColor, 'content', {name: 'msapplication-TileColor'});

    meta.icons = meta.icons || {};
    meta.icons.icon = meta.icons.icon || [];
    meta.icons.shortcutIcon = meta.icons.shortcutIcon || [];
    meta.icons.appleTouchIcon = meta.icons.appleTouchIcon || [];
    meta.icons.appleTouchIconPrecomposed = meta.icons.appleTouchIconPrecomposed || [];
    for (var i = 0; i < meta.icons.icon.length; i++) {
        thenTag('icon', 'rel', {sizes: meta.icons.icon[i][0], href: meta.icons.icon[i][1]}, 'link');
    }
    for (var i = 0; i < meta.icons.shortcutIcon.length; i++) {
        thenTag('shortcut icon', 'rel', {sizes: meta.icons.shortcutIcon[i][0], href: meta.icons.shortcutIcon[i][1]}, 'link');
    }
    for (var i = 0; i < meta.icons.appleTouchIcon.length; i++) {
        thenTag('apple-touch-icon', 'rel', {sizes: meta.icons.appleTouchIcon[i][0], href: meta.icons.appleTouchIcon[i][1]}, 'link');
    }
    for (var i = 0; i < meta.icons.appleTouchIconPrecomposed.length; i++) {
        thenTag('apple-touch-icon-precomposed', 'rel', {sizes: meta.icons.appleTouchIconPrecomposed[i][0], href: meta.icons.appleTouchIconPrecomposed[i][1]}, 'link');
    }

    meta.localization = meta.localization || {};
    thenTag(meta.localization.manifest, 'href', {rel: 'localization'}, 'link');

    if (meta.title) $('head').append((options.disableHelper?'<title>':'<title data-sm="">')+$('<div />').text(meta.title).html()+'</title>');

    return $('head').html();
};

var addToFile = function (meta, html, options) {
    var $ = require('cheerio').load(html);
    $('[data-sm=""]').remove();
    $('head').append(genMeta(meta, options));
    return $.html();
};

module.exports = genMeta;
module.exports.html = addToFile;
