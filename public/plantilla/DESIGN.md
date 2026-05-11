---
name: El Drago Design System
colors:
  surface: '#fcf9f8'
  surface-dim: '#dcd9d9'
  surface-bright: '#fcf9f8'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f6f3f2'
  surface-container: '#f0eded'
  surface-container-high: '#eae7e7'
  surface-container-highest: '#e5e2e1'
  on-surface: '#1c1b1b'
  on-surface-variant: '#5c403f'
  inverse-surface: '#313030'
  inverse-on-surface: '#f3f0ef'
  outline: '#906f6e'
  outline-variant: '#e4bdbc'
  surface-tint: '#bd092c'
  primary: '#9a0021'
  on-primary: '#ffffff'
  primary-container: '#c41230'
  on-primary-container: '#ffd6d5'
  inverse-primary: '#ffb3b2'
  secondary: '#705d00'
  on-secondary: '#ffffff'
  secondary-container: '#fcd400'
  on-secondary-container: '#6e5c00'
  tertiary: '#4c4b47'
  on-tertiary: '#ffffff'
  tertiary-container: '#64635f'
  on-tertiary-container: '#e2e0da'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#ffdad9'
  primary-fixed-dim: '#ffb3b2'
  on-primary-fixed: '#410008'
  on-primary-fixed-variant: '#92001e'
  secondary-fixed: '#ffe16d'
  secondary-fixed-dim: '#e9c400'
  on-secondary-fixed: '#221b00'
  on-secondary-fixed-variant: '#544600'
  tertiary-fixed: '#e5e2dc'
  tertiary-fixed-dim: '#c9c6c1'
  on-tertiary-fixed: '#1c1c18'
  on-tertiary-fixed-variant: '#474743'
  background: '#fcf9f8'
  on-background: '#1c1b1b'
  surface-variant: '#e5e2e1'
typography:
  display-lg:
    fontFamily: Bricolage Grotesque
    fontSize: 72px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Bricolage Grotesque
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Bricolage Grotesque
    fontSize: 36px
    fontWeight: '800'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Bricolage Grotesque
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Be Vietnam Pro
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Be Vietnam Pro
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-bold:
    fontFamily: Be Vietnam Pro
    fontSize: 14px
    fontWeight: '700'
    lineHeight: '1.4'
rounded:
  sm: 0.5rem
  DEFAULT: 1rem
  md: 1.5rem
  lg: 2rem
  xl: 3rem
  full: 9999px
spacing:
  base: 8px
  section-gap: 80px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 16px
---

## Brand & Style

The design system is built on a "Gourmet Play" philosophy—merging the high-quality expectations of premium charcuterie with a high-energy, celebratory visual language. The brand personality is extroverted, appetizing, and rhythmic. It aims to evoke the immediate craving of a fresh deli counter while maintaining a modern, stylized edge that appeals to a contemporary audience.

The aesthetic leans into **High-Contrast / Bold** styling combined with **Tactile** elements. It utilizes organic, liquid-inspired section dividers to break the rigidity of standard digital layouts. Hand-drawn doodles and "floating" product photography create a sense of weightlessness and kinetic energy, suggesting that the food is as fresh and dynamic as the brand itself.

## Colors

This design system utilizes a high-impact triadic palette designed to stimulate appetite and brand recall.

*   **Primary (Deep Red):** Used for large surface areas, headers, and brand-heavy backgrounds. It provides the "premium" foundation.
*   **Secondary (Bright Sunny Yellow):** Reserved exclusively for high-energy accents, primary Call-to-Action (CTA) buttons, and focus-directing doodles.
*   **Tertiary (Cream White):** A slightly warm, crisp white used for card backgrounds and secondary sections to prevent visual fatigue and maintain a premium, artisanal feel.
*   **Neutral:** A deep charcoal used for body text to ensure maximum legibility against the vibrant red and yellow backgrounds.

## Typography

The typography strategy focuses on a "Chunky & Clean" contrast. 

For headlines, this design system employs **Bricolage Grotesque**. Its quirky, expressive letterforms capture the "atrapador" (catchy) and fun vibe required for a premium deli brand. Large display sizes should use tighter tracking to create a punchy, editorial feel.

For body copy and functional text, **Be Vietnam Pro** is used. It offers a contemporary, approachable, and highly legible counter-balance to the expressive headlines. It ensures that nutritional info, product descriptions, and recipes remain easy to consume at any size.

## Layout & Spacing

This design system follows a **fluid grid** model with a heavy emphasis on asymmetrical balance. While a standard 12-column grid provides the underlying structure, the visual layer frequently breaks the grid using organic wavy dividers and overlapping elements.

Vertical spacing is generous to allow floating ingredients (tomatoes, herbs, meat slices) to occupy "white space" without cluttering the text. Layout transitions should use SVG "waves" to guide the user from one section to the next, creating a sense of continuous motion. 

Mobile layouts should stack content vertically but preserve the "floating" photography style by allowing image assets to bleed slightly off the edges of the screen.

## Elevation & Depth

Visual hierarchy is achieved through a mix of **Tonal Layers** and **Ambient Shadows**. 

Instead of traditional material shadows, the design system uses soft, diffused, multi-layered shadows to give food photography a "floating" effect. This creates a 3D depth that makes the ingredients feel fresh and tangible. 

UI elements like cards and buttons should use low-contrast outlines or solid color fills rather than heavy shadows to keep the interface feeling clean and modern. Backgrounds use "organic depth," where red waves sit behind product packaging, and hand-drawn arrows sit on the top-most layer to direct the eye toward CTAs.

## Shapes

The shape language is defined by **Pill-shaped** and **Organic** forms. High-energy elements like buttons and chips must use fully rounded (pill) corners to reinforce the "friendly and accessible" brand promise.

Product cards use a `rounded-xl` (1.5rem) corner radius to feel soft and inviting. The most distinctive shape element in the design system is the "Red Wave"—a fluid, non-geometric curve used for hero sections and footer transitions, mimicking the organic nature of sliced meats and artisanal craftsmanship.

## Components

### Buttons
Primary CTAs are rendered in Bright Yellow with black text, using a pill-shaped container. They should feature a subtle "squish" hover animation to lean into the playful vibe. Secondary buttons use a thick white outline with no fill.

### Cards
Cards for products and recipes feature a Cream White background with a soft ambient shadow. Typography within cards should be centered, with the product image breaking the top boundary of the card to create depth.

### Doodles & Annotations
Hand-drawn arrows, stars, and underlines in yellow or white are treated as functional components. They should be used to highlight key USPs (e.g., "100% Natural") or to point directly to the primary action.

### Input Fields
Forms use a clean white background with a 2px solid red border when focused. Roundedness must match the `rounded-lg` token (1rem) to maintain consistency with the playful theme.

### Floating Elements
Food photography assets (ham slices, olives, cheese blocks) are treated as decorative components. They should be placed with varying degrees of CSS blur and scale to create a photographic "depth of field" effect on the scroll.