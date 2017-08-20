var regs = {
    // 身份证
    idCard: /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/,
    // 护照
    passport: /(^([a-zA-Z]{1,3}[0-9]{7,12})$)|(^[0-9]{9,12}$)|(^[a-zA-Z0-9]{1,20}$)/,
    // 港澳通行证
    hongKongMacauPass: /^([A-Z]{1}[0-9]{8})$/,
    // 台湾通行证
    twPass: /^([a-zA-Z0-9]{0,20})$/,
    // 中文
    chinese: /^[\u4E00-\u9FA5\.\s\-]+$/,
    // 英文
    english: /^[a-zA-Z\.\s\-]+$/,
    // 手机号
    tel: /^1[3-9]\d{9}$/,
    // 国际手机号
    interTel: /^[0-9]{5,11}$/,
    // 税号
    taxpayer: /^[a-zA-Z0-9]{15}$|^[a-zA-Z0-9]{18}$|^[a-zA-Z0-9]{20}$/
}

var check = {
    /**
     * 校验是否合法(符合上述正则表达式)
     * @param {[type]} str
     * @param {[type]} type
     */
    isLegal: function(str, type) {
        var msg = '';
        if (!new RegExp(regs[type].reg).test(str)) {
            return ' 请填写正确的证件号码';
        } else if (type === 'ID') {
            if (str.length == 18) {
                var idCardWi = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]; //将前17位加权因子保存在数组里
                var idCardY = [1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2]; //这是除以11后，可能产生的11位余数、验证码，也保存成数组
                var idCardWiSum = 0; //用来保存前17位各自乖以加权因子后的总和
                for (var i = 0; i < 17; i++) {
                    idCardWiSum += str.substring(i, i + 1) * idCardWi[i];
                }

                var idCardMod = idCardWiSum % 11; //计算出校验码所在数组的位置
                var idCardLast = str.substring(17); //得到最后一位身份证号码

                //如果等于2，则说明校验码是10，身份证号码最后一位应该是X
                if (idCardMod == 2) {
                    if (idCardLast == "X" || idCardLast == "x") {
                        // console.log("恭喜通过验证啦！");
                        return msg;
                    } else {
                        msg = "请填写正确的身份证号码";
                        return msg;
                    }
                } else {
                    //用计算出的验证码与最后一位身份证号码匹配，如果一致，说明通过，否则是无效的身份证号码
                    if (idCardLast == idCardY[idCardMod]) {
                        // console.log("恭喜通过验证啦！");
                    } else {
                        msg = "请填写正确的身份证号码";
                        return msg;
                    }
                }
            }
        }
    },
    /**
     * 判断一个对象是否是数组
     * @param  {[type]}  arg [description]
     * @return {Boolean}     [description]
     */
    isArray: function(arg) {
        //如果浏览器支持Array.isArray()可以直接判断
        if (typeof Array.isArray === 'function') {
            return Array.isArray(arg);
        } else {
            if (typeof arg === 'object') {
                return Object.prototype.toString.call(arg) === '[object Array]';
            } else {
                return false;
            }
        }
    },
    /**
     * 判断是否是数字
     * @param  {[type]}  n [description]
     * @return {Boolean}   [description]
     */
    isNumber: function(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
    },
    isNumber1: function (n) {
        return Object.prototype.toString.call(o)=="[object Number]";
    },
    /**
     * 判断是否是对象
     * @param  {[type]}  o [description]
     * @return {Boolean}   [description]
     */
    isObj:function(o){
        return Object.prototype.toString.call(o)=="[object Object]";
    },
    /**
     * 判断是否是数据
     * @param  {[type]}  o [description]
     * @return {Boolean}   [description]
     */
    isArray:function(o){
        return Object.prototype.toString.call(o)=="[object Array]";
    },
    /**
     * 判断是否为null
     * @param  {[type]}  o [description]
     * @return {Boolean}   [description]
     */
    isNULL:function(o){
        return Object.prototype.toString.call(o)=="[object Null]";
    },
    /**
     * 判断是否是对象文档
     * @return {Boolean} [description]
     */
    isDocument:function(o){
        return Object.prototype.toString.call(o)=="[object Document]"|| [object HTMLDocument];
    },
    /**
     * 判断是否是正则表达式
     * @param  {[type]}  o [description]
     * @return {Boolean}   [description]
     */
    isDate: function (o) {
        return Object.prototype.toString.call(o) == "[object RegExp]"
    },
    /**
     * 判断是否是日期
     * @param  {[type]}  o [description]
     * @return {Boolean}   [description]
     */
    isDate: function (o) {
        return Object.prototype.toString.call(o) == "[object Date]"
    },
    /**
     * 判断是否是有效日期
     * @param  {[type]}  value      [description]
     * @param  {[type]}  userFormat [description]
     * @return {Boolean}            [description]
     */
    isValidDate: function(value, userFormat) {

        // Set default format if format is not provided
        userFormat = userFormat || 'mm/dd/yyyy';

        // Find custom delimiter by excluding
        // month, day and year characters
        var delimiter = /[^mdy]/.exec(userFormat)[0];

        // Create an array with month, day and year
        // so we know the format order by index
        var theFormat = userFormat.split(delimiter);

        // Create array from user date
        var theDate = value.split(delimiter);

        function isDate(date, format) {
            var m, d, y, i = 0,
                len = format.length,
                f;
            for (i; i < len; i++) {
                f = format[i];
                if (/m/.test(f)) m = date[i];
                if (/d/.test(f)) d = date[i];
                if (/y/.test(f)) y = date[i];
            }
            return (
                m > 0 && m < 13 &&
                y && y.length === 4 &&
                d > 0 &&
                // Check if it's a valid day of the month
                d <= (new Date(y, m, 0)).getDate()
            );
        }

        return isDate(theDate, theFormat);
    }
}
