import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import cn from 'clsx'

import AccountIcon from '../AccountIcon'
import Navbar from '../Navbar'

import css from './Header.module.scss'

const Header = ({
  className,
  isConnected,
  basepath,
  account,
  onProfileClick,
  children,
}) => {
  const handleAccountIconClick = useCallback((e) => {
    e.stopPropagation()
    onProfileClick(account.toLowerCase())
  }, [account, onProfileClick])

  return (
    <div className={cn(css.header, className)}>
      <div className={css.left}>
        <Navbar basepath={basepath} />
      </div>

      {children}

      {isConnected && (
        <div className={css.right}>
          <AccountIcon
            account={account}
            onClick={handleAccountIconClick}
          />
        </div>
      )}
    </div>
  )
}

Header.propTypes = {
  className: PropTypes.string,
  isConnected: PropTypes.bool,
  basepath: PropTypes.string,
  account: PropTypes.string,
  onProfileClick: PropTypes.func,
  onConnectClick: PropTypes.func,
  children: PropTypes.node,
}

export default Header