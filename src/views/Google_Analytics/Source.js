import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CAccordion,
  CAccordionBody,
  CAccordionHeader,
  CAccordionItem,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
  CWidgetStatsA,
} from '@coreui/react'
import { DocsCallout, DocsExample } from 'src/components'
import { CChartPie } from '@coreui/react-chartjs'
import { cilOptions, cilPeople, cilPhone, cilLocationPin } from '@coreui/icons'

const Source = () => {
  return (
    <CRow>
      <CCol sm={6} lg={3}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Channels</strong>
          </CCardHeader>
        </CCard>
        <CWidgetStatsA
          className="mb-4"
          color="info"
          value={
            <>
              {' '}
              <span className="fs-6 fw-normal">
                <CIcon icon={cilPeople} />
              </span>
            </>
          }
          title="Traffic from channels (in %age)"
          action={
            <CDropdown alignment="end">
              <CDropdownToggle color="transparent" caret={false} className="p-0">
                <CIcon icon={cilOptions} className="text-high-emphasis-inverse" />
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownItem>Another action</CDropdownItem>
                <CDropdownItem>Something else here...</CDropdownItem>
                <CDropdownItem disabled>Disabled action</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          }
          chart={
            <CChartPie
              className="mt-3 mx-3"
              style={{ height: '200px' }}
              data={{
                labels: ['Organic', 'Socials', 'Direct', 'Refferals', 'Paid Search', 'Affiliates'],
                datasets: [
                  {
                    label: '',
                    backgroundColor: 'rgba(125,215,255,.1)',
                    borderColor: 'rgba(255,255,255,.55)',
                    data: [62, 3, 20, 9, 3, 2, 1],
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                maintainAspectRatio: false,
                scales: {
                  x: {
                    grid: {
                      display: false,
                      drawBorder: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                  y: {
                    min: -9,
                    max: 24,
                    display: false,
                    grid: {
                      display: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                },
                elements: {
                  line: {
                    borderWidth: 1,
                  },
                  point: {
                    radius: 2,
                    hitRadius: 10,
                    hoverRadius: 4,
                  },
                },
              }}
            />
          }
        />
      </CCol>
      <CCol sm={6} lg={3}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Devices</strong>
          </CCardHeader>
        </CCard>
        <CWidgetStatsA
          className="mb-4"
          color="success"
          value={
            <>
              {' '}
              <span className="fs-6 fw-normal">
                <CIcon icon={cilPhone} />
              </span>
            </>
          }
          title="Mobile Vs Non-Mobile Users"
          action={
            <CDropdown alignment="end">
              <CDropdownToggle color="transparent" caret={false} className="p-0">
                <CIcon icon={cilOptions} className="text-high-emphasis-inverse" />
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownItem>Another action</CDropdownItem>
                <CDropdownItem>Something else here...</CDropdownItem>
                <CDropdownItem disabled>Disabled action</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          }
          chart={
            <CChartPie
              className="mt-3 mx-3"
              style={{ height: '200px' }}
              data={{
                labels: ['Mobile Users', 'Non-mobile users'],
                datasets: [
                  {
                    label: '',
                    backgroundColor: 'rgba(125,215,255,.1)',
                    borderColor: 'rgba(255,255,255,.55)',
                    data: [30, 69],
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                maintainAspectRatio: false,
                scales: {
                  x: {
                    grid: {
                      display: false,
                      drawBorder: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                  y: {
                    min: -9,
                    max: 24,
                    display: false,
                    grid: {
                      display: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                },
                elements: {
                  line: {
                    borderWidth: 1,
                  },
                  point: {
                    radius: 2,
                    hitRadius: 10,
                    hoverRadius: 4,
                  },
                },
              }}
            />
          }
        />
      </CCol>
      <CCol sm={6} lg={3}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>User Location</strong>
          </CCardHeader>
        </CCard>
        <CWidgetStatsA
          className="mb-4"
          color="danger"
          value={
            <>
              {' '}
              <span className="fs-6 fw-normal">
                <CIcon icon={cilLocationPin} />
              </span>
            </>
          }
          title="City-Wise User Location"
          action={
            <CDropdown alignment="end">
              <CDropdownToggle color="transparent" caret={false} className="p-0">
                <CIcon icon={cilOptions} className="text-high-emphasis-inverse" />
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem>Action</CDropdownItem>
                <CDropdownItem>Another action</CDropdownItem>
                <CDropdownItem>Something else here...</CDropdownItem>
                <CDropdownItem disabled>Disabled action</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>
          }
          chart={
            <CChartPie
              className="mt-3 mx-3"
              style={{ height: '200px' }}
              data={{
                labels: [
                  'Hyderabad',
                  'Bangalore',
                  'Mumbai',
                  'Pune',
                  'Kolkata',
                  'Delhi',
                  'Chennai',
                  'Jaipur',
                  'Ahmedabad',
                ],
                datasets: [
                  {
                    label: '',
                    backgroundColor: 'rgba(125,215,255,.1)',
                    borderColor: 'rgba(255,255,255,.55)',
                    data: [25.5, 22.6, 14.6, 11.7, 5, 5, 5, 5, 5],
                  },
                ],
              }}
              options={{
                plugins: {
                  legend: {
                    display: false,
                  },
                },
                maintainAspectRatio: false,
                scales: {
                  x: {
                    grid: {
                      display: false,
                      drawBorder: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                  y: {
                    min: -9,
                    max: 24,
                    display: false,
                    grid: {
                      display: false,
                    },
                    ticks: {
                      display: false,
                    },
                  },
                },
                elements: {
                  line: {
                    borderWidth: 1,
                  },
                  point: {
                    radius: 2,
                    hitRadius: 10,
                    hoverRadius: 4,
                  },
                },
              }}
            />
          }
        />
      </CCol>
    </CRow>
  )
}

export default Source
