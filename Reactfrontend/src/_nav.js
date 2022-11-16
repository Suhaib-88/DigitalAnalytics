import React from 'react'
import CIcon from '@coreui/icons-react'

import {
  cibTelegram,
  cilActionRedo,
  cilActionUndo,
  cilBackspace,
  cilBell,
  cilCalculator,
  cilCamera,
  cilChartPie,
  cilCursor,
  cilDrop,
  cilGraph,
  cilNotes,
  cilPencil,
  cilPeople,
  cilPuzzle,
  cilSmile,
  cilSpeedometer,
  cilStar,
} from '@coreui/icons'

import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Overview',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'FULL',
    },
  },
  {
    component: CNavTitle,
    name: 'Analytics',
  },
  {
    component: CNavGroup,
    name: 'Google Analytics',
    to: '/GA',
    icon: <CIcon icon={cilGraph} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Sessions',
        to: '/GA/sessions',
      },
      {
        component: CNavItem,
        name: 'Sources',
        to: '/GA/sources',
      },
      {
        component: CNavItem,
        name: 'Metrics',
        to: '/GA/metrics',
      },
      {
        component: CNavItem,
        name: 'Monetization',
        to: '/GA/monetization',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Engagement',
  },
  {
    component: CNavItem,
    name: 'On-site Engagement',
    to: '/engagement/onsite',
    icon: <CIcon icon={cilSmile} customClassName="nav-icon" />,
  },
  {
    component: CNavItem,
    name: 'Off-site Engagement',
    to: '/engagement/offsite',
    icon: <CIcon icon={cilBackspace} customClassName="nav-icon" />,
  },
  {
    component: CNavTitle,
    name: 'Social Media Metrics',
  },
  {
    component: CNavGroup,
    name: 'Facebook',
    to: '/fb',
    icon: <CIcon icon={cilPeople} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Metrics',
        to: '/fb/metrics',
      },
      {
        component: CNavItem,
        name: 'NLP Analysis',
        to: '/fb/nlp_analysis',
      },
    ],
  },
  {
    component: CNavGroup,
    name: 'Instagram',
    to: '/insta',
    icon: <CIcon icon={cilCamera} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Metrics',
        to: '/insta/metrics',
      },
      {
        component: CNavItem,
        name: 'NLP Analysis',
        to: '/insta/nlp_analysis',
      },
    ],
  },
  {
    component: CNavTitle,
    name: 'Product Analytics',
  },
  {
    component: CNavItem,
    name: 'Products',
    to: '/productAnalytics',
  },
]

export default _nav
