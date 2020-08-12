const isLowerIE10 = () => {
    const userAgent = navigator.userAgent
    /**
     * userAgent
     *
     * |*| IE7 |*|	 Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; WOW64; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET4.0C; .NET4.0E)
     * |*| IE8 |*|   Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.1; WOW64; Trident/4.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; .NET4.0C; .NET4.0E)
     * |*| IE9 |*|	 Mozilla/5.0 (compatible; MSIE 9.0; Windows NT 6.1; WOW64; Trident/5.0)
     * |*| IE10 |*|   Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; WOW64; Trident/6.0)
     * |*| Chrome |*|   Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/70.0.3538.67 Safari/537.36
     * |*| QQ浏览器 |*|   Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.87 Safari/537.36 QQBrowser/9.2.5583.400
     * |*| FireFox |*|   Mozilla/5.0 (Windows NT 6.1; WOW64; rv:63.0) Gecko/20100101 Firefox/63.0
     * |*| 360极速浏览器 |*|  Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/63.0.3239.132 Safari/537.36
     */
    console.log(userAgent)

    const isIE = window.ActiveXObject || 'ActiveXObject' in window
    if (isIE) {
        // ie6
        if (userAgent.indexOf('MSIE 6.0') != -1) {
            return true
        }
        // ie 7 - 9
        else if (
            userAgent.indexOf('MSIE 7.0') != -1 ||
            userAgent.indexOf('MSIE 8.0') != -1 ||
            userAgent.indexOf('MSIE 9.0') != -1
        ) {
            return true
        }
        // ie 10 11
        else if (
            userAgent.indexOf('MSIE 10.0') != -1 ||
            userAgent.toLowerCase().match(/rv:([\d.]+)\) like gecko/)
        ) {
            return false
        }
        // ie更低版本
        else {
            return true
        }
    }
    return false
}

export default isLowerIE10