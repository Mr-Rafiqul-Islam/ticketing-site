import { createProxyMiddleware } from 'http-proxy-middleware';
import { NextRequest, NextResponse } from 'next/server';

export const config = {
    runtime: 'nodejs',
};

const apiProxy = createProxyMiddleware({
    target: 'https://touch.bytecareltd.com', // Replace with your API URL
    changeOrigin: true,
    pathRewrite: {
        '^/api/proxy': '/api', // Rewrite the path to match the backend API
    },
});

export async function middleware(req: NextRequest) {
    return new Promise((resolve, reject) => {
        apiProxy(req as any, {} as any, (result: any) => {
            if (result instanceof Error) {
                return reject(result);
            }
            resolve(NextResponse.next());
        });
    });
}
