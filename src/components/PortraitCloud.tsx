import React from 'react';

export const PORTRAIT_URL = 'assets/Creative%20Designer%20at%20Work.png';

interface PortraitCloudProps {
  className?: string;
  imageUrl?: string;
  /** Accessible description for the image */
  alt?: string;
}

/**
 * Frameless image used in the Hero: renders the whole picture, with no
 * silhouette frame or clipping, so the attached artwork stays uncropped.
 */
export const PortraitCloud: React.FC<PortraitCloudProps> = ({
  className,
  imageUrl = PORTRAIT_URL,
  alt = 'Diseñador creativo trabajando en Lighthouse Studio',
}) => <img src={imageUrl} alt={alt} className={className} />;
