import styled from 'styled-components'

const MarginBlock = styled.div`
    width: 100%;
    position: relative;
    height: ${({ coreDoc }) => {
        if (coreDoc && coreDoc.current) return coreDoc.current.offsetHeight
        return 0
    }}px;
`

export default MarginBlock
