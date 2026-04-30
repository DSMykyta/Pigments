/* =========================================================
   ORDINATE THERAPEUTICS — site script
   No framework, no external libs.
   ========================================================= */
(function () {
  'use strict';

  /* ---------- 1. Active nav link ---------- */
  function setActiveNav() {
    var page = document.body.getAttribute('data-page');
    if (!page) return;
    document.querySelectorAll('.main-nav a[data-nav]').forEach(function (a) {
      if (a.getAttribute('data-nav') === page) a.classList.add('active');
    });
  }

  /* ---------- 2. Header scroll-shrink ---------- */
  function bindHeaderShrink() {
    var header = document.querySelector('.site-header');
    if (!header) return;
    var onScroll = function () {
      if (window.scrollY > 60) header.classList.add('scrolled');
      else header.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ---------- 3. Audience / region gate ---------- */
  var GATE_AUD = 'ordinate_audience';
  var GATE_REG = 'ordinate_region';

  function getGateLabels() {
    var audMap = {
      patient: 'Patient / caregiver',
      hcp: 'Healthcare professional',
      hospital: 'Hospital / clinic',
      regulator: 'Regulator',
      institution: 'Authorized institution',
      media: 'Media'
    };
    var regMap = {
      global: 'Global',
      eu: 'European Union',
      uk: 'United Kingdom',
      us: 'United States',
      jp: 'Japan',
      ua: 'Ukraine',
      restricted: 'Restricted region'
    };
    var aud = localStorage.getItem(GATE_AUD);
    var reg = localStorage.getItem(GATE_REG);
    return {
      audKey: aud, regKey: reg,
      aud: aud ? audMap[aud] : null,
      reg: reg ? regMap[reg] : null
    };
  }

  function reflectGateInUI() {
    var labels = getGateLabels();
    document.querySelectorAll('[data-gate-aud]').forEach(function (el) {
      el.textContent = labels.aud || 'Select audience';
    });
    document.querySelectorAll('[data-gate-reg]').forEach(function (el) {
      el.textContent = labels.reg || 'Select region';
    });
  }

  function openGate() {
    var modal = document.getElementById('gate-overlay');
    if (modal) modal.removeAttribute('hidden');
  }
  function closeGate() {
    var modal = document.getElementById('gate-overlay');
    if (modal) modal.setAttribute('hidden', '');
  }

  function bindGate() {
    var modal = document.getElementById('gate-overlay');
    if (!modal) return;
    var hasChoice = localStorage.getItem(GATE_AUD) && localStorage.getItem(GATE_REG);
    if (!hasChoice) modal.removeAttribute('hidden');
    else modal.setAttribute('hidden', '');

    modal.querySelectorAll('.opt[data-aud]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        modal.querySelectorAll('.opt[data-aud]').forEach(function (b) { b.setAttribute('aria-pressed', 'false'); });
        btn.setAttribute('aria-pressed', 'true');
        modal.dataset.pendingAud = btn.getAttribute('data-aud');
      });
    });

    var regSel = modal.querySelector('[data-region-select]');
    var confirmBtn = modal.querySelector('[data-gate-confirm]');
    confirmBtn && confirmBtn.addEventListener('click', function () {
      var aud = modal.dataset.pendingAud || localStorage.getItem(GATE_AUD);
      var reg = regSel ? regSel.value : localStorage.getItem(GATE_REG);
      if (!aud) { showToast('Please select an audience.'); return; }
      if (!reg) { showToast('Please select a region.'); return; }
      localStorage.setItem(GATE_AUD, aud);
      localStorage.setItem(GATE_REG, reg);
      reflectGateInUI();
      closeGate();
      // mark HCP-only blocks visible
      if (aud === 'hcp' || aud === 'hospital' || aud === 'regulator' || aud === 'institution') {
        document.body.classList.add('audience-hcp');
      } else {
        document.body.classList.remove('audience-hcp');
      }
    });

    document.querySelectorAll('[data-gate-open]').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        // pre-select existing values
        var aud = localStorage.getItem(GATE_AUD);
        if (aud) {
          var b = modal.querySelector('.opt[data-aud="' + aud + '"]');
          if (b) {
            modal.querySelectorAll('.opt[data-aud]').forEach(function (x) { x.setAttribute('aria-pressed', 'false'); });
            b.setAttribute('aria-pressed', 'true');
            modal.dataset.pendingAud = aud;
          }
        }
        var reg = localStorage.getItem(GATE_REG);
        if (reg && regSel) regSel.value = reg;
        openGate();
      });
    });

    // initial body class
    var startAud = localStorage.getItem(GATE_AUD);
    if (startAud === 'hcp' || startAud === 'hospital' || startAud === 'regulator' || startAud === 'institution') {
      document.body.classList.add('audience-hcp');
    }
  }

  /* ---------- 4. Catalog filters ---------- */
  function bindCatalogFilters() {
    var rail = document.querySelector('[data-filter-rail]');
    if (!rail) return;
    var cards = document.querySelectorAll('[data-product-card]');

    function applyFilters() {
      var active = {};
      rail.querySelectorAll('.chip.is-active').forEach(function (chip) {
        var k = chip.getAttribute('data-filter-key');
        var v = chip.getAttribute('data-filter-val');
        if (!active[k]) active[k] = [];
        active[k].push(v);
      });
      cards.forEach(function (card) {
        var keep = true;
        Object.keys(active).forEach(function (k) {
          var val = (card.getAttribute('data-' + k) || '').split(' ');
          var any = active[k].some(function (v) { return val.indexOf(v) !== -1; });
          if (!any) keep = false;
        });
        if (keep) card.removeAttribute('hidden'); else card.setAttribute('hidden', '');
      });
      var visible = Array.prototype.filter.call(cards, function (c) { return !c.hasAttribute('hidden'); }).length;
      var counter = document.querySelector('[data-filter-count]');
      if (counter) counter.textContent = visible + ' / ' + cards.length;
    }

    rail.querySelectorAll('.chip').forEach(function (chip) {
      chip.addEventListener('click', function () {
        chip.classList.toggle('is-active');
        applyFilters();
      });
    });

    var clear = document.querySelector('[data-filter-clear]');
    if (clear) {
      clear.addEventListener('click', function (e) {
        e.preventDefault();
        rail.querySelectorAll('.chip.is-active').forEach(function (c) { c.classList.remove('is-active'); });
        applyFilters();
      });
    }

    applyFilters();
  }

  /* ---------- 5. View tabs (medicines.html A-Z / area / access) ---------- */
  function bindViewTabs() {
    var tabs = document.querySelectorAll('[data-view-tab]');
    if (!tabs.length) return;
    tabs.forEach(function (tab) {
      tab.addEventListener('click', function () {
        tabs.forEach(function (t) { t.classList.remove('is-active'); });
        tab.classList.add('is-active');
        var grouping = tab.getAttribute('data-view-tab');
        var grid = document.querySelector('[data-product-grid]');
        if (!grid) return;
        grid.setAttribute('data-grouping', grouping);
      });
    });
  }

  /* ---------- 6. PDP audience tabs ---------- */
  function bindAudienceTabs() {
    var tablists = document.querySelectorAll('[role="tablist"]');
    tablists.forEach(function (list) {
      var tabs = list.querySelectorAll('[role="tab"]');
      tabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
          tabs.forEach(function (t) {
            t.setAttribute('aria-selected', 'false');
          });
          tab.setAttribute('aria-selected', 'true');
          var target = tab.getAttribute('aria-controls');
          var panels = list.parentNode.querySelectorAll('.tab-panel');
          panels.forEach(function (p) {
            if (p.id === target) p.removeAttribute('hidden');
            else p.setAttribute('hidden', '');
          });
        });
      });
    });
  }

  /* ---------- 7. Adverse event form: pigment fields toggle ---------- */
  function bindAEForm() {
    var form = document.getElementById('ae-form');
    if (!form) return;

    var pigmentFs = form.querySelector('[data-pigment-fieldset]');
    form.querySelectorAll('input[name="pigment_status"]').forEach(function (r) {
      r.addEventListener('change', function () {
        if (r.value === 'carrier' && r.checked) pigmentFs && pigmentFs.removeAttribute('hidden');
        else if (r.checked) pigmentFs && pigmentFs.setAttribute('hidden', '');
      });
    });

    form.addEventListener('submit', function (e) {
      e.preventDefault();
      showToast('Adverse event report received — reference ' + makeRef());
      form.reset();
      pigmentFs && pigmentFs.setAttribute('hidden', '');
    });
  }

  /* ---------- 8. Generic forms (medical info, contact) ---------- */
  function bindGenericForms() {
    document.querySelectorAll('form[data-generic]').forEach(function (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault();
        showToast(form.getAttribute('data-success') || 'Submission received — reference ' + makeRef());
        form.reset();
      });
    });
  }

  /* ---------- 9. Restricted institutional inquiry ---------- */
  function bindRestrictedInquiry() {
    document.querySelectorAll('[data-restricted-inquiry]').forEach(function (btn) {
      btn.addEventListener('click', function (e) {
        e.preventDefault();
        var code = window.prompt('Authorized institutional inquiry\n\nProvide your institution authorization code:');
        if (code === null) return;
        if (code.trim().length < 4) {
          showToast('Authorization code not recognized — request denied.');
          return;
        }
        showToast('Inquiry queued — reference ' + makeRef() + '. A regulatory affairs officer will respond.');
      });
    });
  }

  /* ---------- 10. Toast ---------- */
  var toastTimer = null;
  function showToast(msg) {
    var t = document.getElementById('toast');
    if (!t) {
      t = document.createElement('div');
      t.id = 'toast';
      t.className = 'toast';
      document.body.appendChild(t);
    }
    t.textContent = msg;
    t.removeAttribute('hidden');
    if (toastTimer) clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { t.setAttribute('hidden', ''); }, 5200);
  }

  function makeRef() {
    var d = new Date();
    var yyyymmdd = d.getFullYear() + ('0' + (d.getMonth() + 1)).slice(-2) + ('0' + d.getDate()).slice(-2);
    var rand = Math.floor(Math.random() * 9000 + 1000);
    return 'ORD-' + yyyymmdd + '-' + rand;
  }

  /* ---------- Boot ---------- */
  document.addEventListener('DOMContentLoaded', function () {
    setActiveNav();
    bindHeaderShrink();
    bindGate();
    reflectGateInUI();
    bindCatalogFilters();
    bindViewTabs();
    bindAudienceTabs();
    bindAEForm();
    bindGenericForms();
    bindRestrictedInquiry();
  });
})();
