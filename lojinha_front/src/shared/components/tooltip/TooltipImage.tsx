import { ImageType, ProductType } from "../../types/ProductTyp";
import { Tooltip } from "./Tooltip";

export interface TooltipImageProps {
    product?: ProductType
    image? : string
}

export const TooltipImage = ({ product, image }: TooltipImageProps) => {
    return (
        <Tooltip tooltip={<img src={image}>Teste Saindo</img>}>
            <span>{product?.id}</span>
        </Tooltip>
    )
}