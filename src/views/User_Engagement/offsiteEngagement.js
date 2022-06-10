import React from 'react'
import { CRow, CCol, CImage, CCard, CCardBody, CCardHeader } from '@coreui/react'

import OS from 'src/assets/images/Os.jpg'
import Timeofday from 'src/assets/images/timeofday.jpg'
import monthly from 'src/assets/images/monthly.jpg'
import Sentiment from 'src/assets/images/sentimental.jpg'
import sentimentScore from 'src/assets/images/sentimentScore.jpg'

import { useState } from 'react'
import { CNavLink, CNav, CNavItem, CTabPane, CTabContent } from '@coreui/react'
import PCA1 from 'src/assets/images/PCA0.png'
import PCA2 from 'src/assets/images/PCA1.png'
import PCA3 from 'src/assets/images/PCA2.png'

const OffsiteEngagement = () => {
  const [activeKey, setActiveKey] = useState(1)
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Most popular Operating System used Offsite?</strong>
          </CCardHeader>
          <CCardBody>
            <CImage align="center" rounded src={OS} />
          </CCardBody>
        </CCard>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>What time of day has the most engagement offsite?</strong>
          </CCardHeader>
          <CCardBody>
            <CImage align="center" rounded src={Timeofday} />
          </CCardBody>
        </CCard>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>What month has highest engagement offsite?</strong>
          </CCardHeader>
          <CCardBody>
            <CImage align="center" rounded src={monthly} width={700} height={370} />
          </CCardBody>
        </CCard>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Sentiment Analysis</strong>
          </CCardHeader>
          <CCardBody>
            <table className="table">
              <tbody>
                <tr>
                  <td>
                    <span className="monthly-1">Sentiment categories barplot</span>
                    <CImage align="center" rounded src={Sentiment} width={700} height={370} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="quarterly">Sentiment Score Histogram</span>
                    <CImage align="center" rounded src={sentimentScore} width={700} height={370} />
                  </td>
                </tr>
              </tbody>
            </table>
          </CCardBody>
        </CCard>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>BlogPost Sentiment Analysis</strong>
          </CCardHeader>
          <CCardBody>
            <CNav variant="pills" role="tablist">
              <CNavItem>
                <CNavLink
                  href="javascript:void(0);"
                  active={activeKey === 1}
                  onClick={() => setActiveKey(1)}
                >
                  Positive sentiment
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink
                  href="javascript:void(0);"
                  active={activeKey === 2}
                  onClick={() => setActiveKey(2)}
                >
                  Neutral sentiment
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink
                  href="javascript:void(0);"
                  active={activeKey === 3}
                  onClick={() => setActiveKey(3)}
                >
                  Negative sentiment
                </CNavLink>
              </CNavItem>
            </CNav>
            <CTabContent>
              <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey === 1}>
                <table className="table">
                  <thead>Positive post titles</thead>
                  <tbody>
                    <tr>
                      <td>
                        <span>Father day gifts</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>Mothers day Surprises</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>Surprise your pets</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>anniversary gift ideas</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>babyshower gift ideas</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>Raksha bandhan day surpise gifts</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>Friendship day surpise gifts</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>Republic day surpise gifts</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>Surprise your hubbies</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>Gifts for Hubby</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </CTabPane>
              <CTabPane role="tabpanel" aria-labelledby="profile-tab" visible={activeKey === 2}>
                <table className="table">
                  <thead>Neutral post titles</thead>
                  <tbody>
                    <tr>
                      <td>
                        <span>gift ideas for your father</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>Earth day gifts</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>Surprise your friend</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>Surprise your pets</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span> Surprise your well wishers</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>Surprise your friend</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </CTabPane>
              <CTabPane role="tabpanel" aria-labelledby="contact-tab" visible={activeKey === 3}>
                <table className="table">
                  <thead>Negative post titles</thead>
                  <tbody>
                    <tr>
                      <td>
                        <span>Good friday surprise</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>Earth day gifts</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>gift ideas for your brother</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>Congrats surprise ideas</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span> Surprise your well wishers</span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <span>gift ideas for your sister</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </CTabPane>
            </CTabContent>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default OffsiteEngagement
