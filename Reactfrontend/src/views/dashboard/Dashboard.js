import React from 'react'

import {
  CAvatar,
  CButton,
  CButtonGroup,
  CCard,
  CCardBody,
  CCardFooter,
  CCardHeader,
  CCol,
  CProgress,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import { CChartLine } from '@coreui/react-chartjs'
import { getStyle, hexToRgba } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  cibCcAmex,
  cibCcApplePay,
  cibCcMastercard,
  cibCcPaypal,
  cibCcStripe,
  cibCcVisa,
  cibGoogle,
  cibFacebook,
  cibLinkedin,
  cifBr,
  cifEs,
  cifFr,
  cifIn,
  cifPl,
  cifUs,
  cibTwitter,
  cilCloudDownload,
  cilPeople,
  cilUser,
  cilUserFemale,
  cibInstagram,
  cibCpanel,
  cibDiscover,
  cilLoop,
  cilChildFriendly,
  cilLoopCircular,
  cibAndroid,
  cibApple,
  cilScreenDesktop,
  cilApple,
} from '@coreui/icons'

import avatar1 from 'src/assets/images/avatars/1.jpg'
import avatar2 from 'src/assets/images/avatars/2.jpg'
import avatar3 from 'src/assets/images/avatars/3.jpg'
import avatar4 from 'src/assets/images/avatars/4.jpg'
import avatar5 from 'src/assets/images/avatars/5.jpg'
import avatar6 from 'src/assets/images/avatars/6.jpg'

import WidgetsBrand from '../widgets/WidgetsBrand'
import WidgetsDropdown from '../widgets/WidgetsDropdown'

const Dashboard = () => {
  const random = (min, max) => Math.floor(Math.random() * (max - min + 1) + min)

  const progressExample = [
    { title: 'Visits', value: '32,850 Visit', percent: 40, color: 'success' },
    { title: 'Unique', value: '25,256 Unique Users', percent: 20, color: 'info' },
    { title: 'Pageviews', value: '92,605 Views', percent: 60, color: 'warning' },
    { title: 'New Users', value: '25,256 Users', percent: 80, color: 'danger' },
    { title: 'Bounce Rate', value: 'Average Rate', percent: 52.15, color: 'primary' },
  ]

  const progressGroupExample1 = [
    { title: 'Monday', value1: 75, value2: 25 },
    { title: 'Tuesday', value1: 75, value2: 25 },
    { title: 'Wednesday', value1: 75, value2: 25 },
    { title: 'Thursday', value1: 72, value2: 17 },
    { title: 'Friday', value1: 77, value2: 23 },
    { title: 'Saturday', value1: 73, value2: 22 },
    { title: 'Sunday', value1: 77, value2: 23 },
  ]

  const progressGroupExample2 = [
    { title: 'Converting New Users', icon: cilLoop, value: 30, color: 'info' },
    { title: 'Converting Recurring Users', icon: cilLoopCircular, value: 24, color: 'danger' },
  ]

  const progressGroupExample3 = [
    { title: 'Organic Search', icon: cibGoogle, percent: 60, value: '33,300' },
    { title: 'Direct', icon: cibDiscover, percent: 19.5, value: '11,104' },
    { title: 'Facebook', icon: cibFacebook, percent: 3, value: '1,665' },
    { title: 'Instagram', icon: cibInstagram, percent: 1, value: '510' },
  ]

  const tableExample = [
    {
      avatar: { src: avatar1, status: 'success' },
      user: {
        name: 'Mumbai',
        new: true,
        registered: '21.7K',
      },
      country: { name: '19,833', flag: cifUs },
      usage: {
        value: 60,
        period: 'Organic %age',
        color: 'success',
      },
      payment: { name: 'Mastercard', icon: cibApple },
      activity: '225K',
    },
    {
      avatar: { src: avatar2, status: 'danger' },
      user: {
        name: 'Hyderabad',
        new: false,
        registered: '36.9K',
      },
      country: { name: '34,180', flag: cifBr },
      usage: {
        value: 60,
        period: 'Organic %age',
        color: 'info',
      },
      payment: { name: 'Visa', icon: cilScreenDesktop },
      activity: '490K',
    },
    {
      avatar: { src: avatar3, status: 'warning' },
      user: { name: 'Bangalore', new: true, registered: '32.9K' },
      country: { name: '30,293', flag: cifIn },
      usage: {
        value: 60,
        period: 'Organic %age',
        color: 'warning',
      },
      payment: { name: 'Stripe', icon: cibApple },
      activity: '428K',
    },
    {
      avatar: { src: avatar4, status: 'secondary' },
      user: { name: 'Pune', new: true, registered: '17.9K' },
      country: { name: '14,603', flag: cifFr },
      usage: {
        value: 72,
        period: 'Organic %age',
        color: 'danger',
      },
      payment: { name: 'PayPal', icon: cibAndroid },
      activity: '297K',
    },
    {
      avatar: { src: avatar5, status: 'success' },
      user: {
        name: 'Chennai',
        new: true,
        registered: '7.5K',
      },
      country: { name: '7,808', flag: cifEs },
      usage: {
        value: 36,
        period: 'Organic %age',
        color: 'primary',
      },
      payment: { name: 'Google Wallet', icon: cilScreenDesktop },
      activity: '106K',
    },
    {
      avatar: { src: avatar6, status: 'danger' },
      user: {
        name: 'Delhi',
        new: true,
        registered: '7.4K',
      },
      country: { name: '7,228', flag: cifPl },
      usage: {
        value: 63,
        period: 'Organic %age',
        color: 'success',
      },
      payment: { name: 'Amex', icon: cibAndroid },
      activity: '379K',
    },
    {
      avatar: { src: avatar6, status: 'danger' },
      user: {
        name: 'Ahmedabad',
        new: true,
        registered: '7.5K',
      },
      country: { name: '6,162', flag: cifPl },
      usage: {
        value: 47,
        period: 'Organic %age',
        color: 'success',
      },
      payment: { name: 'Amex', icon: cibApple },
      activity: '120K',
    },
    {
      avatar: { src: avatar6, status: 'danger' },
      user: {
        name: 'Kolkata',
        new: true,
        registered: '7.1K',
      },
      country: { name: '6,325', flag: cifPl },
      usage: {
        value: 56,
        period: 'Organic %age',
        color: 'success',
      },
      payment: { name: 'Amex', icon: cibAndroid },
      activity: '130K',
    },
    {
      avatar: { src: avatar6, status: 'danger' },
      user: {
        name: 'Jaipur',
        new: true,
        registered: '7.4K',
      },
      country: { name: '6,620', flag: cilScreenDesktop },
      usage: {
        value: 61.7,
        period: 'Organic %age',
        color: 'success',
      },
      payment: { name: 'Amex', icon: cibAndroid },
      activity: '82K',
    },
  ]

  return (
    <>
      <WidgetsDropdown />
      <CCard className="mb-4">
        <CCardBody>
          <CRow>
            <CCol sm={5}>
              <h4 id="traffic" className="card-title mb-0">
                Traffic (in thousands)
              </h4>
              <div className="small text-medium-emphasis">January - July 2021</div>
            </CCol>
            <CCol sm={7} className="d-none d-md-block">
              <CButton color="primary" className="float-end">
                <CIcon icon={cilCloudDownload} />
              </CButton>
              <CButtonGroup className="float-end me-3">
                {['Day', 'Month', 'Year'].map((value) => (
                  <CButton
                    color="outline-secondary"
                    key={value}
                    className="mx-0"
                    active={value === ['Day']}
                  >
                    {value}
                  </CButton>
                ))}
              </CButtonGroup>
            </CCol>
          </CRow>
          <CChartLine
            style={{ height: '300px', marginTop: '40px' }}
            data={{
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
              datasets: [
                {
                  label: 'New Visitors',
                  backgroundColor: '#ADD8E6',
                  borderColor: getStyle('--cui-info'),
                  pointHoverBackgroundColor: getStyle('--cui-info'),
                  borderWidth: 2,
                  data: [36, 30, 35, 45, 38, 40, 36],
                  fill: true,
                },
                {
                  label: 'Sessions',
                  backgroundColor: 'green',
                  borderColor: getStyle('--cui-success'),
                  pointHoverBackgroundColor: getStyle('--cui-success'),
                  borderWidth: 2,
                  data: [116, 80, 98, 125, 102, 106, 126],
                },
                {
                  label: 'Page Views',
                  backgroundColor: 'red',
                  borderColor: getStyle('--cui-danger'),
                  pointHoverBackgroundColor: getStyle('--cui-danger'),
                  borderWidth: 1,
                  borderDash: [8, 5],
                  data: [165, 102, 177, 136, 115, 121, 105],
                },
              ],
            }}
            options={{
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  display: false,
                },
              },
              scales: {
                x: {
                  grid: {
                    drawOnChartArea: false,
                  },
                },
                y: {
                  ticks: {
                    beginAtZero: true,
                    maxTicksLimit: 5,
                    stepSize: Math.ceil(250 / 5),
                    max: 250,
                  },
                },
              },
              elements: {
                line: {
                  tension: 0.4,
                },
                point: {
                  radius: 0,
                  hitRadius: 10,
                  hoverRadius: 4,
                  hoverBorderWidth: 3,
                },
              },
            }}
          />
        </CCardBody>
        <CCardFooter>
          <CRow xs={{ cols: 1 }} md={{ cols: 5 }} className="text-center">
            {progressExample.map((item, index) => (
              <CCol className="mb-sm-2 mb-0" key={index}>
                <div className="text-medium-emphasis">{item.title}</div>
                <strong>
                  {item.value} ({item.percent}%)
                </strong>
                <CProgress thin className="mt-2" color={item.color} value={item.percent} />
              </CCol>
            ))}
          </CRow>
        </CCardFooter>
      </CCard>

      <WidgetsBrand withCharts />

      <CRow>
        <CCol xs>
          <CCard className="mb-4">
            <CCardHeader>Traffic {' & '} Sales</CCardHeader>
            <CCardBody>
              <CRow>
                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-info py-1 px-3">
                        <div className="text-medium-emphasis small">New Clients</div>
                        <div className="fs-5 fw-semibold">42,365</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-danger py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Recurring Clients</div>
                        <div className="fs-5 fw-semibold">13,134</div>
                      </div>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />
                  {progressGroupExample1.map((item, index) => (
                    <div className="progress-group mb-4" key={index}>
                      <div className="progress-group-prepend">
                        <span className="text-medium-emphasis small">{item.title}</span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="info" value={item.value1} />
                        <CProgress thin color="danger" value={item.value2} />
                      </div>
                    </div>
                  ))}
                </CCol>

                <CCol xs={12} md={6} xl={6}>
                  <CRow>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-warning py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Conversion Rate</div>
                        <div className="fs-5 fw-semibold">28.54%</div>
                      </div>
                    </CCol>
                    <CCol sm={6}>
                      <div className="border-start border-start-4 border-start-success py-1 px-3 mb-3">
                        <div className="text-medium-emphasis small">Users across channels</div>
                        <div className="fs-5 fw-semibold">55,499</div>
                      </div>
                    </CCol>
                  </CRow>

                  <hr className="mt-0" />

                  {progressGroupExample2.map((item, index) => (
                    <div className="progress-group mb-4" key={index}>
                      <div className="progress-group-header">
                        <CIcon className="me-2" icon={item.icon} size="lg" />
                        <span>{item.title}</span>
                        <span className="ms-auto fw-semibold">{item.value}%</span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="warning" value={item.value} />
                      </div>
                    </div>
                  ))}

                  <div className="mb-5"></div>

                  {progressGroupExample3.map((item, index) => (
                    <div className="progress-group" key={index}>
                      <div className="progress-group-header">
                        <CIcon className="me-2" icon={item.icon} size="lg" />
                        <span>{item.title}</span>
                        <span className="ms-auto fw-semibold">
                          {item.value}{' '}
                          <span className="text-medium-emphasis small">({item.percent}%)</span>
                        </span>
                      </div>
                      <div className="progress-group-bars">
                        <CProgress thin color="success" value={item.percent} />
                      </div>
                    </div>
                  ))}
                </CCol>
              </CRow>

              <br />

              <CTable align="middle" className="mb-0 border" hover responsive>
                <CTableHead color="light">
                  <CTableRow>
                    <CTableHeaderCell>City</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">No. of Sessions</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Channel Split</CTableHeaderCell>
                    <CTableHeaderCell>Devices</CTableHeaderCell>
                    <CTableHeaderCell>Revenue</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {tableExample.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index}>
                      <CTableDataCell>
                        <div>{item.user.name}</div>
                        <div className="small text-medium-emphasis">
                          || Page Hits: {item.user.registered} ||
                        </div>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <strong>{item.country.name}</strong>
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="clearfix">
                          <div className="float-start">
                            <strong>{item.usage.value}%</strong>
                          </div>
                          <div className="float-end">
                            <small className="text-medium-emphasis">{item.usage.period}</small>
                          </div>
                        </div>
                        <CProgress thin color={item.usage.color} value={item.usage.value} />
                      </CTableDataCell>
                      <CTableDataCell className="text-center">
                        <CIcon size="xl" icon={item.payment.icon} />
                      </CTableDataCell>
                      <CTableDataCell>
                        <div className="small text-medium-emphasis">INR</div>
                        <strong>{item.activity}</strong>
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
            </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </>
  )
}

export default Dashboard
