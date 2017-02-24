/**
 * Created by JHJ on 2017. 2. 24..
 */
'use strict';

export default (n, width, z=0) => {
    n = n + '';
    return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
};
