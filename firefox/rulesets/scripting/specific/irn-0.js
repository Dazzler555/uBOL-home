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

// ruleset: irn-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssSpecificImports() {

/******************************************************************************/

const argsList = ["a[href^=\"https://arongroups.co/\"],\na[href^=\"https://arongroups.site/\"]",".banner-cafe,\n.center-talgh","div[data-viewport-type=\"element\"] > div > div[class^=\"DialogAd_DialogWrapper\"]","div.adv",".col-xs-12.col-md-6.main-sidebar > center,\ncenter:nth-of-type(2)","[href^=\"/advertisements/\"]",".widget_custom_html.widget.container-wrapper.widget_text",".ads-title,\n.stream-item-above-post.stream-item,\n.stream-item-mag.mag-box",".ads-post",".link-paeen",".adcontainer,\n.enhanced-text-widget.widget_text.vc-widget.widget.w-nt.h-ni,\n.insert-post-ads,\n.widget_better_rss_widget.widget.primary-sidebar-widget.w-t.h-ni,\n.xjehomzgnw","div.container-ads,\ndiv.left-ads",".ads-text-sid,\n.pt-3.text-center.py-2.bg-all-box,\n.text-center.py-3.bg-all-box","#text-25",".main-zxc","#footer_js_d1,\n.banner-container","#left2","#ads",".yn-bnr","#pos-article-display-66259",".ag-agah",".ads_place,\n.app_introduce","#toshare-dl-link",".announce,\n.dsp-ad,\n.promote-puls",".side-ads",".baner",".header-ad",".top-ad",".mks_ads_widget",".webgardi",".bottom-ad","a[href*=\"nobitex.ir\"]","#kaprila_linktable",".box[class^=\"asan\"],\n.content-box,\n.text-asan","div#mobile-headerads,\ndiv#topads,\ndiv.footer-ads,\ndiv.side-ads",".right-sidebar > p > a > img[title=\"رپورتاژ\"]",".advRemove,\n.click1000_allcontent,\n.webgardi_main > #txtadv5 > a[href*=\"asriran.com/fa/ads/redirect/\"]","figure.size-full.wp-block-image",".alert-dismissible,\ndiv.text-center.col-md-3 > .paddingAll10.panel-success.panel","#middlead",".medicaldirectory-sidebar:nth-of-type(5) > .claims.sidebar-content > .cbp-l-project-details-title > span",".pix_of_day,\ndiv[style=\"margin-top:4px;overflow:hidden;\"],\ndiv[style=\"margin-top:5px;margin-bottom:3px; overflow:hidden;\"]","#bil_fix_top_pc,\n#headerbar,\n.c-ads-banner,\n.content-slider,\n.countclick,\n.hamsan-container,\n.m-banner-r,\ndiv[class^=\"pcfadv\"]",".ads_link8,\n.blog-home-ads-blog,\n.blog_center_bar > center > a[href*=\"eramblog.com/action/static_ads\"],\n.hamsandiv",".col-md-3 > .panel > .tarh-forosh,\n.col-md-3 > .panel > center,\n.leftads",".parent_txt_adv_container2","figcaption","#custom_html-51",".mtn-ads-content-sticky,\nimg[alt=\"ad banner\"]",".widget_custom_html.widget.primary-sidebar-widget.w-t.h-ni.widget_text",".widget_text.widget.primary-sidebar-widget.w-t.h-i","[href*=\"/banners/click/\"]",".weblink",".bd-adsbar,\n.delta-content-ads,\n.delta-top-content-ads",".digiBannerArea,\n.homeMainBanner,\n.todaysNewsList__sidebar","a[href=\"https://farsisaz.com/\"][target=\"_blank\"][rel=\"noopener\"],\ndiv.ADS_wrapper,\ndiv.shbanner_cover","#home-2-col > .bs-vc-wrapper > .vc_col-sm-3.vc_column_container.bs-vc-column.wpb_column,\n.widget_nav_menu.widget.primary-sidebar-widget.w-t.h-ni","[href^=\"/advertisements/triggered/\"]",".zxc",".custom-ad-one,\n.zxc-m","div.adsfix_box","div.ads","div.popup-ads","a[href^=\"https://zaya.io/\"]",".ads","div.medicaldirectory-sidebar:nth-of-type(6) > .claims.sidebar-content > .cbp-l-project-details-title > span",".advs-wrapper","section.ads","div.chatlist-parts > div.chatlist-top > ul.ads-dialog-box",".adv",".adv-ttl","div.textwidget > div.ads","#middle a > img[title*=\"تبلیغات\"],\n#sidebar a:not([href*=\"elmevarzesh.com/\"]) > img[width=\"300\"][height=\"200\"],\n.col-md-8 a:not([href*=\"elmevarzesh.com/\"]) > img[width=\"728\"][height=\"90\"]",".stream-item-widget",".widget-ad-image","a[href^=\"https://eramblog.com/direct_link/?ads=\"][rel=\"nofollow\"][target=\"_blank\"],\ndiv.blog-home-ads-blog,\ndiv[class^=\"ads_link\"]",".centernews_soc,\n.left_pos_mod > .l_box.imgs,\n.newstopads",".text-ads","#ynpos-10831,\n.ezp30-ads,\n.fix-ez",".advertisement",".news_slider_sec2,\n.webgardi_adv",".header-adv,\n.others_media,\n.sticky_notify2,\n.zxc-stik",".txt-adv-box",".zxc-visible-fixed",".inline-news-box,\n.talfighat-row,\n.ul-talfigh-con",".results__a","div.ads-content","section.player-container div.filimo-logo-filimo","div.ad-cat:not(div.ad-custom-size)","div#fix-advertise,\ndiv.content-ads,\nsection#image-advertise,\nsection#top-banners","div.single-advertise",".bottom-ads,\n.card-ads",".tads","#ads-main-home,\n.ads-img","ul#tabligh,\nul#tablighc",".sticky-ad","div.container > div.ads","div[class^=\"cr-banner-\"]",".q2am-page-advert","#floating-region-zone,\n.ads-div-block",".sin-part","#banners-position-14,\n#slideshow[class=\"rounded\"]",".ads-box","#NR-Ads","script[id^=\"wccp_\"]",".col-xs-36.col-sm-4.col-md-4.col-lg-4,\n.hidden-xs.col-sm-4.col-md-4.col-lg-4","#block-3,\n#block-4,\n.stream-item-top-wrapper",".widget_custom_html,\naside:nth-of-type(2)","#table10,\n#table10 > tbody > tr > .textBoldColor,\n#table4 > tbody > tr > td > table > tbody > tr > td > center,\n.bgleftmenu > div > div,\ntable#table9.bgtable:nth-of-type(13)","div.white-block:nth-of-type(2)","[href^=\"/nf/sponsor/\"]","[class^=\"zxc\"]",".sticky_notify",".news-bottom-link","#ads_f,\n#banners_120_top_1,\n#block-block-120,\n.track-click","div.peyvand",".inline_ads",".ads.box","#box358,\n#top-ad",".zxc_home",".mrauto,\n.position-g5",".mobile-fixed-banner","a[href^=\"/advertisements/triggered/\"]",".ads-placment",".advertisement-in-topic,\n.banner-wrapper,\n.bannercontainer,\n.homepage-content",".msg_ad_explain,\n.msg_ad_pictorial,\n.msg_ad_subject","a[href^=\"https://bit.ly/\"]","#custom_html-4,\n#text-31,\n#text-35,\n.adbar","div.ads_fix_top,\ndiv.text_ads_box","div.blur-text","#text-13,\n.adwrap-widget","#ads-container",".adsfix_box",".alert-new,\n.text-center.mt-3.py-3.bg-all-box",".mdiaad,\nsection.sidebox:nth-of-type(4)",".widget_text.widget",".sponsors","#sponsor_wrapper,\ndiv.banner_v",".srjtbaungo","div#Abox-mobo","#ads__bottom_of_the_header",".news-col-2 .related-news",".opanel-ads",".ads-banner","#advertise,\n#promotion",".Dr.D2.Cu.o",".stream-item-above-post","#text-5",".banner_sidebar,\n.box-ads-single,\n.box-custom.box_other,\ndiv.box-tag-single:nth-of-type(2)","bloglinkdumpblock,\nbloglinksblock","div.all_adv_mrg,\ndiv.fixed_box_adv,\ndiv.padding_news_right_adv","div#forum-native-ad,\ndiv.ad-wrapper,\ndiv.up-ad",".advertorial",".ADS_header_all,\n.download-link-ads-below","#header-ad1,\n#p30konkor-ads-p a[rel=\"follow\"]",".post-ads",".sidebar-ads",".ad_global_header","#ad_global_below_navbar","#ads-120,\n.block-ads,\n.block-ads2,\n.block-ads4","div[class^=\"topadvers\"]",".adv_img,\n.agahi-view",".widget_whmcs_ads_widget.widget,\n.wpb_content_element.sidebar.wpb_widgetised_column",".topbanners",".multi-ads-container","div.tab.sidebar-box:nth-of-type(2) > .sidebar-box-content,\ndiv.tab.sidebar-box:nth-of-type(2) > h3","div.big-banner",".ads_box",".aa-container",".download-dialog","div.advertop",".ads.big_post,\n.cat","#block-block-22.ads",".bannermiddle,\n.mybannerimg",".adv-box",".adloc-is-banner,\n.widget_better-ads",".advertising","#middle-ads",".fara-main","a[href=\"https://academy-eris.com/\"],\na[href=\"https://sahamir-ac.com/\"],\na[href=\"https://sarafer.com/\"],\na[href=\"https://veriacco.com/\"]","#header-banner-4,\n#rt-backlinks-pos,\n.mb-3.top-1.sticky-top,\n.w-100.justify-content-center.d-flex","div.adsLoader",".bannersHome","#header-ads",".bannergroup",".ads2",".ush_image_2",".GSAdsLR,\n.OpenTable5",".adv_top",".bannergroupsam-full-width",".cyt-ad-content,\n.homebar a[href=\"https://setare.com/%d8%aa%d8%a8%d9%84%db%8c%d8%ba%d8%a7%d8%aa/\"] > img,\n.pb0.stickyscroll_widget","#block-views-ad-link-block-2,\n#block-views-shabake2-clone-of-ad-link-block,\n.field-name-ads-under-summery,\n.popup-box-wrapper","a[target=\"_blank\"][href*=\"utm_content=shahrekhabar\"] > img[style=\"margin-top: 0px;margin-bottom: 0px;margin-left: auto;margin-right: auto;\"]","#g-top,\n.ads2col,\n.flexbanneritem",".qxsbniv",".header_adv",".side_adv",".top_adv",".b_box","#inline_agahi_z0,\n.generalBoxStyle[data-element-name=\"FRONT_M\"],\n.generalBoxStyle[data-element-name=\"SHARE_NEWS\"],\n.mauto_div,\n.mnb_wrapper,\n.noagahi.otherMedia",".banner9,\n.bannerLarge","#PopAlert,\n#RightPan,\n#advBan,\n.AdvertiseD2Ban,\n.DTOPBan,\n.adv_text",".ads-link",".middle-ads",".adss,\n.container_ads","div.mask",".adcbar",".link-ads",".ad-item,\n.ads-footer",".baners,\n.left-ads",".right-ads",".tab-cpc,\n.tab-dpd-post,\ndiv[class^=\"ads\"]",".full-width-tabligh,\n.home-web-surfing,\n.tj-ad-box,\n.tj-ad-wrapper,\ndiv.widget.aside-widget:nth-of-type(5) > .section-title--dotted.section-title > .section-title__h",".rmp-ad-container",".slider-banners.partial,\n.sponsor-link",".ads-box-green,\n.ads-box-red",".light-text.footer-widgets","section#downloadbox > div#indicatorr","div#popupModal,\ndiv.modal-backdrop","div.upbu","img[alt=\"ads\"]","div.style-text-adv",".zxc_matni",".zxc_top",".adbox:not(.adbar),\n.left-side-ad-col",".tabligh","div.colRight div[class^=\"adsBox\"],\ndiv.topAds","#text-12,\n#text-24","div.tb-box",".top-ads",".ads-block,\n.row.fixed-post.post,\n.sidebar-textads","#BannerHome,\n.BannerA,\n.DetailArea > .AdAreaDetail,\ndiv[id^=\"BehinAva\"]","#sidebar-alt","div[id^=\"tabligh\"]",".no-mobile.out-container:nth-of-type(3)",".adsside,\n.elementor-element-d41b3d1,\n.size-large.attachment-large","div[class*=\"blockByVisit_blockByVisit__container\"],\ndiv[class*=\"company_company__ads--ab\"],\ndiv[class^=\"RequireAuth_mainBox\"]","div.feedAdsBox,\ndiv.js-userLogin-popup","div.header-banners",".col-md-offset-6.col-md-3,\n.kanban-col",".khp-site-info p,\n.left.col-md-4",".phoenixad,\na[rel=\"dofollow\"]",".e3lan","#text-2,\n#text-3,\n#text-4,\n#text-6,\n#text-7",".meta-ad",".links_footer",".main22,\n.up_submit > span","x",".adv_l,\n.adv_r_news2",".co-ads","div.loading-banner-modal.is-loading > div.loading-banner.is-brand > div.loading-banner__frame","#popular,\n.lolo",".tab_news > a[href*=\"gameup.ir\"]","div#ZAD",".app_ads_banner",".kpl_linktable",".ads-side",".asiatech","a[onclick^=\"increase_ad_click_count\"]",".banner",".abox","#featured > .owl-stage-outer","div.all_adv,\ndiv.others_web,\ndiv.zxc,\nsection.reportage","#ad-hoc-2,\n.bdaia-e3-container,\n.widget_text.bdaia-widget.widget",".stream-item","#iddivtoplevelscript,\ndiv[style]:nth-of-type(3)",".ads-margin-bot,\n[href*=\"bourse24.ir/ads/click/\"]",".linkbox",".block-simpleads",".clads-inner","script[id^=\"wpcp_\"]","#ADbox-1,\n.ads-sidebar,\n.ads-sticky",".after-post-ads",".Js_Div5",".adsboxfix","div[id^=\"ads\"]","div#kaprila_linktable,\ndiv#mediaad-vFkp","#header-bar,\n.sidebar-digiads","div[itemtype=\"https://schema.org/WPAdBlock\"]",".index-adstop > a:not([href*=\"dlrozaneh.ir\"])","article#post-fix-ads,\ndiv.top-full-ads",".d1yekta,\n[id^=\"pos-article-display-\"]","#faradars",".ads-fix-post,\n.ads-matni",".advertise-place,\n.province-advertise",".all_ads","#ContentPlaceHolder1_divBanner","[class*=\"text_ads\"]",".emojo-ad,\n.pzbkcvuqrn","div.avdDiv",".news-web,\ndiv.tabligh",".header-mdh,\n.pull-right.zm-post-lay-a-area","aside.ad-mobile-none,\ndiv.ads-native","div#ADbox-1,\ndiv#phon",".custom,\n.customads",".FixedAdvertising,\n.left.sidebar_widget:nth-of-type(3),\n.left_ads,\n.right_ads,\n.top_ads","a[href=\"https://maktabsharif.ir/\"]",".post-ad-box","#next1-231,\n.asd_top,\n.fl.block_right > div.box_sh.ads_2","div[class*=\"linkads\"]",".sidebar_tabliq,\n[href^=\"/ads/\"]",".doctor-ads-item","#header_ad,\n.sb_ad",".banner468,\n.tab_box","[href^=\"/redirect/ads/\"]","div[class^=\"css-\"][dir=\"auto\"][data-testid=\"favoritesSuperAppTitle\"]","a[href^=\"https://www.iranjib.ir/ra.php?adid=\"]:not([title=\"اینستاگرام ایران جیب\"]),\ndiv[id^=\"pos-article-display-\"][style=\"min-height:400px\"]","section.box.ads",".advertise_default","div.c-forceToLogin__message,\ndiv.c-forceToLogin__overlay",".im-header-ad","#textads-contents,\n.ads-containter","#ads-container > .list-thumbs.title-only.list.box,\n#header-ad,\n.bg-gray-links.box",".ads_bt_box,\n.ads_singles_post,\n.top_img_ads",".type-sticky.status-publish",".ads-widget",".down-box-ads,\n.down-box1",".singleads","[id^=\"ad\"]","a[href=\"http://www.asalchat.skin\"],\na[href=\"https://www.tarhpardaz.ir\"]","div.ad-wrap,\ndiv.widget-ad-image","#bottombanner,\n.apnl,\n.b","#sezfvg-2,\n.sezfvg",".txt-ads-sl",".eb-inst","div.e3lan,\ndiv.widget#text-15","div[class^=\"yektabanner\"]","div.is_ads","div.ads_posts",".adspanel",".adsblockpop,\n.dtnoppu,\nsection.banners,\nsection.textAds","aside#sidebar > div[style=\"width: 100%;height: 250px;margin: 0px auto 10px;\"],\ndiv#footer-wrapper > div.copyright-wrapper > div#copyright > a,\ndiv.support-center,\nmain#main-content > div[class^=\"tabliq-\"]",".body_wrapper > div:nth-of-type(4)","div.block-simpleads","div.dotline-sticky","a[href*=\"&m_name=ads\"]",".dlbtnhidden",".ad--content","div.ssad",".ytn-hamsan","div#ads1",".c-advertisement",".banner-box",".center.body_c > div > div,\n.center.body_c > div:nth-of-type(2),\n.txtad","#ad7_40,\n.footer-ads","[href*=\"/fa/ads/\"]",".left_banner,\n.links","#arasideadvertising","a[class^=\"skinak-text-ads\"],\narticle.morders,\ndiv.dadsd",".heading-ads,\n.sidebar-right > div.box:nth-of-type(1)",".adv_mobile",".textwidget,\naside:nth-of-type(5)","a[class^=\"text-ads-\"],\ndiv.backoritybase","#cycle_adv_tabnak","section#LeftPanel > div.leftads","[class^=\"adv\"]:not(.adv8, .adv19)",".inner-wrapper-sticky > .mb-3,\n.sidebar-banners",".type-resource-image","div.bnr-ads",".advertisment","#fpc-banner-top,\n#top-right-ad",".full2.box.right,\ndiv.sideheader2:nth-of-type(3)","li.ad-link",".footer-back-link,\n.free_ad_con,\n.logo_full_view","a[href*=\"utm_source=uptrack\"]","#tabligh",".textads",".ads120,\n.ads468,\n.fixpost,\n.gsh,\n.headads","div#ads__start_of_the_post","a.textad,\na[href^=\"/ad/\"][target=\"_blank\"]","#kaprila_linktable_left,\n.left-block-top","#slider-box,\n.mortabet-links,\ndiv.row:nth-of-type(2) > .col-xs-12 > .category-side-ads",".advertisements",".home-ads",".sideads",".main-top-ads,\n.wide-ad-row,\ndiv.a1-banner","div.Product-BannerHeader,\ndiv.price-sticky,\ndiv[class^=\"AdvertisingParser\"]",".flex-ad-body","div#ads-sticky,\nheader + div#slider",".box-title,\n.moreads.widget_text,\n.pm",".mom_custom_text.widget,\n.widget_custom_html.widget.widget_text","div.ads-row-left","#ad14,\n.ad-cell,\n.widget_text",".sidebar-area .image","div.adbox,\nsection.sidebar-box-shop",".my-single-t-p",".dailylink,\nbody > div > font,\ncenter > center > center > center,\ncenter:nth-of-type(2) > center,\ndiv > font > font > .menuheader,\ndiv > font > font > font > p","div.side_txt_zxc,\nul#rssbank","#box_1398,\n#popbox-blackout",".AdsContainer",".special_links,\n.text_adds_container",".zxc_news",".featured_news",".zxc_left",".ads-full-banner-img",".vebgardi",".jmb_banner",".inline-4d",".adrightPanel,\n.container55,\narticle > .box > a[href*=\"salampnu.com\"]","div.sidebar_ads",".vfozk",".aligncenter.wp-image-9273.size-full,\n.size-full.attachment-full",".Topadver",".behtarinseo","div.ads-site","div.bottom-left-ad,\ndiv.bottom-right-ad,\nul.advertise",".adsBanner,\n.two-ad-banners,\n.widget_media_image.widget.container-wrapper","div.zoomtech-banner","div.back_links","#titr-box,\n.maincontent > center,\ntbody","#ads-text,\n#sidebar_ad,\n.b-hd,\n.hidden-xs.hidden-sm.block,\n.hideOnMobile",".new-banner","div.app_ads_banner",".abvertise > .container > a:not(a[href=\"https://t.me/filmha_top\"])",".tabliq"];

const hostnamesMap = new Map([["*",0],["cannews.aero",1],["web.bale.ai",2],["delta3da.cam",3],["persiansub.com",[3,166]],["real-madrid.ir",3],["myhastidl.cam",4],["mojnews.co",5],["eghtesadnews.com",[5,58,66]],["fartaknews.com",[5,84]],["moroornews.com",[5,58,82]],["parsnews.com",[5,161]],["ilna.ir",[5,58]],["tinn.ir",[5,357]],["borna.news",[5,29,196]],["tourismonline.co",[6,7]],["koolakmag.ir",6],["1abzar.com",[8,9]],["gadgetnews.net",[8,382]],["1pezeshk.com",10],["7sobh.com",11],["abipic.com",12],["mihandownload.com",[12,133]],["accpress.com",13],["afkarnews.com",14],["aftabir.com",15],["akharinnews.com",[16,17]],["harmonydl.us",[17,414]],["alamto.com",[18,19]],["power-music.ir",[18,339]],["androidgozar.com",20],["androidha.com",21],["androidsharp.com",22],["aparat.com",[23,24]],["mihanvideo.com",24],["applicationha.com",25],["arga-mag.com",[26,27,28,29,30]],["icivil.ir",26],["plus.ir",27],["beautyhome.ir",[28,263]],["arzcenter.com",31],["asandl.com",[32,33]],["alldriver.ir",[32,251]],["cafejozve.ir",32],["khoshamoz.ir",32],["20file.org",[32,398]],["asbe-bokhar.com",34],["asemooni.com",35],["asriran.com",36],["avapedia.com",37],["barsadic.com",38],["bazimag.com",39],["brain.be-teb.com",40],["benawa.com",41],["beytoote.com",42],["blogsazan.com",43],["boyernews.com",44],["bultannews.com",45],["charbzaban.com",46],["chetor.com",47],["chibepoosham.com",48],["delbaraneh.com",[49,50]],["rouzegar.com",[50,175]],["delgarm.com",[51,52]],["payamekhabar.ir",52],["deltapayam.com",53],["digiato.com",54],["dlfox.com",55],["doctorwp.com",56],["donya-e-eqtesad.com",[57,58,59]],["ecoiran.com",[57,58]],["etemadonline.com",58],["fardanews.com",[58,81,82,83]],["khabarerooz.com",[58,113]],["khabarfoori.com",[58,115]],["khanefootball.com",[58,119,120]],["mojnews.com",[58,82]],["mosalasonline.com",[58,83,112,141]],["sharghdaily.com",[58,119,195]],["shayanews.com",[58,196,197]],["shomavaeghtesad.com",[58,69]],["varandaz.com",[58,83,222,223]],["55online.news",[58,119,222,391,392]],["sobhtazeh.news",[58,395]],["doostihaa.com",60],["downloadha.com",[61,62]],["uploadboy.com",[61,218]],["upsara.com",[61,220]],["uploadkon.ir",[61,362]],["androidina.net",[61,378]],["drdmag.com",63],["e-teb.com",64],["mehrnews.com",[64,131]],["mer30download.com",[64,132]],["salameno.com",64],["shabakeh-mag.com",[64,191]],["tasnimnews.com",[64,208]],["vipofilm.com",[64,225]],["4tools.ir",64],["imna.ir",[64,131,304]],["khabaronline.ir",[64,304,312]],["shahraranews.ir",[64,345]],["shmi.ir",[64,346]],["tebyan.net",64],["ravan.e-teb.com",65],["eghtesadonline.com",67],["miniroid.com",67],["p30day.ir",[67,330]],["web.eitaa.com",68],["ejiga.com",[69,70]],["elmefarda.com",71],["elmevarzesh.com",72],["ensafnews.com",[73,74]],["netpaak.com",[73,146,147]],["bikarsho.ir",[73,264]],["wikihoax.org",[73,74,406]],["mag.khanoumi.com",74],["eramblog.com",75],["etelanews.com",[76,77]],["gahar.ir",[77,297]],["mihand.ir",77],["ezp30.com",78],["faaltarin.com",79],["faceit.ir",[79,291]],["fararu.com",80],["fastdic.com",85],["fileboro.com",86],["filimo.com",87],["footofan.com",88],["gamefa.com",89],["en.gamefa.com",90],["gharbtv.com",91],["ghatreh.com",92],["gooyait.com",93],["graphiran.com",94],["hamgardy.com",95],["harfetaze.com",96],["imvbox.com",97],["irancircle.com",98],["iranstar.com",99],["itarfand.com",100],["itbazar.com",101],["itgheymat.com",102],["itresan.com",103],["jafekri.com",104],["jahannews.com",105],["jalebamooz.com",106],["jesarat.com",107],["k2cod.com",108],["ketabesabz.com",109],["khabarban.com",110],["khabareazad.com",[111,112]],["khabarfarsi.com",114],["khabarpu.com",116],["khabarvarzeshi.com",[117,118]],["salamatnews.com",117],["hamshahrionline.ir",117],["irna.ir",117],["gostaresh.news",[119,391,393]],["khodrobank.com",121],["khodrotak.com",122],["kilipo.com",123],["kojaro.com",124],["lamtakam.com",125],["learnparsi.com",126],["lenzak.com",127],["magbazi.com",128],["magiran.com",129],["majalesalamat.com",130],["mihanfal.com",134],["mihangame.com",135],["mihanmarket.com",136],["news.mihanmarket.com",137],["minevisam.com",138],["mobomod.com",139],["moderndl.com",140],["movienama.com",142],["mybia4music.com",143],["namayesh.com",144],["namnak.com",145],["20tayi.ir",[147,242,243]],["niksalehi.com",148],["niloblog.com",149],["niniban.com",150],["ninisite.com",151],["nodud.com",152],["p30afzar.com",153],["p30konkor.com",154],["p30world.com",[155,156]],["zendegionline.ir",[156,373]],["forum.p30world.com",[157,158]],["parsipet.ir",[157,332]],["parsfootball.com",159],["parsnaz.com",160],["parstools.com",[162,163]],["taktemp.com",[163,207]],["peivast.com",164],["persiangfx.com",165],["persianv.com",167],["radiojavan-iran.com",[167,171]],["picofile.com",168],["podbean.com",169],["prozhedownload.com",170],["rajanews.com",172],["rayamag.com",173],["roozno.com",174],["rozblog.com",[176,177]],["sid.ir",[176,347]],["rozmusic.com",178],["sabtta.com",179],["saednews.com",180],["safarmarket.com",181],["sakhtafzar.com",182],["sakhtafzarmag.com",[183,184]],["seemorgh.com",[184,189]],["sargarme.com",185],["sariasan.com",186],["sarzamindownload.com",187],["sedayiran.com",188],["setare.com",190],["shahrekhabar.com",192],["shahrsakhtafzar.com",193],["shanbemag.com",194],["shereno.com",198],["shomanews.com",199],["simcart.com",200],["softgozar.com",201],["sourceiran.com",[202,203]],["dolatebahar.ir",202],["tak3da.com",204],["takhfifan.com",205],["takhfife.com",206],["techfars.com",[209,210]],["varzesh3.com",[210,224]],["techrato.com",211],["tejaratnews.com",212],["telewebion.com",213],["tiwall.com",214],["top2download.com",215],["topnaz.com",216],["trainbit.com",217],["upmusics.com",219],["vananews.com",221],["webgozar.com",226],["wikisemnan.com",227],["wisgoon.com",228],["yasdl.com",[229,230]],["downloadsoftware.ir",[229,283]],["zibamoon.com",231],["icoff.ee",232],["konkur.in",233],["shirazsong.in",234],["konkur.info",235],["rasm.io",236],["virgool.io",237],["zaya.io",238],["1000site.ir",239],["1da.ir",240],["1ea.ir",241],["androidzoom.ir",[242,255]],["7ganj.ir",244],["8pic.ir",[245,246]],["imgurl.ir",[245,303]],["uupload.ir",[245,365]],["abadis.ir",247],["aftabnews.ir",248],["aftabyazdonline.ir",249],["alibaba.ir",250],["anaj.ir",252],["androidify.ir",253],["moddinggame.ir",253],["androidparsi.ir",254],["anzalweb.ir",256],["apktops.ir",257],["appreview.ir",258],["b2n.ir",[259,260]],["timecity.ir",[259,356]],["barato.ir",261],["bartarinha.ir",262],["softsaaz.ir",264],["youc.ir",264],["bils.ir",265],["bourse24.ir",266],["buzdid.ir",267],["citna.ir",268],["click.ir",269],["coffeeapps.ir",[270,271]],["sclinic.ir",270],["computeruser.ir",272],["dabi.ir",273],["dailymobile.ir",274],["daneshchi.ir",275],["dehlinks.ir",276],["digiboy.ir",277],["digiro.ir",278],["dlrozaneh.ir",279],["download.ir",280],["download1music.ir",281],["downloadly.ir",282],["econews.ir",284],["eghtesadepooya.ir",285],["rastannews.ir",285],["emalls.ir",286],["emeil.ir",287],["emojo.ir",288],["enama.ir",289],["entekhab.ir",290],["farsnews.ir",292],["fastmobile.ir",293],["freedownload.ir",294],["freescript.ir",295],["ftdigital.ir",296],["gamesib.ir",298],["getandroid.ir",299],["gsm.ir",300],["hidoctor.ir",301],["imemar.icivil.ir",302],["my.irancell.ir",305],["iranjib.ir",306],["isna.ir",307],["itna.ir",308],["jobinja.ir",309],["kafebook.ir",310],["khaandaniha.ir",311],["khodropluss.ir",313],["languagedownload.ir",314],["lastsecond.ir",315],["listen2music.ir",316],["loudmusic.ir",317],["mashreghnews.ir",318],["maxstars.ir",319],["mediat.ir",320],["mobile.ir",321],["modirnameh.ir",322],["montiego.ir",323],["moviemag.ir",324],["musicdays.ir",325],["musicdel.ir",326],["najiremix.ir",327],["nex11music.ir",328],["omidnamehnews.ir",329],["p30download.ir",331],["payju.ir",333],["pedal.ir",334],["pgnews.ir",335],["phonroid.ir",336],["plaza.ir",337],["pluginyab.ir",338],["qnama.ir",340],["rahnamato.ir",341],["rond.ir",342],["rozup.ir",343],["sena.ir",344],["skinak.ir",348],["smusic.ir",349],["snn.ir",350],["sornamusic.ir",351],["subf2m.ir",352],["tabnak.ir",353],["taknaz.ir",354],["tehranrasaneh.ir",355],["iranart.news",357],["tinroid.ir",358],["topseda.ir",359],["toranji.ir",360],["up44.ir",361],["uplod.ir",363],["uptrack.ir",364],["varoone.ir",[366,367]],["ariapix.net",366],["tarfandha.org",[366,403]],["my-film.pw",[366,409]],["vgdl.ir",368],["vista.ir",369],["webgoo.ir",370],["webii.ir",371],["yun.ir",372],["zohur12.ir",374],["zoomg.ir",375],["zoomit.ir",376],["filmino.me",377],["cooldl.net",379],["dlbook.net",380],["footballi.net",381],["jeyran.net",383],["par30games.net",384],["parsroid.net",385],["pichak.net",386],["rokna.net",387],["takblog.net",388],["yektablog.net",388],["article.tebyan.net",389],["uplooder.net",390],["mobo.news",394],["techna.news",396],["titr.online",397],["barcanews.org",399],["bazdeh.org",400],["gold-team.org",401],["talab.org",402],["texahang.org",404],["tgju.org",405],["zoomtech.org",407],["ana.press",408],["salamdl.rip",410],["oila.tj",411],["artmusics.top",412],["filmha.top",413]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map([["arongroups.site",[0]],["arongroups.co",[0]]]);

self.specificImports = self.specificImports || [];
self.specificImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
