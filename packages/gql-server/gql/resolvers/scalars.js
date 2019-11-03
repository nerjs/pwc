const { GraphQLScalarType, GraphQLError, Kind } = require('graphql')

const MAX_NUMBER = Math.pow(2, 64) - 1
const MIN_NUMBER = -Math.pow(2, 63)

const parseNumber = num => {
    if (typeof num !== 'number' || isNaN(num)) throw new GraphQLError('Value is not a number')
    if (num < MIN_NUMBER || num > MAX_NUMBER) throw new GraphQLError('Number is out of range')
    if (num !== parseInt(num, 10))
        throw new GraphQLError(`Invalid non-fractional number. [${num}!==${parseInt(num)}]`)

    return num
}

const parseDate = _date => {
    const date = new Date(_date)
    if (isNaN(date)) throw new GraphQLError(`Invalid Date. [${_date}===${date}]`)
    return date
}

const NumberResolver = new GraphQLScalarType({
    name: 'Number',
    description:
        'The `Number` scalar type represents non-fractional signed whole numeric values.' +
        ' `Number` can represent values between -(2^64) and 2^64 - 1.',
    serialize: parseNumber,
    parseValue: parseNumber,
    parseLiteral(ast) {
        if (ast.kind !== Kind.INT)
            throw new GraphQLError(`Incorrect type argument. [${ast.kind}!==${Kind.INT}]`, ast)

        return parseNumber(Number(ast.value))
    },
})

const DateResolver = new GraphQLScalarType({
    name: 'Date',
    description:
        'The `Date` scalar type' +
        ' Can be transmitted as a number (`timestamp`) or a string (`js Date format`)',
    serialize(value) {
        const date = parseDate(value)
        return process.env.NODE_ENV !== 'production' ? date.toJSON() : date.getTime()
    },
    parseValue: parseDate,
    parseLiteral: ast => {
        if (ast.kind === Kind.INT) return parseDate(Number(ast.value))
        if (ast.kind === Kind.STRING) return parseDate(ast.value)
        throw new GraphQLError(
            `Incorrect type argument. [${ast.kind}!==(${Kind.INT}|${Kind.STRING})]`,
            ast,
        )
    },
})

module.exports = {
    Number: NumberResolver,
    Date: DateResolver,
}
