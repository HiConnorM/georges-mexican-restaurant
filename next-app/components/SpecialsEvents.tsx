"use client";

import { useState, type KeyboardEvent, type ReactNode } from "react";

const INSTAGRAM_EVENTS_URL =
  "https://www.instagram.com/georgesmexicanrestaurant?fbclid=IwY2xjawQZn5JleHRuA2FlbQIxMABicmlkETFvNTVjSXpBTEszMWt3NnVZc3J0YwZhcHBfaWQQMjIyMDM5MTc4ODIwMDg5MgABHrZKAW_lYiaFpQagfbZZf2GiDLPyry-7Zlm7dKOrrriYe03JuuOoXExNQBpg_aem_2EEDQO37Z2GWnsl_UiKrng";

interface Panel {
  key: string;
  label: string;
  itemClass: string;
  nameClass: string;
  descClass: string;
  content: ReactNode;
}

const PANELS: Panel[] = [
  {
    key: "specials",
    label: "Specials",
    itemClass: "benefit-item-first",
    nameClass: "benefit-name-first",
    descClass: "benefit-item-description first-description",
    content: (
      <p>
        <strong>ALL DAY, EVERY DAY </strong>
        <br />
        2-for-1 Draft Beer
        <br />
        <br />
        <strong>MONDAY </strong> <br />
        - Happy Hour (2pm-5pm) <br />
        <br />
        <strong>TUESDAY</strong> <br />
        - Unlimited $5.50 house margaritas after 5:00pm{" "}
        <em>(with minimum purchase of $10.50)</em>
        <br />
        - Happy Hour (2pm-5pm) <br />
        <br />
        <strong>WEDNESDAY</strong>
        <br /> -<em> </em>Kids eat FREE <br />
        <em>(with purchase of adult entree) </em>
        <br />
        - 50% off bottled wine <br />
        - 2 for 1 frozen flavored margaritas
        <br />
        - Happy Hour (2pm-5pm) <br />
        <br />
        <strong>THURSDAY</strong> <br />
        - Happy Hour (2pm-5pm) <br />
        <br />
        <strong>FRIDAY</strong> <br />
        - Happy Hour (2pm-5pm) <br />
      </p>
    ),
  },
  {
    key: "events",
    label: "Events",
    itemClass: "benefit-item-second",
    nameClass: "benefit-name-second",
    descClass: "benefit-item-description second-description",
    content: (
      <p>
        Follow us on <a href="https://www.facebook.com/georgesmexicanrestaurant/">Facebook</a> or{" "}
        <a href={INSTAGRAM_EVENTS_URL}>Instagram</a> for the latest events, live music
        announcements, and pop-ups <br /> <br /> <strong>MONDAY</strong>
        <br />
        - Chess Club (4pm)
        <br />
        <br />
        <strong>TUESDAY</strong> <br />
        - Live Music (6pm-9pm) <br />
        <br />
        <strong>FRIDAY</strong> <br />
        - Live Music (6pm-9pm)
        <br />
        - Happy Hour (2pm-5pm) <br />
        <br />
        <strong>SATURDAY</strong>
        <br />
        - Live Music (6pm-9pm)
        <br />
      </p>
    ),
  },
  {
    key: "catering",
    label: "Catering",
    itemClass: "benefit-item-third",
    nameClass: "benefit-s-name-third",
    descClass: "benefit-item-description third-description",
    content: (
      <p>
        Planning a party, office lunch, or family celebration?
        <br />
        <br />
        George’s offers catering and private event options featuring our most popular dishes, fresh
        margaritas, and crowd-favorite appetizers.
        <br />
        <br />
        From small gatherings to larger celebrations, our team will help you create a delicious and
        memorable experience for your guests. <br />
        <br />
        Explore our catering menu or <a href="tel:+19856264342">contact us</a> to start planning
        your event.
      </p>
    ),
  },
];

/**
 * "Why Choose George's" — three reveal panels (specials / events / catering).
 *
 * The Webflow export drove these with IX2 hover interactions that left one
 * panel stuck open. We detach from IX2 here (no per-item data-w-id) and drive
 * the reveal ourselves: CSS handles hover on hover-capable devices, and this
 * component toggles `.is-open` for tap/keyboard. Single-open behaves like an
 * accordion so mobile doesn't turn into one long scroll. The section wrapper
 * and heading keep their data-w-id so the scroll-in fade still plays.
 */
export default function SpecialsEvents() {
  const [openKey, setOpenKey] = useState<string | null>(null);

  const toggle = (key: string) => setOpenKey((cur) => (cur === key ? null : key));

  const onKey = (e: KeyboardEvent, key: string) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      toggle(key);
    }
  };

  return (
    <section id="Why-La-Mansa" className="section without-bottom-spacing">
      <div className="w-layout-blockcontainer base-container w-container">
        <div data-w-id="e31dfb9c-90df-bde6-663e-4a88a33aa39b" className="benefits-wrapper">
          <h6 data-w-id="3a90a3cf-3bd2-f27d-d395-bb6a0340bfe2" style={{ opacity: 0 }}>
            Why Choose George&#39;s mexican restaurant?
          </h6>
          <div className="benefits-items">
            {PANELS.map((panel) => {
              const isOpen = openKey === panel.key;
              const descId = `benefit-desc-${panel.key}`;
              return (
                <div
                  key={panel.key}
                  className={`${panel.itemClass}${isOpen ? " is-open" : ""}`}
                >
                  <div
                    className={panel.nameClass}
                    role="button"
                    tabIndex={0}
                    aria-expanded={isOpen}
                    aria-controls={descId}
                    onClick={() => toggle(panel.key)}
                    onKeyDown={(e) => onKey(e, panel.key)}
                  >
                    {panel.label}
                  </div>
                  <div className="benefit-toggle-hint" aria-hidden="true">
                    ⌄
                  </div>
                  <div id={descId} className={panel.descClass}>
                    {/* Inner wrapper: the grid-row collapse animates to the
                        exact content height, so it must clip its overflow. */}
                    <div className="benefit-desc-inner">{panel.content}</div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
