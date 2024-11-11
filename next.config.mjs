/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: "lh3.googleusercontent.com",
            },{
            hostname: "images.unsplash.com",
            },{
            hostname: "tailwindui.com",
            },{
            hostname:"unsplash.com"
            },
        ]
    },
    async headers() {
        return [
            {
                source:"/:path*",
                headers: [
                    {key:"referrer-policy",value:"no-referrer"},
                ]
            }
        ]
    }
};

export default nextConfig;
