import { useState } from "react";

export const GitFetch = () => {
	const [userName, setUserName] = useState("");
	const [userData, setUserData] = useState(null);

	const apiUrl = `https://api.github.com/users/${userName}`;

	const getUserName = async () => {
		const response = await fetch(apiUrl);
		const data = await response.json();
		setUserData(data);
	};
	return (
		<div>
			<input
				type="text"
				placeholder="Enter GitHub username"
				value={userName}
				onChange={(e) => setUserName(e.target.value)}
			/>
			<button onClick={getUserName}>Search</button>
			{userData && (
				<div>
					<h2>User Data:</h2>
					<p>User Image: {userData.avatar}</p>
					<p>Name: {userData.login}</p>
					<p>Followers: {userData.followers}</p>
				</div>
			)}
		</div>
	);
};
