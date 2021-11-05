import { Head, Html, Main, NextScript } from "next/document";

const CustomDocument = () => {
	return (
		<Html>
			<Head>
				<link href="https://fonts.googleapis.com" rel="preconnect" />
				<link crossOrigin="" href="https://fonts.gstatic.com" rel="preconnect" />
				{/* eslint-disable-next-line @next/next/no-page-custom-font */}
				<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
};

export default CustomDocument;
