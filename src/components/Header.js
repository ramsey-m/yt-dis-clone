import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { auth, provider } from "../firebase";
import { selectUserName, selectUserPhoto, setUserLoginDetails } from '../features/user/userSlice';


const Header = (props) => {

    const dispatch = useDispatch();
    const history = useHistory();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    const handleAuth = () => {
        auth.signInWithPopup(provider).then((result) =>{
            setUser(result.user);
        }).catch((error)=>{
            alert(error.message);
        })
    };

    const setUser = (user) => {
        dispatch(
            setUserLoginDetails({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL,
    })
        );
};

    return (
    <Nav>
        <Logo>
            <img src = '/images/logo.svg' alt="Disney+" />
        </Logo>

        {
            !userName ? (
            <Login onClick={handleAuth}>Login</Login>
            ) : ( 
                         //aka if username does not exist, show button saying login. 

            <> 
        
        <NavMenu>menu</NavMenu>
        <UserImg src={userPhoto} alt={userName} />

</>      
)}  

    </Nav> 

    );
};

const Nav = styled.nav`
position: fixed;
top: 0;
left: 0;
right: 0;
height: 70px;
background-color: #090b13;
display: flex;
justify-content: space-between;
align-items: center; /*aligns content aka text in center */
padding: 0 36px; /* pushes content away from edge */
letter-spacing: 16px;
z-index: 3; /* makes header stay on top */
`;

const Logo = styled.a`
padding: 0;
width: 80px;
margin-top: 4px;
max-height: 70px;
font-size: 0;
display: inline-block;
img{
    display: block;
    width: 100%;
}
`;

const NavMenu = styled.div `
align-items: center;
display: flex;
flex-flow: row nowrap;
height: 100%;
justify-content: flex-end;
margin: 0px;
position: relative;
margin-right: auto;
margin-left: 25px;

@media (max-width: 768px) {
    display: none;
`;

const Login = styled.a`
background-color: rgba(0,0,0,0.6);
padding: 8px 16px;
text-transform: uppercase;
letter-spacing: 1.5px;
border: 1px solid #f9f9f9;
border-radius: 4px;
transition: all .2s ease 0s;

&:hover{
    background-color:#f9f9f9; 
    color: black;
    border-color: transparent;
}

`;

const UserImg = styled.img`
height: 100%;
`;

export default Header