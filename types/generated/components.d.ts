import type { Schema, Attribute } from '@strapi/strapi';

export interface CollapsibleCounterCollapsibleCounter extends Schema.Component {
  collectionName: 'components_collapsible_counter_collapsible_counters';
  info: {
    displayName: 'collapsibleCounter';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    collapsibleItems: Attribute.Component<
      'collapsible-counter.collapsible-items',
      true
    >;
  };
}

export interface CollapsibleCounterCollapsibleItems extends Schema.Component {
  collectionName: 'components_collapsible_counter_collapsible_items';
  info: {
    displayName: 'collapsibleItems';
    description: '';
  };
  attributes: {
    text: Attribute.String;
    number: Attribute.String;
  };
}

export interface CounterCounterIcons extends Schema.Component {
  collectionName: 'components_counter_counter_icons';
  info: {
    displayName: 'counterIcons';
  };
  attributes: {
    number: Attribute.String;
    description: Attribute.Text;
    Icon: Attribute.Media;
  };
}

export interface CounterCounterItems extends Schema.Component {
  collectionName: 'components_counter_counter_items';
  info: {
    displayName: 'counter-items';
    description: '';
  };
  attributes: {
    number: Attribute.String;
    description: Attribute.Text;
  };
}

export interface CounterCounter extends Schema.Component {
  collectionName: 'components_counter_counters';
  info: {
    displayName: 'Counter';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.Text;
    items: Attribute.Component<'counter.counter-items', true>;
  };
}

export interface CourseAuthorCourseAuthor extends Schema.Component {
  collectionName: 'components_course_author_course_authors';
  info: {
    displayName: 'courseAuthor';
    description: '';
  };
  attributes: {
    title: Attribute.RichText;
    age: Attribute.String;
    image: Attribute.Media;
    features: Attribute.Component<'course-author.features', true>;
    counter: Attribute.Component<'counter.counter-icons', true>;
  };
}

export interface CourseAuthorFeatures extends Schema.Component {
  collectionName: 'components_course_author_features';
  info: {
    displayName: 'features';
  };
  attributes: {
    text: Attribute.Text;
  };
}

export interface CourseConceptConceptItems extends Schema.Component {
  collectionName: 'components_course_concept_concept_items';
  info: {
    displayName: 'conceptItems';
  };
  attributes: {
    text: Attribute.Text;
  };
}

export interface CourseConceptCounterItems extends Schema.Component {
  collectionName: 'components_course_concept_counter_items';
  info: {
    displayName: 'counterItems';
  };
  attributes: {
    icon: Attribute.Media;
    title: Attribute.String;
    description: Attribute.String;
  };
}

export interface CourseConceptCourseConcept extends Schema.Component {
  collectionName: 'components_course_concept_course_concepts';
  info: {
    displayName: 'courseConcept';
    icon: 'file';
    description: '';
  };
  attributes: {
    title: Attribute.RichText;
    subtitle: Attribute.Text;
    description: Attribute.Text;
    conceptItems: Attribute.Component<'course-concept.concept-items', true>;
  };
}

export interface CourseFeaturesCourseFeatures extends Schema.Component {
  collectionName: 'components_course_features_course_features';
  info: {
    displayName: 'course-features';
    icon: 'bulletList';
    description: '';
  };
  attributes: {
    Features: Attribute.Component<'features.features', true>;
    title: Attribute.String;
    subTitle: Attribute.String;
  };
}

export interface CoursePlansCoursePlans extends Schema.Component {
  collectionName: 'components_course_plans_course_plans';
  info: {
    displayName: 'coursePlans';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    button: Attribute.String;
    items: Attribute.Component<'course-plans.plan-items', true>;
  };
}

export interface CoursePlansPlanFeatures extends Schema.Component {
  collectionName: 'components_course_plans_plan_features';
  info: {
    displayName: 'planFeatures';
    description: '';
  };
  attributes: {
    available: Attribute.Boolean;
    text: Attribute.Text;
  };
}

export interface CoursePlansPlanItems extends Schema.Component {
  collectionName: 'components_course_plans_plan_items';
  info: {
    displayName: 'planItem';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    price: Attribute.Integer;
    button: Attribute.String;
  };
}

export interface CourseProgramCourseProgram extends Schema.Component {
  collectionName: 'components_course_program_course_programs';
  info: {
    displayName: 'courseProgram';
    description: '';
  };
  attributes: {
    title: Attribute.RichText;
    subtitle: Attribute.Text;
    programItem: Attribute.Component<'course-program.program-items', true>;
  };
}

export interface CourseProgramProgramItems extends Schema.Component {
  collectionName: 'components_course_program_program_items';
  info: {
    displayName: 'programItems';
    description: '';
  };
  attributes: {
    image: Attribute.Media;
    description: Attribute.RichText;
    title: Attribute.String;
  };
}

export interface CourseResultsCourseResults extends Schema.Component {
  collectionName: 'components_course_results_course_results';
  info: {
    displayName: 'courseResults';
    icon: 'bulletList';
  };
  attributes: {
    title: Attribute.RichText;
    image: Attribute.Media;
    items: Attribute.Component<'features.items', true>;
    button: Attribute.String;
  };
}

export interface CourseStudyAbout extends Schema.Component {
  collectionName: 'components_course_study_abouts';
  info: {
    displayName: 'about';
  };
  attributes: {
    regularTextRow1: Attribute.Text;
    regularTextRow2: Attribute.Text;
    regularTextRow3: Attribute.Text;
    boldTextRow: Attribute.Text;
    portrait: Attribute.Media;
  };
}

export interface CourseStudyCourseStudy extends Schema.Component {
  collectionName: 'components_course_study_course_studies';
  info: {
    displayName: 'courseStudy';
    description: '';
  };
  attributes: {
    title: Attribute.RichText;
    image: Attribute.Media;
    items: Attribute.Component<'items.items', true>;
    subtitle: Attribute.String;
    about: Attribute.Component<'course-study.about'>;
  };
}

export interface FaqFaq extends Schema.Component {
  collectionName: 'components_faq_faqs';
  info: {
    displayName: 'FAQ';
    description: '';
  };
  attributes: {
    questions: Attribute.Component<'faq.questions', true>;
    title: Attribute.String;
    subtitle: Attribute.String;
  };
}

export interface FaqQuestions extends Schema.Component {
  collectionName: 'components_faq_questions';
  info: {
    displayName: 'questions';
  };
  attributes: {
    question: Attribute.Text;
    answer: Attribute.RichText;
  };
}

export interface FeaturesBlocks extends Schema.Component {
  collectionName: 'components_features_blocks';
  info: {
    displayName: 'blocks';
  };
  attributes: {};
}

export interface FeaturesFeatures extends Schema.Component {
  collectionName: 'components_features_features';
  info: {
    displayName: 'features';
    icon: 'layer';
    description: '';
  };
  attributes: {
    title: Attribute.String;
  };
}

export interface FeaturesItems extends Schema.Component {
  collectionName: 'components_features_items';
  info: {
    displayName: 'items';
  };
  attributes: {
    text: Attribute.Text;
  };
}

export interface HeaderNavigationHeaderNavigation extends Schema.Component {
  collectionName: 'components_header_navigation_header_navigations';
  info: {
    displayName: 'headerNavigation';
  };
  attributes: {
    button: Attribute.String;
  };
}

export interface HeroBottomFeatures extends Schema.Component {
  collectionName: 'components_hero_bottom_features';
  info: {
    displayName: 'features';
  };
  attributes: {
    title: Attribute.String;
    text: Attribute.Text;
  };
}

export interface HeroBottomHeroBottom extends Schema.Component {
  collectionName: 'components_hero_bottom_hero_bottoms';
  info: {
    displayName: 'heroBottom';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    features: Attribute.Component<'hero-bottom.features', true>;
  };
}

export interface HeroHero extends Schema.Component {
  collectionName: 'components_hero_heroes';
  info: {
    displayName: 'Hero';
    icon: 'picture';
  };
  attributes: {
    title: Attribute.String;
    subtitle: Attribute.String;
    description: Attribute.Text;
    remark: Attribute.Text;
    buttonText: Attribute.String;
    image: Attribute.Media;
  };
}

export interface ItemsItems extends Schema.Component {
  collectionName: 'components_items_items';
  info: {
    displayName: 'items';
  };
  attributes: {
    text: Attribute.RichText;
  };
}

export interface QuoteAuthorQuote extends Schema.Component {
  collectionName: 'components_quote_author_quotes';
  info: {
    displayName: 'authorQuote';
  };
  attributes: {
    description: Attribute.Text;
    quote: Attribute.Text;
    image: Attribute.Media;
  };
}

export interface ReviewsImages extends Schema.Component {
  collectionName: 'components_reviews_images';
  info: {
    displayName: 'images';
  };
  attributes: {};
}

export interface ReviewsItems extends Schema.Component {
  collectionName: 'components_reviews_items';
  info: {
    displayName: 'items';
  };
  attributes: {
    text: Attribute.String;
    title: Attribute.String;
  };
}

export interface ReviewsReviews extends Schema.Component {
  collectionName: 'components_reviews_reviews';
  info: {
    displayName: 'Reviews';
    description: '';
  };
  attributes: {
    title: Attribute.RichText;
    subtitle: Attribute.String;
    images: Attribute.Media;
  };
}

export interface SertificatesSertificates extends Schema.Component {
  collectionName: 'components_sertificates_sertificates';
  info: {
    displayName: 'Sertificates';
    icon: 'file';
  };
  attributes: {
    sertificates: Attribute.Media;
    title: Attribute.RichText;
  };
}

declare module '@strapi/strapi' {
  export module Shared {
    export interface Components {
      'collapsible-counter.collapsible-counter': CollapsibleCounterCollapsibleCounter;
      'collapsible-counter.collapsible-items': CollapsibleCounterCollapsibleItems;
      'counter.counter-icons': CounterCounterIcons;
      'counter.counter-items': CounterCounterItems;
      'counter.counter': CounterCounter;
      'course-author.course-author': CourseAuthorCourseAuthor;
      'course-author.features': CourseAuthorFeatures;
      'course-concept.concept-items': CourseConceptConceptItems;
      'course-concept.counter-items': CourseConceptCounterItems;
      'course-concept.course-concept': CourseConceptCourseConcept;
      'course-features.course-features': CourseFeaturesCourseFeatures;
      'course-plans.course-plans': CoursePlansCoursePlans;
      'course-plans.plan-features': CoursePlansPlanFeatures;
      'course-plans.plan-items': CoursePlansPlanItems;
      'course-program.course-program': CourseProgramCourseProgram;
      'course-program.program-items': CourseProgramProgramItems;
      'course-results.course-results': CourseResultsCourseResults;
      'course-study.about': CourseStudyAbout;
      'course-study.course-study': CourseStudyCourseStudy;
      'faq.faq': FaqFaq;
      'faq.questions': FaqQuestions;
      'features.blocks': FeaturesBlocks;
      'features.features': FeaturesFeatures;
      'features.items': FeaturesItems;
      'header-navigation.header-navigation': HeaderNavigationHeaderNavigation;
      'hero-bottom.features': HeroBottomFeatures;
      'hero-bottom.hero-bottom': HeroBottomHeroBottom;
      'hero.hero': HeroHero;
      'items.items': ItemsItems;
      'quote.author-quote': QuoteAuthorQuote;
      'reviews.images': ReviewsImages;
      'reviews.items': ReviewsItems;
      'reviews.reviews': ReviewsReviews;
      'sertificates.sertificates': SertificatesSertificates;
    }
  }
}
