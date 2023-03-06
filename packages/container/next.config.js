/** @type {import('next').NextConfig} */
const ENV = {
	API_BASEURI: process.env.API_BASEURI,
	CLIENT_ID: process.env.CLIENT_ID,
	CLIENT_SECRET: process.env.CLIENT_SECRET,
}
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
	publicRuntimeConfig: ENV,
	serverRuntimeConfig: ENV,
	experimental: {
		esmExternals: "loose",
	},
}

module.exports = nextConfig
