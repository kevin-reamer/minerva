﻿var countriesList = [
   { id: 4, tri: 'AFG', di:' AF', name: 'Afghanistan' },
   { id: 8, tri: 'ALB', di:' AL', name: 'Albania' },
   { id: 12, tri: 'DZA', di:' DZ', name: 'Algeria' },
   { id: 16, tri: 'ASM', di:' AS', name: 'American Samoa' },
   { id: 20, tri: 'AND', di:' AD', name: 'Andorra' },
   { id: 24, tri: 'AGO', di:' AO', name: 'Angola' },
   { id: 660, tri: 'AIA', di:' AI', name: 'Anguilla' },
   { id: 10, tri: 'ATA', di:' AQ', name: 'Antarctica' },
   { id: 28, tri: 'ATG', di:' AG', name: 'Antigua and Barbuda' },
   { id: 32, tri: 'ARG', di:' AR', name: 'Argentina' },
   { id: 51, tri: 'ARM', di:' AM', name: 'Armenia' },
   { id: 533, tri: 'ABW', di:' AW', name: 'Aruba' },
   { id: 36, tri: 'AUS', di:' AU', name: 'Australia' },
   { id: 40, tri: 'AUT', di:' AT', name: 'Austria' },
   { id: 31, tri: 'AZE', di:' AZ', name: 'Azerbaijan' },
   { id: 44, tri: 'BHS', di:' BS', name: 'Bahamas, The' },
   { id: 48, tri: 'BHR', di:' BH', name: 'Bahrain' },
   { id: 50, tri: 'BGD', di:' BD', name: 'Bangladesh' },
   { id: 52, tri: 'BRB', di:' BB', name: 'Barbados' },
   { id: 112, tri: 'BLR', di:' BY', name: 'Belarus' },
   { id: 56, tri: 'BEL', di:' BE', name: 'Belgium' },
   { id: 84, tri: 'BLZ', di:' BZ', name: 'Belize' },
   { id: 204, tri: 'BEN', di:' BJ', name: 'Benin' },
   { id: 60, tri: 'BMU', di:' BM', name: 'Bermuda' },
   { id: 64, tri: 'BTN', di:' BT', name: 'Bhutan' },
   { id: 68, tri: 'BOL', di:' BO', name: 'Bolivia' },
   { id: 70, tri: 'BIH', di:' BA', name: 'Bosnia and Herzegovina' },
   { id: 72, tri: 'BWA', di:' BW', name: 'Botswana' },
   { id: 74, tri: 'BVT', di:' BV', name: 'Bouvet Island' },
   { id: 76, tri: 'BRA', di:' BR', name: 'Brazil' },
   { id: 86, tri: 'IOT', di:' IO', name: 'British Indian Ocean Territory' },
   { id: 92, tri: 'VGB', di:' VG', name: 'British Virgin Islands' },
   { id: 96, tri: 'BRN', di:' BN', name: 'Brunei' },
   { id: 100, tri: 'BGR', di:' BG', name: 'Bulgaria' },
   { id: 854, tri: 'BFA', di:' BF', name: 'Burkina Faso' },
   { id: 104, tri: 'MMR', di:' MM', name: 'Burma' },
   { id: 108, tri: 'BDI', di:' BI', name: 'Burundi' },
   { id: 132, tri: 'CPV', di:' CV', name: 'Cabo Verde' },
   { id: 116, tri: 'KHM', di:' KH', name: 'Cambodia' },
   { id: 120, tri: 'CMR', di:' CM', name: 'Cameroon' },
   { id: 124, tri: 'CAN', di:' CA', name: 'Canada' },
   { id: 136, tri: 'CYM', di:' KY', name: 'Cayman Islands' },
   { id: 140, tri: 'CAF', di:' CF', name: 'Central African Republic' },
   { id: 148, tri: 'TCD', di:' TD', name: 'Chad' },
   { id: 152, tri: 'CHL', di:' CL', name: 'Chile' },
   { id: 156, tri: 'CHN', di:' CN', name: 'China' },
   { id: 162, tri: 'CXR', di:' CX', name: 'Christmas Island' },
   { id: 166, tri: 'CCK', di:' CC', name: 'Cocos (Keeling) Islands' },
   { id: 170, tri: 'COL', di:' CO', name: 'Colombia' },
   { id: 174, tri: 'COM', di:' KM', name: 'Comoros' },
   { id: 180, tri: 'COD', di:' CD', name: 'Congo, Democratic Republic of the' },
   { id: 178, tri: 'COG', di:' CG', name: 'Congo, Republic of the' },
   { id: 184, tri: 'COK', di:' CK', name: 'Cook Islands' },
   { id: 188, tri: 'CRI', di:' CR', name: 'Costa Rica' },
   { id: 384, tri: 'CIV', di:' CI', name: 'Cote d&apos;Ivoire' },
   { id: 191, tri: 'HRV', di:' HR', name: 'Croatia' },
   { id: 192, tri: 'CUB', di:' CU', name: 'Cuba' },
   { id: 531, tri: 'CUW', di:' CW', name: 'Curacao' },
   { id: 196, tri: 'CYP', di:' CY', name: 'Cyprus' },
   { id: 203, tri: 'CZE', di:' CZ', name: 'Czech Republic' },
   { id: 208, tri: 'DNK', di:' DK', name: 'Denmark' },
   { id: 262, tri: 'DJI', di:' DJ', name: 'Djibouti' },
   { id: 212, tri: 'DMA', di:' DM', name: 'Dominica' },
   { id: 214, tri: 'DOM', di:' DO', name: 'Dominican Republic' },
   { id: 218, tri: 'ECU', di:' EC', name: 'Ecuador' },
   { id: 818, tri: 'EGY', di:' EG', name: 'Egypt' },
   { id: 222, tri: 'SLV', di:' SV', name: 'El Salvador' },
   { id: 226, tri: 'GNQ', di:' GQ', name: 'Equatorial Guinea' },
   { id: 232, tri: 'ERI', di:' ER', name: 'Eritrea' },
   { id: 233, tri: 'EST', di:' EE', name: 'Estonia' },
   { id: 231, tri: 'ETH', di:' ET', name: 'Ethiopia' },
   { id: 238, tri: 'FLK', di:' FK', name: 'Falkland Islands (Islas Malvinas)' },
   { id: 234, tri: 'FRO', di:' FO', name: 'Faroe Islands' },
   { id: 242, tri: 'FJI', di:' FJ', name: 'Fiji' },
   { id: 246, tri: 'FIN', di:' FI', name: 'Finland' },
   { id: 250, tri: 'FRA', di:' FR', name: 'France' },
   { id: 249, tri: 'FXX', di:' FX', name: 'France, Metropolitan' },
   { id: 254, tri: 'GUF', di:' GF', name: 'French Guiana' },
   { id: 258, tri: 'PYF', di:' PF', name: 'French Polynesia' },
   { id: 260, tri: 'ATF', di:' TF', name: 'French Southern and Antarctic Lands' },
   { id: 266, tri: 'GAB', di:' GA', name: 'Gabon' },
   { id: 270, tri: 'GMB', di:' GM', name: 'Gambia, The' },
   { id: 275, tri: 'PSE', di:' PS', name: 'Palestinian Territories' },
   { id: 268, tri: 'GEO', di:' GE', name: 'Georgia' },
   { id: 276, tri: 'DEU', di:' DE', name: 'Germany' },
   { id: 288, tri: 'GHA', di:' GH', name: 'Ghana' },
   { id: 292, tri: 'GIB', di:' GI', name: 'Gibraltar' },
   { id: 300, tri: 'GRC', di:' GR', name: 'Greece' },
   { id: 304, tri: 'GRL', di:' GL', name: 'Greenland' },
   { id: 308, tri: 'GRD', di:' GD', name: 'Grenada' },
   { id: 312, tri: 'GLP', di:' GP', name: 'Guadeloupe' },
   { id: 316, tri: 'GUM', di:' GU', name: 'Guam' },
   { id: 320, tri: 'GTM', di:' GT', name: 'Guatemala' },
   { id: 831, tri: 'GGY', di:' GG', name: 'Guernsey' },
   { id: 324, tri: 'GIN', di:' GN', name: 'Guinea' },
   { id: 624, tri: 'GNB', di:' GW', name: 'Guinea-Bissau' },
   { id: 328, tri: 'GUY', di:' GY', name: 'Guyana' },
   { id: 332, tri: 'HTI', di:' HT', name: 'Haiti' },
   { id: 334, tri: 'HMD', di:' HM', name: 'Heard Island and McDonald Islands' },
   { id: 336, tri: 'VAT', di:' VA', name: 'Holy See (Vatican City)' },
   { id: 340, tri: 'HND', di:' HN', name: 'Honduras' },
   { id: 344, tri: 'HKG', di:' HK', name: 'Hong Kong' },
   { id: 348, tri: 'HUN', di:' HU', name: 'Hungary' },
   { id: 352, tri: 'ISL', di:' IS', name: 'Iceland' },
   { id: 356, tri: 'IND', di:' IN', name: 'India' },
   { id: 360, tri: 'IDN', di:' ID', name: 'Indonesia' },
   { id: 364, tri: 'IRN', di:' IR', name: 'Iran' },
   { id: 368, tri: 'IRQ', di:' IQ', name: 'Iraq' },
   { id: 372, tri: 'IRL', di:' IE', name: 'Ireland' },
   { id: 833, tri: 'IMN', di:' IM', name: 'Isle of Man' },
   { id: 376, tri: 'ISR', di:' IL', name: 'Israel' },
   { id: 380, tri: 'ITA', di:' IT', name: 'Italy' },
   { id: 388, tri: 'JAM', di:' JM', name: 'Jamaica' },
   { id: 392, tri: 'JPN', di:' JP', name: 'Japan' },
   { id: 832, tri: 'JEY', di:' JE', name: 'Jersey' },
   { id: 400, tri: 'JOR', di:' JO', name: 'Jordan' },
   { id: 398, tri: 'KAZ', di:' KZ', name: 'Kazakhstan' },
   { id: 404, tri: 'KEN', di:' KE', name: 'Kenya' },
   { id: 296, tri: 'KIR', di:' KI', name: 'Kiribati' },
   { id: 408, tri: 'PRK', di:' KP', name: 'Korea, North' },
   { id: 410, tri: 'KOR', di:' KR', name: 'Korea, South' },
   { id: -2 , tri: 'XKS', di:' XK', name: 'Kosovo' },
   { id: 414, tri: 'KWT', di:' KW', name: 'Kuwait' },
   { id: 417, tri: 'KGZ', di:' KG', name: 'Kyrgyzstan' },
   { id: 418, tri: 'LAO', di:' LA', name: 'Laos' },
   { id: 428, tri: 'LVA', di:' LV', name: 'Latvia' },
   { id: 422, tri: 'LBN', di:' LB', name: 'Lebanon' },
   { id: 426, tri: 'LSO', di:' LS', name: 'Lesotho' },
   { id: 430, tri: 'LBR', di:' LR', name: 'Liberia' },
   { id: 434, tri: 'LBY', di:' LY', name: 'Libya' },
   { id: 438, tri: 'LIE', di:' LI', name: 'Liechtenstein' },
   { id: 440, tri: 'LTU', di:' LT', name: 'Lithuania' },
   { id: 442, tri: 'LUX', di:' LU', name: 'Luxembourg' },
   { id: 446, tri: 'MAC', di:' MO', name: 'Macau' },
   { id: 807, tri: 'MKD', di:' MK', name: 'Macedonia' },
   { id: 450, tri: 'MDG', di:' MG', name: 'Madagascar' },
   { id: 454, tri: 'MWI', di:' MW', name: 'Malawi' },
   { id: 458, tri: 'MYS', di:' MY', name: 'Malaysia' },
   { id: 462, tri: 'MDV', di:' MV', name: 'Maldives' },
   { id: 466, tri: 'MLI', di:' ML', name: 'Mali' },
   { id: 470, tri: 'MLT', di:' MT', name: 'Malta' },
   { id: 584, tri: 'MHL', di:' MH', name: 'Marshall Islands' },
   { id: 474, tri: 'MTQ', di:' MQ', name: 'Martinique' },
   { id: 478, tri: 'MRT', di:' MR', name: 'Mauritania' },
   { id: 480, tri: 'MUS', di:' MU', name: 'Mauritius' },
   { id: 175, tri: 'MYT', di:' YT', name: 'Mayotte' },
   { id: 484, tri: 'MEX', di:' MX', name: 'Mexico' },
   { id: 583, tri: 'FSM', di:' FM', name: 'Micronesia, Federated States of' },
   { id: 498, tri: 'MDA', di:' MD', name: 'Moldova' },
   { id: 492, tri: 'MCO', di:' MC', name: 'Monaco' },
   { id: 496, tri: 'MNG', di:' MN', name: 'Mongolia' },
   { id: 499, tri: 'MNE', di:' ME', name: 'Montenegro' },
   { id: 500, tri: 'MSR', di:' MS', name: 'Montserrat' },
   { id: 504, tri: 'MAR', di:' MA', name: 'Morocco' },
   { id: 508, tri: 'MOZ', di:' MZ', name: 'Mozambique' },
   { id: 516, tri: 'NAM', di:' NA', name: 'Namibia' },
   { id: 520, tri: 'NRU', di:' NR', name: 'Nauru' },
   { id: 524, tri: 'NPL', di:' NP', name: 'Nepal' },
   { id: 528, tri: 'NLD', di:' NL', name: 'Netherlands' },
   { id: 540, tri: 'NCL', di:' NC', name: 'New Caledonia' },
   { id: 554, tri: 'NZL', di:' NZ', name: 'New Zealand' },
   { id: 558, tri: 'NIC', di:' NI', name: 'Nicaragua' },
   { id: 562, tri: 'NER', di:' NE', name: 'Niger' },
   { id: 566, tri: 'NGA', di:' NG', name: 'Nigeria' },
   { id: 570, tri: 'NIU', di:' NU', name: 'Niue' },
   { id: 574, tri: 'NFK', di:' NF', name: 'Norfolk Island' },
   { id: 580, tri: 'MNP', di:' MP', name: 'Northern Mariana Islands' },
   { id: -1,  tri: '',    di:'',    name: 'Northern Cyprus' },
   { id: 578, tri: 'NOR', di:' NO', name: 'Norway' },
   { id: 512, tri: 'OMN', di:' OM', name: 'Oman' },
   { id: 586, tri: 'PAK', di:' PK', name: 'Pakistan' },
   { id: 585, tri: 'PLW', di:' PW', name: 'Palau' },
   { id: 591, tri: 'PAN', di:' PA', name: 'Panama' },
   { id: 598, tri: 'PNG', di:' PG', name: 'Papua New Guinea' },
   { id: 600, tri: 'PRY', di:' PY', name: 'Paraguay' },
   { id: 604, tri: 'PER', di:' PE', name: 'Peru' },
   { id: 608, tri: 'PHL', di:' PH', name: 'Philippines' },
   { id: 612, tri: 'PCN', di:' PN', name: 'Pitcairn Islands' },
   { id: 616, tri: 'POL', di:' PL', name: 'Poland' },
   { id: 620, tri: 'PRT', di:' PT', name: 'Portugal' },
   { id: 630, tri: 'PRI', di:' PR', name: 'Puerto Rico' },
   { id: 634, tri: 'QAT', di:' QA', name: 'Qatar' },
   { id: 638, tri: 'REU', di:' RE', name: 'Reunion' },
   { id: 642, tri: 'ROU', di:' RO', name: 'Romania' },
   { id: 643, tri: 'RUS', di:' RU', name: 'Russia' },
   { id: 646, tri: 'RWA', di:' RW', name: 'Rwanda' },
   { id: 652, tri: 'BLM', di:' BL', name: 'Saint Barthelemy' },
   { id: 654, tri: 'SHN', di:' SH', name: 'Saint Helena, Ascension, and Tristan da Cunha' },
   { id: 659, tri: 'KNA', di:' KN', name: 'Saint Kitts and Nevis' },
   { id: 662, tri: 'LCA', di:' LC', name: 'Saint Lucia' },
   { id: 663, tri: 'MAF', di:' MF', name: 'Saint Martin' },
   { id: 666, tri: 'SPM', di:' PM', name: 'Saint Pierre and Miquelon' },
   { id: 670, tri: 'VCT', di:' VC', name: 'Saint Vincent and the Grenadines' },
   { id: 882, tri: 'WSM', di:' WS', name: 'Samoa' },
   { id: 674, tri: 'SMR', di:' SM', name: 'San Marino' },
   { id: 678, tri: 'STP', di:' ST', name: 'Sao Tome and Principe' },
   { id: 682, tri: 'SAU', di:' SA', name: 'Saudi Arabia' },
   { id: 686, tri: 'SEN', di:' SN', name: 'Senegal' },
   { id: 688, tri: 'SRB', di:' RS', name: 'Serbia' },
   { id: 690, tri: 'SYC', di:' SC', name: 'Seychelles' },
   { id: 694, tri: 'SLE', di:' SL', name: 'Sierra Leone' },
   { id: 702, tri: 'SGP', di:' SG', name: 'Singapore' },
   { id: 534, tri: 'SXM', di:' SX', name: 'Sint Maarten' },
   { id: 703, tri: 'SVK', di:' SK', name: 'Slovakia' },
   { id: 705, tri: 'SVN', di:' SI', name: 'Slovenia' },
   { id: 90 , tri: 'SLB', di:' SB', name: 'Solomon Islands' },
   { id: 706, tri: 'SOM', di:' SO', name: 'Somalia' },
   { id: -3 , tri: 'SOM', di:' SO', name: 'Somaliland' },
   { id: 710, tri: 'ZAF', di:' ZA', name: 'South Africa' },
   { id: 239, tri: 'SGS', di:' GS', name: 'South Georgia and the Islands' },
   { id: 728, tri: 'SSD', di:' SS', name: 'South Sudan' },
   { id: 724, tri: 'ESP', di:' ES', name: 'Spain' },
   { id: 144, tri: 'LKA', di:' LK', name: 'Sri Lanka' },
   { id: 729, tri: 'SDN', di:' SD', name: 'Sudan' },
   { id: 740, tri: 'SUR', di:' SR', name: 'Suriname' },
   { id: 744, tri: 'SJM', di:' SJ', name: 'Svalbard' },
   { id: 748, tri: 'SWZ', di:' SZ', name: 'Swaziland' },
   { id: 752, tri: 'SWE', di:' SE', name: 'Sweden' },
   { id: 756, tri: 'CHE', di:' CH', name: 'Switzerland' },
   { id: 760, tri: 'SYR', di:' SY', name: 'Syria' },
   { id: 158, tri: 'TWN', di:' TW', name: 'Taiwan' },
   { id: 762, tri: 'TJK', di:' TJ', name: 'Tajikistan' },
   { id: 834, tri: 'TZA', di:' TZ', name: 'Tanzania' },
   { id: 764, tri: 'THA', di:' TH', name: 'Thailand' },
   { id: 626, tri: 'TLS', di:' TL', name: 'Timor-Leste' },
   { id: 768, tri: 'TGO', di:' TG', name: 'Togo' },
   { id: 772, tri: 'TKL', di:' TK', name: 'Tokelau' },
   { id: 776, tri: 'TON', di:' TO', name: 'Tonga' },
   { id: 780, tri: 'TTO', di:' TT', name: 'Trinidad and Tobago' },
   { id: 788, tri: 'TUN', di:' TN', name: 'Tunisia' },
   { id: 792, tri: 'TUR', di:' TR', name: 'Turkey' },
   { id: 795, tri: 'TKM', di:' TM', name: 'Turkmenistan' },
   { id: 796, tri: 'TCA', di:' TC', name: 'Turks and Caicos Islands' },
   { id: 798, tri: 'TUV', di:' TV', name: 'Tuvalu' },
   { id: 800, tri: 'UGA', di:' UG', name: 'Uganda' },
   { id: 804, tri: 'UKR', di:' UA', name: 'Ukraine' },
   { id: 784, tri: 'ARE', di:' AE', name: 'United Arab Emirates' },
   { id: 826, tri: 'GBR', di:' GB', name: 'United Kingdom' },
   { id: 840, tri: 'USA', di:' US', name: 'United States' },
   { id: 581, tri: 'UMI', di:' UM', name: 'United States Minor Outlying Islands' },
   { id: 858, tri: 'URY', di:' UY', name: 'Uruguay' },
   { id: 860, tri: 'UZB', di:' UZ', name: 'Uzbekistan' },
   { id: 548, tri: 'VUT', di:' VU', name: 'Vanuatu' },
   { id: 862, tri: 'VEN', di:' VE', name: 'Venezuela' },
   { id: 704, tri: 'VNM', di:' VN', name: 'Vietnam' },
   { id: 850, tri: 'VIR', di:' VI', name: 'Virgin Islands' },
   { id: 876, tri: 'WLF', di:' WF', name: 'Wallis and Futuna' },
   { id: 275, tri: 'PSE', di:' PS', name: 'West Bank' },
   { id: 732, tri: 'ESH', di:' EH', name: 'Western Sahara' },
   { id: 887, tri: 'YEM', di:' YE', name: 'Yemen' },
   { id: 894, tri: 'ZMB', di:' ZM', name: 'Zambia' },
   { id: 716, tri: 'ZWE', di:' ZW', name: 'Zimbabwe' }
];

var statesList = [
   { id: 1, name: 'Alabama' },
   { id: 2, name: 'Alaska' },
   { id: 4, name: 'Arizona' },
   { id: 5, name: 'Arkansas' },
   { id: 6, name: 'California' },
   { id: 8, name: 'Colorado' },
   { id: 9, name: 'Connecticut' },
   { id: 10, name: 'Delaware' },
   { id: 12, name: 'Florida' },
   { id: 13, name: 'Georgia' },
   { id: 15, name: 'Hawaii' },
   { id: 16, name: 'Idaho' },
   { id: 17, name: 'Illinois' },
   { id: 18, name: 'Indiana' },
   { id: 19, name: 'Iowa' },
   { id: 20, name: 'Kansas' },
   { id: 21, name: 'Kentucky' },
   { id: 22, name: 'Louisiana' },
   { id: 23, name: 'Maine' },
   { id: 24, name: 'Maryland' },
   { id: 25, name: 'Massachusetts' },
   { id: 26, name: 'Michigan' },
   { id: 27, name: 'Minnesota' },
   { id: 28, name: 'Mississippi' },
   { id: 29, name: 'Missouri' },
   { id: 30, name: 'Montana' },
   { id: 31, name: 'Nebraska' },
   { id: 32, name: 'Nevada' },
   { id: 33, name: 'New Hampshire' },
   { id: 34, name: 'New Jersey' },
   { id: 35, name: 'New Mexico' },
   { id: 36, name: 'New York' },
   { id: 37, name: 'North Carolina' },
   { id: 38, name: 'North Dakota' },
   { id: 39, name: 'Ohio' },
   { id: 40, name: 'Oklahoma' },
   { id: 41, name: 'Oregon' },
   { id: 42, name: 'Pennsylvania' },
   { id: 44, name: 'Rhode Island' },
   { id: 45, name: 'South Carolina' },
   { id: 46, name: 'South Dakota' },
   { id: 47, name: 'Tennessee' },
   { id: 48, name: 'Texas' },
   { id: 49, name: 'Utah' },
   { id: 50, name: 'Vermont' },
   { id: 51, name: 'Virginia' },
   { id: 53, name: 'Washington' },
   { id: 54, name: 'West Virginia' },
   { id: 55, name: 'Wisconsin' },
   { id: 56, name: 'Wyoming' }
];