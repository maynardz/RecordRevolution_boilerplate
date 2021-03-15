import React from 'react';

import styled from 'styled-components';
import Disc from '../assets/disc.png';

const Resize = styled.img`
    width: 65vw;
    height: auto;
    display: block;
    margin: 0 auto;
`;

const Header = () => {
    return(
        <div>
            <Resize src={Disc} alt='vinyl record' />
        </div>
    )
}

export default Header;