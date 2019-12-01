import { VALIDATION } from '@pw/errors/error_codes'

export const parseError = (error, { code: filterCode, path: filterPath }) => {
    let gqlErrors = null

    if (error.graphQLErrors && Array.isArray(error.graphQLErrors)) {
        gqlErrors = [...error.graphQLErrors]

        if (filterPath) {
            gqlErrors = gqlErrors.filter(({ path }) => path && path.indexOf(filterPath) >= 0)
        }

        gqlErrors = gqlErrors.map(({ extensions }) => extensions).filter(err => !!err)

        if (filterCode) {
            gqlErrors = gqlErrors.filter(({ code }) => filterCode === code)
        }

        gqlErrors = gqlErrors.map(({ exception }) => exception)
    }

    return {
        error,
        gqlErrors,
    }
}

export const parseValidationError = (error, filterPath) => {
    const { gqlErrors } = parseError(error, { path: filterPath, code: VALIDATION })
    if (!gqlErrors || gqlErrors.length === 0) return null

    return [].concat(
        ...gqlErrors
            .filter(({ details }) => details && Array.isArray(details))
            .map(({ details }) => details),
    )
}
