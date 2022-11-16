import React from 'react'
import { CImage, CWidgetStatsA, CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import { DocsCallout, DocsExample } from 'src/components'
import wc from 'src/assets/images/wordclouds.png'
import summary from 'src/assets/images/summary.png'
import postanalytics from 'src/assets/images/postAnalytics.png'

import yearlyLikes from 'src/assets/images/yearlyLikes.jpg'
import yearlycomments from 'src/assets/images/yearlywiseComent.jpg'
import MonthlyLikes from 'src/assets/images/monthly_likes.jpg'
import Monthlycomments from 'src/assets/images/monthwiseComent.jpg'
import DailyLikes from 'src/assets/images/dailyLikes.jpg'
import Dailycomments from 'src/assets/images/dailyComments.jpg'

const InstagramAnalytics = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Instagram Summary</strong>
          </CCardHeader>
          <CCardBody>
            <CImage align="center" rounded src={summary} />
          </CCardBody>
        </CCard>
        <CCard className="mb-5">
          <CCardHeader>
            <strong>Post Analytics (Likes vs Comments vs Views) </strong>
          </CCardHeader>
          <CCardBody>
            <CImage align="center" rounded src={postanalytics} />
          </CCardBody>
        </CCard>
        <CCard className="mb-5">
          <CCardHeader>
            <strong>Most Used HashTags</strong>
          </CCardHeader>
          <CCardBody>
            <CImage align="center" rounded src={wc} />
          </CCardBody>
        </CCard>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Monthly Instagram Metrics</strong>
          </CCardHeader>
          <CCardBody>
            <table className="table">
              <tbody>
                <tr>
                  <td>
                    <span className="monthly-1">Monthly Likes</span>
                    <CImage align="center" rounded src={MonthlyLikes} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="quarterly">Monthly Comments</span>
                    <CImage align="center" rounded src={Monthlycomments} />
                  </td>
                </tr>
              </tbody>
            </table>
          </CCardBody>
        </CCard>
        <CCard className="mb-5">
          <CCardHeader>
            <strong>Yearly Instagram Metrics</strong>
          </CCardHeader>
          <CCardBody>
            <table className="table">
              <tbody>
                <tr>
                  <td>
                    <span className="quarterly">Yearly Likes</span>
                    <CImage align="center" rounded src={yearlyLikes} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="monthly-1">Yearly Comments</span>
                    <CImage align="center" rounded src={yearlycomments} />
                  </td>
                </tr>
              </tbody>
            </table>
          </CCardBody>
        </CCard>
        <CCard className="mb-5">
          <CCardHeader>
            <strong>Daily Instagram Metrics</strong>
          </CCardHeader>
          <CCardBody>
            <table className="table">
              <tbody>
                <tr>
                  <td>
                    <span className="quarterly">Daily Likes</span>
                    <CImage align="center" rounded src={DailyLikes} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="monthly-1">Daily Comments</span>
                    <CImage align="center" rounded src={Dailycomments} />
                  </td>
                </tr>
              </tbody>
            </table>
          </CCardBody>
        </CCard>
        <CWidgetStatsA
          className="mb-4"
          color="danger"
          value={
            <>
              <span className="fs-6 fw-normal">12 </span>
            </>
          }
          title="Avg. Likes per comment"
        />
        <CWidgetStatsA
          className="mb-4"
          color="success"
          value={
            <>
              <span className="fs-6 fw-normal">195</span>
            </>
          }
          title="Avg. Likes per post"
        />
      </CCol>
    </CRow>
  )
}

export default InstagramAnalytics
