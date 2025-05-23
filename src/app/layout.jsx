import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
	weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
	subsets: ["latin"],
});

export const metadata = {
	title: "Ben's Portfolio",
	description: "Benjamin Phillips' Web Portfolio",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${poppins.className}`}>
				{children}
			</body>
		</html>
	)
}
