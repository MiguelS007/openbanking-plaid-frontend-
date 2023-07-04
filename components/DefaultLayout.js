import Navbar from './Navbar'


const DefaultLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            <div className="section">
                {children}
            </div>
        </>
    )
}


export default DefaultLayout