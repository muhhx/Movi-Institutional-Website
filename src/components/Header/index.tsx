import { useMenu } from "../../context/menuContext";
import { data } from "./data";
import * as C from "./styles"

function Header() {
    const { handleMenu } = useMenu()

    return (
        <C.Container>
            <C.Wrapper>
                <C.Hamburger onClick={handleMenu}>
                    <C.Icon src={data.menuIcon} alt={data.hamburgerAlt}/>
                </C.Hamburger>
                <C.LogoWrapper>
                    <C.Logo src={data.logo} alt={data.logoAlt}/>
                </C.LogoWrapper>
                <C.ContactWrapper>
                    <C.Contact>{data.contactText}</C.Contact>
                    <C.Underline />
                </C.ContactWrapper>
            </C.Wrapper>
        </C.Container>
    )
}

export default Header;