module.exports = {
  async rewrites() {
    return [
      {
        source: '/Chuckles/:path*',
        destination: '/Chuckles/:path*',
      },
    ];
  },
};
