import React from 'react'
import { useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CImage,
  CNav,
  CNavItem,
  CNavLink,
  CTabContent,
  CTabPane,
  CRow,
} from '@coreui/react'
import { DocsCallout, DocsExample } from 'src/components'
import Group1 from 'src/assets/images/FB-1.png'
import Group2 from 'src/assets/images/FB-2.png'
import Group3 from 'src/assets/images/FB-3.png'
import commentsLen from 'src/assets/images/FBlen24.jpg'
import commentsWords from 'src/assets/images/FBCommentswords.jpg'
import WordCloud from 'src/assets/images/WordCloudFB.jpg'
import topics from 'src/assets/images/IGtopic24.jpg'
import sentiments from 'src/assets/images/FBsentiment24.jpg'
import Sentimentscore from 'src/assets/images/FBsentimentscore.jpg'

const FaceBookNLP = () => {
  const [activeKey, setActiveKey] = useState(1)
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Length of each Comment</strong>
          </CCardHeader>
          <CCardBody>
            <CImage align="center" rounded src={commentsLen} width={700} height={370} />
          </CCardBody>
        </CCard>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Word count of each Comment</strong>
          </CCardHeader>
          <CCardBody>
            <CImage align="center" rounded src={commentsWords} width={700} height={370} />
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
            <strong>Sentiment Analysis</strong>
          </CCardHeader>
          <CCardBody>
            <CImage align="center" rounded src={sentiments} />
          </CCardBody>
        </CCard>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Sentiment score Histogram</strong>
          </CCardHeader>
          <CCardBody>
            <CImage align="center" rounded src={Sentimentscore} />
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
                <CImage align="center" rounded src={Group1} />
              </CTabPane>
              <CTabPane role="tabpanel" aria-labelledby="profile-tab" visible={activeKey === 2}>
                <CImage align="center" rounded src={Group2} />
              </CTabPane>
              <CTabPane role="tabpanel" aria-labelledby="contact-tab" visible={activeKey === 3}>
                <CImage align="center" rounded src={Group3} />
              </CTabPane>
            </CTabContent>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default FaceBookNLP
