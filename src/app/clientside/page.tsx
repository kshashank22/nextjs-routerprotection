"use client"

import { sessionStatus } from "@/utils/session"
import { redirect } from "next/navigation"
import { useLayoutEffect } from "react"

const ClientSide=()=>{
    useLayoutEffect(()=>{
        const session=sessionStatus;
        if(!session){
            redirect("/")
        }
    },[])
    return <div>This Page is protected route on client side</div>
}

export default ClientSide