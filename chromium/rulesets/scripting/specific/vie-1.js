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

// ruleset: vie-1

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssSpecificImports() {

/******************************************************************************/

const argsList = [".qc",".banner-bottom","#ads-1xbet-catfish,\n#popup-1720497466,\n.banner728,\n.container > div[style^=\"height: 228px\"]",".banner_site,\n.notify_auto,\n.sidebar_box_gray",".banner_top",".catfix","#menubentrai,\n.gnartyx-offads","#fbox-background",".mp-adz","#catfish","#overlay","#banner",".sda-catfish","#adspm4u",".ads-gg-top,\n.container + .col-xs-12.content_wrap,\n.content > .content > .content,\n.wrap-single > .pagination.text-center","#antiblocker,\n#antiblocker_underplayer","#bar_float_r,\n.quangcaomb","#popup-giua-man-hinh",".ad-container","#quangcaopc","#wap_bottombanner",".c-ad,\n.container.mt-1.d-none.d-lg-block,\n.menu-item-object-custom",".align-items-center.justify-content-between.d-flex.col-12 > .d-lg-none.d-block",".sub-menu.d-none.d-lg-flex",".marquee-container",".company","div[id^=\"dnn_\"]",".footer-banner",".btn-odds",".btn-od",".d-lg-flex.d-none.p-0.company.flex-1.table","#preload","html > div[style]",".sk_balloon","a[rel=\"nofollow\"]","#match-child-1,\n.banner-link,\n.block-catfish.text-center.d-lg-none.d-block,\n.container > ul,\n.container.mt-1,\n.logo-cnt > .d-lg-none.d-block,\n.menu-cuoc-one88,\n.mt-5.d-lg-none.d-block.pb-2.text-center,\n.offer,\n.pl-lg-0.col-xl-4,\n.row.d-none,\n.widget-offers__list,\ndiv.d-lg-none.d-block:nth-of-type(3)",".match-detail__offer",".offer__btn",".menu-top-nha-cai",".menu-cuoc-8xbet","#f186fb23a33995d91ce3c2212189178c8","#footer_fixed_ads","#top_oddd",".underplayer_btn","#top_addd",".btn-fanpage.btn-default.btn-block.btn",".toogle-ads",".ads-container","#mp-preload-popup-overlay",".float-ck-center-lt","#haun-player > div[style],\n#primary-nav > div[style],\n.separator",".code-block-1.code-block,\n.navbar-container + .container",".adsMobile,\n.col-chat,\n.offer-rating.widget-offers__list",".dcmm-button-player.row",".adLogoPlayer",".sda-preload-popup,\n.sda-preload-popup-overlay",".banner-top","#bottomFixedDiv,\n#js_pup_navigation,\n#wAdList,\ntr[id^=\"word_\"]",".no-auto-popup",".jw-logo","#player + div[id],\n.playover",".gnarty-offads","#sn-AnchorAd,\n.pAd,\n.relatedPostsAd,\ndiv.pAdin",".adNative",".ads","a[href^=\"/cgi-bin/to.cgi\"]",".block:has([data-adaptive])",".bm_B > div,\ndiv.bm_Ii",".monkey-content-duoicanbiet,\n.monkey-section-tinnoibat,\ndiv.monkey-qc",".list-dat-cuoc",".widget.widget_text","div[id^=\"float\"],\ndiv[id^=\"hide_float\"]",".bannerBox,\n.footerBanner,\ncenter > [href*=\"tlink.vn\"]",".mb-4 > [style=\"min-height: 350px;\"]",".fixed","a[rel=\"noopener noreferrer\"]",".widget-wrap.widget_text",".div_box_adv",".alldiv ~ div[class]",".chapter-content .min-h-\\[275px\\]","iframe[src*=\"ads\"]","[id$=\"bnr\"]",".top-right",".line-ads",".popup",".banner-ads,\ndiv#recent-content:nth-of-type(1)",".adsbygoogle","#bannerContainer1,\n#bannerContainer2,\n#sp-wrapper-hovering-format,\n.wam-banner,\ncenter:has(.adsbygoogle)","div.ad",".ad-manager-forum-list-bottom,\n.ad-manager-forum-list-top,\n.ad-manager-header,\n.ad-manager-thread-view-bottom,\n.ad-manager-thread-view-top,\na[rel=\"noopener noreferrer nofollow\"],\ndiv[style=\"margin:6px 0px 6px 0px\"]","#topbanner",".btn_small_fix_container",".ads-home-feed",".banner-bot-mobile,\n.banner-top-mobile",".preload","[href^=\"https://shope.ee\"]","#latest-censored-videos > .row > div.pb-3.col:nth-of-type(1),\n.v3sb-box",".cat-fish.a-play,\n.overlay",".anhbn-qc",".ezo_ad",".ezoic-ad",".advbox","div[style=\"padding: 0px; margin: 10px 0 0 0 ; width: 100%;text-align: center;min-height: 280px;\"],\ndiv[style=\"width: 100%; min-height: 240px; text-align: center;\"],\ndiv[style=\"width: 100%; min-height: 90px; text-align: center;\"],\ndiv[style=\"width: 100%;text-align: center;min-height: 280px;\"]","[id^=\"bdaia-widget-html\"]:has(.widget-inner > [href*=\"premiumvns.com\"])",".info-footer:nth-child(4)","#countdown,\n.bottom_cnt_ad,\n.tp_ads_incontent,\ndiv.ad_separator,\ndiv[style=\"margin: 10px 0 5px 0; min-height: 250px;\"]","#js-read-body > .text-center.pb-3,\n#js-read__body + .mt-3,\n.nh-read__alert,\n[href$=\"/goout/lazada\"],\nsection.nh-section:nth-of-type(5)","div[class*=\"ads\"]",".ads-embed","#mp-adx-b32","[class^=\"box_adv_ele\"]","#tdi_129","#wap_bottombanner1",".my-banner","#IMAPointernctPlayer,\n.adv_home_300_250,\n.nqc-zone","#itro_opaco","#mobile_content_bottom,\n.BanerTop100,\n.adv-300-right",".popUpBannerBox","#mobile_content_top",".i9bet","a[target=\"_blank\"][rel=\"nofollow noopener\"]","#p-GMH",".sticky-footer","#fakeDown","#anchor-ad",".aSlP,\n.bef,\n.hmvD",".shadow-card + .mt-2","#adsposttop","#adrighttop",".adbox",".w1e48c4420b7073bc11916c6c1de226bb","#scriptDiv",".stream-item","#footer-widget-area",".google-auto-placed",".box,\n.pum",".truct-catfish,\n.truct-widget",".banner","div#adsChapterTop","#ad_info_top,\n#catfishAd,\ndiv#ad_info",".footer-info",".ai-viewport-1","#ads_preload1,\n#ads_preload2,\n#catfish-adv,\n.widget_text.text-center + .text-center","[class*=\"_banner\"]",".ads-menu-item,\n.dcmm-button-player-item,\n.divdatcuoc",".show-ads-banner,\n.widget",".item-qc",".Header_topBanner__1xD-2,\n.styles_bannerInArticleWrapper__rPPJH,\n.styles_topBanner__NL_gW","#BigBanner,\n.ads_position",".ads_txt,\n[href=\"https://tailieugiaovien.com.vn/\"]","#download_appnew,\n.box-most-viewed.box-course.box-slide,\ndiv.ads_ads,\nh3.sub-title,\nul.list:nth-of-type(2)","div[class^=\"adbox\"]","a.news__item--action:nth-of-type(2)","#article > .pt-3.text-centers,\n.text-muted","#balloon,\n.affiliate,\n.player-midpoint-progress",".banner-masthead","#link-view > center:nth-of-type(1)",".button-action-float-banner",".wtt-ads","#ouibounce-modal",".pum-overlay","#adstop2,\n.ads-item,\n.col-lg-4.hidden-xs.d-flex.flex-column.address-wrap,\n.float-right",".adv-side-bar,\n.banner-adv-wrapper,\n.banner-adv-wrapper2,\n.item-qc1",".active.bg-overlay",".g-imgbot,\n.g-imgtop,\n.link2.group-link,\n.top-main > div:nth-child(1) > div:nth-child(1) > div:nth-child(2)",".btn-bet","#catfish-ads",".banner-ads-cs",".td-container > div.td-pb-row > .td-pb-span12,\n.td-container-wrap.td-logo-wrap-full.td-banner-wrap-full,\n.td-crumb-container,\n.td_block_template_1.tdi_11.td-g-rec-id-sidebar,\n.td_block_template_1.tdi_28.td-g-rec-id-custom_ad_1.td-g-rec,\n.td_block_template_1.tdi_30.td-g-rec-id-sidebar.td-g-rec,\n.td_block_template_1.tdi_4.td-g-rec-id-custom_ad_1.td-g-rec,\n.td_block_template_1.tdi_6.td-g-rec-id-sidebar.td-g-rec,\n.td_block_template_1.tdi_9.td-g-rec-id-custom_ad_1.td-g-rec",".Float_ads,\n[id^=\"zone-ads\"]",".code-block-8.code-block,\n.ez-video-wrap","#xs-addd0",".footer-fixed-br-container",".bbMediaWrapper-inner > .samCodeUnit,\n.js-replyNewMessageContainer.block-body > div.samCodeUnit > .samItem,\n.p-footer,\n.samVideoOverlay","#hide_float_right",".a-header,\n.apu,\n.header","#myModal,\ndiv[id^=\"adsphim-\"]",".v4j-watch-1.v4j-content,\nbody > div[class]",".parent.special,\n.partner-me",".ad-floater,\n.popunder-link,\n.promotion-popup,\n.video-ad-layer",".ff-banner","#backgroundPopupp,\n#popupContact","#ds_top,\n.hidden-md.right.col-3,\nbody > .container > div",".fade.show","#m-bet","div[class*=\"size-\"]",".ibs-bet",".btn-betnow",".box-host,\n.btn-bet-top,\n.item-betnow",".topbanner","[onclick^=\"__a.hide\"],\ndiv:has([class$=\"-modal\"])",".hd-tube-desktop,\n.hd-tube-mobile",".adsphim-mobile-popup",".ad-pin-right-bottom",".adv",".entry > a[target=\"_blank\"],\n.single-content > a[target=\"_blank\"],\n.wpbcap-laptopvang,\n[href*=\"hnmac.vn\"],\n[href*=\"laptopvang.com\"],\n[href*=\"macbookgiasi.vn\"],\n[href*=\"macone.vn\"],\n[href*=\"minhtuanmobile.com\"],\n[href*=\"vender.vn\"],\ndiv.\\35 fb1ed6025b0b.widget:nth-of-type(3)","#pm_quangcao",".header-fix-ads,\n.lepopup-popup-container,\n.lepopup-popup-overlay","#header-ads-full,\n#shoppe_ads_fly,\n.ads-responsive,\n[id^=\"ads-\"]",".popup-overlay","#header-ads,\n#header-ads + center","#sponsor-balloon",".-translate-x-1\\/2.transform.left-1\\/2.bottom-0.fixed",".btn-betting,\n.datCuocBTN,\n.modelAds,\n.nhacaiuytin,\n.text-running",".sticky",".container-banner,\n.modal-ads,\ndiv[class^=\"slide-bar\"]","#app-web + .container[style=\"margin-bottom: 30px\"],\n.item.item-betnow,\n.sv-link.btn-bet-top,\n[href^=\"/goto\"]",".modal-backdrop.show","#menu-main-menu > .menu-nha-cai-uy-tin.menu-item.nav-item.style-2 > .nav-link,\n.bookmaker-selector-container,\n.c-int.d-lg-none.d-block,\n.container > .row > .col-12,\n.d-lg-none.d-block.p-1.text-center,\n.gmd-match-footer__odds,\n.justify-content-center.d-flex > .btn-primary.btn,\n.mt-1.d-lg-flex.d-none.sub-menu,\n.nav-wrap > a[rel=\"nofollow\"],\na.d-lg-none.d-block:nth-of-type(2)",".cashfish",".btn-bottom-right-append-player,\n.images-bnr-bellow-append-custom,\n.images-top-pl",".classvi,\n.elementor-section-height-default.elementor-section-boxed.elementor-element-e601265.elementor-element.elementor-top-section.elementor-section",".grid-match__footer,\n.odds-comp,\n.w-100.justify-content-center.align-items-center.d-flex,\na.d-lg-none.d-block:nth-of-type(1)",".black-layout > div:nth-child(2),\n.popup_u,\ndiv[style^=\"position: absolute;top: 0;\"]","div#bnads","#pc-preload-modal,\n#popup,\n.quang-cao",".wppopups-whole","._9xtpcl.c4je67d.c1qs0lzc.c1hrlkpu.cc2icwl.c1i0iccj.cfd18df,\n._9xtpcl.e1e6v8dt,\n.blbew80,\n.llnefd1,\n.lpp0nsn,\n.luq51lg.a13wihj,\n.pointer-events-auto.block,\n.zbgpvb19.zbgpvb16.zbgpvbj.zbgpvbh.zbgpvbg.zbgpvbf.zbgpvbe.zbgpvb1","#iklan-atas-wrapper",".bnqcclm","#top-banner-pc",".banners",".banner_list,\n.item-more,\n.nc_sidebar_home,\n.widget-sidebar-block",".body_wrapper1","#hide_catfish","#container-ads","#ads_location,\n.block.ad","[href=\"https://8xbe52.com\"]",".a--d-wrapper",".btm_bar",".catfish-bottom","#adx,\n.banner-preload,\n.catfish-top,\ndiv.banner-catfish-bottom","#custom_html-42","#floating_ads_bottom_textcss_container,\n.module_home_ads,\n.module_single_ads","[href*=\"cellphones.com.vn\"]",".textwidget","#right_float,\n[id$=\"float_banner\"]",".link-gold,\n[id^=\"banner\"]",".banner-shopee,\na[href^=\"https://shope.ee\"]",".MuiDialog-container,\n.MuiDialog-root,\n.MuiModal-backdrop,\n.css-ylxsn9.MuiStack-root,\n.vjs-banner-btn,\ndiv.css-m49bkq.MuiStack-root > a","#ad_global_below_navbar",".b-player",".baloon,\n.col-sm-10.kqcenter,\n.kqbackground.vien ~ a[target=\"_blank\"]","#qc-kpgame",".mobile-catfix",".xx-ads","#left_ads_float,\n#right_ads_float","#IMAGE635 > .ladi-transition.ladi-image,\n#IMAGE639 > .ladi-transition.ladi-image,\n#POPUP648,\n.backdrop-popup","#pc-catfix,\n.lightbox-player-pc,\ndiv[id^=\"preload-\"]","#pc-top-banner,\n#quang-cao",".pc-catfix,\nmobile-catfix","#catfish-banner,\n#dl-banner-728x90,\n.center-screen.backdrop,\n.topless",".code-block",".ads-pc,\n.ads-sp","#popup_banner_beta",".boxzilla-bottom-right-container,\n[href^=\"https://gotrackecom.info\"]","#wap_bottombannerr,\n.grid-match[style]",".ads-floatingads,\n.banner-item,\n.top-nha-cai","#ad_balloon",".adpia_banner",".btn-top.btnz,\n.mmo,\n.modal",".grid-match__footer > a.btn:nth-child(3),\n.mct_-bet-bot,\n.mmo-inner,\n.show.fade,\na[href^=\"/go\"]",".ft-box.for-mobile.mmo-fixbot.mmo",".fixed-bottom,\n.popup-banners",".pc-catfixx",".pc_catfix_adv",".sbAdv","#adsTopInPageBanner,\n.adsContainer,\n.header__auth > .details__devices-list",".elementor-widget-image",".box-rating",".catfish-ck",".adx1","#ab_ctl,\n.bannerads","#ads_large_detail,\n#banner_top,\n#box_qua_tang_vne,\n#raovat,\n#rich-media-banner-ads,\n#sis_popup,\n#supper_masthead,\n.article_ads,\n.article_ads_300x250,\n.banner_mobile_300x250,\n.section_ads_300x250",".Notices.PanelScroller","div[class*=\"qca\"]",".content_middle_rightbar","winbox-1",".ads-wrapper","#popup_fi","#idAdLink","#closeAds","div.py-2.md\\:py-6.mx-auto.w-full.max-w-screen-3xl > div.relative",".qc-inner,\ndiv[id^=\"qc_M_\"]",".expand-static-banner,\n.preload-banner,\n.static-banner",".sticky_bottom,\n.t_logo","p[style=\"color: rgb(174, 174, 174); margin-top: 10px; margin-bottom: 20px;\"]",".adv_phim,\n.fixed_bottom",".banner-sticky-footer-wrapper",".adspopupgiua,\n.adspopupleft,\n.adspopupright,\n.float-ckgiua",".js-editors-choice-slider.editors-choice-slider > .adsbygoogle","[src^=\"https://ads.starzd.com/\"]",".btn-action,\n.btno-group.d-none.d-lg-flex,\n.container > .mt-1,\n.container > .mt-3,\n.d-lg-block,\n.justify-content-between.d-lg-none.d-flex.btno-group,\n.menu-item:has(a[rel=\"nofollow\"]),\n.topButton,\n.widget_offer,\nheader > .container","[id^=\"Balloon_\"]",".ft-box,\n.vb-button > .mct_-bet,\ndiv.vebo-sp.container:nth-of-type(7)",".advertisement","#hots-btn,\n.bn-popup-bottom-sdwdwxw,\n.popupcenter.popup",".show.modal",".v4j-header > a[target=\"_blank\"]",".quangcaomobile","#tut4ktream_idAdLink",".banner-catfish-bottom","#divExoLayerWrapper","#video_player ~ div[id]","div[style^=\"position:fixed;inset:0px;z-index:100000;\"]","#invideo_wrapper,\n.Ads,\n.mobile-catfixx",".container > .row > center",".cash-fish,\n.cash-fish-pc,\n.preload-pc,\n.top-mobile-banner,\n.under-player-pc-banner",".v4j-header > center",".v4j-header.v4j-content","body > [style*=\"position: fixed;\"]","a[rel=\"nofollow sponsored\"]",".banner-play","#AgeModal",".sdzhead","#horizontal-ad",".ads_below_player",".qx_135","div[data-value=\"1\"]","[data-clm=\"ccccc2\"],\n[data-id=\"ap3poapup\"]",".footer-button-sign-in.hide-desk,\n.hide-desk.wrap-content > .wrap-btn-action,\n.menu-right-slide","#sticky_ad,\ndiv.text-center:nth-of-type(2)",".navbar-ex8-collapse","#bnc1","#bnc0","#sticky","#mp-preload-pp-overlay,\n.adpl","#ad-container,\n.uniad-player + div[style]",".in.fade.modal-backdrop","#adsbottom,\n.happy-under-player,\n.vailo-sticky,\n.vailo-under-navbar,\n.vailo-under-navbar-mobile","a#banner","#position_full_top_banner_pc",".gc-header__wrapper + div[style]",".button-dangkyngay",".afw-topbanner","#banner3double","div[id^=\"adsWeb\"]","#pos-25,\n#pos-26","div[style=\"text-align:center;margin-top:0px;margin-bottom:0px;\"]","[class^=\"sticky-top\"],\n[href*=\"vietcombank.com.vn\"]",".bgadmtoptotal",".bannertop",".my_responsive_add,\n.titleBar + *,\n[class1=\"my_responsive_add\"]","#background_bg_link,\n#subRightAboveHome,\n.adv-24h-mid,\n.col:has(a[rel=\"nofollow\"]),\n.col:has(a[rel=\"sponsored\"]),\n.fixad300x600,\n.module3,\n[id^=\"ADS_\"]",".admicro",".top-header","#subiz_wrapper,\n.ad-embed",".features-r","#bannerMasthead,\n#desktop-home-top-page,\n#mobile-home-middle-1,\n#mobile-home-middle-2,\n#mobile-home-top-page,\n.ads-masthead",".sys-ads","#\\37 290,\n#\\38 893,\n#ke0v7etz,\n#kizq4u4r,\n#kjb6n9uy,\n#lnm1eu57,\n#lpr54voy,\n.ads-top,\n.top-advertisment","#topbn","#Adsv,\n.right-banner > a[title]",".__ads_click","#neo-right-ads","#BannerAdv","#gallery-2,\n.hd-cate-wrap,\n.home-qc-wrap,\n.home-sec-right .widget_media_image,\n.noname-left",".Advs_adv-components__1nBNS.Advs_adv-300x250__2eyhC.Advs_no-content__RWwW2,\n.HotTagGlobal_fixed-height__1f50i",".exp_qc_share",".c-banner",".bg-gray,\n.sidebar > div[style]","div[id^=\"adsbg\"]",".banrpstn","#myElementz,\n.bannerinfooter,\n.quang-cao-ben-phai","#vi-smartbanner,\n.LRBanner,\n.running.adsbyvli",".bg_allpopupss,\n.bgal_popndungalal,\n.bn1,\n.bn2,\n.box_quangcao_mobile_320x50,\n.box_text_qc,\ndiv.news-left-related:nth-of-type(2)","#tubia","[id^=\"admzone\"]",".khw-ads-wrapper.clearfix",".banner-bottom-menu,\n.popup-bg,\n.showpop,\n[href*=\"bit.ly\"]","#adrightsecondx,\n#adrightspecial,\n#adrightspeciallinks,\n#adsuggestion",".advertTop,\n.hsdn > li:has(.adsbygoogle),\n.module_plugins",".ads-sponsor,\n.khw-adk14-wrapper",".top-banner-mobile","[id^=\"adv\"]",".quang_cao_pc_right_hoc_tap",".ads_shortcode",".admicro_top","#adop_bfd,\nins[class*=\"adsby\"]",".sponsor-zone","div[id^=\"ads_\"]","#top-adv","#popup_center",".box-banner","div[class^=\"adv-\"]",".ads-970x280",".align-items-center.justify-content-between.d-flex.text-center.bg-grey-6.w-100,\n.d-flex.justify-content-between > div > div.d-flex.justify-content-around.mt-4,\n.pc-top,\n.top-ads-16x9","#myCarousel,\n.banner-boder-zoom",".block:has(.block-container > .block-body > a[href]),\n.block:has(.block-container > .block-body > ins)",".asd-headt,\n.detail__foru,\n.mb-40.section__qadd,\n.super-masthead,\n.top-banner,\n[class*=\"box-home\"],\n[data-marked-zoneid=\"tn_detail_danhchoban\"],\n[data-marked-zoneid=\"tn_detail_quantam\"],\n[id^=\"dablewidget_\"],\nzone","div[class$=\"_ads\"]",".zone-top,\n[id^=\"pos-\"]",".c-banner-item","div[id^=\"adsMobile\"]",".fyi",".ads-common-box",".p-body-pageContent > table[style=\"width:100%;display:inline-block;background: #fff;\"]",".jsx-3569995709,\n.micro,\n.middle-comment-promotion,\n.pro-container,\ndiv[style=\"width:300px;height:250px\"],\ndiv[style=\"width:300px;height:600px\"],\ndiv[style=\"width:320px;height:100px\"]","#main-videoplayer,\n#pc-top,\n.ads-position",".container .desktopjszone,\n.mobilejszone","#LeaderBoardTop,\n#admbackground,\n#adsMainFooter,\n.Mobile_Masthead_TTO_Wrapper,\n.adm-bot,\n.box-qad,\n.content-amuasam,\n.detail__qc,\n.section__r-vietlot,\n.wrapper-ads-mb",".clearfix.adregion,\n.visible-md.header-banners",".Flagrow-Ads-under-header",".vfs_banner","#vmcad_sponsor_middle_content,\n.box-adv,\n.mb-20.col-right-ads,\n.vmcadszone","section.mar20:nth-of-type(2),\nsection.mar20:nth-of-type(4)","#banner-dai-bottom,\n#banner-dai-top",".adsbypubpower,\n.v-element > .v-responsive,\ndiv.message--post,\ndiv[style]:has(.adsbypubpower)",".adContainer",".bf-3-primary-column-size.bs-vc-sidebar-column.vc_col-sm-3.vc_column_container.bs-vc-column.wpb_column > .wpb_wrapper.bs-vc-wrapper",".wrapper-adv","#banner1ab",".ad_by_yellowpages,\n.banner_add","#Zingnews_SiteHeader,\n.znews-banner",".block.translate-x-\\[-50\\%\\].left-2\\/4.z-\\[1\\].bottom-\\[-6px\\].fixed.mx-auto.md\\:container.md\\:px-0.px-4.w-screen","#qc_clgt",".group-link:has(a[href*=\"&utm_\"]),\n.topnhacai",".jw-button-image",".bet-btn-8423,\n.btn_betnow_632132,\n.highlight,\n.images-bnr,\n.images_fixed,\na.btn_fb:nth-of-type(2)",".odds-button,\n.odds-button2",".banner-bottom-append-custom,\n.button-in-player-box,\n.logo-top-right-append-custom","#banner_preload,\n.doc-truyen-ads-d1,\n.doc-truyen-ads-d2",".v4j-watch-1.v4j-content > center","li.special.parent"];

const hostnamesMap = new Map([["*",[0,1]],["bluphim.art",2],["vnesports.art",[3,4]],["mythethao.net",[4,246]],["javhd.baby",5],["damsextv.pro",5],["animet3.biz",[6,7]],["animetvn4.com",[7,61]],["subnhanh1.org",[7,8,285]],["motchilltvzz.biz",[8,9]],["motphimtvv.com",8],["www.mp.com",[8,109]],["phimnhanhvl.com",8],["movies.vkoolz.com",[8,17]],["ophimhd.vip",[8,18,327]],["hhtrungquoc6.com",[9,90]],["hhvsub.com",9],["phimbocn.com",9],["phimhoathinh3d.com",9],["wibu47.com",9],["yanhh3d.com",[9,17,166,167]],["hhchina.lat",[9,200,201]],["hentaivn.love",[9,216]],["hhhay.me",[9,219]],["hhtqnet.me",9],["hhtqvietsub.me",[9,201,220]],["hhtq3d.net",[9,90]],["hoathinh4k3.net",9],["motchillse.net",9],["phimmoi2024.net",[9,18]],["hoathinh3dtq.site",9],["hoathinhtq.site",9],["dragonphim.tv",9],["hhh3d.tv",9],["hhninja11.tv",9],["animeweb.vip",[9,90]],["hhtq5.vip",9],["hhtq8.vip",[9,90]],["hh3d1.xyz",9],["xemphimchill.xyz",[9,17,18,117]],["phimbet.biz",[10,11]],["biphim.ch",[10,34,42,43]],["hhpanda.city",[10,41,43,44,45]],["tructiepdabong5.co",[10,37,52,53,54]],["hhanime3d.com",[10,41,44]],["subnhanh.dev",[10,43,171]],["phim.vkool7.net",[10,269,270]],["dongchill.pro",[10,41]],["dongphim.taxi",[10,41,311]],["motchill.taxi",[10,171]],["subnhanhvl.top",[10,41,43,44,171]],["protruyen4.xyz",[10,254]],["phimmoisz.biz",[12,13]],["tvzinghd.co",[12,55]],["phimmoinay.vip",[12,254]],["tamlinh247.biz",14],["hayghe.cam",15],["tuoi69.casa",16],["247phim.cc",[17,18]],["hayhaytv.cc",[17,18]],["boctem.com",17],["tvhay26.com",17],["www.phimmoi01.net",17],["bimmup.tv",[17,316]],["www.ssphim.us",[17,18]],["vungtv.us",[17,225]],["www.phimmoichilla.xyz",[17,18]],["ephoto360.com",[18,83]],["thiepmung.com",18],["phimmoiz.me",[18,41,224,225]],["motphimchill.online",18],["cakhian.cc",[19,20,21,22,23,24,25,26]],["xoilacxi.cc",[19,20,23,24,25,26,33,34,35,36,37,38,39]],["90phutz40.live",[19,20,24,25,36,39,208]],["unmanned-ship.org",[19,20,22,24,25,26,27,28,292]],["rakhoiv.cc",[20,27,28,33]],["avvietsub.info",[20,181,182]],["xoilaczz63.live",[20,28,30,36,38,39,212]],["phym18.lol",[20,181,213]],["nhentaivn.online",[20,181,279]],["xemtv.tvhayhd.tv",[20,322]],["phimsexsub.xyz",20],["mitomq.cc",[26,27,28,29,30]],["phimmoichillz.cc",[27,31,32]],["tructiep.caheo7.link",[27,203,204,205]],["bongda.rakhooi.tv",[27,203,204,320]],["live3.thapcam26.net",[28,163,184,185,207,260,261]],["phevkl.club",[31,48,49,50]],["viet69.la",[31,48,49,50,199]],["abtruyenmoi.com",[34,58]],["doctruyenln.com",[34,79]],["xem.tructiepnba.com",[34,136]],["xemtivi4k.com",[34,161]],["ketqua04.net",[34,242]],["live.thapcam30.net",[34,163,184,260,262]],["vidian.online",[34,281]],["damconuong.org",[34,264]],["bongdainfox.tv",34],["nghean24h.vn",34],["sexviettop.cfd",40],["sexheovl.com",[40,130]],["sexsoc.info",[40,191]],["sexvip.lol",[40,130]],["trangsexhay.lol",[40,130,191]],["vlxxai.net",[40,191]],["quat69.pro",[40,130]],["javhd.social",[40,191]],["javhd.tech",[40,313]],["bichill.ch",41],["vivuphim.info",[41,64,117]],["phim18han.net",[41,49,59,249]],["heovktgame.club",46],["ketqua247vn.club",47],["keoso.me",[47,221,222]],["the.tube",47],["phimhay123.me",48],["viet69.team",[48,312]],["cliphotvn69.com",49],["mobiblog123.com",49],["xem14.com",[49,159]],["hh3dhay.life",49],["phim24h.mobi",[49,228]],["cliphot69.my",[49,232]],["www.gvnvh.net",49],["tram3d.net",49],["sayhentai.one",49],["topviet69.online",49],["phimvuihd.org",49],["vutruphim.tv",[49,325]],["2phimhay.co",51],["xoivo2.online",[53,54,145]],["123nhadatviet.com",56],["123nhadatviet.net",56],["tuoitre.vn",[56,400]],["tuoitrenews.vn",56],["live.7mvn2.com",57],["abysscdn.com",[59,60]],["api.anime3s.com",59],["freeplayervideo.com",[59,60]],["player-cdn.com",[59,60]],["geoip.redirect-ads.com",[59,60]],["phimss.net",[59,253]],["live4.xoilac34.org",[59,183,184,185,186,187,188,294]],["fdcdn.xyz",[59,417]],["watch.rkplayer.xyz",[59,420]],["apkmoddone.com",[62,63]],["apkmoddone.phongroblox.com",[63,124,125]],["appvn.com",64],["javtopxx.com",[64,97]],["linkerpt.com",[64,103]],["mod.lnpchannel.com",64],["ghienphim.in",[64,137,178,179]],["vlxx.mx",[64,180,230,231]],["soikeo365.net",[64,257]],["cungthi.online",[64,86]],["antt.vn",64],["bongda24h.vn",64],["kienthuc.net.vn",[64,379]],["nghenhinvietnam.vn",64],["nhadautu.vn",64],["saostar.vn",64],["v.xemphimviet.xyz",[64,137,179,423]],["asianbookie.com",65],["baomoi.com",66],["m.baomoi.com",67],["baonga.com",68],["bongda12h365.com",69],["canhrau.com",70],["topthuthuat.com",70],["chotlo3s.com",71],["www.clbgamesvn.com",72],["congthucvatly.com",[73,74]],["phuongtrinhhoahoc.com",[74,126]],["contuhoc.com",75],["www5.cbox.ws",75],["cryptoviet.com",76],["diadiem.com",77],["mobi.ditnhauvietnam.com",78],["javhdvip.net",78],["domdomtruyenday.com",80],["dualeotruyenman.com",81],["ebookbkmt.com",82],["fullcliphot.com",[84,85]],["fulllivehot.live",[84,209]],["live9.mannhan75.xyz",[84,204,418]],["gamehayvl.com",86],["giavang.net",86],["romgoc.net",86],["gocmod.com",87],["file.gocmod.com",88],["forum.gocmod.com",89],["truyensieuhay.com",[90,140]],["hoahoc247.com",91],["hoidap247.com",92],["huphimtv.com",[93,94]],["sexviet4.top",94],["www.iosviet.com",95],["javtiful.com",96],["lacaigi.com",98],["laptrinhcanban.com",[99,100]],["yhocdata.com",[100,170]],["lichngaytot.com",101],["lichvannien365.com",102],["linkneverdie2.com",104],["linkneverdie.net",104],["linkneverdie.top",104],["loigiaihay.com",105],["metruyencv.com",106],["metruyencv.info",106],["metruyencv.net",106],["mmo4me.com",107],["baodauthau.vn",[107,336]],["motchilltt.com",108],["muabanraovat.com",110],["muaxegiatot.com",111],["nettruyenww.com",112],["nettruyenx.com",113],["nhaccuatui.com",114],["phim202.com",115],["www.phimdinhcaoz.com",[116,117,118,119]],["phimlongtieng.com",[116,117,118,119,121]],["phimdinhcao.net",[116,117,119]],["phimlongtieng.net",[116,117,118,119,121]],["phimhaymoii.com",120],["phimyeuthichb.com",122],["truyensextv.com",122],["lxmanga.online",[122,278]],["phongroblox.com",123],["www.vip1s.top",[124,315]],["quantrimang.com",[127,128,129]],["hoatieu.vn",[127,151,204,370]],["vndoc.com",[129,151]],["khoahoc.tv",129],["download.com.vn",129],["download.vn",[129,159,361]],["gamevui.vn",129],["sieutamphim.com",131],["thuthuatjb.com",132],["thuthuattienich.com",133],["www.tiengnhatdongian.com",134],["ycongnghe.com",[134,168]],["toithuthuat.com",135],["truyengihotnay.com",[137,138]],["truyengihotnha.com",[137,138]],["truyengihotqua.com",[137,138]],["tenmientruyengi.net",[137,138]],["thichxemphim1.net",[137,263]],["tiemsachhay.net",[137,264,265]],["truyengihotdo.net",[137,138]],["truyengihotnha.net",[137,138]],["truyengihotqua.net",[137,138]],["truyengihotzay.net",[137,138]],["baoxaydung.com.vn",137],["taichinhdoanhnghiep.net.vn",[137,194]],["tienphong.vn",[137,336,393,394]],["toquoc.vn",137],["truyenqqto.com",139],["tvhaiss.com",141],["tvhayd.com",142],["tvso1.com",143],["bongdaso66.net",[143,236]],["blog.abit.vn",[143,333]],["vaoroi365.com",[144,145]],["vesotantai.com",146],["vietcetera.com",147],["vietgiaitri.com",148],["vietjack.com",149],["www.vietjack.com",150],["vsc58.com",152],["vtruyen.com",153],["vuighe3.com",[154,155]],["xem1080.com",155],["web1s.com",156],["webhoctienganh.com",157],["webtretho.com",158],["xemphimjav.com",160],["xosodaiphat.com",162],["xxoilac.com",[163,164,165]],["90phut22.xyz",[163,165,416]],["hhtm.pro",166],["yeah1.com",169],["viet69.do",172],["rphang.dog",173],["tuoinung.fan",174],["truyen18.fun",175],["cdnwp.icu",176],["mephim.ink",[176,192]],["luotphim1.net",176],["jav.sexsub.icu",177],["phim1080.in",180],["socolivebongda.net",[181,256]],["xem.banhkhuc120.info",[183,184,185,186,187,188]],["live.90phut38.live",[183,184,185,186,206,207]],["xem.vebo31.net",[183,184,185,186,188]],["vebo4.net",[183,184,185,186,188]],["doctruyenchu.info",189],["xem.javkche.info",190],["javhd.shop",191],["dubaotiente.io",[193,194]],["giadinhonline.vn",[194,358]],["nongnghiep.vn",[194,358]],["vietnamnet.vn",[194,404]],["maclife.io",195],["phimmoichill.io",196],["tapchibitcoin.io",197],["truyenfull.io",198],["motchilltv.li",202],["noitu.pro",[207,297]],["mn.mediastation.live",210],["sexhd88.live",211],["vn.phym18.lol",214],["sieudamtv.lol",215],["phim18vip.vip",[215,328]],["www.buomtv.me",217],["www.gaingon18.me",218],["bongda365.news",221],["soikeoz.vip",[221,254]],["ngaytho.me",223],["xemphimhdc.vip",[225,330]],["phimno1.me",226],["chat.vebotv.me",227],["mephimnhe1.net",[228,244]],["play.anh.moe",229],["clipsexhot3x.net",230],["tvhayw.org",[230,291]],["phimtuoitho.site",230],["tvphim.my",233],["motphimww.net",233],["phimmoi.sale",233],["bantincongnghe.net",234],["blogkiienthuc.net",235],["chodansinh.net",237],["fastscans2.net",238],["xem19.gavang1.net",239],["xem20.gavang1.net",239],["gockhuat.net",240],["vn.javbabe.net",241],["khiphach.net",243],["ophimhdvn3.net",[244,248]],["phimgichill.net",[244,248,250]],["mupdep.net",245],["vlxyz.tube",245],["www.o-study.net",247],["phimnhua.net",251],["phimsexgaito.net",252],["phimtho.net",254],["mphim14.org",[254,287]],["sachmoi.net",255],["tenovi.net",[258,259]],["truyentuan.xyz",[259,421]],["animevietsub.run",[264,305]],["tracnghiem.net",266],["phimmoi.tuphim.net",267],["vietmoz.net",268],["vphims.net",270],["www.vlxxhot.net",[271,272]],["vailonxx.vip",[272,329]],["vnexpress.net",273],["vozer.net",274],["vtipster.net",275],["vuonhoalan.net",276],["zcine.net",277],["tut4ktream.online",280],["animew.org",282],["blogtruyenvn.org",283],["chillphimmoizzzz.org",284],["hayhaytv.org",285],["lmssplus.org",286],["phimreview.org",288],["sieukhungz.org",289],["truyenaudiocv.org",290],["xemtivingon.org",293],["keonhacai55.run",[293,306]],["doctruyen3qw.pro",295],["www.toptruyenww.pro",295],["anime47.work",[295,415]],["home1.mannhan8.pro",296],["phimsexhay669.pro",298],["phimsexmoi5s.pro",299],["sexgaidep69.pro",299],["sexdacbiet.top",299],["sexvn2024.pro",300],["phim.sexxsub.pro",[301,302]],["vl.phe.to",[302,314]],["youtubeporn.pro",[303,304]],["vectorx.top",303],["hls.playerfb.xyz",303],["phim18hd.sex",307],["hd.javhay.site",308],["sex.tuoi69.store",309],["filemoon.sx",310],["hentaihvn.tv",317],["phim33.tv",318],["phimdacap.tv",319],["tram3d.tv",321],["vieclam.tv",[323,324]],["xskt.com.vn",324],["cliphot69.uno",326],["2banh.vn",331],["2game.vn",332],["afamily.vn",334],["sport5.vn",334],["autodaily.vn",335],["xehay.vn",[335,411]],["www.baogiaothong.vn",337],["phapluatplus.baophapluat.vn",338],["videophapluat.baophapluat.vn",339],["cafebiz.vn",340],["cafef.vn",341],["ttvn.toquoc.vn",341],["chap.vn",342],["24h.com.vn",343],["autopro.com.vn",344],["baohaugiang.com.vn",345],["congan.com.vn",346],["daklak24h.com.vn",347],["dantri.com.vn",348],["doisongphapluat.com.vn",349],["vtcnews.vn",349],["nld.com.vn",350],["tapchikientruc.com.vn",351],["thanhtra.com.vn",352],["thoidai.com.vn",353],["petrotimes.vn",353],["www.thuocbietduoc.com.vn",354],["thuongtruong.com.vn",355],["thuysanvietnam.com.vn",356],["voh.com.vn",357],["congluan.vn",358],["congly.vn",359],["thitruongtaichinhtiente.vn",[359,392]],["danviet.vn",360],["eva.vn",362],["fshare.vn",363],["game24h.vn",364],["game8.vn",365],["gameio.vn",366],["gamek.vn",367],["soha.vn",367],["genk.vn",368],["vnews.gov.vn",369],["hosocongty.vn",371],["kenh14.vn",372],["kinhtedothi.vn",[373,374]],["minhngoc.net.vn",374],["vn-z.vn",374],["lazi.vn",375],["lucloi.vn",376],["muare.vn",377],["myeva.vn",378],["phunumoi.net.vn",380],["nhipcaudautu.vn",380],["nhacdj.vn",381],["olug.vn",382],["qdnd.vn",383],["reatimes.vn",384],["rung.vn",385],["www.saostar.vn",386],["sharecode.vn",387],["techrum.vn",388],["thanhnien.vn",389],["thethao247.vn",390],["thethaovanhoa.vn",391],["tinnhanhchungkhoan.vn",394],["tiin.vn",395],["timdaily.vn",396],["tinhte.vn",397],["tinmoi.vn",398],["tintucvietnam.vn",399],["tuyengiao.vn",401],["v4u.vn",402],["vietfones.vn",403],["vietq.vn",405],["viettelstore.vn",406],["voz.vn",407],["vtvgo.vn",408],["vungoctuan.vn",409],["webthethao.vn",410],["yellowpages.vn",412],["znews.vn",413],["www.vipphim.wiki",414],["plcdn.xyz",419],["vietxxx.xyz",422]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map([["livescore.com",[0]],["msn.com",[0]],["dm.de",[0]],["medium.com",[0]],["vnexpress.net",[1]]]);

self.specificImports = self.specificImports || [];
self.specificImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
