# Ivy League Page Troubleshooting Guide

## 🐛 Common Issues & Solutions

### Issue 1: Page Changes Not Showing on Frontend

**Problem:** Admin panel se page update karne ke baad bhi frontend pe changes nahi dikh rahe.

**Solutions:**

1. **Check Page Status:**
   - Admin panel mein page ka status **"Published"** hona chahiye
   - Agar status "Draft" hai, to frontend pe page nahi dikhega
   - Status dropdown se "Published" select karein

2. **Check Page Slug:**
   - Page ka slug exactly `ivy-league` hona chahiye (lowercase, no spaces)
   - Admin panel mein slug field check karein

3. **Clear Next.js Cache:**
   ```bash
   # Stop the dev server
   # Delete .next folder
   rm -rf .next
   # Or on Windows:
   rmdir /s .next
   
   # Restart dev server
   npm run dev
   ```

4. **Hard Refresh Browser:**
   - `Ctrl + Shift + R` (Windows/Linux)
   - `Cmd + Shift + R` (Mac)
   - Ya browser cache clear karein

5. **Check API Connection:**
   - Backend server running hai ya nahi check karein
   - API URL sahi hai ya nahi check karein (`.env.local` mein `NEXT_PUBLIC_API_URL`)

### Issue 2: Page Delete Nah Ho Raha

**Problem:** Admin panel se page delete karne pe bhi frontend pe page dikh raha hai.

**Solutions:**

1. **Check Page Status:**
   - Page delete karne ke bajaye, status ko "Draft" kar dein
   - Ya page ko completely delete karein database se

2. **Check Cache:**
   - Next.js cache clear karein (`.next` folder delete)
   - Browser cache clear karein

3. **Check API Response:**
   - Browser console mein check karein ki API 404 return kar raha hai ya nahi
   - Network tab mein API call check karein

### Issue 3: Page Data Not Loading

**Problem:** Page load ho raha hai but data nahi dikh raha.

**Solutions:**

1. **Check Browser Console:**
   - Browser console open karein (F12)
   - Errors check karein
   - Debug logs dekh sakte hain (development mode mein)

2. **Check API URL:**
   - `.env.local` file mein `NEXT_PUBLIC_API_URL` check karein
   - Default: `http://localhost:5000/api`
   - Backend server ka port sahi hai ya nahi check karein

3. **Check Network Tab:**
   - Browser DevTools > Network tab
   - API call check karein: `/api/page-information/public/ivy-league`
   - Response status code check karein (200 hona chahiye)

4. **Check Backend Logs:**
   - Backend server console mein errors check karein
   - Database connection sahi hai ya nahi

## 🔍 Debugging Steps

### Step 1: Check Page in Database

Admin panel mein:
1. Page Information section mein jao
2. `ivy-league` slug wala page search karein
3. Page ka status "Published" hai ya nahi check karein
4. Page ke sections check karein

### Step 2: Test API Directly

Browser ya Postman mein API test karein:

```bash
GET http://localhost:5000/api/page-information/public/ivy-league
```

Expected Response:
```json
{
  "success": true,
  "data": {
    "slug": "ivy-league",
    "status": "Published",
    "title": "...",
    "sections": [...]
  }
}
```

### Step 3: Check Frontend Logs

Development mode mein browser console mein yeh logs dikhenge:

```
📡 Fetching page data for slug: ivy-league
🔗 API URL: http://localhost:5000/api/page-information/public/ivy-league
✅ API Response for ivy-league: { success: true, hasData: true, ... }
🔍 Ivy League Page Data: { found: true, status: 'Published', ... }
```

### Step 4: Verify Environment Variables

`.env.local` file check karein:

```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

## ✅ Quick Checklist

- [ ] Page status is "Published" (not "Draft")
- [ ] Page slug is exactly `ivy-league` (lowercase)
- [ ] Backend server is running
- [ ] API URL is correct in `.env.local`
- [ ] Next.js cache cleared (`.next` folder deleted)
- [ ] Browser cache cleared
- [ ] API returns 200 status code
- [ ] No errors in browser console
- [ ] No errors in backend logs

## 🚀 Quick Fix Commands

```bash
# Clear Next.js cache
rm -rf .next

# Restart frontend
npm run dev

# Check if backend is running
curl http://localhost:5000/api/page-information/public/ivy-league
```

## 📝 Admin Panel Setup

Ivy League page create/update karte waqt:

1. **Page Type:** `ivy_league` select karein
2. **Slug:** `ivy-league` (exactly, lowercase)
3. **Status:** `Published` (important!)
4. **Title:** "Ivy League Universities" ya kuch bhi
5. **Sections Add Karein:**
   - `hero_section` - Hero content
   - `stats_section` - Statistics images
   - `universities_section` - Universities list
   - `track_record_section` - Track record data
   - `ivy_coach_daily` - Blog articles
   - `cta_section` - Call to action

## 💡 Tips

1. **Development Mode:**
   - Development mode mein draft pages bhi dikhenge (with warning)
   - Production mein sirf published pages dikhenge

2. **Real-time Updates:**
   - Page ab `force-dynamic` mode mein hai
   - Har request pe fresh data fetch hoga
   - No caching issues

3. **Debug Mode:**
   - Browser console mein detailed logs dikhenge
   - API calls aur responses track kar sakte hain

## 🆘 Still Not Working?

1. Backend logs check karein
2. Database mein page exists hai ya nahi check karein
3. API endpoint manually test karein
4. Frontend console errors check karein
5. Network tab mein API response check karein
