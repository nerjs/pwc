import styled from 'styled-components'

const MarginBlock = styled.div`
    width: 100%;
    position: relative;
    height: ${({ height }) => height || 0}px;
`

export default MarginBlock
