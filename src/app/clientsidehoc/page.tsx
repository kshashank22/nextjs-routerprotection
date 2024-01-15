"use client"

import withAuth from "@/components/withAuth"

const ClientSideHOC = () => {
  return (
    <div>
      This page is protected route on client side HOC
    </div>
  )
}

export default withAuth(ClientSideHOC)
