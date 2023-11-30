import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import Connector from '../Connector'

import css from './AuthModal.module.scss'

const AuthModal = ({ close, isConnected, connectors, onConnectorClick }) => {

  useEffect(() => {
    if (isConnected) close()
  }, [isConnected])

  return (
    <>
      <div className={css.title}>Connect to Wallet</div>
      <ul className={css.connectors}>
        {connectors.map((connectorId) => (
          <Connector
            key={connectorId}
            id={connectorId}
            onClick={onConnectorClick}
          >
            {connectorId}
          </Connector>
        ))}
      </ul>
    </>
  )
}

AuthModal.propTypes = {
  close: PropTypes.func.isRequired,
  connectors: PropTypes.array,
  isConnected: PropTypes.bool,
  onConnectorClick: PropTypes.func.isRequired
}

export default AuthModal