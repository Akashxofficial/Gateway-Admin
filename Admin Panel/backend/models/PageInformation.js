const mongoose = require('mongoose')

const pageInformationSchema = new mongoose.Schema(
  {
    pageType: {
      type: String,
      required: [true, 'Please provide page type'],
      enum: [
        'home_page', 
        'about_page', 
        'contact_page', 
        'city_page', 
        'ivy_league',
        'usa_universities',
        'uk_universities',
        'germany_public_universities',
        'italy_france',
        'canada_australia',
        'other'
      ],
      default: 'home_page',
    },
    title: {
      type: String,
      required: [true, 'Please provide title'],
      trim: true,
    },
    subTitle: {
      type: String,
      trim: true,
    },
    slug: {
      type: String,
      required: [true, 'Please provide slug'],
      unique: true,
      trim: true,
      lowercase: true,
    },
    metaTitle: {
      type: String,
      trim: true,
    },
    metaDescription: {
      type: String,
      trim: true,
    },
    status: {
      type: String,
      enum: ['Draft', 'Published'],
      default: 'Draft',
    },
    isFeatured: {
      type: String,
      enum: ['Yes', 'No'],
      default: 'No',
    },
    // Home page specific fields
    heroImage: {
      type: String,
      default: '',
    },
    heroImagePublicId: {
      type: String,
      default: '',
    },
    roadmapImage: {
      type: String,
      default: '',
    },
    roadmapImagePublicId: {
      type: String,
      default: '',
    },
    mobileRoadmapImage: {
      type: String,
      default: '',
    },
    mobileRoadmapImagePublicId: {
      type: String,
      default: '',
    },
    // Additional background images for different sections
    universityCapBg: {
      type: String,
      default: '',
    },
    universityCapBgPublicId: {
      type: String,
      default: '',
    },
    universitySliderBg: {
      type: String,
      default: '',
    },
    universitySliderBgPublicId: {
      type: String,
      default: '',
    },
    immigrationServicesBg: {
      type: String,
      default: '',
    },
    immigrationServicesBgPublicId: {
      type: String,
      default: '',
    },
    // Sections array - Flexible: any section type add kar sakte hain
    // Enum removed for flexibility -any section type use kar sakte hain
    // Examples: 'hero_section', 'form_section', 'why_choose_us', 'slider_card', 
    //          'testimonials', 'faq', 'pricing', 'gallery', etc.
    sections: [
      {
        type: {
          type: String,
          required: true,
          trim: true,
          lowercase: true,
          // Enum removed -  section type allowed 
          // Frontend/Controller validation if need
        },
        data: {
          type: mongoose.Schema.Types.Mixed,
          default: {},
        },
        order: {
          type: Number,
          default: 0,
        },
      },
    ],
    // SEO fields
    keywords: {
      type: [String],
      default: [],
    },
    tags: {
      type: [String],
      default: [],
    },
    canonicalUrl: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
)

module.exports = mongoose.model('PageInformation', pageInformationSchema)
