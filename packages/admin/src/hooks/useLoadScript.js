import useLoadFile from './useLoadFile'

export default url => useLoadFile({ url, tag: 'script', attr: 'src' })
