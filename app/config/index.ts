
export const CONFIG = {
    env: process.env.NODE_ENV || 'development',
    authorization: {
        username: process.env.AUTHORIZATION_USERNAME || 'sigmentasi',
        passsword: process.env.AUTHORIZATION_PASSWORD || 'S!gm3nt4s12022!'
    },
    asset: {
        authorization: {
            username: process.env.AUTHORIZATION_ASSET_USERNAME || 'sigmentasi_assets',
            passsword: process.env.AUTHORIZATION_ASSET_PASSWORD || 'sigmentasi_assets'
        },
    },
    session: {
        secret: process.env.SESSION_SECRET || 'sigmentasi-session-secret',
        name: process.env.SESSION_NAME || 'sigmentasi-session',
    },
    base_url_api: {
        user: process.env.BASE_URL_API_USER || 'https://api.lenterailmu.id/user', // 'http://localhost:6001',
        lms: process.env.BASE_URL_API_LMS || 'https://api.lenterailmu.id/lms',
        payment: process.env.BASE_URL_API_PAYMENT || 'https://api.lenterailmu.id/payment',
        media: process.env.BASE_URL_API_MEDIA || 'https://api.lenterailmu.id/media',
        asset: process.env.BASE_URL_API_ASSET || 'https://asset.lenterailmu.id',
        finance : process.env.BASE_URL_API_FINANCE || 'https://api.lenterailmu.id/finance'
    }
}