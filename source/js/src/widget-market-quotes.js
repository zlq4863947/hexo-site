!function() {
  /**
   * @param {string} point
   * @return {?}
   */
  function draw(point) {
    return({
      ar_AE : "ar",
      au : "au",
      ca : "ca",
      de_DE : "de",
      en : "www",
      es : "es",
      fa_IR : "ir",
      fr : "fr",
      he_IL : "il",
      hu_HU : "hu",
      id : "id",
      in : "in",
      it : "it",
      ja : "jp",
      kr : "kr",
      ms_MY : "my",
      pl : "pl",
      br : "br",
      ru : "ru",
      sv_SE : "se",
      th_TH : "th",
      tr : "tr",
      uk : "uk",
      vi_VN : "vn",
      zh_CN : "cn",
      zh_TW : "tw"
    }[point] || "www") + ".tradingview.com";
  }
  /**
   * @param {?} method
   * @param {Object} data
   * @return {?}
   */
  function f(method, data) {
    if (void 0 === data) {
      data = {};
    }
    data.locale = data.locale || "en";
    var nextCode;
    var before = out[data.widgetName];
    var renderedBefore = before ? before.en : out.default;
    nextCode = before && before[method] ? before[method] : renderedBefore;
    var xhtml = nextCode.replace("{0}", '<span style="color: #3BB3E4">TradingView</span>');
    var s = draw(data.locale);
    /** @type {Element} */
    var element = document.createElement("a");
    return element.setAttribute("ref", "nofollow noopener"), element.setAttribute("target", "_blank"), element.setAttribute("href", "http://" + s + (data.utmString ? "?" + data.utmString : "")), element.style.color = "#ADAEB0", element.style.fontFamily = "'Trebuchet MS', Tahoma, Arial, sans-serif", element.style.fontSize = "13px", element.innerHTML = xhtml, element.outerHTML;
  }
  /**
   * @return {?}
   */
  function initialize() {
    return "www.tradingview.com" === location.host || ("wwwcn.tradingview.com" === location.host || ("dwq4do82y8xi7.cloudfront.net" === location.host || ("s.tradingview.com" === location.host || ("i18n.tradingview.com" === location.host || ("partial.tradingview.com" === location.host || (location.host.match(/^[a-z]{2}\.tradingview\.com/) || location.host.match(/prod-[^.]+.tradingview.com/))))))) ? "battle" : -1 !== location.href.indexOf("tradingview.com") ? "staging" : location.host.match(/webcharts/) ? 
    "staging_local" : (location.host.match(/^localhost(:\d+)?$/), "local");
  }
  var names = {
    en : "en",
    ca : "en",
    it : "it",
    vi_VN : "vi",
    au : "en",
    th_TH : "th",
    id : "id_ID",
    es : "es",
    ru : "ru",
    tr : "tr",
    hu_HU : "hu_HU",
    pl : "pl",
    fr : "fr",
    zh_TW : "zh_TW",
    ar_AE : "ar",
    ms_MY : "ms_MY",
    br : "pt",
    de_DE : "de",
    ja : "ja",
    fa_IR : "fa",
    zh_CN : "zh",
    sv_SE : "sv",
    kr : "ko",
    uk : "en",
    he_IL : "he_IL",
    in : "en"
  };
  var widgets = {
    events : "external-embedding/embed-widget-events.js",
    hotlists : "external-embedding/embed-widget-hotlists.js",
    marketoverview : "external-embedding/embed-widget-market-overview.js",
    tickers : "external-embedding/embed-widget-tickers.js",
    forex_cross_rates : "external-embedding/embed-widget-forex-cross-rates.js",
    market_quotes : "js/src/widget-market-quotes.js",
    forex_heat_map : "external-embedding/embed-widget-forex-heat-map.js",
    screener : "external-embedding/embed-widget-screener.js"
  };
  var opts = {
    localPrefix : "/static/bundles/",
    cloudfrontBase : "https://s3.tradingview.com/",
    widgets : widgets
  };
  var langs = {
    en : "Economic Calendar by {0}",
    ar : "Economic Calendar by {0}",
    cs : "Economic Calendar by {0}",
    da_DK : "Economic Calendar by {0}",
    de : "Wirtschaftskalender von {0}",
    el : "Economic Calendar by {0}",
    es : "Calendario ccon\u00f3mico por {0}",
    et_EE : "Economic Calendar by {0}",
    fa : "Economic Calendar by {0}",
    fr : "Calendrier \u00e9conomique par {0}",
    he_IL : "Economic Calendar by {0}",
    hu_HU : "Gazdas\u00e1gi Napt\u00e1rat biztos\u00edtja: {0}",
    id_ID : "Kalender Ekonomi oleh {0}",
    it : "Calendario economico da {0}",
    ja : "{0}\u306b\u3088\u308b\u7d4c\u6e08\u30ab\u30ec\u30f3\u30c0\u30fc",
    ko : "{0} \uc81c\uacf5 \uc774\ucf54\ub178\ubbf9 \uce98\ub9b0\ub354",
    ms_MY : "Kalendar ekonomi mengikut {0}",
    nl_NL : "Economic Calendar by {0}",
    no : "Economic Calendar by {0}",
    pl : "Kalendarz ekonomiczny od {0}",
    pt : "Calend\u00e1rio Econ\u00f4mico por {0}",
    ro : "Economic Calendar by {0}",
    ru : "\u042d\u043a\u043e\u043d\u043e\u043c\u0438\u0447\u0435\u0441\u043a\u0438\u0439 \u043a\u0430\u043b\u0435\u043d\u0434\u0430\u0440\u044c \u043e\u0442 {0}",
    sk_SK : "Economic Calendar by {0}",
    sv : "Economic Calendar by {0}",
    th : "\u0e1b\u0e0f\u0e34\u0e17\u0e34\u0e19\u0e40\u0e28\u0e23\u0e29\u0e10\u0e01\u0e34\u0e08\u0e42\u0e14\u0e22 {0}",
    tr : "Ekonomik Takvimi sa\u011flayan {0}",
    vi : "L\u1ecbch Kinh T\u1ebf b\u1edfi {0}",
    zh : "{0}\u7684\u8d22\u7ecf\u65e5\u5386",
    zh_TW : "{0} \u7684\u8ca1\u7d93\u65e5\u66c6"
  };
  var resStore = {
    en : "Forex Quotes by {0}",
    ar : "Forex Quotes by {0}",
    cs : "Forex Quotes by {0}",
    da_DK : "Forex Quotes by {0}",
    de : "Devisenkurse von {0}",
    el : "Forex Quotes by {0}",
    es : "Cotizaciones del mercado de divisas por {0}",
    et_EE : "Forex Quotes by {0}",
    fa : "Forex Quotes by {0}",
    fr : "Cotations forex par {0}",
    he_IL : "Forex Quotes by {0}",
    hu_HU : "Forex Jegyz\u00e9seket biztos\u00edtja: {0}",
    id_ID : "Kutipan Forex oleh {0}",
    it : "Quotazioni Forex da {0}",
    ja : "{0}\u306b\u3088\u308bFX\u898b\u7a4d\u3082\u308a",
    ko : "{0} \uc81c\uacf5 \ud3ec\ub809\uc2a4 \ucffc\ud2b8",
    ms_MY : "Sebutharga Forex mengikut {0}",
    nl_NL : "Forex Quotes by {0}",
    no : "Forex Quotes by {0}",
    pl : "Notowania Forex od {0}",
    pt : "Cota\u00e7\u00f5es Forex por {0}",
    ro : "Forex Quotes by {0}",
    ru : "\u0424\u043e\u0440\u0435\u043a\u0441 \u0434\u0430\u043d\u043d\u044b\u0435 \u043e\u0442 {0}",
    sk_SK : "Forex Quotes by {0}",
    sv : "Forex Quotes by {0}",
    th : "\u0e41\u0e08\u0e49\u0e07\u0e23\u0e32\u0e04\u0e32\u0e1f\u0e2d\u0e40\u0e23\u0e47\u0e01\u0e0b\u0e4c\u0e42\u0e14\u0e22 {0}",
    tr : "Forex Fiyatlar\u0131 sa\u011flayan {0}",
    vi : "B\u00e1o gi\u00e1 Forex b\u1edfi {0}",
    zh : "{0}\u7684\u5916\u6c47\u884c\u60c5",
    zh_TW : "{0} \u7684\u5916\u532f\u5831\u50f9"
  };
  var numberCurrencyLocalizer = {
    en : "Market Movers by {0}",
    ar : "\u062a\u062d\u0631\u0643\u0627\u062a \u0627\u0644\u0623\u0633\u0648\u0627\u0642 \u0645\u0646 \u0642\u0628\u0644\u200e{0}\u200e",
    cs : "Market Movers by {0}",
    da_DK : "Market Movers by {0}",
    de : "Market Movers von {0}",
    el : "Market Movers by {0}",
    es : "Movimientos del mercado por {0}",
    et_EE : "Market Movers by {0}",
    fa : "Market Movers by {0}",
    fr : "Les plus actifs sur les march\u00e9s par {0}",
    he_IL : "Market Movers by {0}",
    hu_HU : "Piac Mozgat\u00f3kat biztos\u00edtja: {0}",
    id_ID : "Penggerak Pasar oleh {0}",
    it : "Market mover da {0}",
    ja : "{0}\u306b\u3088\u308b\u5e02\u5834\u52d5\u5411",
    ko : "{0} \uc81c\uacf5 \ub9c8\ucf13 \uc8fc\ub3c4\uc8fc",
    ms_MY : "Penggerak pasaran mengikut {0}",
    nl_NL : "Market Movers by {0}",
    no : "Market Movers by {0}",
    pl : "Ruchy na rynku wg {0}",
    pt : "Destaques do Mercado por {0}",
    ro : "Market Movers by {0}",
    ru : "\u041b\u0438\u0434\u0435\u0440\u044b \u0440\u044b\u043d\u043a\u0430 \u043e\u0442 {0}",
    sk_SK : "Market Movers by {0}",
    sv : "Market Movers by {0}",
    th : "\u0e1c\u0e38\u0e49\u0e40\u0e04\u0e25\u0e37\u0e48\u0e2d\u0e19\u0e44\u0e2b\u0e27\u0e15\u0e25\u0e32\u0e14\u0e42\u0e14\u0e22 {0}",
    tr : "Borsa \u00d6zeti sa\u011flayan {0}",
    vi : "Bi\u1ebfn \u0111\u1ed9ng Th\u1ecb tr\u01b0\u1eddng b\u1edfi {0}",
    zh : "{0}\u7684\u5e02\u573a\u52a8\u5411",
    zh_TW : "{0} \u7684\u5e02\u5834\u52d5\u5411"
  };
  var supportedLang = {
    en : "Market Quotes by {0}",
    ar : "Market Quotes by {0}",
    cs : "Market Quotes by {0}",
    da_DK : "Market Quotes by {0}",
    de : "Marktkurse von {0}",
    el : "Market Quotes by {0}",
    es : "Cotizaciones del mercado por {0}",
    et_EE : "Market Quotes by {0}",
    fa : "Market Quotes by {0}",
    fr : "Cotations des march\u00e9s par {0}",
    he_IL : "Market Quotes by {0}",
    hu_HU : "Piaci Jegyz\u00e9seket biztos\u00edtja: {0}",
    id_ID : "Kutipan Pasar oleh {0}",
    it : "Quotazioni di mercato da {0}",
    ja : "{0}\u306b\u3088\u308b\u5e02\u5834\u306e\u76f8\u5834",
    ko : "{0} \uc81c\uacf5 \ub9c8\ucf13 \ucffc\ud2b8",
    ms_MY : "Sebutharga pasaran mengikut {0}",
    nl_NL : "Market Quotes by {0}",
    no : "Market Quotes by {0}",
    pl : "Notowania rynkowe od {0}",
    pt : "Cota\u00e7\u00f5es de Mercado por {0}",
    ro : "Market Quotes by {0}",
    ru : "\u0420\u044b\u043d\u043e\u0447\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u044b {0}",
    sk_SK : "Market Quotes by {0}",
    sv : "Market Quotes by {0}",
    th : "\u0e41\u0e08\u0e49\u0e07\u0e23\u0e32\u0e04\u0e32\u0e15\u0e25\u0e32\u0e14\u0e42\u0e14\u0e22 {0}",
    tr : "Piyasa Fiyatlar\u0131n\u0131 sa\u011flayan {0}",
    vi : "B\u00e1o gi\u00e1 Th\u1ecb tr\u01b0\u1eddng b\u1edfi {0}",
    zh : "{0}\u7684\u5e02\u573a\u884c\u60c5",
    zh_TW : "{0} \u7684\u5e02\u5834\u5831\u50f9"
  };
  var dictionary = {
    en : "Quotes by {0}",
    ar : "Quotes by {0}",
    cs : "Quotes by {0}",
    da_DK : "Quotes by {0}",
    de : "Kurse von {0}",
    el : "Quotes by {0}",
    es : "Cotizaciones por {0}",
    et_EE : "Quotes by {0}",
    fa : "Quotes by {0}",
    fr : "Cotations par {0}",
    he_IL : "Quotes by {0}",
    hu_HU : "Jegyz\u00e9sek {0} \u00c1ltal",
    id_ID : "Kutipan oleh {0}",
    it : "Quotazioni da {0}",
    ja : "{0}\u306b\u3088\u308b\u898b\u7a4d\u3082\u308a",
    ko : "{0} \uc81c\uacf5 \ucffc\ud2b8",
    ms_MY : "Sebutharga mengikut {0}",
    nl_NL : "Quotes by {0}",
    no : "Quotes by {0}",
    pl : "Notowania od {0}",
    pt : "Cota\u00e7\u00f5es por {0}",
    ro : "Quotes by {0}",
    ru : "\u041a\u043e\u0442\u0438\u0440\u043e\u0432\u043a\u0438 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u044b {0}",
    sk_SK : "Quotes by {0}",
    sv : "Quotes by {0}",
    th : "\u0e41\u0e08\u0e49\u0e07\u0e23\u0e32\u0e04\u0e32\u0e42\u0e14\u0e22 {0}",
    tr : "Fiyatlar\u0131 sa\u011flayan {0}",
    vi : "B\u00e1o gi\u00e1 b\u1edfi {0}",
    zh : "{0}\u7684\u884c\u60c5",
    zh_TW : "{0} \u7684\u5831\u50f9"
  };
  var dictionnary = {
    en : "Forex Heat Map by {0}",
    ar : "Forex Heat Map by {0}",
    cs : "Forex Heat Map by {0}",
    da_DK : "Forex Heat Map by {0}",
    de : "Devisen Heat-Map von {0}",
    el : "Forex Heat Map by {0}",
    es : "Mapa de riesgos forex por {0}",
    et_EE : "Forex Heat Map by {0}",
    fa : "Forex Heat Map by {0}",
    fr : "Carte thermique du Forex par {0}",
    he_IL : "Forex Heat Map by {0}",
    hu_HU : "Forex Heat Map by {0}",
    id_ID : "Peta Panas Forex oleh {0}",
    it : "Mappa termica Forex di {0}",
    ja : "{0}\u306b\u3088\u308b\u70ba\u66ff\u30d2\u30fc\u30c8\u30de\u30c3\u30d7",
    ko : "{0} \uc81c\uacf5 \ud3ec\ub809\uc2a4 \ud788\ud2b8 \ub9f5",
    ms_MY : "Forex Heat Map oleh {0}",
    nl_NL : "Forex Heat Map by {0}",
    no : "Forex Heat Map by {0}",
    pl : "Mapa Cieplna Forex od {0}",
    pt : "Mapa de Calor Forex por {0}",
    ro : "Forex Heat Map by {0}",
    ru : "\u0422\u0435\u043f\u043b\u043e\u0432\u0430\u044f \u043a\u0430\u0440\u0442\u0430 \u0432\u0430\u043b\u044e\u0442 \u043e\u0442 {0}",
    sk_SK : "Forex Heat Map by {0}",
    sv : "Forex Heat Map by {0}",
    th : "\u0e15\u0e32\u0e23\u0e32\u0e07\u0e1f\u0e2d\u0e40\u0e23\u0e47\u0e01\u0e0b\u0e4c\u0e2e\u0e35\u0e17\u0e41\u0e21\u0e1e\u0e42\u0e14\u0e22 {0}",
    tr : "Forex S\u0131cakl\u0131k Haritas\u0131 sa\u011flayan {0}",
    vi : "B\u1ea3n \u0111\u1ed3 Nhi\u1ec7t Forex b\u1edfi {0}",
    zh : "{0}\u7684\u5916\u6c47\u70ed\u56fe",
    zh_TW : "{0} \u5916\u532f\u71b1\u5340\u5716"
  };
  var items = {
    en : "Stock Screener by {0}",
    ar : "Stock Screener by {0}",
    cs : "Stock Screener by {0}",
    da_DK : "Stock Screener by {0}",
    de : "Aktien-Screener von {0}",
    el : "Stock Screener by {0}",
    es : "Filtrador de acciones por {0}",
    et_EE : "Stock Screener by {0}",
    fa : "Stock Screener by {0}",
    fr : "Stock Screener par {0}",
    he_IL : "Stock Screener by {0}",
    hu_HU : "Stock Screener by {0}",
    id_ID : "Pemilah Saham oleh {0}",
    it : "Screener azioni di {0}",
    ja : "{0}\u306b\u3088\u308b\u682a\u5f0f\u9298\u67c4\u30b9\u30af\u30ea\u30fc\u30ca\u30fc",
    ko : "{0} \uc81c\uacf5 \uc2a4\ud0c1 \uc2a4\ud06c\ub9ac\ub108",
    ms_MY : "Penyaring Stok oleh {0}",
    nl_NL : "Stock Screener by {0}",
    no : "Stock Screener by {0}",
    pl : "Stock Screener by {0}",
    pt : "Rastreador de Fundamentos por {0}",
    ro : "Stock Screener by {0}",
    ru : "\u0421\u043a\u0440\u0438\u043d\u0435\u0440 \u0430\u043a\u0446\u0438\u0439 \u043e\u0442 {0}",
    sk_SK : "Stock Screener by {0}",
    sv : "Stock Screener by {0}",
    th : "\u0e15\u0e31\u0e27\u0e0a\u0e48\u0e27\u0e22\u0e04\u0e31\u0e14\u0e01\u0e23\u0e2d\u0e07\u0e2b\u0e38\u0e49\u0e19\u0e42\u0e14\u0e22 {0}",
    tr : "{0} Hisse Takip\u00e7isi",
    vi : "L\u1ecdc C\u1ed5 Phi\u1ebfu b\u1edfi {0}",
    zh : "\u7531{0}\u63d0\u4f9b\u7684\u80a1\u7968\u7b5b\u9009\u5668",
    zh_TW : "\u80a1\u7968\u7be9\u9078\u5668 {0}"
  };
  var info = {
    en : "Forex Screener by {0}",
    ar : "Forex Screener by {0}",
    cs : "Forex Screener by {0}",
    da_DK : "Forex Screener by {0}",
    de : "Devisen-Screener von {0}",
    el : "Forex Screener by {0}",
    es : "Filtrador de forex por {0}",
    et_EE : "Forex Screener by {0}",
    fa : "Forex Screener by {0}",
    fr : "Forex Screener par {0}",
    he_IL : "Forex Screener by {0}",
    hu_HU : "Forex Screener by {0}",
    id_ID : "Pemilah Forex oleh {0}",
    it : "Screener forex di {0}",
    ja : "{0}\u306b\u3088\u308bFX\u30b9\u30af\u30ea\u30fc\u30ca\u30fc",
    ko : "{0} \uc81c\uacf5 \ud3ec\ub809\uc2a4 \uc2a4\ud06c\ub9ac\ub108",
    ms_MY : "Penyaring Forex oleh {0}",
    nl_NL : "Forex Screener by {0}",
    no : "Forex Screener by {0}",
    pl : "Forex Screener by {0}",
    pt : "Rastreador Forex por {0}",
    ro : "Forex Screener by {0}",
    ru : "\u0421\u043a\u0440\u0438\u043d\u0435\u0440 \u0424\u043e\u0440\u0435\u043a\u0441 \u043e\u0442 {0}",
    sk_SK : "Forex Screener by {0}",
    sv : "Forex Screener by {0}",
    th : "\u0e15\u0e31\u0e27\u0e0a\u0e48\u0e27\u0e22\u0e04\u0e31\u0e14\u0e01\u0e23\u0e2d\u0e07\u0e1f\u0e2d\u0e40\u0e23\u0e47\u0e01\u0e0b\u0e4c\u0e42\u0e14\u0e22 {0}",
    tr : "{0} Forex Takip\u00e7isi",
    vi : "L\u1ecdc Forex b\u1edfi {0}",
    zh : "\u7531{0}\u63d0\u4f9b\u7684\u5916\u6c47\u7b5b\u9009\u5668",
    zh_TW : "\u5916\u532f\u7be9\u9078\u5668 {0}"
  };
  var loaded = {
    en : "Cryptocurrencies Screener by {0}",
    ar : "Cryptocurrencies Screener by {0}",
    cs : "Cryptocurrencies Screener by {0}",
    da_DK : "Cryptocurrencies Screener by {0}",
    de : "Kryptow\u00e4hrungen-Screener von {0}",
    el : "Cryptocurrencies Screener by {0}",
    es : "Filtrador de criptodivisas por {0}",
    et_EE : "Cryptocurrencies Screener by {0}",
    fa : "Cryptocurrencies Screener by {0}",
    fr : "Screener de cryptodevises par {0}",
    he_IL : "Cryptocurrencies Screener by {0}",
    hu_HU : "Cryptocurrencies Screener by {0}",
    id_ID : "Pemilah Mata Uang Digital oleh {0}",
    it : "Screener cripto di {0}",
    ja : "{0}\u306b\u3088\u308b\u4eee\u60f3\u901a\u8ca8\u30b9\u30af\u30ea\u30fc\u30ca\u30fc",
    ko : "{0} \uc81c\uacf5 \ud06c\ub9bd\ud1a0\ucee4\ub7f0\uc2dc \uc2a4\ud06c\ub9ac\ub108",
    ms_MY : "Penyaring Matawang Kripto oleh {0}",
    nl_NL : "Cryptocurrencies Screener by {0}",
    no : "Cryptocurrencies Screener by {0}",
    pl : "Cryptocurrencies Screener by {0}",
    pt : "Rastreador de Criptomoedas por {0}",
    ro : "Cryptocurrencies Screener by {0}",
    ru : "\u0421\u043a\u0440\u0438\u043d\u0435\u0440 \u043a\u0440\u0438\u043f\u0442\u043e\u0432\u0430\u043b\u044e\u0442 \u043e\u0442 {0}",
    sk_SK : "Cryptocurrencies Screener by {0}",
    sv : "Cryptocurrencies Screener by {0}",
    th : "\u0e15\u0e31\u0e27\u0e0a\u0e48\u0e27\u0e22\u0e04\u0e31\u0e14\u0e01\u0e23\u0e2d\u0e07\u0e2a\u0e01\u0e38\u0e25\u0e40\u0e07\u0e34\u0e19\u0e14\u0e34\u0e08\u0e34\u0e15\u0e2d\u0e25\u0e42\u0e14\u0e22 {0}",
    tr : "{0} Kriptokur Takip\u00e7isi",
    vi : "L\u1ecdc Ti\u1ec1n \u0111i\u1ec7n t\u1eed b\u1edfi {0}",
    zh : "\u7531{0}\u63d0\u4f9b\u7684\u52a0\u5bc6\u8d27\u5e01\u7b5b\u9009\u5668",
    zh_TW : "\u52a0\u5bc6\u8ca8\u5e63\u7be9\u9078\u5668 {0}"
  };
  var es = {
    en : "Market Quotes by {0}",
    ar : "Market Quotes by {0}",
    cs : "Market Quotes by {0}",
    da_DK : "Market Quotes by {0}",
    de : "Marktkurse von {0}",
    el : "Market Quotes by {0}",
    es : "Cotizaciones del mercado por {0}",
    et_EE : "Market Quotes by {0}",
    fa : "Market Quotes by {0}",
    fr : "Cotations des march\u00e9s par {0}",
    he_IL : "Market Quotes by {0}",
    hu_HU : "Piaci Jegyz\u00e9seket biztos\u00edtja: {0}",
    id_ID : "Kutipan Pasar oleh {0}",
    it : "Quotazioni di mercato da {0}",
    ja : "{0}\u306b\u3088\u308b\u5e02\u5834\u306e\u76f8\u5834",
    ko : "{0} \uc81c\uacf5 \ub9c8\ucf13 \ucffc\ud2b8",
    ms_MY : "Sebutharga pasaran mengikut {0}",
    nl_NL : "Market Quotes by {0}",
    no : "Market Quotes by {0}",
    pl : "Notowania rynkowe od {0}",
    pt : "Cota\u00e7\u00f5es de Mercado por {0}",
    ro : "Market Quotes by {0}",
    ru : "\u0420\u044b\u043d\u043e\u0447\u043d\u044b\u0435 \u0434\u0430\u043d\u043d\u044b\u0435 \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u0435\u043d\u044b {0}",
    sk_SK : "Market Quotes by {0}",
    sv : "Market Quotes by {0}",
    th : "\u0e41\u0e08\u0e49\u0e07\u0e23\u0e32\u0e04\u0e32\u0e15\u0e25\u0e32\u0e14\u0e42\u0e14\u0e22 {0}",
    tr : "Piyasa Fiyatlar\u0131n\u0131 sa\u011flayan {0}",
    vi : "B\u00e1o gi\u00e1 Th\u1ecb tr\u01b0\u1eddng b\u1edfi {0}",
    zh : "{0}\u7684\u5e02\u573a\u884c\u60c5",
    zh_TW : "{0} \u7684\u5e02\u5834\u5831\u50f9"
  };
  var out = {
    events : langs,
    forexcrossrates : resStore,
    hotlists : numberCurrencyLocalizer,
    marketoverview : supportedLang,
    tickers : dictionary,
    forexheatmap : dictionnary,
    screener : items,
    forexscreener : info,
    cryptoscreener : loaded,
    marketquotes : es,
    default : "by {0}"
  };
  /**
   * @param {string} url
   * @param {string} obj
   * @return {undefined}
   */
  var json = function(url, obj) {
    if (void 0 === obj) {
      /** @type {string} */
      obj = "json";
    }
    /** @type {string} */
    this.pathname = ("battle" === this._environment() ? "/" : opts.localPrefix) + url;
    /** @type {string} */
    this.settingsFormat = obj;
    this.matchedScripts = this._findScripts();
    this._replaceAllScriptElements(this.matchedScripts);
  };
  var descriptor = {
    embedWidgetSitePath : {},
    widgetName : {},
    propertiesToWorkWith : {},
    utmInfo : {},
    hasOutsideHeader : {},
    iframeSrcBase : {},
    propertiesToSkipInHash : {},
    propertiesToGetParams : {},
    cloudfrontHost : {}
  };
  /**
   * @return {?}
   */
  descriptor.embedWidgetSitePath.get = function() {
    return "";
  };
  /**
   * @return {?}
   */
  descriptor.widgetName.get = function() {
    return "basic";
  };
  /**
   * @return {?}
   */
  descriptor.propertiesToWorkWith.get = function() {
    return[];
  };
  /**
   * @return {?}
   */
  descriptor.utmInfo.get = function() {
    return{
      utm_source : location.hostname,
      utm_medium : "widget",
      utm_campaign : this.widgetName
    };
  };
  /**
   * @return {?}
   */
  descriptor.hasOutsideHeader.get = function() {
    return false;
  };
  /**
   * @return {?}
   */
  json.prototype._environment = function() {
    var id = initialize();
    return "local" === id && (null === location.host.match(/^localhost(:\d+)?$/) && (id = "battle")), id;
  };
  /**
   * @param {Object} a
   * @return {?}
   */
  json.prototype.prepareAndFilterData = function(a) {
    var buf = this.propertiesToSkipInHash.concat(this.propertiesToWorkWith);
    var prefix;
    for (prefix in a) {
      if (-1 === buf.indexOf(prefix)) {
        delete a[prefix];
      }
    }
    return a;
  };
  /**
   * @return {?}
   */
  descriptor.iframeSrcBase.get = function() {
    /** @type {string} */
    var returnStr = "";
    return "battle" === this._environment() ? returnStr = "https://s.tradingview.com" : "staging" === this._environment() && (-1 !== location.hostname.indexOf("beta.tradingview.com") && (returnStr = "https://betacdn.tradingview.com")), this.settings.customer && (returnStr += "/" + this.settings.customer), returnStr + this.embedWidgetSitePath;
  };
  /**
   * @return {?}
   */
  descriptor.propertiesToSkipInHash.get = function() {
    return["width", "height", "locale", "whitelabel"];
  };
  /**
   * @return {?}
   */
  descriptor.propertiesToGetParams.get = function() {
    return["locale", "whitelabel"];
  };
  /**
   * @return {?}
   */
  descriptor.cloudfrontHost.get = function() {
    /** @type {Element} */
    var uri = document.createElement("a");
    return uri.href = opts.cloudfrontBase, uri.host;
  };
  /**
   * @return {?}
   */
  json.prototype._findScripts = function() {
    var len;
    var referrer = this;
    /** @type {NodeList} */
    var scripts = document.getElementsByTagName("script");
    /** @type {Array} */
    var srcs = [];
    /** @type {null} */
    var input = null;
    /** @type {number} */
    len = scripts.length;
    for (;len--;) {
      var url = scripts[len].src;
      if (url) {
        if (!input) {
          /** @type {Element} */
          input = document.createElement("a");
        }
        input.href = url;
        /** @type {string} */
        var path = ("/" === input.pathname[0] ? "" : "/") + input.pathname;
        /** @type {boolean} */
        var battle = input.host === referrer.cloudfrontHost || input.host;
        if (!(path !== referrer.pathname)) {
          if (!("battle" === referrer._environment() && !battle)) {
            srcs.push(scripts[len]);
          }
        }
      }
    }
    return srcs;
  };
  /**
   * @param {Array} array
   * @return {undefined}
   */
  json.prototype._replaceAllScriptElements = function(array) {
    var results = this;
    var index = array.length;
    for (;index--;) {
      results._replaceScript(array[index]);
    }
  };
  /**
   * @param {Object} script
   * @return {?}
   */
  json.prototype._replaceScript = function(script) {
    var settings;
    if (this.script = script, "json" === this.settingsFormat ? settings = this._scriptContentToJSON() : "stroke" === this.settingsFormat && (settings = script.innerHTML.trim()), settings) {
      if (this.settings = this.prepareAndFilterData(settings), this._assign(this.settings, this.utmInfo), !this._isValidSettings()) {
        return void this._doEmergencyReplacement("Settings is not valid");
      }
      this.iframe = this._createDummyIframe();
      this._addIndividualAttributes(this.iframe);
      this.iframeWrap = this._createIframeWrap(this.settings.whitelabel);
      this._doReplacement();
    }
  };
  /**
   * @param {Object} global
   * @param {Object} helper
   * @return {undefined}
   */
  json.prototype._assign = function(global, helper) {
    var key;
    for (key in helper) {
      global[key] = helper[key];
    }
  };
  /**
   * @return {?}
   */
  json.prototype._isValidSettings = function() {
    /**
     * @param {number} val
     * @return {?}
     */
    var isNumber = function(val) {
      if (void 0 === val) {
        return true;
      }
      /** @type {boolean} */
      var t = parseInt(val) + "%" == val + "";
      return parseInt(val) + "" == val + "" || t;
    };
    return isNumber(this.settings.width) && isNumber(this.settings.height);
  };
  /**
   * @param {Element} data_priv
   * @return {undefined}
   */
  json.prototype._addIndividualAttributes = function(data_priv) {
    var pdataOld = this.iframeSrcBase;
    pdataOld += this._buildGetQueryString();
    pdataOld += this._buildHashString();
    data_priv.setAttribute("src", pdataOld);
  };
  /**
   * @return {?}
   */
  json.prototype._buildGetQueryString = function() {
    var self = this;
    var charset = this.propertiesToGetParams.filter(function(timeoutKey) {
      return self.settings[timeoutKey];
    }).map(function(key) {
      return key + "=" + self.settings[key];
    }).join("&");
    return charset ? "?" + charset : "";
  };
  /**
   * @return {?}
   */
  json.prototype._buildHashString = function() {
    var el = this;
    var d = {};
    return Object.keys(this.settings).forEach(function(p) {
      if (-1 === el.propertiesToSkipInHash.indexOf(p)) {
        d[p] = el.settings[p];
      }
    }), Object.keys(d).length > 0 ? "#" + encodeURIComponent(JSON.stringify(d)) : "";
  };
  /**
   * @return {?}
   */
  json.prototype._scriptContentToJSON = function() {
    var value = this.script.innerHTML.trim();
    try {
      /** @type {*} */
      var isFunction = JSON.parse(value);
    } catch (matches) {
      return this._doEmergencyReplacement(), console.log("Error while parsing hotlists embed widget settings: ", matches), false;
    }
    return isFunction;
  };
  /**
   * @return {?}
   */
  json.prototype._createDummyIframe = function() {
    /** @type {Element} */
    var iframe = document.createElement("iframe");
    return this.settings.enableScrolling || iframe.setAttribute("scrolling", "no"), iframe.setAttribute("allowtransparency", true), iframe.setAttribute("frameborder", 0), iframe.style.boxSizing = "border-box", this.settings.width && iframe.setAttribute("width", this.settings.width), this.settings.height && iframe.setAttribute("height", this.settings.height), iframe;
  };
  /**
   * @param {Object} store
   * @return {?}
   */
  json.prototype._createIframeWrap = function(store) {
    /** @type {Element} */
    var node = document.createElement("div");
    return node.style.width = isNaN(this.settings.width) ? this.settings.width : this.settings.width + "px", node.style.height = isNaN(this.settings.height) ? this.settings.height : this.settings.height + "px", node.style.position = "relative", store || this._appendCopyrightTo(node), this.hasOutsideHeader && this._appendOutsideHeaderTo(node), node;
  };
  /**
   * @param {Element} dataAndEvents
   * @return {undefined}
   */
  json.prototype._appendCopyrightTo = function(dataAndEvents) {
    var xui = this;
    /** @type {Element} */
    this.copyright = document.createElement("span");
    /** @type {string} */
    var utmString = Object.keys(this.utmInfo).map(function(event) {
      return event + "=" + xui.utmInfo[event];
    }).join("&");
    var xhtml = this.getCopyrightText(this.settings.locale, {
      utmString : utmString
    });
    this.copyright.innerHTML = xhtml;
    this._makeNodeStylish(this.copyright, {
      display : "block",
      position : "absolute",
      bottom : "0",
      left : "0",
      width : "100%",
      padding : "8px 0",
      textAlign : "center",
      boxSizing : "content-box",
      height : "16px",
      lineHeight : "16px"
    });
    dataAndEvents.appendChild(this.copyright);
  };
  /**
   * @param {Element} dataAndEvents
   * @return {undefined}
   */
  json.prototype._appendOutsideHeaderTo = function(dataAndEvents) {
    this.outsideIframeHeader = void 0;
  };
  /**
   * @param {Element} node
   * @param {Object} attrs
   * @return {undefined}
   */
  json.prototype._makeNodeStylish = function(node, attrs) {
    if (void 0 === attrs) {
      attrs = {};
    }
    var attr;
    for (attr in attrs) {
      node.style[attr] = attrs[attr];
    }
  };
  /**
   * @param {string} name
   * @param {Object} obj
   * @return {?}
   */
  json.prototype.getCopyrightText = function(name, obj) {
    if (void 0 === name) {
      /** @type {string} */
      name = "en";
    }
    if (void 0 === obj) {
      obj = {};
    }
    var m = names[name] || name;
    return obj.locale = names[name] ? name : "en", obj.widgetName = this.widgetName, f(m, obj);
  };
  /**
   * @return {undefined}
   */
  json.prototype._doReplacement = function() {
    if (this.script.parentNode.replaceChild(this.iframeWrap, this.script), this.copyright) {
      var dh = this._getCopyrightHeight();
      /** @type {string} */
      this.iframe.style.paddingBottom = dh + "px";
      this.iframeWrap.insertBefore(this.iframe, this.copyright);
    } else {
      this.iframeWrap.appendChild(this.iframe);
    }
    if (this.outsideIframeHeader) {
      var docHeight = this.outsideIframeHeader.offsetHeight;
      /** @type {string} */
      this.iframe.style.paddingTop = docHeight + "px";
    }
    this._removeSEOcopyright();
  };
  /**
   * @return {?}
   */
  json.prototype._getCopyrightHeight = function() {
    return this.iframeWrap && this.copyright ? this.copyright.offsetHeight : 0;
  };
  /**
   * @param {string} msg
   * @return {undefined}
   */
  json.prototype._doEmergencyReplacement = function(msg) {
    /** @type {Element} */
    var div2 = document.createElement("div");
    div2.innerHTML = msg || "Something gone wrong";
    this.script.parentNode.replaceChild(div2, this.script);
    this._removeSEOcopyright();
  };
  /**
   * @return {undefined}
   */
  json.prototype._removeSEOcopyright = function() {
    /** @type {(HTMLElement|null)} */
    var tabPage = document.getElementById("tradingview-copyright") || document.getElementById("tradingview-quotes");
    if (tabPage) {
      tabPage.parentNode.removeChild(tabPage);
    }
  };
  Object.defineProperties(json.prototype, descriptor);
  new (function(extend) {
    /**
     * @return {undefined}
     */
    function klass() {
      extend.apply(this, arguments);
    }
    if (extend) {
      /** @type {function (string, string): undefined} */
      klass.__proto__ = extend;
    }
    /** @type {Object} */
    klass.prototype = Object.create(extend && extend.prototype);
    /** @type {function (): undefined} */
    klass.prototype.constructor = klass;
    var descriptor = {
      widgetName : {},
      embedWidgetSitePath : {},
      propertiesToWorkWith : {},
      propertiesToSkipInHash : {},
      propertiesToGetParams : {}
    };
    return descriptor.widgetName.get = function() {
      return "marketquotes";
    }, descriptor.embedWidgetSitePath.get = function() {
      return "/marketquoteswidgetembed/";
    }, descriptor.propertiesToWorkWith.get = function() {
      return["symbolsGroups", "largeChartUrl", "locale", "width", "height", "customer", "whitelabel"];
    }, descriptor.propertiesToSkipInHash.get = function() {
      return[];
    }, klass.prototype._createIframeWrap = function() {
      return extend.prototype._createIframeWrap.call(this, this.settings.whitelabel);
    }, descriptor.propertiesToGetParams.get = function() {
      return["whitelabel"];
    }, Object.defineProperties(klass.prototype, descriptor), klass;
  }(json))(opts.widgets.market_quotes);
}();
