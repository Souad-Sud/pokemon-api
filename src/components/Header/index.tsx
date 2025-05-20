import Image from 'next/image'
import Logo from '../../../public/logo.png';
import Pokeball from '../../../public/pokeball.png'
import Avatar from '../../../public/avatar.png';

const Header = () => {
    return(
    <header className='header'>

        <div className='header__icon'>
            <Image src={Pokeball} alt="Pokeball"/>
        </div>
        <div className='header__logo'>
            <Image src={Logo} alt="Logo image" />
        </div>
        <div className='header__avatar'>
            <Image src={Avatar} alt="Pokeball"/>
        </div>
    </header>
    )
}

export default Header