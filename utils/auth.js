// Signin, Signup 비밀번호 토글
const PASSWORD_TOGGLE_CONSTANT = {
	visible: {
		inputType: "text",
		imageSrc: "/public/icons/password-visible.svg",
		imageAlt: "비밀번호 보이기 아이콘",
	},
	invisible: {
		inputType: "password",
		imageSrc: "/public/icons/password-invisible.svg",
		imageAlt: "비밀번호 숨김 아이콘",
	},
};
const passwordToggle = document.querySelector(".auth__toggle-password");
const passwordConfirmToggle = document.querySelector(
	".auth__toggle-password--confirm"
);

function getPasswordVisibility(inputType) {
	return inputType === "password"
		? PASSWORD_TOGGLE_CONSTANT.visible
		: PASSWORD_TOGGLE_CONSTANT.invisible;
}

passwordToggle.addEventListener("click", () => {
	const passwordInput = document.querySelector(".auth__input-password");
	const passwordIcon = document.querySelector(".auth__icon-password");

	const passwordVisibility = getPasswordVisibility(passwordInput.type);

	passwordInput.type = passwordVisibility.inputType;
	passwordIcon.src = passwordVisibility.imageSrc;
	passwordIcon.alt = passwordVisibility.imageAlt;
});

passwordConfirmToggle?.addEventListener("click", () => {
	const passwordConfirmInput = document.querySelector(
		".auth__input-password--confirm"
	);
	const passwordConfirmIcon = document.querySelector(
		".auth__icon-password--confirm"
	);

	const passwordVisibility = getPasswordVisibility(passwordConfirmInput.type);

	passwordConfirmInput.type = passwordVisibility.inputType;
	passwordConfirmIcon.src = passwordVisibility.imageSrc;
	passwordConfirmIcon.alt = passwordVisibility.imageAlt;
});

// Signin 유효성 검사
const USERS = [
	{
		email: "test@codeit.com",
		password: "codeit101",
	},
];
const SIGNIN_HINT = {
	email: {
		default: "",
		isNotFilled: "이메일을 입력해주세요.",
		isNotValidated: "올바른 이메일 주소가 아닙니다",
		isNotUser: "이메일을 변경해주세요.",
	},
	password: {
		default: "",
		isNotFilled: "비밀번호를 입력해주세요.",
		isNotUser: "비밀번호를 변경해주세요.",
	},
};
const EMAIL_PATTERN = /^[a-zA-Z0-9+-\_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
const INPUT_STATUS = {
	default: "default",
	isNotFilled: "isNotFilled",
	isNotValidated: "isNotValidated",
	isNotUser: "isNotUser",
};
const INPUT_HINT_CLASSNAME = "auth__input--hint";
const FOLDER_PAGE_PATH = "/pages/forder.html";

const emailInputElement = document.querySelector(".auth__input-email");
const passwordInputElement = document.querySelector(".auth__input-password");
const signInButtonElement = document.querySelector(".signin__button");
const emailHintElement = document.querySelector(".auth__email-hint");
const passwordHintElement = document.querySelector(".auth__password-hint");

function handleEmailHint(hintType) {
	const hintText = emailHintElement.innerText;
	if (hintText === SIGNIN_HINT.email[hintType]) return;

	emailHintElement.innerText = SIGNIN_HINT.email[hintType];
	if (hintType === INPUT_STATUS.default) {
		emailInputElement.classList.remove(INPUT_HINT_CLASSNAME);
	} else if (!emailInputElement.classList.contains(INPUT_HINT_CLASSNAME)) {
		emailInputElement.classList.add(INPUT_HINT_CLASSNAME);
	}
}

function handlePasswordHint(hintType) {
	const hintText = passwordHintElement.innerText;
	if (hintText === SIGNIN_HINT.password[hintType]) return;

	passwordHintElement.innerText = SIGNIN_HINT.password[hintType];
	if (hintType === INPUT_STATUS.default) {
		passwordInputElement.classList.remove(INPUT_HINT_CLASSNAME);
	} else if (!passwordInputElement.classList.contains(INPUT_HINT_CLASSNAME)) {
		passwordInputElement.classList.add(INPUT_HINT_CLASSNAME);
	}
}

function handleSigninSuccess() {
	emailInputElement.classList.remove(INPUT_HINT_CLASSNAME);
	passwordInputElement.classList.remove(INPUT_HINT_CLASSNAME);
	location.href = FOLDER_PAGE_PATH;
}

function handleEmailFocusoutCheck(email) {
	if (email === "") {
		handleEmailHint(INPUT_STATUS.isNotFilled);
	} else if (!EMAIL_PATTERN.test(email)) {
		handleEmailHint(INPUT_STATUS.isNotValidated);
	} else {
		handleEmailHint(INPUT_STATUS.default);
	}
}

function handlePasswordFocusoutCheck(password) {
	if (password === "") {
		handlePasswordHint(INPUT_STATUS.isNotFilled);
	} else {
		handlePasswordHint(INPUT_STATUS.default);
	}
}

function getIsUserEmail(email) {
	if (email === "") {
		handleEmailHint(INPUT_STATUS.isNotFilled);
		return false;
	} else if (!EMAIL_PATTERN.test(email)) {
		handleEmailHint(INPUT_STATUS.isNotValidated);
		return false;
	} else if (email !== USERS[0].email) {
		handleEmailHint(INPUT_STATUS.isNotUser);
		return false;
	} else {
		handleEmailHint(INPUT_STATUS.default);
		return true;
	}
}

function getIsUserPassword(password) {
	if (password === "") {
		handlePasswordHint(INPUT_STATUS.isNotFilled);
		return false;
	} else if (password !== USERS[0].password) {
		handlePasswordHint(INPUT_STATUS.isNotUser);
		return false;
	} else {
		handlePasswordHint(INPUT_STATUS.default);
		return true;
	}
}

function handleSignIn(email, password) {
	const isUserEmail = getIsUserEmail(email);
	const isUserPassword = getIsUserPassword(password);
	if (isUserEmail && isUserPassword) handleSigninSuccess();
}

emailInputElement.addEventListener("focusout", (e) => {
	const emailValue = emailInputElement.value;
	handleEmailFocusoutCheck(emailValue);
});

passwordInputElement.addEventListener("focusout", () => {
	const passwordValue = passwordInputElement.value;
	handlePasswordFocusoutCheck(passwordValue);
});

signInButtonElement.addEventListener("click", (e) => {
	e.preventDefault();
	const emailValue = emailInputElement.value;
	const passwordValue = passwordInputElement.value;
	handleSignIn(emailValue, passwordValue);
});
