/*******************************************************************************

    uBlock Origin Lite - a comprehensive, MV3-compliant content blocker
    Copyright (C) 2019-present Raymond Hill

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see {http://www.gnu.org/licenses/}.

    Home: https://github.com/gorhill/uBlock
*/

/* jshint esversion:11 */

'use strict';

// ruleset: hun-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssSpecificImports() {

/******************************************************************************/

const argsList = ["#article_end_popup,\n.banner.boxed","a[rel*=\"sponsored\"]","#a1,\n#a2","#onetrust-banner-sdk","#eu-cookie-law,\n#facebook-likebox-8,\n.wpcnt","[class*=\"advert\"]","#facebook-sharebar,\n#webaruhaz-ajanlo,\n.-contentTop,\n.a2blckLayer,\n.ctsGadx,\n.hashtags,\n.wrap,\nTD[id*=\"l_sponsor\"],\n[class*=\"adv_\"]","[class*=\"adtext\"]",".fb-exit-popup-container","#fanback,\n#permission-bar,\n.fu-container,\n.sample,\n[href*=\"hirdetes\"],\na[href*=\"adf.ly\"],\na[style=\"text-decoration:none;\"],\ntable[bgcolor=\"darkgray\"]",".content-list.content-body > .recommendation-holder,\n.content-text > .recommendation-holder,\n.left-column.col-md-8.col-sm-12 > .recommendation-holder,\n.right-column.text-center.hidden-sm.hidden-xs.col-md-4 > .recommendation-holder:nth-of-type(1),\n.right-column.text-center.hidden-sm.hidden-xs.col-md-4 > .recommendation-holder:nth-of-type(2),\n.top-column.col-xs-12 > .recommendation-holder,\ni > .recommendation-holder:nth-of-type(1),\ni > .recommendation-holder:nth-of-type(2)",".tqWLsnEEqeEw-bg,\n[style=\"z-index: 999999; background: rgba(0, 0, 0, 0.85098); display: block;\"]","[style=\"background: rgb(255, 255, 255); max-width: 720px; z-index: 9999999; opacity: 1; visibility: visible;\"]","[data-zadtype=\"billboard\"],\ndiv.mobileArticleAds","div[id*=\"banner\"]","[class*=\"banner\"]","[app=\"tibrr-cookie-consent\"],\n[class^=\"k\"][class*=\"-container\"][class*=\"-2\"][class$=\"-hide\"]",".bpkad","A[href^=\"http://goo.gl\"]","[class*=\"reklam\"]","[id*=\"reklam\"]","[class*=\"pea_cook\"]","[style=\"width:300px;height:250px;\"],\nscript[data-cfasync=\"false\"]","[class*=\"advertisement\"]","[class^=\"ad-\"]","#text-3","#kpopup","#sliding-popup","[id^=\"block-views-block-banners-\"]","[id*=\"banner\"]","[id*=\"etarget\"]","[class^=\"ads\"]","[id^=\"adchange\"]","#alsobox","#cookieinfo","div[id*=\"col_2\"]","[id*=\"advertisment\"]","#sutik",".bannergroup","#_iph_cp_popup,\n#cookie-bar,\n#cookie-notice,\n#cookie-window,\n#cookiebar,\n#hirdetes,\n#hirdetesek,\n.cc-banner,\n.cc-banner-wrapper,\n.cc-window,\n.cc_banner,\n.cc_banner-wrapper,\n.cc_window,\n.hird,\n.hirdetesek,\n.leet_product_banner_container,\n[class*=\"overlayBg\"],\nins[id^=\"aswift_\"]",".hirdetes","#cookie-law,\n.banner_middle",".ads_show_ad_title",".banner-wrapper",".banner-container","#overlay_readers_letter,\n#stickyHomePageRecommender,\n#webPushPopup,\n.a-hirstartRecommender,\n.m-donationBottomLine,\n.spklw-post-attr[data-type=\"ad\"],\n.widget-mini-article",".adaptiveAd[id^=\"444_cikk_mobil_\"],\n.adaptiveAd[id^=\"444_cikk_pc_\"],\n[id*=\"-banner-\"]","#text-5,\n#text-6","#galsoreklam,\n#oldalreklam,\n[href=\"https://777blog.hu/reklamblokkolo-kikapcsolasa/\"],\ndiv#rechtangle.widget:nth-of-type(5)","#cookieBox,\n#cookieBox_bg","#cookies-alert,\n[class^=\"zone_\"]","#g0,\n.az-layer,\n.big_badge,\n.floating-help-wrapper","[class*=\"ads\"]","#ajanlo",".flyout","[style^=\"min-height: 128px; background: url(\\\"https://static.agroinform.hu/static/site/img/hirdetes_up.png\\\") no-repeat center bottom -1px;\"]","#alapjarat_cikk_fekvo_1,\ndiv.header + .clearfix + .clearfix","#block-block-16,\n#block-block-22,\n#block-views-ajanlo-block,\n#sticky_footer",".mailingActionC",".ui-widget-overlay","[aria-describedby=\"cookies-dialog\"]","div.cikk_zona,\ndiv.rightside > iframe",".sidebar1 > div:first-child,\n[id^=\"hird_\"]",".mask,\n.showLink.reveal","[class*=\" adH\"]","#cookie-disclaimer,\n.brandbox",".tamogatoi,\n.wp-caption","#facebookPopUp,\n#facebookPopUpBackground,\n#szechenyi-container,\n.plus-wrapper","#_cikk_jobbhasab_2,\n#_cikk_jobbhasab_3,\n#_fooldali_header_alatti_banner,\n#_fooldali_header_banner,\n#_fooldali_jobbhasab_2,\n#_fooldali_jobbhasab_3,\n#custom_html-18,\n#custom_html-19,\n#custom_html-2,\n#custom_html-20,\n#custom_html-21,\n#custom_html-23,\n#custom_html-26,\n#custom_html-7,\n#custom_html-8","#custom_html-10","[class*=\"Advert\"]","[class*=\"etarget\"],\n[class*=\"szamlatabla\"]","[class*=\"hirdetes\"]","#CybotCookiebotDialog",".ads","#adds","script + ins + h5",".cookie-notice-container","#article-2,\n#block-block-30,\n#block-block-60,\n.region-content-1-1 > div:last-child,\n.region-content-1-1 > div:nth-child(-1n+3),\n.region-content-1-3 > div:nth-child(-1n+2),\n.region-content-1-3 > div:nth-last-child(-1n+5),\n.view-banner-blokkok","#cookie","#popupajanlo","#total,\n.category-section.ad,\n.minisite","app-article-subscription-box,\napp-newsletter-modal","main + .ok-prerender","iframe[src=\"https://tunderszepek.baon.hu/tunderszepek-banner\"]",".widget_media_image",".pea_cook_wrapper","[class*=\"adcikk\"]",".tapeta.fixed,\n[data-ai],\nblockquote","[id*=\"sponsor\"]","#karrier,\n.modal,\n.modal-dialog",".modal-backdrop","#footerLogos,\n#pe_confirm,\n#underArticleAdvertisement,\n[id*=\"-ad-\"][data-x=\"1\"],\n[id^=\"div-gpt-ad-\"] + [class$=\"widget\"],\n[style=\"width:100%;text-align: center; margin-bottom:15px;\"],\na[href*=\"gemius\"],\nbody > .extraContentSection:nth-of-type(-1n+3)","#articleOfferFlag","#pe_confirm_optin_6","#ad-cikk1,\n#ad-cikk2,\n#ad-fekvo1,\n#ad-fekvo2,\n#ad-jobb1,\n#ad-jobb2","#pe_confirm_optin_1","#taft,\n.living-earth,\n.meropixel-hide,\n.share,\n[class*=\"follow_promo_figure\"],\n[id*=\"cp_popup\"],\ndiv[class*=\"_ad\"],\ndiv[class*=\"adv\"],\ndiv[class*=\"blh-billboard-ad\"],\ndiv[id*=\"wAdBox\"]","[class*=\"adbox\"]","[id*=\"Banner\"]","div[class*=\"etarget\"]","#fbox-background","#lightview1,\n[class*=\"popupBanner\"]","#cookie_policy,\n#lw_bg1,\ndiv[style^=\"height:\"]","#newASZFLayer","#onetrust-consent-sdk,\n.o-banner--hirdetes",".real-estate-wrapper",".cookie__wrapper,\n.subscription-box,\nA[href=\"/jatek\"],\nA[href=\"/nyarimagazin\"],\n[class*=\"__ad\"],\n[class*=\"adContainer\"],\na[target=\"_blank\"][class=\"videa-wrapper\"],\niframe[src*=\"koponyeg.hu\"]",".newsletter-box","#wpgtr_stickyads_textcss_container,\n.extpp-container,\nbody > br:first-child,\nbody > br:first-child + center,\nbody > br:first-child + center + br,\nfont + center,\nfooter + font, footer ~ br","#onesignal-bell-container,\n#onesignal-slidedown-container","#custom_html-11,\n#custom_html-6,\n#media_image-17,\ndiv[style=\"margin-top:20px;\"]","#upprev_box","div.bpkad","#full-desktop,\n#full-mobile,\nheader + div[style^=\"margin:\"]","#cooker_container,\n.banner_main_page_wrapper","#cadre_alert_cookies,\n#pa-push-notification-subscription,\n#sp-right > .sp-column > .sp-module.hidden-mobile,\n.banneritem","[class^=\"adsense\"]",".advert,\n.occsz-banner",".ads-container",".ads-left-container,\n.ads-name-title,\n.ads-right-container,\n.cookie-box-cnt,\n.infobar-cnt,\n.popup-ad,\napp-ads,\niframe[src^=\"https://cfusionsys.com\"]","#cookie-policy-content,\n.ad-article-comment,\n.ad-article-end,\n.ad-article-inside,\n.ad-article-inside-automatic,\n.ad-article-under-lead,\n.ad-content-top,\n.ad-header-after > *,\n.ad-header-after-article,\n.share-article","#web-push-popup","[class*=\"-adv\"]","#CookieAcceptLayer,\n#bdism1,\n#cikkajanlo,\n[class*=\"adv-\"]",".art-sidebar1,\n.art-sidebar2","#fadeandscale_background,\n#fadeandscale_wrapper",".enews-article-content .endless-shared-area",".sb-right > div:first-child","#cookie-law-info-bar","#banner_sav",".bannerContent","#headerBanner,\n#popupContentBanner-modal,\n.col-md-4.blog-sidebar:nth-child(even),\n.slidingBanner,\n.tablet-advert,\n.totop,\n.widgetDefault",".billboard","#billboard,\n[class*=\"prbox\"],\n[id^=\"linkbox_article\"]",".region-header.region",".jquery-modal.blocker.current",".cikk-halfpage.t-article-container_sidebar > div:first-child,\n.menu-sponsor_link,\n.rovat-halfpage.t-rovat-container_sidebar > div:first-child,\n.tctk,\n[id*=\"szponzoracio\"],\niframe",".cikk-vegi-ajanlo-reklamok","[id*=\"hirdetes\"]","#interstitial",".adbd-layer","body > section:not(.site-header):not(#toreskar):last-of-type","[class=\"td-a-rec td-a-rec-id-content_top  tdi_62 td_block_template_1\"],\n[class=\"td-a-rec td-a-rec-id-header  tdi_53 td_block_template_1\"]","[id*=\"_ad\"]",".hirdetes-block","[class*=\"ad_\"]","[id*=\"ad_\"]",".detailRightAds,\n.min700height-desktop,\n.rltd_container [id^=\"rltd-ad-\"],\n[class*=\"ad-\"],\n[class^=\"ads \"],\n[id^=\"ad-\"],\n[style=\"min-height: 300px;\"],\na[title=\"Hirdetés\"],\ndiv.wrapAds",".ibb-banner-decor","[id^=\"ad_\"]","div[class*=\"contentBanner\"],\ndiv[style=\"text-align: center; margin-bottom:10px; position: relative;\"]",".sgpb-popup-dialog-main-div-wrapper",".penci-wrap-gprd-law,\n.sgpb-popup-overlay",".rckaexclude",".super","div.cookieLayer,\ndiv.supportModal","IFRAME","#article-recommend-popup,\n.adaptiveAd,\n.cookie-popup,\n.overlay-popup","[class*=\"_adv \"]",".popupunderlay,\n[class*=\"adPlace\"],\n[class^=\"goAdverticum\"]","[class*=\"adzone\"],\ndiv[id*=\"elementor-popup-modal-\"]","#catapult-cookie-bar","#darklayer,\n.views-field-nothing,\n[class*=\"_ad \"],\n[id*=\"_ad-\"]","#femina-shop-ajanlo-slider,\n.doboz_harmados,\n[class*=\"kepeslinkes\"]","div[class*=\"reklam\"]",".crp_related,\ndiv[id^=\"forbesad\"],\np + [class*=\"-bekezdes-utan-\"]",".foot-logos.col-md,\n[href=\"https://www.barion.com/hu/vasarlok/arak-vasarloknak/\"],\na[href=\"http://consumer.huawei.com/hu/phones/mate10series/\"]","#accept-container","[class*=\"banners\"],\n[href*=\"hirdetesek\"]",".etarget",".facebook-layer-box","#content-container > div > a:not([class*=\"MailListItem-\"]),\n[class*=\"magnum\"]","[class^=\"container-\"][class*=\"adZone\"]",".grey-popup-layer","#background_ad_top","#right > .xabrew300.box",".partners",".spleft,\n.spright","[class$=\"responsive-300px-600px\"],\na[onclick*=\"/muvelet/hozzaferes/kapcsolodas.php?id=\"],\nbody > style","#thanks > .hlist.nohead,\n.xabrecontainer,\na[onclick*=\"$.ajax\"],\ndiv[class*=\"xabre-responsive\"]:not([class*=\"-980px-139px\"])",".roadblockcont",".act_hun,\n.adt_hun","#qc-cmp2-container,\n[id^=\"ibb-\"][class*=\"banner\"]",".leavingPopupLayer","#partnerek","[id^=\"zone\"]",".ad",".box-wrapper > .box-actual-magazine + .box-html","#adryf,\n.rltdwidget,\n[href^=\"https://www.webminute.hu\"],\n[id*=\"aswift\"],\ndiv.reklam_jobbra,\ntd[style=\"width: 10px;\"]:empty","#cookiekezeles","#banner,\ndiv[class*=\"Advert\"]","[class*=\"contentBanner\"]",".accept-cookies","div[id^=\"jqueryFloating\"]","#cookie_bar,\n#infobar","#banner2016kormanyhu,\n[id*=\"banner_1_29_\"]",".catch-click",".banner-widget-container","[class^=\"moove-gdpr-\"]",".Ad,\n[id*=\"Ad_\"]",".Clear,\ndiv[id*=\"AdContainer\"]","#top > .p-0.container","#ajanlo_box_ah,\n#lightwindow_overlay","#player,\n#superbox",".szkozepkis","#kapubanner,\n[id*=\"_ads\"],\n[id^=\"cookieconsent\"]",".box_remote,\n.fbcont2,\n.fbfollow,\n.fbshare,\n.h-sideboard_2,\n.kalkulator","[id*=\"hirdet\"]","#cookiewarnbar","#nyeremenyModal,\n[class=\"modal-backdrop fade show\"],\n[id*=\"popup\"]","div[id*=\"Banner\"]","div[id*=\"zone-wallbanner-header\"]","#gyuri1,\n#gyuri2","[class*=\"billboard\"]","#cookieAlertBox,\n.banner_container,\n.banner_widget,\n.sy-box","[class*=\"-ad-container\"]","P[class*=\"banner\"]","[id^=\"advert\"]","div[class*=\"banner\"]","EMBED,\ndiv[class=\"module noheading\"]","#tetszett","[data-adblockonly]","#cucc,\n#layerbanner","#custom_html-3","#euro-event,\n#sponsors,\n.gdpr-cookie-notice","[class*=\"_ad\"]","#lebegodoboz,\n#szupertorony,\n[id*=\"-reklam\"],\n[id*=\"fancybox\"],\n[id^=\"hirdetes_jobb\"] + div,\n[id^=\"hirdetes_jobb_2\"] + div + div,\n[id^=\"szuperbanner_\"]","[id^=\"hirdetes\"]","#webpushSelctorFormId,\n.adcaption,\n.article-menu.panelgap,\n.article-otherelements-container content,\n.articlebox.clear.sidebar-ajanlat,\n.block-ms-box2,\n.cimlap-ajanlat.elem-1180.cimlap-grid-elem,\n.hosting,\n.hvg_push,\n.jobline-palyakezdo-feed,\n.selectWidget,\n.support-stripe,\n[class*=\"adtype-\"],\n[class=\"articleitem clear smallimage imgleft\"],\n[class=\"site-scarab-bottom open\"]","[class*=\"adsense\"]","[id*=\"-ad-\"]",".parallax_bottom,\n.parallax_top","div[class*=\"ad_\"]","#announcement,\n#cikktoolbaradomany,\n#cookiealert,\n#sidebar > table,\n.cikkszovegaction,\n.cikkszovegakcio,\n.kommentadomany,\nbody > div > a[target=\"_blank\"],\ndiv[id*=\"hirdetes\"]","[class*=\"hird-\"],\n[class*=\"hird_\"],\na[data-bs-content*=\"(hirdetés)\"]",".banner",".article-cards-inlist-ad,\n.article-text > p,\n.footer-banner-row,\n.iho-adzone,\n.social-icon","[class*=\" ad\"]",".topAdv",".shopline-box,\n.travelo-box",".cikk-vegi-ajanlo-reklamok-container","[class*=\"ad-container\"]","#ad_null_position,\n#also_bannerek,\n#index_shopline","#ot2015,\n#rightcoltd,\n#site_header","#main div[class*=\"banner\"],\n#sidebar > div[class*=\"banner\"],\ndiv.read div[class*=\"banner\"]","#_ao-cmp-ui,\n.am_targetvideo_container,\ndiv[data-qa=\"oil-Layer\"]",".notification-popup","#bottompopup","#leftPoszter-section,\n#salePoszter,\n.home-section-banner,\n.u-hide\\@mobile.flag-wrapper--fill.flag-wrapper.grid-col-lg-1-4.grid-col-md-1-2.grid-col-1.article-list__item","div[class=\"tl-state-root tve-leads-ribbon tve-trigger-hide tve-tl-anim tve-leads-track-ribbon-1 tl-anim-slide_top tve-leads-triggered\"]","#cookie-law-info-again","#roadblock-adcum-zone","#joylike,\n[class*=\"Adverticum\"],\n[class^=\"adIn\"],\n[class^=\"adPlace\"]","#cookie_container","[data*=\"banner\"]","#header","#cookieSpan,\ndiv.bottom_sticky_banner","#check-also-box,\n#fejlec-hirdetes,\n[id^=\"cikken-beluli-hirdetes-\"]","#cookie-consent-dialog","#above_article_banner,\n#advertisements,\n#below_content_banner,\n#left_banners,\n#right_banners,\n#social,\n#wide_banners,\n.article_banner,\ndiv.subscribe_module,\ndiv[class=\"fb-like fb_iframe_widget\"]",".cookies-message-container","#cookieAcceptanceContainer","[id*=\"advert\"]","#nap_ajanlata,\n.tamogatott,\n.vippr,\n[class*=\"banner-\"],\n[class*=\"offer prbox\"],\n[class*=\"pr--\"],\n[class^=\"pr-\"],\n[class^=\"prbox\"],\ndiv.endless-shared-area,\ndiv[id*=\"billboard\"],\ndiv[id*=\"linkbox\"]",".qc-cmp2-container","#vshu-box,\n.integralt_felso_zona,\n.recommendationzone,\n[id*=\"adsense\"]",".kapu,\n.mini_slider_div0","[class*=\"Banner\"]","div.accept-cookies","[name*=\"banner\"]",".adbg",".category > #prodstop1,\n.single-post > #prodstop1","#current_promotions_block,\n#skin-left,\n#skin-right,\n.box-general.clearfix,\n.discount.clearfix.nonLpk,\n.fullwidth.current_promotions_block","#beuszoAjanlo,\n#cikkalatti,\n#floating-recommendation,\n#mc-holder,\n#ovasar,\n#pr-box,\n#right-ecom,\n#top,\n.col-visible-xl.r-side.col-xl-4,\n.email-under-article,\n.hird300,\n.kiskepes,\n.magnum,\n.panorama-wrapper,\n.pr-item,\n.spar,\n.szoveges,\n[data-module-name=\"hirlevel\"],\n[data-module-name=\"ingatlanbazar\"],\n[data-module-name=\"koponyeg\"],\n[data-module-name=\"videa\"],\n[id^=\"szponz-\"],\n[size=\"300x600\"],\ndiv[class$=\"widget\"]","#ac",".newsletter-layer,\ndiv.article-recommendation-zones","#accept-cookie","#page-top",".cikkhirdetes,\n.sticky1hirdet","[class*=\"adserver\"]","[class*=\"-ad\"]","#navi_btm + div,\nimg[src^=\"https://logout.hu/muvelet/hozzaferes/kapcsolodas.php\"]",".nobanner,\n[class^=\"banner_\"],\n[id^=\"banner_\"]","#exposeMask","#page_PopupContainer",".goAds,\n.visible-lg.container","#eucookielaw,\n.ad-magnum,\n.ad-verticalfull,\n[class*=\"simpleads\"]","#block-block-12,\n#block-block-19,\ndiv.gdprBoxContainer,\ndiv.promo-bar",".modal[role=\"dialog\"],\napp-calendar,\napp-facebook-popup,\napp-newsletter-popup","[class*=\"articleBanner\"]","#cboxOverlay,\n#colorbox","#cookie-msg","#floatingBox,\n.ui-floating-message,\n.wsp-wrap,\n[class*=\"tBanner\"]",".banner_row,\n.proposer,\n.read_vs,\n.rightbanner",".cookie-bar,\n.mrc-bnr-plchldr,\n.popup-wrap,\n[class^=\"banner\"]",".sticky",".article-textlinkbox","#ad-image-big,\n#fadeandscale,\n#portfolioEzekIsErdekelhetnek,\n#recipeAndRelateds > h2.noprint,\n#sidebar_ads_box_2,\n.billboard-cikk,\n.hir-fekvo,\n[class*=\"ads_box\"],\ndiv[class=\"billboard fr\"],\ndiv[class=\"fej-elso-sor cf\"],\ndiv[id*=\"-ad-\"]",".allow-cookie-stripe","#app-advice,\n#app-commission,\n.x-marketing",".cim-reklam,\n.widget_text.widget.widget_custom_html",".om-holder","[class*=\"box ajanlo\"],\n[id*=\"ctnet\"]",".adbox","#sticky,\n.b336","[align=\"center\"] > a[href*=\"banner\"],\n[class^=\"ui-dialog\"]",".fb-page-cont,\n.topHorizontalBanner,\n[src^=\"/public/img/efi/\"]","#mobilinstruments,\n#stickyfooter,\n.cikkajanlo,\n.totalcar,\n[id*=\"billboard\"],\na[href^=\"https://bit.ly/\"]","#custom_html-4,\n#primary-sidebar,\n.right","#sidebar",".banner-bottom",".ckwrap,\n.list-item.has-banner","#didyou,\n#wallpaper_left,\n#wallpaper_right,\n.bet365_connect,\n[class*=\"_szponzor_\"]","[class^=\"ad_\"]","[class*=\"adlabel\"],\n[class*=\"leftlogo\"],\n[id*=\"adserver\"]","div#show_news_box,\ndiv.cookie-message","#tab-widget",".m-fbPopup",".m-pcPromoArticlePointsLayer,\n.m-pcPromoFooterLayer,\n.rubAd,\ndiv.m-articleStickySocial,\ndiv.m-breakingLayer","[data-placeholder-caption=\"hirdetés\"]",".noprint,\ndiv[class*=\"ad-container\"]","#cookie-consent",".colorbox-cookiepolicy","#datasheetNavHelp","#slidebox,\n.highlighted-banner","#detect + .wrapper","[class*=\"ad-warning\"],\n[class=\"ad-blocked\"],\n[class=\"p-t-10 ad-blocked\"]",".col-xl-8 + aside.col-xl-4.col-visible-xl,\n.mw-allow-notification-dialog,\napp-article-page app-sidebar app-free-display-inventory,\napp-sport-article-page app-sidebar app-free-display-inventory,\nkesma-advertisement-adocean,\nsection.spar","div.facebook-layer-box","[class^=\"ad\"]","#zone-halfpage,\n#zone-roaddblock,\n.centercol.sponsor","#zone-titleheader",".slidein.popup.closeablenotification.scripted,\n.zone[data-zoneid]","#cookieconsentbar,\n#subscribepopuppanelalign",".banner-content,\na[href*=\"banner_click\"]","#kutu","#recommend,\n.frame-center,\n[class^=\"f10\"],\n[class^=\"grbox\"]","[class^=\"ads-\"]",".justClassBanner","#cikkertesito-reg-form,\n.banner.clearfix,\n.inner","#pushpushgo-container,\n.ad-container,\n.ph-flexi-box-wrap,\n.ui-dialog[aria-describedby=\"newsletter-modal\"],\n.ui-widget-overlay.ui-front,\n[aria-describedby=\"dialog-welcome\"],\n[class*=\"adbreak\"],\n[class*=\"c_banner\"],\n[class*=\"placeholder\"],\n[class=\"ph ph-responsive-wrap\"],\n[data-analytics-value]","#popup",".articleMetadata,\n.container.css-table > div:not(.container),\n.edgebox-widget.show,\n.introjs-helperLayer,\n.introjs-overlay,\n.introjs-tooltip,\n.port-adbd,\n[class*=\"_spon\"],\n[class=\"advert fix-advert\"]","#BlockCikkajanlo,\n#mymodal2,\n.footer--partners,\n[data-qa=\"oil-Layer\"],\n[data-qa=\"oil-full\"],\ndiv[id*=\"adocean\"]",".lead_alatti_txt,\n.mfor_cikk_beuszo,\n.news-page > div[style*=\"background: #FFF900;\"]:first-child,\n[src*=\"/banner/\"]","#newsletter_footer,\n#twister-banner,\n.cookie-layer","#fb_like_modal",".popup","#top > div:first-child",".banner__ad","[class*=\"banner \"],\n[id^=\"overlay\"]","[aria-describedby=\"newsletter-modal\"],\n[class*=\"adv--\"]","#wallpaper,\n.wallpaper-link","#psCookieNotification,\ndiv.ad-sm-text","#cookieconsent",".adblock-confirm,\n.newsletter-modal",".std0,\nIMG[src=\"images/hirdetes.gif\"]","#gdprCookieWrap,\n[class*=\"AdWrap\"],\n[id*=\"AdWrap\"]","#enableCookieDiv","[id*=\"ctnet_ad_\"],\ndiv[class*=\"ad \"]","#fhr-cookie-bar,\n#fragment,\n[class*=\"-ad-\"]","#text-9,\ndiv.sprtrvs-ad,\ndiv.tt-shortcode-1,\ndiv.tt-shortcode-2","#menusimple2 + div,\ndiv[style=\"width:100%;height:14px;text-align:left;font-size:9px;letter-spacing:3px;color:#5F5F5F;border-bottom:1px solid #CCC;margin: 10px 0 5px 0;\"],\nscript[async] + [data-widget-id]","#push-notification,\n.kezdo-kereso,\n[box-name=\"Hirdetés\"],\n[class*=\"Adv\"],\n[class*=\"peelgame\"],\n[class^=\"adact\"],\n[class^=\"adx_\"],\n[id*=\"Advert\"],\n[id*=\"peelgame\"],\ndiv.container.banner-container.left,\ndiv.container.banner-container.right,\ndiv.container.banner-container.wide > *","#google-display","[src*=\"hirdetes_\"]",".cikk-hir,\n[class*=\"googlebox\"],\ndiv[class*=\"adserver\"],\ndiv[id*=\"kirakat\"],\ndiv[id*=\"rightad\"]","[class=\"wp-container wp-top\"]","div.fb_shares",".modal_popup","[src^=\"/uploads/images/banners/\"]",".active.popup-screen,\n.popup-box,\n.stream-item,\n[id^=\"stream-item-\"]",".rightContent + [style]","#cookie-policy-bar,\n#hatterkep,\n#rovatpromo,\n.adslabel,\n[class^=\"ads_\"],\n[class^=\"ads_\"] + .clear,\niframe[class*=\"my-fbrecommend\"]","#ecom_pr,\n.ad-wrap-100,\n.jobb_300","#magnum","[class*=\"google-cikk\"]","[style=\"height: 250px\"]","#app-cookie-policy","#modal--umbrella,\n.recommendation.recommendation--out,\n.recommendation.recommendation--pr,\n.title-section__sponsored","div.banner",".kiemelttartalombox_feher",".border-top.p-4.bg-8.cookie-alert__inner",".spu-bg,\n.spu-box,\n[style=\"margin: 8px 0; clear: both;\"]","[id*=\"_bnr\"]",".sgpb-theme-3-overlay.sgpb-popup-overlay-1402.sgpb-popup-overlay,\nimg[class*=\"sgpb-\"]",".cross-site-programmatic-zones",".cikk-torzs-content-container > .kep_szeles.kep,\n.hasznaltautok-iframe-cikk-torzs,\n.header-tk-ajanlo,\n.joautok-iframe-cikk-torzs,\n.microsite,\n.szelso-jobb-lead_container,\n.totalkarWidget,\n[class*=\"adblokk\"]","#ads,\n[id*=\"adocean\"]",".ooono_promo","div.qc-cmp-ui-container",".adsense","#popunder_featured,\n.banner_box",".leftSide > .bnr,\n.rightSide > .bnr","#blanket,\n#popUpDiv",".hird-cont",".banner-commercial,\n.reklamnagy",".page-rightside-advert,\ndiv[id*=\"advert-container\"]","[class*=\"szovegkozi\"],\n[id*=\"reklam_\"]",".adszoveg,\n[class*=\"ad_container\"],\n[class*=\"guestbox\"],\ndiv[class*=\"microsite\"],\ndiv[id*=\"microsite\"]","#backdrop,\n#best-cars-layer,\n#beta-message-invite,\n.centerHead,\n[class*=\"Etarget\"],\n[class*=\"Hirdetes\"],\n[class*=\"advert \"],\n[class*=\"szponzor\"]","[style^=\"bottom: 0px; left: 0px; position: fixed; width:\"],\ndiv[class*=\"-ad\"],\ndiv[class*=\"hird-\"],\ndiv[class*=\"hirdetes\"],\ndiv[class=\"fej_felett cf\"],\ndiv[id*=\"etarget\"]","#sitemessage",".top-video-container-banner","[class^=\"adv\"]","[style=\"z-index: 999999; background: rgba(0, 0, 0, 0.901961); display: block;\"]",".no_banner",".footprint_cookie","[id*=\"_ajanlatunk_\"],\ndiv.floating_share","[id*=\"AdFrame\"]","[class=\"wc_content wc_contentwide\"],\n[id*=\"AdZone\"]","div.penci-wrap-gprd-law,\ndiv.sgpb-popup-dialog-main-div-theme-wrapper-1,\ndiv.sgpb-popup-overlay-42657,\ndiv.sgpb-popup-overlay-42658","[id*=\"sense-\"]","#advert",".logopic2 + .fll,\n.overlay,\n.pupopadbox,\n[class=\"cikkbanner hirdbox mh40 listafriss\"],\n[style=\"margin-left:auto;margin-right:auto;width:980px;text-align:center\"]","#sidebad,\n#spu-main,\n#text-html-widget-6,\n[class*=\"PostAd\"],\n[class=\"e3lan e3lan-top\"],\n[id*=\"-bg\"]",".Cookie--bottom,\ndiv[id^=\"ga_g\"]","[href^=\"https://rosszlanyok.hu/\"]","#adserving-tag-hb,\n#pa_sticky_ad_box_middle_left,\niframe[id^=\"postbid_if_\"]",".hover_bkgr_fricc","#RedUserNotification","#zadost,\n.cookies",".wrapper > .slider",".widget.widget_text",".back","#article > section > div:not(.article_content)","#st-2,\n.cookie-consent","#Promolecek,\n.header-1,\n[class*=\"Reklam\"],\ndiv[id*=\"Reklam\"],\ndiv[id*=\"anner\"]",".myftp-widget,\n[id^=\"fancybox-\"],\n[id^=\"myftp\"]"];

const hostnamesMap = new Map([["carstyling.com",0],["cfusionsys.com",1],["dictzone.com",2],["eredmenyek.com",3],["gumiszoba.com",4],["hazipatika.com",[5,6,7,8]],["delmagyar.hu",[5,29,70,72,82,133,134]],["kisalfold.hu",[5,14,72,82,133,263,264]],["mindenkilapja.hu",5],["sg.hu",[5,357]],["mobilarena.hu",[7,168,177,179,180,304]],["24.hu",[8,44,45]],["hosszupuskasub.com",9],["humormagazin.com",10],["hungliaonline.com",[11,12]],["vilagunk.hu",[12,406]],["hu.ign.com",13],["ingatlan.com",14],["data.hu",[14,130]],["harmonet.hu",[14,72,203]],["klubradio.hu",14],["portfolio.hu",[14,247,344]],["szatmar.ro",[14,15,427]],["ingatlanmagazin.com",15],["revizoronline.com",[15,29]],["444.hu",[15,46]],["autopro.hu",[15,74,75]],["bitport.hu",[15,29,89]],["blogstar.hu",[15,102]],["dimo.hu",15],["donna.hu",[15,29]],["epresso.hu",15],["eropolis.hu",15],["es.hu",[15,29,157]],["est.hu",[15,159]],["femina.hu",[15,30,72,164]],["figyelo.hu",[15,98]],["galamus.hu",15],["gondola.hu",[15,29,185]],["gportal.hu",15],["gyoricegregiszter.hu",15],["gyorplusz.hu",[15,129]],["hir6.hu",15],["hirstart.hu",[15,72]],["hrportal.hu",[15,59,223]],["ingatlanok.hu",15],["intima.hu",15],["jogiforum.hu",15],["kalohirek.hu",[15,29,254]],["kamaszpanasz.hu",[15,255,256]],["kapos.hu",15],["kaposvarmost.hu",15],["komment.hu",[15,29,72]],["lifemagazin.hu",[15,29,278]],["lovebox.hu",15],["magyarhirlap.hu",[15,29,177,287]],["mainap.hu",15],["mfor.hu",[15,297]],["mixonline.hu",15],["mmonline.hu",15],["mno.hu",[15,98,99,146,303]],["moly.hu",[15,305]],["napi.hu",[15,29,72,140,308]],["napiszar.hu",15],["nemzetisport.hu",[15,29,150,238,299,313,314]],["nice.hu",[15,316]],["noinetcafe.hu",15],["noplaza.hu",15],["novagyok.hu",[15,29]],["nyest.hu",[15,322]],["origo.hu",[15,29,70,276,328,329]],["partyponty.hu",[15,29]],["prim.hu",15],["retikul.hu",[15,354]],["ricsajok.hu",15],["sporthirado.hu",[15,29]],["szoftverbazis.hu",[15,275,375,376]],["tech.hu",[15,29]],["valasz.hu",15],["vidget.hu",15],["weborvos.hu",[15,226]],["wellnesscafe.hu",[15,99,411]],["kronika.ro",15],["sportoldal.ro",15],["deres.tv",15],["karpathir.com",16],["kekfeny.com",17],["ketkes.com",18],["magyarszo.com",[19,20]],["napinemszar.hu",[20,310]],["najlepsie-clanky.com",21],["napiszar.com",22],["napiuzlet.com",23],["nemkutya.com",[24,25]],["joy.hu",[24,253]],["paleomedicina.com",26],["pannonrtv.com",[27,28]],["elemzeskozpont.hu",27],["femcafe.hu",[27,72,123,163]],["pdafanclub.com",29],["bacsmegye.hu",[29,81]],["betegvagyok.hu",29],["bien.hu",[29,42,72,88]],["divany.hu",[29,72,137,138,139,140,141,142]],["duen.hu",29],["egeszsegkalauz.hu",[29,93,96,148,149]],["eletmod.hu",[29,30,72,154,155]],["eron.hu",29],["geeks.hu",29],["hajdupress.hu",[29,72,197]],["hirposta.hu",29],["index.hu",[29,72,138,141,240,241,242,243]],["ipon.hu",[29,249]],["kezilabda.hu",29],["kiskegyed.hu",[29,52,93,149,184,265]],["kreativ.hu",[29,268,269]],["life.hu",[29,70,100,171,274,275,276,277]],["multiplay.hu",29],["pirulapatika.hu",29],["revizoronline.hu",29],["romnet.hu",[29,72,139]],["startlap.hu",[29,230,364]],["stylemagazin.hu",[29,368]],["trademagazin.hu",29],["velvet.hu",[29,72,140,141,240,242,389,400]],["kakukk.ro",29],["svedasztal.com",[30,31]],["autonavigator.hu",[30,70,71,72,73]],["szervuszausztria.hu",[30,31]],["ecoline.hu",[31,144]],["teltlanyok.com",32],["5mp.eu",33],["autobazar.eu",34],["eudomain.eu",35],["netbulvar.eu",36],["tarhely.eu",37],["utajovobe.eu",38],["hu",[39,40]],["liked.hu",[40,279]],["112press.hu",41],["168.hu",[42,43]],["player.hu",[42,119,341]],["twice.hu",42],["hiros.hu",[44,215]],["5percblog.hu",47],["777blog.hu",48],["ado.hu",49],["adoforum.hu",50],["adozona.hu",[51,52]],["eduline.hu",[52,70,144,146,147]],["agrarszektor.hu",[53,54]],["hellovidek.hu",[53,207]],["infostart.hu",[53,54,246,247]],["penzcentrum.hu",[53,337]],["agroinform.hu",55],["alapjarat.hu",56],["alfahir.hu",57],["alza.hu",58],["americantourister.hu",[59,60]],["raketa.hu",[59,352]],["androgeek.hu",61],["angol-magyar-szotar.hu",62],["aranyoldalak.hu",[63,64]],["telefonkonyv.hu",64],["arukereso.hu",65],["atlatszo.hu",66],["atv.hu",67],["automotor.hu",[68,69]],["budapestkornyeke.hu",[69,111,112,113,114]],["blog.hu",[70,97,98,99,100]],["hasznaltauto.hu",[70,73,204]],["olcsobbat.hu",[70,139,324]],["cegbongeszo.hu",[72,99,117]],["hajokonyha.hu",72],["heol.hu",[72,82]],["hwsw.hu",[72,133,234]],["itmania.hu",[72,154]],["kitekinto.hu",[72,86,139]],["koponyeg.hu",[72,219,230,266]],["ma.hu",[72,154,155,270]],["motorrevu.hu",72],["noitema.hu",72],["onlinecegjegyzek.hu",72],["sonline.hu",[72,82,360]],["storyonline.hu",[72,367]],["szabadfold.hu",[72,369]],["szoljon.hu",[72,82,377]],["totalcar.hu",[72,141,142,240,241,387,388,389]],["travelo.hu",[72,329,391]],["vezess.hu",[72,99,318,401]],["offline.hu",[74,162]],["telekom.hu",[74,379]],["autosjog.hu",[76,77]],["helyitipp.hu",[77,208]],["napjainkportal.hu",77],["autoszektor.hu",78],["babanet.hu",[79,80]],["szepsegbroker.hu",[79,342,373]],["bama.hu",82],["baon.hu",[82,84]],["beol.hu",[82,87]],["boon.hu",82],["duol.hu",82],["feol.hu",82],["haon.hu",[82,99,200,201]],["kemma.hu",82],["nool.hu",82],["szon.hu",82],["teol.hu",82],["vaol.hu",82],["veol.hu",82],["zaol.hu",82],["bankmonitor.hu",83],["bebiztositva.hu",[85,86]],["bkv.hu",[90,91]],["mandiner.hu",[91,106,289]],["blikk.hu",[92,93,94]],["glamour.hu",[93,94,149,183,184]],["blikkruzs.blikk.hu",[95,96]],["freemail.hu",[98,170,171,172]],["mon.hu",[99,200]],["metazin.hu",100],["blogspot.hu",101],["tudtade.blogstar.hu",103],["bonuszbrigad.hu",104],["bookline.hu",105],["borsonline.hu",[106,107,108]],["iho.hu",[108,236,237]],["magyarnemzet.hu",[108,288]],["ripost.hu",[108,355]],["vg.hu",[108,402]],["bpiautosok.hu",[109,110]],["pestisracok.hu",[110,338]],["likenews.hu",[112,113]],["starity.hu",[112,363]],["kekvillogo.hu",[113,114]],["budapestpark.hu",115],["cartourmagazin.hu",116],["ceginformacio.hu",118],["civishir.hu",[119,120]],["computerworld.hu",[121,122]],["gamestar.hu",[121,122]],["pcworld.hu",[121,122]],["puliwood.hu",[121,122]],["gsplus.hu",[122,187,188]],["pcwplus.hu",[122,187,188]],["csaladinet.hu",[123,124]],["csongradihirek.hu",125],["csupasport.hu",[126,127]],["mindmegette.hu",[126,298,299]],["cyberpress.hu",[128,129]],["itthonrolhaza.hu",[129,251]],["dehir.hu",[131,132]],["magyarorszagom.hu",131],["demokrata.hu",135],["dijnet.hu",136],["linkcenter.hu",[139,280]],["transindex.ro",[139,238,268,428]],["totalbike.hu",[141,142,387]],["e-cars.hu",143],["magyarnarancs.hu",144],["economx.hu",145],["sportorvos.hu",[146,362]],["egeszsegtukor.hu",150],["vehir.hu",[150,314,399]],["elelmiszer.hu",151],["elemi.hu",[152,153]],["topark.hu",[152,386]],["epiteszforum.hu",156],["gyakorikerdesek.hu",[157,189,190]],["esport1.hu",158],["evamagazin.hu",160],["f1vilag.hu",[161,162]],["forbes.hu",[162,166]],["filmoldal.hu",165],["fototrend.hu",[167,168]],["gamepod.hu",[168,176,177,178,179,180]],["hardverapro.hu",[168,178,179,202]],["itcafe.hu",[168,177,178,179,180]],["logout.hu",[168,177,178,179,180,282]],["prohardver.hu",[168,177,178,179,180,349]],["fovarosi-hirhatar.hu",169],["zene.hu",170],["accounts.freemail.hu",173],["fressnapf.hu",174],["gamekapocs.hu",175],["gentleman.hu",181],["gepigeny.hu",182],["gphirek.hu",186],["nepszava.hu",[187,219,315]],["hoxa.hu",[190,222]],["gyaloglo.hu",191],["gyartastrend.hu",[192,193,194]],["pharmaonline.hu",[192,339]],["medicalonline.hu",[193,293]],["gyorihir.hu",195],["gyulaihirlap.hu",196],["hang.hu",[198,199]],["magyarhang.org",199],["hatarido-szamitas.hu",205],["haziallat.hu",206],["hestore.hu",209],["hetek.hu",210],["hirado.hu",[211,212]],["videoklinika.hu",211],["hircsarda.hu",213],["hirextra.hu",214],["indavideo.hu",[214,239]],["hirtv.hu",216],["hoc.hu",217],["hogyankell.hu",218],["holtankoljak.hu",[219,220]],["kapcsolat.hu",219],["webbeteg.hu",[219,228,409]],["hotdog.hu",221],["huaweiblog.hu",224],["mlzphoto.hu",[224,301]],["napidroid.hu",[224,309]],["hunbasket.hu",225],["kosarsport.hu",225],["hunhir.hu",226],["hupont.hu",[227,228]],["hvg.hu",[229,230,231]],["vilagszam.hu",[231,405]],["m.hvg.hu",232],["hvo.hu",233],["idokep.hu",235],["ize.hu",236],["napiszex.hu",[236,311,312]],["promotions.hu",[236,350]],["sztarklikk.hu",236],["tvgo.hu",236],["ncore.pro",236],["ilovebalaton.hu",238],["forum.index.hu",244],["infoajka.hu",245],["infobekescsaba.hu",245],["infocegled.hu",245],["infocelldomolk.hu",245],["infodebrecen.hu",245],["infodombovar.hu",245],["infodunaujvaros.hu",245],["infoesztergom.hu",245],["infofehervar.hu",245],["infogyor.hu",245],["infohodmezovasarhely.hu",245],["infokarcag.hu",245],["infokeszthely.hu",245],["infokiskunfelegyhaza.hu",245],["infomiskolc.hu",245],["infomovar.hu",245],["infonograd.hu",245],["infopapa.hu",245],["inforabakoz.hu",245],["infosarvar.hu",245],["infosopron.hu",245],["infoszentendre.hu",245],["infoszigetkoz.hu",245],["infoszombathely.hu",245],["infotamasi.hu",245],["infotatabanya.hu",245],["infoveszprem.hu",245],["infozalaegerszeg.hu",245],["internet-marketing.hu",248],["ite.hu",250],["jofogas.hu",252],["mozinezo.hu",256],["muhelynet.hu",[256,284]],["kapu.hu",257],["kecskemet365.hu",258],["kektura.hu",259],["keol.hu",260],["kfc.hu",261],["kh.hu",262],["gloria.tv",263],["kossuth.hu",267],["marmalade.hu",268],["nol.hu",[268,321]],["turizmusonline.hu",268],["kulturpart.hu",270],["lakberendezes.hu",271],["leet.hu",272],["libri.hu",273],["ok.hu",277],["reblog.hu",277],["videa.hu",[277,403,404]],["litera.hu",281],["superiorhirek.hu",281],["love.hu",283],["lumenet.hu",[284,285]],["mafab.hu",286],["manus.hu",290],["mavcsoport.hu",291],["sorozataddict.hu",291],["mediacenter.hu",292],["menetrendek.hu",294],["merce.hu",295],["meska.hu",296],["mkbnetbankar.hu",300],["mme.hu",302],["mozishop.hu",302],["mult-kor.hu",306],["myonlineradio.hu",307],["telex.hu",[311,380]],["nkmenergia.hu",317],["nlc.hu",[318,319]],["noizz.hu",320],["webforditas.hu",[322,410]],["obi.hu",323],["onroad.hu",325],["onvideo.hu",326],["oprend.hu",327],["otvenentul.hu",330],["hir.ma",[330,416]],["pcforum.hu",[331,332,333,334]],["prog.hu",[331,332,334,348]],["pcguru.hu",335],["pecsma.hu",336],["piacesprofit.hu",340],["politaktika.hu",342],["hu.jooble.org",[342,425]],["port.hu",343],["privatbankar.hu",345],["profession.hu",346],["profitline.hu",347],["propeller.hu",[348,351]],["rendszerigeny.hu",353],["rtl.hu",356],["sielok.hu",358],["simple.hu",359],["sorozatwiki.hu",361],["kereso.startlap.hu",365],["stop.hu",366],["szamoldki.hu",370],["szeged.hu",371],["szeged365.hu",372],["szeretlekmagyarorszag.hu",374],["sztaki.hu",376],["telefonguru.hu",378],["terhesferfi.hu",381],["termalfurdo.hu",382],["thaimatrac.hu",383],["titkokszigete.hu",384],["tlap.hu",385],["traffihunter.hu",390],["turmixvilag.hu",392],["twn.hu",393],["ugytudjuk.hu",394],["usernet.hu",395],["valaszonline.hu",396],["vasarnap.hu",397],["vatera.hu",398],["videaloop.hu",404],["vilagszammagazin.hu",405],["vs.hu",407],["wasabi.hu",408],["widescreen.hu",412],["wikiszotar.hu",413],["feliratok.info",414],["kuruc.info",415],["szekelyfold.ma",417],["filmvilag.me",418],["mozinet.me",419],["online-filmek.me",420],["androbit.net",421],["calculat.org",422],["feliratok.org",423],["hogyan.org",424],["maszol.ro",426],["nepszava.us",429]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.specificImports = self.specificImports || [];
self.specificImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
