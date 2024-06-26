import React, { useCallback, useEffect } from 'react'
import PropTypes from 'prop-types'
import cn from 'clsx'

import { htmlAddress } from '@lib/html-utils'

import ArrowForward from '../SVG/ArrowForward'
import Disconnect from '../SVG/Disconnect'
import Connect from '../SVG/Connect'
import Copy from '../common/Copy'
import { Tabs, Tab, TabBody } from '../common/Tabs'
import AccountIcon from '../AccountIcon'
import { useTransition } from '../../../hooks/useTransition'
import PredictorTabContent from './PredictorTabContent'
import MentorTabContent from './MentorTabContent'
import StakerTabContent from './StakerTabContent'

import css from './StatisticsBar.module.scss'

const StatisticsBar = ({
  isOpened,
  account,
  statisticsAccount,
  statistics,
  onCloseClick,
  onDisconnectClick,
}) => {
  const accountAddress = statisticsAccount || account
  const timeout = 100 //ms
  const [mount, opening] = useTransition(isOpened && !!accountAddress, timeout)

  useEffect(() => {
    if (isOpened) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = 'visible'
  }, [isOpened])

  const stopPropagation = useCallback((e) => e.stopPropagation(), [])

  if (!mount) return null

  return (
    <div className={cn(css.overflow, { [css.opened]: opening })} onClick={onCloseClick}>
      <div className={css.container} onClick={stopPropagation}>

        <div className={css.top}>
          <a
            title={'Disconnect'}
            className={cn(
              css.action,
              css.disconnect,
              {
                [css.hidden]: (!!statisticsAccount && (account !== statisticsAccount)),
              }
            )}
            onClick={onDisconnectClick}
          >
            <Disconnect/>
            <Connect/>
          </a>
          <div className={css.account}>
            <AccountIcon className={css.icon} account={accountAddress} />
            <Copy
              text={accountAddress}
              className={css.address}
              iconClassName={css.copyIcon}
            >
              {htmlAddress(accountAddress)}
            </Copy>
          </div>
          <a
            title={'Close bar'}
            className={css.action}
            onClick={onCloseClick}
          >
            <ArrowForward />
          </a>
        </div>

        <Tabs className={css.tabs} activeTabClassName={css.activeTab}>
          <div className={css.head}>
            {statistics?.predictor && <Tab>Predictor</Tab>}
            {statistics?.mentor && <Tab>Mentor</Tab>}
            {statistics?.staker && <Tab>Staker</Tab>}
          </div>

          {statistics?.predictor && (
            <TabBody>
              <PredictorTabContent
                stats={statistics?.predictor?.stats}
                tokenStats={statistics?.predictor?.tokenStats}
              />
            </TabBody>
          )}
          {statistics?.mentor && (
            <TabBody>
              <MentorTabContent
                stats={statistics?.mentor?.stats}
                tokenStats={statistics?.mentor?.tokenStats}
              />
            </TabBody>
          )}
          {statistics?.staker && (
            <TabBody>
              <StakerTabContent
                stats={statistics?.staker?.stats}
                tokenStats={statistics?.staker?.tokenStats}
              />
            </TabBody>
          )}
        </Tabs>
      
      </div>
    </div>
  )
}

StatisticsBar.propTypes = {
  isOpened: PropTypes.bool,
  account: PropTypes.string,
  statisticsAccount: PropTypes.string,
  connectors: PropTypes.array,
  statistics: PropTypes.object,
  onCloseClick: PropTypes.func,
  onConnectorClick: PropTypes.func,
}

export default React.memo(StatisticsBar)
