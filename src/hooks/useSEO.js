import { useEffect } from 'react';

export const useSEO = ({
  title,
  description,
  keywords,
  image,
  url,
  type = 'website',
  locale = 'es_CO'
}) => {
  useEffect(() => {
    // Actualizar título
    if (title) {
      document.title = title;
    }

    // Actualizar meta description
    updateMetaTag('name', 'description', description);
    
    // Actualizar meta keywords
    updateMetaTag('name', 'keywords', keywords);
    
    // Actualizar Open Graph tags
    updateMetaTag('property', 'og:title', title);
    updateMetaTag('property', 'og:description', description);
    updateMetaTag('property', 'og:type', type);
    updateMetaTag('property', 'og:locale', locale);
    
    if (image) {
      updateMetaTag('property', 'og:image', image);
      updateMetaTag('property', 'og:image:alt', title);
    }
    
    if (url) {
      updateMetaTag('property', 'og:url', url);
      // Actualizar canonical link
      updateCanonicalLink(url);
    }
    
    // Actualizar Twitter Card tags
    updateMetaTag('name', 'twitter:title', title);
    updateMetaTag('name', 'twitter:description', description);
    
    if (image) {
      updateMetaTag('name', 'twitter:image', image);
      updateMetaTag('name', 'twitter:image:alt', title);
    }
    
  }, [title, description, keywords, image, url, type, locale]);
};

// Función auxiliar para actualizar meta tags
const updateMetaTag = (attribute, attributeValue, content) => {
  if (!content) return;
  
  let element = document.querySelector(`meta[${attribute}="${attributeValue}"]`);
  
  if (element) {
    element.setAttribute('content', content);
  } else {
    element = document.createElement('meta');
    element.setAttribute(attribute, attributeValue);
    element.setAttribute('content', content);
    document.head.appendChild(element);
  }
};

// Función auxiliar para actualizar canonical link
const updateCanonicalLink = (url) => {
  let canonical = document.querySelector('link[rel="canonical"]');
  
  if (canonical) {
    canonical.setAttribute('href', url);
  } else {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    canonical.setAttribute('href', url);
    document.head.appendChild(canonical);
  }
};

// Hook para breadcrumbs
export const useBreadcrumbs = (breadcrumbs) => {
  useEffect(() => {
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        "position": index + 1,
        "name": item.name,
        "item": item.url
      }))
    };
    
    let script = document.querySelector('script[data-breadcrumb]');
    if (script) {
      script.innerHTML = JSON.stringify(breadcrumbSchema);
    } else {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-breadcrumb', 'true');
      script.innerHTML = JSON.stringify(breadcrumbSchema);
      document.head.appendChild(script);
    }
  }, [breadcrumbs]);
};

// Constantes para SEO
export const SEO_DEFAULTS = {
  SITE_NAME: 'Bogotá Una Historia',
  SITE_URL: 'https://bogotaunahistoria.com',
  DEFAULT_IMAGE: '/Titulo.png',
  DEFAULT_DESCRIPTION: 'Descubre la historia fascinante de Bogotá a través de recorridos únicos por La Candelaria, Monserrate y lugares emblemáticos.',
  DEFAULT_KEYWORDS: 'recorridos históricos Bogotá, tours La Candelaria, turismo histórico Colombia, guías turísticos Bogotá, Monserrate, centro histórico',
  SOCIAL: {
    FACEBOOK: 'https://www.facebook.com/profile.php?id=100063748036232',
    INSTAGRAM: 'https://www.instagram.com/bogotaunahistoria',
    YOUTUBE: 'https://youtube.com'
  }
};
