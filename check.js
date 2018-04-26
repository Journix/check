var regs = {
    // 身份证
    idCard: /^\d{15}|\d{18}$/,
    idCard1: /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/,
    // 短身份证号码(数字、字母x结尾)
    shortIdCard: /^([0-9]){7,18}(x|X)?$/,
    shortIdCard1: /^\d{8,18}|[0-9x]{8,18}|[0-9X]{8,18}?$/
    // 护照
    passport: /(^([a-zA-Z]{1,3}[0-9]{7,12})$)|(^[0-9]{9,12}$)|(^[a-zA-Z0-9]{1,20}$)/,
    // 港澳通行证
    hongKongMacauPass: /^([A-Z]{1}[0-9]{8})$/,
    // 台湾通行证
    twPass: /^([a-zA-Z0-9]{0,20})$/,
    // 中文
    chinese: /^[\u4E00-\u9FA5\.\s\-]+$/,
    // 仅能是中文
    chinese1: /^[\\u4e00-\\u9fa5]{0,}$/,
    // 英文
    english: /^[a-zA-Z\.\s\-]+$/,
    // 手机号
    tel: /^1[3-9]\d{9}$/,
    tel2: /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/,
    // 电话号码(“XXX-XXXXXXX”、”XXXX-XXXXXXXX”、”XXX-XXXXXXX”、”XXX-XXXXXXXX”、”XXXXXXX”和”XXXXXXXX)
    phone: /^(\(\d{3,4}-)|\d{3.4}-)?\d{7,8}$/,
    // 国内电话号码(0511-4405222、021-87888822)
    domesticPhone: /^\d{3}-\d{8}|\d{4}-\d{7}$/,
    // 国际手机号
    interTel: /^[0-9]{5,11}$/,

    // 邮箱
    email: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
    email1: /[\\w!#$%&'*+/=?^_`{|}~-]+(?:\\.[\\w!#$%&'*+/=?^_`{|}~-]+)*@(?:[\\w](?:[\\w-]*[\\w])?\\.)+[\\w](?:[\\w-]*[\\w])?/,
    // 税号
    taxpayer: /^[a-zA-Z0-9]{15}$|^[a-zA-Z0-9]{18}$|^[a-zA-Z0-9]{20}$/,
    // 数字
    number: /^[0-9]*$/,
    // n位的数字
    numbers: /^\d{n}$/,
    // 至少n个数字
    atLeastNum: /^\d{n,}$/,
    // 数字区间
    numRange: /^\d{m,n}$/,
    // 零和非零开头的数字
    num1: /^(0|[1-9][0-9]*)$/,
    // 非零开头的最多带两位小数的数字
    num2: /^([1-9][0-9]*)+(.[0-9]{1,2})?$/,
    // 带1-2位小数的正数或负数
    num3: /^(\-)?\d+(\.\d{1,2})?$/,
    // 正数、负数、和小数
    num4: /^(\-|\+)?\d+(\.\d+)?$/,
    // 有两位小数的正实数
    num5: /^[0-9]+(.[0-9]{2})?$/,
    // 有1~3位小数的正实数
    num6: /^[0-9]+(.[0-9]{1,3})?$/,
    // 非零的正整数
    num7: /^[1-9]\d*$/,
    num8: /^([1-9][0-9]*){1,3}$/,
    num9: /^\+?[1-9][0-9]*$/,
    // 非零的负整数
    num10: /^\-[1-9][0-9]*$/,
    num11: /^-[1-9]\d*$/,
    // 非负整数
    num12: /^\d+$/,
    num13: /^[1-9]\d*|0$/,
    // 非正整数
    num14: /^-[1-9]\d*|0$/,
    num15: /^((-\d+)|(0+))$/,
    // 非负浮点数
    num16: /^\d+(\.\d+)?$/,
    num17: /^[1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0$/,
    // 非正浮点数
    num18: /^((-\d+(\.\d+)?)|(0+(\.0+)?))$/,
    num19: /^(-([1-9]\d*\.\d*|0\.\d*[1-9]\d*))|0?\.0+|0$/,
    // 正浮点数
    num20: /^[1-9]\d*\.\d*|0\.\d*[1-9]\d*$/,
    num21: /^(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$/,
    // 负浮点数
    num22: /^-([1-9]\d*\.\d*|0\.\d*[1-9]\d*)$/,
    num23: /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/,
    // 浮点数
    num24: /^(-?\d+)(\.\d+)?$/,
    num25: /^-?([1-9]\d*\.\d*|0\.\d*[1-9]\d*|0?\.0+|0)$/,

    // 汉字
    string1: /^[\u4e00-\u9fa5]{0,}$/,
    // 英文和数字
    string2: /^[A-Za-z0-9]+$/,
    string3: /^[A-Za-z0-9]{4,40}$/,
    // 长度为3-20的所有字符
    string4: /^.{3,20}$/,
    // 由26个英文字母组成的字符串
    string5: /^[A-Za-z]+$/,
    // 由26个大写英文字母组成的字符串
    string6: /^[A-Z]+$/,
    // 由26个小写英文字母组成的字符串
    string7: /^[a-z]+$/,
    // 由数字和26个英文字母组成的字符串
    string8: /^[A-Za-z0-9]+$/,
    // 由数字、26个英文字母或者下划线组成的字符串
    string9: /^\w+$/,
    string10: /^\w{3,20}$/,
    // 中文、英文、数字包括下划线
    string11: /^[\u4E00-\u9FA5A-Za-z0-9_]+$/,
    // 中文、英文、数字但不包括下划线等符号
    string12: /^[\u4E00-\u9FA5A-Za-z0-9]+$/,
    string13:/^[\u4E00-\u9FA5A-Za-z0-9]{2,20}$/,
    // ^%&',;=?$\"
    string14: /[^%&',;=?$\x22]+/,
    // 禁止输入含有~的字符
    string15: /[^~\x22]+/,

    // 域名
    domain: /^[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(/.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+/.?$/,

    // url
    url1: /^[a-zA-z]+://[^\s]*$/,
    url2: /^http://([\w-]+\.)+[\w-]+(/[\w-./?%&=]*)?$/,

    // 帐号是否合法(字母开头，允许5-16字节，允许字母数字下划线)
    account: /^[a-zA-Z][a-zA-Z0-9_]{4,15}$/,

    // 密码(以字母开头，长度在6~18之间，只能包含字母、数字和下划线)
    passport: /^[a-zA-Z]\w{5,17}$/,

    // 强密码(必须包含大小写字母和数字的组合，不能使用特殊字符，长度在8-10之间)
    passport1: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$/,

    // 日期
    date: /^\d{4}-\d{1,2}-\d{1,2}/,
    date01: /^\d{4}(\-|\/|\.)\d{1,2}\1\d{1,2}$/,
    date02: /^(^(\d{4}|\d{2})(\-|\/|\.)\d{1,2}\3\d{1,2}$)|(^\d{4}年\d{1,2}月\d{1,2}日$)$/,

    // “yyyy-mm-dd” 格式的日期校验，已考虑平闰年。
    date03: /^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$/,

    // 一年的12个月(01～09和1～12)
    date1: /^(0?[1-9]|1[0-2])$/,

    // 一个月的31天(01～09和1～31)
    date2: /^((0?[1-9])|((1|2)[0-9])|30|31)$/,

    // 金额校验，精确到2位小数。
    price: /^[0-9]+(.[0-9]{2})?$/,

    isIE: /^.*MSIE [5-8](?:\\.[0-9]+)?(?!.*Trident\\\/[5-9]\\.0).*$/,

    IPv4: /\\b(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\b/,

    IPv6: /(([0-9a-fA-F]{1,4}:){7,7}[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,7}:|([0-9a-fA-F]{1,4}:){1,6}:[0-9a-fA-F]{1,4}|([0-9a-fA-F]{1,4}:){1,5}(:[0-9a-fA-F]{1,4}){1,2}|([0-9a-fA-F]{1,4}:){1,4}(:[0-9a-fA-F]{1,4}){1,3}|([0-9a-fA-F]{1,4}:){1,3}(:[0-9a-fA-F]{1,4}){1,4}|([0-9a-fA-F]{1,4}:){1,2}(:[0-9a-fA-F]{1,4}){1,5}|[0-9a-fA-F]{1,4}:((:[0-9a-fA-F]{1,4}){1,6})|:((:[0-9a-fA-F]{1,4}){1,7}|:)|fe80:(:[0-9a-fA-F]{0,4}){0,4}%[0-9a-zA-Z]{1,}|::(ffff(:0{1,4}){0,1}:){0,1}((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])|([0-9a-fA-F]{1,4}:){1,4}:((25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9])\\.){3,3}(25[0-5]|(2[0-4]|1{0,1}[0-9]){0,1}[0-9]))/,




}

var check = {
    /**
     * 校验是否合法(符合上述正则表达式)
     * @param {[type]} str
     * @param {[type]} type
     */
    isDocLegal: function(str, type) {
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
    isArray: function(input) {
        //如果浏览器支持Array.isArray()可以直接判断
        if (typeof Array.isArray === 'function') {
            return Array.isArray(input);
        } else {
            if (typeof input === 'object') {
                return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
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
        return typeof input === 'number' || Object.prototype.toString.call(o)=="[object Number]";
    },
    /**
     * 判断是否是对象
     * @param  {[type]}  o [description]
     * @return {Boolean}   [description]
     */
    isObj:function(input){
        return input != null && Object.prototype.toString.call(input)=="[object Object]";
    },
    /**
     * 判断空对象
     * @param  {[type]}  input [description]
     * @return {Boolean}       [description]
     */
    isObjEmpty: function (obj) {
        var k;
        for (k in obj) {
            // even if its not own property I'd still call it non-empty
            return false;
        }
        return true;
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
     * 判断undefined
     * @param  {[type]}  input [description]
     * @return {Boolean}       [description]
     */
    isUndefined: function (input) {
        return input === void 0;
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
    isDate: function (input) {
        return input instanceof Date || Object.prototype.toString.call(input) == "[object Date]"
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
    },
    /**
     * 判断是否IE8
     * @return {Boolean} [description]
     */
    isIE8() {
        let browser = navigator.appName;
        let b_version = navigator.appVersion;
        let version = b_version.split(";");
        let trim_Version = version[1].replace(/[ ]/g,"");
        if(browser == "Microsoft Internet Explorer" && trim_Version == "MSIE8.0") {
            return true
        } else {
            return false
        }
    }
}
