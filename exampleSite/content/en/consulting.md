---
title: "Our Services"
description: "Professional consulting and development services"

blocks:
  - block: hero-breadcrumb
    title: "Our Services"
    subtitle: "Expert solutions for your business"
    background: "images/village-sunset.jpg"
    alt: "Services background"
    breadcrumb: "Services"
    breadcrumb_url: "/"


  - block: text-image-bg
    id: intro
    title: "Professional Consulting"
    text: |
      We provide comprehensive consulting services to help your business thrive. From strategic planning to hands-on implementation, our team delivers results.

      {{< quote >}}Our consultants bring years of experience across multiple industries and disciplines.{{< /quote >}}
    image:
      src: "images/golden-gate.jpg"
      alt: "Professional consulting"

  - block: text-only
    id: process-description
    title: "Process Description"
    text: |
      Our strategy consultation begins with a discovery phase, where we assess your organization's current position, goals, and challenges through stakeholder interviews and data analysis. 
      
      Next, we conduct a market and competitive review to identify opportunities and risks. Based on these insights, we co-create a tailored strategic roadmap, outlining clear priorities, initiatives, and measurable milestones. 
      
      {{< quote >}}We then facilitate alignment sessions with key decision-makers to ensure buy-in and feasibility.{{< /quote >}}
      
      Finally, we support implementation planning, defining ownership, timelines, and success metrics. Throughout the process, we maintain close collaboration, ensuring the strategy remains practical, adaptable, and grounded in your organization's unique context and objectives.

  - block: process-timeline
    id: process
    title: "Our Process"
    steps:
      - icon: "bi-chat-dots"
        heading: "Discovery"
        text: "We begin with a thorough assessment of your current situation, requirements, and goals."
        right: false
      - icon: "bi-file-earmark-text"
        heading: "Planning"
        text: "Based on our assessment, we develop a detailed proposal with clear milestones and deliverables."
        right: true
      - icon: "bi-gear"
        heading: "Implementation"
        text: "Our team executes the plan using proven methodologies and best practices."
        right: false
      - icon: "bi-mortarboard"
        heading: "Training"
        text: "We ensure your team has the knowledge and skills to maintain and build upon our work."
        right: true
      - icon: "bi-rocket-takeoff"
        heading: "Launch"
        text: "Coordinated deployment with thorough testing and quality assurance."
        right: false
      - icon: "bi-shield-check"
        heading: "Support"
        text: "Ongoing support and maintenance to ensure continued success."
        right: true

  - block: features-grid
    id: expertise
    title: "Areas of Expertise"
    subtitle: "We cover a wide range of business needs"
    items:
      - icon: "bi-graph-up-arrow"
        title: "Strategy"
        details: "Business strategy, market analysis, and growth planning"
        url: "/#business-strategy/"
      - icon: "bi-display"
        title: "Technology"
        details: "Digital transformation and technology solutions"
        url: "/#business-technology/"
      - icon: "bi-people"
        title: "Operations"
        details: "Process optimization and operational efficiency"
      - icon: "bi-megaphone"
        title: "Marketing"
        details: "Brand strategy, digital marketing, and communications"
      - icon: "bi-bar-chart"
        title: "Analytics"
        details: "Data analysis, reporting, and business intelligence"
      - icon: "bi-gear"
        title: "Automation"
        details: "Workflow automation and system integration"
      - icon: "bi-shield"
        title: "Security"
        details: "Risk assessment and security best practices"
      - icon: "bi-clipboard-check"
        title: "Training"
        details: "Custom training programs and workshops"

  - block: faq
    id: faq
    title: "Frequently Asked Questions"
    items:
      - q: "What is the typical project timeline?"
        a: "Project timelines vary based on scope and complexity. We work with you to establish realistic milestones and keep you informed throughout the process."
      - q: "Do you offer ongoing support?"
        a: "Yes, we offer various support packages to ensure your continued success after project completion."
      - q: "How do you handle project communication?"
        a: "We maintain regular communication through your preferred channels and provide detailed progress reports at agreed intervals."
      - q: "What industries do you serve?"
        a: "We work with clients across various industries including technology, healthcare, finance, retail, and professional services."
      - q: "Can you work with our existing systems?"
        a: "Absolutely. We specialize in integrating with existing infrastructure and can work alongside your current technology stack."

  - block: pricing-tabs
    id: pricing
    title: "Service Packages"
    subtitle: "Flexible options to fit your needs"
    tab_hourly_label: "By the Hour"
    tab_monthly_label: "Monthly"
    default_cta: "Contact"
    default_cta_title: "Contact us"
    hourly:
      - title: "Consultation"
        price: "Free"
        duration: "initial call"
        features:
          - "Needs assessment"
          - "Solution overview"
          - "Written summary"
        primary: false
      - title: "Standard"
        price: "$150"
        duration: "per hour"
        features:
          - "Expert consulting"
          - "Implementation support"
          - "Documentation"
        primary: true
      - title: "Priority"
        price: "$250"
        duration: "per hour"
        features:
          - "Expedited service"
          - "Direct access"
          - "Priority scheduling"
        primary: false
    monthly:
      - title: "Starter"
        price: "$2,000"
        duration: "per month"
        features:
          - "Up to 15 hours/month"
          - "Email support"
          - "Monthly reports"
        primary: false
      - title: "Professional"
        price: "$5,000"
        duration: "per month"
        features:
          - "Up to 40 hours/month"
          - "Priority support"
          - "Dedicated consultant"
        primary: true
      - title: "Enterprise"
        price: "Custom"
        duration: "per month"
        features:
          - "Unlimited hours"
          - "24/7 support"
          - "On-site available"
        primary: false

  - block: address-googlemap
    location: "35.699715, 51.338055"
    map_position: left
    map_height: 400
    title: "Our Office"
    text: |
      **Our office**

      Tehran, Iran

  - block: address-image
    image: "/images/office-location.png"
    map_position: left
    map_height: 400
    title: "Our Office"
    text: |
      **Our office**

      Tehran, Iran
  - block: cta
    links:
      - url: "/#job-positions"
        title: "Job positions"
        text: "Want to know about job postions?"
      - url: "/#contract-agreements"
        title: "Contract agreements"
        text: "About contract agreements"
      - url: "/#procurement-procedures"
        title: "Procurement-procedures"
        text: "About procurement procedures"
---
