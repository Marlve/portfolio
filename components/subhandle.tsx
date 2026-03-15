import { ReactNode } from "react"

type Subhandle = {
  children: ReactNode
  size?: string
}

export default function Subhandle({children, size}: Subhandle) {
  return (
    <p className={`${size} opacity-[.40] select-none`}>{children}</p>
  )
}
