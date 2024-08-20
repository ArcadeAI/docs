export const LightOnly = ({children}) => {
    return (
        <div className={"dark:hidden"}>
            {children}
        </div>
    )
}

export const DarkOnly = ({children}) => {
    return (
        <div className={"hidden dark:block"}>
            {children}
        </div>
    )
}
