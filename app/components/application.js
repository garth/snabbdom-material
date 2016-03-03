import { Component } from 'cerebral-view-snabbdom'
import pages from './index'

import { Appbar, Button, Menu, Sidenav, Icon } from '../../lib'

let previousPage

export default Component({
  currentPage: ['route', 'page'],
  locale: ['locale'],
  screenInfo: ['screen'],
  showLocaleMenu: ['showLocaleMenu'],
  sidenavOpen: ['sidenavOpen'],
  title: ['route', 'title']
}, ({ state: {
  currentPage,
  locale,
  screenInfo,
  showLocaleMenu,
  sidenavOpen,
  title
}, signals }) => {
  if (previousPage !== currentPage) {
    previousPage = currentPage
    window.scrollTo(0, 0)
  }

  const RouteComponent = pages[currentPage]

  return (
    <div>
      <Sidenav isOpen={sidenavOpen} onClose={() => signals.sidenavClosed()}>
        <Sidenav.Title
          showCloseButton
          onClose={() => signals.sidenavClosed()}>
          Material Components
        </Sidenav.Title>
        <div>
          {[
            { page: 'introduction', icon: 'directions', title: 'Introduction', signal: signals.introductionPageOpened },
            { page: 'gettingStarted', icon: 'tune', title: 'Getting Started', signal: signals.gettingStartedPageOpened },
            { separator: true },
            { page: 'appbar', icon: 'border_top', title: 'Appbar', signal: signals.appbarPageOpened },
            { page: 'button', icon: 'crop_7_5', title: 'Button', signal: signals.buttonPageOpened },
            { page: 'calendar', icon: 'event', title: 'Calendar', signal: signals.calendarPageOpened },
            { page: 'checkbox', icon: 'check_box', title: 'Checkbox', signal: signals.checkboxPageOpened },
            { page: 'datePicker', icon: 'event_available', title: 'Date Picker', signal: signals.datePickerPageOpened },
            { page: 'dialog', icon: 'picture_in_picture', title: 'Dialog', signal: signals.dialogPageOpened },
            { page: 'form', icon: 'content_paste', title: 'Form', signal: signals.formPageOpened },
            { page: 'gridSystem', icon: 'view_compact', title: 'Grid System', signal: signals.gridSystemPageOpened },
            { page: 'icon', icon: 'person', title: 'Icon', signal: signals.iconPageOpened },
            { page: 'input', icon: 'edit', title: 'Input', signal: signals.inputPageOpened },
            { page: 'menu', icon: 'more_vert', title: 'Menu', signal: signals.menuPageOpened },
            { page: 'paper', icon: 'layers', title: 'Paper', signal: signals.paperPageOpened },
            { page: 'select', icon: 'arrow_drop_down', title: 'Select', signal: signals.selectPageOpened },
            { page: 'sidenav', icon: 'menu', title: 'Sidenav', signal: signals.sidenavPageOpened },
            { page: 'spinner', icon: 'sync', title: 'Spinner', signal: signals.spinnerPageOpened },
            { page: 'table', icon: 'reorder', title: 'Table', signal: signals.tablePageOpened },
            { page: 'typography', icon: 'format_size', title: 'Typography', signal: signals.typographyPageOpened },
            { separator: true },
            { page: 'responsiveEvents', icon: 'devices', title: 'Responsive Events', signal: signals.responsiveEventsPageOpened }
          ].map((menu) => {
            return menu.separator ? (
              <Sidenav.Separator/>
            ) : (
              <Sidenav.Item
                showIcon
                icon={<Icon name={menu.icon}/>}
                selected={menu.page === currentPage}
                onClick={() => menu.signal()}
                onClose={() => signals.sidenavClosed()}>{menu.title}</Sidenav.Item>
            )
          })}
        </div>
      </Sidenav>
      <Appbar>
        <Appbar.Button style={{ float: 'left' }} onClick={() => signals.sidenavOpened()}>
          <Icon name='menu'/>
        </Appbar.Button>
        <Appbar.Title>{title}</Appbar.Title>
        <div style={{ float: 'right' }}>
          <Appbar.Button
            href='https://github.com/garth/snabbdom-material'>
            <Icon name='github'/>
          </Appbar.Button>
          <div style={{ display: 'inline-block' }}>
            <Menu rightAlign
              isOpen={showLocaleMenu}
              onClose={() => signals.localeMenuClosed()}
              screenInfo={screenInfo}>
              <Menu.Item
                showIcon
                onClick={() => signals.localeSelected({ locale: 'de' })}
                onClose={() => signals.localeMenuClosed()}
                selected={locale === 'de'}>
                Deutsch
              </Menu.Item>
              <Menu.Item
                showIcon
                onClick={() => signals.localeSelected({ locale: 'en' })}
                onClose={() => signals.localeMenuClosed()}
                selected={locale === 'en'}>
                English
              </Menu.Item>
            </Menu>
            <Appbar.Button
              onClick={() => signals.localeMenuOpened()}>
              <Icon name='globe'/>
            </Appbar.Button>
          </div>
        </div>
      </Appbar>
      <div
        style={{
          fontSize: '16px',
          padding: '24px',
          maxWidth: '950px',
          margin: '0 auto'
        }}>
        <RouteComponent/>
      </div>
    </div>
  )
})
