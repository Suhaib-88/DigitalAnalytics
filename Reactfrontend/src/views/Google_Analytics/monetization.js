import React from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCarousel,
  CCarouselCaption,
  CCarouselItem,
  CCol,
  CRow,
} from '@coreui/react'
import { DocsCallout, DocsExample } from 'src/components'
import Dailyrevenue from 'src/assets/images/revDaily.jpg'
import Quarterlyrevenue from 'src/assets/images/revQuarter.jpg'
import Monthlyrevenue from 'src/assets/images/revMonth.jpg'

const Monetization = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Monetization</strong>
          </CCardHeader>
          <CCardBody>
            <p className="text-medium-emphasis small">
              This page contains revenue generated during different time periods
            </p>
            <DocsExample href="components/carousel/#dark-variant">
              <CCarousel controls indicators dark>
                <CCarouselItem>
                  <img className="d-block w-100" src={Monthlyrevenue} alt="slide 1" />
                </CCarouselItem>
                <CCarouselItem>
                  <img className="d-block w-100" src={Quarterlyrevenue} alt="slide 2" />
                </CCarouselItem>
                <CCarouselItem>
                  <img className="d-block w-100" src={Dailyrevenue} alt="slide 3" />
                </CCarouselItem>
              </CCarousel>
            </DocsExample>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default Monetization
