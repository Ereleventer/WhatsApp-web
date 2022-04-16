import pic1 from "../pictures/pic1-male.jpg";
import pic2 from "../pictures/pic2-male.jpg";
import pic3 from "../pictures/pic2-woman.jpg";
import pic4 from "../pictures/pic4-woman.jpg";

const users = [
    {
        ID: 1,
        name: "Erel",
        message: "hhhhiiiiiii",
		pic: pic1,

        messages: [
				{
					content: "hiuiiiii",
					sender: 8,
					time: "08:11:26",
					status: null,
				},
                {
					content: "jhihhihhi",
					sender: null,
					time: "09:15:45",
					status: "read",
				}
            ]
},
    {
        ID: 2,
        name: "Shahar",
        message: "Heeyewf;kodfk;koyyyyyyy",
		pic: pic2,

        messages: [
				{
					content: "hiuiiiii",
					sender: 8,
					time: "08:11:26",
					status: null,
				},
                {
					content: "jhihhihhi",
					sender: null,
					time: "09:15:45",
					status: "read",
				},
            ]
},
    {
        ID: 3,
        name: "Alon",
        message: "Heeyy!!!!yyyyyy",
		pic:pic3,

        messages: [
				{
					content: "hiuiiiii",
					sender: 8,
					time: "08:11:26",
					status: null,
				},
                {
					content: "jhihhihhi",
					sender: null,
					time: "09:15:45",
					status: "read",
				},
            ]
},
    {
        ID: "chat",
        name: "Chat",
        message: "Heeyyyyyyyy",
		pic:pic4,
        messages: [
				{
					content: "hiuiiiii",
					sender: 8,
					time: "08:11:26",
					status: null,
				},
                {
					content: "jhihhihhi",
					sender: null,
					time: "09:15:45",
					status: "read",
				},
            ]
},
{
	ID: 4,
	name: "Iris",
	message: "Heeyewf;kodfk;koyyyyyyy",
	pic: pic2,

	messages: [
			{
				content: "hiuiiiii",
				sender: 8,
				time: "08:11:26",
				status: null,
			},
			{
				content: "jhihhihhi",
				sender: null,
				time: "09:15:45",
				status: "read",
			},
		]
},
{
	ID: 5,
	name: "Arad",
	message: "Heeyewf;kodfk;koyyyyyyy",
	pic: pic2,

	messages: [
			{
				content: "hiuiiiii",
				sender: 8,
				time: "08:11:26",
				status: null,
			},
			{
				content: "jhihhihhi",
				sender: null,
				time: "09:15:45",
				status: "read",
			},
		]
},
];

export default users; 