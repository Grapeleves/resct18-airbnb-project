import styled from 'styled-components'

export const IndicatorWarpper = styled.div`
  overflow:hidden ;

  .indicator-content{
    display:flex ;
    position:relative ;
    transition: transform 200ms ease;

    > *{
      flex-shrink:0 ;
    }
  }
`