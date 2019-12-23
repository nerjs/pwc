import styled from 'styled-components'
import Alert from './alert'
import ArertLink from './link'

const AlertError = styled(Alert)`
    border-color: #f5c6cb;
    color: #721c24;
    background-color: #f8d7da;

    ${ArertLink} {
        color: #8a1823;
    }
`

export default AlertError
