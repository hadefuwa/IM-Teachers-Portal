// Resource content data structure
const resources = {
    'specification': {
        title: 'Smart Factory Specification Document',
        content: `
            <h2>Smart Factory Technical Specification</h2>
            <p>This document will contain the complete technical specifications for the Smart Factory system.</p>
            
            <h3>System Overview</h3>
            <ul>
                <li>Siemens S7-1200 PLC Integration</li>
                <li>Industrial Sensors and Actuators</li>
                <li>HMI Touch Panel Interface</li>
                <li>SCADA System Integration</li>
            </ul>
            
            <h3>Learning Outcomes</h3>
            <ul>
                <li>Understanding of Industry 4.0 concepts</li>
                <li>PLC programming fundamentals</li>
                <li>Process automation principles</li>
                <li>Industrial networking basics</li>
            </ul>
            
            <div class="document-link">
                <a href="assets/documents/specification.pdf" target="_blank" class="btn btn-primary">
                    📄 Download Full Specification (PDF)
                </a>
            </div>
        `
    },
    'curriculum': {
        title: 'Smart Factory Curriculum',
        content: `
            <h2>Curriculum Structure</h2>
            
            <h3>Module 1: Introduction to Smart Manufacturing</h3>
            <ul>
                <li>Week 1-2: Industry 4.0 Overview</li>
                <li>Week 3-4: Manufacturing Automation Basics</li>
            </ul>
            
            <h3>Module 2: PLC Fundamentals</h3>
            <ul>
                <li>Week 5-6: Introduction to Siemens TIA Portal</li>
                <li>Week 7-8: Ladder Logic Programming</li>
                <li>Week 9-10: Function Blocks and Data Types</li>
            </ul>
            
            <h3>Module 3: Smart Factory Integration</h3>
            <ul>
                <li>Week 11-12: Sensor Integration</li>
                <li>Week 13-14: HMI Development</li>
                <li>Week 15-16: System Testing and Commissioning</li>
            </ul>
            
            <div class="document-link">
                <a href="assets/documents/curriculum.pdf" target="_blank" class="btn btn-success">
                    📚 Download Full Curriculum (PDF)
                </a>
            </div>
        `
    },
    'teachers-guide': {
        title: 'Teachers Guide',
        content: `
            <h2>Teaching the Smart Factory Course</h2>
            
            <h3>Getting Started</h3>
            <p>This guide provides comprehensive support for delivering the Smart Factory curriculum.</p>
            
            <h3>Lesson Planning</h3>
            <ul>
                <li>Pre-lesson preparation checklist</li>
                <li>Required materials and equipment</li>
                <li>Estimated time allocation</li>
                <li>Learning objectives and outcomes</li>
            </ul>
            
            <h3>Teaching Tips</h3>
            <ul>
                <li>Start with hands-on demonstrations</li>
                <li>Encourage problem-solving approaches</li>
                <li>Use real-world industrial examples</li>
                <li>Facilitate peer collaboration</li>
            </ul>
            
            <h3>Assessment Strategies</h3>
            <ul>
                <li>Practical skills evaluation</li>
                <li>Project-based assessments</li>
                <li>Written knowledge tests</li>
                <li>Portfolio development</li>
            </ul>
            
            <div class="document-link">
                <a href="assets/documents/teachers-guide.pdf" target="_blank" class="btn btn-info">
                    👨‍🏫 Download Teachers Guide (PDF)
                </a>
            </div>
        `
    },
    'user-manual': {
        title: 'Smart Factory User Manual',
        content: `
            <h2>User Manual</h2>
            
            <h3>System Setup</h3>
            <ol>
                <li>Power up the PLC unit</li>
                <li>Connect to the HMI panel</li>
                <li>Launch TIA Portal software</li>
                <li>Load the project file</li>
            </ol>
            
            <h3>Operating Instructions</h3>
            <p>Step-by-step guide for operating the Smart Factory system.</p>
            
            <h3>Safety Procedures</h3>
            <ul>
                <li>Always use emergency stop when needed</li>
                <li>Follow lockout/tagout procedures</li>
                <li>Wear appropriate PPE</li>
                <li>Keep work area clean and organized</li>
            </ul>
            
            <h3>Troubleshooting</h3>
            <ul>
                <li>PLC communication errors</li>
                <li>Sensor calibration issues</li>
                <li>HMI display problems</li>
                <li>Network connectivity</li>
            </ul>
            
            <div class="document-link">
                <a href="assets/documents/user-manual.pdf" target="_blank" class="btn btn-warning">
                    📖 Download User Manual (PDF)
                </a>
            </div>
        `
    },
    'quick-start': {
        title: 'Quick Start Guide',
        content: `
            <h2>Quick Start Guide</h2>
            
            <h3>Get Up and Running in 5 Steps</h3>
            
            <div class="quick-step">
                <h4>1️⃣ Download TIA Portal Project</h4>
                <p>Click the "TIA Portal Project" tile and download the complete project files.</p>
            </div>
            
            <div class="quick-step">
                <h4>2️⃣ Review Curriculum</h4>
                <p>Familiarize yourself with the course structure and learning outcomes.</p>
            </div>
            
            <div class="quick-step">
                <h4>3️⃣ Read Teachers Guide</h4>
                <p>Understand the teaching methodology and assessment strategies.</p>
            </div>
            
            <div class="quick-step">
                <h4>4️⃣ Set Up Hardware</h4>
                <p>Follow the user manual to configure the Smart Factory system.</p>
            </div>
            
            <div class="quick-step">
                <h4>5️⃣ Start Teaching!</h4>
                <p>Begin with Module 1 and follow the structured curriculum.</p>
            </div>
            
            <style>
                .quick-step {
                    background: #f8fafc;
                    padding: 1.5rem;
                    margin: 1rem 0;
                    border-radius: 8px;
                    border-left: 4px solid #2563eb;
                }
                .quick-step h4 {
                    margin-bottom: 0.5rem;
                    color: #1e293b;
                }
            </style>
        `
    },
    'support': {
        title: 'Support',
        content: `
            <h2>Technical Support</h2>
            
            <h3>Contact Information</h3>
            <p><strong>Email:</strong> support@matrixtsl.com</p>
            <p><strong>Phone:</strong> +44 (0) 1234 567890</p>
            
            <h3>Support Hours</h3>
            <p>Monday - Friday: 9:00 AM - 5:00 PM GMT</p>
            
            <h3>Resources</h3>
            <ul>
                <li>Online Knowledge Base</li>
                <li>Video Tutorials</li>
                <li>Community Forum</li>
                <li>Live Chat Support</li>
            </ul>
        `
    },
    'contact': {
        title: 'Contact Us',
        content: `
            <h2>Get in Touch</h2>
            
            <p><strong>Matrix Technology Solutions</strong></p>
            <p>Address: [Your Address Here]</p>
            <p>Email: info@matrixtsl.com</p>
            <p>Phone: +44 (0) 1234 567890</p>
            
            <h3>Follow Us</h3>
            <p>Stay updated with the latest developments and resources.</p>
        `
    },
    'about': {
        title: 'About Smart Factory',
        content: `
            <h2>About the Smart Factory Teachers Portal</h2>
            
            <p>The Smart Factory Teachers Portal is a comprehensive resource hub designed to support 
            educators in delivering high-quality Industry 4.0 and automation education.</p>
            
            <h3>Our Mission</h3>
            <p>To empower teachers with the tools, resources, and knowledge needed to prepare 
            students for careers in modern manufacturing and industrial automation.</p>
            
            <h3>Key Features</h3>
            <ul>
                <li>Complete curriculum materials</li>
                <li>Ready-to-use TIA Portal projects</li>
                <li>Comprehensive teaching guides</li>
                <li>Technical documentation</li>
                <li>Ongoing support and updates</li>
            </ul>
        `
    },
    'videos': {
        title: 'Video Tutorials & Demonstrations',
        content: `
            <h2>Smart Factory Video Library</h2>
            
            <p>Explore our comprehensive collection of video tutorials, demonstrations, and guides for the Smart Factory system.</p>
            
            <h3>📹 Getting Started Series</h3>
            <div class="video-section">
                <div class="video-placeholder">
                    <p><strong>Introduction to Smart Factory</strong></p>
                    <p>Overview of the system components and capabilities</p>
                    <a href="https://www.matrixtsl.com/webshop/smart-factory/" target="_blank" class="btn btn-video">
                        🎬 Watch on Matrix TSL
                    </a>
                </div>
            </div>
            
            <h3>🔧 Setup & Configuration</h3>
            <div class="video-section">
                <div class="video-placeholder">
                    <p><strong>Hardware Setup Guide</strong></p>
                    <p>Step-by-step hardware assembly and connection</p>
                </div>
                <div class="video-placeholder">
                    <p><strong>TIA Portal Configuration</strong></p>
                    <p>Configuring your PLC and HMI system</p>
                </div>
            </div>
            
            <h3>💡 Programming Tutorials</h3>
            <div class="video-section">
                <div class="video-placeholder">
                    <p><strong>Ladder Logic Basics</strong></p>
                    <p>Introduction to PLC programming</p>
                </div>
                <div class="video-placeholder">
                    <p><strong>Conveyor System Control</strong></p>
                    <p>Programming the conveyor belt system</p>
                </div>
                <div class="video-placeholder">
                    <p><strong>Pick & Place Operations</strong></p>
                    <p>Programming the pneumatic and stepper systems</p>
                </div>
            </div>
            
            <h3>🎓 Lesson Examples</h3>
            <div class="video-section">
                <div class="video-placeholder">
                    <p><strong>Sample Lesson Delivery</strong></p>
                    <p>Watch experienced teachers demonstrate lesson delivery</p>
                </div>
            </div>
            
            <div class="document-link">
                <a href="https://www.matrixtsl.com/webshop/smart-factory/" target="_blank" class="btn btn-primary">
                    🌐 Visit Matrix TSL for More Resources
                </a>
            </div>
            
            <style>
                .video-section {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 1.5rem;
                    margin: 1.5rem 0 2rem 0;
                }
                .video-placeholder {
                    background: linear-gradient(135deg, 
                        rgba(52, 152, 219, 0.05) 0%, 
                        rgba(212, 165, 116, 0.05) 100%);
                    border: 2px dashed rgba(52, 152, 219, 0.3);
                    border-radius: 12px;
                    padding: 1.5rem;
                    text-align: center;
                    transition: all 0.3s ease;
                }
                .video-placeholder:hover {
                    border-color: rgba(52, 152, 219, 0.6);
                    background: linear-gradient(135deg, 
                        rgba(52, 152, 219, 0.1) 0%, 
                        rgba(212, 165, 116, 0.1) 100%);
                    transform: translateY(-4px);
                }
                .video-placeholder p {
                    margin-bottom: 0.5rem;
                }
                .video-placeholder strong {
                    color: var(--primary-navy);
                    font-size: 1.05rem;
                }
                .video-placeholder .btn {
                    margin-top: 1rem;
                    padding: 0.75rem 1.5rem;
                    font-size: 0.9rem;
                }
            </style>
        `
    },
    'overview': {
        title: 'Smart Factory System Overview',
        content: `
            <h2>Smart Factory Technical Overview</h2>
            
            <div class="overview-images">
                <img src="assets/images/smart-factory-render1.png" alt="Smart Factory Render 1" class="overview-img">
                <img src="assets/images/smart-factory-render2.png" alt="Smart Factory Render 2" class="overview-img">
            </div>
            
            <p>The Smart Factory is a comprehensive Industry 4.0 educational platform that provides 
            hands-on experience with modern manufacturing automation systems.</p>
            
            <style>
                .overview-images {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
                    gap: 1.5rem;
                    margin: 2rem 0;
                }
                .overview-img {
                    width: 100%;
                    height: auto;
                    border-radius: 12px;
                    box-shadow: 0 4px 16px rgba(26, 43, 74, 0.15);
                    transition: all 0.3s ease;
                }
                .overview-img:hover {
                    transform: scale(1.05);
                    box-shadow: 0 8px 24px rgba(52, 152, 219, 0.3);
                }
            </style>
            
            <h3>🏭 System Description</h3>
            <p>Students gain understanding of conveyor systems, sensing systems, pneumatic pick and place 
            technology, DC motor drives, and stepper motor drives. The factory includes a number of coloured 
            discs made from plastic and other materials. A conveyor belt moves these pieces into the factory, 
            where user programmed sensors sort the discs into multiple rejection bins. Some are picked off 
            the conveyor by a suction device and a stepper motor-controlled gantry sorts the discs into 
            appropriately coloured containers.</p>
            
            <h3>📦 Key Components</h3>
            <ul>
                <li><strong>Conveyor System:</strong> Variable speed belt transport system</li>
                <li><strong>Sensing Systems:</strong> Color detection, position sensors</li>
                <li><strong>Pneumatic Pick & Place:</strong> Vacuum suction technology</li>
                <li><strong>Stepper Motor Gantry:</strong> Precise positioning control</li>
                <li><strong>DC Motor Drives:</strong> Conveyor belt control</li>
                <li><strong>Sorting System:</strong> Multiple rejection bins with programmable logic</li>
            </ul>
            
            <h3>🎯 Learning Objectives</h3>
            <ul>
                <li>Factory control and automation systems</li>
                <li>Software design for automation</li>
                <li>DC motor and stepper drives</li>
                <li>Conveyor and gantry systems</li>
                <li>Vacuum pick and place systems</li>
                <li>Component sensing and sorting</li>
                <li>System design with more than one controller</li>
            </ul>
            
            <h3>💻 Smart Software Integration</h3>
            <p>The Smart Factory can be used with our <strong>Siemens S7 PLC with HMI and 4mm Connectors</strong>. 
            As a Siemens education partner, we can also provide you with software to control these upon request.</p>
            
            <h3>🤝 Industry 4.0 Compatibility</h3>
            <p>The Smart Factory is compatible with the <strong>AllCode robot arm production cell</strong>, 
            which can be added to provide a powerful and interesting Industry 4.0 solution.</p>
            
            <h3>📏 Compact Design</h3>
            <p>The smart factory is <strong>completely self-contained</strong> and can be stored away in 
            one of our standard trays, making it perfect for educational environments with limited space.</p>
            
            <div class="document-link">
                <a href="https://www.matrixtsl.com/webshop/smart-factory/" target="_blank" class="btn btn-info">
                    🌐 View Full Product Details on Matrix TSL
                </a>
            </div>
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
            ${resource.content}
        `;
        modal.style.display = 'block';
        
        // Prevent body scroll when modal is open
        document.body.style.overflow = 'hidden';
    } else {
        alert('Resource coming soon!');
    }
}

// Close modal
function closeModal() {
    const modal = document.getElementById('resourceModal');
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Download TIA Portal project
function downloadTiaPortal() {
    // Check if file exists, otherwise show info modal
    const modal = document.getElementById('resourceModal');
    const modalBody = document.getElementById('modalBody');
    
    modalBody.innerHTML = `
        <h1>📥 TIA Portal Project Download</h1>
        
        <h2>Smart Factory PLC Project</h2>
        <p>This package includes:</p>
        <ul>
            <li>Complete TIA Portal V17/V18 project files</li>
            <li>Pre-configured PLC program</li>
            <li>HMI screens and graphics</li>
            <li>Tag definitions and data blocks</li>
            <li>Installation instructions</li>
        </ul>
        
        <h3>System Requirements</h3>
        <ul>
            <li>TIA Portal V17 or newer</li>
            <li>Windows 10/11 (64-bit)</li>
            <li>8GB RAM minimum (16GB recommended)</li>
            <li>10GB free disk space</li>
        </ul>
        
        <div class="document-link" style="margin-top: 2rem;">
            <a href="assets/downloads/smart-factory-tia-portal.zip" class="btn btn-download" 
               onclick="initiateDownload(event)">
                ⬇️ Download TIA Portal Project (ZIP)
            </a>
            <p style="margin-top: 1rem; color: #64748b; font-size: 0.9rem;">
                File size: ~250MB | Last updated: January 2026
            </p>
        </div>
    `;
    
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

// Initiate download (placeholder function)
function initiateDownload(event) {
    // This would trigger the actual download
    // For now, show a message
    event.preventDefault();
    alert('Download will begin shortly. Please ensure the TIA Portal project file is uploaded to the assets/downloads/ folder.');
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('resourceModal');
    if (event.target === modal) {
        closeModal();
    }
}

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

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
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
    console.log('%c🏫 Smart Factory Teachers Portal', 'color: #3498db; font-size: 22px; font-weight: bold; font-family: "Sora", sans-serif;');
    console.log('%cBusiness Education Design System Active', 'color: #d4a574; font-size: 13px; font-family: "Sora", sans-serif;');
    console.log('%c✨ Professional • Elegant • Dynamic', 'color: #2c3e50; font-size: 11px; font-family: "Outfit", sans-serif;');
});
