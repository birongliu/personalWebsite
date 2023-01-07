import React, { useEffect, useState } from "react";
import { LogoName, navLinks } from "../../utils/constants";
import Utils from "../../utils/Utils";
import { Theme } from "../../utils/Types";
import { NavLink } from "react-router-dom";

function handleTheme(
	event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
	setTheme: React.Dispatch<React.SetStateAction<Theme | undefined>>,
) {
	if (!event.defaultPrevented) event.preventDefault();
	const currentTheme = Utils.getCurrentTheme();
	const newTheme = currentTheme === "dark" ? "light" : "dark";
	localStorage.setItem("theme", newTheme);
	document.documentElement.classList.add(newTheme);
	document.documentElement.classList.remove(currentTheme);
	setTheme(newTheme);
}

function handleNavBarMenu(
	event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
) {
	if (!event.defaultPrevented) event.preventDefault();
	console.log(event);
}

export default function Navigator() {
	const [theme, setTheme] = useState<Theme>();

	useEffect(() => {
		const currentTheme = Utils.getCurrentTheme();
		document.documentElement.classList.add(currentTheme);
		setTheme(currentTheme);
	}, []);

	return (
		<nav className="bg-slate-100 dark:bg-slate-900 backdrop-blur bg-opacity-70 dark:bg-opacity-70 fixed left-0 right-0 top-0 z-10">
			<div className="container flex flex-wrap items-center justify-between mx-auto">
				<a href="/" className="flex items-center">
					<span className="font-bold font-hack m-0 text-2xl text-brand-3 dark:text-white">
						{LogoName}
					</span>
				</a>
				<div className="flex md:order-2">
					<button
						onClick={(e) => handleTheme(e, setTheme)}
						id="theme-toggle"
						type="button"
						className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
					>
						<svg
							id="theme-toggle-dark-icon"
							className={`${theme === "dark" ? "hidden" : ""} w-5 h-5`}
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
						</svg>
						<svg
							id="theme-toggle-light-icon"
							className={`${theme === "dark" ? "" : "hidden"} w-5 h-5`}
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
								fillRule="evenodd"
								clip-rule="evenodd"
							></path>
						</svg>
					</button>
					<button
						data-collapse-toggle="navbar-sticky"
						type="button"
						className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
						aria-controls="navbar-sticky"
						aria-expanded="false"
						onClick={handleNavBarMenu}
					>
						<span className="sr-only">Open main menu</span>
						<svg
							className="w-6 h-6"
							aria-hidden="true"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
								clip-rule="evenodd"
							></path>
						</svg>
					</button>
				</div>
				<div
					className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
					id="navbar-sticky"
				>
					<ul className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
					{navLinks.map((link) => (
							<li key={link.name}>
								<NavLink
									to={link.path}
									key={link.name}
									className={({ isActive }) =>
										isActive
											? "block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
											: "block py-2 pl-3 pr-4 text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-70"
									}
								>
									{link.name}
								</NavLink>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
}
