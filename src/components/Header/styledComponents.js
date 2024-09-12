import styled from "styled-components"

const MenuSection = styled.div`
    display:${props =>(props.isTrue? "none" : "flex" )};
    flex-direction:column;
    list-style-type:none;
    margin:10px 15px;
`
export default MenuSection