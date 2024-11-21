

// type NextAuthRequest  = {
//     headers:Headers;
//     url: string;
//     auth?:unknown;
// }

// const handleAuthRequest = (req:NextAuthRequest) => {
//     const isAuthenticated = !!req.auth;
//     console.log(req.url);
//     if(isAuthenticated){
//         return NextResponse.redirect(new URL(req.url).toString());
//     }
//
//     if(!isAuthenticated){
//         return NextResponse.redirect(new URL("/login",req.url));
//     }
//     return null;
// }
//
// export default auth((request) => {
//     const response = handleAuthRequest(request);
//     if(response) return response;
//     return NextResponse.next();
// })

export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico, sitemap.xml, robots.txt (metadata files)
         */
        // '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
        "/issues/new",
        "/issues/:id/edit",
    ],
}

export {auth as middleware} from "@/app/auth"