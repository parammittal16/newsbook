var DEFAULT = "default";

// global news common channels
var globalLinks = ["9Auq9mYxFEE", "pqabxBKzZ6M", "5Ufia4jQ14Y", "d9Npcqtu-iU"];

var newsLinkIds = {
  World: {
    links: globalLinks,
    icon: "🌎",
  },
  Andorra: {
    links: ["w_Ma8oQLmSM"],
    icon: "🇦🇩",
  },
  Afghanistan: [],
  Albania: [],
  Armenia: [],
  Antarctica: [],
  Argentina: [],
  Austria: [],
  Australia: {
    links: ["vOTiJkg1voo"],
    icon: "🇦🇺",
  },
  Azerbaijan: [],
  Barbados: [],
  Bangladesh: [],
  Belgium: [],
  Bulgaria: [],
  Bermuda: [],
  Brunei: [],
  Bolivia: [],
  Brazil: [],
  Bhutan: [],
  Belarus: [],
  Belize: [],
  Canada: [],
  "Cocos (Keeling) Islands": [],
  "United Arab Emirates": [],
  "Samoa (American)": [],
  Switzerland: [],
  "Côte d'Ivoire": [],
  "Cook Islands": [],
  Chile: [],
  China: {
    links: ["Xmm3Kr5P1Uw", "Xmm3Kr5P1Uw", "Xmm3Kr5P1Uw", "Xmm3Kr5P1Uw"],
    icon: "🇨🇳",
  },
  Colombia: [],
  "Costa Rica": [],
  Cuba: [],
  "Cape Verde": [],
  "Christmas Island": [],
  Cyprus: [],
  "Czech Republic": [],
  Germany: [],
  Denmark: [],
  "Dominican Republic": [],
  Algeria: [],
  Ecuador: [],
  Estonia: [],
  Egypt: [],
  "Western Sahara": [],
  Spain: [],
  Finland: [],
  Fiji: [],
  "Falkland Islands": [],
  Micronesia: [],
  "Faroe Islands": [],
  France: [],
  "Britain (UK)": [],
  Georgia: [],
  "French Guiana": [],
  Gibraltar: [],
  Greenland: [],
  Greece: [],
  "South Georgia & the South Sandwich Islands": [],
  Guatemala: [],
  Guam: [],
  "Guinea-Bissau": [],
  Guyana: [],
  "Hong Kong": [],
  Honduras: [],
  Haiti: [],
  Hungary: [],
  Indonesia: [],
  Ireland: [],
  Israel: [],
  India: {
    links: ["Nq2wYlWFucg", "Xmm3Kr5P1Uw", "MN8p-Vrn6G0", "M3OvzlFEa30"],
    icon: "🇮🇳",
  },
  "British Indian Ocean Territory": [],
  Iraq: [],
  Iran: [],
  Iceland: [],
  Italy: [],
  Jamaica: [],
  Jordan: [],
  Japan: [],
  Kenya: [],
  Kyrgyzstan: [],
  Kiribati: [],
  "Korea (North)": [],
  "Korea (South)": [],
  Kazakhstan: [],
  Lebanon: [],
  "Sri Lanka": [],
  Liberia: [],
  Lithuania: [],
  Luxembourg: [],
  Latvia: [],
  Libya: [],
  Morocco: [],
  Monaco: [],
  Moldova: [],
  "Marshall Islands": [],
  "Myanmar (Burma)": [],
  Mongolia: [],
  Macau: [],
  Martinique: [],
  Malta: [],
  Mauritius: [],
  Maldives: [],
  Mexico: [],
  Malaysia: [],
  Mozambique: [],
  Namibia: [],
  "New Caledonia": [],
  "Norfolk Island": [],
  Nigeria: [],
  Nicaragua: [],
  Netherlands: [],
  Norway: [],
  Nepal: [],
  Nauru: [],
  Niue: [],
  "New Zealand": [],
  Panama: [],
  Peru: [],
  "French Polynesia": [],
  "Papua New Guinea": [],
  Philippines: [],
  Pakistan: [],
  Poland: [],
  "St Pierre & Miquelon": [],
  Pitcairn: [],
  "Puerto Rico": [],
  Palestine: [],
  Portugal: [],
  Palau: [],
  Paraguay: [],
  Qatar: [],
  Réunion: [],
  Romania: [],
  Serbia: [],
  Russia: [],
  "Saudi Arabia": [],
  "Solomon Islands": [],
  Seychelles: [],
  Sudan: [],
  Sweden: [],
  Singapore: [],
  Suriname: [],
  "South Sudan": [],
  "Sao Tome & Principe": [],
  "El Salvador": [],
  Syria: [],
  "Turks & Caicos Is": [],
  Chad: [],
  "French Southern & Antarctic Lands": [],
  Thailand: [],
  Tajikistan: [],
  Tokelau: [],
  "East Timor": [],
  Turkmenistan: [],
  Tunisia: [],
  Tonga: [],
  Turkey: [],
  Tuvalu: [],
  Taiwan: [],
  Ukraine: [],
  "US minor outlying islands": [],
  "United States": {
    links: ["dp8PhLsUcFE"],
    icon: "🇺🇸",
  },
  Uruguay: [],
  Uzbekistan: [],
  Venezuela: [],
  Vietnam: [],
  Vanuatu: [],
  "Wallis & Futuna": [],
  "Samoa (western)": [],
  "South Africa": [],
  "Antigua & Barbuda": [],
  Anguilla: [],
  Angola: [],
  Aruba: [],
  "Åland Islands": [],
  "Bosnia & Herzegovina": [],
  "Burkina Faso": [],
  Bahrain: [],
  Burundi: [],
  Benin: [],
  "St Barthelemy": [],
  "Caribbean NL": [],
  Bahamas: [],
  Botswana: [],
  "Congo (Dem. Rep.)": [],
  "Central African Rep.": [],
  "Congo (Rep.)": [],
  Cameroon: [],
  Curaçao: [],
  Djibouti: [],
  Dominica: [],
  Eritrea: [],
  Ethiopia: [],
  Gabon: [],
  Grenada: [],
  Guernsey: [],
  Ghana: [],
  Gambia: [],
  Guinea: [],
  Guadeloupe: [],
  "Equatorial Guinea": [],
  Croatia: [],
  "Isle of Man": [],
  Jersey: [],
  Cambodia: [],
  Comoros: [],
  "St Kitts & Nevis": [],
  Kuwait: [],
  "Cayman Islands": [],
  Laos: [],
  "St Lucia": [],
  Liechtenstein: [],
  Lesotho: [],
  Montenegro: [],
  "St Martin (French)": [],
  Madagascar: [],
  "North Macedonia": [],
  Mali: [],
  "Northern Mariana Islands": [],
  Mauritania: [],
  Montserrat: [],
  Malawi: [],
  Niger: [],
  Oman: [],
  Rwanda: [],
  "St Helena": [],
  Slovenia: [],
  "Svalbard & Jan Mayen": [],
  Slovakia: [],
  "Sierra Leone": [],
  "San Marino": [],
  Senegal: [],
  Somalia: [],
  "St Maarten (Dutch)": [],
  "Eswatini (Swaziland)": [],
  Togo: [],
  "Trinidad & Tobago": [],
  Tanzania: [],
  Uganda: [],
  "Vatican City": [],
  "St Vincent": [],
  "Virgin Islands (UK)": [],
  "Virgin Islands (US)": [],
  Yemen: [],
  Mayotte: [],
  Zambia: [],
  Zimbabwe: [],
};

var countryMap = {
  Andorra: "Andorra",
  Dubai: "United Arab Emirates",
  Kabul: "Afghanistan",
  Tirane: "Albania",
  Yerevan: "Armenia",
  Casey: "Antarctica",
  Davis: "Antarctica",
  Mawson: "Antarctica",
  Palmer: "Antarctica",
  Rothera: "Antarctica",
  Troll: "Antarctica",
  Vostok: "Antarctica",
  Buenos_Aires: "Argentina",
  Cordoba: "Argentina",
  Salta: "Argentina",
  Jujuy: "Argentina",
  Tucuman: "Argentina",
  Catamarca: "Argentina",
  La_Rioja: "Argentina",
  San_Juan: "Argentina",
  Mendoza: "Argentina",
  San_Luis: "Argentina",
  Rio_Gallegos: "Argentina",
  Ushuaia: "Argentina",
  Pago_Pago: "Samoa (American)",
  Vienna: "Austria",
  Lord_Howe: "Australia",
  Macquarie: "Australia",
  Hobart: "Australia",
  Melbourne: "Australia",
  Sydney: "Australia",
  Broken_Hill: "Australia",
  Brisbane: "Australia",
  Lindeman: "Australia",
  Adelaide: "Australia",
  Darwin: "Australia",
  Perth: "Australia",
  Eucla: "Australia",
  Baku: "Azerbaijan",
  Barbados: "Barbados",
  Dhaka: "Bangladesh",
  Brussels: "Belgium",
  Sofia: "Bulgaria",
  Bermuda: "Bermuda",
  Brunei: "Brunei",
  La_Paz: "Bolivia",
  Noronha: "Brazil",
  Belem: "Brazil",
  Fortaleza: "Brazil",
  Recife: "Brazil",
  Araguaina: "Brazil",
  Maceio: "Brazil",
  Bahia: "Brazil",
  Sao_Paulo: "Brazil",
  Campo_Grande: "Brazil",
  Cuiaba: "Brazil",
  Santarem: "Brazil",
  Porto_Velho: "Brazil",
  Boa_Vista: "Brazil",
  Manaus: "Brazil",
  Eirunepe: "Brazil",
  Rio_Branco: "Brazil",
  Thimphu: "Bhutan",
  Minsk: "Belarus",
  Belize: "Belize",
  St_Johns: "Canada",
  Halifax: "Canada",
  Glace_Bay: "Canada",
  Moncton: "Canada",
  Goose_Bay: "Canada",
  Toronto: "Canada",
  Nipigon: "Canada",
  Thunder_Bay: "Canada",
  Iqaluit: "Canada",
  Pangnirtung: "Canada",
  Winnipeg: "Canada",
  Rainy_River: "Canada",
  Resolute: "Canada",
  Rankin_Inlet: "Canada",
  Regina: "Canada",
  Swift_Current: "Canada",
  Edmonton: "Canada",
  Cambridge_Bay: "Canada",
  Yellowknife: "Canada",
  Inuvik: "Canada",
  Dawson_Creek: "Canada",
  Fort_Nelson: "Canada",
  Whitehorse: "Canada",
  Dawson: "Canada",
  Vancouver: "Canada",
  Cocos: "Cocos (Keeling) Islands",
  Zurich: "Switzerland",
  Abidjan: "Côte d'Ivoire",
  Rarotonga: "Cook Islands",
  Santiago: "Chile",
  Punta_Arenas: "Chile",
  Easter: "Chile",
  Shanghai: "China",
  Urumqi: "China",
  Bogota: "Colombia",
  Costa_Rica: "Costa Rica",
  Havana: "Cuba",
  Cape_Verde: "Cape Verde",
  Christmas: "Christmas Island",
  Nicosia: "Cyprus",
  Famagusta: "Cyprus",
  Prague: "Czech Republic",
  Berlin: "Germany",
  Copenhagen: "Denmark",
  Santo_Domingo: "Dominican Republic",
  Algiers: "Algeria",
  Guayaquil: "Ecuador",
  Galapagos: "Ecuador",
  Tallinn: "Estonia",
  Cairo: "Egypt",
  El_Aaiun: "Western Sahara",
  Madrid: "Spain",
  Ceuta: "Spain",
  Canary: "Spain",
  Helsinki: "Finland",
  Fiji: "Fiji",
  Stanley: "Falkland Islands",
  Chuuk: "Micronesia",
  Pohnpei: "Micronesia",
  Kosrae: "Micronesia",
  Faroe: "Faroe Islands",
  Paris: "France",
  London: "Britain (UK)",
  Tbilisi: "Georgia",
  Cayenne: "French Guiana",
  Gibraltar: "Gibraltar",
  Nuuk: "Greenland",
  Danmarkshavn: "Greenland",
  Scoresbysund: "Greenland",
  Thule: "Greenland",
  Athens: "Greece",
  South_Georgia: "South Georgia & the South Sandwich Islands",
  Guatemala: "Guatemala",
  Guam: "Guam",
  Bissau: "Guinea-Bissau",
  Guyana: "Guyana",
  Hong_Kong: "Hong Kong",
  Tegucigalpa: "Honduras",
  "Port-au-Prince": "Haiti",
  Budapest: "Hungary",
  Jakarta: "Indonesia",
  Pontianak: "Indonesia",
  Makassar: "Indonesia",
  Jayapura: "Indonesia",
  Dublin: "Ireland",
  Jerusalem: "Israel",
  Kolkata: "India",
  Calcutta: "India",
  Chagos: "British Indian Ocean Territory",
  Baghdad: "Iraq",
  Tehran: "Iran",
  Reykjavik: "Iceland",
  Rome: "Italy",
  Jamaica: "Jamaica",
  Amman: "Jordan",
  Tokyo: "Japan",
  Nairobi: "Kenya",
  Bishkek: "Kyrgyzstan",
  Tarawa: "Kiribati",
  Kanton: "Kiribati",
  Kiritimati: "Kiribati",
  Pyongyang: "Korea (North)",
  Seoul: "Korea (South)",
  Almaty: "Kazakhstan",
  Qyzylorda: "Kazakhstan",
  Qostanay: "Kazakhstan",
  Aqtobe: "Kazakhstan",
  Aqtau: "Kazakhstan",
  Atyrau: "Kazakhstan",
  Oral: "Kazakhstan",
  Beirut: "Lebanon",
  Colombo: "Sri Lanka",
  Monrovia: "Liberia",
  Vilnius: "Lithuania",
  Luxembourg: "Luxembourg",
  Riga: "Latvia",
  Tripoli: "Libya",
  Casablanca: "Morocco",
  Monaco: "Monaco",
  Chisinau: "Moldova",
  Majuro: "Marshall Islands",
  Kwajalein: "Marshall Islands",
  Yangon: "Myanmar (Burma)",
  Ulaanbaatar: "Mongolia",
  Hovd: "Mongolia",
  Choibalsan: "Mongolia",
  Macau: "Macau",
  Martinique: "Martinique",
  Malta: "Malta",
  Mauritius: "Mauritius",
  Maldives: "Maldives",
  Mexico_City: "Mexico",
  Cancun: "Mexico",
  Merida: "Mexico",
  Monterrey: "Mexico",
  Matamoros: "Mexico",
  Mazatlan: "Mexico",
  Chihuahua: "Mexico",
  Ojinaga: "Mexico",
  Hermosillo: "Mexico",
  Tijuana: "Mexico",
  Bahia_Banderas: "Mexico",
  Kuala_Lumpur: "Malaysia",
  Kuching: "Malaysia",
  Maputo: "Mozambique",
  Windhoek: "Namibia",
  Noumea: "New Caledonia",
  Norfolk: "Norfolk Island",
  Lagos: "Nigeria",
  Managua: "Nicaragua",
  Amsterdam: "Netherlands",
  Oslo: "Norway",
  Kathmandu: "Nepal",
  Nauru: "Nauru",
  Niue: "Niue",
  Auckland: "New Zealand",
  Chatham: "New Zealand",
  Panama: "Panama",
  Lima: "Peru",
  Tahiti: "French Polynesia",
  Marquesas: "French Polynesia",
  Gambier: "French Polynesia",
  Port_Moresby: "Papua New Guinea",
  Bougainville: "Papua New Guinea",
  Manila: "Philippines",
  Karachi: "Pakistan",
  Warsaw: "Poland",
  Miquelon: "St Pierre & Miquelon",
  Pitcairn: "Pitcairn",
  Puerto_Rico: "Puerto Rico",
  Gaza: "Palestine",
  Hebron: "Palestine",
  Lisbon: "Portugal",
  Madeira: "Portugal",
  Azores: "Portugal",
  Palau: "Palau",
  Asuncion: "Paraguay",
  Qatar: "Qatar",
  Reunion: "Réunion",
  Bucharest: "Romania",
  Belgrade: "Serbia",
  Kaliningrad: "Russia",
  Moscow: "Russia",
  Simferopol: "Russia",
  Kirov: "Russia",
  Volgograd: "Russia",
  Astrakhan: "Russia",
  Saratov: "Russia",
  Ulyanovsk: "Russia",
  Samara: "Russia",
  Yekaterinburg: "Russia",
  Omsk: "Russia",
  Novosibirsk: "Russia",
  Barnaul: "Russia",
  Tomsk: "Russia",
  Novokuznetsk: "Russia",
  Krasnoyarsk: "Russia",
  Irkutsk: "Russia",
  Chita: "Russia",
  Yakutsk: "Russia",
  Khandyga: "Russia",
  Vladivostok: "Russia",
  "Ust-Nera": "Russia",
  Magadan: "Russia",
  Sakhalin: "Russia",
  Srednekolymsk: "Russia",
  Kamchatka: "Russia",
  Anadyr: "Russia",
  Riyadh: "Saudi Arabia",
  Guadalcanal: "Solomon Islands",
  Mahe: "Seychelles",
  Khartoum: "Sudan",
  Stockholm: "Sweden",
  Singapore: "Singapore",
  Paramaribo: "Suriname",
  Juba: "South Sudan",
  Sao_Tome: "Sao Tome & Principe",
  El_Salvador: "El Salvador",
  Damascus: "Syria",
  Grand_Turk: "Turks & Caicos Is",
  Ndjamena: "Chad",
  Kerguelen: "French Southern & Antarctic Lands",
  Bangkok: "Thailand",
  Dushanbe: "Tajikistan",
  Fakaofo: "Tokelau",
  Dili: "East Timor",
  Ashgabat: "Turkmenistan",
  Tunis: "Tunisia",
  Tongatapu: "Tonga",
  Istanbul: "Turkey",
  Funafuti: "Tuvalu",
  Taipei: "Taiwan",
  Kiev: "Ukraine",
  Uzhgorod: "Ukraine",
  Zaporozhye: "Ukraine",
  Wake: "US minor outlying islands",
  New_York: "United States",
  Detroit: "United States",
  Louisville: "United States",
  Monticello: "United States",
  Indianapolis: "United States",
  Vincennes: "United States",
  Winamac: "United States",
  Marengo: "United States",
  Petersburg: "United States",
  Vevay: "United States",
  Chicago: "United States",
  Tell_City: "United States",
  Knox: "United States",
  Menominee: "United States",
  Center: "United States",
  New_Salem: "United States",
  Beulah: "United States",
  Denver: "United States",
  Boise: "United States",
  Phoenix: "United States",
  Los_Angeles: "United States",
  Anchorage: "United States",
  Juneau: "United States",
  Sitka: "United States",
  Metlakatla: "United States",
  Yakutat: "United States",
  Nome: "United States",
  Adak: "United States",
  Honolulu: "United States",
  Montevideo: "Uruguay",
  Samarkand: "Uzbekistan",
  Tashkent: "Uzbekistan",
  Caracas: "Venezuela",
  Ho_Chi_Minh: "Vietnam",
  Efate: "Vanuatu",
  Wallis: "Wallis & Futuna",
  Apia: "Samoa (western)",
  Johannesburg: "South Africa",
  Antigua: "Antigua & Barbuda",
  Anguilla: "Anguilla",
  Luanda: "Angola",
  McMurdo: "Antarctica",
  DumontDUrville: "Antarctica",
  Syowa: "Antarctica",
  Aruba: "Aruba",
  Mariehamn: "Åland Islands",
  Sarajevo: "Bosnia & Herzegovina",
  Ouagadougou: "Burkina Faso",
  Bahrain: "Bahrain",
  Bujumbura: "Burundi",
  "Porto-Novo": "Benin",
  St_Barthelemy: "St Barthelemy",
  Kralendijk: "Caribbean NL",
  Nassau: "Bahamas",
  Gaborone: "Botswana",
  "Blanc-Sablon": "Canada",
  Atikokan: "Canada",
  Creston: "Canada",
  Kinshasa: "Congo (Dem. Rep.)",
  Lubumbashi: "Congo (Dem. Rep.)",
  Bangui: "Central African Rep.",
  Brazzaville: "Congo (Rep.)",
  Douala: "Cameroon",
  Curacao: "Curaçao",
  Busingen: "Germany",
  Djibouti: "Djibouti",
  Dominica: "Dominica",
  Asmara: "Eritrea",
  Addis_Ababa: "Ethiopia",
  Libreville: "Gabon",
  Grenada: "Grenada",
  Guernsey: "Guernsey",
  Accra: "Ghana",
  Banjul: "Gambia",
  Conakry: "Guinea",
  Guadeloupe: "Guadeloupe",
  Malabo: "Equatorial Guinea",
  Zagreb: "Croatia",
  Isle_of_Man: "Isle of Man",
  Jersey: "Jersey",
  Phnom_Penh: "Cambodia",
  Comoro: "Comoros",
  St_Kitts: "St Kitts & Nevis",
  Kuwait: "Kuwait",
  Cayman: "Cayman Islands",
  Vientiane: "Laos",
  St_Lucia: "St Lucia",
  Vaduz: "Liechtenstein",
  Maseru: "Lesotho",
  Podgorica: "Montenegro",
  Marigot: "St Martin (French)",
  Antananarivo: "Madagascar",
  Skopje: "North Macedonia",
  Bamako: "Mali",
  Saipan: "Northern Mariana Islands",
  Nouakchott: "Mauritania",
  Montserrat: "Montserrat",
  Blantyre: "Malawi",
  Niamey: "Niger",
  Muscat: "Oman",
  Kigali: "Rwanda",
  St_Helena: "St Helena",
  Ljubljana: "Slovenia",
  Longyearbyen: "Svalbard & Jan Mayen",
  Bratislava: "Slovakia",
  Freetown: "Sierra Leone",
  San_Marino: "San Marino",
  Dakar: "Senegal",
  Mogadishu: "Somalia",
  Lower_Princes: "St Maarten (Dutch)",
  Mbabane: "Eswatini (Swaziland)",
  Lome: "Togo",
  Port_of_Spain: "Trinidad & Tobago",
  Dar_es_Salaam: "Tanzania",
  Kampala: "Uganda",
  Midway: "US minor outlying islands",
  Vatican: "Vatican City",
  St_Vincent: "St Vincent",
  Tortola: "Virgin Islands (UK)",
  St_Thomas: "Virgin Islands (US)",
  Aden: "Yemen",
  Mayotte: "Mayotte",
  Lusaka: "Zambia",
  Harare: "Zimbabwe",
  [DEFAULT]: "World",
};

var country = DEFAULT;
var linkIds = [];

function load(num) {
  console.log("load", num);
}

function setCurrentCountrySelect(event) {
  country = event.target.value;
  setYoutubeLinks();
}

function addListnerCountrylist() {
  document
    .getElementById("countryInput")
    .addEventListener("change", setCurrentCountrySelect);
}

function setCountriesList() {
  var select = document.getElementById("countryInput"),
    countriesOption = "";
  Object.keys(newsLinkIds).map((c) => {
    countriesOption += `<option ${
      c === country ? "selected" : ""
    } value="${c}">${c} ${newsLinkIds[c].icon || ""}</option>`;
  });
  select.innerHTML = countriesOption;
}

function setYoutubeLinks() {
  linkIds = newsLinkIds[country]?.links;
  const container = document.getElementById("videos").children;

  linkIds.map((linkId, index) => {
    container[
      index
    ].children[0].src = `https://www.youtube.com/embed/${linkId}?mute=1&autoplay=1&rel=0`;
  });
}

function getCountryFromTimezone(userTimeZone) {
  var tzArr = userTimeZone.split("/");
  var userCity = tzArr[tzArr.length - 1];
  return countryMap[userCity];
}

function setCurrentCountry() {
  var userTimeZone = Intl
    ? new Intl.DateTimeFormat().resolvedOptions().timeZone
    : `${DEFAULT}/${DEFAULT}`;
  country = getCountryFromTimezone(userTimeZone);
}

function init() {
  setCurrentCountry();
  setYoutubeLinks();
  setCountriesList();
  addListnerCountrylist();
}

init();

// function isMobileCheck() {
//   let check = false;
//   (function (a) {
//     if (
//       /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(
//         a
//       ) ||
//       /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(
//         a.substr(0, 4)
//       )
//     )
//       check = true;
//   })(navigator.userAgent || navigator.vendor || window.opera);
//   return check;
// }
