import React from "react"
import { ContainerTooltip, ContainerExternal } from "./tooltip.style"

export type TooltipProps = {
    children: React.ReactNode
    tooltip: React.ReactNode

}

export const Tooltip = ({ children, tooltip }: TooltipProps) => {
    return (
        <ContainerTooltip>
            <ContainerExternal>{tooltip}</ContainerExternal>
            {children}
        </ContainerTooltip>
    )
}