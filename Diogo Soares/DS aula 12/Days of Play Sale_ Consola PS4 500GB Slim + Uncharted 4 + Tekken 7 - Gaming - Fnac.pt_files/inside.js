var _inside=_inside||[];var insideOrderTotal=-1;var maxLoop=7;var curLoop=0;(function()
{var accountKey="IN-1000321";var trackerURL="eu-track.inside-graph.com";function log()
{if(typeof(console)!="undefined"&&typeof(console.log)!="undefined")
{}}
var indexOf=[].indexOf||function(prop)
{for(var i=0;i<this.length;i++)
{if(this[i]===prop)
return i;}
return-1;};var getElementsByClassNameManual=function(className,context)
{if(context.getElementsByClassName)
return context.getElementsByClassName(className);var elems=document.querySelectorAll?context.querySelectorAll("."+ className):(function()
{var all=context.getElementsByTagName("*"),elements=[],i=0;for(;i<all.length;i++)
{if(all[i].className&&(" "+ all[i].className+" ").indexOf(" "+ className+" ")>-1&&indexOf.call(elements,all[i])===-1)
elements.push(all[i]);}
return elements;})();return elems;};function getDecimalSign(number)
{try
{var tempnum=myTrim(number);if(number.length>3)
{return number.charAt(number.length- 3);}}
catch(signex)
{}
return".";}
function deferWait(callback,test)
{if(test())
{callback();return;}
var _interval=10;var _spin=function()
{if(test())
{callback();}
else
{_interval=_interval>=1000?1000:_interval*2;setTimeout(_spin,_interval);}};setTimeout(_spin,_interval);}
function keepWait(callback,test)
{if(test())
{callback();}
var _interval=1000;var _spin=function()
{if(test())
{callback();}
setTimeout(_spin,_interval);};setTimeout(_spin,_interval);}
function myTrim(text)
{try
{return typeof(text.trim)==="function"?text.trim():text.replace(/^\s+|\s+$/gm,'');}
catch(trimex)
{}
return text;}
function setCookie(cname,cvalue,exdays)
{var d=new Date();d.setTime(d.getTime()+(exdays*24*60*60*1000));var expires="expires="+ d.toGMTString();document.cookie=cname+"="+ cvalue+"; "+ expires+";path=/"+";domain=.fnac.pt";}
function getCookie(cname)
{try
{var name=cname+"=";var ca=document.cookie.split(';');for(var i=0;i<ca.length;i++)
{try
{var c=myTrim(ca[i]);if(typeof(c)=="undefined")
{c=ca[i].replace(/^\s+|\s+$/gm,'');}
if(c.indexOf(name)==0)
return c.substring(name.length,c.length);}
catch(getcookiex)
{}}
return null;}
catch(cookiex)
{return null;}}
function deleteCookie(cname)
{document.cookie=cname+"="+ 0+"; "+"expires=01 Jan 1970 00:00:00 GMT"+";path=/"+";domain=.fnac.pt";}
function roundToTwo(num)
{if(Math!="undefined"&&Math.round!="undefined")
return+(Math.round(num+"e+2")+"e-2");else
return num;}
function getSearchParameters()
{var prmstr=window.location.search.substr(1);return prmstr!=null&&prmstr!=""?transformToAssocArray(prmstr):[];}
function transformToAssocArray(prmstr)
{var params=[];var prmarr=prmstr.split("&");for(var i=0;i<prmarr.length;i++)
{params[i]=prmarr[i];}
return params;}
function getViewData()
{try
{var data={};data.action="trackView";data.tags="host:"+ window.location.host;data.type="other";data.url=window.location.href;data.name="Unknown Page: "+ window.location.href;var temp_loc=document.location.href.split("://")[1].split("/");var page="";var add_tags="";var params=getSearchParameters();var searchterm="Search";if(params!=null&&params.length>0)
{for(var i=0;i<params.length;i++)
{add_tags=add_tags+","+ params[i];if(params[i].indexOf("Search=")==0)
{searchterm=params[i].split("Search=")[1];}
else if(params[i].indexOf("search=")==0)
{searchterm=params[i].split("search=")[1];}}
data.tags=data.tags+ add_tags;}
for(var i=1;i<temp_loc.length;i++)
{if(temp_loc[i]!=null&&temp_loc[i].length>0)
page=temp_loc[i];}
var curpage=page.split("?")[0];var tempcat=getElementsByClassNameManual("productList-content",document);var tempcat2=getElementsByClassNameManual("articleList Article-list",document)
if(typeof(tc_vars)!="undefined"&&tc_vars!=null&&typeof(tc_vars["template_name"])!="undefined"&&tc_vars["template_name"]!=null&&tc_vars["template_name"].toLowerCase()=="205_orderpipe_confirmation")
{data.type="orderconfirmed";data.name="Order Confirmed";}
else if(page.toLowerCase().indexOf("resultlist.aspx")==0)
{data.type="search";data.name=searchterm;}
else if(data.url.indexOf("/Basket/")!=-1||data.url.toLowerCase().indexOf("/orderpipe")!=-1)
{data.type="checkout";data.name=curpage;}
else if(data.url.toLowerCase().indexOf("/account/")!=-1)
{data.type="login";var tempPageName=getPageName();if(tempPageName!=null&&tempPageName.length>0)
data.name=tempPageName;else
data.name=curpage;}
else if(typeof(tc_vars)!="undefined"&&tc_vars!=null&&typeof(tc_vars["template_type"])!="undefined"&&tc_vars["template_type"]!=null&&tc_vars["template_type"].toLowerCase()=="home")
{data.type="homepage";data.name="Home Page";}
else if((typeof(tempcat)!="undefined"&&tempcat!=null&&tempcat.length>0)||(typeof(tempcat2)!="undefined"&&tempcat2!=null&&tempcat2.length>0))
{data.type="productcategory";var tempPageName=getCategoryName();if(tempPageName!=null&&tempPageName.length>0)
data.name=tempPageName;}
else if(typeof(tc_vars)!="undefined"&&tc_vars!=null&&typeof(tc_vars["template_type"])!="undefined"&&tc_vars["template_type"]!=null&&tc_vars["template_type"].toLowerCase()=="sous_home")
{data.type="productcategory";var tempPageName=getCategoryName();if(tempPageName!=null&&tempPageName.length>0)
data.name=tempPageName;}
else if(typeof(tc_vars)!="undefined"&&tc_vars!=null&&typeof(tc_vars["product_id"])!="undefined"&&tc_vars["product_id"]!=null&&tc_vars["product_id"].length>0)
{data.type="product";data.category=getCategory();data.img=getProductImage();data.sku=tc_vars["product_id"];var tempprice=getProductPrice();if(tempprice!=null)
data.price=tempprice;var tempPageName=getProductName();if(tempPageName!=null&&tempPageName.length>0)
data.name=tempPageName;}
else if((curpage==""||curpage=="/"||curpage=="index.html")&&temp_loc.length<3)
{data.type="homepage";data.name="Home Page";}
else
{data.type="article";var tempPageName=getPageName();if(tempPageName!=null&&tempPageName.length>0)
data.name=tempPageName;else
data.name=curpage;}
if(typeof(tc_vars)!="undefined"&&tc_vars!=null&&typeof(tc_vars["user_auth"])!="undefined"&&tc_vars["user_auth"]!=null&&tc_vars["user_auth"]=="1")
{if(typeof(tc_vars["user_segment"])!="undefined"&&tc_vars["user_segment"]!=null&&tc_vars["user_segment"].length>0)
{data.tags=data.tags+","+"user_segment:"+ tc_vars["user_segment"];}}
if(data.type=="product")
{var emstockcontent=getElementsByClassNameManual("moutarde gras",document);if(emstockcontent!=null&&emstockcontent.length>0)
{var emstockstring=emstockcontent[0].innerText||emstockcontent[0].textContent;if(typeof(emstockstring)!="undefined"&&emstockstring!=null&&emstockstring.length>0&&emstockstring.toLowerCase().indexOf("em stock")!=-1)
{data.tags=data.tags+",emstock";}}
var clickcontent=document.getElementById("ReservaLoja");if(clickcontent!=null)
{var clicklink=clickcontent.getElementsByTagName("a");if(clicklink!=null&&clicklink.length>0)
data.tags=data.tags+",clickandcollect";}}
return data;}
catch(ex)
{if(typeof(console)!="undefined"&&typeof(console.log)!="undefined")
console.log("getViewData error: ",ex);return null;}}
function getPageName()
{var content=document.getElementsByTagName("title");if(content!=null&&content.length>0)
{var result=content[0].textContent||content[0].innerText;return myTrim(result);}
return null;}
function getCategoryName()
{if(typeof(tc_vars)!="undefined"&&tc_vars!=null)
{var categoryName="";if(typeof(tc_vars["arbo_niv1"])!="undefined"&&tc_vars["arbo_niv1"]!=null&&tc_vars["arbo_niv1"].length>0)
{categoryName=tc_vars["arbo_niv1"];}
if(typeof(tc_vars["arbo_niv2"])!="undefined"&&tc_vars["arbo_niv2"]!=null&&tc_vars["arbo_niv2"].length>0)
{categoryName=tc_vars["arbo_niv2"];}
if(typeof(tc_vars["arbo_niv3"])!="undefined"&&tc_vars["arbo_niv3"]!=null&&tc_vars["arbo_niv3"].length>0)
{categoryName=tc_vars["arbo_niv3"];}
if(typeof(tc_vars["arbo_niv4"])!="undefined"&&tc_vars["arbo_niv4"]!=null&&tc_vars["arbo_niv4"].length>0)
{categoryName=tc_vars["arbo_niv4"];}
if(typeof(tc_vars["arbo_niv5"])!="undefined"&&tc_vars["arbo_niv5"]!=null&&tc_vars["arbo_niv5"].length>0)
{categoryName=tc_vars["arbo_niv5"];}
if(typeof(tc_vars["arbo_niv6"])!="undefined"&&tc_vars["arbo_niv6"]!=null&&tc_vars["arbo_niv6"].length>0)
{categoryName=tc_vars["arbo_niv6"];}
if(categoryName!=null&&categoryName.length>0)
{return categoryName;}}
return getPageName();}
function getCategory()
{if(typeof(tc_vars)!="undefined"&&tc_vars!=null)
{var categoryName="";if(typeof(tc_vars["arbo_niv1"])!="undefined"&&tc_vars["arbo_niv1"]!=null&&tc_vars["arbo_niv1"].length>0&&tc_vars["arbo_niv1"].toLowerCase()!=":fiche article")
{categoryName=tc_vars["arbo_niv1"];}
if(typeof(tc_vars["arbo_niv2"])!="undefined"&&tc_vars["arbo_niv2"]!=null&&tc_vars["arbo_niv2"].length>0&&tc_vars["arbo_niv2"].toLowerCase()!=":fiche article")
{categoryName=categoryName+" / "+ tc_vars["arbo_niv2"];}
if(typeof(tc_vars["arbo_niv3"])!="undefined"&&tc_vars["arbo_niv3"]!=null&&tc_vars["arbo_niv3"].length>0&&tc_vars["arbo_niv3"].toLowerCase()!=":fiche article")
{categoryName=categoryName+" / "+ tc_vars["arbo_niv3"];}
if(typeof(tc_vars["arbo_niv4"])!="undefined"&&tc_vars["arbo_niv4"]!=null&&tc_vars["arbo_niv4"].length>0&&tc_vars["arbo_niv4"].toLowerCase()!=":fiche article")
{categoryName=categoryName+" / "+ tc_vars["arbo_niv4"];}
if(typeof(tc_vars["arbo_niv5"])!="undefined"&&tc_vars["arbo_niv5"]!=null&&tc_vars["arbo_niv5"].length>0&&tc_vars["arbo_niv5"].toLowerCase()!=":fiche article")
{categoryName=categoryName+" / "+ tc_vars["arbo_niv5"];}
if(typeof(tc_vars["arbo_niv6"])!="undefined"&&tc_vars["arbo_niv6"]!=null&&tc_vars["arbo_niv6"].length>0&&tc_vars["arbo_niv6"].toLowerCase()!=":fiche article")
{categoryName=categoryName+" / "+ tc_vars["arbo_niv6"];}
if(categoryName!=null&&categoryName.length>0)
{return categoryName;}}
return null;}
function getProductImage()
{try
{var metaTags=document.getElementsByTagName("meta");var fbAppIdContent="";for(var i=0;i<metaTags.length;i++)
{if(metaTags[i].getAttribute("property")=="og:image")
{fbAppIdContent=metaTags[i].getAttribute("content");return fbAppIdContent;}}}
catch(tempex)
{}
try
{return tc_vars["product_picture_url"];}
catch(temepx)
{}
return null;}
function getProductPrice()
{try
{return tc_vars["product_discount_ati"];}
catch(tempex)
{}
return null;}
function getProductName()
{if(typeof(tc_vars)!="undefined"&&tc_vars!=null&&typeof(tc_vars["product_name"])!="undefined"&&tc_vars["product_name"]!=null&&tc_vars["product_name"].length>0)
{return tc_vars["product_name"];}
var metaTags=document.getElementsByTagName("meta");var fbAppIdContent="";for(var i=0;i<metaTags.length;i++)
{if(metaTags[i].getAttribute("property")=="og:title")
{fbAppIdContent=metaTags[i].getAttribute("content");if(fbAppIdContent!=null&&fbAppIdContent.length>0)
return fbAppIdContent;}}
var content=document.getElementsByTagName("title");if(content!=null&&content.length>0)
{var result=content[0].innerText||content[0].textContent;return myTrim(result);}
return null;}
function getOrderData()
{try
{var data=[];var totalprice=0;var orderId="auto";var personalcartcontent=getElementsByClassNameManual("BasketList-container",document);if(personalcartcontent!=null&&personalcartcontent.length>0)
{var items=getElementsByClassNameManual("BasketList-item js-BasketList-item",personalcartcontent[0]);if(items!=null&&items.length>0)
{for(var i=0;i<items.length;i++)
{var prices=getElementsByClassNameManual("BasketList-itemPrice",items[i]);var names=getElementsByClassNameManual("BasketList-itemTitle",items[i]);if(names==null||names.length==0)
{names=items[i].getElementsByTagName("a");}
else
{var tempname=names[0].getElementsByTagName("a");if(tempname!=null&&tempname.length>0)
{names=tempname;}}
var imgs=items[i].getElementsByTagName("img");var itemname=names[0].innerText||names[0].textContent;var price=prices[prices.length- 1].innerText||prices[prices.length- 1].textContent;if(price.indexOf("€")!=-1)
{var pricearr=price.split("€");if(pricearr!=null&&pricearr.length>1)
{price=pricearr[0]+","+ pricearr[1];}}
var decimalSign=getDecimalSign(myTrim(price.replace(/[^\d.,]/g,'')));if(decimalSign==",")
{price=price.replace(/[.]/g,"");price=price.replace(",",".");}
price=parseFloat(price.replace(/[^0-9\.\-\+]/g,""));var img=imgs[0].getAttribute("src");var qtys=getElementsByClassNameManual("BasketList-quantity js-BasketList-quantity",items[i]);var qty=1;if(qtys!=null&&qtys.length>0)
{qty=qtys[0].value;qty=Number(qty.replace(/[^\d.]/g,''));}
totalprice=totalprice+ price;price=price/qty;price=roundToTwo(price);itemname=myTrim(itemname);var tempsku=null;if(typeof(items[i].getAttribute("data-productid"))!="undefined"&&items[i].getAttribute("data-productid")!=null&&items[i].getAttribute("data-productid").length>0)
{tempsku=items[i].getAttribute("data-productid");}
if(tempsku==null||tempsku.length==0)
{tempsku=itemname;}
data.push({"action":"addItem","orderId":orderId,"name":itemname,"price":price,"img":img,"sku":tempsku,"qty":qty});}}
if(data.length>0)
{totalprice=roundToTwo(totalprice);try
{var tempcontent=getElementsByClassNameManual("f-Recap-finalRow",document);if(tempcontent!=null&&tempcontent.length>0)
{tempcontent=getElementsByClassNameManual("Recap-Price",tempcontent[0]);if(tempcontent!=null&&tempcontent.length>0)
{var temptext=tempcontent[0].innerText||tempcontent[0].textContent;if(temptext!=null&&temptext.length>0&&temptext.indexOf("€")!=-1)
{temptext=temptext.replace("€",",");var decimalSign=getDecimalSign(myTrim(temptext.replace(/[^\d.,]/g,'')));if(decimalSign==",")
{temptext=temptext.replace(/[.]/g,"");temptext=temptext.replace(",",".");}
totalprice=parseFloat(temptext.replace(/[^0-9\.\-\+]/g,""));}}}}
catch(totalex)
{}
data.push({"action":"trackOrder","orderId":orderId,"orderTotal":totalprice});setCookie("inside-ordertotal",totalprice,1);return data;}}
return null;}
catch(ex)
{log("getOrderData error. ",ex);return null;}}
function getOrderDataCart()
{try
{var data=[];var totalprice=0;var orderId="auto";var personalcartcontent=getElementsByClassNameManual("js-Basket-list",document);if(personalcartcontent!=null&&personalcartcontent.length>0)
{var items=getElementsByClassNameManual("js-Basket-listItem",document);if(items!=null&&items.length>0)
{for(var i=0;i<items.length;i++)
{var prices=getElementsByClassNameManual("f-Product-priceActual",items[i]);var names=getElementsByClassNameManual("f-Product-title",items[i]);if(names==null||names.length==0)
{names=items[i].getElementsByTagName("a");}
else
{var tempname=names[0].getElementsByTagName("a");if(tempname!=null&&tempname.length>0)
{names=tempname;}}
var imgs=items[i].getElementsByTagName("img");var itemname=names[0].innerText||names[0].textContent;var price=prices[0].innerText||prices[0].textContent;if(price.indexOf("€")!=-1)
{var pricearr=price.split("€");if(pricearr!=null&&pricearr.length>1)
{price=pricearr[0]+"."+ pricearr[1];}}
var decimalSign=getDecimalSign(myTrim(price.replace(/[^\d.,]/g,'')));if(decimalSign==",")
{price=price.replace(/[.]/g,"");price=price.replace(",",".");}
price=parseFloat(price.replace(/[^0-9\.\-\+]/g,""));var img=imgs[0].getAttribute("src");var qtys=getElementsByClassNameManual("f-BasketRecap-articleList-counter-amount",items[i]);var qty=1;if(qtys!=null&&qtys.length>0)
{qty=qtys[0].value;qty=Number(qty.replace(/[^\d.]/g,''));}
totalprice=totalprice+ price;price=price/qty;price=roundToTwo(price);itemname=myTrim(itemname);var tempsku=null;if(typeof(items[i].getAttribute("data-productid"))!="undefined"&&items[i].getAttribute("data-productid")!=null&&items[i].getAttribute("data-productid").length>0)
{tempsku=items[i].getAttribute("data-productid");}
if(tempsku==null||tempsku.length==0)
{tempsku=itemname;}
data.push({"action":"addItem","orderId":orderId,"name":itemname,"price":price,"img":img,"sku":tempsku,"qty":qty});}}
if(data.length>0)
{totalprice=roundToTwo(totalprice);try
{var tempcontent=getElementsByClassNameManual("f-Recap-finalRow",document);if(tempcontent!=null&&tempcontent.length>0)
{tempcontent=getElementsByClassNameManual("Recap-Price",tempcontent[0]);if(tempcontent!=null&&tempcontent.length>0)
{var temptext=tempcontent[0].innerText||tempcontent[0].textContent;if(temptext!=null&&temptext.length>0&&temptext.indexOf("€")!=-1)
{temptext=temptext.replace("€",",");var decimalSign=getDecimalSign(myTrim(temptext.replace(/[^\d.,]/g,'')));if(decimalSign==",")
{temptext=temptext.replace(/[.]/g,"");temptext=temptext.replace(",",".");}
totalprice=parseFloat(temptext.replace(/[^0-9\.\-\+]/g,""));}}}}
catch(totalex)
{}
data.push({"action":"trackOrder","orderId":orderId,"orderTotal":totalprice});setCookie("inside-ordertotal",totalprice,1);return data;}}
return null;}
catch(ex)
{log("getOrderDataCart error. ",ex);return null;}}
function getOrderDataCheckout()
{try
{var data=[];var tables=getElementsByClassNameManual("f-OnepageBasket-container",document);var totalprice=0;var orderId="auto";var detail=null;if(typeof(tc_vars)!="undefined"&&tc_vars!=null&&typeof(tc_vars.order_products)!="undefined"&&tc_vars.order_products!=null&&tc_vars.order_products.length>0)
{detail=tc_vars.order_products;for(var i=0;i<detail.length;i++)
{data.push({"action":"addItem","orderId":"auto","name":detail[i][1],"price":detail[i][5],"sku":detail[i][0],"img":detail[i][11],"qty":detail[i][4]});totalprice=totalprice+(Number(detail[i][5])*Number(detail[i][4]));}
if(data.length>0)
{totalprice=roundToTwo(totalprice);try
{tc_vars.order_amount;}
catch(totalex)
{}
data.push({"action":"trackOrder","orderId":orderId,"orderTotal":totalprice});setCookie("inside-ordertotal",totalprice,1);}
return data;}
return null;}
catch(ex)
{log("GetOrderDataCheckout error. ",ex);return null;}}
function getItemSKU(itemname,itemprice,itemqty)
{try
{var detail=null;if(typeof(tc_vars)!="undefined"&&tc_vars!=null&&typeof(tc_vars.order_products)!="undefined"&&tc_vars.order_products!=null&&tc_vars.order_products.length>0)
{detail=tc_vars.order_products;}
var tempitemname=insideLatinise(itemname);if(detail!=null)
{for(var i=0;i<detail.length;i++)
{var curitemname=detail[i][1];if(curitemname.toLowerCase().indexOf(tempitemname.toLowerCase())==0)
{return detail[i][0];}}
for(var i=0;i<detail.length;i++)
{var tempprice=Number(detail[i][3]);var tempqty=Number(detail[i][2])
if(itemprice==tempprice&&tempqty==itemqty)
{return detail[i][0];}}}
return null;}
catch(ex)
{log("getItemSKU error. ",ex);return null;}}
function checkItemCart()
{try
{var content=getElementsByClassNameManual("js-CartCount CartCount",document);if(content!=null&&content.length>0)
{var amount=content[0].innerText||content[0].textContent;amount=parseFloat(amount);if(amount>0)
return 1;}}
catch(tempex)
{}
try
{var content=document.getElementById("lblArticlesCount");if(content!=null)
{var amount=content.innerText||content.textContent;amount=parseFloat(amount);if(amount>0)
return 1;}}
catch(tempex)
{}
return 0;}
function getVisitorId()
{if(typeof(tc_vars)!="undefined"&&tc_vars!=null&&typeof(tc_vars["user_auth"])!="undefined"&&tc_vars["user_auth"]!=null&&tc_vars["user_auth"]=="1")
{if(typeof(tc_vars["user_id"])!="undefined"&&tc_vars["user_id"]!=null)
{return tc_vars["user_id"];}}
if(typeof(s)!="undefined"&&s!=null&&typeof(s["prop21"])!="undefined"&&s["prop21"]!=null&&s["prop21"].length>0)
{return s["prop21"];}
return null;}
function getVisitorName()
{try
{var tempcontent=document.getElementById("MonCompteLink");if(tempcontent!=null)
{var tempspan=getElementsByClassNameManual("moutarde",tempcontent);if(tempspan!=null&&tempspan.length>0)
{var tempname=tempspan[0].innerText||tempspan[0].textContent;tempname=myTrim(tempname);if(tempname.indexOf("Ol")==0&&tempname.indexOf(" ")!=-1)
{tempname=tempname.split(" ")[1];return myTrim(tempname);}}}}
catch(visitornamex)
{}
try
{var tempcontent=getElementsByClassNameManual("account js-HeaderTab-toggle",document);if(tempcontent!=null&&tempcontent.length>0)
{var tempspan=getElementsByClassNameManual("tab-txt tab-txt--maj",tempcontent[0]);if(tempspan!=null&&tempspan.length>0)
{var tempname=tempspan[0].innerText||tempspan[0].textContent;tempname=myTrim(tempname);return myTrim(tempname);}}}
catch(visitornamex)
{}
return"";}
function getNewOrderNumber()
{if(typeof(tc_vars)!="undefined"&&tc_vars!=null&&typeof(tc_vars["orderUserRefs"])!="undefined"&&tc_vars["orderUserRefs"]!=null)
{return tc_vars["orderUserRefs"];}
return null;}
function orderConfirmProcess()
{try
{var data=[];var detail=null;if(typeof(tc_vars)!="undefined"&&tc_vars!=null&&typeof(tc_vars.order_products)!="undefined"&&tc_vars.order_products!=null&&tc_vars.order_products.length>0)
{detail=tc_vars.order_products;}
if(detail!=null)
{var totalprice=0;var orderID=getNewOrderNumber();if(orderID==null||orderID.length==0)
{orderID="auto";}
for(var i=0;i<detail.length;i++)
{data.push({"action":"addItem","orderId":"auto","name":detail[i][1],"price":detail[i][5],"sku":detail[i][0],"img":detail[i][11],"qty":detail[i][4]});totalprice=totalprice+(Number(detail[i][5])*Number(detail[i][4]));}
if(data.length>0)
{try
{if(typeof(tc_vars["order_amount"])!="undefined"&&tc_vars["order_amount"]!=null)
{totalprice=tc_vars["order_amount"];}}
catch(amountex)
{}
data.push({"action":"trackOrder","orderId":"auto","orderTotal":totalprice});data.push({"action":"trackOrder","orderId":"auto","newOrderId":orderID,"orderTotal":totalprice,"update":true,"complete":true});return data;}}
return null;}
catch(ex)
{log("orderConfirmProcess error. ",ex);return null;}}
function insertInsideTag()
{if(typeof(_insideGraph)!="undefined"&&_insideGraph!=null)
{_insideGraph.processQueue();}
else
{var inside=document.createElement('script');inside.type='text/javascript';inside.async=true;inside.src=('https:'==document.location.protocol?'https://':'http://')+ trackerURL+'/ig.js?hn='
+ encodeURIComponent(document.location.hostname)+'&_='+ Math.random();var s=document.getElementsByTagName('script')[0];s.parentNode.insertBefore(inside,s);}}
function sendToInside()
{try
{if(typeof(_insideGraph)=="undefined"||_insideGraph==null)
{var userVisitorId=getVisitorId();var visitorName=getVisitorName();if(userVisitorId!=null&&userVisitorId.length>0)
{_inside.push({"action":"getTracker","account":accountKey,"visitorId":userVisitorId,"visitorName":visitorName});}
else
{_inside.push({"action":"getTracker","account":accountKey});}}
var view=getViewData();if(view!=null)
{if(view.type=="orderconfirmed")
{var tempconfirm=orderConfirmProcess();if(tempconfirm!=null&&tempconfirm.length>0)
{for(var i=0;i<tempconfirm.length;i++)
{_inside.push(tempconfirm[i]);if(tempconfirm[i].action=="trackOrder")
{temporderid=tempconfirm[i].orderId;tempordertotal=tempconfirm[i].orderTotal;}}}
deleteCookie("inside-ordertotal");_inside.push(view);}
else
{_inside.push(view);var orderData=null;if(view.type=="checkout")
{orderData=getOrderDataCart();if(orderData==null||orderData.length==0)
{orderData=getOrderDataCheckout();}}
else
{orderData=getOrderData();}
if(orderData!=null&&orderData.length>0)
{for(var i=0;i<orderData.length;i++)
{_inside.push(orderData[i]);if(orderData[i].action=="trackOrder")
{view.orderId=orderData[i].orderId;view.orderTotal=orderData[i].orderTotal;insideOrderTotal=orderData[i].orderTotal;}}}
else if(checkItemCart()==1)
{var total_temp=getCookie("inside-ordertotal");try
{total_temp=Number(total_temp);}
catch(numex)
{total_temp=0;}
if(total_temp!=null&&total_temp>0)
{view.orderId="auto";view.orderTotal=total_temp;}}
else if(view.type=="checkout"&&view.url.indexOf("orderpipe/pop/panier")!=-1&&checkItemCart()==0)
{deleteCookie("inside-ordertotal");}}
log("Inside Debug: ",_inside);insertInsideTag()}}
catch(sendex)
{_inside=[];_inside.push({"action":"getTracker","account":accountKey});_inside.push({"action":"trackView","type":"other","name":"Check: "+ window.location.href});}}
deferWait(sendToInside,function()
{var tempcururl=window.location.href;tempcururl=tempcururl.toLowerCase();var temporderdata=null;try
{if(typeof(tc_vars)!="undefined"&&tc_vars!=null&&typeof(tc_vars["template_name"])!="undefined"&&tc_vars["template_name"]!=null&&tc_vars["template_name"].toLowerCase()=="205_orderpipe_confirmation")
{return true;}
if(tempcururl.indexOf("/basket/")!=-1||tempcururl.indexOf("/orderpipe")!=-1)
{temporderdata=getOrderDataCart();if(temporderdata!=null&&temporderdata.length>0)
{keepWait(sendToInside,function()
{if(typeof(_insideGraph)!="undefined"&&_insideGraph!=null)
{var temporderdata=getOrderDataCart();if(temporderdata!=null&&temporderdata.length>0)
{for(var i=0;i<temporderdata.length;i++)
{if(temporderdata[i].action=="trackOrder")
{if(insideOrderTotal!=temporderdata[i].orderTotal)
{if(curLoop<maxLoop)
{curLoop=curLoop+ 1;return true;}}}}}
else if(insideOrderTotal>0)
{insideOrderTotal=0;if(curLoop<maxLoop)
{curLoop=curLoop+ 1;return true;}}
else if(insideOrderTotal==-1)
{insideOrderTotal=0;}
return false;}});return true;}
else
{temporderdata=getOrderDataCheckout();if(temporderdata!=null&&temporderdata.length>0)
{return true;}}}}
catch(tempex)
{}
if(document.readyState!='loading'&&document.readyState!='interactive')
{if(tempcururl.indexOf("/basket/")==-1&&tempcururl.indexOf("/orderpipe")==-1)
{keepWait(sendToInside,function()
{if(typeof(_insideGraph)!="undefined"&&_insideGraph!=null)
{var temporderdata=getOrderData();if(temporderdata!=null&&temporderdata.length>0)
{for(var i=0;i<temporderdata.length;i++)
{if(temporderdata[i].action=="trackOrder")
{if(insideOrderTotal!=temporderdata[i].orderTotal)
{if(curLoop<maxLoop)
{curLoop=curLoop+ 1;return true;}}}}}
else if(insideOrderTotal>0)
{insideOrderTotal=0;if(curLoop<maxLoop)
{curLoop=curLoop+ 1;return true;}}
else if(insideOrderTotal==-1)
{insideOrderTotal=0;}
return false;}});return true;}
else if(tempcururl.indexOf("/orderpipe/pop/panier")!=-1)
{keepWait(sendToInside,function()
{if(typeof(_insideGraph)!="undefined"&&_insideGraph!=null)
{var temporderdata=getOrderDataCart();if(temporderdata!=null&&temporderdata.length>0)
{for(var i=0;i<temporderdata.length;i++)
{if(temporderdata[i].action=="trackOrder")
{if(insideOrderTotal!=temporderdata[i].orderTotal)
{if(curLoop<maxLoop)
{curLoop=curLoop+ 1;return true;}}}}}
else if(insideOrderTotal>0)
{insideOrderTotal=0;if(curLoop<maxLoop)
{curLoop=curLoop+ 1;return true;}}
else if(insideOrderTotal==-1)
{insideOrderTotal=0;}
return false;}});return true;}
return true;}
return false;});var tempLatinise={};tempLatinise.latin_map={"Á":"A","Ă":"A"};var insideLatinise=function(tempstring)
{try
{return tempstring.replace(/[^A-Za-z0-9\[\] ]/g,function(a)
{return tempLatinise.latin_map[a]||a;})}
catch(latinex)
{return tempstring;}};})();