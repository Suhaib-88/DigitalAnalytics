import React from 'react'
import { CCol, CImage, CRow } from '@coreui/react'
import { CCard, CCardHeader, CCardBody } from '@coreui/react'
import { DocsCallout, DocsExample } from 'src/components'
import ReactImg from 'src/assets/images/react.jpg'
import conversionMonthly from 'src/assets/images/conversionMonthly.jpg'
import convQuart from 'src/assets/images/conversionQuarterly.jpg'
import bounceMonthly from 'src/assets/images/bounceMonthly.jpg'
import bounceQuarterly from 'src/assets/images/bounceQuarterly.jpg'
import avg_sess_month from 'src/assets/images/avg_sess_month.jpg'
import avg_sess_quart from 'src/assets/images/avg_sess_quarter.jpg'
import channelcount from 'src/assets/images/Channels24.jpg'
import channelrev from 'src/assets/images/channelRev24.jpg'
import channelviews from 'src/assets/images/Pageviews24.jpg'
import timeview from 'src/assets/images/timeViews.jpg'
import timesession from 'src/assets/images/sessions.jpg'
import timerev from 'src/assets/images/rev.jpg'

const Metrics = () => {
  return (
    <CRow>
      <CCard className="mb-4">
        <CCardHeader>
          <strong>Conversion Rates</strong>
        </CCardHeader>
        <CCardBody>
          <table className="table">
            <tbody>
              <tr>
                <td>
                  <span className="monthly-1">Monthly Conversion %age</span>
                  <CImage align="center" rounded src={conversionMonthly} />
                </td>
              </tr>
              <tr>
                <td>
                  <span className="quarterly">Quarterly Conversion %age</span>
                  <CImage align="center" rounded src={convQuart} />
                </td>
              </tr>
            </tbody>
          </table>
        </CCardBody>
      </CCard>
      <CCard className="mb-5">
        <CCardHeader>
          <strong>Bounce Rates</strong>
        </CCardHeader>
        <CCardBody>
          <table className="table">
            <tbody>
              <tr>
                <td>
                  <span className="quarterly">Quarterly Bounce %age</span>
                  <CImage align="center" rounded src={bounceQuarterly} />
                </td>
              </tr>
              <tr>
                <td>
                  <span className="monthly-1">Monthly Bounce %age</span>
                  <CImage align="center" rounded src={bounceMonthly} />
                </td>
              </tr>
            </tbody>
          </table>
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
          <strong>Channels</strong>
        </CCardHeader>
        <CCardBody>
          <table className="table">
            <tbody>
              <tr>
                <td>
                  <span className="counts">Channnel counts</span>
                  <CImage align="center" rounded src={channelcount} />
                </td>
              </tr>
              <tr>
                <td>
                  <span className="viewer">Channel-wise page views</span>
                  <CImage align="center" rounded src={channelviews} />
                </td>
              </tr>
              <tr>
                <td>
                  <span className="revenue">REVENUE generated from each Channel</span>
                  <CImage align="center" rounded src={channelrev} />
                </td>
              </tr>
            </tbody>
          </table>
        </CCardBody>
      </CCard>
      <CCard className="mb-6">
        <CCardHeader>
          <strong>Time on-site</strong>
        </CCardHeader>
        <CCardBody>
          <table className="table">
            <tbody>
              <tr>
                <td>
                  <span className="cor">Time onsite vs Sessions</span>
                  <CImage align="center" rounded src={timesession} />
                </td>
              </tr>
              <tr>
                <td>
                  <span className="ewer">Time onsite vs page views</span>
                  <CImage align="center" rounded src={timeview} />
                </td>
              </tr>
              <tr>
                <td>
                  <span className="enue">Time onsite vs REVENUE generated</span>
                  <CImage align="center" rounded src={timerev} />
                </td>
              </tr>
            </tbody>
          </table>
        </CCardBody>
      </CCard>
    </CRow>
  )
}

export default Metrics
