import React, { useEffect } from "react"
import { connect } from "react-redux"
import PropTypes from "prop-types"

import { toggleDarkMode } from "../../state/app"
import { StyledBall, StyledCheckbox, StyledSlider, StyledSwitch } from "./style"

const Switch = ({ isDarkMode, dispatch }) => {
  const handleSwitch = () => dispatch(toggleDarkMode(!isDarkMode))

  useEffect(() => {
    localStorage.getItem("isDarkMode") &&
      dispatch(toggleDarkMode(JSON.parse(localStorage.getItem("isDarkMode"))))
  }, [dispatch])

  return (
    <StyledSwitch data-interactive={true} title="Toggle color mode">
      <StyledCheckbox type="checkbox" onChange={handleSwitch} />
      <StyledSlider isChecked={isDarkMode} data-interactive={true}>
        <StyledBall isChecked={isDarkMode} data-interactive={true} />
      </StyledSlider>
    </StyledSwitch>
  )
}

Switch.defaultProps = {
  isDarkMode: false,
}

Switch.propTypes = {
  isDarkMode: PropTypes.bool,
  dispatch: PropTypes.func,
}

export default connect(
  state => ({
    isDarkMode: state.app.isDarkMode,
  }),
  null
)(Switch)
