import styled from "styled-components";

const Btn = styled.button`
position: absolute;
top: 50%;
transform: translateY(-50%);

&.prev{left: 50px;}
&.next {right: 50px;}
`

function Btns(){
    return(
        <>
        <Btn className="prev">prev</Btn>
        <Btn className="next">next</Btn>
        </>
    );
}



export default Btns;