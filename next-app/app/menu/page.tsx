import type { Metadata } from "next";
import Navbar from "../../components/Navbar";
import WfPageId from "../../components/WfPageId";

export const metadata: Metadata = {
  title: "Menu | George's Mexican Restaurant | Mandeville, LA",
  description: "Explore the menu at George&#x27;s Mexican Restaurant in Mandeville, LA \u2014 authentic Mexican and Honduran dishes, fresh tacos, fajitas, margaritas, and weekly specials. Order online for pickup.",
  alternates: { canonical: "https://georgesmexicanrestaurant.com/menu" },
  openGraph: {
    title: "Menu | George's Mexican Restaurant | Mandeville, LA",
    description: "Explore the menu at George&#x27;s Mexican Restaurant in Mandeville, LA \u2014 authentic Mexican and Honduran dishes, fresh tacos, fajitas, margaritas, and weekly specials. Order online for pickup.",
    type: "website",
    images: ["https://georgesmexicanrestaurant.com/images/OSWALD.png"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Menu | George's Mexican Restaurant | Mandeville, LA",
    description: "Explore the menu at George&#x27;s Mexican Restaurant in Mandeville, LA \u2014 authentic Mexican and Honduran dishes, fresh tacos, fajitas, margaritas, and weekly specials. Order online for pickup.",
  },
};

const interactionStyles = "\n      @media (max-width:767px) and (min-width:480px) {\n        html.w-mod-js:not(.w-mod-ix) [data-w-id=\"72c339bb-bf27-253a-bc02-ec28d39b98aa\"] {\n          opacity: 0;\n          display: none;\n        }\n      }\n      @media (max-width:479px) {\n        html.w-mod-js:not(.w-mod-ix) [data-w-id=\"72c339bb-bf27-253a-bc02-ec28d39b98aa\"] {\n          opacity: 0;\n          display: none;\n        }\n      }\n    ";

export default function Page() {
  return (
    <>
      <WfPageId id="6834324a9b3021f11167f7a1" />
      <style dangerouslySetInnerHTML={{ __html: interactionStyles }} />
      <Navbar currentPath="/menu" />
        <div id="Hero-section" className="section blog-grid-banner-copy">
          <div className="base-container w-container">
            <div className="banner-title-wrapper">
              <h1 data-w-id="ad054068-1324-d2ac-9761-121433eb9b65" style={{ opacity: "0" }} className="banner-title"><strong className="bold-text-2 mobile">Pick up orders available online</strong></h1>
              <p data-w-id="ad054068-1324-d2ac-9761-121433eb9b67" style={{ opacity: "0" }} className="banner-description">Explore Our Seasonal Dishes, Created with Passion and Fresh Ingredients</p>
            </div>
          </div>
        </div>
        <section>
          <div className="whitebox_l1">
            <div className="whitebox_l2 w-container">
              <h1 className="h1_main mainmenu">Menu</h1>
              <div data-w-id="72c339bb-bf27-253a-bc02-ec28d39b98a6" className="menu-filter-button">
                <div className="dropdown-text">click to choose menu</div>
              </div>
              <div data-duration-in="600" data-duration-out="100" data-current="Cantina" data-easing="ease" className="tabs w-tabs">
                <div data-w-id="72c339bb-bf27-253a-bc02-ec28d39b98aa" className="tabs-menu w-tab-menu">
                  <a data-w-tab="Appetizers" className="menu_tab w-inline-block w-tab-link">
                    <div className="h4_main menusidenav"><strong>ANTOJITOS</strong></div>
                  </a>
                  <a data-w-tab="salads &amp; bowls" id="w-node-_72c339bb-bf27-253a-bc02-ec28d39b98ae-1167f7a1" className="menu_tab w-inline-block w-tab-link">
                    <div className="h4_main menusidenav">SALADS &amp; BOWLS</div>
                  </a>
                  <a data-w-tab="Carnes" id="w-node-_72c339bb-bf27-253a-bc02-ec28d39b98b1-1167f7a1" className="menu_tab w-inline-block w-tab-link">
                    <div className="h4_main menusidenav">Carnes</div>
                  </a>
                  <a data-w-tab="Texas Style" className="menu_tab w-inline-block w-tab-link">
                    <div className="h4_main menusidenav">Texas Style</div>
                  </a>
                  <a data-w-tab="Seafood" className="menu_tab w-inline-block w-tab-link">
                    <div className="h4_main menusidenav">Seafood</div>
                  </a>
                  <a data-w-tab="Desserts" className="menu_tab w-inline-block w-tab-link">
                    <div className="h4_main menusidenav">Desserts</div>
                  </a>
                  <a data-w-tab="Enchilada&#x27;s" className="menu_tab w-inline-block w-tab-link">
                    <div id="www.hungrytapir.com-menu-food-categories-add" className="h4_main menusidenav">Enchiladas</div>
                  </a>
                  <a data-w-tab="A La Carte" className="menu_tab w-inline-block w-tab-link">
                    <div id="www.hungrytapir.com-menu-food-categories-add" className="h4_main menusidenav">A La Carte</div>
                  </a>
                  <a data-w-tab="Cantina" className="menu_tab w-inline-block w-tab-link w--current">
                    <div id="www.hungrytapir.com-menu-food-categories-add" className="h4_main menusidenav">Cantina</div>
                  </a>
                </div>
                <div className="tabs-content w-tab-content">
                  <div data-w-tab="Appetizers" className="w-tab-pane">
                    <h2 className="h2_main"><strong>ANTOJITOS</strong></h2>
                    <div className="wrapper-menukey">
                      <div className="wrapper-foodlabel"><img loading="lazy" src="/images/spicy.svg" alt="" className="key-label-img" />
                        <div className="key-label-text">spicy</div>
                      </div>
                      <div className="wrapper-foodlabel"><img loading="lazy" src="/images/glutenfree.svg" alt="" className="key-label-img" />
                        <div className="key-label-text">gluten free</div>
                      </div>
                      <div className="wrapper-foodlabel"><img loading="lazy" src="/images/onion_garlic-icon.svg" alt="onion and garlic free" className="key-label-img" />
                        <div className="key-label-text">garlic + onion free</div>
                      </div>
                      <div className="wrapper-foodlabel"><img loading="lazy" src="/images/keto-icon.svg" alt="" className="key-label-img" />
                        <div className="key-label-text">keto friendly</div>
                      </div>
                    </div>
                    <div>
                      <div className="div-block-91">
                        <div>
                          <div id="w-node-_8572956d-d45d-7003-4119-01a7b3ccd97a-1167f7a1" className="w-layout-layout quick-stack wf-layout-layout">
                            <div className="w-layout-cell">
                              <h2 className="h2_main">Cheese Nachos</h2>
                            </div>
                            <div className="w-layout-cell cell">
                              <div className="text-block-8">8.75</div>
                            </div>
                          </div>
                          <p className="body_home menuplatter"><br /></p>
                        </div>
                      </div>
                      <div className="div-block-92">
                        <div>
                          <div id="w-node-_8572956d-d45d-7003-4119-01a7b3ccd987-1167f7a1" className="w-layout-layout quick-stack wf-layout-layout">
                            <div className="w-layout-cell">
                              <h2 className="h2_main">Bean and Cheese Nachos</h2>
                            </div>
                            <div className="w-layout-cell cell">
                              <div className="text-block-8">9.50</div>
                            </div>
                          </div>
                          <p className="body_home menuplatter"><br /></p>
                        </div>
                      </div>
                      <div className="div-block-92">
                        <div>
                          <div id="w-node-_5ecd386b-d4d8-7e15-1e3f-77666e0da4e1-1167f7a1" className="w-layout-layout quick-stack wf-layout-layout">
                            <div className="w-layout-cell">
                              <h2 className="h2_main">Beef, Cheese and Guacamole Nachos</h2>
                            </div>
                            <div className="w-layout-cell cell">
                              <div className="text-block-8">10.25</div>
                            </div>
                          </div>
                          <p className="body_home menuplatter"><br /></p>
                        </div>
                      </div>
                      <div className="div-block-94">
                        <div>
                          <div id="w-node-_8572956d-d45d-7003-4119-01a7b3ccd992-1167f7a1" className="w-layout-layout quick-stack wf-layout-layout">
                            <div className="w-layout-cell">
                              <h2 className="h2_main">Deluxe Nacho Platter</h2>
                            </div>
                            <div className="w-layout-cell cell">
                              <div className="text-block-8">13.50</div>
                            </div>
                          </div>
                          <p className="body_home menuplatter">Shredded chicken, ground beef, guacamole, beans, sour cream<br />and cheese.</p>
                        </div>
                      </div>
                      <div className="div-block-93">
                        <div>
                          <div id="w-node-_8572956d-d45d-7003-4119-01a7b3ccd99d-1167f7a1" className="w-layout-layout quick-stack wf-layout-layout">
                            <div className="w-layout-cell">
                              <h2 className="h2_main">Nacho Macho</h2>
                            </div>
                            <div className="w-layout-cell cell">
                              <div className="text-block-8">16.00</div>
                            </div>
                          </div>
                          <p className="body_home menuplatter">Ground beef, yellow and white cheeses, lettuce, pico de gallo, guacamole and<br />sour cream.</p>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div id="w-node-_8572956d-d45d-7003-4119-01a7b3ccd9aa-1167f7a1" className="w-layout-layout quick-stack wf-layout-layout">
                            <div className="w-layout-cell">
                              <h2 className="h2_main">Nachos Adobados</h2>
                            </div>
                            <div className="w-layout-cell cell">
                              <div className="text-block-8">14.75</div>
                            </div>
                          </div>
                          <p className="body_home menuplatter">Beans, cheese, and broiled steak strips, with adobados sauce, guacamole<br />and sour cream.<br />Half order nachos adobados 12.50</p>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div id="w-node-_8572956d-d45d-7003-4119-01a7b3ccd9b7-1167f7a1" className="w-layout-layout quick-stack wf-layout-layout">
                            <div className="w-layout-cell">
                              <h2 className="h2_main">Ito’s Nachos</h2>
                            </div>
                            <div className="w-layout-cell cell">
                              <div className="text-block-8">12.50</div>
                            </div>
                          </div>
                          <p className="body_home menuplatter">Spicy hot Mexican sausage, beans<br />and cheese</p>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div id="w-node-_8572956d-d45d-7003-4119-01a7b3ccd9c4-1167f7a1" className="w-layout-layout quick-stack wf-layout-layout">
                            <div className="w-layout-cell">
                              <h2 className="h2_main">Messy Nachos</h2>
                            </div>
                            <div className="w-layout-cell cell">
                              <div className="text-block-8">19.50</div>
                            </div>
                          </div>
                          <p className="body_home menuplatter">Corn chips, fresh ground meat, refried beans, queso, lettuce, tomato and<br />jalapeño with sour creamh ranchero sauce. Choice of lettuce, guacamole &amp; sour cream, <br />OR rice &amp; beans.<br /><br /></p>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div id="w-node-_8572956d-d45d-7003-4119-01a7b3ccd9d1-1167f7a1" className="w-layout-layout quick-stack wf-layout-layout">
                            <div className="w-layout-cell">
                              <h2 className="h2_main">Nachos de Georges</h2>
                            </div>
                            <div className="w-layout-cell cell">
                              <div className="text-block-8">15.50</div>
                            </div>
                          </div>
                          <p className="body_home menuplatter">Beans, cheese, broiled steak strips topped with guacamole and sour cream,<br />topped with jalapeño.<br />Half Order 12.50</p>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div id="w-node-_8572956d-d45d-7003-4119-01a7b3ccd9de-1167f7a1" className="w-layout-layout quick-stack wf-layout-layout">
                            <div className="w-layout-cell">
                              <h2 className="h2_main">Queso Fundido</h2>
                            </div>
                            <div className="w-layout-cell cell">
                              <div className="text-block-8">16.25</div>
                            </div>
                          </div>
                          <p className="body_home menuplatter">White Mexican cheese melted with<br />choice of mushroom, poblano or Chorizo (Pork Sausage). Served with hot<br />tortillas and spicy Pico de Gallo.<br /></p>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div id="w-node-_8572956d-d45d-7003-4119-01a7b3ccd9eb-1167f7a1" className="w-layout-layout quick-stack wf-layout-layout">
                            <div className="w-layout-cell">
                              <h2 className="h2_main">Quesadilla de Crema</h2>
                            </div>
                            <div className="w-layout-cell cell">
                              <div className="text-block-8">13.25</div>
                            </div>
                          </div>
                          <p className="body_home menuplatter">An extra large flour tortilla stuffed with cheese served with guacamole and<br />sour cream.<br />SPINACH 14.75<br />Stuffed with Shredded Chicken or<br />Ground Beef 15.75<br />With Chicken or Beef Fajita<br />(Stuffed with cheese, onion &amp; bell<br />pepper) 16.25<br />With Shrimp<br />(Stuffed with cheese, onion &amp; bell<br />pepper) 19.25</p>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div id="w-node-_8572956d-d45d-7003-4119-01a7b3ccd9f8-1167f7a1" className="w-layout-layout quick-stack wf-layout-layout">
                            <div className="w-layout-cell">
                              <h2 className="h2_main">Mexican Pizza</h2>
                            </div>
                            <div className="w-layout-cell cell">
                              <div className="text-block-8">12.75</div>
                            </div>
                          </div>
                          <p className="body_home menuplatter">Our version of Pizza. Made with flour tortillas, ground beef, cheese, Pico de<br />Gallo served with guacamole.<br />Small 12.75<br />Large 20.75<br />Large with Chicken or Beef Fajita<br />23.75<br />Large with Shrimp 25.95</p>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div id="w-node-_8572956d-d45d-7003-4119-01a7b3ccda05-1167f7a1" className="w-layout-layout quick-stack wf-layout-layout">
                            <div className="w-layout-cell">
                              <h2 className="h2_main">Bean dip</h2>
                            </div>
                            <div className="w-layout-cell cell">
                              <div className="text-block-8">11.00</div>
                            </div>
                          </div>
                          <p className="body_home menuplatter">A blend of three great ingredients: beans, chile con carne &amp; our smooth<br />melted cheese. Served with flour chips.</p>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div id="w-node-_8572956d-d45d-7003-4119-01a7b3ccda12-1167f7a1" className="w-layout-layout quick-stack wf-layout-layout">
                            <div className="w-layout-cell">
                              <h2 className="h2_main">Chile Con Queso dip</h2>
                            </div>
                            <div className="w-layout-cell cell">
                              <div className="text-block-8">12.75</div>
                            </div>
                          </div>
                          <p className="body_home menuplatter">A delicious dip made of smooth melted cheese and secret chile sauce. Choice<br />of white or yellow cheese.</p>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div id="w-node-_8572956d-d45d-7003-4119-01a7b3ccda1f-1167f7a1" className="w-layout-layout quick-stack wf-layout-layout">
                            <div className="w-layout-cell">
                              <h2 className="h2_main">Guacamole dip</h2>
                            </div>
                            <div className="w-layout-cell cell">
                              <div className="text-block-8">12.25</div>
                            </div>
                          </div>
                          <p className="body_home menuplatter">Fresh Mexican style avocado dip made with onions and spices. Served with<br />flour chips.</p>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div id="w-node-_8572956d-d45d-7003-4119-01a7b3ccda2c-1167f7a1" className="w-layout-layout quick-stack wf-layout-layout">
                            <div className="w-layout-cell">
                              <h2 className="h2_main">Mexican Cheese Fries</h2>
                            </div>
                            <div className="w-layout-cell cell">
                              <div className="text-block-8">11.25</div>
                            </div>
                          </div>
                          <p className="body_home menuplatter">Fresh avocado mixed with fresh lime juice, red onions, black pepper, salt and<br />olive oil. We blend all the ingredients together to create a perfect dip right in<br />front of your eyes! Buen Provecho.<br /></p>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div id="w-node-_8572956d-d45d-7003-4119-01a7b3ccda39-1167f7a1" className="w-layout-layout quick-stack wf-layout-layout">
                            <div className="w-layout-cell">
                              <h2 className="h2_main">George’s Mexican Sampler</h2>
                            </div>
                            <div className="w-layout-cell cell">
                              <div className="text-block-8">18.25</div>
                            </div>
                          </div>
                          <p className="body_home menuplatter">A mix of our fabulous appetizers: Deluxe Nachos, taquitos, cheese quesadilla,<br />one stuffed jalapeño pepper, and our delicious smooth melted chile con<br />queso.</p>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div id="w-node-_1b631037-39b7-8864-5e20-7e9f1cd43b9e-1167f7a1" className="w-layout-layout quick-stack wf-layout-layout">
                            <div className="w-layout-cell">
                              <h2 className="h2_main">Chicken Wings</h2>
                            </div>
                            <div className="w-layout-cell cell">
                              <div className="text-block-8">18.00</div>
                            </div>
                          </div>
                          <p className="body_home menuplatter">Our own version of wings. Deep fried to perfection and sautéed with butter.<br />Served with Pico de Gallo. Spicy or Mild.<br />You must try it!</p>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div id="w-node-f7f52d87-a15d-0a04-a461-d5c565ffa0a0-1167f7a1" className="w-layout-layout quick-stack wf-layout-layout">
                            <div className="w-layout-cell">
                              <h2 className="h2_main">Ceviche Appetizer</h2>
                            </div>
                            <div className="w-layout-cell cell">
                              <div className="text-block-8">14.50</div>
                            </div>
                          </div>
                          <p className="body_home menuplatter">Cubes of fresh tilapia marinated with fresh red onions, tomatoes and cilantro<br />covered with fresh lime and lemon juice served with slices of avocado &amp; our<br />famous homemade chips.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-w-tab="salads &amp; bowls" className="w-tab-pane">
                    <h2 className="h2_main menu-items">salads &amp; bowls</h2>
                    <div className="wrapper-menukey">
                      <div className="wrapper-foodlabel"><img loading="lazy" src="/images/spicy.svg" alt="" className="key-label-img" />
                        <div className="key-label-text">spicy</div>
                      </div>
                      <div className="wrapper-foodlabel"><img loading="lazy" src="/images/glutenfree.svg" alt="" className="key-label-img" />
                        <div className="key-label-text">gluten free</div>
                      </div>
                      <div className="wrapper-foodlabel"><img loading="lazy" src="/images/onion_garlic-icon.svg" alt="onion and garlic free" className="key-label-img" />
                        <div className="key-label-text">garlic + onion free</div>
                      </div>
                      <div className="wrapper-foodlabel"><img loading="lazy" src="/images/keto-icon.svg" alt="" className="key-label-img" />
                        <div className="key-label-text">keto friendly</div>
                      </div>
                    </div>
                    <div>
                      <div className="div-block-91">
                        <div>
                          <div id="w-node-_96366d89-0fc0-55d7-5cf5-dd4ca15fd56e-1167f7a1" className="w-layout-layout quick-stack wf-layout-layout">
                            <div className="w-layout-cell">
                              <h2 className="h2_main">TACO SALAD“CAN-CUN”</h2>
                            </div>
                            <div className="w-layout-cell cell">
                              <div className="text-block-8">16.25</div>
                            </div>
                          </div>
                          <p className="body_home menuplatter">A tortilla shell filled with crisp lettuce,fresh tomatoes, and shredded cheese topped with sautéed bell peppers and onions, sliced avocado or guacamole,and sour cream. Choice of taco meat,Shrimp, shredded chicken, or seasoned chicken.<br />‍</p>
                        </div>
                      </div>
                      <div className="div-block-92">
                        <div>
                          <div id="w-node-_96366d89-0fc0-55d7-5cf5-dd4ca15fd57b-1167f7a1" className="w-layout-layout quick-stack wf-layout-layout">
                            <div className="w-layout-cell">
                              <h2 className="h2_main">SOPA DE LIMA</h2>
                            </div>
                            <div className="w-layout-cell cell">
                              <div className="text-block-8">15.95</div>
                            </div>
                          </div>
                          <p className="body_home menuplatter">A delicious Mexican soup that consists of chicken broth topped with shredded chicken and<br />vegetables. Served with rice, avocado, cilantro, onions, and our final touch of a<br />sliced lime.</p>
                        </div>
                      </div>
                      <div className="div-block-94">
                        <div>
                          <div id="w-node-_96366d89-0fc0-55d7-5cf5-dd4ca15fd586-1167f7a1" className="w-layout-layout quick-stack wf-layout-layout">
                            <div className="w-layout-cell">
                              <h2 className="h2_main">TORTILLA SOUP</h2>
                            </div>
                            <div className="w-layout-cell cell">
                              <div className="text-block-8">13.75</div>
                            </div>
                          </div>
                          <p className="body_home menuplatter"><br /></p>
                        </div>
                      </div>
                      <div className="div-block-93">
                        <div>
                          <div id="w-node-_96366d89-0fc0-55d7-5cf5-dd4ca15fd591-1167f7a1" className="w-layout-layout quick-stack wf-layout-layout">
                            <div className="w-layout-cell">
                              <h2 className="h2_main">TACO CAESAR SALAD</h2>
                            </div>
                            <div className="w-layout-cell cell">
                              <div className="text-block-8">16.50</div>
                            </div>
                          </div>
                          <p className="body_home menuplatter">A tortilla shell filled with eight ounces of sautéed shrimp, bell peppers and onions, romaine lettuce, fresh tomatoes<br />and diced avocado, topped with parmesan cheese.</p>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div id="w-node-_96366d89-0fc0-55d7-5cf5-dd4ca15fd59e-1167f7a1" className="w-layout-layout quick-stack wf-layout-layout">
                            <div className="w-layout-cell">
                              <h2 className="h2_main">POZOLE SOUP</h2>
                            </div>
                            <div className="w-layout-cell cell">
                              <div className="text-block-8">16.25</div>
                            </div>
                          </div>
                          <p className="body_home menuplatter">Two beef tacos, one beef enchilada, one tamale with chile con caA delicious Mexican soup that consists<br />of pork, hominy, tomatoes and vegetables. Served with garnishes.rne, rice &amp; beans.<br /><br /></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-w-tab="Carnes" className="w-tab-pane">
                    <h2 className="h2_main">mains</h2>
                    <div className="wrapper-menukey">
                      <div className="wrapper-foodlabel"><img loading="lazy" src="/images/spicy.svg" alt="" className="key-label-img" />
                        <div className="key-label-text">spicy</div>
                      </div>
                      <div className="wrapper-foodlabel"><img loading="lazy" src="/images/glutenfree.svg" alt="" className="key-label-img" />
                        <div className="key-label-text">gluten free</div>
                      </div>
                      <div className="wrapper-foodlabel"><img loading="lazy" src="/images/onion_garlic-icon.svg" alt="onion and garlic free" className="key-label-img" />
                        <div className="key-label-text">garlic + onion free</div>
                      </div>
                      <div className="wrapper-foodlabel"><img loading="lazy" src="/images/keto-icon.svg" alt="" className="key-label-img" />
                        <div className="key-label-text">keto friendly</div>
                      </div>
                    </div>
                    <div>
                      <div className="div-block-91">
                        <div>
                          <div id="w-node-_3000adc7-5173-01a5-c34a-c63a0d76676e-1167f7a1" className="w-layout-layout quick-stack wf-layout-layout">
                            <div className="w-layout-cell">
                              <h2 className="h2_main">HONDURAN PORK LOIN</h2>
                            </div>
                            <div className="w-layout-cell cell">
                              <div className="text-block-8">21.75</div>
                            </div>
                          </div>
                          <p className="body_home menuplatter">A delightful pork slow baked with our fresh produce and spices for a perfect flavor and tenderness. Served with rice<br />and Pico de Gallo over a bed of lettuce.</p>
                        </div>
                      </div>
                      <div className="div-block-92">
                        <div>
                          <div id="w-node-_3000adc7-5173-01a5-c34a-c63a0d76677b-1167f7a1" className="w-layout-layout quick-stack wf-layout-layout">
                            <div className="w-layout-cell">
                              <h2 className="h2_main">TACOS AL CARBON</h2>
                            </div>
                            <div className="w-layout-cell cell">
                              <div className="text-block-8">21.75</div>
                            </div>
                          </div>
                          <p className="body_home menuplatter">Tender cuts of charcoal-broiled beef in a Especial sauce wrapped in flour tortillas, served with refried beans and<br />rice, guacamole, and Pico de Gallo.</p>
                        </div>
                      </div>
                      <div className="div-block-94">
                        <div>
                          <div id="w-node-_3000adc7-5173-01a5-c34a-c63a0d766786-1167f7a1" className="w-layout-layout quick-stack wf-layout-layout">
                            <div className="w-layout-cell">
                              <h2 className="h2_main">CARNE ASADA</h2>
                            </div>
                            <div className="w-layout-cell cell">
                              <div className="text-block-8">22.25</div>
                            </div>
                          </div>
                          <p className="body_home menuplatter">Charcoal-broiled beef specially seasoned, served on a sizzling plate. <br />Served with onions, cilantro, limes, guacamole, lettuce, and Pico de Gallo,<br />refried beans, and Mexican rice. With flour or corn tortillas.</p>
                        </div>
                      </div>
                      <div className="div-block-93">
                        <div>
                          <div id="w-node-_3000adc7-5173-01a5-c34a-c63a0d766791-1167f7a1" className="w-layout-layout quick-stack wf-layout-layout">
                            <div className="w-layout-cell">
                              <h2 className="h2_main">SURF-N-TURF</h2>
                            </div>
                            <div className="w-layout-cell cell">
                              <div className="text-block-8">29.95</div>
                            </div>
                          </div>
                          <p className="body_home menuplatter">Truly a dish that makes the taste buds come alive!! An island of lean, mouth- watering filet mignon, topped with an<br />exquisite blend of chimichurri sauce. Surrounded by waves of fresh lettuce, sliced avocados &amp; tomatoes. Succulent,<br />jumbo shrimp lie atop to complete the perfection of this dish.</p>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div id="w-node-_3000adc7-5173-01a5-c34a-c63a0d76679e-1167f7a1" className="w-layout-layout quick-stack wf-layout-layout">
                            <div className="w-layout-cell">
                              <h2 className="h2_main">PUNTAS DE FILETE A LA MEXICANA</h2>
                            </div>
                            <div className="w-layout-cell cell">
                              <div className="text-block-8">22.25</div>
                            </div>
                          </div>
                          <p className="body_home menuplatter">Filet Mignon tips, (sautéed in our traditional Mexican sauce with bell peppers, onions and tomatoes), we<br />serve this exquisite plate with our famous refried beans and rice, and our<br />homemade guacamole salad.</p>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div id="w-node-_3000adc7-5173-01a5-c34a-c63a0d7667ab-1167f7a1" className="w-layout-layout quick-stack wf-layout-layout">
                            <div className="w-layout-cell">
                              <h2 className="h2_main">FILETE MEXICO</h2>
                            </div>
                            <div className="w-layout-cell cell">
                              <div className="text-block-8">24.25</div>
                            </div>
                          </div>
                          <p className="body_home menuplatter">Filet Mignon butterfly cut, topped with chimichurri, served with cheese<br />enchilada topped with ranchero sauce,<br />French fries and guacamole.</p>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div id="w-node-_3000adc7-5173-01a5-c34a-c63a0d7667b8-1167f7a1" className="w-layout-layout quick-stack wf-layout-layout">
                            <div className="w-layout-cell">
                              <h2 className="h2_main">TACOS A LA MEXICANA</h2>
                            </div>
                            <div className="w-layout-cell cell">
                              <div className="text-block-8">22.50</div>
                            </div>
                          </div>
                          <p className="body_home menuplatter">Irresistible cuts of tender charbroiled meat, topped with perfectly ripened avocados, crisp onions, served with<br />Mexican rice &amp; refried beans.</p>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div id="w-node-_3000adc7-5173-01a5-c34a-c63a0d7667c5-1167f7a1" className="w-layout-layout quick-stack wf-layout-layout">
                            <div className="w-layout-cell">
                              <h2 className="h2_main">CARNITAS</h2>
                            </div>
                            <div className="w-layout-cell cell">
                              <div className="text-block-8">20.25</div>
                            </div>
                          </div>
                          <p className="body_home menuplatter">Seasoned pork slowly cooked until juicy and tender, topped with fresh red onions &amp; cilantro. Served with<br />our special guacamole sauce.<br />5 to an order.e, sour cream, and white cheese. Topped with queso or chile sauce.<br /><br /></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-w-tab="Texas Style" className="tab-pane-texas-style w-tab-pane">
                    <h2 className="h2_main">Texas Style</h2>
                    <div className="wrapper-menukey">
                      <div className="wrapper-foodlabel"><img loading="lazy" src="/images/spicy.svg" alt="" className="key-label-img" />
                        <div className="key-label-text">spicy</div>
                      </div>
                      <div className="wrapper-foodlabel"><img loading="lazy" src="/images/glutenfree.svg" alt="" className="key-label-img" />
                        <div className="key-label-text">gluten free</div>
                      </div>
                      <div className="wrapper-foodlabel"><img loading="lazy" src="/images/onion_garlic-icon.svg" alt="onion and garlic free" className="key-label-img" />
                        <div className="key-label-text">garlic + onion free</div>
                      </div>
                      <div className="wrapper-foodlabel"><img loading="lazy" src="/images/keto-icon.svg" alt="" className="key-label-img" />
                        <div className="key-label-text">keto friendly</div>
                      </div>
                    </div>
                    <div>
                      <div className="div-block-91">
                        <div>
                          <div id="w-node-_7eb88d04-c33a-5c36-dd1b-401a9c75c224-1167f7a1" className="w-layout-layout quick-stack wf-layout-layout">
                            <div className="w-layout-cell">
                              <h2 className="h2_main">Special Mexican Dinner</h2>
                            </div>
                            <div className="w-layout-cell cell">
                              <div className="text-block-8">15.25</div>
                            </div>
                          </div>
                          <p className="body_home menuplatter">One beef taco, one beef enchilada, one tamale with chile con carne, guacamole salad, chile con queso tostada, rice &amp; beans.<br />‍</p>
                        </div>
                      </div>
                      <div className="div-block-92">
                        <div>
                          <div id="w-node-_86d4370c-e69d-0b7f-ee3e-e3162145aacc-1167f7a1" className="w-layout-layout quick-stack wf-layout-layout">
                            <div className="w-layout-cell">
                              <h2 className="h2_main">Poblana</h2>
                            </div>
                            <div className="w-layout-cell cell">
                              <div className="text-block-8">15.25</div>
                            </div>
                          </div>
                          <p className="body_home menuplatter">One beef taco, one cheese taco, one beef enchilada, tostada with chile con queso, rice &amp; beans.</p>
                        </div>
                      </div>
                      <div className="div-block-94">
                        <div>
                          <div id="w-node-fe843cb0-cabf-7d4b-df1b-3a8f04b5a6b3-1167f7a1" className="w-layout-layout quick-stack wf-layout-layout">
                            <div className="w-layout-cell">
                              <h2 className="h2_main">Monterrey</h2>
                            </div>
                            <div className="w-layout-cell cell">
                              <div className="text-block-8">15.25</div>
                            </div>
                          </div>
                          <p className="body_home menuplatter">One chalupa, one tostada with guacamole and one tostada with chile con queso, rice &amp; beans.</p>
                        </div>
                      </div>
                      <div className="div-block-93">
                        <div>
                          <div id="w-node-_7096a14f-f178-3a80-71c8-8de19babe0c9-1167f7a1" className="w-layout-layout quick-stack wf-layout-layout">
                            <div className="w-layout-cell">
                              <h2 className="h2_main">Tamale Plate</h2>
                            </div>
                            <div className="w-layout-cell cell">
                              <div className="text-block-8">15.25</div>
                            </div>
                          </div>
                          <p className="body_home menuplatter">Tamales with chile con carne on top. Served with rice.<br /><br /></p>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div id="w-node-c51d6766-8a05-8a91-3503-9e007465f3cc-1167f7a1" className="w-layout-layout quick-stack wf-layout-layout">
                            <div className="w-layout-cell">
                              <h2 className="h2_main">Acapulco</h2>
                            </div>
                            <div className="w-layout-cell cell">
                              <div className="text-block-8">15.25</div>
                            </div>
                          </div>
                          <p className="body_home menuplatter">Two beef tacos, one beef enchilada, one tamale with chile con carne, rice &amp; beans.<br /><br /></p>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div id="w-node-_100e6ea2-ec90-d4bc-2e3e-39681dddca97-1167f7a1" className="w-layout-layout quick-stack wf-layout-layout">
                            <div className="w-layout-cell">
                              <h2 className="h2_main">South of the Border</h2>
                            </div>
                            <div className="w-layout-cell cell">
                              <div className="text-block-8">20.25</div>
                            </div>
                          </div>
                          <p className="body_home menuplatter">Juicy chicken breast with sautéed mushrooms, black beans, smothered with Monterey Jack cheese. Served with Mexican rice &amp; Pico de Gallo.<br /><br /></p>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div id="w-node-_7793471c-7bca-8471-35ab-27e83acad150-1167f7a1" className="w-layout-layout quick-stack wf-layout-layout">
                            <div className="w-layout-cell">
                              <h2 className="h2_main">Outrageous “Chimichanga”</h2>
                            </div>
                            <div className="w-layout-cell cell">
                              <div className="text-block-8">15.75</div>
                            </div>
                          </div>
                          <p className="body_home menuplatter">Stuffed with ground beef or shredded chicken, topped with ranchero sauce. Choice of lettuce, guacamole &amp; sour cream, OR rice &amp; beans.<br /><br /></p>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div id="w-node-_4a2a4014-13ed-4600-e5f9-34b3448c02fa-1167f7a1" className="w-layout-layout quick-stack wf-layout-layout">
                            <div className="w-layout-cell">
                              <h2 className="h2_main">Sierra’s X-Big Burrito</h2>
                            </div>
                            <div className="w-layout-cell cell">
                              <div className="text-block-8">20.50</div>
                            </div>
                          </div>
                          <p className="body_home menuplatter">Giant burrito stuffed with ground beef, shredded chicken, beans, guacamole, sour cream, and white cheese. Topped with queso or chile sauce.<br /><br /></p>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div id="w-node-_703e8728-1269-34cb-5aab-e40a5e879992-1167f7a1" className="w-layout-layout quick-stack wf-layout-layout">
                            <div className="w-layout-cell">
                              <h2 className="h2_main">Mexican Hamburger</h2>
                            </div>
                            <div className="w-layout-cell cell">
                              <div className="text-block-8">13.50</div>
                            </div>
                          </div>
                          <p className="body_home menuplatter">8oz Angus Beef dressed to perfection, served with fries and cheese.<br /><br /></p>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div id="w-node-da4d0ecb-ea53-ab3a-2110-34be0c7ffcce-1167f7a1" className="w-layout-layout quick-stack wf-layout-layout">
                            <div className="w-layout-cell">
                              <h2 className="h2_main">Flautas</h2>
                            </div>
                            <div className="w-layout-cell cell">
                              <div className="text-block-8">15.25</div>
                            </div>
                          </div>
                          <p className="body_home menuplatter">Three tightly rolled oversized corn tortillas, filled with ground beef or shredded chicken. Served with guacamole, sour cream, Mexican rice, and refried beans.<br />‍</p>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div id="w-node-cd89661a-254b-a9d9-9334-f1fb267d3a97-1167f7a1" className="w-layout-layout quick-stack wf-layout-layout">
                            <div className="w-layout-cell">
                              <h2 className="h2_main">Fiesta Chalupas</h2>
                            </div>
                            <div className="w-layout-cell cell">
                              <div className="text-block-8">15.25</div>
                            </div>
                          </div>
                          <p className="body_home menuplatter">Two fried corn tortillas topped with beans, cheese, chicken, lettuce, tomatoes, guacamole, sour cream, and chile con queso.<br />‍</p>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div id="w-node-_6c44be1d-a89b-55b1-fba4-1fb0f90bc5cc-1167f7a1" className="w-layout-layout quick-stack wf-layout-layout">
                            <div className="w-layout-cell">
                              <h2 className="h2_main">Burritos</h2>
                            </div>
                            <div className="w-layout-cell cell">
                              <div className="text-block-8">15.25</div>
                            </div>
                          </div>
                          <p className="body_home menuplatter">Three flour tortillas stuffed with beans, cheese, ground beef, or shredded chicken. Covered with chile con queso or chile con carne, served with rice &amp; beans.<br /><br /></p>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div id="w-node-_28062edc-5ad4-47b2-3580-e5ac69d39c78-1167f7a1" className="w-layout-layout quick-stack wf-layout-layout">
                            <div className="w-layout-cell">
                              <h2 className="h2_main">Pollo en Adobado</h2>
                            </div>
                            <div className="w-layout-cell cell">
                              <div className="text-block-8">19.50</div>
                            </div>
                          </div>
                          <p className="body_home menuplatter">Breast of chicken sliced and cooked in red chile sauce. Served with Mexican rice, guacamole, and sour cream.<br /><br /></p>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div id="w-node-dd47846f-df84-68f6-47ee-6816c3a2c9d4-1167f7a1" className="w-layout-layout quick-stack wf-layout-layout">
                            <div className="w-layout-cell">
                              <h2 className="h2_main">Breast of Chicken</h2>
                            </div>
                            <div className="w-layout-cell cell">
                              <div className="text-block-8">20.50</div>
                            </div>
                          </div>
                          <p className="body_home menuplatter">Chicken breast baked in butter sauce with lemon juice, topped with peppers, onions, cilantro &amp; tomatoes. Served with rice, beans, and guacamole salad.<br />‍</p>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div id="w-node-_63e07bd6-4c02-181d-0901-1c7283425275-1167f7a1" className="w-layout-layout quick-stack wf-layout-layout">
                            <div className="w-layout-cell">
                              <h2 className="h2_main">Pollo Mole</h2>
                            </div>
                            <div className="w-layout-cell cell">
                              <div className="text-block-8">20.50</div>
                            </div>
                          </div>
                          <p className="body_home menuplatter">Chicken breast prepared with mole sauce made from chiles, tomatillos, dried fruits, sugar, and spices. Served with Mexican rice &amp; Pico de Gallo.<br /><br /></p>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div id="w-node-ab7e55c7-46b2-2bf6-4274-c1618e74d796-1167f7a1" className="w-layout-layout quick-stack wf-layout-layout">
                            <div className="w-layout-cell">
                              <h2 className="h2_main">Chile Relleno</h2>
                            </div>
                            <div className="w-layout-cell cell">
                              <div className="text-block-8">20.75</div>
                            </div>
                          </div>
                          <p className="body_home menuplatter">Poblano peppers stuffed with beef, chicken, or cheese. Cooked in egg batter, topped with cheese and homemade sauce. Served with guacamole, refried beans &amp; Mexican rice.<br /><br /></p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-w-tab="Seafood" className="w-tab-pane">
                    <h2 className="h2_main">mariscos</h2>
                    <div className="wrapper-menukey">
                      <div className="wrapper-foodlabel"><img loading="lazy" src="/images/spicy.svg" alt="" className="key-label-img" />
                        <div className="key-label-text">spicy</div>
                      </div>
                      <div className="wrapper-foodlabel"><img loading="lazy" src="/images/glutenfree.svg" alt="" className="key-label-img" />
                        <div className="key-label-text">gluten free</div>
                      </div>
                      <div className="wrapper-foodlabel"><img loading="lazy" src="/images/onion_garlic-icon.svg" alt="onion and garlic free" className="key-label-img" />
                        <div className="key-label-text">garlic + onion free</div>
                      </div>
                      <div className="wrapper-foodlabel"><img loading="lazy" src="/images/keto-icon.svg" alt="" className="key-label-img" />
                        <div className="key-label-text">keto friendly</div>
                      </div>
                    </div>
                    <div>
                      <div className="div-block-91">
                        <div>
                          <div id="w-node-_945082ec-4a80-ec19-2b71-929e94c5e382-1167f7a1" className="w-layout-layout quick-stack wf-layout-layout">
                            <div className="w-layout-cell">
                              <h2 className="h2_main">SHRIMP A LA MEXICANA</h2>
                            </div>
                            <div className="w-layout-cell cell">
                              <div className="text-block-8">22.75</div>
                            </div>
                          </div>
                          <p className="body_home menuplatter">Butterfly shrimp sautéed with fresh tomatoes, onions, bell peppers served<br />with beans, rice and guacamole.</p>
                        </div>
                      </div>
                      <div className="div-block-92">
                        <div>
                          <div id="w-node-_945082ec-4a80-ec19-2b71-929e94c5e38f-1167f7a1" className="w-layout-layout quick-stack wf-layout-layout">
                            <div className="w-layout-cell">
                              <h2 className="h2_main">SHRIMP A LA VERA CRUZ</h2>
                            </div>
                            <div className="w-layout-cell cell">
                              <div className="text-block-8">22.75</div>
                            </div>
                          </div>
                          <p className="body_home menuplatter">Butterfly shrimp sautéed in our adobado sauce. Served on a bed of rice, guacamole and grilled linares<br />cheese.</p>
                        </div>
                      </div>
                      <div className="div-block-94">
                        <div>
                          <div id="w-node-_945082ec-4a80-ec19-2b71-929e94c5e39a-1167f7a1" className="w-layout-layout quick-stack wf-layout-layout">
                            <div className="w-layout-cell">
                              <h2 className="h2_main">SHRIMP QUESO FUNDIDO</h2>
                            </div>
                            <div className="w-layout-cell cell">
                              <div className="text-block-8">22.75</div>
                            </div>
                          </div>
                          <p className="body_home menuplatter">White Mexican cheese melted to perfection, topped with our signature sizzling broiled shrimp, sautéed onions, bell peppers and tomatoes. Served with hot flour tortillas and our fabulous<br />Pico de Gallo.</p>
                        </div>
                      </div>
                      <div className="div-block-93">
                        <div>
                          <div id="w-node-_945082ec-4a80-ec19-2b71-929e94c5e3a5-1167f7a1" className="w-layout-layout quick-stack wf-layout-layout">
                            <div className="w-layout-cell">
                              <h2 className="h2_main">FISH TACOS</h2>
                            </div>
                            <div className="w-layout-cell cell">
                              <div className="text-block-8">22.75</div>
                            </div>
                          </div>
                          <p className="body_home menuplatter">(3 to an order) <br />Grilled redfish diagonally cut topped with cabbage salad &amp; Pico de Gallo, wrapped in corn tortilla. 3 to an order<br />served with rice &amp; black beans.</p>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div id="w-node-_945082ec-4a80-ec19-2b71-929e94c5e3bf-1167f7a1" className="w-layout-layout quick-stack wf-layout-layout">
                            <div className="w-layout-cell">
                              <h2 className="h2_main">TEQUILA TUNA</h2>
                            </div>
                            <div className="w-layout-cell cell">
                              <div className="text-block-8">22.75</div>
                            </div>
                          </div>
                          <p className="body_home menuplatter">George’s special creation, which combines a taste of the sea with Mexican<br />authenticity! A fresh tuna steak, seared to your liking, in fine Patron tequila &amp; topped with a blend of tri-colored bell peppers,<br />sweet onions &amp; poblano peppers. Finally, LA crawfish lie atop this mountain of festive color, creating an aroma that will appeal<br />to all senses. Served with homemade Mexican rice &amp; a Mexican salad.<br />‍</p>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div id="w-node-_945082ec-4a80-ec19-2b71-929e94c5e3cc-1167f7a1" className="w-layout-layout quick-stack wf-layout-layout">
                            <div className="w-layout-cell">
                              <h2 className="h2_main">SHRIMP FIERY GARLIC</h2>
                            </div>
                            <div className="w-layout-cell cell">
                              <div className="text-block-8">22.75</div>
                            </div>
                          </div>
                          <p className="body_home menuplatter">Eight ounces of fresh shrimp sautéed with minced garlic, Chile Ancho, and our blend of secret spices. <br />This unique plate is served on top of Mexican rice, guacamole, and grilled linares cheese<br />to die for.<br /><br /></p>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div id="w-node-_945082ec-4a80-ec19-2b71-929e94c5e3d9-1167f7a1" className="w-layout-layout quick-stack wf-layout-layout">
                            <div className="w-layout-cell">
                              <h2 className="h2_main">PESCADO DE TAMPICO</h2>
                            </div>
                            <div className="w-layout-cell cell">
                              <div className="text-block-8">22.75</div>
                            </div>
                          </div>
                          <p className="body_home menuplatter">Tilapia with lime chipotle sautéed in tomato, bell pepper, onions, chile<br />anchos, topped with crawfish tails.<br /><br /></p>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div id="w-node-_945082ec-4a80-ec19-2b71-929e94c5e3e6-1167f7a1" className="w-layout-layout quick-stack wf-layout-layout">
                            <div className="w-layout-cell">
                              <h2 className="h2_main">PESCADO DE LA CREMA</h2>
                            </div>
                            <div className="w-layout-cell cell">
                              <div className="text-block-8">22.75</div>
                            </div>
                          </div>
                          <p className="body_home menuplatter">Fresh redfish filet topped with LA crawfish tails in a cream sauce served with Mexican rice &amp; Pico de Gallo. A<br />treat for cream sauce lovers!</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-w-tab="Desserts" className="w-tab-pane">
                    <h2 className="h2_main">sweet treats</h2>
                    <div className="wrapper-menukey">
                      <div className="wrapper-foodlabel"><img loading="lazy" src="/images/spicy.svg" alt="" className="key-label-img" />
                        <div className="key-label-text">spicy</div>
                      </div>
                      <div className="wrapper-foodlabel"><img loading="lazy" src="/images/glutenfree.svg" alt="" className="key-label-img" />
                        <div className="key-label-text">gluten free</div>
                      </div>
                      <div className="wrapper-foodlabel"><img loading="lazy" src="/images/onion_garlic-icon.svg" alt="onion and garlic free" className="key-label-img" />
                        <div className="key-label-text">garlic + onion free</div>
                      </div>
                      <div className="wrapper-foodlabel"><img loading="lazy" src="/images/keto-icon.svg" alt="" className="key-label-img" />
                        <div className="key-label-text">keto friendly</div>
                      </div>
                    </div>
                    <div className="w-dyn-list">
                      <div role="list" className="w-dyn-items">
                        <div role="listitem" className="wrppaer-menuitem w-dyn-item"></div>
                      </div>
                      <div className="w-dyn-empty">
                        <div>No items found.</div>
                      </div>
                    </div>
                  </div>
                  <div data-w-tab="Enchilada&#x27;s" className="w-tab-pane">
                    <h2 className="h2_main">enchiladas</h2>
                    <div className="wrapper-menukey">
                      <div className="wrapper-foodlabel"><img loading="lazy" src="/images/spicy.svg" alt="" className="key-label-img" />
                        <div className="key-label-text">spicy</div>
                      </div>
                      <div className="wrapper-foodlabel"><img loading="lazy" src="/images/glutenfree.svg" alt="" className="key-label-img" />
                        <div className="key-label-text">gluten free</div>
                      </div>
                      <div className="wrapper-foodlabel"><img loading="lazy" src="/images/onion_garlic-icon.svg" alt="onion and garlic free" className="key-label-img" />
                        <div className="key-label-text">garlic + onion free</div>
                      </div>
                      <div className="wrapper-foodlabel"><img loading="lazy" src="/images/keto-icon.svg" alt="" className="key-label-img" />
                        <div className="key-label-text">keto friendly</div>
                      </div>
                    </div>
                    <div>
                      <div className="div-block-91">
                        <div>
                          <div id="w-node-_61aa5c71-f258-31a2-ff4c-51245f1b5195-1167f7a1" className="w-layout-layout quick-stack wf-layout-layout">
                            <div className="w-layout-cell">
                              <h2 className="h2_main">VEGETARIAN ENCHILADAS</h2>
                            </div>
                            <div className="w-layout-cell cell">
                              <div className="text-block-8">13.25</div>
                            </div>
                          </div>
                          <p className="body_home menuplatter">Three enchiladas stuffed with cheese, tomatoes, onions, bell peppers &amp; mushrooms. Served with<br />Ranchero Sauce.</p>
                        </div>
                      </div>
                      <div className="div-block-92">
                        <div>
                          <div id="w-node-_61aa5c71-f258-31a2-ff4c-51245f1b51a2-1167f7a1" className="w-layout-layout quick-stack wf-layout-layout">
                            <div className="w-layout-cell">
                              <h2 className="h2_main">CHEESE ENCHILADAS VERDES</h2>
                            </div>
                            <div className="w-layout-cell cell">
                              <div className="text-block-8">12.95</div>
                            </div>
                          </div>
                          <p className="body_home menuplatter">Served with Green Sauce.</p>
                        </div>
                      </div>
                      <div className="div-block-94">
                        <div>
                          <div id="w-node-_61aa5c71-f258-31a2-ff4c-51245f1b51ad-1167f7a1" className="w-layout-layout quick-stack wf-layout-layout">
                            <div className="w-layout-cell">
                              <h2 className="h2_main">CHICKEN ENCHILADAS</h2>
                            </div>
                            <div className="w-layout-cell cell">
                              <div className="text-block-8">11.75</div>
                            </div>
                          </div>
                          <p className="body_home menuplatter">Ranchero Sauce 11.75<br />Mole Sauce 14.75</p>
                        </div>
                      </div>
                      <div className="div-block-93">
                        <div>
                          <div id="w-node-_61aa5c71-f258-31a2-ff4c-51245f1b51b8-1167f7a1" className="w-layout-layout quick-stack wf-layout-layout">
                            <div className="w-layout-cell">
                              <h2 className="h2_main">BEEF ENCHILADAS</h2>
                            </div>
                            <div className="w-layout-cell cell">
                              <div className="text-block-8">11.50</div>
                            </div>
                          </div>
                          <p className="body_home menuplatter">Served with Chile Con Carne Sauce.<br /><br /></p>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div id="w-node-_61aa5c71-f258-31a2-ff4c-51245f1b51c5-1167f7a1" className="w-layout-layout quick-stack wf-layout-layout">
                            <div className="w-layout-cell">
                              <h2 className="h2_main">ENCHILADA DINNER</h2>
                            </div>
                            <div className="w-layout-cell cell">
                              <div className="text-block-8">12.75</div>
                            </div>
                          </div>
                          <p className="body_home menuplatter">Two enchiladas (beef, chicken or cheese) with Mexican rice and refried beans. (chile con carne sauce)</p>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div id="w-node-_61aa5c71-f258-31a2-ff4c-51245f1b51d2-1167f7a1" className="w-layout-layout quick-stack wf-layout-layout">
                            <div className="w-layout-cell">
                              <h2 className="h2_main">TACO DINNER</h2>
                            </div>
                            <div className="w-layout-cell cell">
                              <div className="text-block-8">9.75</div>
                            </div>
                          </div>
                          <p className="body_home menuplatter">Two tacos (beef or chicken) topped with lettuce, tomatoes and cheese. Served<br />with Mexican rice and refried beans.</p>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div id="w-node-_61aa5c71-f258-31a2-ff4c-51245f1b51df-1167f7a1" className="w-layout-layout quick-stack wf-layout-layout">
                            <div className="w-layout-cell">
                              <h2 className="h2_main">BEEF OR CHICKEN TACOS</h2>
                            </div>
                            <div className="w-layout-cell cell">
                              <div className="text-block-8">9.75</div>
                            </div>
                          </div>
                          <p className="body_home menuplatter"><br /><br /></p>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div id="w-node-_61aa5c71-f258-31a2-ff4c-51245f1b51ec-1167f7a1" className="w-layout-layout quick-stack wf-layout-layout">
                            <div className="w-layout-cell">
                              <h2 className="h2_main">MEXICAN OMELETTE</h2>
                            </div>
                            <div className="w-layout-cell cell">
                              <div className="text-block-8">11.25</div>
                            </div>
                          </div>
                          <p className="body_home menuplatter">Served with rice &amp; beans</p>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div id="w-node-_61aa5c71-f258-31a2-ff4c-51245f1b51f9-1167f7a1" className="w-layout-layout quick-stack wf-layout-layout">
                            <div className="w-layout-cell">
                              <h2 className="h2_main">HUEVOS RANCHEROS</h2>
                            </div>
                            <div className="w-layout-cell cell">
                              <div className="text-block-8">12.25</div>
                            </div>
                          </div>
                          <p className="body_home menuplatter">Hot or Mild. Served with rice &amp; beans.</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-w-tab="A La Carte" className="w-tab-pane">
                    <h2 className="h2_main">sides</h2>
                    <div className="wrapper-menukey">
                      <div className="wrapper-foodlabel"><img loading="lazy" src="/images/spicy.svg" alt="" className="key-label-img" />
                        <div className="key-label-text">spicy</div>
                      </div>
                      <div className="wrapper-foodlabel"><img loading="lazy" src="/images/glutenfree.svg" alt="" className="key-label-img" />
                        <div className="key-label-text">gluten free</div>
                      </div>
                      <div className="wrapper-foodlabel"><img loading="lazy" src="/images/onion_garlic-icon.svg" alt="onion and garlic free" className="key-label-img" /></div>
                      <div className="wrapper-foodlabel"><img loading="lazy" src="/images/keto-icon.svg" alt="" className="key-label-img" />
                        <div className="key-label-text">keto friendly</div>
                      </div>
                    </div>
                    <div>
                      <div className="div-block-91">
                        <div>
                          <div id="w-node-_6fa9eaa6-1d3d-10c5-82e1-7829870915d8-1167f7a1" className="w-layout-layout quick-stack wf-layout-layout">
                            <div className="w-layout-cell">
                              <h2 className="h2_main">FLAUTA, SINGLE BURRITO, CHEESE ENCHILADA, TAMALE, TACO, CHALUPA</h2>
                            </div>
                            <div className="w-layout-cell cell">
                              <div className="text-block-8">15.25</div>
                            </div>
                          </div>
                          <p className="body_home menuplatter"><br />‍</p>
                        </div>
                      </div>
                      <div className="div-block-92">
                        <div>
                          <div id="w-node-_6fa9eaa6-1d3d-10c5-82e1-7829870915e5-1167f7a1" className="w-layout-layout quick-stack wf-layout-layout">
                            <div className="w-layout-cell">
                              <h2 className="h2_main">SINGLE TACO</h2>
                            </div>
                            <div className="w-layout-cell cell">
                              <div className="text-block-8">3.50</div>
                            </div>
                          </div>
                          <p className="body_home menuplatter"></p>
                        </div>
                      </div>
                      <div className="div-block-94">
                        <div>
                          <div id="w-node-_6fa9eaa6-1d3d-10c5-82e1-7829870915f0-1167f7a1" className="w-layout-layout quick-stack wf-layout-layout">
                            <div className="w-layout-cell">
                              <h2 className="h2_main">CHIMICHANGA</h2>
                            </div>
                            <div className="w-layout-cell cell">
                              <div className="text-block-8">10.95</div>
                            </div>
                          </div>
                          <p className="body_home menuplatter"></p>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div id="w-node-_6fa9eaa6-1d3d-10c5-82e1-782987091608-1167f7a1" className="w-layout-layout quick-stack wf-layout-layout">
                            <div className="w-layout-cell">
                              <h2 className="h2_main">SHRIMP</h2>
                            </div>
                            <div className="w-layout-cell cell">
                              <div className="text-block-8">16.95</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div id="w-node-_6fa9eaa6-1d3d-10c5-82e1-782987091615-1167f7a1" className="w-layout-layout quick-stack wf-layout-layout">
                            <div className="w-layout-cell">
                              <h2 className="h2_main">CHILE CON QUESO</h2>
                            </div>
                            <div className="w-layout-cell cell">
                              <div className="text-block-8">7.50</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div data-w-tab="Cantina" className="w-tab-pane w--tab-active">
                    <h2 className="h2_main">drinks</h2>
                    <div className="wrapper-menukey">
                      <div className="wrapper-foodlabel"><img loading="lazy" src="/images/spicy.svg" alt="" className="key-label-img" />
                        <div className="key-label-text">spicy</div>
                      </div>
                      <div className="wrapper-foodlabel"><img loading="lazy" src="/images/glutenfree.svg" alt="" className="key-label-img" />
                        <div className="key-label-text">gluten free</div>
                      </div>
                      <div className="wrapper-foodlabel"><img loading="lazy" src="/images/onion_garlic-icon.svg" alt="onion and garlic free" className="key-label-img" /></div>
                      <div className="wrapper-foodlabel"><img loading="lazy" src="/images/keto-icon.svg" alt="" className="key-label-img" />
                        <div className="key-label-text">keto friendly</div>
                      </div>
                    </div>
                    <div>
                      <div className="div-block-91">
                        <div>
                          <div id="w-node-_669fd680-a1b7-644c-5544-9eea35f451aa-1167f7a1" className="w-layout-layout quick-stack wf-layout-layout">
                            <div className="w-layout-cell">
                              <h2 className="h2_main">FLAUTA, SINGLE BURRITO, CHEESE ENCHILADA, TAMALE, TACO, CHALUPA</h2>
                            </div>
                            <div className="w-layout-cell cell">
                              <div className="text-block-8">15.25</div>
                            </div>
                          </div>
                          <p className="body_home menuplatter"><br />‍</p>
                        </div>
                      </div>
                      <div className="div-block-92">
                        <div>
                          <div id="w-node-_669fd680-a1b7-644c-5544-9eea35f451b6-1167f7a1" className="w-layout-layout quick-stack wf-layout-layout">
                            <div className="w-layout-cell">
                              <h2 className="h2_main">SINGLE TACO</h2>
                            </div>
                            <div className="w-layout-cell cell">
                              <div className="text-block-8">3.50</div>
                            </div>
                          </div>
                          <p className="body_home menuplatter"></p>
                        </div>
                      </div>
                      <div className="div-block-94">
                        <div>
                          <div id="w-node-_669fd680-a1b7-644c-5544-9eea35f451c0-1167f7a1" className="w-layout-layout quick-stack wf-layout-layout">
                            <div className="w-layout-cell">
                              <h2 className="h2_main">CHIMICHANGA</h2>
                            </div>
                            <div className="w-layout-cell cell">
                              <div className="text-block-8">10.95</div>
                            </div>
                          </div>
                          <p className="body_home menuplatter"></p>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div id="w-node-_669fd680-a1b7-644c-5544-9eea35f451ca-1167f7a1" className="w-layout-layout quick-stack wf-layout-layout">
                            <div className="w-layout-cell">
                              <h2 className="h2_main">SHRIMP</h2>
                            </div>
                            <div className="w-layout-cell cell">
                              <div className="text-block-8">16.95</div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div>
                        <div>
                          <div id="w-node-_669fd680-a1b7-644c-5544-9eea35f451d3-1167f7a1" className="w-layout-layout quick-stack wf-layout-layout">
                            <div className="w-layout-cell">
                              <h2 className="h2_main">CHILE CON QUESO</h2>
                            </div>
                            <div className="w-layout-cell cell">
                              <div className="text-block-8">7.50</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section></section>
        <section id="Contacts" className="section">
          <div className="w-layout-blockcontainer base-container w-container">
            <div className="contacts-wrapper-section">
              <div className="contacts-left-column"><img src="/images/Untitled-design-3.svg" loading="lazy" alt="" className="image-51" />
                <div data-w-id="f2beb868-289e-2965-5278-30f592ddf1ea" style={{ opacity: "0" }} className="address-wrapper">
                  <h4>1461 N. Causeway Blvd.<br />Mandeville, LA 70471</h4>
                  <p>Located in the heart of Mandeville</p>
                </div>
                <div data-w-id="f2beb868-289e-2965-5278-30f592ddf1ef" style={{ opacity: "0" }} className="work-time-wrapper">
                  <h4>Sunday - Thursday: <span className="text-span-time">11:00 AM - 9:00 PM</span></h4>
                  <h4>Friday - Saturday: <span className="text-span-time">10:00 AM - 11:00 PM</span></h4>
                </div>
                <div data-w-id="f2beb868-289e-2965-5278-30f592ddf1f8" style={{ opacity: "0" }} className="contacts-button-wrapper">
                  <a href="tel:+19856264342" className="secondary-button w-inline-block">
                    <div className="clip">
                      <div className="button-text-wrap">
                        <div className="text-button">Phone: 985-626-4342</div>
                      </div>
                      <div className="button-text-wrap button-text-bottom"></div>
                    </div>
                    <div className="line-button"></div>
                  </a>
                </div>
              </div>
              <div data-w-id="f2beb868-289e-2965-5278-30f592ddf20b" style={{ opacity: "0" }} className="contacts-right-column"><img src="/images/51.png" loading="lazy" alt="" className="image-contacts" /></div>
            </div>
          </div>
        </section>
        <div className="footer">
          <div className="base-container w-container">
            <div className="footer-wrapper">
              <div className="footer-divider"></div>
              <div className="footer-top-content">
                <div className="footer-top-left-content">
                  <div className="footer-links-block">
                    <div className="footer-links-wrapper">
                      <p className="footer-links-title">Explore</p>
                      <a href="/reservations" className="footer-link">Book a table</a>
                      <a href="/menu" aria-current="page" className="footer-link w--current">Menu</a>
                      <a href="/gallery" className="footer-link">News</a>
                    </div>
                    <div className="footer-links-wrapper">
                      <p className="footer-links-title">Socials</p>
                      <a href="https://www.instagram.com/georgesmexicanrestaurant" target="_blank" className="footer-link">Instagram</a>
                      <a href="https://www.facebook.com/georgesmexicanrestaurant/" target="_blank" className="footer-link">Facebook</a>
                    </div>
                  </div>
                  <a href="/" className="footer-brand w-nav-brand"><img loading="lazy" height="Auto" alt="" src="/images/scarf_edited-1.avif" className="footer-logo" /></a>
                </div>
                <div className="footer-top-right-content">
                  <div className="footer-heading-wrapper">
                    <h2>Savor the flavors of Mexico</h2>
                    <a href="/menu" aria-current="page" className="primary-button w-button w--current">View all menu</a>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer-bottom-wrapper">
              <div className="footer-copyright">© MOSO LLC. All Rights Reserved. <a href="/templates/licensing" className="licensing-footer-link">Licensing</a>
              </div>
            </div>
          </div>
          <div className="promotion-labels-wrapper">
            <div className="promotion-label-left"></div>
          </div>
        </div>
    </>
  );
}
