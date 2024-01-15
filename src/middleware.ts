import { sessionStatus } from "./utils/session";
import { NextRequest,NextResponse } from "next/server";

const protectedRoutes=["/middlewareside"];

export default function middleware(req:any){
    if(!sessionStatus && protectedRoutes.includes(req.nextUrl.pathname)){
        const absoulteURL=new URL("/",req.nextUrl.origin);
        return NextResponse.redirect(absoulteURL.toString());
    }
}