import styled from "styled-components";
//import login-background from "../../public/images/login-background.jpg";

const Login = (props) => {

    return ( 
        <Container >
        <Content> 
        <CTA>
        <CTALogoOne src='/images/cta-logo-one.svg' alt="" />
        <Signup>GET IT ALL</Signup> 
        <Description>Get Premier Access to Raya and the Last Dragon for an aditional fee with a Disney+ subscription. Price will increase by $1 on 04/10/2021.</Description>
        <CTALogoTwo src='/images/cta-logo-two.png' alt="" />

        </CTA>
        <BgImage />
        </Content> 
        </Container>
    );
};


const Container = styled.section`  /*the main outer container*/
overflow: hidden;
display: flex;
flex-direction: column;
text-align: center;
height: 100vh;
`;

const Content = styled.div`
margin-bottom: 10vw;
width: 100%;
position: relative;
min-height: 100vh;
box-sizing: border-box;
display: flex;
justify-content: center; /*makes horizontally centered*/
align-items: center; /*makes vertically centered*/
flex-direction: column;
padding: 80px 40px;
height: 100%;
`;

const BgImage = styled.div`
height: 100%;
width: 100%;
background-position: top;
background-size: cover;
background-repeat: no-repeat;
background-image: url('images/login-background.jpg');
position: absolute;
z-index: -1; /*make sure image is at the back (text in front)*/
`;

const CTA = styled.div`

max-width: 650px;
width:100%;
display: flex;
flex-direction: column;

/*margin-bottom: 2vw;
max-width: 650px;
flex-wrap: wrap;
display: flex;
flex-direction: column;
justify-content: center;
margin-top: 0;
align-items: center;
text-align: center;
margin-right: auto; 
margin-left: auto; /*Equal direction left and right aka centered and responsive 
transition-timing-function: ease-out; 
transition: opacity 0.2s;
width: 100%; */
`;

const CTALogoOne = styled.img`
margin-bottom: 12px;
max-width: 600px;
min-height: 1px;
display: block;
width: 100%;
`;

const Signup = styled.a`
font-weight: bold;
color: #f9f9f9;
background-color: #0063e5;
margin-bottom: 12px;
width: 100%;
letter-spacing: 1.5px;
font-size: 18px;
padding: 16.5px 0;
border: 1px solid transparent;
border-radius: 4px;

&:hover{
    background-color: #0483ee;
}
`;

const Description = styled.p`
color: hsla(0,0%,95.3%,1);
font-size: 11px;
margin: 0 0 24px;
line-height: 1.5;
letter-spacing: 1.5px;
`;

const CTALogoTwo = styled.img`
max-width: 600px; /*keeps image tight on differing screens*/
margin-bottom: 20px;
display: inline-block;
vertical-align: bottom; /*adds robustness to code. */
width: 100%;

`;


export default Login;