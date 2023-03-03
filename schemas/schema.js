// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

import page from "../schemas/documents/page";
import pageCategory from "../schemas/documents/pageCategory";
import nav from "../schemas/documents/nav";
import inPageMenus from "../schemas/documents/sidebar";
import testimonialsStars from "../schemas/documents/testimonialsStars";
import testimonialsImage from "../schemas/documents/testimonialsImage";
import blog from "../schemas/documents/blog";
import home from "../schemas/documents/home";
import location from '../schemas/documents/locations'
import collections from '../schemas/documents/collections'

import blocks from "../schemas/modules/richText";
import contentZone from "../schemas/modules/contentZone";

import richText from "../schemas/content/richText";
import summary from "../schemas/content/summary";
import serviceGrid from "../schemas/content/serviceGrid";
import imageRich from "../schemas/content/imageRich";
import starTestimonialsSection from "../schemas/content/starTestimonials";
import imageTestimonialsSection from "../schemas/content/imageTestimonialsSection";
import blogsSection from "../schemas/content/blogsSection";
import sliderHero from "../schemas/content/sliderHero";
import testimonialsSlider from "../schemas/content/sliderTestimonials";
import videoBanner from "../schemas/content/videoBanner";
import logos from "../schemas/content/logos";
import BA from "../schemas/content/BA.js";
import cta from "../schemas/content/cta";
import insurance from "../schemas/content/insurance";
import ctaAlt from "../schemas/content/cta2";
import socials from "../schemas/content/socials";
import form from '../schemas/content/form'
import locations from '../schemas/content/locations'

import topLink from "../schemas/objects/topLink";
import subLink from "../schemas/objects/subLink";
import youtube from "../schemas/modules/youtube";
import seo from "./documents/seo";

import breadcrumb from '../schemas/documents/breadcrumbs'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: "default",
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */

    blocks,
    richText,
    contentZone,
    page,
    summary,
    pageCategory,
    serviceGrid,
    imageRich,
    topLink,
    subLink,
    nav,
    inPageMenus,
    testimonialsStars,
    starTestimonialsSection,
    testimonialsImage,
    imageTestimonialsSection,
    blogsSection,
    blog,
    home,
    sliderHero,
    testimonialsSlider,
    videoBanner,
    youtube,
    logos,
    BA,
    cta,
    insurance,
    ctaAlt,
    socials,
    location,
    form,
    locations,
    collections,
    breadcrumb,
    seo
  ]),
});
