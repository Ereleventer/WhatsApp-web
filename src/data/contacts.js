import avatar1 from "../pictures/avatar1.png";
import avatar2 from "../pictures/avatar2.png";
import avatar3 from "../pictures/avatar3.png";
import avatar4 from "../pictures/avatar4.png";
import avatar5 from "../pictures/avatar5.png";
import car from "../pictures/car.jpg";
import tigers from "../pictures/tigers.mp4";
import eminem from "../pictures/eminem.mp3";
import tommy from "../pictures/Tommy.jpeg";
import enjoy from "../pictures/enjoy.jpeg";
import welcome from "../pictures/welcome.png";


export let users = [
  {
    ID: 0,
    name: "WELCOME",
    last_seen: "online",
    pic: welcome,

    messages: [
      {
        content: "Welcome to our chat app!",
        sender: "WELCOME",
        time: "00:00",
        type: "text",
      },
      {
        content: "Please add new chat or select one of the excisting chats.",
        sender: "WELCOME",
        time: "00:01",
        type: "text",
      },
      {
        content: enjoy,
        sender: "WELCOME",
        time: "00:01",
        type: "img",
      },
    ],
  },
  {
    ID: 1,
    name: "Erel",
    last_seen: "online",
    pic: avatar1,

    messages: [
      {
        content: "hey how are you?",
        sender: "Erel",
        time: "08:11",
        type: "text",
      },
      {
        content: "Did I show you my new car?",
        sender: "Erel",
        time: "16:46",
        type: "text",
      },
      {
        content: car,
        sender: "Erel",
        time: "16:47",
        type: "pic",
      },
      {
        content: tigers,
        sender: "Erel",
        time: "16:48",
        type: "vid",
      },
      {
        content: eminem,
        sender: "Erel",
        time: "16:49",
        type: "audio",
      },
      {
        content: "bye see you later!",
        sender: "Erel",
        time: "16:50",
        type: "text",
      },
    ],
  },
  {
    ID: 2,
    name: "Shahar",
    last_seen: "last seen today at 09:15",
    pic: avatar2,

    messages: [
      {
        content: "hey how are you?",
        sender: "Shahar",
        time: "08:00",
        type: "text",
      },
      {
        content: "Wanna take a look at the cutest dog ever?",
        sender: "Shahar",
        time: "08:03",
        type: "text",
      },
      {
        content: tommy,
        sender: "Shahar",
        time: "08:04",
        type: "pic",
      },
      {
        content: tigers,
        sender: "Shahar",
        time: "08:08",
        type: "vid",
      },
      {
        content: eminem,
        sender: "Shahar",
        time: "08:10",
        type: "audio",
      },
      {
        content: "it was nice talking to you",
        sender: "Shahar",
        time: "08:12",
        type: "text",
      },
    ],
  },
  {
    ID: 3,
    name: "Alon",
    last_seen: "online",
    pic: avatar3,

    messages: [
      {
        content: "hey how are you?",
        sender: "Alon",
        time: "10:00",
        type: "text",
      },
      {
        content: "this is tommy! my best friend",
        sender: "Alon",
        time: "10:04",
        type: "text",
      },
      {
        content: tommy,
        sender: "Alon",
        time: "10:05",
        type: "pic",
      },
      {
        content: tigers,
        sender: "Alon",
        time: "10:07",
        type: "vid",
      },
      {
        content: eminem,
        sender: "Alon",
        time: "10:09",
        type: "audio",
      },
      {
        content: "have a good day",
        sender: "Alon",
        time: "11:00",
        type: "text",
      },
    ],
  },

  {
    ID: 4,
    name: "Iris",
    last_seen: "last seen yesterday at 10:45",
    pic: avatar4,

    messages: [
      {
        content: "hey how are you?",
        sender: "Iris",
        time: "10:00",
        type: "text",
      },
      {
        content: "look at my car!",
        sender: "Iris",
        time: "10:04",
        type: "text",
      },
      {
        content: car,
        sender: "Iris",
        time: "10:05",
        type: "pic",
      },
      {
        content: tigers,
        sender: "Iris",
        time: "10:07",
        type: "vid",
      },
      {
        content: eminem,
        sender: "Iris",
        time: "10:09",
        type: "audio",
      },
      {
        content: "bye",
        sender: "Iris",
        time: "10:30",
        type: "text",
      },
    ],
  },
  {
    ID: 5,
    name: "Arad",
    last_seen: "last seen today at 11:36",
    pic: avatar5,

    messages: [
      {
        content: "hey how are you?",
        sender: "Arad",
        time: "10:00",
        type: "text",
      },
      {
        content: "my car!",
        sender: "Arad",
        time: "10:04",
        type: "text",
      },
      {
        content: car,
        sender: "Arad",
        time: "10:05",
        type: "pic",
      },
      {
        content: tigers,
        sender: "Arad",
        time: "10:07",
        type: "vid",
      },
      {
        content: eminem,
        sender: "Arad",
        time: "10:09",
        type: "audio",
      },
      {
        content: "nice talking to you, I hope you enjoyed",
        sender: "Arad",
        time: "14:22",
        type: "text",
      },
    ],
  },
];

export default users;
