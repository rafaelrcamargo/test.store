import React from 'react'
import Icon from 'src/components/ui/Icon'

import Button from '../../ui/Button'
import Section from '../Section'
import type { UIButtonProps } from '../../ui/Button'

import './scroll-to-top-button.scss'

interface ScrollToTopButtonProps {
  /**
   * Button copy.
   * @default 'Scroll to top'
   */
  text?: string
  /**
   * Button's icon.
   * @default <Icon name="CaretUp" width={16} height={16} weight="bold" />
   */
  icon?: UIButtonProps['icon']
  /**
   * Button icon's position.
   * @default 'left'
   */
  iconPosition?: UIButtonProps['iconPosition']
}

function ScrollToTopButton({
  text = 'Scroll to top',
  icon = <Icon name="CaretUp" width={16} height={16} weight="bold" />,
  iconPosition = 'left',
}: ScrollToTopButtonProps) {
  return (
    <Section className="scroll-to-top-button">
      <Button
        variant="secondary"
        icon={icon}
        iconPosition={iconPosition}
        onClick={() => window.scrollTo(0, 0)}
      >
        {text}
      </Button>
    </Section>
  )
}

export default ScrollToTopButton
