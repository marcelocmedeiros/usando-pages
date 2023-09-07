/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	i18n: {
		locales: ["pt", "en"],
		defaultLocale: "pt",
	},
	images: {
		domains: ["dummyimage.com"],
	},
};

module.exports = nextConfig;
