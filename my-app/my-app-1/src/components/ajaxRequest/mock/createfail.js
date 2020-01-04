var createFail = {
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
          "_id": "57ececa4deb436643faa6574",
          "modifiedAt": "2019-04-12T07:27:09.215Z",
          "__v": 0,
          "firstName": "Zendesk",
          "lastName": "Bot",
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
          "createdAt": "2016-09-29T10:27:48.798Z",
          "deleted": false,
          "firstNotificationTime": "2016-09-29T10:27:48.798Z",
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
          "name": "Zendesk Bot"
        },
        "user": "Zendesk Bot",
        "type": "NORMAL",
        "content": "",
        "subtitle": "",
        "text": "",
        "genericFeedData": {
          "name": "Zendesk",
          "icon": "https://d16a35lzjcij1x.cloudfront.net/small_Zendesk1550234477207.jpg",
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
                  "textContent": "We were unable to process your request. Please try again",
                  "weight": "NORMAL",
                  "size": 16,
                  "textAlign": "LEFT",
                  "order": 1,
                  "style": {
                    "size": 16,
                    "weight": "NORMAL"
                  }
                },
                {
                  "_id": "",
                  "thumbnailUrl": "",
                  "url": "",
                  "type": "TITLE",
                  "attachment_type": "NONE",
                  "textContent": "ticket cannot be created/updated; this Zendesk account has expired",
                  "weight": "NORMAL",
                  "size": 16,
                  "textAlign": "LEFT",
                  "order": 2
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
                    "_id": "5cb86c775a43785e81a3af26",
                    "isExternal": "",
                    "setState": "/bot/action",
                    "selectedState": "",
                    "responsePath": "",
                    "responseText": "View Options",
                    "normalState": "View Options Again",
                    "getState": "",
                    "controlType": "SUBMIT",
                    "controlData": [],
                    "order": 1,
                    "actionData": [
                      {
                        "key": "url",
                        "value": "zendesk/begin/"
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
  }

  export default createFail;