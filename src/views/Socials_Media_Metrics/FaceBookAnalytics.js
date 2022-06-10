import React from 'react'
import { CImage } from '@coreui/react'
import { CCard, CCardBody, CCardHeader, CCol, CRow } from '@coreui/react'
import total_likes from 'src/assets/images/total_likes5.png'
import likes from 'src/assets/images/likesO_FB5.png'
import likes_per_post from 'src/assets/images/likesperpost5.png'
import likesvscomments from 'src/assets/images/likevscommnets5.png'
import monthly_likes from 'src/assets/images/Monthlylikes_fb5.png'
import weekday from 'src/assets/images/weekday5.jpg'
import postweek from 'src/assets/images/postweek5.jpg'
import posthour from 'src/assets/images/posthour5.png'
import likesboxplot from 'src/assets/images/Monthlylikes_Box5.png'
import interPost from 'src/assets/images/interractPoster5.png'
import interPost1 from 'src/assets/images/interractPOst.png'
import interCat from 'src/assets/images/interractCategory5.png'
import impression from 'src/assets/images/impress_FB5.png'
import ER_monthly from 'src/assets/images/ER_monthly5.png'
import engagementrate from 'src/assets/images/engage_FB5.png'
import vienndiag from 'src/assets/images/heatmapFB.png'
import shares from 'src/assets/images/shares_FB5.png'
import postreach from 'src/assets/images/reach_FB5.png'
import heatmap from 'src/assets/images/heatmap5.jpg'
import comments from 'src/assets/images/comments_FB5.png'

const FaceBookAnalytics = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Basic metrics</strong>
          </CCardHeader>
          <CCardBody>
            <table className="table">
              <tbody>
                <tr>
                  <td>
                    <span className="monthly-1">Distribution of Total Likes</span>
                    <CImage align="center" rounded src={total_likes} width={700} height={370} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="monthly-1">Likes recieved per hour</span>
                    <CImage align="center" rounded src={likes} width={700} height={370} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="monthly-1">Comments recieved per hour</span>
                    <CImage align="center" rounded src={comments} width={700} height={370} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="monthly-1">Shares per hour</span>
                    <CImage align="center" rounded src={shares} width={700} height={370} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="monthly-1">Boxplot of monthly likes</span>
                    <CImage align="center" rounded src={likesboxplot} width={700} height={370} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="monthly-1">Likes per post</span>
                    <CImage align="center" rounded src={likes_per_post} width={700} height={370} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="monthly-1">Likes vs comments vs shares</span>
                    <CImage align="center" rounded src={likesvscomments} width={700} height={370} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="monthly-1">Page Likes increase per month</span>
                    <CImage align="center" rounded src={monthly_likes} width={700} height={370} />
                  </td>
                </tr>
              </tbody>
            </table>
          </CCardBody>
        </CCard>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Post analytics</strong>
          </CCardHeader>
          <CCardBody>
            <table className="table">
              <tbody>
                <tr>
                  <td>
                    <span className="monthly-1">Day of the week for posting</span>
                    <CImage align="center" rounded src={weekday} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="monthly-1">Weekday of post</span>
                    <CImage align="center" rounded src={postweek} width={700} height={370} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="monthly-1">Frequency of post by hour</span>
                    <CImage align="center" rounded src={posthour} width={700} height={370} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="monthly-1">Total interactions by post types</span>
                    <CImage align="center" rounded src={interPost1} width={700} height={370} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="monthly-1">Total per post sorted by post type</span>
                    <CImage align="center" rounded src={interPost} width={700} height={370} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="monthly-1">Category-wise interactions (Paid vs Organic)</span>
                    <CImage align="center" rounded src={interCat} width={700} height={370} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="monthly-1">Lifetime Post reach on hourly basis</span>
                    <CImage align="center" rounded src={postreach} width={700} height={370} />
                  </td>
                </tr>
              </tbody>
            </table>
          </CCardBody>
        </CCard>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Advanced metrics</strong>
          </CCardHeader>
          <CCardBody>
            <table className="table">
              <tbody>
                <tr>
                  <td>
                    <span className="monthly-1">Lifetime Impression of posts</span>
                    <CImage align="center" rounded src={impression} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="monthly-1">Lifetime Engaged Users</span>
                    <CImage align="center" rounded src={engagementrate} width={700} height={370} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="monthly-1">Monthly engagement rate</span>
                    <CImage align="center" rounded src={ER_monthly} width={700} height={370} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="monthly-1">Vienn diagram of like vs not liked impresions</span>
                    <CImage align="center" rounded src={vienndiag} width={700} height={370} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="monthly-1">Heatmap of all metrics</span>
                    <CImage align="center" rounded src={heatmap} />
                  </td>
                </tr>
              </tbody>
            </table>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default FaceBookAnalytics
