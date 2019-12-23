import styled from 'styled-components'
import Alert from './alert'
import ArertLink from './link'

const AlertInfo = styled(Alert)`
    border-color: #7681a7;
    color: #2f3f73;
    background-color: #efeff0;

    ${ArertLink} {
        color: #07143f;
    }
`

export default AlertInfo
