import PropTypes from 'prop-types'

const Avatar = ({ user }) => {
  const placeholderClass = !user.image ? 'placeholder' : ''
  const innerClass = !user.image ? 'bg-neutral text-neutral-content' : ''

  return (
    <div className={`avatar ${placeholderClass}`}>
      <div className={`w-10 rounded-full ${innerClass}`}>
        {user.image ? (
          <img src={user.image} alt="" />
        ) : (
          <span className="text-xl">{user.name[0].toUpperCase()}</span>
        )}
      </div>
    </div>
  )
}

Avatar.propTypes = {
  user: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
}

export default Avatar
