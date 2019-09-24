/* eslint-disable indent */
import { Layout } from 'antd'
import styled, { css } from 'styled-components'

export const SidebarWrapper = styled.div`
  overflow: hidden;
  width: ${({ width }) => (width ? `${width}px` : '240px')};
  min-width: ${({ width }) => (width ? `${width}px` : '240px')};

  @media only screen and (max-width: 767px) {
    width: ${({ width }) => (width > 80 ? `${width}px` : 0)};
    min-width: ${({ width }) => (width > 80 ? `${width}px` : '0 !important')};
    max-width: ${({ width }) => (width > 80 ? `${width}px` : '0 !important')};
    flex: ${({ width }) => (width > 80 ? `0 0 ${width}px` : '0 0 0 !important')};
  }

  &.ant-menu-vertical {
  }
`

export const SiderWrapper = styled(Layout.Sider)`
  z-index: 1000;
  width: ${({ width }) => (width ? `${width}px` : '240px')};
  flex: 0 0 240px;
  height: 100%;

  &.ant-layout-sider {
    position: fixed;
    background: var(--sidebar-bg);
  }

  @media only screen and (max-width: 767px) {
    width: 240px !important;
    flex: 0 0 240px !important;
  }

  &.ant-layout-sider-collapsed {
    @media only screen and (max-width: 767px) {
      width: 0;
      min-width: 0 !important;
      max-width: 0 !important;
      flex: 0 0 0 !important;
    }
  }

  ul {
    overflow: hidden;
    &.ant-menu-inline,
    &.ant-menu-vertical,
    &.ant-menu-vertical-left {
      border-right: none !important;
    }
    &.ant-menu {
      li {
        color: #ffff;
        margin-top: 0px;
        margin-bottom: 0px !important;
        i {
          &.ant-menu-submenu-arrow {
            &::before,
            ::after {
              background: var(--sidebar-link-submenu-arrow-color);
            }
          }
        }
        div {
          margin-top: 0px !important;
          margin-bottom: 0px !important;
          &.ant-menu-submenu-title {
            &:hover {
              color: #ffff;
              background: var(--sidebar-link-color-hover);
              i {
                &.ant-menu-submenu-arrow {
                  &::before,
                  ::after {
                    background: var(--sidebar-link-submenu-arrow-color);
                  }
                }
              }
            }
          }
        }
        a {
          color: #ffff;
        }
        &.ant-menu-inline, &.ant-menu-item, &.ant-menu-inline, &.ant-menu-submenu-title  {
          width: 100% !important;
          transition: none;
          background: transparent;
          span, i {
            transition: none;
          }
          &::after {
            border-right: none;
          }
          &.ant-menu-item-selected,
          &:hover {
            background: var(--sidebar-link-color-hover);
          }
        }
      }
    }
  }


  /*ul {
    &.ant-menu-root {
      margin-top: 15px;
      border-right: none;
      li {
        padding: 0px !important;
        margin: 0px !important;
        ${({ collapsed }) => {
          return (
            collapsed &&
            css`
              text-align: center;
            `
          )
        }}
        &.ant-menu-item-selected {
          background-color: transparent;
        }
        &.ant-menu-submenu {
          ul {
            li {
              a {
                padding: 0px;
                padding-left: 40px;
              }
            }
          }
          &.ant-menu-submenu-open {
            i {
              &.ant-menu-submenu-arrow {
                &:before {
                  transform: rotate(45deg) translateX(3px);
                }
                &:after {
                  transform: rotate(-45deg) translateX(-3px);
                }
              }
            }
          }
          i {
            &.ant-menu-submenu-arrow {
              top: 52%;
              &:before {
                width: 8px;
                background: linear-gradient(
                  to right,
                  var(--sidebar-link-submenu-arrow-color),
                  var(--sidebar-link-submenu-arrow-color)
                );
                transform: rotate(-45deg) translateX(3px);
              }
              &:after {
                width: 8px;
                background: linear-gradient(
                  to right,
                  var(--sidebar-link-submenu-arrow-color),
                  var(--sidebar-link-submenu-arrow-color)
                );
                transform: rotate(45deg) translateX(-3px);
              }
            }
          }
          > div {
            padding-left: 0 !important;
            padding: 0 15px !important;
            margin: 0px;
            color: var(--sidebar-link-color);
            > i {
              font-size: 16px;
            }
            &:active {
              background: transparent;
            }
            &.active,
            &:hover {
              background: var(--sidebar-link-color-hover);
            }
          }
        }
        &.ant-menu-submenu-title {
          transition: none !important;
        }
        &.ant-menu-item {
          &:after {
            border-right: none !important;
          }
          transition: none !important;
          .anticon {
            transition: none !important;
            & + span {
              transition: none !important;
            }
          }
          &:active {
            background: transparent;
          }
          a {
            color: var(--sidebar-link-color);
            padding: 0 15px 0 15px;
            span {
              > i {
                font-size: 16px;
              }
              ${({ collapsed }) => {
                return (
                  collapsed &&
                  css`
                    > span {
                      display: none;
                    }
                  `
                )
              }}
            }
            &.active,
            &:hover {
              background: var(--sidebar-link-color-hover);
            }
          }
        }
      }
    }
  }*/
`
