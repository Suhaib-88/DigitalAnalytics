import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Sessions = React.lazy(() => import('./views/Google_Analytics/Sessions'))
const Source = React.lazy(() => import('./views/Google_Analytics/Source'))
const Metric = React.lazy(() => import('./views/Google_Analytics/metrics'))
const Monetization = React.lazy(() => import('./views/Google_Analytics/monetization'))
const Onsite = React.lazy(() => import('./views/User_Engagement/onsiteEngagement'))
const Offsite = React.lazy(() => import('./views/User_Engagement/offsiteEngagement'))
const fb = React.lazy(() => import('./views/Socials_Media_Metrics/FaceBookAnalytics'))
const fb_nlp = React.lazy(() => import('./views/Socials_Media_Metrics/FaceBookNLP'))
const insta = React.lazy(() => import('./views/Socials_Media_Metrics/InstagramAnalytics'))
const insta_nlp = React.lazy(() => import('./views/Socials_Media_Metrics/InstagramNLP'))
const products = React.lazy(() => import('./views/Product_Analytics/Products.js'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
  { path: '/GA/sessions', name: 'Sessions', element: Sessions },
  { path: '/GA/sources', name: 'Sources', element: Source },
  { path: '/GA/metrics', name: 'Metrics', element: Metric },
  { path: '/GA/monetization', name: 'Monetization', element: Monetization },
  { path: '/engagement/onsite', name: 'Onsite-analytics', element: Onsite },
  { path: '/engagement/offsite', name: 'Offsite-analytics', element: Offsite },
  { path: '/fb/metrics', name: 'FacebookMetrics', element: fb },
  { path: '/fb/nlp_analysis', name: 'FacebookNLP', element: fb_nlp },
  { path: '/insta/metrics', name: 'InstaMetrics', element: insta },
  { path: '/insta/nlp_analysis', name: 'InstaNLP', element: insta_nlp },
  { path: '/productAnalytics', name: 'Prods', element: products },
]

export default routes
