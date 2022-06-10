import React from 'react'
import { DocsCallout, DocsExample } from 'src/components'
import daily from 'src/assets/images/dalycomments.jpg'
import monthly from 'src/assets/images/monthlycomments.jpg'
import yearly from 'src/assets/images/yearlycomments.jpg'
import { CImage } from '@coreui/react'

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
import CIcon from '@coreui/icons-react'
const ratedProducts = [
  {
    product: {
      id: 4614,
      name: 'Gold Anniversary Surprise',
      amount: '5.9K',
      value: 59,
      rating: 4.62,
      subcategory: 'anniversary-surprises',
      category: 'Surprise-Gifts',
      color: 'success',
    },
  },
  {
    product: {
      id: 4647,
      name: 'Rhodium Anniversary Surprise',
      amount: '7.9K',
      value: 79,
      rating: 4.57,
      subcategory: 'anniversary-surprises',
      category: 'Surprise-Gifts',
      color: 'info',
    },
  },
  {
    product: {
      id: 4680,
      name: 'Platinum Anniversary Surprise',
      amount: '6.9K',
      value: 69,
      rating: 4.5,
      subcategory: 'anniversary-surprises',
      category: 'Surprise-Gifts',
      color: 'danger',
    },
  },
  {
    product: {
      id: 4721,
      name: 'Helium 3 Anniversary Surprise',
      amount: '8.9k',
      value: 89,
      rating: 4.5,
      subcategory: 'anniversary-surprises',
      category: 'Surprise-Gifts',
      color: 'primary',
    },
  },
]
const topSellers = [
  {
    product: {
      id: 17396,
      name: 'Jar Of Nothing',
      amount: '399',
      value: 3.9,
      rating: 1,
      subcategory: 'friendship-day, gifts-for-friend, gifts-for-him, gifts-for-her',
      category: 'Surprise-Gifts',
      color: 'success',
    },
  },
  {
    product: {
      id: 17370,
      name: 'Magnet Mémoire – Moments in Magnets',
      amount: '740',
      value: 7.4,
      rating: 2,
      subcategory: 'mothers-day-gifts, personalized-gifts',
      category: 'Surprise-Gifts',
      color: 'info',
    },
  },
  {
    product: {
      id: 17507,
      name: 'Photo Film Book',
      amount: '1K',
      value: 10,
      rating: 3,
      subcategory: 'gifts-for-girlfriend, gifts-for-boyfriend',
      category: 'Surprise-Gifts',
      color: 'danger',
    },
  },
  {
    product: {
      id: 17368,
      name: 'You Are My Soymate',
      amount: '500',
      value: 0.5,
      rating: 3,
      subcategory: 'valentines-day, Anniversary gifts',
      category: 'Surprise-Gifts',
      color: 'primary',
    },
  },
]

const MostComments = [
  {
    product: {
      id: 15822,
      name: 'BTS Perform My Love',
      amount: '799',
      value: 7.9,
      ncomments: 120,
      subcategory: 'flower-delivery-in-mumbai',
      category: 'Party-Surprises',
      color: 'success',
    },
  },
  {
    product: {
      id: 15873,
      name: 'BTS Charming Red Roses',
      amount: '399',
      value: 3.9,
      ncomments: 112,
      subcategory: 'flower-delivery-in-pune',
      category: 'Party-Surprises',
      color: 'info',
    },
  },
  {
    product: {
      id: 15873,
      name: 'BTS Dark Chocolate Magic Cake',
      amount: '1.1K',
      value: 11,
      ncomments: 112,
      subcategory: 'online-cake-delivery-in-pune',
      category: 'Party-Surprises',
      color: 'danger',
    },
  },
  {
    product: {
      id: 15894,
      name: 'BTS Mixed Fresh Fruit Cake',
      amount: '1.1k',
      value: 11,
      ncomments: 108,
      subcategory: 'online-cake-delivery-in-chennai',
      category: 'Party-Surprises',
      color: 'primary',
    },
  },
  {
    product: {
      id: 6558,
      name: '	BTS Blueberry Cake',
      amount: '1K',
      value: 10,
      ncomments: 110,
      subcategory: 'online-cake-delivery-in-hyderabad',
      category: 'Party-Surprises',
      color: 'primary',
    },
  },
]

const freqUsers = [
  {
    review: {
      date: '2019-11-27',
      comment_id: 17678,
      name: 'Priyanka',
      product_id: 17396,
      product_name: 'Jar of Nothing',
      rating: 3.41,
      amount: 68,
      color: 'success',
    },
  },
  {
    review: {
      date: '2019-04-17	',
      comment_id: 11077,
      name: 'Jay Kiran',
      product_id: 17396,
      product_name: 'Jar of Nothing',
      rating: 3.58,
      amount: 71,
      color: 'info',
    },
  },
  {
    review: {
      date: '2019-05-18	',
      comment_id: 12035,
      name: 'kaarthik',
      product_id: 17396,
      product_name: 'Jar of Nothing',
      rating: 3.83,
      amount: 76,
      color: 'danger',
    },
  },
  {
    review: {
      date: '2019-05-24',
      comment_id: 12212,
      name: 'Akhila',
      product_id: 17396,
      product_name: 'Jar of Nothing',
      rating: 4.83,
      amount: 96,
      color: 'primary',
    },
  },
  {
    review: {
      date: '2019-07-15	',
      comment_id: 13534,
      name: 'Abhinay',
      product_id: 17396,
      product_name: 'Jar of Nothing',
      rating: 4.5,
      amount: 90,
      color: 'warning',
    },
  },
]
const Products = () => {
  return (
    <CRow>
      <CCol xs={12}>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Highest Rated Products</strong> <small>Top 5</small>
          </CCardHeader>
          <CCardBody>
            <CTable align="middle" className="mb-0 border" hover responsive>
              <CTableHead color="light">
                <CTableRow>
                  <CTableHeaderCell>Product Id</CTableHeaderCell>
                  <CTableHeaderCell className="text-center">Product Name</CTableHeaderCell>
                  <CTableHeaderCell className="text-center">Product Price(₹)</CTableHeaderCell>
                  <CTableHeaderCell>Category</CTableHeaderCell>
                  <CTableHeaderCell>Sub-Category</CTableHeaderCell>
                  <CTableHeaderCell>Product Rating(out of 5)</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {ratedProducts.map((item, index) => (
                  <CTableRow v-for="item in tableItems" key={index}>
                    <CTableDataCell>
                      <div>{item.product.id}</div>
                    </CTableDataCell>
                    <CTableDataCell className="text-center">
                      <strong>{item.product.name}</strong>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div className="clearfix">
                        <div className="float-start">
                          <strong>{item.product.amount}</strong>
                        </div>
                      </div>
                      <CProgress thin color={item.product.color} value={item.product.value} />
                    </CTableDataCell>
                    <CTableDataCell className="text-center">{item.product.category}</CTableDataCell>
                    <CTableDataCell>
                      <div className="small text-medium-emphasis"> {item.product.subcategory} </div>
                    </CTableDataCell>
                    <CTableDataCell>{item.product.rating}</CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Most Commented products</strong> <small>Top 5</small>
          </CCardHeader>
          <CCardBody>
            <CTable align="middle" className="mb-0 border" hover responsive>
              <CTableHead color="light">
                <CTableRow>
                  <CTableHeaderCell>Product Id</CTableHeaderCell>
                  <CTableHeaderCell className="text-center">Product Name</CTableHeaderCell>
                  <CTableHeaderCell className="text-center">Product Price(₹)</CTableHeaderCell>
                  <CTableHeaderCell>Category</CTableHeaderCell>
                  <CTableHeaderCell>Sub-Category</CTableHeaderCell>
                  <CTableHeaderCell>Number of comments</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {MostComments.map((item, index) => (
                  <CTableRow v-for="item in tableItems" key={index}>
                    <CTableDataCell>
                      <div>{item.product.id}</div>
                    </CTableDataCell>
                    <CTableDataCell className="text-center">
                      <strong>{item.product.name}</strong>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div className="clearfix">
                        <div className="float-start">
                          <strong>{item.product.amount}</strong>
                        </div>
                      </div>
                      <CProgress thin color={item.product.color} value={item.product.value} />
                    </CTableDataCell>
                    <CTableDataCell className="text-center">{item.product.category}</CTableDataCell>
                    <CTableDataCell>
                      <div className="small text-medium-emphasis"> {item.product.subcategory} </div>
                    </CTableDataCell>
                    <CTableDataCell>{item.product.ncomments}</CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Best Seller Products</strong> <small>Top 5</small>
          </CCardHeader>
          <CCardBody>
            <CTable align="middle" className="mb-0 border" hover responsive>
              <CTableHead color="light">
                <CTableRow>
                  <CTableHeaderCell>Product Id</CTableHeaderCell>
                  <CTableHeaderCell className="text-center">Product Name</CTableHeaderCell>
                  <CTableHeaderCell className="text-center">Product Price(₹)</CTableHeaderCell>
                  <CTableHeaderCell>Category</CTableHeaderCell>
                  <CTableHeaderCell>Sub-Category</CTableHeaderCell>
                  <CTableHeaderCell>Rank</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {topSellers.map((item, index) => (
                  <CTableRow v-for="item in tableItems" key={index}>
                    <CTableDataCell>
                      <div>{item.product.id}</div>
                    </CTableDataCell>
                    <CTableDataCell className="text-center">
                      <strong>{item.product.name}</strong>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div className="clearfix">
                        <div className="float-start">
                          <strong>{item.product.amount}</strong>
                        </div>
                      </div>
                      <CProgress thin color={item.product.color} value={item.product.value} />
                    </CTableDataCell>
                    <CTableDataCell className="text-center">{item.product.category}</CTableDataCell>
                    <CTableDataCell>
                      <div className="small text-medium-emphasis"> {item.product.subcategory} </div>
                    </CTableDataCell>
                    <CTableDataCell># {item.product.rating}</CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Most frequent Users</strong> <small>Top 5</small>
          </CCardHeader>
          <CCardBody>
            <CTable align="middle" className="mb-0 border" hover responsive>
              <CTableHead color="light">
                <CTableRow>
                  <CTableHeaderCell>Review Date</CTableHeaderCell>
                  <CTableHeaderCell className="text-center">Reviewer Id</CTableHeaderCell>
                  <CTableHeaderCell className="text-center">Reviewer Name</CTableHeaderCell>
                  <CTableHeaderCell>Product Id</CTableHeaderCell>
                  <CTableHeaderCell>Product Name</CTableHeaderCell>
                  <CTableHeaderCell> Average Rating</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {freqUsers.map((item, index) => (
                  <CTableRow v-for="item in tableItems" key={index}>
                    <CTableDataCell>
                      <div>{item.review.date}</div>
                    </CTableDataCell>
                    <CTableDataCell className="text-center">
                      <strong>{item.review.comment_id}</strong>
                    </CTableDataCell>
                    <CTableDataCell>
                      <div className="clearfix">
                        <div className="float-start">
                          <strong>{item.review.name}</strong>
                        </div>
                      </div>
                      <CProgress thin color={item.review.color} value={item.review.amount} />
                    </CTableDataCell>
                    <CTableDataCell className="text-center">
                      {item.review.product_id}
                    </CTableDataCell>
                    <CTableDataCell>
                      <div className="small text-medium-emphasis"> {item.review.product_name} </div>
                    </CTableDataCell>
                    <CTableDataCell>{item.review.rating}</CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
        <CCard className="mb-4">
          <CCardHeader>
            <strong>Comments trends over a period</strong>
          </CCardHeader>
          <CCardBody>
            <table className="table">
              <tbody>
                <tr>
                  <td>
                    <span className="daily">Daily Comments Count</span>
                    <CImage align="center" rounded src={daily} width={700} height={370} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="monthly-1">Monthly Comments Count</span>
                    <CImage align="center" rounded src={monthly} width={700} height={370} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <span className="quarterly">Yearly Comments Count</span>
                    <CImage align="center" rounded src={yearly} width={700} height={370} />
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

export default Products
