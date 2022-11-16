import React from 'react'
import { useState } from 'react'
import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CNavLink,
  CNav,
  CNavItem,
  CFormCheck,
  CTabPane,
  CTabContent,
  CListGroup,
  CListGroupItem,
  CRow,
} from '@coreui/react'
import { CImage } from '@coreui/react'
import { DocsCallout, DocsExample } from 'src/components'
import Reviewlen from 'src/assets/images/Reviewlen24.jpg'
import Reviewords from 'src/assets/images/Reviewords24.jpg'
import avgwords from 'src/assets/images/avgReviewlen24.jpg'
import WordCloud from 'src/assets/images/WordCloud.jpg'
import topics from 'src/assets/images/topic24.jpg'
import bigrams from 'src/assets/images/bigram24.jpg'
import PCA1 from 'src/assets/images/PCA0.png'
import PCA2 from 'src/assets/images/PCA1.png'
import PCA3 from 'src/assets/images/PCA2.png'

const Onsite = () => {
  const [activeKey, setActiveKey] = useState(1)
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Length of each Reviews</strong>
          </CCardHeader>
          <CCardBody>
            <CImage align="center" rounded src={Reviewlen} width={700} height={370} />
          </CCardBody>
        </CCard>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Word count of each Review</strong>
          </CCardHeader>
          <CCardBody>
            <CImage align="center" rounded src={Reviewords} width={700} height={370} />
          </CCardBody>
        </CCard>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Average words in a Review</strong>
          </CCardHeader>
          <CCardBody>
            <CImage align="center" rounded src={avgwords} width={700} height={370} />
          </CCardBody>
        </CCard>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>WordCloud</strong>
          </CCardHeader>
          <CCardBody>
            <CImage align="center" rounded src={WordCloud} />
          </CCardBody>
        </CCard>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Name Entity Recognizer</strong>
          </CCardHeader>
          <CCardBody>
            <CImage align="center" rounded src={topics} />
          </CCardBody>
        </CCard>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Bigrams count</strong>
          </CCardHeader>
          <CCardBody>
            <CImage align="center" rounded src={bigrams} width={700} height={370} />
          </CCardBody>
        </CCard>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Top 30 Frequent terms in each segment</strong>
          </CCardHeader>
          <CCardBody>
            <CNav variant="pills" role="tablist">
              <CNavItem>
                <CNavLink
                  href="javascript:void(0);"
                  active={activeKey === 1}
                  onClick={() => setActiveKey(1)}
                >
                  Group 1
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink
                  href="javascript:void(0);"
                  active={activeKey === 2}
                  onClick={() => setActiveKey(2)}
                >
                  Group 2
                </CNavLink>
              </CNavItem>
              <CNavItem>
                <CNavLink
                  href="javascript:void(0);"
                  active={activeKey === 3}
                  onClick={() => setActiveKey(3)}
                >
                  Group 3
                </CNavLink>
              </CNavItem>
            </CNav>
            <CTabContent>
              <CTabPane role="tabpanel" aria-labelledby="home-tab" visible={activeKey === 1}>
                <CImage align="center" rounded src={PCA1} />
              </CTabPane>
              <CTabPane role="tabpanel" aria-labelledby="profile-tab" visible={activeKey === 2}>
                <CImage align="center" rounded src={PCA2} />
              </CTabPane>
              <CTabPane role="tabpanel" aria-labelledby="contact-tab" visible={activeKey === 3}>
                <CImage align="center" rounded src={PCA3} />
              </CTabPane>
            </CTabContent>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}
export default Onsite
