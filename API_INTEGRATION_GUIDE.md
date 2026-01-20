# API Integration Guide - Complete Flow

## 📋 Overview

Yeh guide explain karta hai ki admin panel se frontend tak data kaise flow hota hai.

## 🔄 Complete Data Flow

```
Admin Panel (React) 
    ↓
Frontend Service (API Calls)
    ↓
Backend API (Express/Node.js)
    ↓
Database (MongoDB)
    ↓
Backend API (Response)
    ↓
Frontend Service (Data Processing)
    ↓
Admin Panel (Display/Update)
    ↓
Next.js Frontend (SSR)
    ↓
Public Website (Display)
```

---

## 1️⃣ Admin Panel Frontend (React)

### Location: `Admin Panel/frontend/src/views/page-information/PageInformation.js`

### Form Submission Flow:

```javascript
// User form fill karta hai
handleSubmit() {
  // 1. Form data prepare karta hai
  const submitData = {
    pageType: 'ivy_league',
    title: 'Ivy League',
    slug: 'ivy-league',
    status: 'Published',
    sections: [
      {
        type: 'track_record',
        order: 1,
        data: {
          title: 'IVY COACH\'S COLLEGE ADMISSIONS TRACK RECORD',
          description: '...',
          totalOffers: '1,485'
        }
      }
    ]
  }
  
  // 2. API service call karta hai
  pageInformationService.updatePageInformation(pageId, submitData)
}
```

### Key Functions:

1. **`handleSubmit()`** - Form submit handle karta hai
2. **`handleSectionDataChange()`** - Section data update karta hai
3. **`handleAddSection()`** - Naya section add karta hai
4. **`handleRemoveSection()`** - Section delete karta hai

---

## 2️⃣ Frontend Service Layer

### Location: `Admin Panel/frontend/src/services/pageInformationService.js`

### API Service Functions:

```javascript
// Base URL
const API_URL = process.env.REACT_APP_API_URL || 'http://localhost:5000/api'

// Update Page Information
updatePageInformation(id, data) {
  return axios.put(`${API_URL}/page-information/${id}`, data, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  })
}

// Get Page Information
getPageInformation(id) {
  return axios.get(`${API_URL}/page-information/${id}`, {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  })
}

// Create Page Information
createPageInformation(data) {
  return axios.post(`${API_URL}/page-information`, data, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json'
    }
  })
}
```

### Request Format:

```json
{
  "pageType": "ivy_league",
  "title": "Ivy League",
  "slug": "ivy-league",
  "status": "Published",
  "sections": [
    {
      "type": "track_record",
      "order": 1,
      "data": {
        "title": "IVY COACH'S COLLEGE ADMISSIONS TRACK RECORD",
        "description": "...",
        "totalOffers": "1,485",
        "successRate": "98%"
      }
    }
  ],
  "keywords": ["seo", "marketing"],
  "tags": ["blog", "featured"]
}
```

---

## 3️⃣ Backend API Routes

### Location: `Admin Panel/backend/routes/pageInformation.js`

### Route Definitions:

```javascript
// Routes
router.get('/page-information', auth, getPageInformations)        // List all pages
router.get('/page-information/:id', auth, getPageInformation)     // Get single page
router.post('/page-information', auth, createPageInformation)      // Create page
router.put('/page-information/:id', auth, updatePageInformation)  // Update page
router.delete('/page-information/:id', auth, deletePageInformation) // Delete page

// Public routes (for frontend)
router.get('/page-information/public/:slug', getPageInformationBySlug) // Get by slug
router.get('/page-information/images/:slug/:imageType', getImageBySlug)  // Get image
```

### Authentication:

- **Private Routes** (`/api/page-information/*`): JWT token required
- **Public Routes** (`/api/page-information/public/*`): No authentication needed

---

## 4️⃣ Backend Controller

### Location: `Admin Panel/backend/controllers/pageInformationController.js`

### Update Function Flow:

```javascript
exports.updatePageInformation = async (req, res) => {
  // 1. Page ID check
  const pageId = req.params.id
  
  // 2. Request body se data extract
  const { keywords, tags, sections, ...updateData } = req.body
  
  // 3. Sections normalize karta hai
  if (sections !== undefined) {
    updateData.sections = sections.map((section, index) => ({
      type: section.type.trim().toLowerCase(),
      order: section.order || (index + 1),
      data: section.data || {}
    }))
  }
  
  // 4. Keywords/Tags convert karta hai
  updateData.keywords = keywords.split(',').map(k => k.trim())
  updateData.tags = tags.split(',').map(t => t.trim())
  
  // 5. Database mein update karta hai
  const pageInformation = await PageInformation.findByIdAndUpdate(
    pageId,
    updateData,
    { new: true, runValidators: true }
  )
  
  // 6. Response send karta hai
  res.json({
    success: true,
    message: 'Page information updated successfully',
    data: pageInformation
  })
}
```

### Get By Slug Function (Public):

```javascript
exports.getPageInformationBySlug = async (req, res) => {
  const slug = req.params.slug.toLowerCase().trim()
  
  // Development mode: Draft pages bhi allow
  // Production mode: Sirf Published pages
  const isDevelopment = process.env.NODE_ENV !== 'production'
  
  let page
  if (isDevelopment) {
    page = await PageInformation.findOne({ slug: slug })
  } else {
    page = await PageInformation.findOne({ 
      slug: slug,
      status: 'Published'
    })
  }
  
  res.json({ 
    success: true, 
    data: page 
  })
}
```

---

## 5️⃣ Database Model

### Location: `Admin Panel/backend/models/PageInformation.js`

### Schema Structure:

```javascript
const pageInformationSchema = new mongoose.Schema({
  pageType: {
    type: String,
    enum: ['home_page', 'about_page', 'contact_page', 'city_page', 'ivy_league', 'other']
  },
  title: String,
  subTitle: String,
  slug: { type: String, unique: true, lowercase: true },
  status: { type: String, enum: ['Draft', 'Published'], default: 'Draft' },
  
  // Sections Array
  sections: [{
    type: { type: String, required: true, lowercase: true },
    order: { type: Number, default: 0 },
    data: { type: mongoose.Schema.Types.Mixed, default: {} }
  }],
  
  // Images
  heroImage: String,
  heroImagePublicId: String,
  
  // SEO
  keywords: [String],
  tags: [String],
  metaTitle: String,
  metaDescription: String
}, { timestamps: true })
```

### Section Data Structure:

```javascript
{
  type: 'track_record',           // Section type
  order: 1,                       // Display order
  data: {                         // Section content
    title: 'IVY COACH\'S COLLEGE ADMISSIONS TRACK RECORD',
    description: '...',
    totalOffers: '1,485',
    successRate: '98%',
    successDescription: '...',
    note: '...'
  }
}
```

---

## 6️⃣ Next.js Frontend (SSR)

### Location: `Gway frontend/app/ivy-league/page.tsx`

### Data Fetching Flow:

```typescript
// Server Component - SSR
export default async function IvyLeaguePage() {
  // 1. API se data fetch karta hai (Server-side)
  const pageData = await getPageInformationBySlug('ivy-league')
  
  // 2. Section data extract karta hai
  const trackRecordSection = getSectionData(pageData, 'track_record')
  
  // 3. Data render karta hai
  return (
    <div>
      <h1>{trackRecordSection?.title}</h1>
      <p>{trackRecordSection?.description}</p>
    </div>
  )
}
```

### API Function:

### Location: `Gway frontend/lib/api/pageInformation.ts`

```typescript
export async function getPageInformationBySlug(slug: string) {
  const url = `${API_URL}/api/page-information/public/${slug}`
  
  const response = await fetch(url, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
    cache: 'no-store',              // No caching
    next: { revalidate: 0 }         // Always revalidate
  })
  
  const jsonData = await response.json()
  return jsonData.data              // Return page data
}
```

---

## 7️⃣ Complete Example Flow

### Step 1: Admin Panel - Form Fill

```
User admin panel mein jata hai
→ Page edit karta hai
→ Section add karta hai (Track Record)
→ Title, Description, Total Offers fill karta hai
→ Save button click karta hai
```

### Step 2: Frontend Service - API Call

```javascript
// Admin Panel Frontend
handleSubmit() {
  const submitData = {
    pageType: 'ivy_league',
    title: 'Ivy League',
    slug: 'ivy-league',
    status: 'Published',
    sections: [{
      type: 'track_record',
      order: 1,
      data: {
        title: 'IVY COACH\'S COLLEGE ADMISSIONS TRACK RECORD',
        description: 'The percentage...',
        totalOffers: '1,485',
        successRate: '98%'
      }
    }]
  }
  
  // API call
  await pageInformationService.updatePageInformation(pageId, submitData)
}
```

### Step 3: Backend API - Process Request

```javascript
// Backend Controller
exports.updatePageInformation = async (req, res) => {
  // 1. Validate data
  // 2. Normalize sections
  // 3. Update database
  const page = await PageInformation.findByIdAndUpdate(pageId, updateData)
  
  // 4. Return updated data
  res.json({ success: true, data: page })
}
```

### Step 4: Database - Store Data

```javascript
// MongoDB Document
{
  _id: ObjectId("..."),
  pageType: "ivy_league",
  title: "Ivy League",
  slug: "ivy-league",
  status: "Published",
  sections: [{
    type: "track_record",
    order: 1,
    data: {
      title: "IVY COACH'S COLLEGE ADMISSIONS TRACK RECORD",
      description: "The percentage...",
      totalOffers: "1,485",
      successRate: "98%"
    }
  }],
  updatedAt: ISODate("2026-01-19T...")
}
```

### Step 5: Next.js Frontend - Fetch & Render

```typescript
// Next.js Server Component
const pageData = await getPageInformationBySlug('ivy-league')

// Extract section data
const trackRecordSection = getSectionData(pageData, 'track_record')

// Render
<h1>{trackRecordSection?.title}</h1>
<p>{trackRecordSection?.description}</p>
<span>{trackRecordSection?.totalOffers}</span>
```

---

## 8️⃣ Key Points

### Admin Panel:
- ✅ Form validation
- ✅ Section management (add/remove/edit)
- ✅ Image upload (Cloudinary)
- ✅ Real-time preview
- ✅ Error handling

### Backend API:
- ✅ Authentication (JWT)
- ✅ Data validation
- ✅ Section normalization
- ✅ Development/Production mode handling
- ✅ Error handling

### Frontend (Next.js):
- ✅ Server-Side Rendering (SSR)
- ✅ Dynamic data fetching
- ✅ Section type matching (flexible)
- ✅ Fallback defaults
- ✅ Cache control

---

## 9️⃣ Environment Variables

### Admin Panel Backend (`.env`):
```env
NODE_ENV=development
PORT=5000
MONGODB_URI=mongodb://localhost:27017/gateway
JWT_SECRET=your-secret-key
CLOUDINARY_CLOUD_NAME=your-cloud-name
CLOUDINARY_API_KEY=your-api-key
CLOUDINARY_API_SECRET=your-api-secret
```

### Admin Panel Frontend (`.env`):
```env
REACT_APP_API_URL=http://localhost:5000/api
```

### Next.js Frontend (`.env.local`):
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

---

## 🔟 Common Issues & Solutions

### Issue 1: Changes Not Saving
**Solution:**
- Check browser console for errors
- Verify API URL is correct
- Check backend logs
- Verify authentication token

### Issue 2: Sections Not Showing
**Solution:**
- Check section type matches (track_record vs track_record_section)
- Verify section data structure
- Check page status is "Published"
- Clear Next.js cache

### Issue 3: Images Not Uploading
**Solution:**
- Verify Cloudinary credentials
- Check image upload service
- Verify publicId is saved
- Check image URL format

---

## 📝 Summary

1. **Admin Panel** → Form fill → API call
2. **Backend API** → Validate → Process → Database
3. **Database** → Store data
4. **Next.js Frontend** → Fetch data → Render
5. **Public Website** → Display content

Sab kuch real-time hai - admin panel mein change karne se frontend pe immediately reflect hota hai (after page refresh).
