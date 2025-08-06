import React from 'react';

const SchemaMarkup = ({ type, data }) => {
  let schema = {};

  switch (type) {
    case 'organization':
      schema = {
        "@context": "https://schema.org",
        "@type": "TourOperator",
        "name": "Bogotá Una Historia",
        "description": "Recorridos históricos especializados por Bogotá, Colombia",
        "url": "https://bogotaunahistoria.com",
        "telephone": "+57-324-343-3200",
        "email": "info@bogotaunahistoria.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Plaza de Bolívar",
          "addressLocality": "La Candelaria",
          "addressRegion": "Bogotá",
          "postalCode": "111711",
          "addressCountry": "CO"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": "4.7110",
          "longitude": "-74.0721"
        },
        "openingHours": "Mo-Su 09:00-18:00",
        "priceRange": "$15-$45",
        "sameAs": [
          "https://www.instagram.com/bogotaunahistoria",
          "https://www.facebook.com/bogotaunahistoria"
        ]
      };
      break;

    case 'tourist_attraction':
      schema = {
        "@context": "https://schema.org",
        "@type": "TouristAttraction",
        "name": data.name,
        "description": data.description,
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Bogotá",
          "addressCountry": "CO"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": data.latitude || "4.7110",
          "longitude": data.longitude || "-74.0721"
        },
        "image": data.image,
        "url": `https://bogotaunahistoria.com/?lugar=${data.slug}`
      };
      break;

    case 'tour':
      schema = {
        "@context": "https://schema.org",
        "@type": "TouristTrip",
        "name": data.name,
        "description": data.description,
        "provider": {
          "@type": "Organization",
          "name": "Bogotá Una Historia"
        },
        "offers": {
          "@type": "Offer",
          "price": data.price,
          "priceCurrency": data.currency || "COP",
          "availability": "https://schema.org/InStock"
        },
        "location": {
          "@type": "Place",
          "name": data.location,
          "address": {
            "@type": "PostalAddress",
            "addressLocality": "Bogotá",
            "addressCountry": "CO"
          }
        }
      };
      break;

    case 'webpage':
      schema = {
        "@context": "https://schema.org",
        "@type": "WebPage",
        "name": data.title,
        "description": data.description,
        "url": data.url,
        "inLanguage": ["es-CO", "en-US"],
        "isPartOf": {
          "@type": "WebSite",
          "name": "Bogotá Una Historia",
          "url": "https://bogotaunahistoria.com"
        },
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": data.breadcrumb || []
        }
      };
      break;

    default:
      return null;
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
};

export default SchemaMarkup;
