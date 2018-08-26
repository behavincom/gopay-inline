import {Component, Renderer2, OnInit, Inject, Input, AfterViewInit} from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-gopay-inline',
  templateUrl: './gopay-inline.component.html',
  styleUrls: ['./gopay-inline.component.css']
})
export class GopayInlineComponent implements OnInit, AfterViewInit {

  // private static scriptUrl = 'https://gw.sandbox.gopay.com/gp-gw/js/embed.js';
  @Input()
  public actionUrl: string;

  constructor(private renderer2: Renderer2, @Inject(DOCUMENT) private document) {}

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    const scriptElement = this.renderer2.createElement('script');
    console.log(this.document.getElementById('pay-button'));
    scriptElement.type = `text/javascript`;
    scriptElement.text = "/**!\n" +
      " * GoPay GateWay (http://gopay.com)\n" +
      " * Build v1.0.0\n" +
      " * Copyright 2011-2018\n" +
      " */\n" +
      "! function(a, b) {\n" +
      "    function c(a) {\n" +
      "        k._iframeListener || (\"function\" == typeof addEventListener ? (addEventListener(\"message\", a, !1), k._iframeListener = a) : attachEvent && (attachEvent(\"onmessage\", a), k._iframeListener = a))\n" +
      "    }\n" +
      "\n" +
      "    function d() {\n" +
      "        \"function\" == typeof removeEventListener ? (removeEventListener(\"message\", k._iframeListener, !1), k._iframeListener = null) : attachEvent && (detachEvent(\"onmessage\", k._iframeListener), k._iframeListener = null)\n" +
      "    }\n" +
      "\n" +
      "    function e(b) {\n" +
      "        var c = a.createElement(\"a\");\n" +
      "        return c.href = b, c.protocol + \"//\" + c.hostname + (\"\" === c.port || \"80\" === c.port || \"443\" === c.port ? \"\" : \":\" + c.port)\n" +
      "    }\n" +
      "\n" +
      "    function f(b) {\n" +
      "        var c = a.createElement(\"a\");\n" +
      "        return c.href = b, \"testgw.gopay.cz\" == c.hostname && (c.hostname = \"gw.sandbox.gopay.com\"), c.href\n" +
      "    }\n" +
      "\n" +
      "    function g() {\n" +
      "        var a = navigator.userAgent || navigator.vendor || b.opera;\n" +
      "        return !(!/(android|bb\\d+|meego).+mobile|avantgo|bada\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) && !/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-/i.test(a.substr(0, 4)))\n" +
      "    }\n" +
      "\n" +
      "    function h(a, b, c) {\n" +
      "        b.addEventListener ? b.addEventListener(a, c, !1) : b.attachEvent ? b.attachEvent(\"on\" + a, c) : b[\"on\" + a] && (b[\"on\" + a] = c)\n" +
      "    }\n" +
      "\n" +
      "    function i() {\n" +
      "        for (var b, c = 3, d = a.createElement(\"div\"), e = d.getElementsByTagName(\"i\"); d.innerHTML = \"<!--[if gt IE \" + ++c + \"]><i></i><![endif]-->\", e[0];);\n" +
      "        return c > 4 ? c : b\n" +
      "    }\n" +
      "\n" +
      "    function j() {\n" +
      "        return b[l(\"108l111l99l97l116l105l111l110\")][l(\"112l114l111l116l111l99l111l108\")] === l(\"104l116l116l112l115l58\") || new RegExp(l(\"94l104l116l116l112l58l47l47l40l103l111l112l97l121l45l103l119l124l103l111l112l97l121l45l103l97l116l101l119l97l121l115l41l46\")).test(b[l(\"108l111l99l97l116l105l111l110\")].origin)\n" +
      "    }\n" +
      "    var k = b._gopay = b._gopay || {\n" +
      "            defaultFormId: \"gopay-payment-button\",\n" +
      "            frameId: \"gopay-payment-iframe\",\n" +
      "            pageStyleId: \"gopay-payment-style\",\n" +
      "            _iframeListener: null,\n" +
      "            checkout: function(h, l) {\n" +
      "                var m, n = {\n" +
      "                        gatewayUrl: null,\n" +
      "                        inline: !0,\n" +
      "                        mobile: g()\n" +
      "                    },\n" +
      "                    o = {\n" +
      "                        onClose: function(a) {\n" +
      "                            location = a.url\n" +
      "                        }\n" +
      "                    };\n" +
      "                if (\"function\" == typeof l && (o.onClose = l), h) {\n" +
      "                    for (m in h) \"true\" === h[m] ? n[m] = !0 : \"false\" === h[m] ? n[m] = !1 : n[m] = h[m];\n" +
      "                    if (null === n.gatewayUrl) return void console.error(\"GOPAY ERROR: empty gateway url\");\n" +
      "                    var p = f(n.gatewayUrl);\n" +
      "                    for (m in n) \"gatewayUrl\" !== m && \"inline\" !== m && \"mobile\" !== m && (p += p.indexOf(\"?\") != -1 ? \"&\" : \"?\", p = p + m + \"=\" + encodeURIComponent(n[m]));\n" +
      "                    if ((n.mobile || !j() || i() < 9) && (n.inline = !1), n.inline) {\n" +
      "                        if (null !== a.getElementById(k.frameId)) return;\n" +
      "                        p += p.indexOf(\"?\") != -1 ? \"&\" : \"?\", p = p + \"style=overlay&parentEmbed=\" + encodeURIComponent(e(b.location));\n" +
      "                        var q = a.createElement(\"iframe\");\n" +
      "                        q.id = k.frameId, q.name = \"gp-iframe-overlay\", q.src = p, q.width = \"100%\", q.height = \"100%\", q.setAttribute(\"frameborder\", \"0\"), q.allowTransparency = !0, q.style.width = \"100%\", q.style.height = \"100%\", q.style.position = \"fixed\", q.style.top = \"0\", q.style.left = \"0\", q.style.bottom = \"0\", q.style.right = \"0\", q.style.display = \"block\", q.style.border = \"0 none\", q.style.backgroundColor = \"transparent\", q.style.zIndex = \"9999\", q.style.margin = \"0\", q.style.padding = \"0\", q.style.overflow = \"hidden\", q.style.visibility = \"hidden\", q.addEventListener(\"load\", function a(b) {\n" +
      "                            k.onLoadFrame(), q.removeEventListener(\"load\", a, !1)\n" +
      "                        });\n" +
      "                        var r = e(f(n.gatewayUrl)),\n" +
      "                            s = function(b) {\n" +
      "                                if (b.origin === r) {\n" +
      "                                    var c = t(b.data);\n" +
      "                                    if (c && c.action && c.data)\n" +
      "                                        if (\"get\" === c.action) location = c.data.url, d();\n" +
      "                                        else if (\"close\" === c.action) {\n" +
      "                                        var e = a.getElementById(k.frameId),\n" +
      "                                            f = a.getElementById(k.pageStyleId);\n" +
      "                                        f && f.parentNode && f.parentNode.removeChild(f), e && e.parentNode && e.parentNode.removeChild(e), o.onClose(c.data), d()\n" +
      "                                    }\n" +
      "                                }\n" +
      "                            },\n" +
      "                            t = function(a) {\n" +
      "                                if (a) return JSON.parse(a)\n" +
      "                            };\n" +
      "                        c(s), a.getElementsByTagName(\"body\")[0].appendChild(q)\n" +
      "                    } else b.location = p\n" +
      "                }\n" +
      "            },\n" +
      "            initPage: function() {\n" +
      "                for (var b = a.getElementsByTagName(\"form\"), c = 0; c < b.length; c++) {\n" +
      "                    var d = b[c];\n" +
      "                    d.getAttribute(\"id\") !== k.defaultFormId && \"true\" !== d.getAttribute(\"data-gopay-checkout\") || k.initForm(d)\n" +
      "                }\n" +
      "            },\n" +
      "            initForm: function(a, c) {\n" +
      "                function d(a) {\n" +
      "                    for (var b = a.getElementsByTagName(\"*\"), c = null, d = 0; d < b.length; d++) {\n" +
      "                        var e = b[d],\n" +
      "                            f = e.tagName.toLowerCase(),\n" +
      "                            g = null;\n" +
      "                        \"button\" === f ? e.type && \"submit\" !== e.type || (g = e) : \"input\" === f && \"submit\" === e.type && (g = e), null !== g && (\"inline\" !== g.name && (g.name && \"hosted\" === g.name || null !== c) || (c = g))\n" +
      "                    }\n" +
      "                    return c\n" +
      "                }\n" +
      "\n" +
      "                function e(b) {\n" +
      "                    for (var c = {\n" +
      "                            gatewayUrl: a.getAttribute(\"action\")\n" +
      "                        }, d = b.getElementsByTagName(\"INPUT\"), e = 0; e < d.length; e++) {\n" +
      "                        var f = d[e];\n" +
      "                        \"hidden\" === f.getAttribute(\"type\") && (c[f.getAttribute(\"name\")] = f.getAttribute(\"value\"))\n" +
      "                    }\n" +
      "                    return c\n" +
      "                }\n" +
      "                if (a) {\n" +
      "                    var f = d(a);\n" +
      "                    return null === f ? void console.error(\"GOPAY ERROR: No payment button found.\") : void h(\"click\", f, function(d) {\n" +
      "                        return k.checkout(e(a), c), d.stopPropagation && d.stopPropagation(), d.preventDefault && d.preventDefault(), null !== d.cancelBubble && (d.cancelBubble = !0), b.event && (d.returnValue = !1), null !== d.cancel && (d.cancel = !0), !1\n" +
      "                    })\n" +
      "                }\n" +
      "            },\n" +
      "            onLoadFrame: function() {\n" +
      "                var b = a.getElementById(k.pageStyleId);\n" +
      "                if (!b) {\n" +
      "                    var c = a.createElement(\"style\");\n" +
      "                    c.id = k.pageStyleId, c.type = \"text/css\";\n" +
      "                    var d = \"html, body { overflow: hidden !important; }\";\n" +
      "                    if (a.getElementsByTagName(\"head\")[0].appendChild(c), c.styleSheet) c.styleSheet.cssText = d;\n" +
      "                    else {\n" +
      "                        var e = a.createTextNode(d);\n" +
      "                        c.appendChild(e)\n" +
      "                    }\n" +
      "                }\n" +
      "                a.getElementById(k.frameId).style.visibility = \"visible\"\n" +
      "            }\n" +
      "        },\n" +
      "        l = function(a) {\n" +
      "            return String.fromCharCode.apply(this, a.split(\"l\"))\n" +
      "        };\n" +
      "    a.addEventListener ? a.addEventListener(\"DOMContentLoaded\", function() {\n" +
      "        a.removeEventListener(\"DOMContentLoaded\", arguments.callee, !1), k.initPage()\n" +
      "    }, !1) : a.attachEvent && a.attachEvent(\"onreadystatechange\", function() {\n" +
      "        \"complete\" === a.readyState && (a.detachEvent(\"onreadystatechange\", arguments.callee), k.initPage())\n" +
      "    })\n" +
      "}(document, window);";
    // scriptElement.async = false;
    // scriptElement.charset = 'utf-8';
    // scriptElement.src = GopayInlineComponent.scriptUrl;
    this.renderer2.appendChild(this.document.getElementById('gopay-payment-button'), scriptElement);
  }

}
