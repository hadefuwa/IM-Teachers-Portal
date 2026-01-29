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
    // Observe all tiles
    document.querySelectorAll('.tile').forEach(tile => {
        tile.style.opacity = '0';
        tile.style.transform = 'translateY(20px)';
        tile.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(tile);
    });
    
    console.log('Smart Factory Teachers Portal loaded successfully! 🏭');
});
