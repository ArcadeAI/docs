---
title: "Google News"
description: "Arcade - AI platform for developers"
---
[Integrations](/en/resources/integrations.md)
[Search Tools](/en/resources/integrations/search/google_finance.md)
Google News

# Google News

Arcade OptimizedBYOCPro

**Description:** Enable agents to search for news stories with Google News.

**Author:** Arcade

**Auth:** API Key

[![PyPI Version](https://img.shields.io/pypi/v/arcade_google-news)](https://pypi.org/project/arcade_google-news/)
[![License](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/arcadeai/arcade-ai/blob/main/LICENSE)
[![Python Versions](https://img.shields.io/pypi/pyversions/arcade_google-news)](https://pypi.org/project/arcade_google-news/)
[![Wheel Status](https://img.shields.io/pypi/wheel/arcade_google-news)](https://pypi.org/project/arcade_google-news/)
[![Downloads](https://img.shields.io/pypi/dm/arcade_google-news)](https://pypi.org/project/arcade_google-news/)

The Arcade Google News MCP Server provides a pre-built set of tools for interacting with Google News. These tools make it easy to build agents and AI apps that can:

-   Search for news stories with Google News.

## Available Tools

Tool Name

Description

GoogleNews.SearchNewsStories

Search for news stories with Google News.

If you need to perform an action that’s not listed here, you can [get in touch with us](mailto:contact@arcade.dev) to request a new tool, or [create your own tools](/guides/create-tools/tool-basics/build-mcp-server.md).

## GoogleNews.SearchNewsStories



Search for news stories with Google News.

**Parameters**

-   **`keywords`** _(string, required)_ Keywords to search for news articles. E.g. ‘Apple launches new iPhone’.
-   **`country_code`** _(string, optional, Defaults to `None`)_ 2-character country code to search for news articles. E.g. ‘us’ (United States). Defaults to `None` (search news globally).
-   **`language`** _(string, optional, Defaults to ‘en’ English)_ 2-character language code to search for news articles. E.g. ‘en’ (English). Defaults to ‘en’ (English).
-   **`limit`** _(int, optional, Defaults to `None`)_ Maximum number of news articles to return. Defaults to None (returns all results found by the API).

## Auth

The Arcade Google News MCP Sever uses the [SerpAPI](https://serpapi.com/)  to get news data from Google News.

-   **Secret:**
    -   `SERP_API_KEY`: Your SerpAPI API key.

        Setting the `SERP_API_KEY` secret is only required if you are [self-hosting](/guides/deployment-hosting/configure-engine.md) Arcade. If you’re using Arcade Cloud, the secret is already set for you. To manage your secrets, go to the [Secrets page](https://api.arcade.dev/dashboard/auth/secrets)  in the Arcade Dashboard.


## Default parameters

Language and Country are configurable through environment variables. When set, they will be used as default for Google News tools.

Providing a different value as `language_code` or `country_code` argument in the tool call will override the default value.

**Language**

The language code is a 2-character code that determines the language in which the API will search and return news articles. There are two environment variables:

-   `ARCADE_GOOGLE_LANGUAGE`: a default value for all Google search tools. If not set, defaults to ‘en’ (English).
-   `ARCADE_GOOGLE_NEWS_LANGUAGE`: a default value for the news search tools. If not set, defaults to `ARCADE_GOOGLE_LANGUAGE`.

A list of supported language codes can be found [here](#languagecodes).

**Country**

The country code is a 2-character code that determines the country in which the API will search for news articles. There are two environment variables:

-   `ARCADE_GOOGLE_NEWS_COUNTRY`: a default value for the `SearchNews` tool. If not set, defaults to `None` (search news globally).

A list of supported country codes can be found [here](#countrycodes).

* * *

## Reference

## LanguageCodes

-   **`ar`**: Arabic
-   **`bn`**: Bengali
-   **`da`**: Danish
-   **`de`**: German
-   **`el`**: Greek
-   **`en`**: English
-   **`es`**: Spanish
-   **`fi`**: Finnish
-   **`fr`**: French
-   **`hi`**: Hindi
-   **`hu`**: Hungarian
-   **`id`**: Indonesian
-   **`it`**: Italian
-   **`ja`**: Japanese
-   **`ko`**: Korean
-   **`ms`**: Malay
-   **`nl`**: Dutch
-   **`no`**: Norwegian
-   **`pcm`**: Nigerian Pidgin
-   **`pl`**: Polish
-   **`pt`**: Portuguese
-   **`pt-br`**: Portuguese (Brazil)
-   **`pt-pt`**: Portuguese (Portugal)
-   **`ru`**: Russian
-   **`sv`**: Swedish
-   **`tl`**: Filipino
-   **`tr`**: Turkish
-   **`uk`**: Ukrainian
-   **`zh`**: Chinese
-   **`zh-cn`**: Chinese (Simplified)
-   **`zh-tw`**: Chinese (Traditional)

## CountryCodes

-   **`af`**: Afghanistan
-   **`al`**: Albania
-   **`dz`**: Algeria
-   **`as`**: American Samoa
-   **`ad`**: Andorra
-   **`ao`**: Angola
-   **`ai`**: Anguilla
-   **`aq`**: Antarctica
-   **`ag`**: Antigua and Barbuda
-   **`ar`**: Argentina
-   **`am`**: Armenia
-   **`aw`**: Aruba
-   **`au`**: Australia
-   **`at`**: Austria
-   **`az`**: Azerbaijan
-   **`bs`**: Bahamas
-   **`bh`**: Bahrain
-   **`bd`**: Bangladesh
-   **`bb`**: Barbados
-   **`by`**: Belarus
-   **`be`**: Belgium
-   **`bz`**: Belize
-   **`bj`**: Benin
-   **`bm`**: Bermuda
-   **`bt`**: Bhutan
-   **`bo`**: Bolivia
-   **`ba`**: Bosnia and Herzegovina
-   **`bw`**: Botswana
-   **`bv`**: Bouvet Island
-   **`br`**: Brazil
-   **`io`**: British Indian Ocean Territory
-   **`bn`**: Brunei Darussalam
-   **`bg`**: Bulgaria
-   **`bf`**: Burkina Faso
-   **`bi`**: Burundi
-   **`kh`**: Cambodia
-   **`cm`**: Cameroon
-   **`ca`**: Canada
-   **`cv`**: Cape Verde
-   **`ky`**: Cayman Islands
-   **`cf`**: Central African Republic
-   **`td`**: Chad
-   **`cl`**: Chile
-   **`cn`**: China
-   **`cx`**: Christmas Island
-   **`cc`**: Cocos (Keeling) Islands
-   **`co`**: Colombia
-   **`km`**: Comoros
-   **`cg`**: Congo
-   **`cd`**: Congo, the Democratic Republic of the
-   **`ck`**: Cook Islands
-   **`cr`**: Costa Rica
-   **`ci`**: Cote D’ivoire
-   **`hr`**: Croatia
-   **`cu`**: Cuba
-   **`cy`**: Cyprus
-   **`cz`**: Czech Republic
-   **`dk`**: Denmark
-   **`dj`**: Djibouti
-   **`dm`**: Dominica
-   **`do`**: Dominican Republic
-   **`ec`**: Ecuador
-   **`eg`**: Egypt
-   **`sv`**: El Salvador
-   **`gq`**: Equatorial Guinea
-   **`er`**: Eritrea
-   **`ee`**: Estonia
-   **`et`**: Ethiopia
-   **`fk`**: Falkland Islands (Malvinas)
-   **`fo`**: Faroe Islands
-   **`fj`**: Fiji
-   **`fi`**: Finland
-   **`fr`**: France
-   **`gf`**: French Guiana
-   **`pf`**: French Polynesia
-   **`tf`**: French Southern Territories
-   **`ga`**: Gabon
-   **`gm`**: Gambia
-   **`ge`**: Georgia
-   **`de`**: Germany
-   **`gh`**: Ghana
-   **`gi`**: Gibraltar
-   **`gr`**: Greece
-   **`gl`**: Greenland
-   **`gd`**: Grenada
-   **`gp`**: Guadeloupe
-   **`gu`**: Guam
-   **`gt`**: Guatemala
-   **`gg`**: Guernsey
-   **`gn`**: Guinea
-   **`gw`**: Guinea-Bissau
-   **`gy`**: Guyana
-   **`ht`**: Haiti
-   **`hm`**: Heard Island and Mcdonald Islands
-   **`va`**: Holy See (Vatican City State)
-   **`hn`**: Honduras
-   **`hk`**: Hong Kong
-   **`hu`**: Hungary
-   **`is`**: Iceland
-   **`in`**: India
-   **`id`**: Indonesia
-   **`ir`**: Iran, Islamic Republic of
-   **`iq`**: Iraq
-   **`ie`**: Ireland
-   **`im`**: Isle of Man
-   **`il`**: Israel
-   **`it`**: Italy
-   **`je`**: Jersey
-   **`jm`**: Jamaica
-   **`jp`**: Japan
-   **`jo`**: Jordan
-   **`kz`**: Kazakhstan
-   **`ke`**: Kenya
-   **`ki`**: Kiribati
-   **`kp`**: Korea, Democratic People’s Republic of
-   **`kr`**: Korea, Republic of
-   **`kw`**: Kuwait
-   **`kg`**: Kyrgyzstan
-   **`la`**: Lao People’s Democratic Republic
-   **`lv`**: Latvia
-   **`lb`**: Lebanon
-   **`ls`**: Lesotho
-   **`lr`**: Liberia
-   **`ly`**: Libyan Arab Jamahiriya
-   **`li`**: Liechtenstein
-   **`lt`**: Lithuania
-   **`lu`**: Luxembourg
-   **`mo`**: Macao
-   **`mk`**: Macedonia, the Former Yugosalv Republic of
-   **`mg`**: Madagascar
-   **`mw`**: Malawi
-   **`my`**: Malaysia
-   **`mv`**: Maldives
-   **`ml`**: Mali
-   **`mt`**: Malta
-   **`mh`**: Marshall Islands
-   **`mq`**: Martinique
-   **`mr`**: Mauritania
-   **`mu`**: Mauritius
-   **`yt`**: Mayotte
-   **`mx`**: Mexico
-   **`fm`**: Micronesia, Federated States of
-   **`md`**: Moldova, Republic of
-   **`mc`**: Monaco
-   **`mn`**: Mongolia
-   **`me`**: Montenegro
-   **`ms`**: Montserrat
-   **`ma`**: Morocco
-   **`mz`**: Mozambique
-   **`mm`**: Myanmar
-   **`na`**: Namibia
-   **`nr`**: Nauru
-   **`np`**: Nepal
-   **`nl`**: Netherlands
-   **`an`**: Netherlands Antilles
-   **`nc`**: New Caledonia
-   **`nz`**: New Zealand
-   **`ni`**: Nicaragua
-   **`ne`**: Niger
-   **`ng`**: Nigeria
-   **`nu`**: Niue
-   **`nf`**: Norfolk Island
-   **`mp`**: Northern Mariana Islands
-   **`no`**: Norway
-   **`om`**: Oman
-   **`pk`**: Pakistan
-   **`pw`**: Palau
-   **`ps`**: Palestinian Territory, Occupied
-   **`pa`**: Panama
-   **`pg`**: Papua New Guinea
-   **`py`**: Paraguay
-   **`pe`**: Peru
-   **`ph`**: Philippines
-   **`pn`**: Pitcairn
-   **`pl`**: Poland
-   **`pt`**: Portugal
-   **`pr`**: Puerto Rico
-   **`qa`**: Qatar
-   **`re`**: Reunion
-   **`ro`**: Romania
-   **`ru`**: Russian Federation
-   **`rw`**: Rwanda
-   **`sh`**: Saint Helena
-   **`kn`**: Saint Kitts and Nevis
-   **`lc`**: Saint Lucia
-   **`pm`**: Saint Pierre and Miquelon
-   **`vc`**: Saint Vincent and the Grenadines
-   **`ws`**: Samoa
-   **`sm`**: San Marino
-   **`st`**: Sao Tome and Principe
-   **`sa`**: Saudi Arabia
-   **`sn`**: Senegal
-   **`rs`**: Serbia
-   **`sc`**: Seychelles
-   **`sl`**: Sierra Leone
-   **`sg`**: Singapore
-   **`sk`**: Slovakia
-   **`si`**: Slovenia
-   **`sb`**: Solomon Islands
-   **`so`**: Somalia
-   **`za`**: South Africa
-   **`gs`**: South Georgia and the South Sandwich Islands
-   **`es`**: Spain
-   **`lk`**: Sri Lanka
-   **`sd`**: Sudan
-   **`sr`**: Suriname
-   **`sj`**: Svalbard and Jan Mayen
-   **`sz`**: Swaziland
-   **`se`**: Sweden
-   **`ch`**: Switzerland
-   **`sy`**: Syrian Arab Republic
-   **`tw`**: Taiwan, Province of China
-   **`tj`**: Tajikistan
-   **`tz`**: Tanzania, United Republic of
-   **`th`**: Thailand
-   **`tl`**: Timor-Leste
-   **`tg`**: Togo
-   **`tk`**: Tokelau
-   **`to`**: Tonga
-   **`tt`**: Trinidad and Tobago
-   **`tn`**: Tunisia
-   **`tr`**: Turkiye
-   **`tm`**: Turkmenistan
-   **`tc`**: Turks and Caicos Islands
-   **`tv`**: Tuvalu
-   **`ug`**: Uganda
-   **`ua`**: Ukraine
-   **`ae`**: United Arab Emirates
-   **`uk`**: United Kingdom
-   **`gb`**: United Kingdom
-   **`us`**: United States
-   **`um`**: United States Minor Outlying Islands
-   **`uy`**: Uruguay
-   **`uz`**: Uzbekistan
-   **`vu`**: Vanuatu
-   **`ve`**: Venezuela
-   **`vn`**: Viet Nam
-   **`vg`**: Virgin Islands, British
-   **`vi`**: Virgin Islands, U.S.
-   **`wf`**: Wallis and Futuna
-   **`eh`**: Western Sahara
-   **`ye`**: Yemen
-   **`zm`**: Zambia
-   **`zw`**: Zimbabwe

## Get Building

[Use tools hosted on Arcade Cloud Arcade tools are hosted by our cloud platform and ready to be used in your agents. Learn how. Learn more](/get-started/quickstarts/call-tool-agent.md)

[Self Host Arcade tools Arcade tools can be self-hosted on your own infrastructure. Learn more about self-hosting. ``` pip install arcade_google_news ``` Learn more](/guides/deployment-hosting.md)

Last updated on February 7, 2026

[Google Maps](/en/resources/integrations/search/google_maps.md)
[Google Search](/en/resources/integrations/search/google_search.md)
