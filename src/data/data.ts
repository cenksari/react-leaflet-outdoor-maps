import { type LatLngExpression } from 'leaflet';

import { type ILegend } from './legend';

interface IBounds {
  southWest: number[];
  northEast: number[];
}

export interface IData {
  id: number;
  name: string;
  topLogo: string;
  maxBounds: IBounds;
  bottomLogo: string;
  defaultZoom: number;
  locations: ILocation[];
  centerCoords: LatLngExpression;
}

export interface ILocation {
  id: number;
  title: string;
  shape: string;
  category: ILegend;
  description: string;
  shapeCoords: LatLngExpression[];
}

const data: IData = {
  id: 1,
  name: '6 Hours of Fuji',
  topLogo: 'images/fuji-logo.png',
  bottomLogo: 'images/fia-logo.png',
  defaultZoom: 16,
  centerCoords: [35.370002237772944, 138.92797321568233],
  maxBounds: {
    northEast: [35.38128090185919, 138.91165280626322],
    southWest: [35.35359620534039, 138.94354833021418],
  },
  locations: [
    {
      id: 1,
      shape: 'polygon',
      shapeCoords: [
        [35.371559004199675, 138.92525211372896],
        [35.374275665054974, 138.9294636864413],
        [35.37407880864598, 138.92968901899408],
        [35.37131839375751, 138.9254559860386],
      ],
      title: 'Main area',
      category: {
        id: 5,
        name: 'Event area',
        icon: 'celebration',
        color: 'navy',
      },
      description:
        'Lorem ipsum dolor sit amet consecteteur adipiscing elit. Vestibulum lacinia est euismod,',
    },
    {
      id: 2,
      shape: 'polygon',
      shapeCoords: [
        [35.37035594481567, 138.92624464997328],
        [35.370784673489126, 138.92680261629442],
        [35.37058343378313, 138.92708159945497],
        [35.37029907247362, 138.9270386789687],
        [35.36999721091032, 138.92660947410636],
      ],
      title: 'Car parking 1',
      category: {
        id: 1,
        name: 'Car parking',
        icon: 'local_parking',
        color: 'purple',
      },
      description:
        'Lorem ipsum dolor sit amet consecteteur adipiscing elit. Vestibulum lacinia est euismod,',
    },
    {
      id: 3,
      shape: 'polygon',
      shapeCoords: [
        [35.37676913800418, 138.93284367473277],
        [35.376546040931395, 138.9330690072855],
        [35.37587237151731, 138.93200672525106],
        [35.3760998449354, 138.93177066257675],
      ],
      title: 'Car parking 2',
      category: {
        id: 1,
        name: 'Car parking',
        icon: 'local_parking',
        color: 'purple',
      },
      description:
        'Lorem ipsum dolor sit amet consecteteur adipiscing elit. Vestibulum lacinia est euismod,',
    },
    {
      id: 4,
      shape: 'polygon',
      shapeCoords: [
        [35.375986108306506, 138.92944759125896],
        [35.377455923160014, 138.93165799630037],
        [35.37740780464526, 138.93203355055496],
        [35.37597735932842, 138.9298446057567],
        [35.37597735932842, 138.92977485996659],
        [35.37585487353551, 138.92958708283925],
      ],
      title: 'Car parking 3',
      category: {
        id: 1,
        name: 'Car parking',
        icon: 'local_parking',
        color: 'purple',
      },
      description:
        'Lorem ipsum dolor sit amet consecteteur adipiscing elit. Vestibulum lacinia est euismod,',
    },
    {
      id: 5,
      shape: 'polygon',
      shapeCoords: [
        [35.37708847195658, 138.92846042007542],
        [35.377700889699334, 138.92936711534725],
        [35.37753028808092, 138.92953343223144],
        [35.376922243481516, 138.92862673695961],
      ],
      title: 'Car parking 4',
      category: {
        id: 1,
        name: 'Car parking',
        icon: 'local_parking',
        color: 'purple',
      },
      description:
        'Lorem ipsum dolor sit amet consecteteur adipiscing elit. Vestibulum lacinia est euismod,',
    },
    {
      id: 6,
      shape: 'polygon',
      shapeCoords: [
        [35.37021595128622, 138.92587446077945],
        [35.36953785419136, 138.9265611885593],
        [35.36924036463574, 138.92606760296752],
        [35.369756595812156, 138.92556328725422],
        [35.36980909371293, 138.9256598583483],
        [35.3699709620254, 138.92549890652484],
      ],
      title: 'Car parking 5',
      category: {
        id: 1,
        name: 'Car parking',
        icon: 'local_parking',
        color: 'purple',
      },
      description:
        'Lorem ipsum dolor sit amet consecteteur adipiscing elit. Vestibulum lacinia est euismod,',
    },
    {
      id: 7,
      shape: 'polygon',
      shapeCoords: [
        [35.368916624755826, 138.9242220220592],
        [35.369161617216896, 138.924592211253],
        [35.36896474833364, 138.92482290886656],
        [35.369021621615914, 138.92491411489985],
        [35.3683872635061, 138.92556328725422],
        [35.36865413200809, 138.92606760296752],
        [35.36861475802229, 138.9263197608242],
        [35.368426637602866, 138.92632512588497],
        [35.36801977101013, 138.92603004754207],
        [35.367884148356815, 138.92557401737577],
        [35.368050395448705, 138.92498922575075],
        [35.368037270690735, 138.92476389319802],
        [35.36812914395167, 138.9247585281372],
        [35.36816414326165, 138.9249516703253],
        [35.36826039128589, 138.92511262214867],
        [35.36881600263677, 138.92451173534133],
        [35.36872850503995, 138.92435614857868],
      ],
      title: 'Car parking 6',
      category: {
        id: 1,
        name: 'Car parking',
        icon: 'local_parking',
        color: 'purple',
      },
      description:
        'Lorem ipsum dolor sit amet consecteteur adipiscing elit. Vestibulum lacinia est euismod,',
    },
    {
      id: 8,
      shape: 'polygon',
      shapeCoords: [
        [35.37025523438974, 138.92332615460697],
        [35.370508972359595, 138.9237017088616],
        [35.370452100125384, 138.92376072453013],
        [35.37121768453253, 138.9249142125979],
        [35.371173937047736, 138.9249678632057],
        [35.37130517943095, 138.9251717355153],
        [35.37147141947662, 138.92489275235474],
        [35.37080645723941, 138.92365878837535],
        [35.370762709531746, 138.92333151966778],
        [35.37056584455374, 138.92298279071704],
      ],
      title: 'Car parking 7',
      category: {
        id: 1,
        name: 'Car parking',
        icon: 'local_parking',
        color: 'purple',
      },
      description:
        'Lorem ipsum dolor sit amet consecteteur adipiscing elit. Vestibulum lacinia est euismod,',
    },
    {
      id: 9,
      shape: 'polygon',
      shapeCoords: [
        [35.368273425904185, 138.9190716614084],
        [35.367989056456274, 138.91934527950818],
        [35.36861466791929, 138.92025733984082],
        [35.36883341204199, 138.92004273740957],
        [35.36873278981919, 138.91976375424903],
      ],
      title: 'Car parking 8',
      category: {
        id: 1,
        name: 'Car parking',
        icon: 'local_parking',
        color: 'purple',
      },
      description:
        'Lorem ipsum dolor sit amet consecteteur adipiscing elit. Vestibulum lacinia est euismod,',
    },
    {
      id: 10,
      shape: 'polygon',
      shapeCoords: [
        [35.36814655350505, 138.928374676801],
        [35.36838717340287, 138.92835858161865],
        [35.36851842031751, 138.92854635874596],
        [35.36849217095166, 138.92886826239277],
        [35.3681334287627, 138.92987689381943],
        [35.36801968090647, 138.9298447034547],
        [35.36750343862128, 138.93005930588595],
        [35.367087817433315, 138.9300914962506],
        [35.3665409441888, 138.92939403834922],
        [35.36652781918539, 138.92912042024943],
        [35.366654694128826, 138.92877169129872],
        [35.366698444063076, 138.92818153461292],
        [35.36791468274307, 138.9283800418618],
        [35.367954057070364, 138.92848197801658],
        [35.36808967960621, 138.92849807319894],
      ],
      title: 'Car parking 9',
      category: {
        id: 1,
        name: 'Car parking',
        icon: 'local_parking',
        color: 'purple',
      },
      description:
        'Lorem ipsum dolor sit amet consecteteur adipiscing elit. Vestibulum lacinia est euismod,',
    },
    {
      id: 11,
      shape: 'polygon',
      shapeCoords: [
        [35.37004961855321, 138.93449084609028],
        [35.368776538627124, 138.93436208463152],
        [35.368877160795385, 138.93489859070954],
        [35.36999712080887, 138.93498443168204],
      ],
      title: 'Car parking 10',
      category: {
        id: 1,
        name: 'Car parking',
        icon: 'local_parking',
        color: 'purple',
      },
      description:
        'Lorem ipsum dolor sit amet consecteteur adipiscing elit. Vestibulum lacinia est euismod,',
    },
    {
      id: 12,
      shape: 'polygon',
      shapeCoords: [
        [35.37043022617846, 138.93505417747215],
        [35.37069708792577, 138.93504344735064],
        [35.37282320081931, 138.93572481006964],
        [35.37288007138272, 138.9358750317715],
        [35.3729806884352, 138.93638471254562],
        [35.37295006586728, 138.93727531263514],
        [35.37271383423858, 138.93737724878991],
        [35.37222387013765, 138.9374094391546],
        [35.37193076519101, 138.93729140781744],
        [35.37178639967677, 138.93733432830368],
        [35.3715720382853, 138.93720556684497],
        [35.37161141082846, 138.93709826562934],
        [35.37052647150052, 138.9357730956167],
      ],
      title: 'Car parking 11',
      category: {
        id: 1,
        name: 'Car parking',
        icon: 'local_parking',
        color: 'purple',
      },
      description:
        'Lorem ipsum dolor sit amet consecteteur adipiscing elit. Vestibulum lacinia est euismod,',
    },
    {
      id: 13,
      shape: 'polygon',
      shapeCoords: [
        [35.37190889164484, 138.92511808490752],
        [35.37266133822718, 138.92481764150384],
        [35.37356688963778, 138.92614817657727],
        [35.373129426456885, 138.92658274650043],
        [35.37296318982639, 138.92629839827913],
        [35.37268321156944, 138.92663103204748],
      ],
      title: 'Fan area',
      category: {
        id: 5,
        name: 'Event area',
        icon: 'celebration',
        color: 'navy',
      },
      description:
        'Lorem ipsum dolor sit amet consecteteur adipiscing elit. Vestibulum lacinia est euismod,',
    },
    {
      id: 14,
      shape: 'polygon',
      shapeCoords: [
        [35.37297631378335, 138.92646471516332],
        [35.373098803945425, 138.92663639710824],
        [35.37285382343535, 138.92687245978257],
        [35.37274445689612, 138.92670614289838],
      ],
      title: 'Toilets 1',
      category: {
        id: 3,
        name: 'Toilets',
        icon: 'follow_the_signs',
        color: 'green',
      },
      description:
        'Lorem ipsum dolor sit amet consecteteur adipiscing elit. Vestibulum lacinia est euismod,',
    },
    {
      id: 15,
      shape: 'polygon',
      shapeCoords: [
        [35.3733962792793, 138.93142203132408],
        [35.373269414932786, 138.93158298314748],
        [35.373356907606905, 138.93166882411995],
        [35.37346627331613, 138.93150250723576],
      ],
      title: 'Toilets 2',
      category: {
        id: 3,
        name: 'Toilets',
        icon: 'follow_the_signs',
        color: 'green',
      },
      description:
        'Lorem ipsum dolor sit amet consecteteur adipiscing elit. Vestibulum lacinia est euismod,',
    },
    {
      id: 16,
      shape: 'polygon',
      shapeCoords: [
        [35.37079781431877, 138.9301933167104],
        [35.37071469364502, 138.93024160225744],
        [35.370802189088714, 138.93042937938472],
        [35.37088093490696, 138.93037036371612],
      ],
      title: 'Toilets 3',
      category: {
        id: 3,
        name: 'Toilets',
        icon: 'follow_the_signs',
        color: 'green',
      },
      description:
        'Lorem ipsum dolor sit amet consecteteur adipiscing elit. Vestibulum lacinia est euismod,',
    },
    {
      id: 17,
      shape: 'polygon',
      shapeCoords: [
        [35.37154589653052, 138.92829408519424],
        [35.37113467090973, 138.92867500450967],
        [35.37126591335676, 138.92888960694083],
        [35.37165963941742, 138.92850332256467],
      ],
      title: 'Restaurant 1',
      category: {
        id: 2,
        name: 'Restaurant',
        icon: 'restaurant',
        color: 'yellow',
      },
      description:
        'Lorem ipsum dolor sit amet consecteteur adipiscing elit. Vestibulum lacinia est euismod,',
    },
    {
      id: 18,
      shape: 'polygon',
      shapeCoords: [
        [35.37373315155337, 138.9300216456922],
        [35.37202266054937, 138.92745714663928],
        [35.37201391114157, 138.92733911530217],
        [35.37186954577606, 138.92739813097077],
        [35.37177767677264, 138.9275698129157],
        [35.37185204692634, 138.92763955870586],
        [35.37347942372001, 138.93007529629998],
        [35.373505671463924, 138.93027916860962],
        [35.37368503081869, 138.93020942281947],
      ],
      title: 'Media area',
      category: {
        id: 4,
        name: 'Media area',
        icon: 'videocam',
        color: 'orange',
      },
      description:
        'Lorem ipsum dolor sit amet consecteteur adipiscing elit. Vestibulum lacinia est euismod,',
    },
    {
      id: 19,
      shape: 'polygon',
      shapeCoords: [
        [35.37182593729761, 138.92798825423353],
        [35.37338769519948, 138.93039716652376],
        [35.373295827924196, 138.93069760992745],
        [35.37296335500631, 138.93048300749626],
        [35.37302460012043, 138.93019329421415],
        [35.372403397522234, 138.92967824837925],
        [35.372289655683566, 138.92984993032422],
        [35.37194405449788, 138.92952802667742],
        [35.37173844296375, 138.92943682064416],
        [35.37155032982473, 138.92949583631275],
        [35.37148908359182, 138.929415360401],
        [35.371646573811105, 138.92927586882072],
        [35.37139721415534, 138.92889494950538],
        [35.371720944085595, 138.9285354904331],
      ],
      title: 'Paddock',
      category: {
        id: 5,
        name: 'Event area',
        icon: 'celebration',
        color: 'navy',
      },
      description:
        'Lorem ipsum dolor sit amet consecteteur adipiscing elit. Vestibulum lacinia est euismod,',
    },
    {
      id: 20,
      shape: 'polygon',
      shapeCoords: [
        [35.36658966087419, 138.92367538233188],
        [35.36620466012015, 138.92420115828835],
        [35.365894033173376, 138.9235680811163],
        [35.365898408209084, 138.92262919547977],
        [35.36613465978576, 138.9226184653582],
      ],
      title: 'Car parking 12',
      category: {
        id: 1,
        name: 'Car parking',
        icon: 'local_parking',
        color: 'purple',
      },
      description:
        'Lorem ipsum dolor sit amet consecteteur adipiscing elit. Vestibulum lacinia est euismod,',
    },
    {
      id: 21,
      shape: 'polygon',
      shapeCoords: [
        [35.36610411421385, 138.92420226256033],
        [35.36593348807992, 138.92435252797017],
        [35.36564036028992, 138.92450816000175],
        [35.36541723245271, 138.92420762918212],
        [35.36566661058317, 138.92405736377228],
        [35.36587661262182, 138.9237031667348],
      ],
      title: 'Car parking 13',
      category: {
        id: 1,
        name: 'Car parking',
        icon: 'local_parking',
        color: 'purple',
      },
      description:
        'Lorem ipsum dolor sit amet consecteteur adipiscing elit. Vestibulum lacinia est euismod,',
    },
    {
      id: 22,
      shape: 'polygon',
      shapeCoords: [
        [35.369354691930766, 138.92324700388357],
        [35.36882970843091, 138.92252250994335],
        [35.368571590291346, 138.92355290132502],
        [35.36870283690612, 138.9235260682161],
        [35.36883408330751, 138.92351533497256],
        [35.36897407923378, 138.92360120092104],
        [35.3691140749172, 138.92386953200997],
        [35.36928906918004, 138.92373536646548],
        [35.36922344637593, 138.9234992351072],
      ],
      title: 'Car parking 14',
      category: {
        id: 1,
        name: 'Car parking',
        icon: 'local_parking',
        color: 'purple',
      },
      description:
        'Lorem ipsum dolor sit amet consecteteur adipiscing elit. Vestibulum lacinia est euismod,',
    },
    {
      id: 23,
      shape: 'polygon',
      shapeCoords: [
        [35.366537229960244, 138.93126845724288],
        [35.366699104834076, 138.93159582117138],
        [35.36665097990549, 138.9316226542803],
        [35.3667559797127, 138.9319875845613],
        [35.366314104602026, 138.93233104835522],
        [35.36603410327992, 138.93195001820885],
        [35.3660691034983, 138.9318802521257],
        [35.36603410327992, 138.931799752799],
        [35.36637097975189, 138.93135432319136],
      ],
      title: 'Car parking 15',
      category: {
        id: 1,
        name: 'Car parking',
        icon: 'local_parking',
        color: 'purple',
      },
      description:
        'Lorem ipsum dolor sit amet consecteteur adipiscing elit. Vestibulum lacinia est euismod,',
    },
    {
      id: 24,
      shape: 'polygon',
      shapeCoords: [
        [35.37006340372743, 138.93511632505874],
        [35.370037154864015, 138.93540075601302],
        [35.3687859491398, 138.93530415682102],
        [35.36880782353233, 138.93496069302716],
      ],
      title: 'Car parking 16',
      category: {
        id: 1,
        name: 'Car parking',
        icon: 'local_parking',
        color: 'purple',
      },
      description:
        'Lorem ipsum dolor sit amet consecteteur adipiscing elit. Vestibulum lacinia est euismod,',
    },
    {
      id: 25,
      shape: 'polygon',
      shapeCoords: [
        [35.371642694634836, 138.93749373850702],
        [35.370426512128866, 138.935985717787],
        [35.37059275398437, 138.93710197511714],
        [35.370557755727454, 138.93766547040397],
        [35.370855240427474, 138.93807870028095],
        [35.370925236668135, 138.93800893419785],
        [35.37105647945576, 138.93810016676812],
      ],
      title: 'Car parking 17',
      category: {
        id: 1,
        name: 'Car parking',
        icon: 'local_parking',
        color: 'purple',
      },
      description:
        'Lorem ipsum dolor sit amet consecteteur adipiscing elit. Vestibulum lacinia est euismod,',
    },
    {
      id: 26,
      shape: 'polygon',
      shapeCoords: [
        [35.370177148703576, 138.9330770087825],
        [35.370010905992075, 138.93357610460802],
        [35.36994090895844, 138.93433279827894],
        [35.36886907179984, 138.9342898653047],
        [35.36861970356284, 138.93357073798623],
        [35.3685759546699, 138.9333024068973],
        [35.368593454229924, 138.93232568173343],
        [35.368698451510404, 138.93224518240675],
        [35.3688034486543, 138.93226128227204],
        [35.36898719332742, 138.9324652138997],
        [35.369096564958085, 138.93241691430367],
        [35.369691544032875, 138.93276574471932],
        [35.36965654538518, 138.9330340758083],
        [35.36983591329421, 138.93309847526967],
        [35.36989278596261, 138.9329857762123],
      ],
      title: 'Car parking 18',
      category: {
        id: 1,
        name: 'Car parking',
        icon: 'local_parking',
        color: 'purple',
      },
      description:
        'Lorem ipsum dolor sit amet consecteteur adipiscing elit. Vestibulum lacinia est euismod,',
    },
    {
      id: 27,
      shape: 'polygon',
      shapeCoords: [
        [35.37865006845416, 138.93598490019585],
        [35.37790642648104, 138.93643032980358],
        [35.37791080086565, 138.93582926816427],
        [35.37820388409271, 138.93555557045352],
        [35.37853196106918, 138.9357648687029],
      ],
      title: 'Car parking 19',
      category: {
        id: 1,
        name: 'Car parking',
        icon: 'local_parking',
        color: 'purple',
      },
      description:
        'Lorem ipsum dolor sit amet consecteteur adipiscing elit. Vestibulum lacinia est euismod,',
    },
    {
      id: 28,
      shape: 'polygon',
      shapeCoords: [
        [35.37856258151893, 138.93624249804128],
        [35.37795017031623, 138.9365805952134],
        [35.377941421551114, 138.93677916021923],
        [35.378147017281165, 138.93685429292415],
        [35.378457597071424, 138.9366074283223],
        [35.37856695586792, 138.93643569642535],
      ],
      title: 'Car parking 20',
      category: {
        id: 1,
        name: 'Car parking',
        icon: 'local_parking',
        color: 'purple',
      },
      description:
        'Lorem ipsum dolor sit amet consecteteur adipiscing elit. Vestibulum lacinia est euismod,',
    },
    {
      id: 29,
      shape: 'polygon',
      shapeCoords: [
        [35.37604729156397, 138.93633909723331],
        [35.376073538472646, 138.93643032980358],
        [35.37589418442651, 138.93661816156583],
        [35.37554422416427, 138.936736227245],
        [35.37552235159746, 138.93665572791832],
        [35.374183739226545, 138.93699919171218],
        [35.3741924883991, 138.93691869238552],
        [35.37469118966672, 138.93677379359747],
        [35.37469118966672, 138.93668256102723],
      ],
      title: 'Car parking 21',
      category: {
        id: 1,
        name: 'Car parking',
        icon: 'local_parking',
        color: 'purple',
      },
      description:
        'Lorem ipsum dolor sit amet consecteteur adipiscing elit. Vestibulum lacinia est euismod,',
    },
    {
      id: 30,
      shape: 'polygon',
      shapeCoords: [
        [35.36591614863228, 138.92246495802354],
        [35.36588989842018, 138.92270108938186],
        [35.36597739909398, 138.9226903561383],
        [35.36600364927765, 138.92249179113242],
      ],
      title: 'Toilets 4',
      category: {
        id: 3,
        name: 'Toilets',
        icon: 'follow_the_signs',
        color: 'green',
      },
      description:
        'Lorem ipsum dolor sit amet consecteteur adipiscing elit. Vestibulum lacinia est euismod,',
    },
    {
      id: 31,
      shape: 'polygon',
      shapeCoords: [
        [35.37016408385838, 138.92603863008128],
        [35.37004596405313, 138.9261566957604],
        [35.370111586188514, 138.9262371950871],
        [35.37021220669246, 138.92610302954262],
      ],
      title: 'Toilets 5',
      category: {
        id: 3,
        name: 'Toilets',
        icon: 'follow_the_signs',
        color: 'green',
      },
      description:
        'Lorem ipsum dolor sit amet consecteteur adipiscing elit. Vestibulum lacinia est euismod,',
    },
    {
      id: 32,
      shape: 'polygon',
      shapeCoords: [
        [35.368658828761966, 138.9281553956946],
        [35.368663203647834, 138.9283378608351],
        [35.3685888305558, 138.92837006056575],
        [35.36857133099479, 138.92813929582925],
      ],
      title: 'Toilets 6',
      category: {
        id: 3,
        name: 'Toilets',
        icon: 'follow_the_signs',
        color: 'green',
      },
      description:
        'Lorem ipsum dolor sit amet consecteteur adipiscing elit. Vestibulum lacinia est euismod,',
    },
    {
      id: 33,
      shape: 'polygon',
      shapeCoords: [
        [35.37592443348523, 138.93150744955958],
        [35.375867565067196, 138.93158258226447],
        [35.376020672255194, 138.93182408024455],
        [35.376086289532566, 138.93176504740498],
      ],
      title: 'Toilets 7',
      category: {
        id: 3,
        name: 'Toilets',
        icon: 'follow_the_signs',
        color: 'green',
      },
      description:
        'Lorem ipsum dolor sit amet consecteteur adipiscing elit. Vestibulum lacinia est euismod,',
    },
    {
      id: 34,
      shape: 'polygon',
      shapeCoords: [
        [35.37630501340503, 138.92899587056678],
        [35.37623502183035, 138.9290441701628],
        [35.37613440883536, 138.92889390475295],
        [35.37620440049732, 138.92882950529165],
      ],
      title: 'Toilets 8',
      category: {
        id: 3,
        name: 'Toilets',
        icon: 'follow_the_signs',
        color: 'green',
      },
      description:
        'Lorem ipsum dolor sit amet consecteteur adipiscing elit. Vestibulum lacinia est euismod,',
    },
    {
      id: 35,
      shape: 'polygon',
      shapeCoords: [
        [35.37463832254362, 138.93705653647953],
        [35.37435835009818, 138.93712630256263],
        [35.374384597556194, 138.93723363499822],
        [35.374668944470926, 138.93718533540223],
      ],
      title: 'Toilets 9',
      category: {
        id: 3,
        name: 'Toilets',
        icon: 'follow_the_signs',
        color: 'green',
      },
      description:
        'Lorem ipsum dolor sit amet consecteteur adipiscing elit. Vestibulum lacinia est euismod,',
    },
    {
      id: 36,
      shape: 'polygon',
      shapeCoords: [
        [35.369503022666294, 138.927838048791],
        [35.36953364654211, 138.9280902800146],
        [35.36918365869757, 138.92825664528974],
        [35.368921166818204, 138.92844447705204],
        [35.36864992431277, 138.92884697368547],
        [35.36870679781686, 138.9284283771867],
        [35.36869367316563, 138.9281224797453],
      ],
      title: 'Car parking 22',
      category: {
        id: 1,
        name: 'Car parking',
        icon: 'local_parking',
        color: 'purple',
      },
      description:
        'Lorem ipsum dolor sit amet consecteteur adipiscing elit. Vestibulum lacinia est euismod,',
    },
    {
      id: 37,
      shape: 'polygon',
      shapeCoords: [
        [35.36587210192523, 138.92049858612887],
        [35.365819601463855, 138.92059518532085],
        [35.36570147530091, 138.92047175301997],
        [35.3657364756635, 138.92038052044973],
      ],
      title: 'Toilets 10',
      category: {
        id: 3,
        name: 'Toilets',
        icon: 'follow_the_signs',
        color: 'green',
      },
      description:
        'Lorem ipsum dolor sit amet consecteteur adipiscing elit. Vestibulum lacinia est euismod,',
    },
    {
      id: 38,
      shape: 'polygon',
      shapeCoords: [
        [35.37033451634248, 138.92263986821885],
        [35.37019889757849, 138.9227794003851],
        [35.3701245259015, 138.92270963430195],
        [35.3700282801001, 138.92266133470596],
        [35.36990578527782, 138.9226559680842],
        [35.36985328743992, 138.9227042676802],
        [35.3695907977383, 138.92227493793783],
        [35.36963892091417, 138.92221590509828],
        [35.36973079235206, 138.92230713766853],
        [35.36989266082155, 138.92235543726454],
        [35.3701551495415, 138.9223608038863],
        [35.370146399931244, 138.92244130321302],
        [35.37021639678664, 138.92246276970013],
      ],
      title: 'Car parking 23',
      category: {
        id: 1,
        name: 'Car parking',
        icon: 'local_parking',
        color: 'purple',
      },
      description:
        'Lorem ipsum dolor sit amet consecteteur adipiscing elit. Vestibulum lacinia est euismod,',
    },
    {
      id: 39,
      shape: 'polygon',
      shapeCoords: [
        [35.373230578780124, 138.9274805610639],
        [35.37404863197401, 138.92874171718208],
        [35.374101127083, 138.92866121785542],
        [35.37403113359678, 138.92850558582379],
        [35.373978638442274, 138.92854851879804],
        [35.37393926705397, 138.92847338609312],
        [35.373983013039776, 138.92844118636245],
        [35.37388677183972, 138.92829628757443],
        [35.373847400406575, 138.92833922054862],
        [35.37379053052485, 138.92826408784373],
        [35.37382552737991, 138.92821042162595],
        [35.373751159044794, 138.928086989325],
        [35.373698663708154, 138.92811918905568],
        [35.373663666798095, 138.92804942297252],
        [35.37368991448206, 138.92800648999832],
        [35.37361554602199, 138.92788305769736],
        [35.373571799836974, 138.92790989080626],
        [35.37351055513813, 138.927818658236],
        [35.37354555211461, 138.92778645850535],
        [35.37347118352149, 138.9276683928262],
        [35.37343618651278, 138.9276952259351],
        [35.37337931634124, 138.92760399336487],
        [35.37340993874629, 138.92756106039062],
        [35.3733311953956, 138.9274107949808],
      ],
      title: 'Restaurant 2',
      category: {
        id: 2,
        name: 'Restaurant',
        icon: 'restaurant',
        color: 'yellow',
      },
      description:
        'Lorem ipsum dolor sit amet consecteteur adipiscing elit. Vestibulum lacinia est euismod,',
    },
    {
      id: 40,
      shape: 'polygon',
      shapeCoords: [
        [35.37797140707246, 138.92897581447943],
        [35.37780955480637, 138.9291046134022],
        [35.3771796401938, 138.92794005647596],
        [35.37722775884464, 138.92787565701465],
        [35.37758208620796, 138.9283103533788],
        [35.37771331816992, 138.92828888689166],
      ],
      title: 'Car parking 24',
      category: {
        id: 1,
        name: 'Car parking',
        icon: 'local_parking',
        color: 'purple',
      },
      description:
        'Lorem ipsum dolor sit amet consecteteur adipiscing elit. Vestibulum lacinia est euismod,',
    },
    {
      id: 41,
      shape: 'polygon',
      shapeCoords: [
        [35.37707023597182, 138.9360533660667],
        [35.37652780482404, 138.9359996998489],
        [35.376637166236016, 138.93619826485474],
        [35.37679464640887, 138.93621973134185],
        [35.3769040074592, 138.93628949742495],
        [35.37697399845362, 138.93637536337343],
        [35.37704398938733, 138.93655246189218],
        [35.377118354687894, 138.93654172864865],
      ],
      title: 'Car parking 25',
      category: {
        id: 1,
        name: 'Car parking',
        icon: 'local_parking',
        color: 'purple',
      },
      description:
        'Lorem ipsum dolor sit amet consecteteur adipiscing elit. Vestibulum lacinia est euismod,',
    },
    {
      id: 42,
      shape: 'polygon',
      shapeCoords: [
        [35.37484799491376, 138.9358655343044],
        [35.37490923859762, 138.93604799944492],
        [35.3748873658587, 138.9360855657974],
        [35.37490923859762, 138.93618216498942],
        [35.37426180301695, 138.9365256287833],
        [35.374226806351096, 138.93642366296947],
        [35.374226806351096, 138.93634316364282],
        [35.374296799667604, 138.93628949742495],
        [35.37431429798726, 138.93637536337343],
        [35.37436241834671, 138.93633243039923],
        [35.37427930134416, 138.93621973134185],
        [35.37461176884067, 138.9358655343044],
        [35.37466426358336, 138.93598896660535],
      ],
      title: 'Car parking 26',
      category: {
        id: 1,
        name: 'Car parking',
        icon: 'local_parking',
        color: 'purple',
      },
      description:
        'Lorem ipsum dolor sit amet consecteteur adipiscing elit. Vestibulum lacinia est euismod,',
    },
    {
      id: 43,
      shape: 'polygon',
      shapeCoords: [
        [35.37381121978395, 138.93632169715568],
        [35.37373685143566, 138.9363968298606],
        [35.373789346747465, 138.9364612293219],
        [35.373658108403966, 138.93663832784065],
        [35.37358811453348, 138.93654709527038],
        [35.37355749219606, 138.93660076148822],
        [35.373439377357165, 138.93641292972592],
        [35.37346125048854, 138.9363646301299],
        [35.3734262534755, 138.93632169715568],
        [35.37363623532595, 138.93612313214982],
        [35.37371060376696, 138.93613923201517],
      ],
      title: 'Car parking 27',
      category: {
        id: 1,
        name: 'Car parking',
        icon: 'local_parking',
        color: 'purple',
      },
      description:
        'Lorem ipsum dolor sit amet consecteteur adipiscing elit. Vestibulum lacinia est euismod,',
    },
    {
      id: 44,
      shape: 'polygon',
      shapeCoords: [
        [35.367757598513165, 138.91931871676042],
        [35.367617600477054, 138.91944751568315],
        [35.367346353591095, 138.91935628311288],
        [35.36727635424675, 138.91914698486346],
        [35.367516976738614, 138.9190396524279],
        [35.3675257266339, 138.91927578378622],
        [35.36762635036142, 138.9191684513506],
      ],
      title: 'Accreditation',
      category: {
        id: 5,
        name: 'Event area',
        icon: 'celebration',
        color: 'navy',
      },
      description:
        'Lorem ipsum dolor sit amet consecteteur adipiscing elit. Vestibulum lacinia est euismod,',
    },
  ],
};

export default data;
