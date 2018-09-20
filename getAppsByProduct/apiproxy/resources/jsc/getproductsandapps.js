var mgmturl = context.getVariable("mgmturl");
var orgname = context.getVariable("org");
var productname = context.getVariable("product");
var n = context.getVariable("appcounter");
var mgmurlp = mgmturl+"/v1/o/"+orgname+"/apiproducts/"+productname;
var mgmurla = mgmturl+"/v1/o/"+orgname+"/apps/";
var headers = {
        Authorization : context.getVariable("request.header.authorization")
    };
var apiresponse = {};
//Mask consumerKey and  Secret values
function maskInfo (key, value) {
    var maskedValue = value;
    if (key == "consumerKey")
    {
        if(value && value.length > 5) {
            maskedValue = "*****";// + maskedValue.substring(value.length - 4, value.length);
        } else {
            maskedValue = "****";
        }
    }
    if (key == "consumerSecret")
    {
        if(value && value.length > 5) {
            maskedValue = "*****";// + maskedValue.substring(value.length - 4, value.length);
        } else {
            maskedValue = "****";
        }
    }
    return maskedValue;
}
//set or override app counter defaults
if (n === null )
{
n = 10;
}

//call mgmtAPI for getting product information
var req = new Request(mgmurlp, 'GET', headers);
var exchange = httpClient.send(req);
exchange.waitForComplete();
if (exchange.isSuccess()) {
    var productdetails = exchange.getResponse().content.asJSON;
    if (productdetails.error) {
      throw new Error(productdetails.error_description);
    }
} else if (productdetails.isError()) {
    throw new Error(productdetails.getError());
}
//call mgmtAPI for getting app id associated with a product
mgmurlp=mgmurlp+"?query=list&entity=apps";
var req = new Request(mgmurlp, 'GET', headers);
var exchange = httpClient.send(req);
// Wait for the asynchronous GET request to finish
exchange.waitForComplete();
if (exchange.isSuccess()) {
    var prodinfo = exchange.getResponse().content.asJSON;
    if (prodinfo.error) {
      throw new Error(prodinfo.error_description);
    }
} else if (prodinfo.isError()) {
    throw new Error(prodinfo.getError());
}
var apps =[];
//get apps for product
for (var i = 0; i < prodinfo.length; i++) { 
     var requrl = mgmurla+prodinfo[i];
     var req = new Request(requrl, 'GET', headers);
     var exchange = httpClient.send(req);
     exchange.waitForComplete();
        if (exchange.isSuccess()) {
             var responseObj = exchange.getResponse().content.asJSON;
             if (responseObj.error) {
                 throw new Error(responseObj.error_description);
            }
        } else if (exchange.isError()) {
                throw new Error(exchange.getError());
        }
        apps[i] = responseObj;
        if (i == n)
        {
            break;
        }
}
productdetails.apps=apps;
var maskedData = JSON.stringify(productdetails, maskInfo );
//print(maskedData);
context.setVariable("productdetails",maskedData);