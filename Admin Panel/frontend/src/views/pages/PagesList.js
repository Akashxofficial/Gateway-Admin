import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CButton,
  CBadge,
  CInputGroup,
  CInputGroupText,
  CFormInput,
  CFormSelect,
  CAlert,
  CSpinner,
  CPagination,
  CPaginationItem,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import {
  cilPencil,
  cilTrash,
  cilMagnifyingGlass,
  cilPlus,
  cilReload,
} from '@coreui/icons'
import pageInformationService from '../../services/pageInformationService'

const PagesList = () => {
  const navigate = useNavigate()
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState('All')
  const [pageTypeFilter, setPageTypeFilter] = useState('')
  const [pages, setPages] = useState([])
  const [filteredPages, setFilteredPages] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [itemsPerPage, setItemsPerPage] = useState(10)
  const [totalPages, setTotalPages] = useState(1)
  const [totalItems, setTotalItems] = useState(0)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const [deletingId, setDeletingId] = useState(null)
  const [deleting, setDeleting] = useState(false)

  // Fetch pages
  const fetchPages = async () => {
    setLoading(true)
    setError('')
    try {
      const response = await pageInformationService.getPageInformations({
        page: currentPage,
        limit: itemsPerPage,
      })
      if (response.success) {
        setPages(response.data || [])
        setFilteredPages(response.data || [])
        // Set pagination info if available
        if (response.pagination) {
          setTotalPages(response.pagination.totalPages || 1)
          setTotalItems(response.pagination.totalItems || 0)
        }
      }
    } catch (err) {
      setError(err.message || 'Failed to fetch pages')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchPages()
  }, [currentPage, itemsPerPage])

  // Filter pages based on search and filters
  useEffect(() => {
    let filtered = [...pages]

    // Search filter
    if (searchTerm) {
      filtered = filtered.filter(
        (page) =>
          page.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
          page.slug?.toLowerCase().includes(searchTerm.toLowerCase())
      )
    }

    // Status filter
    if (statusFilter !== 'All') {
      filtered = filtered.filter((page) => page.status === statusFilter)
    }

    // Page type filter
    if (pageTypeFilter) {
      filtered = filtered.filter((page) => page.pageType === pageTypeFilter)
    }

    setFilteredPages(filtered)
  }, [searchTerm, statusFilter, pageTypeFilter, pages])

  // Handle edit - navigate to edit page
  const handleEdit = (pageId) => {
    navigate(`/website/pages/edit?id=${pageId}`)
  }

  // Handle delete
  const handleDelete = async (e) => {
    if (e) {
      e.preventDefault()
      e.stopPropagation()
    }
    
    if (!deletingId || deleting) return

    setDeleting(true)
    try {
      const response = await pageInformationService.deletePageInformation(deletingId)
      if (response.success) {
        setShowDeleteModal(false)
        setDeletingId(null)
        setError('') // Clear any previous errors
        fetchPages() // Refresh list
      } else {
        setError(response.message || 'Failed to delete page')
      }
    } catch (err) {
      setError(err.message || 'Failed to delete page')
    } finally {
      setDeleting(false)
    }
  }

  // Handle add new page
  const handleAddNew = () => {
    navigate('/website/pages/add')
  }

  // Get status badge color
  const getStatusBadge = (status) => {
    if (status === 'Published') {
      return 'success'
    }
    return 'secondary'
  }

  // Get page type display name
  const getPageTypeDisplay = (pageType) => {
    const types = {
      home_page: 'Home Page',
      about_page: 'About Page',
      contact_page: 'Contact Page',
      city_page: 'City Page',
      country_page: 'Country Page',
      other: 'Other',
    }
    return types[pageType] || pageType
  }

  // Use API pagination - pages are already paginated from backend
  const displayPages = filteredPages
  const startIndex = (currentPage - 1) * itemsPerPage + 1
  const endIndex = Math.min(currentPage * itemsPerPage, totalItems || filteredPages.length)

  return (
    <CRow>
      <CCol xs={12}>
        <CCard>
          <CCardHeader className="d-flex justify-content-between align-items-center">
            <div>
              <h5 className="mb-0">
                <strong>Manage Pages</strong>
              </h5>
              <small className="text-body-secondary">
                View and manage all your website pages
              </small>
            </div>
            <CButton color="primary" onClick={handleAddNew}>
              <CIcon icon={cilPlus} className="me-2" />
              Add New Page
            </CButton>
          </CCardHeader>
          <CCardBody>
            {error && (
              <CAlert color="danger" dismissible onClose={() => setError('')}>
                {error}
              </CAlert>
            )}

            {/* Search and Filters */}
            <CRow className="mb-3">
              <CCol md={4}>
                <CInputGroup>
                  <CInputGroupText>
                    <CIcon icon={cilMagnifyingGlass} />
                  </CInputGroupText>
                  <CFormInput
                    type="text"
                    placeholder="Search by title, slug..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                  />
                </CInputGroup>
              </CCol>
              <CCol md={3}>
                <CFormSelect
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                >
                  <option value="All">All Status</option>
                  <option value="Published">Published</option>
                  <option value="Draft">Draft</option>
                </CFormSelect>
              </CCol>
              <CCol md={3}>
                <CFormSelect
                  value={pageTypeFilter}
                  onChange={(e) => setPageTypeFilter(e.target.value)}
                >
                  <option value="">All Page Types</option>
                  <option value="home_page">Home Page</option>
                  <option value="about_page">About Page</option>
                  <option value="contact_page">Contact Page</option>
                  <option value="city_page">City Page</option>
                  <option value="country_page">Country Page</option>
                  <option value="other">Other</option>
                </CFormSelect>
              </CCol>
              <CCol md={2}>
                <div className="d-flex align-items-center">
                  <CFormSelect
                    value={itemsPerPage}
                    onChange={(e) => {
                      setItemsPerPage(Number(e.target.value))
                      setCurrentPage(1)
                    }}
                    style={{ width: 'auto' }}
                  >
                    <option value={10}>10</option>
                    <option value={25}>25</option>
                    <option value={50}>50</option>
                    <option value={100}>100</option>
                  </CFormSelect>
                  <span className="ms-2 text-muted">Per page</span>
                </div>
              </CCol>
            </CRow>

            {/* Table */}
            {loading ? (
              <div className="text-center py-5">
                <CSpinner />
                <p className="mt-2">Loading pages...</p>
              </div>
            ) : (
              <>
                <CTable hover responsive>
                  <CTableHead>
                    <CTableRow>
                      <CTableHeaderCell>TITLE</CTableHeaderCell>
                      <CTableHeaderCell>TYPE</CTableHeaderCell>
                      <CTableHeaderCell>SLUG</CTableHeaderCell>
                      <CTableHeaderCell>STATUS</CTableHeaderCell>
                      <CTableHeaderCell>FEATURED</CTableHeaderCell>
                      <CTableHeaderCell>ACTIONS</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {displayPages.length === 0 ? (
                      <CTableRow>
                        <CTableDataCell colSpan={6} className="text-center py-5">
                          <p className="text-muted">No pages found</p>
                          <CButton color="primary" onClick={handleAddNew}>
                            <CIcon icon={cilPlus} className="me-2" />
                            Add Your First Page
                          </CButton>
                        </CTableDataCell>
                      </CTableRow>
                    ) : (
                      displayPages.map((page) => (
                        <CTableRow key={page._id}>
                          <CTableDataCell>
                            <strong>{page.title || 'Untitled'}</strong>
                          </CTableDataCell>
                          <CTableDataCell>
                            <CBadge color="info">
                              {getPageTypeDisplay(page.pageType)}
                            </CBadge>
                          </CTableDataCell>
                          <CTableDataCell>
                            <code>/{page.slug}</code>
                          </CTableDataCell>
                          <CTableDataCell>
                            <CBadge color={getStatusBadge(page.status)}>
                              {page.status || 'Draft'}
                            </CBadge>
                          </CTableDataCell>
                          <CTableDataCell>
                            <CBadge color={page.isFeatured === 'Yes' ? 'warning' : 'secondary'}>
                              {page.isFeatured || 'No'}
                            </CBadge>
                          </CTableDataCell>
                          <CTableDataCell>
                            <CButton
                              color="primary"
                              variant="ghost"
                              size="sm"
                              className="me-2"
                              onClick={() => handleEdit(page._id)}
                            >
                              <CIcon icon={cilPencil} />
                            </CButton>
                            <CButton
                              color="danger"
                              variant="ghost"
                              size="sm"
                              onClick={(e) => {
                                e.preventDefault()
                                e.stopPropagation()
                                setDeletingId(page._id)
                                setShowDeleteModal(true)
                              }}
                            >
                              <CIcon icon={cilTrash} />
                            </CButton>
                          </CTableDataCell>
                        </CTableRow>
                      ))
                    )}
                  </CTableBody>
                </CTable>

                {/* Pagination */}
                {(totalPages > 1 || totalItems > itemsPerPage) && (
                  <div className="d-flex justify-content-between align-items-center mt-3">
                    <div>
                      <small className="text-muted">
                        Showing {startIndex} to {endIndex} of {totalItems || filteredPages.length} pages
                      </small>
                    </div>
                    <CPagination>
                      <CPaginationItem
                        disabled={currentPage === 1}
                        onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
                        style={{ cursor: currentPage === 1 ? 'not-allowed' : 'pointer' }}
                      >
                        Previous
                      </CPaginationItem>
                      {[...Array(totalPages || 1)].map((_, i) => {
                        const pageNum = i + 1
                        // Show first page, last page, current page, and pages around current
                        if (
                          pageNum === 1 ||
                          pageNum === totalPages ||
                          (pageNum >= currentPage - 1 && pageNum <= currentPage + 1)
                        ) {
                          return (
                            <CPaginationItem
                              key={pageNum}
                              active={currentPage === pageNum}
                              onClick={() => setCurrentPage(pageNum)}
                              style={{ cursor: 'pointer' }}
                            >
                              {pageNum}
                            </CPaginationItem>
                          )
                        } else if (pageNum === currentPage - 2 || pageNum === currentPage + 2) {
                          return <span key={pageNum}>...</span>
                        }
                        return null
                      })}
                      <CPaginationItem
                        disabled={currentPage === totalPages}
                        onClick={() => currentPage < totalPages && setCurrentPage(currentPage + 1)}
                        style={{ cursor: currentPage === totalPages ? 'not-allowed' : 'pointer' }}
                      >
                        Next
                      </CPaginationItem>
                    </CPagination>
                  </div>
                )}
              </>
            )}
          </CCardBody>
        </CCard>
      </CCol>

      {/* Delete Confirmation Modal */}
      {showDeleteModal && (
        <div
          className="modal fade show"
          style={{ 
            display: 'block',
            zIndex: 1050,
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%'
          }}
          tabIndex="-1"
          onClick={(e) => {
            // Only close if clicking the backdrop (not the modal content)
            if (e.target === e.currentTarget) {
              setShowDeleteModal(false)
              setDeletingId(null)
            }
          }}
        >
          <div 
            className="modal-dialog modal-dialog-centered"
            onClick={(e) => e.stopPropagation()}
            style={{ zIndex: 1051 }}
          >
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <h5 className="modal-title">Confirm Delete</h5>
                <button
                  type="button"
                  className="btn-close"
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    setShowDeleteModal(false)
                    setDeletingId(null)
                  }}
                  disabled={deleting}
                ></button>
              </div>
              <div className="modal-body">
                Are you sure you want to delete this page? This action cannot be undone.
              </div>
              <div className="modal-footer">
                <CButton 
                  color="secondary" 
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    setShowDeleteModal(false)
                    setDeletingId(null)
                  }}
                  disabled={deleting}
                >
                  Cancel
                </CButton>
                <CButton 
                  color="danger" 
                  onClick={handleDelete}
                  disabled={deleting}
                >
                  {deleting ? (
                    <>
                      <CSpinner size="sm" className="me-2" />
                      Deleting...
                    </>
                  ) : (
                    'Delete'
                  )}
                </CButton>
              </div>
            </div>
          </div>
          <div 
            className="modal-backdrop fade show"
            style={{ zIndex: 1049 }}
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              if (!deleting) {
                setShowDeleteModal(false)
                setDeletingId(null)
              }
            }}
          ></div>
        </div>
      )}
    </CRow>
  )
}

export default PagesList
