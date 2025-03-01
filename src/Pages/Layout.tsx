const Layout = ({children}:any) =>{
    return(
        <>
        <div className="bg-blue-300 min-h-screen flex flex-col items-center justify-center m-0">
            {children}
        </div>
        </>
    )
}

export default Layout;