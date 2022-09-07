/** @type {import('next').NextConfig} */
const nextConfig = {
  // reactStrictMode: true,
  // swcMinify: true,
  async rewrites() {
    return [
      {
        source: '/register', // mau diganti jadi apa ?
        destination: '/auth/register', // path lama ?
      },{
        source: '/login', // mau diganti jadi apa ?
        destination: '/auth/login', // path lama ?
      },{
        source: '/forgot-password', // mau diganti jadi apa ?
        destination: '/auth/forgot-password', // path lama ?
      },{
        source: '/reset-password', // mau diganti jadi apa ?
        destination: '/auth/reset-password', // path lama ?
      },{
        source: '/create-pin', // mau diganti jadi apa ?
        destination: '/auth/create-pin', // path lama ?
      },{
        source: '/create-success', // mau diganti jadi apa ?
        destination: '/auth/create-success', // path lama ?
      },{
        source: '/home', // mau diganti jadi apa ?
        destination: '/dashboard/home', // path lama ?
      },
      // {
      //   source: '/transfer', // mau diganti jadi apa ?
      //   destination: '/transfer/transfer', // path lama ?
      // },
    ]
  },
  async redirects() {
    return [
      {
        source: '/auth/register', // jika ada yang akses ini
        destination: '/register', // lempar kesini
        permanent: true,
      },{
        source: '/auth/login', // jika ada yang akses ini
        destination: '/login', // lempar kesini
        permanent: true,
      },{
        source: '/auth/forgot-password', // jika ada yang akses ini
        destination: '/forgot-password', // lempar kesini
        permanent: true,
      },{
        source: '/auth/reset-password', // jika ada yang akses ini
        destination: '/reset-password', // lempar kesini
        permanent: true,
      },{
        source: '/auth/create-pin', // jika ada yang akses ini
        destination: '/create-pin', // lempar kesini
        permanent: true,
      },{
        source: '/auth/create-success', // jika ada yang akses ini
        destination: '/create-success', // lempar kesini
        permanent: true,
      },{
        source: '/dashboard/home', // jika ada yang akses ini
        destination: '/home', // lempar kesini
        permanent: true,
      },
      // {
      //   source: '/transfer/transfer', // jika ada yang akses ini
      //   destination: '/transfer', // lempar kesini
      //   permanent: true,
      // },
    ]
  },
  images: {
    domains: ["res.cloudinary.com"]
  }
}

module.exports = nextConfig