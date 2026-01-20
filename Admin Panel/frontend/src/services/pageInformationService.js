import apiService from './apiService'

export const pageInformationService = {
  // Get all page information (admin)
  getPageInformations: async (params = {}) => {
    const queryString = new URLSearchParams(params).toString()
    return apiService.get(`/page-information${queryString ? `?${queryString}` : ''}`)
  },

  // Get public page by slug (for frontend website)
  getPageInformationBySlug: async (slug) => {
    return apiService.get(`/page-information/public/${slug}`)
  },

  // Get single page information
  getPageInformation: async (id) => {
    return apiService.get(`/page-information/${id}`)
  },

  // Create page information
  createPageInformation: async (pageData) => {
    return apiService.post('/page-information', pageData)
  },

  // Update page information
  updatePageInformation: async (id, pageData) => {
    try {
      const response = await apiService.put(`/page-information/${id}`, pageData)
      // Ensure response has success property
      if (response && typeof response === 'object') {
        // If response doesn't have success, wrap it
        if (!response.hasOwnProperty('success')) {
          return { success: true, data: response }
        }
        return response
      }
      return response
    } catch (error) {
      console.error('Update page information error:', error)
      throw error
    }
  },

  // Delete page information
  deletePageInformation: async (id) => {
    return apiService.delete(`/page-information/${id}`)
  },
}

export default pageInformationService
