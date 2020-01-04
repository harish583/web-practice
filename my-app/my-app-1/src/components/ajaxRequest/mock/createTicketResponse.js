const createTicket = {
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
                "textContent": "Create ticket",
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
              "data": [
                {
                  "key": "subject",
                  "value": "",
                  "label": "Subject",
                  "type": "TEXTAREA",
                  "controlData": {
                    "options": [],
                    "text": "",
                    "uploadKey": "",
                    "uploadUrl": "",
                    "deleteUrl": "",
                    "style": {
                      "size": 16,
                      "weight": "NORMAL"
                    }
                  },
                  "order": 1,
                  "required": true,
                  "r_err_msg": "Please enter a subject for the ticket!",
                  "style": {
                    "size": 12,
                    "weight": "NORMAL"
                  }
                },
                {
                  "key": "priority",
                  "value": "urgent",
                  "label": "Priority",
                  "type": "SELECT",
                  "controlData": {
                    "options": [
                      {
                        "key": "Urgent",
                        "value": "urgent",
                        "order": 0
                      },
                      {
                        "key": "High",
                        "value": "high",
                        "order": 1
                      },
                      {
                        "key": "Normal",
                        "value": "normal",
                        "order": 2
                      },
                      {
                        "key": "Low",
                        "value": "low",
                        "order": 3
                      }
                    ],
                    "text": "Priority",
                    "uploadKey": "",
                    "uploadUrl": "",
                    "deleteUrl": "",
                    "style": {
                      "size": 16,
                      "weight": "NORMAL"
                    }
                  },
                  "order": 2,
                  "required": false,
                  "r_err_msg": "",
                  "style": {
                    "size": 12,
                    "weight": "NORMAL"
                  }
                },
                {
                  "key": "comment",
                  "value": "",
                  "label": "Description",
                  "type": "TEXTAREA",
                  "controlData": {
                    "options": [],
                    "text": "",
                    "uploadKey": "",
                    "uploadUrl": "",
                    "deleteUrl": "",
                    "style": {
                      "size": 16,
                      "weight": "NORMAL"
                    }
                  },
                  "order": 3,
                  "required": true,
                  "r_err_msg": "Please enter a description for the ticket!",
                  "style": {
                    "size": 12,
                    "weight": "NORMAL"
                  }
                },
                {
                  "key": "type",
                  "value": "problem",
                  "label": "Type",
                  "type": "SELECT",
                  "controlData": {
                    "options": [
                      {
                        "key": "Problem",
                        "value": "problem",
                        "order": 0
                      },
                      {
                        "key": "Incident",
                        "value": "incident",
                        "order": 1
                      },
                      {
                        "key": "Question",
                        "value": "question",
                        "order": 2
                      },
                      {
                        "key": "Task",
                        "value": "task",
                        "order": 3
                      }
                    ],
                    "text": "Type",
                    "uploadKey": "",
                    "uploadUrl": "",
                    "deleteUrl": "",
                    "style": {
                      "size": 16,
                      "weight": "NORMAL"
                    }
                  },
                  "order": 4,
                  "required": false,
                  "r_err_msg": "",
                  "style": {
                    "size": 12,
                    "weight": "NORMAL"
                  }
                },
                {
                  "key": "uploads",
                  "value": "",
                  "label": "Add attachment",
                  "type": "FILES",
                  "controlData": {
                    "options": [],
                    "text": "",
                    "uploadKey": "uploaded_data",
                    "uploadUrl": "https://devbots.spotcues.com/zendesk/attachment/",
                    "deleteUrl": "https://devbots.spotcues.com/zendesk/attachment/",
                    "style": {
                      "size": 16,
                      "weight": "NORMAL"
                    }
                  },
                  "order": 5,
                  "required": false,
                  "r_err_msg": "",
                  "style": {
                    "size": 12,
                    "weight": "NORMAL"
                  }
                }
              ]
            },
            "actions": {
              "orientation": "VERTICAL",
              "data": [
                {
                  "_id": "5caf12af7bcaed7197603ee9",
                  "isExternal": "",
                  "setState": "/bot/action",
                  "selectedState": "",
                  "responsePath": "",
                  "responseText": "Create Ticket",
                  "normalState": "Create Ticket",
                  "getState": "",
                  "controlType": "SUBMIT",
                  "controlData": [],
                  "order": 1,
                  "actionData": [
                    {
                      "key": "url",
                      "value": "zendesk/ticket/save/create"
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

export default createTicket;