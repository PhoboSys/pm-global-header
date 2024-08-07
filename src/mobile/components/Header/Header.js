import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import cn from 'clsx'

import AccountIcon from '../AccountIcon'

import css from './Header.module.scss'

const Header = ({
  className,
  isConnected,
  account,
  onProfileClick,
  hideProfile,
  children,
}) => {
  const handleAccountIconClick = useCallback((e) => {
    e.stopPropagation()
    onProfileClick(account.toLowerCase())
  }, [account, onProfileClick])

  return (
    <div className={cn(css.header, className)}>
      {children}

      {isConnected && !hideProfile && (
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
  children: PropTypes.node,
}

export default Header