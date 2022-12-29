import styled from 'styled-components'

export const HeaderWrapper = styled.div`
  display: flex ;
  align-items: center ;
  height: 80px ;
  border-bottom: 1px solid #eee ;
  font-size:14px ;
  background-color:#fff ;

  &.fixed{
    position:fixed ;
    z-index:99;
    top:0 ;
    right:0 ;
    bottom:0 ;
    left:0 ;
  }
`