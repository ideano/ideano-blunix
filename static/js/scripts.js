/* Template Name: Techwind - Tailwind CSS Multipurpose Landing & Admin Dashboard Template
   Author: Shreethemes
   Website: https://shreethemes.in
   Version: 2.2.0 
   File Description: Consolidated JS file with only used features
*/

/*********************************/
/*         INDEX                 */
/*================================
 *     01.  Preloader            *
 *     02.  Menu System          *
 *     03.  Sticky Navigation    *
 *     04.  Back to Top          *
 *     05.  Active Sidebar       *
 *     06.  Company Slider       *
 *     07.  Calculator Inputs    *
 *     08.  External Links       *
 *     09.  Tabs Component       *
 *     10.  Accordion Component  *
 ================================*/

//=========================================//
/*            01) Preloader                */
//=========================================//
window.addEventListener("load", fn, false);

function fn() {
  // Preloader
  if (document.getElementById("preloader")) {
    setTimeout(() => {
      document.getElementById("preloader").style.visibility = "hidden";
      document.getElementById("preloader").style.opacity = "0";
    }, 350);
  }
  // Menus
  activateMenu();
}

//=========================================//
/*            02) Menu System              */
//=========================================//

// Submenu toggle
const hasSubMenuItems = document.querySelectorAll(".has-submenu");

hasSubMenuItems.forEach((item) => {
  const subItem = item.querySelector(".submenu");

  item.addEventListener("click", () => {
    if (subItem.classList.contains("submenu-active")) {
      subItem.classList.remove("submenu-active");
    } else {
      subItem.classList.add("submenu-active");
    }
  });
});

// Toggle Menu (mobile)
function toggleMenu() {
  document.getElementById("isToggle").classList.toggle("open");
  var isOpen = document.getElementById("navigation");
  if (isOpen.style.display === "block") {
    isOpen.style.display = "none";
  } else {
    isOpen.style.display = "block";
  }
}

// Menu Active State
function getClosest(elem, selector) {
  // Element.matches() polyfill
  if (!Element.prototype.matches) {
    Element.prototype.matches =
      Element.prototype.matchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector ||
      Element.prototype.oMatchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      function (s) {
        var matches = (this.document || this.ownerDocument).querySelectorAll(s),
          i = matches.length;
        while (--i >= 0 && matches.item(i) !== this) {}
        return i > -1;
      };
  }

  // Get the closest matching element
  for (; elem && elem !== document; elem = elem.parentNode) {
    if (elem.matches(selector)) return elem;
  }
  return null;
}

function activateMenu() {
  var menuItems = document.getElementsByClassName("sub-menu-item");
  if (menuItems) {
    var matchingMenuItem = null;
    for (var idx = 0; idx < menuItems.length; idx++) {
      if (menuItems[idx].href === window.location.href) {
        matchingMenuItem = menuItems[idx];
      }
    }

    if (matchingMenuItem) {
      matchingMenuItem.classList.add("active");

      var immediateParent = getClosest(matchingMenuItem, "li");

      if (immediateParent) {
        immediateParent.classList.add("active");
      }

      var parent = getClosest(immediateParent, ".child-menu-item");
      if (parent) {
        parent.classList.add("active");
      }

      var parent = getClosest(parent || immediateParent, ".parent-menu-item");

      if (parent) {
        parent.classList.add("active");

        var parentMenuitem = parent.querySelector(".menu-item");
        if (parentMenuitem) {
          parentMenuitem.classList.add("active");
        }

        var parentOfParent = getClosest(parent, ".parent-parent-menu-item");
        if (parentOfParent) {
          // parentOfParent.classList.add("active");
        }
      } else {
        var parentOfParent = getClosest(
          matchingMenuItem,
          ".parent-parent-menu-item",
        );
        if (parentOfParent) {
          // parentOfParent.classList.add("active");
        }
      }
    }
  }
}

// Clickable Menu
if (document.getElementById("navigation")) {
  var elements = document
    .getElementById("navigation")
    .getElementsByTagName("a");
  for (var i = 0, len = elements.length; i < len; i++) {
    elements[i].onclick = function (elem) {
      if (elem.target.getAttribute("href") === "javascript:void(0)") {
        var submenu = elem.target.nextElementSibling.nextElementSibling;
        submenu.classList.toggle("open");
      }
    };
  }
}

//=========================================//
/*         03) Sticky Navigation           */
//=========================================//
function windowScroll() {
  const navbar = document.getElementById("topnav");
  if (navbar != null) {
    if (
      document.body.scrollTop >= 50 ||
      document.documentElement.scrollTop >= 50
    ) {
      navbar.classList.add("nav-sticky");
    } else {
      navbar.classList.remove("nav-sticky");
    }
  }
}

window.addEventListener("scroll", (ev) => {
  ev.preventDefault();
  windowScroll();
});

//=========================================//
/*          04) Back to Top                */
//=========================================//
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  var mybutton = document.getElementById("back-to-top");
  if (mybutton != null) {
    if (
      document.body.scrollTop > 500 ||
      document.documentElement.scrollTop > 500
    ) {
      mybutton.classList.add("block");
      mybutton.classList.remove("hidden");
    } else {
      mybutton.classList.add("hidden");
      mybutton.classList.remove("block");
    }
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//=========================================//
/*          05) Active Sidebar             */
//=========================================//
(function () {
  var current = location.pathname.substring(
    location.pathname.lastIndexOf("/") + 1,
  );
  if (current === "") return;
  var menuItems = document.querySelectorAll(".sidebar-nav a");
  for (var i = 0, len = menuItems.length; i < len; i++) {
    if (menuItems[i].getAttribute("href").indexOf(current) !== -1) {
      menuItems[i].parentElement.className += " active";
    }
  }
})();

//=========================================//
/*         06) Company Slider              */
//=========================================//
const scrollers = document.querySelectorAll(".scroller");

// If a user hasn't opted in for reduced motion, then we add the animation.
if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addAnimation();
}

function addAnimation() {
  scrollers.forEach((scroller, index) => {
    scroller.setAttribute("data-animated", "true");

    const scrollerInner = scroller.querySelector(".scroller__inner");
    if (!scrollerInner) return;

    // Duplicate the original items so the scroll can loop seamlessly.
    const originalItems = Array.from(scrollerInner.children);
    originalItems.forEach((item) => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute("aria-hidden", "true");
      scrollerInner.appendChild(duplicatedItem);
    });

    const updateAnimation = () => {
      const rootFontSize =
        parseFloat(getComputedStyle(document.documentElement).fontSize) || 16;
      const distance = scrollerInner.scrollWidth / 2 + rootFontSize * 0.5;
      const speed = Math.max(1, parseFloat(scroller.dataset.speed) || 80);
      const travelTime = distance / speed;
      const displayTime = Math.max(
        0,
        parseFloat(scroller.dataset.displayTime) || 0,
      );

      // display_time is the minimum duration of a complete cycle. Any extra
      // time is a pause AFTER the duplicated sequence has reached its seamless
      // loop point, never at the beginning or between logos.
      const cycleTime = Math.max(travelTime, displayTime);
      const movePercent = cycleTime
        ? Math.min(100, (travelTime / cycleTime) * 100)
        : 100;

      // Resolve the visual direction here instead of using animation-direction:
      // reversing an animation also reverses where a pause appears.
      const requestedDirection = scroller.dataset.direction || "left";
      const isRTL = document.documentElement.dir === "rtl";
      const movesRight =
        (requestedDirection === "right" && !isRTL) ||
        (requestedDirection === "left" && isRTL);
      const target = movesRight
        ? `calc(50% + 0.5rem)`
        : `calc(-50% - 0.5rem)`;

      const animationName = `parties-scroll-${index}`;
      const existingStyle = document.getElementById(animationName);
      if (existingStyle) existingStyle.remove();

      const style = document.createElement("style");
      style.id = animationName;
      style.textContent = `
        @keyframes ${animationName} {
          0% { transform: translateX(0); }
          ${movePercent}% { transform: translateX(${target}); }
          100% { transform: translateX(${target}); }
        }
      `;
      document.head.appendChild(style);

      scroller.style.setProperty("--_animation-name", animationName);
      scroller.style.setProperty("--_animation-duration", `${cycleTime}s`);
      scroller.style.setProperty(
        "--_animation-delay",
        scroller.dataset.startDelay || "0s",
      );
      scroller.style.setProperty("--_animation-direction", "normal");
    };

    if (typeof ResizeObserver !== "undefined") {
      const observer = new ResizeObserver(updateAnimation);
      observer.observe(scrollerInner);
    }

    updateAnimation();
  });
}
//=========================================//
//=========================================//
/*         07) Calculator Inputs           */
//=========================================//
document.querySelectorAll("[data-calc-target]").forEach((input) => {
  input.addEventListener("input", function () {
    const targetSelector = this.getAttribute("data-calc-target");
    const multiplier =
      parseFloat(this.getAttribute("data-calc-multiplier")) || 0;
    const target = document.querySelector(targetSelector);
    if (!target) return;
    const number = parseFloat(this.value);
    target.textContent = number ? number * multiplier : 0;
  });
});

//=========================================//
/*         08) External Links              */
//=========================================//
// Make all external links open in new tabs
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll("a[href]");

  links.forEach((link) => {
    const href = link.getAttribute("href");

    // Check if link is external (starts with http/https and doesn't contain current domain)
    if (
      href &&
      (href.startsWith("http://") || href.startsWith("https://")) &&
      !href.includes(window.location.hostname)
    ) {
      link.setAttribute("target", "_blank");
      link.setAttribute("rel", "noopener noreferrer");
    }
  });
});

//=========================================//
/*         09) Tabs Component              */
//=========================================//
try {
  const TabsDefault = {
    defaultTabId: null,
    activeClasses: "text-[var(--theme-on-primary)] bg-[var(--theme-primary)]",
    inactiveClasses: "hover:text-[var(--theme-primary)] hover:bg-[var(--theme-surface)]",
    onShow: () => {},
  };

  class Tabs {
    constructor(items = [], options = {}) {
      this._items = items;
      this._activeTab = options ? this.getTab(options.defaultTabId) : null;
      this._options = { ...TabsDefault, ...options };
      this._init();
    }

    _init() {
      if (this._items.length) {
        // set the first tab as active if not set by explicitly
        if (!this._activeTab) {
          this._setActiveTab(this._items[0]);
        }

        // force show the first default tab
        this.show(this._activeTab.id, true);

        // show tab content based on click
        this._items.map((tab) => {
          tab.triggerEl.addEventListener("click", () => {
            this.show(tab.id);
          });
        });
      }
    }

    getActiveTab() {
      return this._activeTab;
    }

    _setActiveTab(tab) {
      this._activeTab = tab;
    }

    getTab(id) {
      return this._items.filter((t) => t.id === id)[0];
    }

    show(id, forceShow = false) {
      const tab = this.getTab(id);

      // don't do anything if already active
      if (tab === this._activeTab && !forceShow) {
        return;
      }

      // hide other tabs
      this._items.map((t) => {
        if (t !== tab) {
          t.triggerEl.classList.remove(
            ...this._options.activeClasses.split(" "),
          );
          t.triggerEl.classList.add(
            ...this._options.inactiveClasses.split(" "),
          );
          t.targetEl.classList.add("hidden");
          t.triggerEl.setAttribute("aria-selected", false);
        }
      });

      // show active tab
      tab.triggerEl.classList.add(...this._options.activeClasses.split(" "));
      tab.triggerEl.classList.remove(
        ...this._options.inactiveClasses.split(" "),
      );
      tab.triggerEl.setAttribute("aria-selected", true);
      tab.targetEl.classList.remove("hidden");

      this._setActiveTab(tab);

      // callback function
      this._options.onShow(this, tab);
    }
  }

  window.Tabs = Tabs;

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-tabs-toggle]").forEach((triggerEl) => {
      const tabElements = [];
      let defaultTabId = null;
      triggerEl.querySelectorAll('[role="tab"]').forEach((el) => {
        const isActive = el.getAttribute("aria-selected") === "true";
        const tab = {
          id: el.getAttribute("data-tabs-target"),
          triggerEl: el,
          targetEl: document.querySelector(el.getAttribute("data-tabs-target")),
        };
        tabElements.push(tab);

        if (isActive) {
          defaultTabId = tab.id;
        }
      });
      new Tabs(tabElements, {
        defaultTabId: defaultTabId,
      });
    });
  });
} catch (error) {}

//=========================================//
/*        10) Accordion Component          */
//=========================================//
try {
  const AccordionDefault = {
    alwaysOpen: false,
    activeClasses: "bg-primary-soft text-primary",
    inactiveClasses: "text-theme",
    onOpen: () => {},
    onClose: () => {},
    onToggle: () => {},
  };

  class Accordion {
    constructor(items = [], options = {}) {
      this._items = items;
      this._options = { ...AccordionDefault, ...options };
      this._init();
    }

    _init() {
      if (this._items.length) {
        // show accordion item based on click
        this._items.map((item) => {
          if (item.active) {
            this.open(item.id);
          }

          item.triggerEl.addEventListener("click", () => {
            this.toggle(item.id);
          });
        });
      }
    }

    getItem(id) {
      return this._items.filter((item) => item.id === id)[0];
    }

    open(id) {
      const item = this.getItem(id);

      // don't hide other accordions if always open
      if (!this._options.alwaysOpen) {
        this._items.map((i) => {
          if (i !== item) {
            i.triggerEl.classList.remove(
              ...this._options.activeClasses.split(" "),
            );
            i.triggerEl.classList.add(
              ...this._options.inactiveClasses.split(" "),
            );
            i.targetEl.classList.add("hidden");
            i.triggerEl.setAttribute("aria-expanded", false);
            i.active = false;

            // rotate icon if set
            if (i.iconEl) {
              i.iconEl.classList.remove("rotate-180");
            }
          }
        });
      }

      // show active item
      item.triggerEl.classList.add(...this._options.activeClasses.split(" "));
      item.triggerEl.classList.remove(
        ...this._options.inactiveClasses.split(" "),
      );
      item.triggerEl.setAttribute("aria-expanded", true);
      item.targetEl.classList.remove("hidden");
      item.active = true;

      // rotate icon if set
      if (item.iconEl) {
        item.iconEl.classList.add("rotate-180");
      }

      // callback function
      this._options.onOpen(this, item);
    }

    toggle(id) {
      const item = this.getItem(id);

      if (item.active) {
        this.close(id);
      } else {
        this.open(id);
      }

      // callback function
      this._options.onToggle(this, item);
    }

    close(id) {
      const item = this.getItem(id);

      item.triggerEl.classList.remove(
        ...this._options.activeClasses.split(" "),
      );
      item.triggerEl.classList.add(...this._options.inactiveClasses.split(" "));
      item.targetEl.classList.add("hidden");
      item.triggerEl.setAttribute("aria-expanded", false);
      item.active = false;

      // rotate icon if set
      if (item.iconEl) {
        item.iconEl.classList.remove("rotate-180");
      }

      // callback function
      this._options.onClose(this, item);
    }
  }

  window.Accordion = Accordion;

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll("[data-accordion]").forEach((accordionEl) => {
      const alwaysOpen = accordionEl.getAttribute("data-accordion");
      const activeClasses = accordionEl.getAttribute("data-active-classes");
      const inactiveClasses = accordionEl.getAttribute("data-inactive-classes");

      const items = [];
      accordionEl.querySelectorAll("[data-accordion-target]").forEach((el) => {
        const item = {
          id: el.getAttribute("data-accordion-target"),
          triggerEl: el,
          targetEl: document.querySelector(
            el.getAttribute("data-accordion-target"),
          ),
          iconEl: el.querySelector("[data-accordion-icon]"),
          active: el.getAttribute("aria-expanded") === "true" ? true : false,
        };
        items.push(item);
      });

      new Accordion(items, {
        alwaysOpen: alwaysOpen === "open" ? true : false,
        activeClasses: activeClasses
          ? activeClasses
          : AccordionDefault.activeClasses,
        inactiveClasses: inactiveClasses
          ? inactiveClasses
          : AccordionDefault.inactiveClasses,
      });
    });
  });
} catch (error) {}

//=========================================//
/*          Parties Block                  */
//=========================================//
(function () {
  function createLogoElement(src, alt) {
    if (!src) return null;
    var img = document.createElement("img");
    img.src = src;
    img.alt = alt || "";
    img.loading = "lazy";
    img.decoding = "async";
    img.className = "parties-modal-image";
    return img;
  }

  function initPartiesBlock(block) {
    var cards = Array.prototype.slice.call(block.querySelectorAll("[data-party-card]"));
    var dataNode = block.querySelector("[data-parties-data]");
    var stage = block.querySelector("[data-parties-stage]");
    var animation = block.getAttribute("data-animation") || "static";
    if (!dataNode || !stage || !cards.length) return;

    var parties = [];
    try { parties = JSON.parse(dataNode.textContent || "[]"); } catch (e) { return; }
    if (!parties.length) return;

    cards.forEach(function (card, index) {
      card.style.setProperty("--party-index", index);
      card.style.setProperty("--party-angle", (360 / parties.length) * index);
    });

    var modal = block.querySelector("[data-parties-modal]");
    var dialog = block.querySelector("[data-modal-dialog]");
    var modalLogo = block.querySelector("[data-modal-logo]");
    var modalTitle = block.querySelector("[data-modal-title]");
    var modalDescription = block.querySelector("[data-modal-description]");
    var modalLink = block.querySelector("[data-modal-link]");
    var lastFocused = null;

    function openModal(index) {
      var party = parties[index];
      if (!party || !modal) return;
      lastFocused = document.activeElement;
      modalLogo.textContent = "";

      // Use the already-rendered logo URL from the clicked card. This is
      // important for Hugo image processing, where the final browser URL
      // may differ from the original `party.logo` path.
      var sourceCard = cards[index];
      var sourceImage = sourceCard ? sourceCard.querySelector("img") : null;
      var logoSrc = sourceImage ? (sourceImage.currentSrc || sourceImage.src) : party.logo;
      var img = createLogoElement(logoSrc, party.name);
      if (img) {
        img.loading = "eager";
        modalLogo.appendChild(img);
      }

      modalTitle.textContent = party.name || "Party";
      // `description` is markdownified by Hugo before it is serialized into
      // the JSON payload, so the modal receives ready-to-render HTML.
      modalDescription.innerHTML = party.description || "";

      var partyUrl = typeof party.url === "string" ? party.url.trim() : "";
      if (partyUrl) {
        modalLink.href = partyUrl;
        modalLink.hidden = false;
      } else {
        modalLink.hidden = true;
        modalLink.removeAttribute("href");
      }
      modal.hidden = false;
      document.body.classList.add("parties-modal-open");
      dialog.focus();
    }

    function closeModal() {
      if (!modal || modal.hidden) return;
      modal.hidden = true;
      document.body.classList.remove("parties-modal-open");
      if (lastFocused && typeof lastFocused.focus === "function") lastFocused.focus();
    }

    cards.forEach(function (card) {
      card.addEventListener("click", function () {
        openModal(parseInt(card.getAttribute("data-party-index"), 10));
      });
    });

    block.querySelectorAll("[data-modal-close]").forEach(function (button) {
      button.addEventListener("click", closeModal);
    });

    document.addEventListener("keydown", function (event) {
      if (!modal || modal.hidden) return;
      if (event.key === "Escape") closeModal();
      if (event.key === "Tab") {
        var focusable = modal.querySelectorAll("button:not([disabled]), a[href]:not([hidden])");
        if (!focusable.length) return;
        var first = focusable[0];
        var last = focusable[focusable.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault(); last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault(); first.focus();
        }
      }
    });

    function setActive(index) {
      cards.forEach(function (card, i) { card.classList.toggle("is-active", i === index); });
    }

    if (["carousel", "fade", "zoom"].indexOf(animation) !== -1) {
      var current = Math.floor(Math.random() * parties.length);
      setActive(current);
      if (parties.length > 1) {
        window.setInterval(function () { current = (current + 1) % parties.length; setActive(current); }, animation === "carousel" ? 4000 : 3500);
      }
    }

    if (animation === "shuffle") {
      var shuffleIndex = Math.floor(Math.random() * parties.length);
      setActive(shuffleIndex);
      window.setInterval(function () {
        shuffleIndex = Math.floor(Math.random() * parties.length);
        setActive(shuffleIndex);
        var shuffled = cards.slice().sort(function () { return Math.random() - 0.5; });
        shuffled.forEach(function (card) { stage.querySelector("[data-parties-track]").appendChild(card); });
      }, 3000);
    }

    if (animation === "stack") {
      var stackIndex = 0;
      function positionStack() {
        cards.forEach(function (card, i) {
          var offset = (i - stackIndex + cards.length) % cards.length;
          card.style.zIndex = String(cards.length - offset);
          card.style.transform = "translate(" + (offset * 5) + "px," + (offset * -5) + "px) rotate(" + (offset * 1.5) + "deg)";
          card.classList.toggle("is-active", offset === 0);
        });
      }
      positionStack();
      if (parties.length > 1) window.setInterval(function () { stackIndex = (stackIndex + 1) % parties.length; positionStack(); }, 2800);
    }

    if (animation === "scatter") {
      function scatter() {
        var width = Math.max(stage.clientWidth, 320);
        var height = Math.max(stage.clientHeight, 300);
        cards.forEach(function (card, i) {
          var x = (Math.random() - .5) * Math.max(80, width - 180);
          var y = (Math.random() - .5) * Math.max(60, height - 120);
          var r = (Math.random() - .5) * 14;
          card.style.setProperty("--scatter-x", x.toFixed(0));
          card.style.setProperty("--scatter-y", y.toFixed(0));
          card.style.setProperty("--scatter-r", r.toFixed(1));
          card.style.setProperty("--party-index", i);
        });
      }
      scatter();
      window.setInterval(scatter, 5000);
    }

    if (animation === "grid-pulse" || animation === "radar") {
      var pulseIndex = 0;
      setActive(0);
      window.setInterval(function () { pulseIndex = (pulseIndex + 1) % parties.length; setActive(pulseIndex); }, 900);
    }

    if (animation === "reveal" || animation === "scroll") {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          if (animation === "reveal") stage.classList.add("is-visible");
          cards.forEach(function (card) { card.classList.add("is-visible"); });
          if (animation === "scroll") observer.unobserve(entry.target);
        });
      }, { threshold: .15 });
      observer.observe(stage);
    }

    if (animation === "featured") {
      var featuredLogo = block.querySelector("[data-featured-logo]");
      var featuredName = block.querySelector("[data-featured-name]");
      var featuredDescription = block.querySelector("[data-featured-description]");
      var featuredButton = block.querySelector("[data-featured-button]");
      var featuredIndex = Math.floor(Math.random() * parties.length);
      function updateFeatured(index) {
        var party = parties[index];
        featuredIndex = index;
        featuredLogo.textContent = "";
        var image = createLogoElement(party.logo, party.name);
        if (image) featuredLogo.appendChild(image);
        featuredName.textContent = party.name || "Party";
        featuredDescription.innerHTML = party.description || "";
        featuredButton.onclick = function () { openModal(featuredIndex); };
        setActive(index);
      }
      updateFeatured(featuredIndex);
      if (parties.length > 1) {
        window.setInterval(function () { updateFeatured(Math.floor(Math.random() * parties.length)); }, 6000);
      }
    }

    if (animation === "orbit" || animation === "constellation") {
      // CSS handles the continuous motion. The random initial phase keeps
      // multiple party blocks on the same page from feeling synchronized.
      var phase = Math.floor(Math.random() * 360);
      stage.style.setProperty("--parties-phase", phase + "deg");
    }
  }

  function initAllParties() {
    document.querySelectorAll("[data-parties-block]").forEach(initPartiesBlock);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", initAllParties);
  else initAllParties();
})();
