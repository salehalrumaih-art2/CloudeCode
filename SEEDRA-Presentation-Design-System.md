# SEEDRA Presentation Design System

**Version:** 1.0
**Date:** February 2026
**Owner:** Seedra Ventures
**Audience:** Designers, presentation creators, and brand partners

---

## Table of Contents

1. [Introduction & Purpose](#1-introduction--purpose)
2. [Brand Identity](#2-brand-identity)
3. [Color Palette](#3-color-palette)
4. [Typography](#4-typography)
5. [Layout & Grid System](#5-layout--grid-system)
6. [Slide Layout Catalog](#6-slide-layout-catalog)
7. [Component Library](#7-component-library)
8. [Spacing System](#8-spacing-system)
9. [Data Visualization Guidelines](#9-data-visualization-guidelines)
10. [Header & Footer Specifications](#10-header--footer-specifications)
11. [Tables & Data Display](#11-tables--data-display)
12. [Usage Rules — Do's and Don'ts](#12-usage-rules--dos-and-donts)
13. [Slide Construction Checklist](#13-slide-construction-checklist)
14. [Quick Reference Card](#14-quick-reference-card)

---

## 1. Introduction & Purpose

This document is the **official design reference** for all Seedra Ventures presentations. It codifies the visual language, layout patterns, component specifications, and usage rules derived from established Seedra presentation materials.

### How to Use This Guide

1. **Before starting a new presentation:** Read Sections 3–5 (Color, Typography, Grid) to set up your file correctly.
2. **When building slides:** Refer to Section 6 (Slide Layout Catalog) to select the appropriate layout for your content, then use Section 7 (Component Library) to assemble the elements.
3. **Before delivering:** Run through Section 13 (Slide Construction Checklist) to verify brand compliance.

### Design Philosophy

Seedra Ventures presentations follow a **clean, confident, data-driven** aesthetic. The design is:

- **Minimalist** — No decorative imagery, stock photos, or ornamental elements
- **Structured** — Content is organized in clearly defined cards, grids, and sections
- **Green-forward** — The brand green is the dominant accent color, used strategically for hierarchy
- **Flat** — No shadows, gradients, or 3D effects anywhere in the presentation
- **Professional** — Every slide communicates authority and clarity

---

## 2. Brand Identity

### 2.1 Seedra Ventures Logo

- **Style:** Text-based logo with horizontal line accent elements
- **Color:** Displayed in dark green or black depending on background
- **Placement on Cover Slide:** Top-right corner of the slide, with adequate clear space (~24px minimum on all sides)
- **Placement on Inner Slides:** The logo does NOT appear on inner content slides; brand presence is maintained through the footer confidentiality line and consistent visual language
- **Minimum Size:** The logo should never be smaller than 80px in width to maintain legibility

### 2.2 Co-Branding (Client Presentations)

When a presentation is prepared for a specific client:

- The **cover slide bottom banner** includes a co-branding block
- Format: `"Made for [Client Name]"` in white text, accompanied by the client's logo
- The client logo should be proportionally sized to not overpower the Seedra logo
- Client logo appears ONLY on the cover slide, never on inner slides

### 2.3 Confidentiality Line

Every inner slide carries the footer text:

> **Strictly Private and Confidential | www.seedra.com**

This is non-negotiable and must appear on every slide except the cover.

---

## 3. Color Palette

### 3.1 Core Brand Colors

| Token Name | Hex Code | Swatch | Role |
|---|---|---|---|
| **Primary Green** | `#35CE8D` | ![#35CE8D](https://via.placeholder.com/20/35CE8D/35CE8D) | Main brand accent — used in accent bars, bullet arrows, subheadings, chart highlights, numbered indicators, and interactive elements |
| **Background Mint** | `#E0F8EE` | ![#E0F8EE](https://via.placeholder.com/20/E0F8EE/E0F8EE) | Slide background — applied to EVERY slide as the base canvas color |
| **Secondary Green** | `#CAEBDD` | ![#CAEBDD](https://via.placeholder.com/20/CAEBDD/CAEBDD) | Soft accent fills — used in table column highlights, light card fills, tinted backgrounds for emphasis areas, and subtle differentiators |
| **Accent Purple** | `#B08FCF` | ![#B08FCF](https://via.placeholder.com/20/B08FCF/B08FCF) | Sparingly used — decorative underlines beneath select headings, subtle left-border accents on special callout cards, and occasional secondary chart segments for contrast |

### 3.2 Neutral & Supporting Colors

| Token Name | Hex Code | Role |
|---|---|---|
| **Banner Green (Dark)** | `#1B5E3B` | Full-width banners, dark green cards for emphasis, cover bottom bar |
| **Card Gray** | `#F2F2F2` | Content card backgrounds — the default surface color for all card components |
| **Text Black** | `#1A1A1A` | Primary text — titles on cover slide, body text, bold labels |
| **Text Dark Gray** | `#4A4A4A` | Secondary text — descriptions, captions, supporting paragraph text |
| **White** | `#FFFFFF` | Text on dark/green backgrounds, card internal areas when needed |
| **Chart Gray** | `#BDBDBD` | Secondary segments in pie charts, bar charts, and divider lines |
| **Border Light Gray** | `#E0E0E0` | Thin borders on tables, card outlines when subtle separation is needed |

### 3.3 Color Usage Rules

1. **Background Mint (`#E0F8EE`)** is the universal slide background. Never use plain white or any other color as a slide background.
2. **Primary Green (`#35CE8D`)** is the workhorse accent. Use it for: title accent bars, subheadings, arrow bullets, step indicators, chart primary segments, and emphasis text.
3. **Banner Green Dark (`#1B5E3B`)** is reserved for high-impact horizontal banners and dark-fill emphasis cards. Do not use it for text on the mint background (it would be too dark and clash with the Primary Green system).
4. **Accent Purple (`#B08FCF`)** is used **very sparingly** — think of it as a 5% accent. It appears as thin decorative underlines under certain card titles, or as a secondary color in multi-segment charts. Never use purple as a background fill or primary heading color.
5. **Secondary Green (`#CAEBDD`)** is used for tinted table columns, soft background fills in emphasis zones, and as a lighter alternative to Card Gray when you need a gentle green tint rather than neutral gray.

---

## 4. Typography

### 4.1 Font Family

| Priority | Font Name | Type | Notes |
|---|---|---|---|
| **Primary** | **Aptos** | Sans-serif | The official Seedra Ventures presentation font. Ships with Microsoft 365 and modern Office versions. |
| Fallback 1 | Calibri | Sans-serif | Microsoft system fallback — similar proportions |
| Fallback 2 | Segoe UI | Sans-serif | Windows system fallback |
| Fallback 3 | System sans-serif | Sans-serif | Last resort |

**Important:** All text in the presentation uses **Aptos**. Do not mix font families within a single presentation. If Aptos is not available, use the fallback chain in order.

### 4.2 Type Scale

| Role | Size (pt) | Weight | Color Token | Letter Spacing | Usage |
|---|---|---|---|---|---|
| **Cover Title** | 36–40 | Bold (700) | Text Black `#1A1A1A` | Normal | The main title on the cover slide only |
| **Slide Title** | 24–28 | Bold (700) | Primary Green `#35CE8D` or Banner Green `#1B5E3B` | Normal | Section/slide titles, always paired with the green accent bar |
| **Card Heading** | 18–20 | SemiBold (600) | Primary Green `#35CE8D` | Normal | Subheadings inside content cards (e.g., "Proposed Structure:", "Phase 1:") |
| **Card Subheading** | 14–16 | Bold (700) | Text Black `#1A1A1A` | Normal | Secondary titles within cards, bold labels, category names |
| **Body Text** | 11–13 | Regular (400) | Text Black `#1A1A1A` or Text Dark Gray `#4A4A4A` | Normal | Paragraph content, descriptions, bullet text |
| **Small Body / Detail** | 10–11 | Regular (400) | Text Dark Gray `#4A4A4A` | Normal | Supplementary details, parenthetical notes, fine print |
| **Table Header** | 11–13 | SemiBold (600) | Text Black `#1A1A1A` or Primary Green `#35CE8D` | Normal | Column headers in data tables |
| **Table Cell** | 10–12 | Regular (400) | Text Black `#1A1A1A` | Normal | Table body content |
| **Banner Text** | 14–16 | SemiBold (600) | White `#FFFFFF` | Normal | Text displayed on dark green banners |
| **Large Number / KPI** | 24–32 | Bold (700) | Primary Green `#35CE8D` | Normal | Key figures, totals, financial amounts displayed prominently |
| **Label / Tag** | 9–10 | SemiBold (600) | Primary Green `#35CE8D` | +0.5px (slight tracking) | Uppercase labels like "PRINCIPLE 1", "PHASE 1", category tags |
| **Caption / Footer** | 8–9 | Regular (400) | Text Dark Gray `#4A4A4A` | Normal | Footer text, page numbers, source citations |

### 4.3 Typography Rules

1. **Maximum 2 font weights per slide.** Typically Bold (700) for headings and Regular (400) for body. SemiBold (600) may replace one of these but never use all three on a single slide.
2. **No italics** except for subtle annotations (e.g., "Example" labels, timeline markers like "Timeline: Pre 2024"). Italics are never used for emphasis — use bold or color instead.
3. **No underlined text** for emphasis. The only underlines in the system are decorative accent lines beneath headings (rendered as shapes, not text decoration).
4. **Line height:** 1.3–1.5× the font size for body text. Headings use tighter line height (1.1–1.2×).
5. **All text is left-aligned** unless inside a centered banner or a right-aligned numerical column in a table.

---

## 5. Layout & Grid System

### 5.1 Slide Dimensions

- **Aspect Ratio:** 16:9 (widescreen)
- **Pixel Dimensions:** 1920 × 1080 px (standard HD) or PowerPoint default 13.33″ × 7.5″

### 5.2 Margins

| Edge | Margin | Notes |
|---|---|---|
| Left | 60px | Content starts here; accent bar sits at ~48px from left edge |
| Right | 60px | Content ends here |
| Top | 50px | Logo area on cover; title area on inner slides |
| Bottom | 48px | Space above footer line |

### 5.3 Grid

- **Columns:** 12-column grid
- **Gutter:** 20px between columns
- **Column width:** Calculated from (slide width − left margin − right margin − 11 gutters) ÷ 12
- **Usage:** Cards typically span 6 columns (half-width), 4 columns (one-third), or 12 columns (full-width)

### 5.4 Vertical Rhythm

- The slide is divided into three vertical zones:
  - **Title Zone** (top ~15%): Contains the green accent bar and slide title
  - **Content Zone** (middle ~70%): Contains cards, tables, charts, and body content
  - **Footer Zone** (bottom ~15%): Contains footer separator line, confidentiality text, and page number

---

## 6. Slide Layout Catalog

This section documents **10 distinct slide layouts** derived from established Seedra presentations. Each layout includes a structural wireframe, element specifications, and usage guidance.

---

### Layout A — Cover Slide

**Purpose:** Opening slide for every presentation. Sets the brand tone and identifies the client.

```
┌──────────────────────────────────────────────────────┐
│                                    [SEEDRA LOGO]     │
│                                                      │
│                                                      │
│   Cap Table Restructuring                            │
│   Proposal                                           │
│                                                      │
│                                                      │
│                                                      │
│                                                      │
├──────────────────────────────────────────────────────┤
│ ██████████████████████████████████████████████████████│
│ █  Made for [CLIENT]  [LOGO]       October 2025    ██│
│ ██████████████████████████████████████████████████████│
└──────────────────────────────────────────────────────┘
```

**Element Specifications:**

| Element | Specification |
|---|---|
| **Background** | Background Mint `#E0F8EE` |
| **Seedra Logo** | Top-right corner, ~24px from top and right edges |
| **Title** | Aptos Bold 36–40pt, Text Black `#1A1A1A`, left-aligned, vertically centered in the upper 60% of the slide |
| **Bottom Banner** | Full-width rectangle, Banner Green Dark `#1B5E3B`, height ~80–90px, anchored to the absolute bottom of the slide |
| **"Made for" Text** | Aptos SemiBold 14pt, White, left side of banner, ~60px from left edge |
| **Client Logo** | White or light version, vertically centered in banner, adjacent to "Made for" text |
| **Date** | Aptos Regular 12pt, White, right-aligned in banner, ~60px from right edge |
| **Page Number** | None — cover slides do NOT display a page number |

**Usage:** Always the first slide. Never reuse this layout for inner content.

---

### Layout B — Two-Card Content Slide

**Purpose:** General-purpose content slide for presenting two related topics side by side. Supports text, bullet lists, and optional chart embeds.

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│   ██ Slide Title                                     │
│                                                      │
│   ┌───────────────────┐  ┌───────────────────────┐   │
│   │█ Card Heading     │  │█ Card Heading         │   │
│   │                   │  │                       │   │
│   │  → Bullet text    │  │  → Bullet text        │   │
│   │  → Bullet text    │  │  → Bullet text        │   │
│   │                   │  │  → Bullet text        │   │
│   │   [PIE CHART]     │  │                       │   │
│   │                   │  │                       │   │
│   └───────────────────┘  └───────────────────────┘   │
│                                                      │
│ ──────────────────────────────────────────────────── │
│  Strictly Private and Confidential | seedra.com  02  │
└──────────────────────────────────────────────────────┘
```

**Element Specifications:**

| Element | Specification |
|---|---|
| **Green Accent Bar** | Vertical bar, 6px wide × 36px tall, Primary Green `#35CE8D`, left of title, 12px gap to title text |
| **Slide Title** | Aptos Bold 24–28pt, Primary Green `#35CE8D` |
| **Cards** | Two cards side by side, each spanning ~6 grid columns. Background: Card Gray `#F2F2F2`. Border-radius: 8px. Internal padding: 24px. Green left-border accent: 4px wide, Primary Green `#35CE8D` |
| **Card Headings** | Aptos SemiBold 18pt, Primary Green `#35CE8D` |
| **Bullet Points** | Green arrow `→` in Primary Green, followed by 8px space, then body text in Text Black |
| **Pie Chart** | Optional, placed inside a card. Two-tone: Primary Green `#35CE8D` + Chart Gray `#BDBDBD`. Flat, no 3D. |
| **Gap Between Cards** | 20px (one gutter width) |

**When to use:** Overview slides, comparison slides, any two-topic layout.

---

### Layout C — Banner + Two-Column Slide

**Purpose:** Presenting a key formula, equation, or principle in a prominent banner, followed by detailed breakdown in two columns.

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│   ██ Slide Title                                     │
│                                                      │
│   ██████████████████████████████████████████████████  │
│   █  KEY FORMULA / EQUATION IN WHITE TEXT          █  │
│   ██████████████████████████████████████████████████  │
│                                                      │
│   ┌─────────────────┐    ┌─────────────────────┐     │
│   │ GREEN-FILL CARD │    │  GRAY CARD          │     │
│   │ (white text)    │    │  (black text)       │     │
│   │  → Detail 1     │    │  → Detail 1         │     │
│   │  → Detail 2     │    │  → Detail 2         │     │
│   └─────────────────┘    └─────────────────────┘     │
│                                                      │
│   ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐               │
│   │Note 1│ │Note 2│ │Note 3│ │Note 4│               │
│   └──────┘ └──────┘ └──────┘ └──────┘               │
│ ──────────────────────────────────────────────────── │
│  Strictly Private and Confidential | seedra.com  03  │
└──────────────────────────────────────────────────────┘
```

**Element Specifications:**

| Element | Specification |
|---|---|
| **Formula Banner** | Full content-width rectangle (within margins), Banner Green Dark `#1B5E3B`, height ~50–60px, border-radius: 8px. Text: Aptos SemiBold 14–16pt, White, centered vertically. |
| **Green-Fill Card (Left)** | Background: Banner Green Dark `#1B5E3B`. Text: White. Border-radius: 8px. Padding: 24px. Spans ~6 columns. |
| **Gray Card (Right)** | Background: Card Gray `#F2F2F2`. Text: Text Black. Border-radius: 8px. Padding: 24px. Spans ~6 columns. |
| **Bottom Note Cards** | Small cards in a horizontal row (3–4 cards), Card Gray `#F2F2F2`, border-radius: 6px, padding: 16px. Each spans ~3 columns. |

**When to use:** Framework explanations, formula breakdowns, methodology slides.

---

### Layout D — Grid Cards Slide

**Purpose:** Presenting multiple topics or categories in a structured grid, with an optional key takeaway banner at the bottom.

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│   ██ Slide Title                                     │
│                                                      │
│   ┌──────────────┐  ┌──────────────┐                 │
│   │ Card Heading  │  │ Card Heading │                 │
│   │ Body text     │  │ Body text    │                 │
│   │ → Bullet      │  │ → Bullet     │                 │
│   └──────────────┘  └──────────────┘                 │
│   ┌──────────────┐  ┌──────────────┐                 │
│   │ Card Heading  │  │ Card Heading │                 │
│   │ Body text     │  │ Body text    │                 │
│   │ → Bullet      │  │ → Bullet     │                 │
│   └──────────────┘  └──────────────┘                 │
│                                                      │
│   ██████████████████████████████████████████████████  │
│   █  KEY TAKEAWAY MESSAGE IN WHITE                 █  │
│   ██████████████████████████████████████████████████  │
│ ──────────────────────────────────────────────────── │
│  Strictly Private and Confidential | seedra.com  04  │
└──────────────────────────────────────────────────────┘
```

**Element Specifications:**

| Element | Specification |
|---|---|
| **Grid** | 2×2 arrangement (or 2×3 for 6 cards). Each card spans ~6 columns in a 2-col layout or ~4 columns in a 3-col layout. |
| **Cards** | Card Gray `#F2F2F2`, border-radius: 8px, padding: 24px. Each card contains: a green card heading (Aptos SemiBold 16–18pt, Primary Green) and body text (Aptos Regular 11–13pt, Text Black). |
| **Gap Between Cards** | 20px horizontal, 16px vertical |
| **Takeaway Banner** | Full content-width, Banner Green Dark `#1B5E3B`, height ~50–60px, border-radius: 8px. Text: Aptos SemiBold 14pt, White, centered. Positioned below the card grid, above the footer. |

**When to use:** Multi-topic overviews, governance frameworks, feature comparisons.

---

### Layout E — Process / Steps Slide

**Purpose:** Illustrating a sequential workflow, timeline, or implementation plan with numbered steps.

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│   ██ Slide Title                                     │
│                                                      │
│   ┌─────────────┐ ┌─────────────┐ ┌─────────────┐   │
│   │ Column 1    │ │ Column 2    │ │ Column 3    │   │
│   │ → Detail    │ │ → Detail    │ │ → Detail    │   │
│   │ → Detail    │ │ → Detail    │ │ → Detail    │   │
│   └─────────────┘ └─────────────┘ └─────────────┘   │
│                                                      │
│    (1)───────(2)───────(3)───────(4)───────(5)       │
│   Step 1    Step 2    Step 3    Step 4    Step 5     │
│   Label     Label     Label     Label     Label      │
│                                                      │
│ ──────────────────────────────────────────────────── │
│  Strictly Private and Confidential | seedra.com  05  │
└──────────────────────────────────────────────────────┘
```

**Element Specifications:**

| Element | Specification |
|---|---|
| **Top Content Columns** | Three cards or text blocks, each spanning ~4 grid columns. Card Gray `#F2F2F2` background, border-radius: 8px, padding: 24px. |
| **Step Indicators** | Circles (40px diameter) or rounded squares (40×40px, 8px radius), filled with Primary Green `#35CE8D`. Number inside: Aptos Bold 16pt, White, centered. |
| **Connecting Lines** | Thin horizontal lines (2px) connecting each step circle, color: Primary Green `#35CE8D` or Chart Gray `#BDBDBD`. |
| **Step Labels** | Aptos Regular 10–12pt, Text Black `#1A1A1A`, centered below each circle. |
| **Layout** | Steps are evenly distributed across the content width. Equal spacing between all step indicators. |

**When to use:** Implementation timelines, process flows, phase breakdowns.

---

### Layout F — Data Table Slide

**Purpose:** Presenting structured data in a clean, readable table with optional emphasis columns and a philosophy/note card below.

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│   ██ Slide Title                                     │
│      Subtitle / description paragraph                │
│                                                      │
│   ┌──────────────────────────────────────────────┐   │
│   │  KPI Header  │ Baseline │ Target A  │Target B│   │
│   │──────────────┼──────────┼───────────┼────────│   │
│   │  Metric 1    │   XX     │  Value    │ Value  │   │
│   │  Metric 2    │   XX     │  Value    │ Value  │   │
│   │  Metric 3    │   XX     │  Value    │ Value  │   │
│   │  Metric 4    │   XX     │  Value    │ Value  │   │
│   └──────────────────────────────────────────────┘   │
│                        ↑ tinted columns (Secondary   │
│                          Green #CAEBDD background)   │
│                                                      │
│   ┌──────────────────────────────────────────────┐   │
│   │█ Framework Philosophy                        │   │
│   │  Descriptive paragraph text explaining the   │   │
│   │  guiding principle behind the data above.    │   │
│   └──────────────────────────────────────────────┘   │
│                                                      │
│ ──────────────────────────────────────────────────── │
│  Strictly Private and Confidential | seedra.com  18  │
└──────────────────────────────────────────────────────┘
```

**Element Specifications:**

| Element | Specification |
|---|---|
| **Subtitle** | Aptos Regular 11–13pt, Text Dark Gray `#4A4A4A`, positioned below slide title with 8px gap. Max width: ~70% of content area. |
| **Table Container** | Card Gray `#F2F2F2` rounded rectangle (8px radius), padding: 20px. Full content width. |
| **Table Header Row** | Aptos SemiBold 11–13pt, Text Black `#1A1A1A`. Bottom border: 2px solid Primary Green `#35CE8D` separating header from body rows. |
| **Table Body Rows** | Aptos Regular 10–12pt, Text Black. Rows separated by 1px solid Border Light Gray `#E0E0E0`. Row height: ~36–40px. |
| **Tinted Columns** | Target/emphasis columns have a subtle Secondary Green `#CAEBDD` background fill applied to the entire column (header + body cells). |
| **Baseline Values** | Displayed in Primary Green `#35CE8D` italic when showing placeholder "XX" values. |
| **Philosophy Card** | Full content-width card, Card Gray `#F2F2F2`, border-radius: 8px, padding: 20px. Green left-border accent: 4px wide, Primary Green `#35CE8D`. Card heading: Aptos SemiBold 16pt, Primary Green. Body: Aptos Regular 11pt, Text Black. |

**When to use:** KPI tracking slides, metrics dashboards, benchmark comparisons, any data-heavy content requiring tabular format.

---

### Layout G — Four-Quadrant Slide

**Purpose:** Presenting four related but distinct pieces of content in a balanced 2×2 grid, with optional variation between card styles (gray, green-fill, or white) to create visual hierarchy.

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│   ██ Slide Title                                     │
│                                                      │
│   ┌──────────────────┐  ┌───────────────────────┐   │
│   │  Card Heading     │  │  Card Heading         │   │
│   │                   │  │                       │   │
│   │   [PIE CHART]     │  │  ● Row 1   Analysis   │   │
│   │   Label  Label    │  │  ● Row 2   Analysis   │   │
│   │                   │  │  ● Row 3   Analysis   │   │
│   └──────────────────┘  └───────────────────────┘   │
│   ┌──────────────────┐  ┌───────────────────────┐   │
│   │████ GREEN CARD ██│  │  Card Heading         │   │
│   │██ White text   ██│  │                       │   │
│   │██ → Detail 1   ██│  │  Bold Label:  Value   │   │
│   │██ → Detail 2   ██│  │  Bold Label:  Value   │   │
│   │██              ██│  │  Bold Label:  Value   │   │
│   └──────────────────┘  └───────────────────────┘   │
│                                                      │
│ ──────────────────────────────────────────────────── │
│  Strictly Private and Confidential | seedra.com  17  │
└──────────────────────────────────────────────────────┘
```

**Element Specifications:**

| Element | Specification |
|---|---|
| **Grid** | 2×2, each card spanning ~6 columns. Vertical gap: 16px. Horizontal gap: 20px. |
| **Standard Gray Card** | Card Gray `#F2F2F2`, border-radius: 8px, padding: 24px. |
| **Green Emphasis Card** | Banner Green Dark `#1B5E3B` background, border-radius: 8px, padding: 24px. All text inside is White `#FFFFFF`. Used for ONE card in the grid to highlight the most important quadrant (e.g., "Key Differentiator"). |
| **Assessment Table (inside card)** | Mini-table within a card. Green dot indicators `●` (Primary Green `#35CE8D`) precede each criteria row. Two columns: Criteria (left-aligned) and Analysis (left-aligned). No visible borders — uses spacing only. |
| **Key-Value Pairs (inside card)** | Bold label (Aptos Bold 12pt, Text Black) on left, regular value (Aptos Regular 12pt, Text Dark Gray) on right. Each pair on its own line, separated by 8px vertical spacing. |
| **Pie Chart in Card** | Positioned inside a gray card. Green + Gray two-tone. Labels placed adjacent to chart or below. |

**When to use:** Scenario analysis, proposal slides, multi-faceted assessments, any slide needing exactly four distinct information blocks.

---

### Layout H — Principles / Dual-Card + Data Slide

**Purpose:** Presenting guiding principles or key concepts in prominent cards at the top, with supporting data (table and/or chart) below.

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│   ██ Slide Title                                     │
│                                                      │
│   ┌──────────────────┐    ┌──────────────────────┐   │
│   │ PRINCIPLE 1       │    │ PRINCIPLE 2          │   │
│   │ Bold Subtitle     │    │ Bold Subtitle        │   │
│   │ Body description  │    │ Body description     │   │
│   │ text here.        │    │ text here.           │   │
│   └──────────────────┘    └──────────────────────┘   │
│                                                      │
│   ┌──────────────────┐    ┌──────────────────────┐   │
│   │ Table Title       │    │                      │   │
│   │ ┌──────────────┐ │    │  [CHART / EXTERNAL   │   │
│   │ │Head │Head│Head│ │    │   VISUALIZATION]     │   │
│   │ │─────┼────┼────│ │    │                      │   │
│   │ │Data │Data│Data│ │    │                      │   │
│   │ │Data │Data│Data│ │    │                      │   │
│   │ └──────────────┘ │    │                      │   │
│   └──────────────────┘    └──────────────────────┘   │
│ ──────────────────────────────────────────────────── │
│  Strictly Private and Confidential | seedra.com  12  │
└──────────────────────────────────────────────────────┘
```

**Element Specifications:**

| Element | Specification |
|---|---|
| **Principle Cards (top)** | Two cards side by side, each ~6 columns. Card Gray `#F2F2F2`, border-radius: 8px, padding: 24px. |
| **Principle Label** | Aptos SemiBold 9–10pt, Primary Green `#35CE8D`, UPPERCASE with slight letter-spacing (+0.5px). E.g., "PRINCIPLE 1". |
| **Principle Subtitle** | Aptos Bold 16–18pt, Text Black `#1A1A1A`. Directly below the label with 4px gap. |
| **Principle Body** | Aptos Regular 11–13pt, Text Dark Gray `#4A4A4A`. Below subtitle with 8px gap. |
| **Bottom-Left: Embedded Table** | Inside a card (Card Gray or White). Green table title above (Aptos SemiBold 14pt, Primary Green). Table follows standard table styling (see Section 11). |
| **Bottom-Right: Chart/Image Area** | Inside a card or bordered container. If embedding external charts: thin border (1px, Border Light Gray `#E0E0E0`), border-radius: 4px. Image scaled to fit with padding. |

**When to use:** Foundational principles slides, theory + evidence layouts, slides that pair conceptual framing with supporting data.

---

### Layout I — Dual-Phase / Timeline Cards Slide

**Purpose:** Comparing two time periods, phases, or scenarios side by side, each with detailed breakdowns and a prominent summary banner at the bottom.

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│   ██ Slide Title                                     │
│                                                      │
│   ┌───────────────────────┐ ┌──────────────────────┐ │
│   │  Phase 1 Title        │ │  Phase 2 Title       │ │
│   │  Timeline: Date Range │ │  Timeline: Date Range│ │
│   │                       │ │                      │ │
│   │  Body description     │ │  Body description    │ │
│   │                       │ │                      │ │
│   │  Bold Subheading:     │ │  → Key Action 1      │ │
│   │  Name ──── 30%        │ │  → Key Action 2      │ │
│   │  Name ──── 25%        │ │                      │ │
│   │  Name ──── 20%        │ │  Bold Subheading:    │ │
│   │                       │ │  → Term detail       │ │
│   │  ┌─────────────────┐  │ │                      │ │
│   │  │Total:  USD X.XXm│  │ │  ┌────────────────┐  │ │
│   │  └─────────────────┘  │ │  │Total: USD X.XXm│  │ │
│   └───────────────────────┘ │  └────────────────┘  │ │
│                             └──────────────────────┘ │
│   ██████████████████████████████████████████████████  │
│   █  Total Label              USD X.XXm            █  │
│   ██████████████████████████████████████████████████  │
│ ──────────────────────────────────────────────────── │
│  Strictly Private and Confidential | seedra.com  10  │
└──────────────────────────────────────────────────────┘
```

**Element Specifications:**

| Element | Specification |
|---|---|
| **Phase Cards** | Two tall cards side by side, each ~6 columns. Card Gray `#F2F2F2`, border-radius: 8px, padding: 24px. Cards may extend taller than in other layouts to accommodate detailed content. |
| **Phase Title** | Aptos SemiBold 18–20pt, Primary Green `#35CE8D`. |
| **Timeline Subtitle** | Aptos Italic 11pt, Text Dark Gray `#4A4A4A`. Directly below phase title. |
| **Name-Value Pairs** | Left: Name (Aptos Regular 11pt, underlined with a thin dotted or dashed leader line). Right: Percentage or value (Aptos SemiBold 11pt, Text Black), right-aligned within the card. |
| **Total Amount Block** | Positioned at the bottom of each card. "Total Invested Amount" in Aptos SemiBold 10pt, Text Dark Gray. Amount in Aptos Bold 24–28pt, Primary Green `#35CE8D`. May be inside a subtle inner container or simply bottom-aligned. |
| **Summary Banner** | Full content-width, Banner Green Dark `#1B5E3B`, height ~60–70px, border-radius: 8px. Left text: label (Aptos SemiBold 14pt, White). Right text: amount (Aptos Bold 24pt, White). |

**When to use:** Investment timeline slides, before/after comparisons, phase-based narratives, funding round breakdowns.

---

### Layout J — Table + Problem Statement Slide

**Purpose:** Presenting a data table alongside descriptive content, with a callout card at the bottom for highlighting a problem, insight, or key takeaway.

```
┌──────────────────────────────────────────────────────┐
│                                                      │
│   ██ Slide Title                                     │
│                                                      │
│   ┌───────────────────────┐ ┌──────────────────────┐ │
│   │  Card Title            │ │  Card Title          │ │
│   │  ───── purple line     │ │                      │ │
│   │                        │ │  Label:     Value    │ │
│   │  ┌──────────────────┐  │ │  Label:     Value    │ │
│   │  │ Col1 │ Col2│Col3 │  │ │  Label:     Value    │ │
│   │  │──────┼─────┼─────│  │ │  Label:     Value    │ │
│   │  │ Data │ 35% │$XXX │  │ │  Label:     Value    │ │
│   │  │ Data │ 25% │$XXX │  │ │                      │ │
│   │  │ Data │ 15% │$XXX │  │ │                      │ │
│   │  │══════╪═════╪═════│  │ │                      │ │
│   │  │Total │100% │$XXX │  │ │                      │ │
│   │  └──────────────────┘  │ │                      │ │
│   └───────────────────────┘ └──────────────────────┘ │
│                                                      │
│   ┌──────────────────────────────────────────────┐   │
│   │█ The Problem:                                │   │
│   │  Description of the issue or key insight     │   │
│   │  that the data above reveals.                │   │
│   └──────────────────────────────────────────────┘   │
│ ──────────────────────────────────────────────────── │
│  Strictly Private and Confidential | seedra.com  11  │
└──────────────────────────────────────────────────────┘
```

**Element Specifications:**

| Element | Specification |
|---|---|
| **Top Section** | Two cards side by side (~6 columns each). Card Gray `#F2F2F2` or White `#FFFFFF`, border-radius: 8px, padding: 24px. |
| **Card Title with Purple Underline** | Aptos SemiBold 16–18pt, Text Black `#1A1A1A`. Below the title: a thin decorative line (2–3px height, ~60% of card width) in Accent Purple `#B08FCF`. This is the primary use case for the purple accent. |
| **Table Inside Card** | Follows Section 11 table styling. Column headers in Primary Green `#35CE8D` SemiBold. Data rows in regular Text Black. Total row: Bold, separated by a 2px top border. |
| **Key-Value Card (Right)** | Displays structured data as labeled pairs. Bold label on left (Aptos Bold 12pt, Text Black), value on right (Aptos Regular 12pt, Text Dark Gray or Text Black). Vertically stacked with 12px gap between pairs. Some values may use italic for annotations (e.g., "(40% of allocation)"). |
| **Problem / Callout Card (Bottom)** | Full content-width, Card Gray `#F2F2F2`, border-radius: 8px, padding: 20px. Green left-border accent: 4px wide, Primary Green `#35CE8D`. Title: Aptos SemiBold 16pt, Primary Green `#35CE8D`. Body: Aptos Regular 11–13pt, Text Black. |

**Purple Accent Rule:** The purple decorative underline appears ONLY on select card titles within this layout type — specifically when distinguishing a data-presentation card (like "Present Ownership Distribution") from adjacent cards. It is never used on slide titles, banners, or footer elements.

**When to use:** Current-state analysis slides, cap table displays, ownership/equity breakdowns, any slide that presents data and then draws a conclusion.

---

## 7. Component Library

This section provides detailed specifications for every reusable UI element in the Seedra presentation system.

---

### 7.1 Title Accent Bar

The vertical green bar that appears to the left of every inner slide title. This is the single most recognizable Seedra design element.

| Property | Value |
|---|---|
| **Shape** | Vertical rectangle (rounded ends optional, radius 3px) |
| **Width** | 6px |
| **Height** | Matches the line height of the slide title (~36–40px) |
| **Color** | Primary Green `#35CE8D` |
| **Position** | Left edge of the title zone, aligned with the left margin. 12px gap between bar and first character of the title. |
| **Presence** | Required on EVERY inner slide. Absent on cover slide. |

---

### 7.2 Standard Content Card

The primary container for organizing information on slides.

| Property | Value |
|---|---|
| **Background** | Card Gray `#F2F2F2` |
| **Border Radius** | 8px (all corners) |
| **Padding** | 24px (all sides) |
| **Border** | None by default |
| **Shadow** | None — strictly flat design |
| **Green Left-Border Accent** | Optional: 4px wide strip on the left edge, Primary Green `#35CE8D`. Used when a card contains a key insight, philosophy statement, or needs visual emphasis. The accent strip has the same border-radius as the card on its top-left and bottom-left corners. |
| **Min Height** | No minimum — card height is determined by content |
| **Spacing Between Cards** | 20px horizontal, 16px vertical |

---

### 7.3 Green-Fill Emphasis Card

A high-impact card variant used to highlight the most important content block on a slide.

| Property | Value |
|---|---|
| **Background** | Banner Green Dark `#1B5E3B` |
| **Border Radius** | 8px |
| **Padding** | 24px |
| **Text Color** | All text inside is White `#FFFFFF` |
| **Heading** | Aptos SemiBold 16–18pt, White |
| **Body Text** | Aptos Regular 11–13pt, White |
| **Bullet Arrows** | White `→` instead of green |
| **Usage Limit** | Maximum ONE green-fill card per slide. Using more than one dilutes the emphasis. |

---

### 7.4 Secondary Green Tinted Card

A softer variant using the secondary green for subtle emphasis without the weight of a dark green card.

| Property | Value |
|---|---|
| **Background** | Secondary Green `#CAEBDD` |
| **Border Radius** | 8px |
| **Padding** | 24px |
| **Text Color** | Text Black `#1A1A1A` |
| **Usage** | Used for tinted table columns, soft-emphasis areas, or when you need a card that's more prominent than gray but less intense than dark green. |

---

### 7.5 Full-Width Banner

A horizontal bar spanning the full content width, used for key messages, formulas, or summary statements.

| Property | Value |
|---|---|
| **Background** | Banner Green Dark `#1B5E3B` |
| **Height** | 50–80px (varies by content; 50px for single-line, up to 80px for two-line content or larger text) |
| **Border Radius** | 8px (when within margins) or 0px (when edge-to-edge on cover slide) |
| **Text** | Aptos SemiBold 14–16pt, White `#FFFFFF`, vertically centered |
| **Text Alignment** | Centered for formulas/key messages. Left-right split for label + value pairs (e.g., "Total Investment to Date" left, "USD 6.40m" right). |
| **Variants** | **(a) Formula Banner:** Single centered text line. **(b) Takeaway Banner:** Key insight message. **(c) Summary Banner:** Label on left + large value on right. **(d) Cover Banner:** Edge-to-edge, contains co-branding. |

---

### 7.6 Arrow Bullet Points

The standard bullet style across all Seedra presentations. Traditional dot bullets (`•`) are never used.

| Property | Value |
|---|---|
| **Character** | `→` (Unicode U+2192, rightwards arrow) |
| **Color** | Primary Green `#35CE8D` |
| **Size** | Same as the accompanying body text |
| **Spacing** | 8px gap between the arrow and the start of the bullet text |
| **Indentation** | Arrow aligns with the left padding of its parent card (24px from card edge) |
| **Nesting** | Avoid nested bullets. If sub-items are needed, use a slightly indented `→` with smaller text (10pt) or restructure as separate cards. |

---

### 7.7 Numbered Step Indicators

Used in process flows and implementation timelines to show sequential steps.

| Property | Value |
|---|---|
| **Shape** | Circle (preferred) or rounded square |
| **Diameter / Size** | 40px |
| **Background** | Primary Green `#35CE8D` |
| **Number** | Aptos Bold 16pt, White `#FFFFFF`, centered both horizontally and vertically |
| **Connecting Lines** | 2px horizontal line between each circle, color: Primary Green `#35CE8D` at 50% opacity or Chart Gray `#BDBDBD` |
| **Step Label** | Aptos Regular 10–12pt, Text Black `#1A1A1A`, centered below each circle with 8px gap |
| **Arrangement** | Evenly distributed horizontally across the content width |
| **Maximum Steps** | 5–7 per row. If more steps are needed, stack into two rows. |

---

### 7.8 Green Dot Indicator

A small colored dot used in assessment tables and criteria lists as a visual marker.

| Property | Value |
|---|---|
| **Shape** | Circle |
| **Diameter** | 8–10px |
| **Color** | Primary Green `#35CE8D` (positive/standard) or Accent Purple `#B08FCF` (secondary/alternative) |
| **Position** | Left of the criteria text, vertically centered with the text line |
| **Spacing** | 8px gap between dot and text |

---

### 7.9 Purple Decorative Underline

A thin colored line used sparingly beneath select card headings for visual distinction.

| Property | Value |
|---|---|
| **Shape** | Horizontal line / thin rectangle |
| **Height** | 2–3px |
| **Width** | ~60% of the card width, left-aligned with the heading text |
| **Color** | Accent Purple `#B08FCF` |
| **Position** | 6px below the card heading baseline |
| **Usage** | Only on specific data-presentation cards (e.g., "Present Ownership Distribution"). Never on slide titles, banners, or standard content cards. Maximum ONE purple underline per slide. |

---

### 7.10 Pie Chart

| Property | Value |
|---|---|
| **Style** | Flat, 2D — no 3D effects, no shadows, no exploded segments |
| **Primary Segment** | Primary Green `#35CE8D` |
| **Secondary Segment** | Chart Gray `#BDBDBD` |
| **Third Segment (if needed)** | Secondary Green `#CAEBDD` |
| **Fourth Segment (if needed)** | Accent Purple `#B08FCF` |
| **Labels** | Positioned adjacent to the chart (not inside segments). Aptos Regular 10pt, Text Black. Include percentage values. |
| **Size** | Typically 120–180px diameter, centered within its card |
| **Donut Variant** | Acceptable — use a 50% inner cutout. Same color rules apply. |

---

### 7.11 Large Number / KPI Display

Used for prominently displaying financial figures, totals, or key metrics.

| Property | Value |
|---|---|
| **Number** | Aptos Bold 24–32pt, Primary Green `#35CE8D` |
| **Label** | Aptos SemiBold 10–12pt, Text Dark Gray `#4A4A4A`, positioned directly above the number |
| **Position** | Bottom of a card, left-aligned or centered depending on layout |
| **Format** | Include currency symbols, commas for thousands, and appropriate decimal places (e.g., "USD 6.40m") |

---

### 7.12 Name-Value Leader Line Pairs

Used for displaying structured data like shareholder allocations, where names on the left connect to values on the right via a visual leader.

| Property | Value |
|---|---|
| **Name (Left)** | Aptos Regular 11pt, Text Black, left-aligned. Optionally underlined. |
| **Leader** | Thin dotted or dashed line connecting name to value. Color: Border Light Gray `#E0E0E0`. |
| **Value (Right)** | Aptos SemiBold 11pt, Text Black, right-aligned within the card. |
| **Vertical Spacing** | 12px between each pair |

---

### 7.13 Footer Bar

The consistent bottom element on every inner slide.

| Property | Value |
|---|---|
| **Separator Line** | 1px horizontal line spanning the full content width. Color: Border Light Gray `#E0E0E0` or Primary Green `#35CE8D` at 30% opacity. Positioned ~48px from the bottom of the slide. |
| **Left Text** | `Strictly Private and Confidential | www.seedra.com` — Aptos Regular 8–9pt, Text Dark Gray `#4A4A4A` |
| **Right Text** | Two-digit page number (e.g., `02`, `10`, `18`) — Aptos Regular 8–9pt, Text Dark Gray `#4A4A4A`, right-aligned |
| **Vertical Position** | Text sits ~16px below the separator line |
| **Cover Slide** | Footer is ABSENT on the cover slide |

---

### 7.14 Co-Branding Block (Cover Slide Only)

| Property | Value |
|---|---|
| **Container** | Part of the cover bottom banner (Banner Green Dark `#1B5E3B`) |
| **"Made for" Prefix** | Aptos Regular 12pt, White |
| **Client Name** | Aptos SemiBold 14pt, White |
| **Client Logo** | White or light-colored version, max height 36px, vertically centered in banner |
| **Arrangement** | "Made for" → Client Name → Client Logo, all left-aligned within the banner, ~60px from left edge |
| **Date** | Right-aligned in the same banner, Aptos Regular 12pt, White |

---

## 8. Spacing System

All spacing in the Seedra presentation system is based on an **8px base unit**. Every margin, padding, gap, and offset should be a multiple of this base.

| Token | Value | Usage Examples |
|---|---|---|
| `2xs` | 4px | Tight inline spacing, gap between label and subtitle |
| `xs` | 8px | Bullet arrow gap, gap between step circle and label |
| `sm` | 12px | Gap between accent bar and title text, vertical spacing between key-value pairs |
| `md` | 16px | Vertical gap between card rows, gap below headings |
| `lg` | 24px | Card internal padding (all sides), section spacing |
| `xl` | 32px | Gap between title zone and content zone |
| `2xl` | 48px | Bottom margin (above footer), major section gaps |
| `3xl` | 60px | Left and right slide margins |

### Spacing Rules

1. **Card-to-card horizontal gap:** 20px (exception to the 8px grid — this aligns with the 12-column gutter)
2. **Card-to-card vertical gap:** 16px
3. **Title to first content element:** 32px
4. **Last content element to footer separator:** 48px minimum
5. **Internal card padding:** 24px on all four sides
6. **Content within cards:** 8–16px gaps between internal elements

---

## 9. Data Visualization Guidelines

### 9.1 General Principles

- **Flat design only.** No 3D, no shadows, no bevels, no gradients.
- **Minimal ink.** Remove all unnecessary gridlines, axes, and labels. Show only what's needed to understand the data.
- **Brand colors only.** All chart elements must use colors from the defined palette (Section 3).
- **Labels over legends.** When possible, label data directly rather than using a separate legend.

### 9.2 Color Assignment Order for Chart Segments

When a chart has multiple segments, assign colors in this order:

| Segment | Color | Hex |
|---|---|---|
| 1st (primary/largest) | Primary Green | `#35CE8D` |
| 2nd | Chart Gray | `#BDBDBD` |
| 3rd | Secondary Green | `#CAEBDD` |
| 4th | Accent Purple | `#B08FCF` |
| 5th | Banner Green Dark | `#1B5E3B` |
| 6th | Text Dark Gray | `#4A4A4A` |

### 9.3 Chart Types and Styling

| Chart Type | Guidelines |
|---|---|
| **Pie / Donut** | Max 4 segments. If more, group smallest into "Other." Label with percentage + name. Flat only. |
| **Bar Chart** | Horizontal or vertical. Bar width: consistent. Gap between bars: 50% of bar width. Flat fill, no borders on bars. |
| **Table-as-Visualization** | When data is best shown as a table, use Section 11 styling. Tint emphasis columns with Secondary Green `#CAEBDD`. |
| **Process Flow** | Use Step Indicators (Section 7.7). Horizontal layout preferred. |

### 9.4 External Charts and Images

When embedding charts from external sources (e.g., Carta, PitchBook):

- Place inside a card with a thin 1px border (Border Light Gray `#E0E0E0`)
- Border-radius: 4px
- Padding: 12px around the image
- Add a source citation below the chart: Aptos Regular 8pt, Text Dark Gray, italic

---

## 10. Header & Footer Specifications

### 10.1 Header Zone (Inner Slides)

| Element | Specification |
|---|---|
| **Zone Height** | Top ~15% of the slide (~160px from top edge) |
| **Green Accent Bar** | Always present — see Section 7.1 |
| **Slide Title** | Aptos Bold 24–28pt, Primary Green `#35CE8D` (or Banner Green Dark `#1B5E3B` for emphasis). Left-aligned. |
| **Optional Subtitle** | Aptos Regular 11–13pt, Text Dark Gray `#4A4A4A`. 8px below the title. Used for descriptions, context, or slide numbering. |

### 10.2 Header Zone (Cover Slide)

| Element | Specification |
|---|---|
| **Seedra Logo** | Top-right corner, ~24px from top and right edges |
| **No accent bar** | The cover slide does not use the green accent bar |
| **Title** | Positioned in the upper-center area, Aptos Bold 36–40pt, Text Black |

### 10.3 Footer Zone (Inner Slides)

- See Section 7.13 for full footer specifications.
- Footer is **mandatory** on all inner slides and **absent** on the cover.

---

## 11. Tables & Data Display

### 11.1 Standard Table Styling

| Property | Value |
|---|---|
| **Container** | Housed inside a content card (Card Gray or White background) |
| **Header Row Background** | Transparent (inherits card background) or very subtle light fill |
| **Header Row Text** | Aptos SemiBold 11–13pt, Text Black `#1A1A1A` or Primary Green `#35CE8D` for column names |
| **Header Separator** | 2px solid line below header row, Primary Green `#35CE8D` |
| **Body Row Text** | Aptos Regular 10–12pt, Text Black `#1A1A1A` |
| **Row Separators** | 1px solid, Border Light Gray `#E0E0E0` |
| **Row Height** | 36–40px |
| **Cell Padding** | 8px vertical, 12px horizontal |
| **Total / Summary Row** | Aptos Bold, same size as body. Separated from body by a 2px top border (Text Black or Primary Green). |

### 11.2 Tinted Column Emphasis

To highlight specific columns (e.g., target metrics, key data):

- Apply Secondary Green `#CAEBDD` as the background fill for the entire column (header + all body cells)
- This creates a subtle visual emphasis without disrupting the table structure
- Maximum 2 tinted columns per table

### 11.3 Mini-Tables Inside Cards

When a table is embedded inside a card alongside other content:

- Reduce cell padding to 6px vertical, 8px horizontal
- Reduce font size to 10pt
- Remove the outer container (the card IS the container)
- Maintain the green header separator line

---

## 12. Usage Rules — Do's and Don'ts

### DO

- **DO** use Background Mint `#E0F8EE` on every slide without exception
- **DO** include the green accent bar on every inner slide title
- **DO** use arrow bullets `→` instead of standard dot bullets
- **DO** keep all design elements flat — no shadows, no gradients, no 3D
- **DO** maintain consistent card styling (8px radius, 24px padding, Card Gray)
- **DO** include the confidentiality footer on every inner slide
- **DO** use the spacing system (8px multiples) for all measurements
- **DO** limit green-fill emphasis cards to one per slide
- **DO** use the purple accent sparingly — it's a subtle detail, not a primary element
- **DO** use Primary Green `#35CE8D` as the main accent throughout

### DON'T

- **DON'T** use plain white, black, or any off-brand color as a slide background
- **DON'T** add decorative images, stock photos, icons, or clipart
- **DON'T** use standard dot bullets (`•`), numbered lists (1. 2. 3.), or dashes (`-`)
- **DON'T** apply drop shadows, glows, or gradient fills to any element
- **DON'T** use more than 2 font weights on a single slide
- **DON'T** place body text directly on the mint background without a card container (titles and subtitles are the exception)
- **DON'T** skip the footer on inner slides or add a footer to the cover slide
- **DON'T** use purple as a primary color — it is only for subtle accents
- **DON'T** use the cover layout (Layout A) for inner content slides
- **DON'T** embed unformatted screenshots or raw data without placing them in a bordered card
- **DON'T** use font sizes smaller than 8pt or larger than 40pt
- **DON'T** create more than 6 cards on a single slide — if content requires more, split into multiple slides
- **DON'T** use colors not defined in Section 3 of this document

---

## 13. Slide Construction Checklist

Use this checklist before finalizing each slide:

### Cover Slide

- [ ] Background is Background Mint `#E0F8EE`
- [ ] Seedra Ventures logo is in the top-right corner
- [ ] Title is Aptos Bold 36–40pt, Text Black
- [ ] Bottom banner is Banner Green Dark `#1B5E3B`, full width
- [ ] "Made for [Client]" + client logo + date are on the banner
- [ ] No page number on cover
- [ ] No footer confidentiality line on cover

### Inner Slides

- [ ] Background is Background Mint `#E0F8EE`
- [ ] Green accent bar (6px × 36px, Primary Green) is to the left of the slide title
- [ ] Slide title uses Aptos Bold 24–28pt in Primary Green or Banner Green Dark
- [ ] All body content is housed in cards (not floating on the background)
- [ ] Cards use Card Gray `#F2F2F2` with 8px border-radius and 24px padding
- [ ] Bullet points use green `→` arrows (not dots or dashes)
- [ ] Maximum ONE green-fill emphasis card on the slide
- [ ] Footer separator line is present
- [ ] Footer text reads: "Strictly Private and Confidential | www.seedra.com"
- [ ] Page number is right-aligned in footer
- [ ] No more than 2 font weights used on the slide
- [ ] All colors are from the approved palette (Section 3)
- [ ] Spacing follows the 8px base unit system
- [ ] Charts use flat design with brand colors only

---

## 14. Quick Reference Card

A condensed reference for rapid use during slide design.

### Colors at a Glance

```
PRIMARY GREEN       #35CE8D     ████  Main accent, headings, bullets, charts
BACKGROUND MINT     #E0F8EE     ████  Slide background (always)
SECONDARY GREEN     #CAEBDD     ████  Tinted columns, soft fills
ACCENT PURPLE       #B08FCF     ████  Decorative underlines (sparingly)
BANNER GREEN DARK   #1B5E3B     ████  Banners, dark emphasis cards
CARD GRAY           #F2F2F2     ████  Card backgrounds
TEXT BLACK           #1A1A1A     ████  Primary text
TEXT DARK GRAY      #4A4A4A     ████  Secondary text
WHITE               #FFFFFF     ████  Text on dark backgrounds
CHART GRAY          #BDBDBD     ████  Secondary chart segments
BORDER LIGHT GRAY   #E0E0E0     ████  Table borders, subtle separators
```

### Font Quick Reference

```
Font:           Aptos (fallback: Calibri → Segoe UI)
Cover Title:    36–40pt  Bold     Text Black
Slide Title:    24–28pt  Bold     Primary Green
Card Heading:   18–20pt  SemiBold Primary Green
Card Subhead:   14–16pt  Bold     Text Black
Body Text:      11–13pt  Regular  Text Black / Dark Gray
Caption/Footer: 8–9pt    Regular  Text Dark Gray
Large Number:   24–32pt  Bold     Primary Green
```

### Layout Quick Selector

| Content Type | Recommended Layout |
|---|---|
| Opening / title slide | **A — Cover Slide** |
| Two topics side by side | **B — Two-Card Content** |
| Formula + breakdown | **C — Banner + Two-Column** |
| 4+ categories overview | **D — Grid Cards** |
| Sequential process / steps | **E — Process / Steps** |
| Data table + explanation | **F — Data Table** |
| 4-quadrant analysis | **G — Four-Quadrant** |
| Principles + supporting data | **H — Principles + Data** |
| Phase/timeline comparison | **I — Dual-Phase Timeline** |
| Data + problem statement | **J — Table + Problem** |

---

*SEEDRA Presentation Design System v1.0 — Seedra Ventures — February 2026*
