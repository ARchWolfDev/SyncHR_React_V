import React from 'react'
// import PropTypes from 'prop-types'

function Avatar({src, type='user', name='', size=50, style={}}) {

    const getInitials = (name) => {
        const nameParts = name.split(' ')
        const initials = nameParts.map(part => part[0]).join(''.toUpperCase())
        return initials.substring(0, 2)
    }

    const getRandomColor = () => {
        const colors = [
            "#8B0000", // Dark Red
            "#FF8C00", // Dark Orange
            "#DAA520", // Goldenrod
            "#8B4513", // Saddle Brown
            "#A0522D", // Sienna
            "#D2691E", // Chocolate
            "#B22222", // Firebrick
            "#FF4500", // Orange Red
            "#DEB887", // Burlywood (Warm Beige)
            "#BC8F8F"  // Rosy Brown
          ];
        
        const randomIndex = Math.floor(Math.random() * colors.length)
        return colors[randomIndex]
    }

    const avatarStyle = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: size,
        height: size,
        borderRadius: type === 'user'? '50%': '20%',
        backgroundColor: getRandomColor(),
        color: '#FFF',
        fontSize: size / 2.5, // Scale font size based on avatar size
        fontWeight: 'bold',
        textTransform: 'uppercase',
        ...style
    }

  return src? (
    <img src={src} alt={name} style={{...avatarStyle, objectFit: 'cover'}}/>
  ) : (<div style={avatarStyle}>{getInitials(name)}</div>)
}

// Avatar.PropTypes = {
//     src: PropTypes.string,
//     name: PropTypes.string.isRequired,
//     size: PropTypes.number
// }

export default Avatar
