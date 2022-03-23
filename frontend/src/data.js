Object.defineProperty(exports, "__esModule", { value: true });
// exports.sampleData = [
//   { x: 0.0, y: 2 },
//   { x: 1.814070351758794, y: 2 },
//   { x: 3.628140703517588, y: 1.7 },
//   { x: 5.442211055276382, y: 2 },
//   { x: 7.256281407035176, y: 2.1 },
//   { x: 9.07035175879397, y: 2 },
//   { x: 10.884422110552764, y: 1.8 },
//   { x: 12.698492462311558, y: 1.9 },
//   { x: 14.512562814070352, y: 2 },
//   { x: 16.326633165829147, y: 2 },
//   { x: 18.14070351758794, y: 2 },
//   { x: 19.954773869346734, y: 2 },
//   { x: 21.768844221105528, y: 2.1 },
//   { x: 23.582914572864322, y: 2 },
//   { x: 25.396984924623116, y: 2 },
//   { x: 27.21105527638191, y: 1.7 },
//   { x: 29.025125628140703, y: 2.1 },
//   { x: 30.839195979899497, y: 2 },
//   { x: 32.653266331658294, y: 2 },
//   { x: 34.46733668341709, y: 2 },
//   { x: 36.28140703517588, y: 2 },
//   { x: 38.095477386934675, y: 2 },
//   { x: 39.90954773869347, y: 2 },
//   { x: 41.72361809045226, y: 2 },
//   { x: 43.537688442211056, y: 2 },
//   { x: 45.35175879396985, y: 2 },
//   { x: 47.165829145728644, y: 2 },
//   { x: 48.97989949748744, y: 2 },
//   { x: 50.79396984924623, y: 2 },
//   { x: 52.608040201005025, y: 2 },
//   { x: 54.42211055276382, y: 2 },
//   { x: 56.23618090452261, y: 2 },
//   { x: 58.050251256281406, y: 2 },
//   { x: 59.8643216080402, y: 2.2 },
//   { x: 61.678391959798994, y: 1.9 },
//   { x: 63.49246231155779, y: 2 },
//   { x: 65.30653266331659, y: 2 },
//   { x: 67.12060301507537, y: 2 },
//   { x: 68.93467336683418, y: 1.7 },
//   { x: 70.74874371859296, y: 2 },
//   { x: 72.56281407035176, y: 2 },
//   { x: 74.37688442211055, y: 2 },
//   { x: 76.19095477386935, y: 2 },
//   { x: 78.00502512562814, y: 1.8 },
//   { x: 79.81909547738694, y: 2 },
//   { x: 81.63316582914572, y: 1.9 },
//   { x: 83.44723618090453, y: 2 },
//   { x: 85.26130653266331, y: 2 },
//   { x: 87.07537688442211, y: 2.1 },
//   { x: 88.8894472361809, y: 2 },
//   { x: 90.7035175879397, y: 2 },
//   { x: 92.51758793969849, y: 2 },
//   { x: 94.33165829145729, y: 2 },
//   { x: 96.14572864321607, y: 2 },
//   { x: 97.95979899497488, y: 2 },
//   { x: 99.77386934673366, y: 1.8 },
//   { x: 101.58793969849246, y: 2 },
//   { x: 103.40201005025125, y: 2 },
//   { x: 105.21608040201005, y: 1.9 },
//   { x: 107.03015075376884, y: 2 },
//   { x: 108.84422110552764, y: 2.1 },
//   { x: 110.65829145728642, y: 2 },
//   { x: 112.47236180904522, y: 1.9 },
//   { x: 114.28643216080401, y: 2 },
//   { x: 116.10050251256281, y: 2 },
//   { x: 117.91457286432161, y: 2.1 },
//   { x: 119.7286432160804, y: 2 },
//   { x: 121.5427135678392, y: 1.7 },
//   { x: 123.35678391959799, y: 1.8 },
//   { x: 125.17085427135679, y: 2 },
//   { x: 126.98492462311557, y: 2 },
//   { x: 128.79899497487438, y: 2 },
//   { x: 130.61306532663318, y: 2 },
//   { x: 132.42713567839195, y: 2 },
//   { x: 134.24120603015075, y: 2 },
//   { x: 136.05527638190955, y: 2 },
//   { x: 137.86934673366835, y: 2 },
//   { x: 139.68341708542712, y: 2 },
//   { x: 141.49748743718592, y: 2 },
//   { x: 143.31155778894473, y: 2 },
//   { x: 145.12562814070353, y: 2 },
//   { x: 146.9396984924623, y: 2 },
//   { x: 148.7537688442211, y: 2 },
//   { x: 150.5678391959799, y: 2 },
//   { x: 152.3819095477387, y: 2 },
//   { x: 154.19597989949747, y: 2 },
//   { x: 156.01005025125627, y: 2 },
//   { x: 157.82412060301507, y: 2 },
//   { x: 159.63819095477388, y: 2 },
//   { x: 161.45226130653265, y: 2 },
//   { x: 163.26633165829145, y: 2 },
//   { x: 165.08040201005025, y: 2 },
//   { x: 166.89447236180905, y: 2 },
//   { x: 168.70854271356782, y: 2 },
//   { x: 170.52261306532662, y: 1.8 },
//   { x: 172.33668341708542, y: 2 },
//   { x: 174.15075376884423, y: 2 },
//   { x: 175.96482412060303, y: 1.7 },
//   { x: 177.7788944723618, y: 2 },
//   { x: 179.5929648241206, y: 2 },
//   { x: 181.4070351758794, y: 2 },
//   { x: 183.2211055276382, y: 2 },
//   { x: 185.03517587939697, y: 2 },
//   { x: 186.84924623115577, y: 2 },
//   { x: 188.66331658291458, y: 2 },
//   { x: 190.47738693467338, y: 2 },
//   { x: 192.29145728643215, y: 2 },
//   { x: 194.10552763819095, y: 2 },
//   { x: 195.91959798994975, y: 1.9 },
//   { x: 197.73366834170855, y: 2 },
//   { x: 199.54773869346732, y: 2 },
//   { x: 201.36180904522612, y: 2 },
//   { x: 203.17587939698493, y: 2 },
//   { x: 204.98994974874373, y: 2 },
//   { x: 206.8040201005025, y: 2 },
//   { x: 208.6180904522613, y: 2 },
//   { x: 210.4321608040201, y: 2 },
//   { x: 212.2462311557789, y: 2 },
//   { x: 214.06030150753767, y: 2 },
//   { x: 215.87437185929647, y: 2 },
//   { x: 217.68844221105527, y: 2.1 },
//   { x: 219.50251256281408, y: 2 },
//   { x: 221.31658291457285, y: 2 },
//   { x: 223.13065326633165, y: 1.8 },
//   { x: 224.94472361809045, y: 2 },
//   { x: 226.75879396984925, y: 2 },
//   { x: 228.57286432160802, y: 1.9 },
//   { x: 230.38693467336682, y: 2 },
//   { x: 232.20100502512562, y: 2 },
//   { x: 234.01507537688443, y: 2 },
//   { x: 235.82914572864323, y: 2 },
//   { x: 237.643216080402, y: 2 },
//   { x: 239.4572864321608, y: 2 },
//   { x: 241.2713567839196, y: 1.9 },
//   { x: 243.0854271356784, y: 2.1 },
//   { x: 244.89949748743717, y: 2.1 },
//   { x: 246.71356783919597, y: 2.1 },
//   { x: 248.52763819095478, y: 2 },
//   { x: 250.34170854271358, y: 2 },
//   { x: 252.15577889447235, y: 2 },
//   { x: 253.96984924623115, y: 2 },
//   { x: 255.78391959798995, y: 1.9 },
//   { x: 257.59798994974875, y: 2 },
//   { x: 259.41206030150755, y: 2 },
//   { x: 261.22613065326635, y: 2 },
//   { x: 263.0402010050251, y: 2 },
//   { x: 264.8542713567839, y: 2 },
//   { x: 266.6683417085427, y: 2 },
//   { x: 268.4824120603015, y: 2 },
//   { x: 270.2964824120603, y: 2 },
//   { x: 272.1105527638191, y: 1.8 },
//   { x: 273.9246231155779, y: 2.1 },
//   { x: 275.7386934673367, y: 1.9 },
//   { x: 277.55276381909545, y: 2 },
//   { x: 279.36683417085425, y: 2 },
//   { x: 281.18090452261305, y: 2 },
//   { x: 282.99497487437185, y: 2 },
//   { x: 284.80904522613065, y: 1.7 },
//   { x: 286.62311557788945, y: 1.8 },
//   { x: 288.43718592964825, y: 2 },
//   { x: 290.25125628140705, y: 2 },
//   { x: 292.06532663316585, y: 2 },
//   { x: 293.8793969849246, y: 2 },
//   { x: 295.6934673366834, y: 2.1 },
//   { x: 297.5075376884422, y: 1.9 },
//   { x: 299.321608040201, y: 2 },
//   { x: 301.1356783919598, y: 1.7 },
//   { x: 302.9497487437186, y: 2 },
//   { x: 304.7638190954774, y: 2 },
//   { x: 306.5778894472362, y: 2 },
//   { x: 308.39195979899495, y: 1.8 },
//   { x: 310.20603015075375, y: 2 },
//   { x: 312.02010050251255, y: 2 },
//   { x: 313.83417085427135, y: 2 },
//   { x: 315.64824120603015, y: 2 },
//   { x: 317.46231155778895, y: 2 },
//   { x: 319.27638190954775, y: 2 },
//   { x: 321.09045226130655, y: 2 },
//   { x: 322.9045226130653, y: 2 },
//   { x: 324.7185929648241, y: 2 },
//   { x: 326.5326633165829, y: 2.1 },
//   { x: 328.3467336683417, y: 1.8 },
//   { x: 330.1608040201005, y: 1.9 },
//   { x: 331.9748743718593, y: 2 },
//   { x: 333.7889447236181, y: 2 },
//   { x: 335.6030150753769, y: 2 },
//   { x: 337.41708542713565, y: 2.1 },
//   { x: 339.23115577889445, y: 2 },
//   { x: 341.04522613065325, y: 2 },
//   { x: 342.85929648241205, y: 2 },
//   { x: 344.67336683417085, y: 2 },
//   { x: 346.48743718592965, y: 2 },
//   { x: 348.30150753768845, y: 2 },
//   { x: 350.11557788944725, y: 2 },
//   { x: 351.92964824120605, y: 2 },
//   { x: 353.7437185929648, y: 2 },
//   { x: 355.5577889447236, y: 2 },
//   { x: 357.3718592964824, y: 2.1 },
//   { x: 359.1859296482412, y: 2.1 },
//   { x: 361.0, y: 2 },
// ];

exports.sampleData = [
  { x: 0.0, y: 2.0 },
  { x: 1.8000000000000003, y: 1.7960534568565431 },
  { x: 3.6000000000000005, y: 1.842294026289558 },
  { x: 5.4, y: 1.9645745014573774 },
  { x: 7.200000000000001, y: 2.0371663222572622 },
  { x: 9.0, y: 1.902113032590307 },
  { x: 10.8, y: 1.8595529717765027 },
  { x: 12.600000000000001, y: 1.509654104932039 },
  { x: 14.400000000000002, y: 1.6526133600877272 },
  { x: 16.200000000000003, y: 1.6886558510040302 },
  { x: 18.0, y: 1.618033988749895 },
  { x: 19.800000000000004, y: 1.6410264855515783 },
  { x: 21.6, y: 1.457937254842823 },
  { x: 23.400000000000002, y: 1.3690942118573772 },
  { x: 25.200000000000003, y: 1.3748479794973793 },
  { x: 27.000000000000004, y: 1.275570504584946 },
  { x: 28.800000000000004, y: 1.071653589957993 },
  { x: 30.600000000000005, y: 1.0635073482034303 },
  { x: 32.400000000000006, y: 0.9515585831301453 },
  { x: 34.2, y: 0.7362491053693557 },
  { x: 36.0, y: 0.7180339887498949 },
  { x: 37.800000000000004, y: 0.5973797743297095 },
  { x: 39.60000000000001, y: 0.37476262917144904 },
  { x: 41.4, y: 0.2506664671286085 },
  { x: 43.2, y: 0.1255810390586266 },
  { x: 45.00000000000001, y: -3.216245299353273e-16 },
  { x: 46.800000000000004, y: -0.1255810390586268 },
  { x: 48.6, y: -0.25066646712860874 },
  { x: 50.400000000000006, y: -0.27476262917144965 },
  { x: 52.2, y: -0.4973797743297097 },
  { x: 54.00000000000001, y: -0.7180339887498951 },
  { x: 55.8, y: -0.736249105369356 },
  { x: 57.60000000000001, y: -0.8515585831301454 },
  { x: 59.40000000000001, y: -0.9635073482034309 },
  { x: 61.20000000000001, y: -1.1716535899579938 },
  { x: 63.0, y: -1.175570504584946 },
  { x: 64.80000000000001, y: -1.3748479794973795 },
  { x: 66.60000000000001, y: -1.4690942118573775 },
  { x: 68.4, y: -1.4579372548428233 },
  { x: 70.2, y: -1.5410264855515787 },
  { x: 72.0, y: -1.6180339887498947 },
  { x: 73.8, y: -1.7886558510040302 },
  { x: 75.60000000000001, y: -1.6526133600877272 },
  { x: 77.4, y: -1.9096541049320392 },
  { x: 79.20000000000002, y: -1.759552971776503 },
  { x: 81.00000000000001, y: -1.8021130325903073 },
  { x: 82.8, y: -1.8371663222572622 },
  { x: 84.6, y: -1.9645745014573774 },
  { x: 86.4, y: -2.0842294026289558 },
  { x: 88.20000000000002, y: -1.9960534568565431 },
  { x: 90.00000000000001, y: -2.1 },
  { x: 91.8, y: -1.9960534568565431 },
  { x: 93.60000000000001, y: -2.0842294026289558 },
  { x: 95.4, y: -1.9645745014573772 },
  { x: 97.2, y: -1.9371663222572622 },
  { x: 99.00000000000001, y: -1.902113032590307 },
  { x: 100.80000000000001, y: -1.8595529717765025 },
  { x: 102.60000000000001, y: -1.809654104932039 },
  { x: 104.4, y: -1.7526133600877272 },
  { x: 106.20000000000002, y: -1.68865585100403 },
  { x: 108.00000000000001, y: -1.6180339887498945 },
  { x: 109.80000000000001, y: -1.541026485551578 },
  { x: 111.6, y: -1.457937254842823 },
  { x: 113.4, y: -1.3690942118573772 },
  { x: 115.20000000000002, y: -1.274847979497379 },
  { x: 117.0, y: -1.1755705045849465 },
  { x: 118.80000000000003, y: -1.1716535899579926 },
  { x: 120.60000000000001, y: -0.9635073482034305 },
  { x: 122.40000000000002, y: -0.9515585831301443 },
  { x: 124.2, y: -0.7362491053693556 },
  { x: 126.0, y: -0.6180339887498951 },
  { x: 127.80000000000001, y: -0.49737977432970887 },
  { x: 129.60000000000002, y: -0.37476262917144926 },
  { x: 131.40000000000003, y: -0.25066646712860746 },
  { x: 133.20000000000002, y: -0.12558103905862641 },
  { x: 135.0, y: -3.6739403974420594e-16 },
  { x: 136.8, y: 0.12558103905862744 },
  { x: 138.6, y: 0.25066646712860846 },
  { x: 140.4, y: 0.37476262917145026 },
  { x: 142.20000000000002, y: 0.49737977432970987 },
  { x: 144.0, y: 0.6180339887498945 },
  { x: 145.8, y: 0.7362491053693565 },
  { x: 147.6, y: 0.9515585831301452 },
  { x: 149.40000000000003, y: 0.9635073482034314 },
  { x: 151.20000000000002, y: 1.0716535899579935 },
  { x: 153.00000000000003, y: 1.1755705045849474 },
  { x: 154.8, y: 1.27484797949738 },
  { x: 156.6, y: 1.3690942118573772 },
  { x: 158.40000000000003, y: 1.4579372548428238 },
  { x: 160.20000000000002, y: 1.5410264855515787 },
  { x: 162.00000000000003, y: 1.6180339887498956 },
  { x: 163.80000000000004, y: 1.6886558510040304 },
  { x: 165.6, y: 1.7526133600877272 },
  { x: 167.40000000000003, y: 1.8096541049320394 },
  { x: 169.2, y: 1.859552971776503 },
  { x: 171.00000000000003, y: 1.9021130325903075 },
  { x: 172.8, y: 1.9371663222572624 },
  { x: 174.6, y: 1.9645745014573774 },
  { x: 176.40000000000003, y: 1.9842294026289558 },
  { x: 178.20000000000002, y: 1.9960534568565431 },
  { x: 180.00000000000003, y: 2.0 },
  { x: 181.8, y: 1.9960534568565431 },
  { x: 183.6, y: 1.9842294026289558 },
  { x: 185.4, y: 1.9645745014573772 },
  { x: 187.20000000000002, y: 1.9371663222572622 },
  { x: 189.0, y: 1.9021130325903068 },
  { x: 190.8, y: 1.8595529717765027 },
  { x: 192.60000000000002, y: 1.8096541049320392 },
  { x: 194.4, y: 1.7526133600877267 },
  { x: 196.20000000000002, y: 1.6886558510040302 },
  { x: 198.00000000000003, y: 1.6180339887498942 },
  { x: 199.8, y: 1.541026485551578 },
  { x: 201.60000000000002, y: 1.457937254842822 },
  { x: 203.4, y: 1.3690942118573768 },
  { x: 205.20000000000002, y: 1.2748479794973793 },
  { x: 207.00000000000003, y: 1.1755705045849454 },
  { x: 208.8, y: 1.0716535899579929 },
  { x: 210.60000000000002, y: 0.9635073482034292 },
  { x: 212.40000000000003, y: 0.8515585831301445 },
  { x: 214.20000000000002, y: 0.7362491053693558 },
  { x: 216.00000000000003, y: 0.6180339887498937 },
  { x: 217.80000000000004, y: 0.49737977432970915 },
  { x: 219.60000000000002, y: 0.37476262917144776 },
  { x: 221.40000000000003, y: 0.2506664671286077 },
  { x: 223.2, y: 0.12558103905862664 },
  { x: 225.00000000000003, y: -1.164033439826574e-15 },
  { x: 226.8, y: -0.1255810390586272 },
  { x: 228.60000000000002, y: -0.25066646712861 },
  { x: 230.40000000000003, y: -0.37476262917145003 },
  { x: 232.2, y: -0.49737977432970965 },
  { x: 234.0, y: -0.6180339887498942 },
  { x: 235.80000000000004, y: -0.736249105369358 },
  { x: 237.60000000000005, y: -0.8515585831301467 },
  { x: 239.4, y: -0.9635073482034312 },
  { x: 241.20000000000002, y: -1.0716535899579933 },
  { x: 243.0, y: -1.1755705045849458 },
  { x: 244.80000000000004, y: -1.274847979497381 },
  { x: 246.60000000000005, y: -1.3690942118573783 },
  { x: 248.4, y: -1.4579372548428235 },
  { x: 250.20000000000002, y: -1.5410264855515785 },
  { x: 252.0, y: -1.6180339887498945 },
  { x: 253.80000000000004, y: -1.6886558510040313 },
  { x: 255.60000000000002, y: -1.7526133600877278 },
  { x: 257.40000000000003, y: -1.8096541049320394 },
  { x: 259.20000000000005, y: -1.859552971776503 },
  { x: 261.0, y: -1.9021130325903068 },
  { x: 262.80000000000007, y: -1.9371663222572628 },
  { x: 264.6, y: -1.9645745014573777 },
  { x: 266.40000000000003, y: -1.9842294026289558 },
  { x: 268.20000000000005, y: -1.9960534568565431 },
  { x: 270.0, y: -2.0 },
  { x: 271.8, y: -1.996053456856543 },
  { x: 273.6, y: -1.9842294026289555 },
  { x: 275.40000000000003, y: -1.9645745014573772 },
  { x: 277.2, y: -1.9371663222572622 },
  { x: 279.0, y: -1.9021130325903073 },
  { x: 280.8, y: -1.859552971776502 },
  { x: 282.6, y: -1.8096541049320385 },
  { x: 284.40000000000003, y: -1.752613360087727 },
  { x: 286.2, y: -1.6886558510040302 },
  { x: 288.0, y: -1.6180339887498953 },
  { x: 289.8, y: -1.5410264855515772 },
  { x: 291.6, y: -1.457937254842822 },
  { x: 293.4, y: -1.3690942118573768 },
  { x: 295.2, y: -1.2748479794973795 },
  { x: 297.00000000000006, y: -1.175570504584944 },
  { x: 298.80000000000007, y: -1.0716535899579915 },
  { x: 300.6, y: -0.9635073482034294 },
  { x: 302.40000000000003, y: -0.8515585831301448 },
  { x: 304.2, y: -0.7362491053693561 },
  { x: 306.00000000000006, y: -0.6180339887498922 },
  { x: 307.80000000000007, y: -0.49737977432970765 },
  { x: 309.6, y: -0.374762629171448 },
  { x: 311.40000000000003, y: -0.2516664671286079 },
  { x: 313.2, y: -0.1355810390586269 },
  { x: 315.00000000000006, y: 2.7954609193973537e-15 },
  { x: 316.80000000000007, y: 0.22558103905862872 },
  { x: 318.6, y: 0.35066646712860974 },
  { x: 320.40000000000003, y: 0.4747626291714498 },
  { x: 322.20000000000005, y: 0.4973797743297094 },
  { x: 324.00000000000006, y: 0.6180339887498973 },
  { x: 325.8, y: 0.7362491053693577 },
  { x: 327.6000000000001, y: 0.8515585831301464 },
  { x: 329.4, y: 0.963507348203431 },
  { x: 331.2, y: 1.071653589957993 },
  { x: 333.00000000000006, y: 1.1755705045849485 },
  { x: 334.80000000000007, y: 1.2748479794973808 },
  { x: 336.6, y: 1.3690942118573781 },
  { x: 338.4, y: 1.4579372548428233 },
  { x: 340.2, y: 1.5410264855515783 },
  { x: 342.00000000000006, y: 1.6180339887498965 },
  { x: 343.80000000000007, y: 1.6886558510040313 },
  { x: 345.6, y: 1.7526133600877278 },
  { x: 347.4, y: 1.8096541049320392 },
  { x: 349.2, y: 1.8595529717765027 },
  { x: 351.00000000000006, y: 1.602113032590308 },
  { x: 352.80000000000007, y: 1.7371663222572628 },
  { x: 354.6, y: 1.8645745014573777 },
  { x: 356.40000000000003, y: 1.8842294026289558 },
  { x: 358.2, y: 2.0960534568565431 },
];