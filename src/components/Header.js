import PropTypes from 'prop-types'

const Header = ({title}) => {
    return (
        <>
            <h2>{title}</h2>
        </>
    )
}

Header.defaultProps = {
    title:'Welcome home !',
}

Header.propTypes = {
    title: PropTypes.string,
}

//? CSS-in-JS : please don't use that
// const headingStyle = {
//     color: 'steelblue', 
//     backgroundColor: 'cornsilk'
// }

export default Header


