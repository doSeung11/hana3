//The main of this directory

import {getLastDate} from '.dateutils.js';
import '../arrayutils.js';

export {getLastDate}; //간접 export

//date.js에서 getLastDate를 import했는데,
//index.js를 가져와서
//arrayutils 안 가져와도 돼