import PropTypes from 'prop-types'
import React, { useEffect, useState, createRef } from 'react'
import classNames from 'classnames'
import { CRow, CCol, CCard, CCardHeader, CCardBody } from '@coreui/react'
import { rgbToHex } from '@coreui/utils'
import CIcon from '@coreui/icons-react'
import {
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
  CWidgetStatsA,
} from '@coreui/react'
import { CChartPie } from '@coreui/react-chartjs'
import { cilOptions, cilPeople } from '@coreui/icons'

import { DocsLink } from 'src/components'
import { CImage } from '@coreui/react'
import dailySess from 'src/assets/images/yearlySess.jpg'
import quarterlySess from 'src/assets/images/quarterlySess1.jpg'
import monthlySess from 'src/assets/images/monthly_sess1.png'
import revunue_per_sess from 'src/assets/images/RevSess42.jpg'
import views_per_sess from 'src/assets/images/views_per_sess42.jpg'
import avg_sess_month from 'src/assets/images/avg_sess_month.jpg'
import avg_sess_quart from 'src/assets/images/avg_sess_quarter.jpg'

const Sessions = () => {
  return (
    <>
      <CCard className="mb-4">
        <CCardHeader>
          <strong>Session Count</strong>
        </CCardHeader>
        <CCardBody>
          <table className="table">
            <tbody>
              <tr>
                <td>
                  <span className="daily">Daily Session Count</span>
                  <CImage align="center" rounded src={dailySess} width={700} height={370} />
                </td>
              </tr>
              <tr>
                <td>
                  <span className="monthly-1">Monthly Session Count</span>
                  <CImage align="center" rounded src={monthlySess} width={700} height={370} />
                </td>
              </tr>
              <tr>
                <td>
                  <span className="quarterly">Quarterly Session Count</span>
                  <CImage align="center" rounded src={quarterlySess} width={700} height={370} />
                </td>
              </tr>
            </tbody>
          </table>
        </CCardBody>
      </CCard>
      <CCard className="mb-5">
        <CCardHeader>
          <strong>Sessions by New vs Old Visitors</strong>
        </CCardHeader>
        <CCardBody>
          <CRow>
            <CCol sm={6} lg={3}>
              <CWidgetStatsA
                className="mb-4"
                color="primary"
                value={
                  <>
                    {' '}
                    <span className="fs-6 fw-normal">
                      <CIcon icon={cilPeople} />
                    </span>
                  </>
                }
                title="Sessions by Recurring vs New Visitors (in %age)"
                action={
                  <CDropdown alignment="center">
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
                    style={{ height: '240px' }}
                    data={{
                      labels: ['Recurring', 'New'],
                      datasets: [
                        {
                          label: '',
                          backgroundColor: 'rgba(125,215,255,.1)',
                          borderColor: 'rgba(255,255,255,.55)',
                          data: [68, 31],
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
        </CCardBody>
      </CCard>
      <CCard className="mb-6">
        <CCardHeader>
          <strong>Average Session Duration</strong>
        </CCardHeader>
        <CCardBody>
          <table className="table">
            <tbody>
              <tr>
                <td>
                  <span className="monthly-1">Average Duration (Monthly)</span>
                  <CImage align="center" rounded src={avg_sess_month} width={700} height={370} />
                </td>
              </tr>
              <tr>
                <td>
                  <span className="quarterly">Average Duration (Quarterly)</span>
                  <CImage align="center" rounded src={avg_sess_quart} width={700} height={370} />
                </td>
              </tr>
            </tbody>
          </table>
        </CCardBody>
      </CCard>
      <CCard className="mb-6">
        <CCardHeader>
          <strong>Views per Sessions</strong>
        </CCardHeader>
        <CCardBody>
          <CImage align="center" rounded src={views_per_sess} width={700} height={370} />
        </CCardBody>
      </CCard>
      <CCard className="mb-6">
        <CCardHeader>
          <strong>Revenue generated from each Session</strong>
        </CCardHeader>
        <CCardBody>
          <CImage align="center" rounded src={revunue_per_sess} width={700} height={370} />
        </CCardBody>
      </CCard>
    </>
  )
}

export default Sessions
