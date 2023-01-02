import { Link } from "react-router-dom"

const Logo = () => {
    return (
        <div className="logo flex">
            <Link to="/">
                <img
                    src="https://app.ed.team/images/logo/logo-alt.svg"
                    alt="Logo ecommerce"
                 />
            </Link>
        </div>
    )
}

export default Logo