// Resource content data structure
const resources = {
    'im-overview': {
        title: 'Industrial Maintenance Overview',
        content: `
            <h2>Industrial Maintenance Overview</h2>
            <p>Our Industrial Maintenance Training range provides a comprehensive, hands-on approach to developing the skills required in modern industry. Designed for higher education and vocational training, this equipment enables learners to explore the maintenance of closed-loop systems, understand the fundamentals of PLC control, and gain practical experience with PLC controllers.</p>
            <p>By combining real-world hardware, including industry standard Siemens PLCs, with clear instructional resources, the range helps students bridge the gap between theory and practice—building confidence, competence, and career-ready expertise in industrial automation and maintenance.</p>
            <div class="document-link">
                <a href="https://www.matrixtsl.com/industrial-maintenance/" target="_blank" class="btn btn-info">🌐 View Industrial Maintenance Overview</a>
            </div>
        `
    },

    'im6930-overview': {
        title: 'IM6930 – Product Overview',
        content: `
            <h2>IM6930 – PLC Fundamentals Trainer</h2>
            <p>A hands-on PLC training platform built around a Siemens S7‑1214 PLC and 7" Unified Basic HMI. Teaches core control panel layout, industrial wiring standards, I/O interaction, and practical maintenance foundations.</p>
        `
    },
    'im6930-spec': {
        title: 'IM6930 – Specification',
        content: `
            <h2>IM6930 – PLC Fundamentals Trainer</h2>
            <p><strong>Product Code:</strong> IM6930 · <strong>Curriculum Code:</strong> CP2388 · <strong>Power:</strong> 24V</p>
            <p><strong>Size:</strong> L 514mm × W 466mm × D 250mm</p>
            <p>The PLC Fundamentals Trainer is a hands‑on training platform designed for learners new to industrial maintenance and automation. It provides a structured introduction to PLC‑controlled systems using real‑world components and industrial wiring standards. The system is built around a Siemens S7‑1214 PLC with a 7" Unified Basic HMI, giving learners a realistic interface for monitoring inputs and outputs in an automated process.</p>
            <div class="document-link">
                <a href="assets/documents/IM6930/spec.pdf" target="_blank" class="btn btn-primary">📄 Open Specification (PDF)</a>
            </div>
        `
    },
    'im6930-curriculum': {
        title: 'IM6930 – Curriculum',
        content: `
            <h2>IM6930 Curriculum (CP2388)</h2>
            <p>PLC Fundamentals for Maintenance Engineers curriculum provides structured learning activities focused on PLC basics, I/O, control logic, and maintenance diagnostics.</p>
            <div class="document-link">
                <a href="assets/documents/IM6930/curriculum.pdf" target="_blank" class="btn btn-success">📚 Open Curriculum (PDF)</a>
            </div>
        `
    },
    'im6930-teachers': {
        title: 'IM6930 – Teacher Notes',
        content: `
            <h2>IM6930 Teacher Notes</h2>
            <p>Instructor guidance to support delivery of CP2388 with lesson structure, expected outcomes, and assessment guidance.</p>
            <div class="document-link">
                <a href="assets/documents/IM6930/teachers-notes.pdf" target="_blank" class="btn btn-info">👨‍🏫 Open Teacher Notes (PDF)</a>
            </div>
        `
    },
    'im6930-manual': {
        title: 'IM6930 – User Manual',
        content: `
            <h2>IM6930 User Manual</h2>
            <p>Includes setup, safety, commissioning, operation, HMI guide, maintenance, troubleshooting, and teaching aids.</p>
            <ul>
                <li>System description & process overview</li>
                <li>Technical specifications & standards</li>
                <li>Commissioning / start‑up</li>
                <li>Maintenance & calibration</li>
                <li>Appendix: Electrical drawings & CE declaration</li>
            </ul>
            <div class="document-link">
                <a href="assets/documents/IM6930/user-manual.pdf" target="_blank" class="btn btn-warning">📖 Open User Manual (PDF)</a>
            </div>
        `
    },
    'im6930-resources': {
        title: 'IM6930 – Resource Pack',
        content: `
            <h2>IM6930 Resources</h2>
            <ul>
                <li><a href="assets/documents/IM6930/spec.pdf" target="_blank">Specification</a></li>
                <li><a href="assets/documents/IM6930/curriculum.pdf" target="_blank">Curriculum</a></li>
                <li><a href="assets/documents/IM6930/teachers-notes.pdf" target="_blank">Teacher Notes</a></li>
                <li><a href="assets/documents/IM6930/user-manual.pdf" target="_blank">User Manual</a></li>
            </ul>
        `
    },
    'im6930-sow': {
        title: 'IM6930 – Scheme of Work',
        content: `
            <h2>IM6930 Scheme of Work (CP2388)</h2>
            <p><strong>A scheme of work is a structured plan that breaks a subject into sequenced lessons over a set period.</strong> It outlines what is taught, in what order, and roughly how long each part takes. It includes learning objectives, topics, key activities, resources, and assessment points.</p>
            <h3>Suggested Delivery & Pacing (12 Weeks)</h3>
            <p><strong>Delivery modes:</strong> Discovery (learner investigation) and Guided (teacher‑led).</p>
            <ol>
                <li><strong>Week 1:</strong> Introduction & Safety — Introduction, Safety Note — <em>Discovery</em> (overview, system demo, safety briefing)</li>
                <li><strong>Week 2:</strong> Simple PLC Systems — Worksheet 1 — <em>Discovery</em> (push buttons, indicator LEDs)</li>
                <li><strong>Week 3:</strong> Complex PLC Systems — Worksheet 2 — <em>Discovery</em> (sequencing, latching, real‑world behaviour)</li>
                <li><strong>Week 4:</strong> HMIs — Worksheet 3 — <em>Guided</em> (HMI navigation, process control)</li>
                <li><strong>Week 5:</strong> Emergency Stops — Worksheet 4 — <em>Discovery</em> (E‑Stop, reset logic, safety systems)</li>
                <li><strong>Week 6:</strong> Status LED — Worksheet 5 — <em>Discovery</em> (fault/run states, system status)</li>
                <li><strong>Week 7:</strong> NO vs NC — Worksheet 6 — <em>Discovery</em> (contact types, diagnostics)</li>
                <li><strong>Week 8:</strong> Proximity Switch — Worksheet 7 — <em>Guided</em> (sensor setup, alignment, fault finding)</li>
                <li><strong>Week 9:</strong> Potentiometer — Worksheet 8 — <em>Discovery</em> (analogue input, scaling, live testing)</li>
                <li><strong>Week 10:</strong> Temperature Sensor — Worksheet 9 — <em>Discovery</em> (RTD, transmitter, sensor faults)</li>
                <li><strong>Week 11:</strong> Digital Outputs & Motor PWM — Worksheets 10–11 — <em>Discovery</em> (output mapping, PWM speed control)</li>
                <li><strong>Week 12:</strong> Relays & Review — Worksheet 12 + Assessment — <em>Discovery</em> (relay wiring, output switching, end‑of‑course review)</li>
            </ol>
            <h3>Assessments</h3>
            <ul>
                <li>Formative: worksheet completion + practical observations</li>
                <li>Summative: end‑of‑course review/assessment</li>
            </ul>
        `
    },

    'im0004-overview': {
        title: 'IM0004 – Product Overview',
        content: `
            <h2>IM0004 – Maintenance of Closed Loop Systems</h2>
            <p>A real-world flow control trainer for fault diagnosis, system behaviour analysis, and closed-loop troubleshooting. Includes Siemens S7‑1200 PLC, Unified Basic HMI, turbine flow sensor, proportional control valve, and industrial instrumentation.</p>
        `
    },
    'im0004-spec': {
        title: 'IM0004 – Specification',
        content: `
            <h2>IM0004 – Maintenance of Closed Loop Systems</h2>
            <p><strong>Product Code:</strong> IM0004 · <strong>Curriculum Code:</strong> CP0539 & CP6773 · <strong>Power:</strong> 24V</p>
            <p><strong>Dimensions:</strong> L 52cm × W 43.5cm × H 46.1cm</p>
            <p>The Industrial Maintenance Closed Loop PID Control System is a hands‑on training solution designed to teach fault diagnosis, system behaviour analysis, and component‑level troubleshooting in a real‑world flow control environment.</p>
            <p>Key hardware includes Siemens S7‑1200 PLC, Unified Basic HMI, turbine flow sensor, proportional control valve, analogue flow gauge, IFM temperature sensor, float switches, and a proximity sensor.</p>
            <div class="document-link">
                <a href="assets/documents/IM0004/spec.pdf" target="_blank" class="btn btn-primary">📄 Open Specification (PDF)</a>
            </div>
        `
    },
    'im0004-curriculum': {
        title: 'IM0004 – Curriculum',
        content: `
            <h2>IM0004 Curriculum (CP0539 / CP6773)</h2>
            <p>Curriculum focuses on closed‑loop control, troubleshooting, fault‑finding, and system behaviour analysis using real industrial instrumentation.</p>
            <div class="document-link">
                <a href="assets/documents/IM0004/curriculum.pdf" target="_blank" class="btn btn-success">📚 Open Curriculum (PDF)</a>
            </div>
        `
    },
    'im0004-teachers': {
        title: 'IM0004 – Teacher Notes',
        content: `
            <h2>IM0004 Teacher Notes</h2>
            <p>Instructor notes covering CP0539 and CP6773 with delivery structure, expected outcomes, and assessment guidance.</p>
            <div class="document-link">
                <a href="assets/documents/IM0004/teachers-notes.pdf" target="_blank" class="btn btn-info">👨‍🏫 Open Teacher Notes (PDF)</a>
            </div>
        `
    },
    'im0004-manual': {
        title: 'IM0004 – User Manual',
        content: `
            <h2>IM0004 User Manual</h2>
            <p>Includes setup, safety, commissioning, operation, HMI guide, maintenance, troubleshooting, and teaching aids.</p>
            <ul>
                <li>System description & process overview</li>
                <li>Technical specifications & standards</li>
                <li>Commissioning / start‑up</li>
                <li>Maintenance & calibration</li>
                <li>Appendix: Electrical drawings & CE declaration</li>
            </ul>
            <div class="document-link">
                <a href="assets/documents/IM0004/user-manual.pdf" target="_blank" class="btn btn-warning">📖 Open User Manual (PDF)</a>
            </div>
        `
    },
    'im0004-resources': {
        title: 'IM0004 – Resource Pack',
        content: `
            <h2>IM0004 Resources</h2>
            <ul>
                <li><a href="assets/documents/IM0004/spec.pdf" target="_blank">Specification</a></li>
                <li><a href="assets/documents/IM0004/curriculum.pdf" target="_blank">Curriculum</a></li>
                <li><a href="assets/documents/IM0004/teachers-notes.pdf" target="_blank">Teacher Notes</a></li>
                <li><a href="assets/documents/IM0004/user-manual.pdf" target="_blank">User Manual</a></li>
            </ul>
        `
    },
    'im0004-sow': {
        title: 'IM0004 – Scheme of Work',
        content: `
            <h2>IM0004 Scheme of Work</h2>
            <p><strong>A scheme of work is a structured plan that breaks a subject into sequenced lessons over a set period.</strong> It outlines what is taught, in what order, and roughly how long each part takes. It includes learning objectives, topics, key activities, resources, and assessment points.</p>
            <h3>Suggested 8‑Week Structure (CP0539 / CP6773)</h3>
            <ul>
                <li><strong>Weeks 1–2:</strong> Closed‑loop concepts, sensors, system overview</li>
                <li><strong>Weeks 3–4:</strong> Flow control, PID behaviour, instrumentation</li>
                <li><strong>Weeks 5–6:</strong> Fault simulation, troubleshooting, diagnostics</li>
                <li><strong>Weeks 7–8:</strong> Commissioning, reporting, assessment</li>
            </ul>
            <h3>Assessments</h3>
            <ul>
                <li>Formative: practical tasks + reflection logs</li>
                <li>Summative: fault‑finding assessment</li>
            </ul>
        `
    },

    'im3214-overview': {
        title: 'IM3214 – Product Overview',
        content: `
            <h2>IM3214 – Siemens PLC LOGO! Trainer</h2>
            <p>Compact Siemens LOGO! PLC training module on Locktronics platform. Supports wired/wireless programming, I/O logic control, and hands-on PLC fundamentals for maintenance learners.</p>
        `
    },
    'im3214-spec': {
        title: 'IM3214 – Specification',
        content: `
            <h2>IM3214 – Siemens PLC LOGO! Module</h2>
            <p><strong>Product Code:</strong> IM3214 · <strong>Weight:</strong> 1.5kg</p>
            <p><strong>Dimensions:</strong> L 32cm × W 90cm × H 10cm</p>
            <p>The Siemens PLC LOGO! Module introduces learners to core concepts in industrial automation and programmable control in a compact, self‑contained system. Built around the Siemens LOGO! PLC and Locktronics platform, it supports hands‑on exploration of PLC programming, control logic, and real‑world I/O systems. Supports wired and wireless connectivity with program upload via MicroSD.</p>
            <div class="document-link">
                <a href="assets/documents/IM3214/spec.pdf" target="_blank" class="btn btn-primary">📄 Open Specification (PDF)</a>
            </div>
        `
    },
    'im3214-curriculum': {
        title: 'IM3214 – Worksheets',
        content: `
            <h2>IM3214 Worksheets (CP6211)</h2>
            <p>Sense & Control worksheets focused on PLC fundamentals, logic control, and I/O troubleshooting using the LOGO! platform.</p>
            <div class="document-link">
                <a href="assets/documents/IM3214/curriculum.pdf" target="_blank" class="btn btn-success">📚 Open Worksheets (PDF)</a>
            </div>
        `
    },
    'im3214-teachers': {
        title: 'IM3214 – Instructor Guide',
        content: `
            <h2>IM3214 Instructor Guide</h2>
            <p>Instructor guide for CP6211 with structured teaching support and delivery guidance.</p>
            <div class="document-link">
                <a href="assets/documents/IM3214/teachers-guide.pdf" target="_blank" class="btn btn-info">👨‍🏫 Open Instructor Guide (PDF)</a>
            </div>
        `
    },
    'im3214-manual': {
        title: 'IM3214 – User Manual',
        content: `
            <h2>IM3214 User Manual</h2>
            <p>Manual includes LOGO! module usage, parameter specification, program transfer, analogue inputs, and version control.</p>
            <div class="document-link">
                <a href="assets/documents/IM3214/user-manual.pdf" target="_blank" class="btn btn-warning">📖 Open User Manual (PDF)</a>
            </div>
        `
    },
    'im3214-resources': {
        title: 'IM3214 – Resource Pack',
        content: `
            <h2>IM3214 Resources</h2>
            <ul>
                <li><a href="assets/documents/IM3214/spec.pdf" target="_blank">Specification</a></li>
                <li><a href="assets/documents/IM3214/curriculum.pdf" target="_blank">Worksheets</a></li>
                <li><a href="assets/documents/IM3214/teachers-guide.pdf" target="_blank">Instructor Guide</a></li>
                <li><a href="assets/documents/IM3214/user-manual.pdf" target="_blank">User Manual</a></li>
            </ul>
        `
    },
    'im3214-sow': {
        title: 'IM3214 – Scheme of Work',
        content: `
            <h2>IM3214 Scheme of Work</h2>
            <p><strong>A scheme of work is a structured plan that breaks a subject into sequenced lessons over a set period.</strong> It outlines what is taught, in what order, and roughly how long each part takes. It includes learning objectives, topics, key activities, resources, and assessment points.</p>
            <h3>Suggested 6‑Week Structure (CP6211)</h3>
            <ul>
                <li><strong>Weeks 1–2:</strong> LOGO! PLC basics, I/O, wiring and safety</li>
                <li><strong>Weeks 3–4:</strong> Logic control, timers, counters, outputs</li>
                <li><strong>Weeks 5–6:</strong> Fault finding, optimisation, mini‑project</li>
            </ul>
            <h3>Assessments</h3>
            <ul>
                <li>Formative: worksheets + practical checks</li>
                <li>Summative: working LOGO! control sequence</li>
            </ul>
        `
    }
};

// Open resource in modal
function openResource(resourceKey) {
    const modal = document.getElementById('resourceModal');
    const modalBody = document.getElementById('modalBody');

    const resource = resources[resourceKey];

    if (resource) {
        modalBody.innerHTML = `
            <h1>${resource.title}</h1>
            <p class="modal-note">Quick summary below. Download the PDF for full detail.</p>
            ${resource.content}
        `;
        showModal();
    } else {
        alert('Resource coming soon!');
    }
}

function showModal() {
    const modal = document.getElementById('resourceModal');
    lastModalOpenTs = performance.now();
    console.log('[MODAL_SHOW]', {
        display: modal.style.display,
        visibility: modal.style.visibility,
        pointerEvents: modal.style.pointerEvents,
        zIndex: getComputedStyle(modal).zIndex
    });
    modal.style.display = 'flex';
    modal.style.pointerEvents = 'auto';
    modal.style.visibility = 'visible';
    modal.style.opacity = '1';
    document.body.style.overflow = 'hidden';
}

function hideModal() {
    const modal = document.getElementById('resourceModal');
    console.log('[MODAL_HIDE]');
    modal.style.display = 'none';
    modal.style.pointerEvents = 'none';
    modal.style.visibility = 'hidden';
    modal.style.opacity = '0';
    document.body.style.overflow = 'auto';
}

// Close modal
function closeModal() {
    hideModal();
}

// Stop clicks inside modal content from closing it
const modalContentEl = document.querySelector('#resourceModal .modal-content');
if (modalContentEl) {
    modalContentEl.addEventListener('click', function(event) {
        event.stopPropagation();
    });
}

let lastModalOpenTs = 0;

// Global click handler for tiles (resources, downloads, external links)
document.addEventListener('click', function(event) {
    const tile = event.target.closest('.tile[data-resource], .tile[data-download], .tile[data-link]');
    console.log('[CLICK]', {
        target: event.target.tagName,
        class: event.target.className,
        hasTile: !!tile,
        resource: tile?.dataset?.resource,
        download: tile?.dataset?.download,
        link: tile?.dataset?.link,
        x: event.clientX,
        y: event.clientY
    });

    if (!tile) return;

    event.stopPropagation();

    if (tile.dataset.resource) {
        console.log('[OPEN_RESOURCE]', tile.dataset.resource);
        openResource(tile.dataset.resource);
    } else if (tile.dataset.download) {
        console.log('[DOWNLOAD_TIA]');
        downloadTiaPortal();
    } else if (tile.dataset.link) {
        console.log('[OPEN_LINK]', tile.dataset.link);
        window.open(tile.dataset.link, '_blank', 'noopener');
    }
});

// Close modal when clicking outside
window.addEventListener('click', function(event) {
    const modal = document.getElementById('resourceModal');
    if (event.target === modal) {
        // Avoid closing immediately after opening (desktop click bubble)
        const sinceOpen = performance.now() - lastModalOpenTs;
        if (sinceOpen < 150) {
            console.log('[MODAL_OVERLAY_CLICK_IGNORED]', sinceOpen);
            return;
        }
        console.log('[MODAL_OVERLAY_CLICK]');
        closeModal();
    }
});

// Keyboard shortcuts
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closeModal();
    }
});

// Add tile animations on scroll
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Initialize tile animations (called after login)
function initializeTileAnimations() {
    // Staggered tile reveal animation
    document.querySelectorAll('.tile').forEach((tile, index) => {
        tile.style.opacity = '0';
        tile.style.transform = 'translateY(40px) scale(0.9)';
        tile.style.transition = 'opacity 0.8s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)';

        // Staggered delay for each tile
        setTimeout(() => {
            tile.style.opacity = '1';
            tile.style.transform = 'translateY(0) scale(1)';
        }, 200 + (index * 150));

        observer.observe(tile);
    });

    // Log with style
    console.log('%c🏫 Industrial Maintenance Teachers Portal', 'color: #4fb6e3; font-size: 22px; font-weight: bold; font-family: "Sora", sans-serif;');
    console.log('%cDark Professional Theme Active', 'color: #d4a574; font-size: 13px; font-family: "Sora", sans-serif;');
    console.log('%c✨ Modern • Professional • Accessible', 'color: #b7c0cd; font-size: 11px; font-family: "Outfit", sans-serif;');
}
