# GET APPS ASSOCIATED WITH PRODUCT
This API proxy will fetch all the apps associated with an API product. And it also masks ConsumerKey and Secret in the response.
Currently it is two step process to manually fetch each appid and get details

## Steps to run install
1. Download and install Maven 3.0.*
2. Clone this repo https://github.com/prasanthpotturi/getAppsAssociatedWithProduct
3. cd getAppsAssociatedWithProduct/getAppsByProduct
4. Execute mvn install -Ptest -Dusername={apigee-edge-email} -Dpassword={apigee-edge-password} -Dorg={apigee-edge-org}

## Steps to test/run

### Header:

Authorization: Basic <orgAdmin/readonlyOrgAdmin>

Content-Type:application/x-www-form-urlencoded

### Body:

org: {org-name} //organization name

mgmturl: {management api url} //e.g: https://api.enterprise.apigee.com

product: {API product name}  //provide API product name 

## Sample Response:

//Sample response


{
    
    "apiResources": [],
    
    "approvalType": "auto",
    
    "attributes": [],
    
    "createdAt": 1528491241149,
    
    "createdBy": "acme@abc.com",
    
    "description": "",
    
    "displayName": "Sample",
    
    "environments": [
    
        "prod",
    
        "test"
    
    ],
    
    "lastModifiedAt": 1533671899597,
    
    "lastModifiedBy": "acme@abc.com",
    
    "name": "sample",
    
    "proxies": [
    
        "demo",
    
        "demp-app",
    
        "oauth2"
    
    ],
    
    "scopes": [
    
        ""
    
    ],
    
    "apps": [
    
        {
    
            "accessType": "read",
    
            "apiProducts": [],
    
            "appFamily": "default",
    
            "appId": "5b3a5d01-cb11-4dc7-a3a1-1f815cca8607",
    
            "attributes": [
    
                {
    
                    "name": "DisplayName",
    
                    "value": "sample-app"
    
                }
    
            ],
    
            "callbackUrl": "https://acme.apigee.net/web/callback",
    
            "createdAt": 1528489021885,
    
            "createdBy": "acme@abc.com",
    
            "credentials": [
    
                {
    
                    "apiProducts": [
    
                        {
    
                            "apiproduct": "sample-product",
    
                            "status": "approved"
    
                        }
    
                    ],
    
                    "attributes": [],
    
                    "consumerKey": "*****",
    
                    "consumerSecret": "*****",
    
                    "expiresAt": -1,
    
                    "issuedAt": 1528489021914,
    
                    "scopes": [],
    
                    "status": "approved"
    
                }
    
            ],
    
            "developerId": "a5bd1736-166a-4505-a98f-73fd636e7726",
    
            "lastModifiedAt": 1528489021885,
    
            "lastModifiedBy": "acme@abc.com",
    
            "name": "sample-app",
    
            "scopes": [],
    
            "status": "approved"
    
        },
    
        {
    
            "apiProducts": [],
    
            "appFamily": "default",
    
            "appId": "65130a49-cf05-499f-b94e-6e827224250b",
    
            "attributes": [
    
                {
    
                    "name": "DisplayName",
    
                    "value": "sample"
    
                },
    
                {
    
                    "name": "Notes",
    
                    "value": ""
    
                }
    
            ],
    
            "callbackUrl": "",
    
            "createdAt": 1537389381337,
    
            "createdBy": "acme@abc.com",
    
            "credentials": [
    
                {
    
                    "apiProducts": [
    
                        {
    
                            "apiproduct": "sample",
    
                            "status": "approved"
    
                        }
    
                    ],
    
                    "attributes": [],
    
                    "consumerKey": "*****",
    
                    "consumerSecret": "*****",
    
                    "expiresAt": -1,
    
                    "issuedAt": 1537389381905,
    
                    "scopes": [],
    
                    "status": "approved"
    
                }
    
            ],
    
            "developerId": "bfe22a16-5cbb-4a16-8d1b-b023579c8043",
    
            "lastModifiedAt": 1537389381337,
    
            "lastModifiedBy": "**********",
    
            "name": "sample",
    
            "scopes": [],
    
            "status": "approved"
    
        }

    ]

}
