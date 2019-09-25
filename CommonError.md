-------------------------------
TypeError: undefined is not an object (evaluating 'axios__WEBPACK_IMPORTED_MODULE_1__["axios"].get')

Cause: wrong import of axios
import {axios} from 'axios';

Solution
import axios from 'axios';
