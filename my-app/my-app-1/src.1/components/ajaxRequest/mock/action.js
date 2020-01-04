const response = {
    "success": true,
    "result": [
      {
        "sponsoredData": {},
        "_channel": "587c56497c3465c078f6f2df",
        "notify": false,
        "_targetUsers": [],
        "userMentions": [],
        "hashTags": [],
        "attachments": [],
        "_comments": [],
        "template": "GENERIC",
        "_user": {
          "_id": "582f03e8f65c6faa1aedfa6b",
          "modifiedAt": "2019-04-04T06:08:30.246Z",
          "__v": 0,
          "enterpriseId": "587c56497c3465c078f6f2df",
          "isGroupE": true,
          "username": "zendeskbot@spotcues.com",
          "web": "ONLINE",
          "isAdmin": false,
          "type": [
            "DEFAULT"
          ],
          "verified": false,
          "activated": false,
          "userType": "BOT",
          "lastTimezone": "330",
          "isAnalyticsEnabled": false,
          "user_agent": {
            "app": {
              "ver": {
                "revision": 0,
                "minor": 0,
                "major": 0
              },
              "isGroupE": false,
              "isEnterprise": false
            }
          },
          "logLevel": "INFO",
          "createdAt": "2016-11-18T13:36:40.098Z",
          "deleted": false,
          "firstNotificationTime": "2016-11-18T13:36:40.098Z",
          "pushNotificationCount": 0,
          "notifications": 0,
          "chatNotifications": {
            "group": true,
            "oneOne": true
          },
          "notificationsSetting": "SELF",
          "status": "OFFLINE",
          "androidToken": "",
          "iosToken": "",
          "isOnboardingMailSubscriber": true,
          "mobileVerified": false,
          "mobileNumber": "",
          "emails": [],
          "email": "zendeskbot@spotcues.com",
          "name": "Zendesk"
        },
        "user": "Zendesk",
        "type": "NORMAL",
        "content": "",
        "subtitle": "",
        "text": "",
        "genericFeedData": {
          "name": "Zendesk",
          "icon": "https://d26a57ydsghvgx.cloudfront.net/www/public/assets/images/logos/zendesk144.png",
          "layout": "NONE",
          "data": [
            {
              "content": [
                {
                  "_id": "",
                  "thumbnailUrl": "",
                  "url": "",
                  "type": "TEXT",
                  "attachment_type": "NONE",
                  "textContent": "How can I help you, pick one of the options",
                  "weight": "NORMAL",
                  "size": 16,
                  "textAlign": "LEFT",
                  "order": 1,
                  "style": {
                    "size": 16,
                    "weight": "NORMAL"
                  }
                }
              ],
              "customData": {
                "orientation": "VERTICAL",
                "data": []
              },
              "actions": {
                "orientation": "VERTICAL",
                "data": [
                  {
                    "_id": "5cae0efb7bcaed7197603ee0",
                    "isExternal": "",
                    "setState": "/bot/action",
                    "selectedState": "",
                    "responsePath": "",
                    "responseText": "Create Ticket",
                    "normalState": "Create Ticket",
                    "getState": "",
                    "controlType": "Submit",
                    "controlData": [],
                    "order": 1,
                    "actionData": [
                      {
                        "key": "URL",
                        "value": "zendesk/ticket/create"
                      }
                    ],
                    "loginConfig": [],
                    "style": {
                      "normal": {
                        "size": 14,
                        "weight": "NORMAL"
                      },
                      "response": {
                        "size": 16,
                        "weight": "NORMAL"
                      }
                    }
                  },
                  {
                    "_id": "5cae0efb7bcaed7197603ee1",
                    "isExternal": "",
                    "setState": "/bot/action",
                    "selectedState": "",
                    "responsePath": "",
                    "responseText": "Update Ticket Status",
                    "normalState": "Update Ticket Status",
                    "getState": "",
                    "controlType": "Submit",
                    "controlData": [],
                    "order": 2,
                    "actionData": [
                      {
                        "key": "URL",
                        "value": "/zendesk/ticket/search/for/update"
                      }
                    ],
                    "loginConfig": [],
                    "style": {
                      "normal": {
                        "size": 14,
                        "weight": "NORMAL"
                      },
                      "response": {
                        "size": 16,
                        "weight": "NORMAL"
                      }
                    }
                  },
                  {
                    "_id": "5cae0efb7bcaed7197603ee2",
                    "isExternal": "",
                    "setState": "/bot/action",
                    "selectedState": "",
                    "responsePath": "",
                    "responseText": "Track Ticket",
                    "normalState": "Track Ticket",
                    "getState": "",
                    "controlType": "Submit",
                    "controlData": [],
                    "order": 3,
                    "actionData": [
                      {
                        "key": "URL",
                        "value": "/zendesk/ticket/search/for/track"
                      }
                    ],
                    "loginConfig": [],
                    "style": {
                      "normal": {
                        "size": 14,
                        "weight": "NORMAL"
                      },
                      "response": {
                        "size": 16,
                        "weight": "NORMAL"
                      }
                    }
                  }
                ]
              }
            }
          ]
        }
      }
    ]
  };

  export default response;