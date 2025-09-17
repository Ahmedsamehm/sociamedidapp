import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './shared/avatar'

type Props = {
    src: string,
    alt: string,
    fallBack: string
    className?: string
}
const AvatarComponent = ({ src, alt, fallBack, className }: Props) => {
    return (
        <Avatar className={`${className || `size-10`} `}>
            <AvatarImage src={src || ""} alt={alt} />
            <AvatarFallback>{fallBack}</AvatarFallback>
        </Avatar>
    )
}

export default AvatarComponent