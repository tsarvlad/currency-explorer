//zones
const [EurozoneColor, USDColor, CFAfrancColor] = ["royalblue", "#1e90ff", " #D5B56E"]
//europe

//western
const [UKColor, SwitzerlandColor] = ["#d87d91", "#b71540"]
//Central Europe

//Northern Europe

//Eastern Europe

//South Europe

const Eurozone = [
    "Belgium", EurozoneColor,
    "Germany", EurozoneColor,
    "Ireland", EurozoneColor,
    "Spain", EurozoneColor,
    "France", EurozoneColor,
    "Italy", EurozoneColor,
    "Luxembourg", EurozoneColor,
    "Netherlands", EurozoneColor,
    "Austria", EurozoneColor,
    "Portugal", EurozoneColor,
    "Finland", EurozoneColor,
    "Greece", EurozoneColor,
    "Slovenia", EurozoneColor,
    "Cyprus", EurozoneColor,
    "Malta", EurozoneColor,
    "Slovakia", EurozoneColor,
    "Estonia", EurozoneColor,
    "Latvia", EurozoneColor,
    "Lithuania", EurozoneColor,
    //Other territories
    "Åland", EurozoneColor,
    "St-Martin", EurozoneColor,
    "St-Barthélemy", EurozoneColor,
    //Not official
    "Montenegro", EurozoneColor,
    "Kosovo", EurozoneColor
]

const USDollar = [
    "United States of America", USDColor,
    "Zimbabwe", USDColor,
    "Ecuador", USDColor,
    "Panama", USDColor,
    "El Salbador", USDColor,
    "Palau", USDColor,
    "Timor-Leste", USDColor,
    "Marshall Islands", USDColor,
    "Micronesia", USDColor,
    "Bahamas", USDColor,
    "Turks and Caicos Is.", USDColor,
    "Puerto Rico", USDColor,
    "Bermuda", USDColor
]

const CFAfranc = [
    "Senegal", CFAfrancColor,
    "Guinea-Bissau", CFAfrancColor,
    "Mali", CFAfrancColor,
    "Côte d'Ivoire", CFAfrancColor,
    "Burkina Faso", CFAfrancColor,
    "Togo", CFAfrancColor,
    "Benin", CFAfrancColor,
    "Niger", CFAfrancColor,
    "Chad", CFAfrancColor,
    "Central African Rep.", CFAfrancColor,
    "Cameroon", CFAfrancColor,
    "Eq. Guinea", CFAfrancColor,
    "Congo", CFAfrancColor,
    "Gabon", CFAfrancColor
]



const Europe = [
    // Western Europe
    ...["United Kingdom", UKColor, "Switzerland", SwitzerlandColor],
    // Northern Europe
    ...["Norway", "#522e35", "Sweden", "#bbbcf9", "Iceland", "#bbb8c6", "Denmark", "#925566", "Faeroe Is.", "#925566"],
    // Eastern Europe 
    ...["Ukraine", "#1e90ff", "Russia", "#3d5f46", "Belarus", "#b3b1be", "Moldova", "#e1b12c",
        "Poland", "#bc8791", "Czechia", "#82ccdd", "Hungary", "#b8e994", "Romania", "#ffdd59", "Bulgaria", "#218c74"
    ],
    // South Europe
    ...["Croatia", "#ff5e57", "Bosnia and Herz.", "#ddc075", "Serbia", "#90a4c2", "Albania", "#8b0000", "North Macedonia", "#c4876a",
        "Turkey", "#bf6468", "N. Cyprus", "#bf6468"]
]

const Asia = [
    // Middle East
    ...["Syria", "#ffc1ab", "Iraq", "#d4bf76", "Lebanon", "#b4b89d", "Jordan", "#a7fce4", "Israel", "#7381b5", "Palestine", "#978988",
        "Saudi Arabia", "#6f7f69", "Kuwait", "#ca838c", "Bahrain", "#4b535b", "Qatar", "#a98288", "United Arab Emirates", "#ad9d89", "Oman", "#dbac99", "Yemen", "#a48368",
        "Georgia", "#ded1d6", "Armenia", "#e5a08a", "Azerbaijan", "#64aec6", "Iran", "#6f9c7b"],
    // Central Asia
    ...["Kazakhstan", "#95b6ff", "Uzbekistan", "#8f97b6", "Kyrgyzstan", "#e8ad86", "Turkmenistan", "#e8a8b9", "Tajikistan", "#899e8d"],
    // South Asia
    ...["Afghanistan", "#000000", "Pakistan", "#657750", "India", "#fcc4a2", "Nepal", "#e5e0ea", "Bhutan", "#756163", "Bangladesh", "#225a58", "Sri Lanka", "#eb774d"],
    // Southeast Asia
    ...["Myanmar", "#6f9c7b", "Thailand", "#68a3b7", "Laos", "#da9973", "Vietnam", "#e2d786", "Cambodia", "#524a4a", "Malaysia", "#e056fd", "Indonesia", "#eac690", "Philippines", "#4834d4"],
    // East Asia
    ...["China", "#e2404a", "Taiwan", "#68a3b7", "Mongolia", "#f7da95", "North Korea", "#ab0101", "South Korea", "#567df9", "Japan", "#ffd3c5"],
]

const Oceania = [
    "Australia", "#225a58", "New Zealand", "#95b6ff", "Papua New Guinea", "#eb774d", "Solomon Is.", "#fcf403", "New Caledonia", "#fcba03", "Fiji", "#03fcf8", "Samoa", "#4debbe"
]

const Africa = [
    // //Northern Africa
    ...["Morocco", "#c23616", "W. Sahara", "#2ed573", "Algeria", "#44bd32", "Tunisia", "#ff6b81", "Libya", "#7bed9f", "Egypt", "#ffa502", "Sudan", "#2ed573"],
    // // Western Africa
    ...["Mauritania", "#648b6f", "Gambia", "#3742fa", "Guinea", "#2ed573", "Sierra Leone", "#5352ed", "Liberia", "#1e90ff", "Ghana", "#ff4757", "Nigeria", "#009432"],
    // // Central Africa
    ...["Dem. Rep. Congo", "#0652DD", "Angola", "#ED4C67"],
    // // Eastern Africa
    ...["S. Sudan", "#EE5A24", "Eritrea", "#ff6b81", "Djibouti", "#A3CB38", "Somaliland", "#EA2027", "Somalia", "#12CBC4", "Ethiopia", "#1B1464", "Kenya", "#ff4757", "Uganda", "#C4E538", "Tanzania", "#12CBC4", "Rwanda", "#009432", "Burundi", "#ff6b81", "Malawi", "#FDA7DF", "Zambia", "#7bed9f", "Mozambique", "#009432", "Madagascar", "#ced6e0"],
    // // Southern Africa
    ...["South Africa", "#D980FA", "Namibia", "#C4E538", "Botswana", "#a4b0be", "Eswatini", "#D980FA"]
]

const Americas = [
    // Northern America
    ...["Canada", "#ff6b81", "Greenland", "#fff"],
    //Central America
    ...["Mexico", "#6ab04c", "Guatemala", "#70a1ff", "Belize", "#ff4757", "El Salvador", "#1B1464", "Honduras", "#2ed573", "Nicaragua", "#7ed6df", "Costa Rica", "#30336b"],
    //Caribbean 
    ...["Cuba", "#EE5A24", "Jamaica", "#A3CB38", "Haiti", "#833471", "Dominican Rep.", "#12CBC4", "St. Kitts and Nevis", "#70a1ff", "Antigua and Barb.", "#A3CB38", "St. Vin. and Gren.", "#FDA7DF", "Grenada", "#EA2027"],
    // South America
    ...["Colombia", "#ffa502", "Venezuela", "#ffbe76", "Guyana", "#7ed6df", "Suriname", "#eb4d4b",
        "Peru", "#a4b0be", "Bolivia", "#2f3542", "Chile", "#ffbe76", "Argentina", "#7ed6df", "Uruguay", "#badc58", "Paraguay", "#22a6b3", "Brazil", "#6ab04c", "Falkland Is.", "#eb4d4b"]
]



const COUNTRY_COLORS_PALETTE = [
    'match',
    ['get', 'name'],
    //zones
    ...Eurozone,
    ...USDollar,
    ...CFAfranc,

    //Continents
    ...Europe,
    ...Asia,
    ...Oceania,
    ...Africa,
    ...Americas,
    '#70a1ff'
    // ^ Others 
]



export default COUNTRY_COLORS_PALETTE

