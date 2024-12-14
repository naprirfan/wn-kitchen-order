interface SeparatorProps {
    mode?: 'DARK' | 'LIGHT',
    className?: string;
}

export const Separator = ({mode = 'DARK', className = ''}: SeparatorProps) => {
    const borderClassName = `container h-[1px] border ${mode === 'DARK' ? 'border-gray': 'border-white'} ${className}`

    return (
        <div className="flex justify-center w-full my-3">
            <hr className={borderClassName} />
        </div>
    )
}