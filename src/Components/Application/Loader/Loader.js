import React from 'react';
import Typist from 'react-typist';
import loader from '../../../img/loadpic.svg';

const Loader = ({searchCity}) => {
    return(
        <div className="loader center-align animated fadeIn">
            <img src={loader} className="loader-img" alt="loadin.."/>
            <br/>
            <Typist>
                <Typist.Delay ms={10} />
                Searching {searchCity}...
            </Typist>
        </div>
    )
}

export default Loader;  

//https://medium.com/@Farzad_YZ/handle-loadings-in-react-by-using-higher-order-components-2ee8de9c3deb