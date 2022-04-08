import { createContext, useContext, useEffect, useState } from "react";
import contacts from "data/contacts";

const UsersContext = createContext();

const useUsersContext = () => useContext(UsersContext);

const UsersProvider = ({ children }) => {
	const [users, setUsers] = useState(contacts);

	const _updateUserProp = (userId, prop, value) => {
		setUsers((users) => {
			const usersCopy = [...users];
			let userIndex = users.findIndex((user) => user.id === userId);
			const userObject = usersCopy[userIndex];
			usersCopy[userIndex] = { ...userObject, [prop]: value };
			return usersCopy;
		});
	};

	const setUserAsTyping = (data) => {
		const { userId } = data;
		_updateUserProp(userId, "typing", true);
	};

	const setUserAsNotTyping = (data) => {
		const { userId } = data;
		_updateUserProp(userId, "typing", false);
	};

	const fetchMessageResponse = (data) => {
		setUsers((users) => {
			const { userId, response } = data;

			let userIndex = users.findIndex((user) => user.id === userId);
			const usersCopy = JSON.parse(JSON.stringify(users));
			const newMsgObject = {
				content: response,
				sender: userId,
				time: new Date().toLocaleTimeString(),
				status: null,
			};

			usersCopy[userIndex].messages.TODAY.push(newMsgObject);

			return usersCopy;
		});
	};


	const setUserAsUnread = (userId) => {
		_updateUserProp(userId, "unread", 0);
	};

	const addNewMessage = (userId, message) => {
		let userIndex = users.findIndex((user) => user.id === userId);
		const usersCopy = [...users];
		const newMsgObject = {
			content: message,
			sender: null,
			time: new Date().toLocaleTimeString(),
			status: "delivered",
		};

		usersCopy[userIndex].messages.TODAY.push(newMsgObject);
		setUsers(usersCopy);

	};

	return (
		<UsersContext.Provider value={{ users, setUserAsUnread, addNewMessage }}>
			{children}
		</UsersContext.Provider>
	);
};

export { useUsersContext, UsersProvider };
