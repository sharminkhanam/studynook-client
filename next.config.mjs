/** @type {import('next').NextConfig} */
const nextConfig = {
   experimental:{
    serverComponentsExternalPackages:[
      '@better-auth/kysely-adapter'
    ]
  },
  images:{
    remotePatterns:[
      {
        protocol:'https',
        hostname:"cdn.pixabay.com"
      }
    ]

    
  }
  /* config options here */
};

export default nextConfig;
 
