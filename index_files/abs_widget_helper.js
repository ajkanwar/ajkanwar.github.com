(function(document, undefined) {
    var pr_abs_widget = {
        fabric_host: typeof window.fabric_host !== "undefined" ? window.fabric_host : "https://www.practo.com",
        init: function() {
            var thisWidget = this,
                widgetContainer = document.getElementsByTagName("practo:abs_widget");
            var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.documentElement.offsetHeight;
            var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.documentElement.offsetWidth;
            if (navigator.userAgent.indexOf("MSIE") != -1) {
                var widgetContainerParentNode = widgetContainer[0].parentNode;
                var widgetContainerForIE = document.createElement("div");
                widgetContainerForIE.setAttribute("id", "practo_abs_widget_container");
                widgetContainerForIE.setAttribute("widget", widgetContainer[0].getAttribute("widget"));
                widgetContainerParentNode.insertBefore(widgetContainerForIE, widgetContainer[0]);
                widgetContainer = [];
                widgetContainer.push(widgetContainerForIE);
            }
            if (typeof widgetContainer !== "undefined") {
                if (widgetContainer !== null) {
                    if (widgetContainer.length > 0) {
                        var widget_id = widgetContainer[0].getAttribute("widget"),
                            practice_id = widgetContainer[0].getAttribute("practice_id"),
                            cssText = ".practo_abs_widget_button{color: #ffffff;font-weight:bold;background-color:transparent !important; background: url('" + thisWidget.fabric_host + "/health/widgets/" + widget_id + "/icon" + (practice_id != "" ? ("?practice_id=" + practice_id) : "") + "') no-repeat -0px -0px !important;padding:0 0 0 55px !important;display:inline-block;line-height:41px !important;width: 175px !important;font-size: 15px;text-align: left;cursor: pointer;border-left: 1px solid #e0e0e0;border-right: 1px solid #e6e6e6;border-top: 1px solid #e0e0e0;text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);-moz-box-sizing:content-box;-webkit-box-sizing:content-box;-o-box-sizing:content-box;-ms-box-sizing:content-box;box-sizing:content-box; border-bottom: 0}";
                        cssText += ".practo_abs_widget_button:hover,.practo_abs_widget_button:focus{background-position: 0px -56px !important;}";
                        cssText += ".practo_abs_widget_button:active{background-position:0px -112px !important;}";
                        cssText += ".practo_link {width:230px; height: 14px; background: url('" + thisWidget.fabric_host + "/health/widgets/" + widget_id + "/icon" + (practice_id != "" ? ("?practice_id=" + practice_id) : "") + "') no-repeat -0px -40px !important; border-left: 1px solid #e0e0e0;border-right: 1px solid #e6e6e6;border-bottom: 1px solid #d9d9d9;} .practo_link, .practo_link:visited{padding: 0 !impotant;cursor: pointer;font-size: 11px !important;margin-top: -1px;text-align: right;display: block;color: #0094DE !important;font-family:Arial;text-decoration: none;}";
                        cssText += ".practo_link:hover{text-decoration: underline;}";
                        cssText += ".practo_abs_widget_window_mask{background: #000;opacity:0.75;z-index:10000;position:fixed;width:100%;top:0;right:0;bottom:0;}";
                        var styleNodeA = document.createElement("style");
                        styleNodeA.setAttribute("type", "text/css");
                        var headNode = document.getElementsByTagName('head')[0];
                        headNode.appendChild(styleNodeA);
                        if (styleNodeA.styleSheet) {
                            styleNodeA.styleSheet.cssText = cssText;
                        } else {
                            var textNode = document.createTextNode(cssText);
                            styleNodeA.appendChild(textNode);
                        }

                        var dialogLeft = Math.ceil((windowWidth - 728) / 2),
                            dialogTop = Math.ceil((windowHeight - 646) / 2);

                        dialogTop = dialogTop < 10 ? dialogTop = 10 : dialogTop;
                        dialogLeft = dialogLeft < 10 ? dialogLeft = 10 : dialogLeft;

                        dialogTop += window.pageYOffset ? window.pageYOffset : (document.documentElement.scrollTop ? document.documentElement.scrollTop : (document.body.scrollTop ? document.body.scrollTop : 0));
                        cssText = ".practo_abs_widget_window{background: #FFF;border-radius:5px;box-shadow:0px 0px 5px 3px #6f6f6f;width:728px;top:" + dialogTop + "px;left:" + dialogLeft + "px;height:646px;overflow:hidden;z-index:10001;position:absolute; -webkit-overflow-scrolling: touch; overflow-y: scroll;}";
                        cssText += ".practo_close_widget_link{cursor: pointer; background:url('" + thisWidget.fabric_host + "/bundles/practopractoapp/images/icons/close_widget.png" + "') no-repeat 0px 0px;display:block;width:32px;height:32px;position:absolute;top:" + (dialogTop - 18) + "px;left:" + (dialogLeft + 708) + "px;z-index:10002;}";
                        cssText += ".practo_close_widget_link:hover{background:url('" + thisWidget.fabric_host + "/bundles/practopractoapp/images/icons/close_widget.png" + "') no-repeat 0px -32px;}";

                        /*-----------------------------------------------------Fixes for IE Quirks Mode -------------------------------------------------------------------------------------------*/
                        if (navigator.userAgent.indexOf("MSIE") != -1) {
                            if (document.documentMode < 8) {
                                if (document.documentMode == 7) {
                                    cssText = ".practo_abs_widget_button{color: #ffffff;font-weight:bold;background: url('" + thisWidget.fabric_host + "/health/widgets/" + widget_id + "/icon" + (practice_id != "" ? ("?practice_id=" + practice_id) : "") + "');display:inline-block;height:41px;width: 230px;font-size: 15px;text-align: left;cursor: pointer;border-left: 1px solid #e0e0e0;border-right: 1px solid #e6e6e6;border-top: 1px solid #e0e0e0;}";
                                    cssText += ".practo_link, .practo_link:visited{cursor: pointer;font-size: 11px;margin-top: 5px;text-align: right;display: inline-block;color: #0094DE;text-decoration: none;}";
                                } else {
                                    cssText = ".practo_abs_widget_button{color: #ffffff;font-weight:bold;background: url('" + thisWidget.fabric_host + "/health/widgets/" + widget_id + "/icon" + (practice_id != "" ? ("?practice_id=" + practice_id) : "") + "');display:inline;height:41px;width: 230px;font-size: 15px;text-align: left;cursor: pointer;border-left: 1px solid #e0e0e0;border-right: 1px solid #e6e6e6;border-bottom: 1px solid #d9d9d9;border-top: 1px solid #e0e0e0;}";
                                    cssText += ".practo_link, .practo_link:visited{padding: 0 !important;cursor: pointer;font-size: 11px;margin-top: 5px;text-align: right;display: block;color: #0094DE;text-decoration: none;}";
                                }
                                cssText += ".practo_link:hover{text-decoration: underline; width:230px; height: 14px; background: url('" + thisWidget.fabric_host + "/health/widgets/" + widget_id + "/icon" + (practice_id != "" ? ("?practice_id=" + practice_id) : "") + "') no-repeat -0px -40px !important; border-left: 1px solid #e0e0e0;border-right: 1px solid #e6e6e6;border-bottom: 1px solid #d9d9d9;}";
                                cssText += ".practo_abs_widget_window_mask{background: #000;opacity:0.75;z-index:10000;position:absolute;width:" + windowWidth + "px;top:0;left:0;height:" + (windowHeight) + "px;}";

                                cssText += ".practo_abs_widget_window{background: #FFF;border-radius:5px;box-shadow:0px 0px 5px 3px #6f6f6f;width:728px;top:" + dialogTop + "px;left:" + dialogLeft + "px;height:646px;overflow:hidden;z-index:10001;position:absolute; -webkit-overflow-scrolling: touch; overflow-y: scroll;}";
                                cssText += ".practo_close_widget_link{cursor: pointer; background:url('" + thisWidget.fabric_host + "/bundles/practopractoapp/images/icons/close_widget.png" + "');display:block;width:32px;height:32px;position:absolute;top:" + (dialogTop - 18) + "px;left:" + (dialogLeft + 708) + "px;z-index:10002;}";
                            }
                        }
                        var styleNode = document.createElement("style");
                        styleNode.setAttribute("type", "text/css");
                        styleNode.setAttribute("id", "practo_abs_widget_styles");
                        headNode.appendChild(styleNode);
                        if (styleNode.styleSheet) {
                            styleNode.styleSheet.cssText = cssText;
                        } else {
                            var textNode = document.createTextNode(cssText);
                            styleNode.appendChild(textNode);
                        }

                        var buttonContainer = document.createElement("div");
                        buttonContainer.onclick = function() {
                            thisWidget.showABSPopup();
                        };

                        var buttonLink = document.createElement("a");
                        buttonLink.innerHTML = "&nbsp;";
                        buttonContainer.appendChild(buttonLink);

                        var practoLinkContainer = document.createElement("div");

                        var practoLink = document.createElement("a");
                        practoLink.innerHTML = "";
                        practoLink.setAttribute("target", "_blank");
                        practoLink.setAttribute("href", thisWidget.fabric_host);
                        if (navigator.userAgent.indexOf("MSIE") != -1) {
                            if (document.documentMode < 8) {
                                buttonContainer.width = "230px";
                                practoLinkContainer.width = "230px";
                                practoLink.setAttribute("className", "practo_link");
                                buttonLink.setAttribute("className", "practo_abs_widget_button");
                            } else {
                                practoLinkContainer.setAttribute("style", "width:230px;");
                                buttonContainer.setAttribute("style", "width:230px;");
                                practoLink.setAttribute("class", "practo_link");
                                buttonLink.setAttribute("class", "practo_abs_widget_button");
                            }
                        } else {
                            buttonContainer.setAttribute("style", "width:230px;");
                            practoLinkContainer.setAttribute("style", "width:230px;");
                            practoLink.setAttribute("class", "practo_link");
                            buttonLink.setAttribute("class", "practo_abs_widget_button");
                        }
                        practoLinkContainer.appendChild(practoLink);

                        widgetContainer[0].appendChild(buttonContainer);
                        widgetContainer[0].appendChild(practoLinkContainer);
                    }
                }
            }
        },
        showABSPopup: function() {
            var thisWidget = this,
                widgetContainer = document.getElementsByTagName("practo:abs_widget");
            if (navigator.userAgent.indexOf("MSIE") != -1) {
                widgetContainer = [];
                var widgetContainerForIE = document.getElementById("practo_abs_widget_container");
                widgetContainer.push(widgetContainerForIE);
            }
            if (typeof widgetContainer !== "undefined") {
                if (widgetContainer !== null) {
                    if (widgetContainer.length > 0) {
                        var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.documentElement.offsetHeight;
                        var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.documentElement.offsetWidth;
                        var styleNodeB = document.getElementById("practo_abs_widget_styles");
                        var dialogLeft = Math.ceil((windowWidth - 728) / 2),
                            dialogTop = Math.ceil((windowHeight - 646) / 2);

                        dialogTop = dialogTop < 10 ? dialogTop = 10 : dialogTop;
                        dialogLeft = dialogLeft < 10 ? dialogLeft = 10 : dialogLeft;

                        dialogTop += window.pageYOffset ? window.pageYOffset : (document.documentElement.scrollTop ? document.documentElement.scrollTop : (document.body.scrollTop ? document.body.scrollTop : 0));
                        cssText = ".practo_abs_widget_window{background: #FFF;border-radius:5px;box-shadow:0px 0px 5px 3px #6f6f6f;width:728px;top:" + dialogTop + "px;left:" + dialogLeft + "px;height:646px;overflow:hidden;z-index:10001;position:absolute; -webkit-overflow-scrolling: touch; overflow-y: scroll; }";
                        cssText += ".practo_close_widget_link{cursor: pointer; background:url('" + thisWidget.fabric_host + "/bundles/practopractoapp/images/icons/close_widget.png" + "') no-repeat 0px 0px;display:block;width:32px;height:32px;position:absolute;top:" + (dialogTop - 18) + "px;left:" + (dialogLeft + 708) + "px;z-index:10002;}";
                        cssText += ".practo_close_widget_link:hover{background:url('" + thisWidget.fabric_host + "/bundles/practopractoapp/images/icons/close_widget.png" + "') no-repeat 0px -32px;}";

                        /*-----------------------------------------------------Fixes for IE Quirks Mode -------------------------------------------------------------------------------------------*/
                        if (navigator.userAgent.indexOf("MSIE") != -1) {
                            if (document.documentMode < 8) {
                                if (document.documentMode == 7) {
                                    cssText = ".practo_abs_widget_button{color: #ffffff;font-weight:bold;background: url('" + thisWidget.fabric_host + "/health/widgets/" + widget_id + "/icon" + (practice_id != "" ? ("?practice_id=" + practice_id) : "") + "');display:inline-block;height:32px;width: 230px;font-size: 15px;text-align: left;cursor: pointer;border-left: 1px solid #e0e0e0;border-right: 1px solid #e6e6e6;border-bottom: 1px solid #d9d9d9;border-top: 1px solid #e0e0e0;}";
                                    cssText += ".practo_link, .practo_link:visited{cursor: pointer;font-size: 11px;margin-top: 5px;text-align: right;display: inline-block;color: #0094DE;text-decoration: none;}";
                                } else {
                                    cssText = ".practo_abs_widget_button{color: #ffffff;font-weight:bold;background: url('" + thisWidget.fabric_host + "/health/widgets/" + widget_id + "/icon" + (practice_id != "" ? ("?practice_id=" + practice_id) : "") + "');display:inline;height:32px;width: 230px;font-size: 15px;text-align: left;cursor: pointer;border-left: 1px solid #e0e0e0;border-right: 1px solid #e6e6e6;border-bottom: 1px solid #d9d9d9;border-top: 1px solid #e0e0e0;}";
                                    cssText += ".practo_link, .practo_link:visited{cursor: pointer;font-size: 11px;margin-top: 5px;text-align: right;display: block;color: #0094DE;text-decoration: none;}";
                                }
                                cssText += ".practo_link:hover{text-decoration: underline;}";
                                cssText += ".practo_abs_widget_window_mask{background: #000;opacity:0.75;z-index:10000;position:absolute;width:" + windowWidth + "px;top:0;left:0;height:" + (windowHeight) + "px;}";

                                cssText += ".practo_abs_widget_window{background: #FFF;border-radius:5px;box-shadow:0px 0px 5px 3px #6f6f6f;width:728px;top:" + dialogTop + "px;left:" + dialogLeft + "px;height:646px;overflow:hidden;z-index:10001;position:absolute; -webkit-overflow-scrolling: touch; overflow-y: scroll;}";
                                cssText += ".practo_close_widget_link{cursor: pointer; background:url('" + thisWidget.fabric_host + "/bundles/practopractoapp/images/icons/close_widget.png" + "');display:block;width:32px;height:32px;position:absolute;top:" + (dialogTop - 18) + "px;left:" + (dialogLeft + 708) + "px;z-index:10002;}";
                            }
                        }
                        if (styleNodeB.styleSheet) {
                            styleNodeB.styleSheet.cssText = cssText;
                        } else {
                            var textNode = document.createTextNode(cssText);
                            styleNodeB.appendChild(textNode);
                        }

                        var widget_id = widgetContainer[0].getAttribute("widget");
                        var practice_id = widgetContainer[0].getAttribute("practice_id");
                        var widgetWindowMask = document.createElement("div");
                        widgetWindowMask.setAttribute("id", "practo_abs_widget_window_mask");
                        widgetWindowMask.onclick = function() {
                            var bodyEl = document.getElementsByTagName("body");
                            bodyEl[0].removeChild(document.getElementById("practo_abs_widget_window_mask"));
                            bodyEl[0].removeChild(document.getElementById("practo_abs_widget_window"));
                            bodyEl[0].removeChild(document.getElementById("practo_abs_widget_window_close_link"));
                        };

                        var widgetWindowCloseLink = document.createElement("div");
                        widgetWindowCloseLink.setAttribute("title", "Close");
                        widgetWindowCloseLink.setAttribute("id", "practo_abs_widget_window_close_link");
                        widgetWindowCloseLink.onclick = function() {
                            var bodyEl = document.getElementsByTagName("body");
                            bodyEl[0].removeChild(document.getElementById("practo_abs_widget_window_mask"));
                            bodyEl[0].removeChild(document.getElementById("practo_abs_widget_window"));
                            bodyEl[0].removeChild(document.getElementById("practo_abs_widget_window_close_link"));
                        };

                        var widgetWindow = document.createElement("div");
                        widgetWindow.setAttribute("id", "practo_abs_widget_window");

                        var widgetIFrame = document.createElement("iframe");
                        widgetIFrame.setAttribute("src", thisWidget.fabric_host + "/health/widgets/" + widget_id + "/doctors" + (practice_id != "" ? ("?practice_id=" + practice_id) : ""));
                        widgetIFrame.setAttribute("frameborder", "0");
                        if (navigator.userAgent.indexOf("MSIE") != -1) {
                            if (document.documentMode < 8) {
                                widgetIFrame.width = "726px";
                                widgetIFrame.height = "646px";
                                widgetWindowMask.setAttribute("className", "practo_abs_widget_window_mask");
                                widgetWindowCloseLink.setAttribute("className", "practo_close_widget_link");
                                widgetWindow.setAttribute("className", "practo_abs_widget_window");
                            } else {
                                widgetIFrame.setAttribute("style", "width:726px; height:646px; overflow-x:hidden; border-radius:5px;");
                                widgetWindowMask.setAttribute("class", "practo_abs_widget_window_mask");
                                widgetWindowCloseLink.setAttribute("class", "practo_close_widget_link");
                                widgetWindow.setAttribute("class", "practo_abs_widget_window");
                            }
                        } else {
                            widgetIFrame.setAttribute("style", "width:726px; height:646px; overflow-x:hidden; border-radius:5px;");
                            widgetWindowMask.setAttribute("class", "practo_abs_widget_window_mask");
                            widgetWindowCloseLink.setAttribute("class", "practo_close_widget_link");
                            widgetWindow.setAttribute("class", "practo_abs_widget_window");
                        }
                        widgetWindow.appendChild(widgetIFrame);

                        var bodyEl = document.getElementsByTagName("body");
                        bodyEl[0].appendChild(widgetWindowMask);
                        bodyEl[0].appendChild(widgetWindow);
                        bodyEl[0].appendChild(widgetWindowCloseLink);
                    }
                }
            }
        }
    };
    if (typeof window.pr_abs_widget !== "undefined") {
        window.pr_abs_widget = pr_abs_widget;
    }
    pr_abs_widget.init();

    window.onresize = function() {
        var windowHeight = window.innerHeight || document.documentElement.clientHeight || document.documentElement.offsetHeight;
        var windowWidth = window.innerWidth || document.documentElement.clientWidth || document.documentElement.offsetWidth;
        var dialogLeft = Math.ceil((windowWidth - 728) / 2),
            dialogTop = Math.ceil((windowHeight - 646) / 2);
        dialogTop = dialogTop < 10 ? dialogTop = 10 : dialogTop;
        dialogLeft = dialogLeft < 10 ? dialogLeft = 10 : dialogLeft;
        dialogTop += window.pageYOffset ? window.pageYOffset : (document.documentElement.scrollTop ? document.documentElement.scrollTop : (document.body.scrollTop ? document.body.scrollTop : 0));

        if (typeof document.getElementById("practo_abs_widget_window") !== "undefined") {
            if (document.getElementById("practo_abs_widget_window") !== null) {
                if (navigator.userAgent.indexOf("MSIE") != -1) {
                    if (document.documentMode < 8) {
                        document.getElementById("practo_abs_widget_window").left = dialogLeft + "px";
                        document.getElementById("practo_abs_widget_window").top = dialogTop + "px";
                    } else {
                        document.getElementById("practo_abs_widget_window").setAttribute("style", "left:" + dialogLeft + "px; top:" + dialogTop + "px;");
                    }
                } else {
                    document.getElementById("practo_abs_widget_window").setAttribute("style", "left:" + dialogLeft + "px; top:" + dialogTop + "px;");
                }
            }
        }
        if (typeof document.getElementById("practo_abs_widget_window_close_link") !== "undefined") {
            if (document.getElementById("practo_abs_widget_window_close_link") !== null) {
                if (navigator.userAgent.indexOf("MSIE") != -1) {
                    if (document.documentMode < 8) {
                        document.getElementById("practo_abs_widget_window_close_link").left = (dialogLeft + 708) + "px";
                        document.getElementById("practo_abs_widget_window_close_link").top = (dialogTop - 18) + "px";
                    } else {
                        document.getElementById("practo_abs_widget_window_close_link").setAttribute("style", "left:" + (dialogLeft + 708) + "px; top:" + (dialogTop - 18) + "px;");
                    }
                } else {
                    document.getElementById("practo_abs_widget_window_close_link").setAttribute("style", "left:" + (dialogLeft + 708) + "px; top:" + (dialogTop - 18) + "px;");
                }
            }
        }
    };
})(document);