import pic1 from "../pictures/pic1-male.jpg";
import pic2 from "../pictures/pic2-male.jpg";
import pic3 from "../pictures/pic2-woman.jpg";
import pic4 from "../pictures/pic4-woman.jpg";
import avatar1 from "../pictures/avatar1.png";
import avatar2 from "../pictures/avatar2.png";
import avatar3 from "../pictures/avatar3.png";
import avatar4 from "../pictures/avatar4.png";
import avatar5 from "../pictures/avatar5.png";

export let users = [
  {
    ID: 1,
    name: "Erel",
    last_seen: "online",
    pic: avatar1,

    messages: [
      {
        content: "hey Erel how are you?",
        sender: "Erel",
        time: "08:11",
      },
      {
        content: "you looks good today!",
        sender: "Erel",
        time: "16:45",
      },
    ],
  },
  {
    ID: 2,
    name: "Shahar",
    last_seen: "last seen today at 9:15",
    pic: avatar2,

    messages: [
      {
        content: "hello Shahar",
        sender:  "Shahar",
        time: "09:17",
      },
      {
        content: "You are the most beautiful man I ever saw!",
        sender:  "Shahar",
        time: "09:15",
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
        content: "whatsapppppp",
        sender: "Alon",
        time: "15:15",
      },
      {
        content: "all good?",
        sender: "Alon",
        time: "09:15",
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
        content: "Hey Iris, how's Tommy?",
        sender: "Iris",
        time: "11:30",
      },
      {
        content: "Or should I say Toytoy?",
        sender: "Iris",
        time: "19:16",
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
        content: "Hey, how are you Arad?",
        sender: "Arad",
        time: "20:12",
      },
      {
        content: "You are Erel's little brother right?",
        sender: "Arad",
        time: "07:18",
      },
    ],
  },
];

export default users;
