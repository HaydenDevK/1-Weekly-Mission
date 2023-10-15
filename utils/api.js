import { BASE_URL } from "./constants.js";
import { goToFolderPage } from "./auth.js";

async function signIn(userData) {
	try {
		const response = await fetch(`${BASE_URL}/sign-in`, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(userData),
		});

		if (!response.ok) {
			throw new Error(response.status);
		} else {
			const result = await response.json();
			const accessToken = result.data.accessToken || "token";
			window.localStorage.setItem("accessToken", accessToken);
			goToFolderPage();
		}
	} catch (error) {
		console.error("로그인 실패:", error);
	}
}

export { signIn };
