/*******************************************************************************

    uBlock Origin - a browser extension to block requests.
    Copyright (C) 2014-present Raymond Hill

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

// ruleset: nor-0

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssProceduralImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\".teaser__native\",\"tasks\":[[\"upward\",4]]}"],["{\"selector\":\"#grtvbelt_Sponsored\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\".ad_interscroller\",\"tasks\":[[\"upward\",\".wrapper\"]]}"],["{\"selector\":\".js-betting-widget.is-country-no\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\"a\",\"tasks\":[[\"has-text\",\"/[kc]asino/i\"]]}"],["{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"/^\\\\xA0$/\"]]}"],["{\"selector\":\"#sidebar > li > .block\",\"tasks\":[[\"has\",{\"selector\":\"> .blocksubhead > span\",\"tasks\":[[\"has-text\",\"Noen sponsorer\"]]}]]}"],["{\"selector\":\"script[src^=\\\"//s1.adform.net\\\"]\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"/casino/i\"]]}"],["{\"selector\":\"h2\",\"tasks\":[[\"has\",{\"selector\":\"+ p\",\"tasks\":[[\"has-text\",\"/casino/i\"]]}]]}"],["{\"selector\":\"a[href*=\\\"casino\\\"]\",\"tasks\":[[\"upward\",3]]}"],["{\"selector\":\"p\",\"tasks\":[[\"has-text\",\"/^\\\\xA0$/\"],[\"not\",{\"selector\":\"\",\"tasks\":[[\"has-text\",\"/\\\\S/\"]]}],[\"spath\",\":not(:has(img))\"]]}"],["{\"selector\":\"a[href*=\\\".bedrageri.com/\\\"]\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\".section-1-ad\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"div[id^=\\\"leftAdSpotAdcontainer\\\"]\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\".et_section_regular\",\"tasks\":[[\"has-text\",\"/casino/i\"]]}"],["{\"selector\":\".panel-latest-forum-threads\",\"tasks\":[[\"has-text\",\" sponsor\"]]}"],["{\"selector\":\"strong\",\"tasks\":[[\"has-text\",\"/Casino/i\"]]}"],["{\"selector\":\".boxbanner\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\"#taboola-above-article-thumbnails\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\".list-group\",\"tasks\":[[\"has-text\",\"/casino/i\"]]}"],["{\"selector\":\".adunit-lazy\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".elementor-widget-wrap > .elementor-section\",\"tasks\":[[\"has-text\",\"REKLAMER\"]]}"],["{\"selector\":\".blog-post\",\"tasks\":[[\"has-text\",\"/casino/i\"]]}"],["{\"selector\":\".color-scheme-1\",\"tasks\":[[\"has-text\",\"/Casino/i\"],[\"spath\",\" + div\"]]}","{\"selector\":\".color-scheme-1\",\"tasks\":[[\"has-text\",\"/Casino/i\"]]}","{\"selector\":\"script[data-adfscript]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"h2\",\"tasks\":[[\"has-text\",\"/casino/i\"]]}"],["{\"selector\":\"div[class*=\\\"advertisement-spot\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".ad-banner\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".row div[class^=\\\"auglysing-\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".mvp-widget-home\",\"tasks\":[[\"has-text\",\"/^Velunnarar/\"]]}"],["{\"selector\":\".adsbygoogle\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".g-10\",\"tasks\":[[\"has-text\",\"Artikkelen fortsetter \"]]}","{\"selector\":\".gofollow\",\"tasks\":[[\"upward\",3]]}"],["{\"selector\":\".wpb_wrapper\",\"tasks\":[[\"has-text\",\"/^Annonse:/\"]]}","{\"selector\":\"div[style^=\\\"font-size\\\"]\",\"tasks\":[[\"has-text\",\"/^Annonse:/\"]]}"],["{\"selector\":\"tr\",\"tasks\":[[\"has\",{\"selector\":\"td\",\"tasks\":[[\"has-text\",\"Annonse:\"]]}]]}"],["{\"selector\":\"div[id=\\\"336x280-sidebar\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"[data-variants*=\\\"article_netboard\\\"]\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\"div[data-ad-subtype=\\\"in-feed\\\"]\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\".lenkeboks\",\"tasks\":[[\"has-text\",\"/Casino/i\"]]}"],["{\"selector\":\".home-ads\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"div[nf-desk-widget=\\\"spot.content\\\"]\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\"div[class^=\\\"css\\\"]\",\"tasks\":[[\"matches-css-before\",{\"name\":\"content\",\"pseudo\":\"before\",\"value\":\"^\\\"Annonse\\\"$\"}]]}"],["{\"selector\":\".adunit\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"[data-cy=\\\"video-page-horisontal\\\"] > div\",\"tasks\":[[\"has-text\",\"Annonse\"]]}"],["{\"selector\":\".container-footer-ad\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\".sidebar-ad\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"div[data-placeholder=\\\"lantern_placeholder_ad\\\"]\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\".entrance\",\"tasks\":[[\"has\",{\"selector\":\".entrance__mark__text\",\"tasks\":[[\"has-text\",\"Annonse:\"]]}]]}","{\"selector\":\"div[data-name=\\\"gamer_toppbanner\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".bottomSmallSpaced.topMediumSpaced\",\"tasks\":[[\"has-text\",\"/^Annonse/\"]]}"],["{\"selector\":\".comcontent\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\".item\",\"tasks\":[[\"has\",{\"selector\":\".meta\",\"tasks\":[[\"has-text\",\"/^Annonse$/\"]]}]]}","{\"selector\":\".td-c-loop-item\",\"tasks\":[[\"has\",{\"selector\":\".meta-info\",\"tasks\":[[\"has-text\",\"Annonse\"]]}]]}"],["{\"selector\":\".latestnews-box\",\"tasks\":[[\"has-text\",\"/casino/i\"]]}"],["{\"selector\":\".title\",\"tasks\":[[\"has-text\",\"/ANNONSE/i\"]]}"],["{\"selector\":\"div[id^=\\\"advert-\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".front optimus-element\",\"tasks\":[[\"has-text\",\"Eurojackpot\"]]}","{\"selector\":\"amedia-frontpage > .optimus-complex-front\",\"tasks\":[[\"has\",{\"selector\":\"> header > h2\",\"tasks\":[[\"has-text\",\"/Reklame|REKLAME/\"]]}]]}","{\"selector\":\"amedia-include[param-editionid=\\\"reklame\\\"]\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\"article[data-lp-section=\\\"sportspill\\\"]:has(.slotHeader)\",\"tasks\":[[\"has-text\",\"/lotto/i\"]]}"],["{\"selector\":\".adsbygoogle\",\"tasks\":[[\"upward\",2]]}","{\"selector\":\"ins[data-revive-zoneid]\",\"tasks\":[[\"upward\",2]]}"],["{\"selector\":\".textwidget\",\"tasks\":[[\"has-text\",\"Annonse\"]]}","{\"selector\":\".widget-title\",\"tasks\":[[\"has-text\",\"Annonser\"]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has-text\",\"Annonse\"]]}"],["{\"selector\":\".widget-goodpress-home-block-one\",\"tasks\":[[\"has-text\",\"Annonsørinnhold\"]]}"],["{\"selector\":\".widget\",\"tasks\":[[\"has-text\",\"Play-Asia\"]]}","{\"selector\":\".widget\",\"tasks\":[[\"has-text\",\"Reklame\"]]}"],["{\"selector\":\"iframe[src*=\\\"://ads.\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"div\",\"tasks\":[[\"has\",{\"selector\":\"> span\",\"tasks\":[[\"has-text\",\"Annonse\"]]}]]}"],["{\"selector\":\"div[data-ga-action$=\\\"_ad\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\"#topboard\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\"article > div\",\"tasks\":[[\"has-text\",\"/^annonse$/\"]]}","{\"selector\":\"div\",\"tasks\":[[\"matches-css\",{\"name\":\"min-height\",\"value\":\"^165px$\"}]]}","{\"selector\":\"div.clearfix.col-full-width\",\"tasks\":[[\"has-text\",\"kommersielle partner\"]]}","{\"selector\":\"main > div > div\",\"tasks\":[[\"has-text\",\"kommersielle partner\"]]}","{\"selector\":\"main > section > section\",\"tasks\":[[\"has-text\",\"/^annonse$/\"]]}","{\"selector\":\"section\",\"tasks\":[[\"has\",{\"selector\":\"> div > div\",\"tasks\":[[\"has-text\",\"/^annonse$/\"]]}]]}"],["{\"selector\":\".one-half\",\"tasks\":[[\"has-text\",\"/[kc]asino/i\"]]}"],["{\"selector\":\".adsbygoogle\",\"tasks\":[[\"upward\",5]]}"],["{\"selector\":\"div.large-12.row\",\"tasks\":[[\"has-text\",\"MASCUS\"]]}"],["{\"selector\":\".widget_media_image\",\"tasks\":[[\"has-text\",\"/^ANNONSE/\"]]}"],["{\"selector\":\".fl-visible-desktop-medium\",\"tasks\":[[\"has\",{\"selector\":\"div[class^=\\\"ann-forside\\\"]\",\"tasks\":[[\"has-text\",\"/Annonse:/\"]]}]]}"],["{\"selector\":\".td-pb-span4\",\"tasks\":[[\"has-text\",\"ANNONSØRINNHOLD\"]]}"],["{\"selector\":\"div[id*=\\\"-feedAdvert\\\"]\",\"tasks\":[[\"upward\",1]]}"],["{\"selector\":\".forside_adholder\",\"tasks\":[[\"upward\",1]]}","{\"selector\":\"td\",\"tasks\":[[\"has-text\",\"/^\\\\xA0$/\"],[\"not\",{\"selector\":\"\",\"tasks\":[[\"has-text\",\"/\\\\S/\"]]}],[\"spath\",\":not(:has(img))\"]]}","{\"selector\":\"tr\",\"tasks\":[[\"has-text\",\"/^\\\\xA0$/\"],[\"not\",{\"selector\":\"\",\"tasks\":[[\"has-text\",\"/\\\\S/\"]]}],[\"spath\",\":not(:has(img))\"]]}"],["{\"selector\":\".col-md-3 .block\",\"tasks\":[[\"has-text\",\"ponsor\"]]}"]];

const hostnamesMap = new Map([["goal.com",2],["gunnarandreassen.com",3],["icelandreview.com",4],["knr.gl",4],["nutiminn.is",4],["bir.no",4],["medier24.no",4],["nakenprat.com",5],["altomdata.dk",6],["anettelyskjaer.dk",[7,8]],["cuben-linedance.dk",7],["dreampapers.dk",[7,8]],["iphoneluppen.dk",[7,8]],["padleguide.dk",[7,23]],["polarmedia.dk",7],["nemsvar.nu",[7,8]],["bilgalleri.dk",9],["check-in.dk",10],["dagens.dk",11],["dmi.dk",12],["edbpriser.dk",13],["fodboldspilleren.dk",14],["gaming.dk",15],["jumpb.dk",16],["kanalfrederikshavn.dk",17],["kendte.dk",18],["lydogbillede.dk",19],["lydogbilde.no",19],["lystfiskerguiden.dk",20],["margit-henriksen.dk",21],["thura.dk",21],["ni.dk",22],["bilasolur.is",24],["eidfaxi.is",25],["sporttv.is",26],["veitingageirinn.is",27],["sveip.net",28],["730.no",29],["arendalstidende.no",30],["bilnorge.no",31],["bimmers.no",32],["bt.no",33],["butikkoversikten.no",34],["byggenytt.no",35],["cw.no",36],["dagbladet.no",[37,38,39]],["sol.no",[38,39]],["elbil24.no",39],["kk.no",39],["seher.no",39],["vi.no",39],["dfly.no",40],["dn.no",41],["gamer.no",42],["glr.no",43],["itavisen.no",44],["leinstrand-il.no",45],["lokal-avisen.no",46],["minmote.no",47],["nettavisen.no",48],["parcferme.no",49],["pengenytt.no",50],["politainment.no",51],["smis.no",51],["ranaposten.no",52],["xn--bodposten-n8a.no",52],["retrospilling.no",53],["skolediskusjon.no",54],["sorlandsavisen.no",55],["startsiden.no",56],["tek.no",57],["teknologia.no",58],["thaiguiden.no",59],["tungt.no",60],["tunnelsyn.no",61],["united.no",62],["utrop.no",63],["direkte.vg.no",64],["yrkesbil.no",65],["ipmsnorge.org",66]]);

const entitiesMap = new Map([["costume",0],["gamereactor",1]]);

const exceptionsMap = new Map(undefined);

self.proceduralImports = self.proceduralImports || [];
self.proceduralImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
